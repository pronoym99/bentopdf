/**
 * Lightweight hash-based client-side router for BentoPDF SPA.
 *
 * Routes map URL hash fragments (e.g. #merge-pdf) to lazily-imported
 * page modules. Each module exports:
 *   - html: string  — the inner HTML to inject into <main id="view">
 *   - init(): void  — called after HTML injection to wire up event listeners
 */

import { createIcons, icons } from 'lucide';
import { applyTranslations, rewriteLinks } from './i18n/index.js';
import { resetState } from './state.js';
import type { PageModule } from './types/router.js';

// ---------------------------------------------------------------------------
// Route table  (slug → dynamic import of page module)
// ---------------------------------------------------------------------------
type RouteLoader = () => Promise<PageModule>;

const routes: Record<string, RouteLoader> = {
  // Popular Tools
  'pdf-workflow': () => import('../pages/pdf-workflow.js') as Promise<PageModule>,
  'pdf-multi-tool': () => import('../pages/pdf-multi-tool.js') as Promise<PageModule>,
  'merge-pdf': () => import('../pages/merge-pdf.js') as Promise<PageModule>,
  'split-pdf': () => import('../pages/split-pdf.js') as Promise<PageModule>,
  'compress-pdf': () => import('../pages/compress-pdf.js') as Promise<PageModule>,
  'edit-pdf': () => import('../pages/edit-pdf.js') as Promise<PageModule>,
  'jpg-to-pdf': () => import('../pages/jpg-to-pdf.js') as Promise<PageModule>,
  'sign-pdf': () => import('../pages/sign-pdf.js') as Promise<PageModule>,
  'crop-pdf': () => import('../pages/crop-pdf.js') as Promise<PageModule>,
  'extract-pages': () => import('../pages/extract-pages.js') as Promise<PageModule>,
  'organize-pdf': () => import('../pages/organize-pdf.js') as Promise<PageModule>,
  'delete-pages': () => import('../pages/delete-pages.js') as Promise<PageModule>,
  // Edit & Annotate
  bookmark: () => import('../pages/bookmark.js') as Promise<PageModule>,
  'table-of-contents': () => import('../pages/table-of-contents.js') as Promise<PageModule>,
  'page-numbers': () => import('../pages/page-numbers.js') as Promise<PageModule>,
  'add-page-labels': () => import('../pages/add-page-labels.js') as Promise<PageModule>,
  'bates-numbering': () => import('../pages/bates-numbering.js') as Promise<PageModule>,
  'add-watermark': () => import('../pages/add-watermark.js') as Promise<PageModule>,
  'header-footer': () => import('../pages/header-footer.js') as Promise<PageModule>,
  'add-stamps': () => import('../pages/add-stamps.js') as Promise<PageModule>,
  'invert-colors': () => import('../pages/invert-colors.js') as Promise<PageModule>,
  'background-color': () => import('../pages/background-color.js') as Promise<PageModule>,
  'text-color': () => import('../pages/text-color.js') as Promise<PageModule>,
  'scanner-effect': () => import('../pages/scanner-effect.js') as Promise<PageModule>,
  'adjust-colors': () => import('../pages/adjust-colors.js') as Promise<PageModule>,
  'remove-annotations': () => import('../pages/remove-annotations.js') as Promise<PageModule>,
  'remove-blank-pages': () => import('../pages/remove-blank-pages.js') as Promise<PageModule>,
  'form-creator': () => import('../pages/form-creator.js') as Promise<PageModule>,
  'form-filler': () => import('../pages/form-filler.js') as Promise<PageModule>,
  'compare-pdfs': () => import('../pages/compare-pdfs.js') as Promise<PageModule>,
  'pdf-layers': () => import('../pages/pdf-layers.js') as Promise<PageModule>,
  // Convert to PDF
  'image-to-pdf': () => import('../pages/image-to-pdf.js') as Promise<PageModule>,
  'png-to-pdf': () => import('../pages/png-to-pdf.js') as Promise<PageModule>,
  'webp-to-pdf': () => import('../pages/webp-to-pdf.js') as Promise<PageModule>,
  'svg-to-pdf': () => import('../pages/svg-to-pdf.js') as Promise<PageModule>,
  'bmp-to-pdf': () => import('../pages/bmp-to-pdf.js') as Promise<PageModule>,
  'heic-to-pdf': () => import('../pages/heic-to-pdf.js') as Promise<PageModule>,
  'tiff-to-pdf': () => import('../pages/tiff-to-pdf.js') as Promise<PageModule>,
  'txt-to-pdf': () => import('../pages/txt-to-pdf.js') as Promise<PageModule>,
  'markdown-to-pdf': () => import('../pages/markdown-to-pdf.js') as Promise<PageModule>,
  'json-to-pdf': () => import('../pages/json-to-pdf.js') as Promise<PageModule>,
  'csv-to-pdf': () => import('../pages/csv-to-pdf.js') as Promise<PageModule>,
  'word-to-pdf': () => import('../pages/word-to-pdf.js') as Promise<PageModule>,
  'excel-to-pdf': () => import('../pages/excel-to-pdf.js') as Promise<PageModule>,
  'powerpoint-to-pdf': () => import('../pages/powerpoint-to-pdf.js') as Promise<PageModule>,
  'xps-to-pdf': () => import('../pages/xps-to-pdf.js') as Promise<PageModule>,
  'mobi-to-pdf': () => import('../pages/mobi-to-pdf.js') as Promise<PageModule>,
  'epub-to-pdf': () => import('../pages/epub-to-pdf.js') as Promise<PageModule>,
  'fb2-to-pdf': () => import('../pages/fb2-to-pdf.js') as Promise<PageModule>,
  'cbz-to-pdf': () => import('../pages/cbz-to-pdf.js') as Promise<PageModule>,
  'wpd-to-pdf': () => import('../pages/wpd-to-pdf.js') as Promise<PageModule>,
  'wps-to-pdf': () => import('../pages/wps-to-pdf.js') as Promise<PageModule>,
  'xml-to-pdf': () => import('../pages/xml-to-pdf.js') as Promise<PageModule>,
  'pages-to-pdf': () => import('../pages/pages-to-pdf.js') as Promise<PageModule>,
  'odg-to-pdf': () => import('../pages/odg-to-pdf.js') as Promise<PageModule>,
  'ods-to-pdf': () => import('../pages/ods-to-pdf.js') as Promise<PageModule>,
  'odp-to-pdf': () => import('../pages/odp-to-pdf.js') as Promise<PageModule>,
  'odt-to-pdf': () => import('../pages/odt-to-pdf.js') as Promise<PageModule>,
  'pub-to-pdf': () => import('../pages/pub-to-pdf.js') as Promise<PageModule>,
  'vsd-to-pdf': () => import('../pages/vsd-to-pdf.js') as Promise<PageModule>,
  'psd-to-pdf': () => import('../pages/psd-to-pdf.js') as Promise<PageModule>,
  'rtf-to-pdf': () => import('../pages/rtf-to-pdf.js') as Promise<PageModule>,
  'email-to-pdf': () => import('../pages/email-to-pdf.js') as Promise<PageModule>,
  // Convert from PDF
  'pdf-to-jpg': () => import('../pages/pdf-to-jpg.js') as Promise<PageModule>,
  'pdf-to-png': () => import('../pages/pdf-to-png.js') as Promise<PageModule>,
  'pdf-to-webp': () => import('../pages/pdf-to-webp.js') as Promise<PageModule>,
  'pdf-to-bmp': () => import('../pages/pdf-to-bmp.js') as Promise<PageModule>,
  'pdf-to-tiff': () => import('../pages/pdf-to-tiff.js') as Promise<PageModule>,
  'pdf-to-cbz': () => import('../pages/pdf-to-cbz.js') as Promise<PageModule>,
  'pdf-to-greyscale': () => import('../pages/pdf-to-greyscale.js') as Promise<PageModule>,
  'pdf-to-json': () => import('../pages/pdf-to-json.js') as Promise<PageModule>,
  'pdf-to-svg': () => import('../pages/pdf-to-svg.js') as Promise<PageModule>,
  'pdf-to-csv': () => import('../pages/pdf-to-csv.js') as Promise<PageModule>,
  'pdf-to-excel': () => import('../pages/pdf-to-excel.js') as Promise<PageModule>,
  'pdf-to-text': () => import('../pages/pdf-to-text.js') as Promise<PageModule>,
  'pdf-to-docx': () => import('../pages/pdf-to-docx.js') as Promise<PageModule>,
  'pdf-to-markdown': () => import('../pages/pdf-to-markdown.js') as Promise<PageModule>,
  'extract-images': () => import('../pages/extract-images.js') as Promise<PageModule>,
  'extract-tables': () => import('../pages/extract-tables.js') as Promise<PageModule>,
  'prepare-pdf-for-ai': () => import('../pages/prepare-pdf-for-ai.js') as Promise<PageModule>,
  'pdf-to-pdfa': () => import('../pages/pdf-to-pdfa.js') as Promise<PageModule>,
  // Organize & Manage
  'alternate-merge': () => import('../pages/alternate-merge.js') as Promise<PageModule>,
  'overlay-pdf': () => import('../pages/overlay-pdf.js') as Promise<PageModule>,
  'add-attachments': () => import('../pages/add-attachments.js') as Promise<PageModule>,
  'edit-attachments': () => import('../pages/edit-attachments.js') as Promise<PageModule>,
  'extract-attachments': () => import('../pages/extract-attachments.js') as Promise<PageModule>,
  'divide-pages': () => import('../pages/divide-pages.js') as Promise<PageModule>,
  'add-blank-page': () => import('../pages/add-blank-page.js') as Promise<PageModule>,
  'reverse-pages': () => import('../pages/reverse-pages.js') as Promise<PageModule>,
  'rotate-pdf': () => import('../pages/rotate-pdf.js') as Promise<PageModule>,
  'rotate-custom': () => import('../pages/rotate-custom.js') as Promise<PageModule>,
  'n-up-pdf': () => import('../pages/n-up-pdf.js') as Promise<PageModule>,
  'combine-single-page': () => import('../pages/combine-single-page.js') as Promise<PageModule>,
  'view-metadata': () => import('../pages/view-metadata.js') as Promise<PageModule>,
  'edit-metadata': () => import('../pages/edit-metadata.js') as Promise<PageModule>,
  'pdf-to-zip': () => import('../pages/pdf-to-zip.js') as Promise<PageModule>,
  'pdf-booklet': () => import('../pages/pdf-booklet.js') as Promise<PageModule>,
  'page-dimensions': () => import('../pages/page-dimensions.js') as Promise<PageModule>,
  // Optimize & Repair
  'ocr-pdf': () => import('../pages/ocr-pdf.js') as Promise<PageModule>,
  'posterize-pdf': () => import('../pages/posterize-pdf.js') as Promise<PageModule>,
  'fix-page-size': () => import('../pages/fix-page-size.js') as Promise<PageModule>,
  'linearize-pdf': () => import('../pages/linearize-pdf.js') as Promise<PageModule>,
  'rasterize-pdf': () => import('../pages/rasterize-pdf.js') as Promise<PageModule>,
  'repair-pdf': () => import('../pages/repair-pdf.js') as Promise<PageModule>,
  'deskew-pdf': () => import('../pages/deskew-pdf.js') as Promise<PageModule>,
  'font-to-outline': () => import('../pages/font-to-outline.js') as Promise<PageModule>,
  // Secure PDF
  'encrypt-pdf': () => import('../pages/encrypt-pdf.js') as Promise<PageModule>,
  'decrypt-pdf': () => import('../pages/decrypt-pdf.js') as Promise<PageModule>,
  'remove-metadata': () => import('../pages/remove-metadata.js') as Promise<PageModule>,
  'remove-restrictions': () => import('../pages/remove-restrictions.js') as Promise<PageModule>,
  'change-permissions': () => import('../pages/change-permissions.js') as Promise<PageModule>,
  'sanitize-pdf': () => import('../pages/sanitize-pdf.js') as Promise<PageModule>,
  'flatten-pdf': () => import('../pages/flatten-pdf.js') as Promise<PageModule>,
  'digital-sign-pdf': () => import('../pages/digital-sign-pdf.js') as Promise<PageModule>,
  'timestamp-pdf': () => import('../pages/timestamp-pdf.js') as Promise<PageModule>,
  'validate-signature-pdf': () => import('../pages/validate-signature-pdf.js') as Promise<PageModule>,
  'sign-pdf-advanced': () => import('../pages/sign-pdf.js') as Promise<PageModule>,
  // Settings
  'wasm-settings': () => import('../pages/wasm-settings.js') as Promise<PageModule>,
};

