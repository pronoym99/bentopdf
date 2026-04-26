/**
 * Tauri-aware preferences abstraction.
 *
 * On the desktop (Tauri) build preferences are persisted to a JSON file in the
 * app-data directory via @tauri-apps/plugin-store so they survive webview
 * storage clears.  In the browser build everything falls back to localStorage
 * so the web version continues to work unchanged.
 *
 * Usage:
 *   // Once, as early as possible in the async init path:
 *   await initPreferences();
 *
 *   // Read (synchronous – safe after init):
 *   const val = getPreference('myKey', 'defaultValue');
 *
 *   // Write (fire-and-forget persist):
 *   setPreference('myKey', 'newValue');
 */

import { isTauri } from './fileIO';

const STORE_FILE = 'preferences.json';

type StoreInstance = import('@tauri-apps/plugin-store').Store;

let _store: StoreInstance | null = null;

/** In-memory cache used by getPreference() for instant synchronous reads. */
const _cache: Record<string, string> = {};

async function getStore(): Promise<StoreInstance> {
  if (!_store) {
    const { Store } = await import('@tauri-apps/plugin-store');
    _store = await Store.load(STORE_FILE, { autoSave: true, defaults: {} });
  }
  return _store;
}

/**
 * Initialise the preferences cache.  Must be awaited once at application
 * start-up before any call to getPreference().
 *
 * In Tauri context:
 *   1. Loads all persisted key/value pairs from the store into the cache.
 *   2. Migrates any matching localStorage keys that were written before this
 *      module was introduced, then removes them from localStorage so they are
 *      no longer at risk of being wiped.
 *
 * In browser context this is a no-op – localStorage is read directly by
 * getPreference() / setPreference().
 */
export async function initPreferences(): Promise<void> {
  if (!isTauri()) return;

  try {
    const store = await getStore();

    // Populate cache from persisted store
    const entries = await store.entries<string>();
    for (const [key, value] of entries) {
      if (typeof value === 'string') {
        _cache[key] = value;
      }
    }

    // One-time migration: move any existing localStorage values into the store
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key === null) continue;
      // Only migrate application-level preference keys (skip pdfjs.* etc.)
      if (key.startsWith('pdfjs')) continue;
      const existing = localStorage.getItem(key);
      if (existing === null) continue;
      // Only write to store if the key isn't already there
      if (!(key in _cache)) {
        _cache[key] = existing;
        await store.set(key, existing);
      }
    }
  } catch (e) {
    console.warn('[preferences] Failed to initialise Tauri store:', e);
  }
}

/**
 * Read a preference value synchronously.
 *
 * Returns `fallback` when the key is not set.  In Tauri context reads from the
 * in-memory cache (populated by initPreferences).  In browser context reads
 * directly from localStorage.
 */
export function getPreference(key: string, fallback: string | null = null): string | null {
  if (isTauri()) {
    return key in _cache ? _cache[key] : fallback;
  }
  const val = localStorage.getItem(key);
  return val !== null ? val : fallback;
}

/**
 * Write a preference value.
 *
 * In Tauri context the update is written to the in-memory cache immediately
 * (so getPreference() reflects it at once) and persisted to the store
 * asynchronously.  In browser context localStorage is updated synchronously.
 */
export function setPreference(key: string, value: string): void {
  if (isTauri()) {
    _cache[key] = value;
    getStore()
      .then((s) => s.set(key, value))
      .catch((e) => console.warn('[preferences] Failed to persist key', key, e));
  } else {
    localStorage.setItem(key, value);
  }
}
