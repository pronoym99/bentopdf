/**
 * Tauri-aware file I/O abstraction.
 *
 * In a Tauri desktop build:
 *   - openFile()    → @tauri-apps/plugin-dialog open() + plugin-fs readFile()
 *   - saveFile()    → @tauri-apps/plugin-dialog save() + plugin-fs writeFile()
 *   - isDragDropFile() / onNativeDrop() → Tauri drag-drop events
 *
 * In a browser build every function falls back to standard web APIs so
 * the web version continues working unchanged.
 */

// ---------------------------------------------------------------------------
// Detection
// ---------------------------------------------------------------------------

/** Returns true when running inside a Tauri desktop window. */
export function isTauri(): boolean {
  return typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window;
}

// ---------------------------------------------------------------------------
// Open file (read)
// ---------------------------------------------------------------------------

export interface OpenFileOptions {
  /** MIME types or file extensions. e.g. ['application/pdf', '.pdf'] */
  accept?: string[];
  /** Allow selecting multiple files. */
  multiple?: boolean;
  /** Dialog title (desktop only). */
  title?: string;
}

export interface NativeFile {
  name: string;
  bytes: Uint8Array;
  /** Original File object (browser only — undefined in Tauri). */
  file?: File;
}

/**
 * Opens a native file-picker dialog and returns the selected file(s) as
 * `NativeFile` objects containing the raw bytes.
 *
 * Returns an empty array when the user cancels.
 */
export async function openFiles(opts: OpenFileOptions = {}): Promise<NativeFile[]> {
  if (isTauri()) {
    return _tauriOpenFiles(opts);
  }
  return _browserOpenFiles(opts);
}

/** Convenience wrapper for single-file selection. */
export async function openFile(opts: OpenFileOptions = {}): Promise<NativeFile | null> {
  const files = await openFiles({ ...opts, multiple: false });
  return files[0] ?? null;
}

// ---------------------------------------------------------------------------
// Save file (write)
// ---------------------------------------------------------------------------

export interface SaveFileOptions {
  /** Suggested filename shown in the save dialog. */
  defaultName?: string;
  /** File type filters (desktop only). */
  filters?: Array<{ name: string; extensions: string[] }>;
}

/**
 * Saves a Blob/Uint8Array to disk using a native save dialog on Tauri
 * or the browser's download trick on the web.
 */
export async function saveFile(
  data: Blob | Uint8Array,
  opts: SaveFileOptions = {}
): Promise<void> {
  if (isTauri()) {
    await _tauriSaveFile(data, opts);
  } else {
    _browserSaveFile(data, opts);
  }
}

// ---------------------------------------------------------------------------
// Native drag-drop (Tauri only)
// ---------------------------------------------------------------------------

export type NativeDropHandler = (files: NativeFile[]) => void;

/**
 * Registers a listener for Tauri's native drag-drop events on a DOM element.
 * On the web this does nothing (use standard `dragover`/`drop` events instead).
 *
 * Returns an unsubscribe function.
 */
export async function onNativeDrop(
  _element: HTMLElement,
  _handler: NativeDropHandler
): Promise<() => void> {
  if (!isTauri()) return () => {};

  try {
    const { getCurrent } = await import('@tauri-apps/api/window');
    const win = getCurrent();
    const unlisten = await win.onDragDropEvent(async (event) => {
      if (event.payload.type !== 'drop') return;
      const paths: string[] = event.payload.paths ?? [];
      const { readFile } = await import('@tauri-apps/plugin-fs');
      const nativeFiles: NativeFile[] = await Promise.all(
        paths.map(async (p) => {
          const bytes = await readFile(p);
          return {
            name: p.split(/[\\/]/).pop() ?? p,
            bytes,
          } satisfies NativeFile;
        })
      );
      _handler(nativeFiles);
    });
    return unlisten;
  } catch {
    return () => {};
  }
}

// ---------------------------------------------------------------------------
// Private: Tauri implementations
// ---------------------------------------------------------------------------

async function _tauriOpenFiles(opts: OpenFileOptions): Promise<NativeFile[]> {
  try {
    const { open } = await import('@tauri-apps/plugin-dialog');
    const { readFile } = await import('@tauri-apps/plugin-fs');

    // Build extension list from accept array
    const extensions = (opts.accept ?? [])
      .flatMap((a) => (a.startsWith('.') ? [a.slice(1)] : []))
      .filter(Boolean);

    const selected = await open({
      multiple: opts.multiple ?? false,
      title: opts.title,
      filters: extensions.length > 0 ? [{ name: 'Files', extensions }] : undefined,
    });

    if (!selected) return [];
    const paths = Array.isArray(selected) ? selected : [selected];

    return Promise.all(
      paths.map(async (p) => {
        const bytes = await readFile(p);
        return {
          name: (p as string).split(/[\\/]/).pop() ?? (p as string),
          bytes,
        } satisfies NativeFile;
      })
    );
  } catch (err) {
    console.error('[fileIO] Tauri open error:', err);
    return [];
  }
}

async function _tauriSaveFile(
  data: Blob | Uint8Array,
  opts: SaveFileOptions
): Promise<void> {
  try {
    const { save } = await import('@tauri-apps/plugin-dialog');
    const { writeFile } = await import('@tauri-apps/plugin-fs');

    const path = await save({
      defaultPath: opts.defaultName,
      filters: opts.filters,
    });

    if (!path) return; // user cancelled

    let bytes: Uint8Array;
    if (data instanceof Uint8Array) {
      bytes = data;
    } else {
      bytes = new Uint8Array(await data.arrayBuffer());
    }

    await writeFile(path, bytes);
  } catch (err) {
    console.error('[fileIO] Tauri save error:', err);
  }
}

// ---------------------------------------------------------------------------
// Private: Browser fallbacks
// ---------------------------------------------------------------------------

function _browserOpenFiles(opts: OpenFileOptions): Promise<NativeFile[]> {
  return new Promise((resolve) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = opts.multiple ?? false;
    if (opts.accept?.length) {
      input.accept = opts.accept.join(',');
    }
    input.style.display = 'none';
    document.body.appendChild(input);

    input.addEventListener('change', async () => {
      const files = Array.from(input.files ?? []);
      const result: NativeFile[] = await Promise.all(
        files.map(async (f) => ({
          name: f.name,
          bytes: new Uint8Array(await f.arrayBuffer()),
          file: f,
        }))
      );
      document.body.removeChild(input);
      resolve(result);
    });

    input.addEventListener('cancel', () => {
      document.body.removeChild(input);
      resolve([]);
    });

    input.click();
  });
}

function _browserSaveFile(data: Blob | Uint8Array, opts: SaveFileOptions): void {
  const blob =
    data instanceof Uint8Array
      ? new Blob([data], { type: 'application/octet-stream' })
      : data;
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = opts.defaultName ?? 'download';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