// ---------------------------------------------------------------------------
// Navigation history stack (for back-button support)
// ---------------------------------------------------------------------------
const historyStack: string[] = [];
let currentRoute = '';

// ---------------------------------------------------------------------------
// Core router logic
// ---------------------------------------------------------------------------

const view = (): HTMLElement => document.getElementById('view') as HTMLElement;

export async function navigate(slug: string): Promise<void> {
  const loader = routes[slug];
  const viewEl = view();
  if (!viewEl) return;

  if (!loader) {
    // Unknown route — show home
    await showHome();
    return;
  }

  // Update history
  if (currentRoute && currentRoute !== slug) {
    historyStack.push(currentRoute);
  }
  currentRoute = slug;

  // Update address bar hash (no page reload)
  const newHash = `#${slug}`;
  if (window.location.hash !== newHash) {
    history.pushState({ slug }, '', newHash);
  }

  // Hide home content, show tool view
  const homeEl = document.getElementById('home-content');
  if (homeEl) homeEl.style.display = 'none';
  if (viewEl) viewEl.classList.remove('hidden');

  // Reset per-tool state
  resetState();

  // Inject a lightweight placeholder while loading
  viewEl.innerHTML = `<div class="flex items-center justify-center min-h-[60vh]">
    <div class="solid-spinner"></div>
  </div>`;

  try {
    const mod = await loader();
    viewEl.innerHTML = mod.html;

    // Reinitialise Lucide icons that were just injected
    createIcons({ icons });

    // Apply i18n to newly injected DOM
    applyTranslations();
    rewriteLinks();

    // Wire up "Back to Tools" buttons BEFORE calling init() so the router
    // intercept runs in the capture phase before any window.location.href
    // assignments from legacy tool handlers.
    viewEl.querySelectorAll('#back-to-tools').forEach((btn) => {
      btn.addEventListener(
        'click',
        (e) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          goBack();
        },
        true // capture phase — runs before bubble-phase handlers
      );
    });

    // Wire up the tool's event listeners
    await mod.init();

    // Update window title
    const h1 = viewEl.querySelector('h1');
    if (h1?.textContent) {
      document.title = `${h1.textContent.trim()} — BentoPDF`;
      setNativeWindowTitle(`${h1.textContent.trim()} — BentoPDF`);
    }

    // Scroll to top
    window.scrollTo(0, 0);
  } catch (err) {
    console.error(`[router] Failed to load tool "${slug}":`, err);
    viewEl.innerHTML = `<div class="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <i class="ph ph-warning text-6xl text-red-400 mb-4"></i>
      <h2 class="text-xl font-bold text-white mb-2">Failed to load tool</h2>
      <p class="text-gray-400 mb-6">${err instanceof Error ? err.message : String(err)}</p>
      <button onclick="window.router.goBack()" class="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition">
        Go Back
      </button>
    </div>`;
  }
}

