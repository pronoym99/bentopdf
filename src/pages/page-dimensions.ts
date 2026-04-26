// Auto-generated SPA page module for page-dimensions
import type { PageModule } from '../js/types/router.js';

export const html = `

    <div
      id="uploader"
      class="min-h-screen flex flex-col items-center justify-start py-12 p-4 bg-gray-900"
    >
      <div
        id="tool-uploader"
        class="bg-gray-800 rounded-xl shadow-xl px-4 py-8 md:p-8 max-w-4xl w-full text-gray-200 border border-gray-700"
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
          data-i18n="tools:pageDimensions.name"
        >
          Page Dimensions
        </h1>
        <p class="text-gray-400 mb-6" data-i18n="tools:pageDimensions.subtitle">
          Analyze page size, orientation, and units.
        </p>

        <div
          id="drop-zone"
          class="relative flex flex-col items-center justify-center w-full h-48 md:h-64 border-2 border-dashed border-gray-600 rounded-xl cursor-pointer bg-gray-900 hover:bg-gray-700 transition-colors duration-300"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <i
              data-lucide="upload-cloud"
              class="w-10 h-10 mb-3 text-gray-400"
            ></i>
            <p class="mb-2 text-sm text-gray-400">
              <span class="font-semibold" data-i18n="upload.clickToSelect"
                >Click to select PDF</span
              >
              <span data-i18n="upload.orDragAndDrop">or drag and drop</span>
            </p>
            <p class="text-xs text-gray-500" data-i18n="upload.filesNeverLeave">
              Your files never leave your device.
            </p>
          </div>
          <input
            id="file-input"
            type="file"
            class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            accept="application/pdf"
          />
        </div>

        <div id="file-display-area" class="mt-4 space-y-2"></div>

        <div id="dimensions-results" class="hidden mt-6">
          <div id="dimensions-summary" class="mb-6"></div>

          <div
            class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4"
          >
            <div class="flex items-center gap-2">
              <label
                for="units-select"
                class="text-sm font-medium text-gray-300"
                >Units:</label
              >
              <select
                id="units-select"
                class="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg p-2"
              >
                <option value="pt">Points (pt)</option>
                <option value="in">Inches (in)</option>
                <option value="mm">Millimeters (mm)</option>
                <option value="px">Pixels (px)</option>
              </select>
            </div>
            <button
              id="export-csv-btn"
              class="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              <i data-lucide="download" class="w-4 h-4"></i>
              <span>Export to CSV</span>
            </button>
          </div>

          <div class="overflow-x-auto rounded-lg border border-gray-700">
            <table class="w-full text-sm text-left">
              <thead class="text-xs uppercase bg-gray-900 text-gray-400">
                <tr>
                  <th class="px-4 py-3">Page #</th>
                  <th class="px-4 py-3">Dimensions</th>
                  <th class="px-4 py-3">Standard Size</th>
                  <th class="px-4 py-3">Orientation</th>
                  <th class="px-4 py-3">Aspect Ratio</th>
                  <th class="px-4 py-3">Area</th>
                  <th class="px-4 py-3">Rotation</th>
                </tr>
              </thead>
              <tbody
                id="dimensions-table-body"
                class="bg-gray-800 divide-y divide-gray-700"
              ></tbody>
            </table>
          </div>
        </div>
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
            Is page dimensions really free?
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
  const mod = await import('../js/logic/page-dimensions-page.js');
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
