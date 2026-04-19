// Auto-generated SPA page module for compare-pdfs
import type { PageModule } from '../js/types/router.js';

export const html = `

    <div
      id="uploader"
      class="min-h-screen flex flex-col items-center justify-start py-12 p-4 bg-gray-900"
    >
      <div
        id="tool-uploader"
        class="bg-gray-800 rounded-xl shadow-xl px-4 py-8 md:p-8 max-w-[96rem] w-full text-gray-200 border border-gray-700"
      >
        <button
          id="back-to-tools"
          class="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-6 font-semibold"
        >
          <i data-lucide="arrow-left" class="cursor-pointer"></i>
          <span class="cursor-pointer" data-i18n="tools.backToTools">
            Back to Tools
          </span>
        </button>

        <h1
          class="text-2xl font-bold text-white mb-2"
          data-i18n="tools:comparePdfs.name"
        >
          Compare PDFs
        </h1>
        <p class="text-gray-400 mb-6" data-i18n="tools:comparePdfs.subtitle">
          Compare two PDFs side by side.
        </p>

        <!-- File Upload Areas -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div
            id="drop-zone-1"
            class="relative flex flex-col items-center justify-center w-full h-48 md:h-64 border-2 border-dashed border-gray-600 rounded-xl cursor-pointer bg-gray-900 hover:bg-gray-700 transition-colors duration-300"
          >
            <div
              id="file-display-1"
              class="flex flex-col items-center justify-center"
            >
              <i data-lucide="file-text" class="w-8 h-8 mb-2 text-gray-400"></i>
              <p class="text-sm text-gray-400">First PDF</p>
              <p class="text-xs text-gray-500">Click or drop</p>
            </div>
            <input
              id="file-input-1"
              type="file"
              class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              accept="application/pdf"
            />
          </div>
          <div
            id="drop-zone-2"
            class="relative flex flex-col items-center justify-center w-full h-48 md:h-64 border-2 border-dashed border-gray-600 rounded-xl cursor-pointer bg-gray-900 hover:bg-gray-700 transition-colors duration-300"
          >
            <div
              id="file-display-2"
              class="flex flex-col items-center justify-center"
            >
              <i data-lucide="file-text" class="w-8 h-8 mb-2 text-gray-400"></i>
              <p class="text-sm text-gray-400">Second PDF</p>
              <p class="text-xs text-gray-500">Click or drop</p>
            </div>
            <input
              id="file-input-2"
              type="file"
              class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              accept="application/pdf"
            />
          </div>
        </div>

        <!-- Compare Viewer (hidden until both files loaded) -->
        <div id="compare-viewer" class="hidden">
          <!-- Toolbar -->
          <div
            class="flex flex-wrap items-center gap-3 mb-3 p-2 bg-gray-900 rounded-lg border border-gray-700"
          >
            <button
              id="prev-page-compare"
              class="btn p-1.5 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
              disabled
              title="Previous page"
            >
              <i data-lucide="chevron-left" class="w-4 h-4"></i>
            </button>
            <span class="text-sm text-white font-medium">
              Page <span id="current-page-display-compare">1</span> /
              <span id="total-pages-display-compare">1</span>
            </span>
            <button
              id="next-page-compare"
              class="btn p-1.5 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
              disabled
              title="Next page"
            >
              <i data-lucide="chevron-right" class="w-4 h-4"></i>
            </button>

            <div class="border-l border-gray-700 h-5 mx-1"></div>

            <div class="bg-gray-700 p-0.5 rounded flex gap-0.5">
              <button
                id="view-mode-overlay"
                class="btn bg-indigo-600 px-2.5 py-1 rounded text-xs font-semibold"
              >
                Overlay
              </button>
              <button
                id="view-mode-side"
                class="btn px-2.5 py-1 rounded text-xs font-semibold"
              >
                Side-by-Side
              </button>
            </div>

            <div class="border-l border-gray-700 h-5 mx-1"></div>

            <button
              id="prev-change-btn"
              class="btn bg-gray-700 hover:bg-gray-600 px-2.5 py-1 rounded text-xs font-semibold disabled:opacity-50"
              disabled
              title="Previous change"
            >
              <i data-lucide="chevron-up" class="w-3.5 h-3.5"></i>
            </button>
            <button
              id="next-change-btn"
              class="btn bg-gray-700 hover:bg-gray-600 px-2.5 py-1 rounded text-xs font-semibold disabled:opacity-50"
              disabled
              title="Next change"
            >
              <i data-lucide="chevron-down" class="w-3.5 h-3.5"></i>
            </button>

            <div class="border-l border-gray-700 h-5 mx-1"></div>

            <button
              id="zoom-out-btn"
              class="btn p-1.5 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
              title="Zoom out"
            >
              <i data-lucide="minus" class="w-3.5 h-3.5"></i>
            </button>
            <span
              id="zoom-level-display"
              class="text-xs text-gray-300 font-medium min-w-[3rem] text-center select-none"
              >100%</span
            >
            <button
              id="zoom-in-btn"
              class="btn p-1.5 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
              title="Zoom in"
            >
              <i data-lucide="plus" class="w-3.5 h-3.5"></i>
            </button>
            <button
              id="zoom-reset-btn"
              class="btn px-2.5 py-1 rounded bg-gray-700 hover:bg-gray-600 text-xs font-semibold"
              title="Reset zoom to fit"
            >
              Fit
            </button>

            <div class="flex-1"></div>

            <div id="overlay-controls" class="hidden flex items-center gap-2">
              <div class="bg-gray-700 p-0.5 rounded flex gap-0.5">
                <button
                  id="overlay-scope-all"
                  class="btn bg-indigo-600 px-2.5 py-1 rounded text-xs font-semibold"
                >
                  All changes
                </button>
                <button
                  id="overlay-scope-content-only"
                  class="btn px-2.5 py-1 rounded text-xs font-semibold bg-gray-700"
                >
                  Content only
                </button>
              </div>
              <button
                id="flicker-btn"
                class="btn bg-gray-700 hover:bg-gray-600 px-2.5 py-1 rounded text-xs font-semibold"
              >
                Flicker
              </button>
              <label
                class="flex items-center gap-1.5 text-xs text-gray-300 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="overlay-ocr-toggle"
                  checked
                  class="w-3.5 h-3.5 rounded text-indigo-600 bg-gray-700 border-gray-600"
                />
                OCR
              </label>
              <input
                type="range"
                id="opacity-slider"
                min="0"
                max="1"
                step="0.05"
                value="0.5"
                class="w-20 accent-indigo-500"
              />
            </div>

            <div id="side-by-side-controls" class="flex items-center gap-2">
              <label
                class="flex items-center gap-1.5 text-xs text-gray-300 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="sync-scroll-toggle"
                  checked
                  class="w-3.5 h-3.5 rounded text-indigo-600 bg-gray-700 border-gray-600"
                />
                Sync scroll
              </label>
              <label
                class="flex items-center gap-1.5 text-xs text-gray-300 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="ocr-toggle"
                  checked
                  class="w-3.5 h-3.5 rounded text-indigo-600 bg-gray-700 border-gray-600"
                />
                OCR
              </label>
            </div>

            <div class="relative" id="export-dropdown-wrapper">
              <button
                id="export-dropdown-btn"
                class="btn bg-indigo-600 hover:bg-indigo-500 px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 disabled:opacity-50"
                disabled
              >
                <i data-lucide="upload" class="w-3.5 h-3.5"></i>
                Export
                <i data-lucide="chevron-down" class="w-3 h-3"></i>
              </button>
              <div
                id="export-dropdown-menu"
                class="hidden absolute right-0 top-full mt-1 w-48 bg-gray-800 border border-gray-600 rounded-lg shadow-xl z-50 py-1"
              >
                <div
                  class="px-3 py-1.5 text-[10px] font-semibold text-gray-400 uppercase tracking-wider"
                >
                  Export as PDF
                </div>
                <button
                  data-export-mode="overlay"
                  class="export-menu-item export-menu-item-overlay w-full px-3 py-2 text-sm text-left text-gray-200 hover:bg-gray-700 flex items-center gap-2 hidden"
                >
                  <i data-lucide="layers" class="w-4 h-4 text-gray-400"></i>
                  Overlay view
                </button>
                <button
                  data-export-mode="split"
                  class="export-menu-item export-menu-item-side w-full px-3 py-2 text-sm text-left text-gray-200 hover:bg-gray-700 flex items-center gap-2"
                >
                  <i data-lucide="columns-2" class="w-4 h-4 text-gray-400"></i>
                  Split view
                </button>
                <button
                  data-export-mode="alternating"
                  class="export-menu-item export-menu-item-side w-full px-3 py-2 text-sm text-left text-gray-200 hover:bg-gray-700 flex items-center gap-2"
                >
                  <i data-lucide="layers" class="w-4 h-4 text-gray-400"></i>
                  Alternating
                </button>
                <button
                  data-export-mode="left"
                  class="export-menu-item export-menu-item-side w-full px-3 py-2 text-sm text-left text-gray-200 hover:bg-gray-700 flex items-center gap-2"
                >
                  <i data-lucide="columns-2" class="w-4 h-4 text-gray-400"></i>
                  Left Document
                </button>
                <button
                  data-export-mode="right"
                  class="export-menu-item export-menu-item-side w-full px-3 py-2 text-sm text-left text-gray-200 hover:bg-gray-700 flex items-center gap-2"
                >
                  <i data-lucide="columns-2" class="w-4 h-4 text-gray-400"></i>
                  Right Document
                </button>
              </div>
            </div>
          </div>

          <div class="compare-workspace">
            <div
              id="compare-viewer-wrapper"
              class="compare-viewer-wrapper side-by-side-mode border border-slate-200 relative"
            >
              <div id="panel-1" class="compare-panel overflow-auto">
                <div class="compare-panel-label" id="compare-panel-label-1">
                  Original
                </div>
                <div class="compare-canvas-stage">
                  <canvas id="canvas-compare-1" class="block mx-auto"></canvas>
                  <div id="highlights-1" class="compare-highlight-layer"></div>
                  <div
                    id="placeholder-1"
                    class="compare-placeholder hidden"
                  ></div>
                </div>
              </div>
              <div id="panel-2" class="compare-panel overflow-auto">
                <div class="compare-panel-label" id="compare-panel-label-2">
                  Modified
                </div>
                <div class="compare-canvas-stage">
                  <canvas
                    id="canvas-compare-2"
                    class="block mx-auto"
                    style="opacity: 1"
                  ></canvas>
                  <div id="highlights-2" class="compare-highlight-layer"></div>
                  <div
                    id="placeholder-2"
                    class="compare-placeholder hidden"
                  ></div>
                </div>
              </div>
            </div>

            <aside class="compare-sidebar">
              <div class="compare-sidebar-header">
                <div class="relative">
                  <span
                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                  >
                    <i data-lucide="search" class="w-4 h-4 text-gray-400"></i>
                  </span>
                  <input
                    type="text"
                    id="compare-search-input"
                    placeholder="Search changes..."
                    class="w-full pl-9 pr-3 py-2 bg-gray-700 text-white text-sm border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div class="compare-sidebar-filters">
                <div class="compare-filter-group">
                  <div class="compare-filter-label">Change Type</div>
                  <button id="filter-removed" class="compare-pill removed">
                    <span class="compare-change-dot removed"></span>
                    <span id="summary-removed-count">0</span> Deleted
                  </button>
                  <button id="filter-added" class="compare-pill added">
                    <span class="compare-change-dot added"></span>
                    <span id="summary-added-count">0</span> Added
                  </button>
                  <button id="filter-modified" class="compare-pill modified">
                    <span class="compare-change-dot modified"></span>
                    <span id="summary-modified-count">0</span> Modified
                  </button>
                  <button id="filter-moved" class="compare-pill moved">
                    <span class="compare-change-dot moved"></span>
                    <span id="summary-moved-count">0</span> Moved
                  </button>
                  <button
                    id="filter-style-changed"
                    class="compare-pill style-changed"
                  >
                    <span class="compare-change-dot style-changed"></span>
                    <span id="summary-style-changed-count">0</span> Style
                  </button>
                </div>
                <div class="compare-filter-group">
                  <div class="compare-filter-label">Content</div>
                  <button
                    id="category-text"
                    class="compare-pill category active"
                  >
                    <span id="category-count-text">0</span> Text
                  </button>
                  <button
                    id="category-image"
                    class="compare-pill category active"
                  >
                    <span id="category-count-image">0</span> Images
                  </button>
                  <button
                    id="category-header-footer"
                    class="compare-pill category active"
                  >
                    <span id="category-count-header-footer">0</span> Headers
                  </button>
                  <button
                    id="category-annotation"
                    class="compare-pill category active"
                  >
                    <span id="category-count-annotation">0</span> Annotations
                  </button>
                  <button
                    id="category-formatting"
                    class="compare-pill category active"
                  >
                    <span id="category-count-formatting">0</span> Formatting
                  </button>
                  <button
                    id="category-background"
                    class="compare-pill category active"
                  >
                    <span id="category-count-background">0</span> Backgrounds
                  </button>
                </div>
              </div>

              <div class="compare-change-list">
                <div id="change-list-empty" class="compare-change-empty">
                  Upload two PDFs to see differences.
                </div>
                <div id="compare-change-list" class="hidden"></div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>

    <!-- Loader Modal -->
    <div
      id="loader-modal"
      class="hidden fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    >
      <div
        class="bg-gray-800 p-8 rounded-lg flex flex-col items-center gap-4 border border-gray-700 shadow-xl"
      >
        <div class="solid-spinner"></div>
        <p
          id="loader-text"
          class="text-white text-lg font-medium"
          data-i18n="loader.processing"
          data-i18n="loader.processing"
        >
          Processing...
        </p>
      </div>
    </div>

    <!-- Alert Modal -->
    <div
      id="alert-modal"
      class="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50 hidden"
    >
      <div
        class="bg-gray-800 rounded-lg shadow-xl p-6 max-w-sm w-full border border-gray-700"
      >
        <h3
          id="alert-title"
          class="text-xl font-bold text-white mb-2"
          data-i18n="alert.title"
          data-i18n="alert.title"
        >
          Alert
        </h3>
        <p id="alert-message" class="text-gray-300 mb-6"></p>
        <button
          id="alert-ok"
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          OK
        </button>
      </div>
    </div>

    <!-- How It Works Section -->
    <section class="max-w-4xl mx-auto px-4 py-12">
      <h2
        class="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
        data-i18n="howItWorks.title"
      >
        How It Works
      </h2>
      <div class="space-y-6">
        <div class="flex items-start gap-4">
          <div
            class="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold"
          >
            1
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-white mb-1">Upload File</h3>
            <p class="text-gray-400" data-i18n="howItWorks.step1">
              Click or drag and drop your file to begin
            </p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div
            class="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold"
          >
            2
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-white mb-1">Process</h3>
            <p class="text-gray-400" data-i18n="howItWorks.step2">
              Click the process button to start
            </p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div
            class="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold"
          >
            3
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-white mb-1">Download</h3>
            <p class="text-gray-400" data-i18n="howItWorks.step3">
              Save your processed file instantly
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Tools Section -->
    <section class="max-w-6xl mx-auto px-4 py-12">
      <h2
        class="text-2xl md:text-3xl font-bold text-white mb-6 text-center"
        data-i18n="relatedTools.title"
      >
        Related PDF Tools
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <a
          href="merge-pdf.html"
          class="block bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700"
        >
          <h3 class="text-white font-semibold mb-1">Merge Pdf</h3>
          <p class="text-gray-400 text-sm">Free online merge pdf tool</p>
        </a>
        <a
          href="compress-pdf.html"
          class="block bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700"
        >
          <h3 class="text-white font-semibold mb-1">Compress Pdf</h3>
          <p class="text-gray-400 text-sm">Free online compress pdf tool</p>
        </a>
        <a
          href="split-pdf.html"
          class="block bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700"
        >
          <h3 class="text-white font-semibold mb-1">Split Pdf</h3>
          <p class="text-gray-400 text-sm">Free online split pdf tool</p>
        </a>
        <a
          href="edit-pdf.html"
          class="block bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700"
        >
          <h3 class="text-white font-semibold mb-1">Edit Pdf</h3>
          <p class="text-gray-400 text-sm">Free online edit pdf tool</p>
        </a>
        <a
          href="rotate-pdf.html"
          class="block bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700"
        >
          <h3 class="text-white font-semibold mb-1">Rotate Pdf</h3>
          <p class="text-gray-400 text-sm">Free online rotate pdf tool</p>
        </a>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="max-w-4xl mx-auto px-4 py-12">
      <h2
        class="text-2xl md:text-3xl font-bold text-white mb-6 text-center"
        data-i18n="faq.sectionTitle"
      >
        Frequently Asked Questions
      </h2>
      <div class="space-y-4">
        <details class="bg-gray-800 p-5 rounded-lg border border-gray-700">
          <summary
            class="cursor-pointer font-semibold text-white flex items-center justify-between"
          >
            Is compare pdfs really free?
            <i data-lucide="chevron-down" class="w-5 h-5"></i>
          </summary>
          <p class="mt-3 text-gray-400">
            Yes! BentoPDF is 100% free with no hidden fees, no signup required,
            and unlimited file processing.
          </p>
        </details>
        <details class="bg-gray-800 p-5 rounded-lg border border-gray-700">
          <summary
            class="cursor-pointer font-semibold text-white flex items-center justify-between"
          >
            Are my files private and secure?
            <i data-lucide="chevron-down" class="w-5 h-5"></i>
          </summary>
          <p class="mt-3 text-gray-400">
            Absolutely! All processing happens in your browser. Your files never
            leave your device, ensuring complete privacy.
          </p>
        </details>
        <details class="bg-gray-800 p-5 rounded-lg border border-gray-700">
          <summary
            class="cursor-pointer font-semibold text-white flex items-center justify-between"
          >
            Is there a file size limit?
            <i data-lucide="chevron-down" class="w-5 h-5"></i>
          </summary>
          <p class="mt-3 text-gray-400">
            No! Process files of any size, as many times as you want, completely
            free.
          </p>
        </details>
      </div>
    </section>
`;

export async function init(): Promise<void> {
  const mod = await import('../js/logic/compare-pdfs-page.js');
  if ('init' in mod && typeof mod.init === 'function') {
    mod.init();
  } else if (
    'initializePage' in mod &&
    typeof mod.initializePage === 'function'
  ) {
    mod.initializePage();
  }
}

export default { html, init } satisfies PageModule;
