// Auto-generated SPA page module for markdown-to-pdf
import type { PageModule } from '../js/types/router.js';

export const html = `

    <div class="min-h-screen py-8 px-4">
      <div class="max-w-7xl mx-auto">
        <div
          class="bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-700"
        >
          <button
            id="back-to-tools"
            class="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-6 font-semibold"
          >
            <i data-lucide="arrow-left" class="cursor-pointer"></i>
            <span class="cursor-pointer" data-i18n="tools.backToTools"
              >Back to Tools</span
            >
          </button>

          <h1
            class="text-2xl font-bold text-white mb-2"
            data-i18n="tools:markdownToPdf.name"
          >
            Markdown to PDF
          </h1>
          <p
            class="text-gray-400 mb-6"
            data-i18n="tools:markdownToPdf.subtitle"
          >
            Write or paste Markdown and export it as a beautifully formatted
            PDF.
          </p>

          <!-- Editor container -->
          <div id="markdown-editor-container"></div>
        </div>
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
            Is markdown to pdf really free?
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
  const mod = await import('../js/logic/markdown-to-pdf-page.js');
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
