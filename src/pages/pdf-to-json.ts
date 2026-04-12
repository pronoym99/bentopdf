// Auto-generated SPA page module for pdf-to-json
import type { PageModule } from '../js/types/router.js';

export const html = `

    <div class="min-h-screen flex items-center justify-center p-4 bg-gray-900">
      <div
        id="tool-uploader"
        class="bg-gray-800 rounded-xl shadow-xl p-8 max-w-2xl w-full text-gray-200 border border-gray-700"
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
          data-i18n="tools:pdfToJson.name"
        >
          PDF to JSON
        </h1>
        <p class="text-gray-400 mb-6" data-i18n="tools:pdfToJson.subtitle">
          Convert PDF files to JSON format.
        </p>

        <div class="upload-section mb-6">
          <div
            class="relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-600 rounded-xl cursor-pointer bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <i
                data-lucide="upload-cloud"
                class="w-10 h-10 mb-3 text-gray-400"
              ></i>
              <p class="mb-2 text-sm text-gray-300">
                <span class="font-semibold" data-i18n="upload.clickToSelect"
                  >Click to select files</span
                >
                <span data-i18n="upload.orDragAndDrop">or drag and drop</span>
              </p>
              <p
                class="text-xs text-gray-500"
                data-i18n="upload.hints.multiplePdfs"
              >
                Multiple PDF files
              </p>
              <p
                class="text-xs text-gray-500"
                data-i18n="upload.filesNeverLeave"
              >
                Your files never leave your device.
              </p>
            </div>
            <input
              type="file"
              id="pdfFiles"
              accept="application/pdf"
              multiple
              class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>

          <!-- File Display Area -->
          <div id="fileList" class="mt-4 hidden"></div>

          <button id="convertBtn" disabled class="btn-gradient w-full mt-6">
            Convert to JSON
          </button>
        </div>

        <!-- Status Message -->
        <div
          id="status-message"
          class="mt-4 hidden p-3 rounded-lg text-sm"
        ></div>
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
            Is pdf to json really free?
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
  const mod = await import('../js/logic/pdf-to-json.js');
  if (typeof mod.init === 'function') {
    mod.init();
  } else if (typeof mod.initializePage === 'function') {
    mod.initializePage();
  }
}

export default { html, init } satisfies PageModule;
