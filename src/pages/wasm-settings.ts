// Auto-generated SPA page module for wasm-settings
import type { PageModule } from '../js/types/router.js';

export const html = `

    <div
      id="uploader"
      class="min-h-screen flex flex-col items-center justify-start py-12 p-4 bg-gray-900"
    >
      <div
        id="tool-uploader"
        class="bg-gray-800 rounded-xl shadow-xl px-4 py-8 md:p-8 max-w-2xl w-full text-gray-200 border border-gray-700"
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

        <h1 class="text-2xl font-bold text-white mb-2">
          Advanced Features Settings
        </h1>
        <p class="text-gray-400 mb-6">
          Configure external processing modules to enable advanced PDF features.
          These modules are optional and licensed separately.
        </p>

        <!-- Info Banner -->
        <div
          class="bg-green-900/30 border border-green-600/50 rounded-lg p-4 mb-6"
        >
          <div class="flex items-start gap-3">
            <i
              data-lucide="check-circle"
              class="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5"
            ></i>
            <div>
              <p class="text-green-200 text-sm">
                <strong>Pre-configured and ready to use.</strong> Advanced
                processing modules are loaded automatically from CDN. You can
                override the URLs below if you need to use a custom source
                (e.g., for air-gapped or self-hosted deployments).
              </p>
            </div>
          </div>
        </div>

        <!-- PyMuPDF Section -->
        <div class="space-y-6">
          <div class="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
            <div class="flex items-center justify-between mb-3">
              <div>
                <h3 class="font-semibold text-white">PyMuPDF</h3>
                <p class="text-xs text-gray-400">Document Processing Engine</p>
              </div>
              <span
                id="pymupdf-status"
                class="text-xs px-2 py-1 rounded-full bg-gray-600 text-gray-300"
              >
                Not Configured
              </span>
            </div>
            <p class="text-sm text-gray-400 mb-3">
              Enables: PDF to Text, Markdown, SVG, DOCX, Excel • Extract
              Images/Tables • Format Conversion
            </p>
            <div class="flex gap-2">
              <input
                type="text"
                id="pymupdf-url"
                placeholder="https://your-cdn.com/pymupdf-wasm/"
                class="flex-1 bg-gray-700 border border-gray-600 text-white rounded-lg p-2.5 text-sm"
              />
              <button
                id="pymupdf-test"
                class="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Test
              </button>
            </div>
            <div class="flex items-center gap-2 mt-2">
              <span class="text-xs text-gray-500">Recommended:</span>
              <code
                class="text-xs text-indigo-400 bg-gray-800 px-2 py-1 rounded flex-1 truncate"
                >https://cdn.jsdelivr.net/npm/@bentopdf/pymupdf-wasm@0.11.16/</code
              >
              <button
                data-copy="https://cdn.jsdelivr.net/npm/@bentopdf/pymupdf-wasm@0.11.16/"
                class="copy-btn p-1.5 bg-gray-600 hover:bg-gray-500 rounded text-gray-300 hover:text-white transition-colors"
                title="Copy to clipboard"
              >
                <i data-lucide="copy" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </div>

          <!-- Ghostscript Section -->
          <div class="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
            <div class="flex items-center justify-between mb-3">
              <div>
                <h3 class="font-semibold text-white">Ghostscript</h3>
                <p class="text-xs text-gray-400">PDF/A Conversion Engine</p>
              </div>
              <span
                id="ghostscript-status"
                class="text-xs px-2 py-1 rounded-full bg-gray-600 text-gray-300"
              >
                Not Configured
              </span>
            </div>
            <p class="text-sm text-gray-400 mb-3">
              Enables: PDF/A-1b, PDF/A-2b, PDF/A-3b Conversion • Font to Outline
            </p>
            <div class="flex gap-2">
              <input
                type="text"
                id="ghostscript-url"
                placeholder="https://your-cdn.com/ghostscript-wasm/"
                class="flex-1 bg-gray-700 border border-gray-600 text-white rounded-lg p-2.5 text-sm"
              />
              <button
                id="ghostscript-test"
                class="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Test
              </button>
            </div>
            <div class="flex items-center gap-2 mt-2">
              <span class="text-xs text-gray-500">Recommended:</span>
              <code
                class="text-xs text-indigo-400 bg-gray-800 px-2 py-1 rounded flex-1 truncate"
                >https://cdn.jsdelivr.net/npm/@bentopdf/gs-wasm/assets/</code
              >
              <button
                data-copy="https://cdn.jsdelivr.net/npm/@bentopdf/gs-wasm/assets/"
                class="copy-btn p-1.5 bg-gray-600 hover:bg-gray-500 rounded text-gray-300 hover:text-white transition-colors"
                title="Copy to clipboard"
              >
                <i data-lucide="copy" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </div>

          <!-- CPDF Section -->
          <div class="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
            <div class="flex items-center justify-between mb-3">
              <div>
                <h3 class="font-semibold text-white">CoherentPDF</h3>
                <p class="text-xs text-gray-400">Bookmarks & Metadata Engine</p>
              </div>
              <span
                id="cpdf-status"
                class="text-xs px-2 py-1 rounded-full bg-gray-600 text-gray-300"
              >
                Not Configured
              </span>
            </div>
            <p class="text-sm text-gray-400 mb-3">
              Enables: Split by Bookmarks • Edit Bookmarks • PDF Metadata
            </p>
            <div class="flex gap-2">
              <input
                type="text"
                id="cpdf-url"
                placeholder="https://your-cdn.com/cpdf/"
                class="flex-1 bg-gray-700 border border-gray-600 text-white rounded-lg p-2.5 text-sm"
              />
              <button
                id="cpdf-test"
                class="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Test
              </button>
            </div>
            <div class="flex items-center gap-2 mt-2">
              <span class="text-xs text-gray-500">Recommended:</span>
              <code
                class="text-xs text-indigo-400 bg-gray-800 px-2 py-1 rounded flex-1 truncate"
                >https://cdn.jsdelivr.net/npm/coherentpdf/dist/</code
              >
              <button
                data-copy="https://cdn.jsdelivr.net/npm/coherentpdf/dist/"
                class="copy-btn p-1.5 bg-gray-600 hover:bg-gray-500 rounded text-gray-300 hover:text-white transition-colors"
                title="Copy to clipboard"
              >
                <i data-lucide="copy" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-3 mt-6">
          <button id="save-btn" class="btn-gradient flex-1">
            Save Configuration
          </button>
          <button
            id="clear-btn"
            class="px-6 py-2.5 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg font-medium transition-colors border border-red-600/50"
          >
            Reset to Defaults
          </button>
        </div>

        <!-- License Notice -->
        <div
          class="mt-6 p-4 bg-gray-700/30 rounded-lg border border-gray-600/50"
        >
          <p class="text-xs text-gray-500">
            <strong class="text-gray-400">License Notice:</strong> The external
            modules (PyMuPDF, Ghostscript, CoherentPDF) are licensed under
            AGPL-3.0 or similar copyleft licenses. By configuring and using
            these modules, you agree to their respective license terms. BentoPDF
            is compatible with any Ghostscript WASM and PyMuPDF WASM
            implementation that follows the expected interface.
          </p>
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
        <h3 id="alert-title" class="text-xl font-bold text-white mb-2">
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
`;

export async function init(): Promise<void> {
  const mod = await import('../js/logic/wasm-settings-page.js');
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