export async function showHome(): Promise<void> {
  const viewEl = view();

  if (currentRoute) {
    historyStack.push(currentRoute);
  }
  currentRoute = '';

  history.pushState({}, '', window.location.pathname);

  document.title = 'BentoPDF — Free PDF Tools';
  setNativeWindowTitle('BentoPDF — Free PDF Tools');

  // Show the home grid, hide the view container
  const homeEl = document.getElementById('home-content');
  if (homeEl) homeEl.style.display = '';
  if (viewEl) {
    viewEl.classList.add('hidden');
    viewEl.innerHTML = '';
  }
}

export function goBack(): void {
  const prev = historyStack.pop();
  if (prev) {
    navigate(prev);
  } else {
    showHome();
  }
}

// ---------------------------------------------------------------------------
// Optional: update native Tauri window title
// ---------------------------------------------------------------------------
async function setNativeWindowTitle(title: string): Promise<void> {
  try {
    // Dynamically import Tauri API — only available in desktop build
    const tauri = await import('@tauri-apps/api/window');
    const win = tauri.getCurrentWindow ? tauri.getCurrentWindow() : null;
    if (win) await win.setTitle(title);
  } catch {
    // Not running in Tauri — ignore
  }
}

// ---------------------------------------------------------------------------
// Hash-change listener — handle browser back/forward
// ---------------------------------------------------------------------------
export function initRouter(): void {
  window.addEventListener('popstate', (e) => {
    const slug = (e.state as { slug?: string } | null)?.slug;
    if (slug && routes[slug]) {
      navigate(slug);
    } else {
      showHome();
    }
  });

  // Handle initial URL hash on first load
  const initialHash = window.location.hash.slice(1); // strip '#'
  if (initialHash && routes[initialHash]) {
    navigate(initialHash);
  }
}

// Expose router globally for inline onclick handlers in tool HTML
declare global {
  interface Window {
    router: typeof import('./router.js');
  }
}
if (typeof window !== 'undefined') {
  window.router = { navigate, showHome, goBack, initRouter };
}
