/**
 * Tauri-aware clipboard abstraction.
 *
 * On the desktop (Tauri) build text is written via @tauri-apps/plugin-clipboard-manager
 * which uses the OS clipboard API directly and does not require the webview window
 * to hold focus.  In the browser build the standard navigator.clipboard API is
 * used unchanged so the web version is completely unaffected.
 *
 * Usage:
 *   await writeTextToClipboard('hello');
 */

import { isTauri } from './fileIO';

/**
 * Write `text` to the system clipboard.
 *
 * Resolves when the write is complete.  On failure the promise rejects with
 * the underlying error from either the Tauri plugin or the browser API.
 */
export async function writeTextToClipboard(text: string): Promise<void> {
  if (isTauri()) {
    const { writeText } = await import('@tauri-apps/plugin-clipboard-manager');
    await writeText(text);
  } else {
    await navigator.clipboard.writeText(text);
  }
}
