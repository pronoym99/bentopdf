// Auto-generated SPA page module for pdf-workflow
import type { PageModule } from '../js/types/router.js';

export const html = `
  <style>
    /*
     * SPA layout fix: #view has no height or flex in the SPA context, so the
     * flex-1 chain inside #workflow-app collapses to 0 height. Give #view the
     * same full-height flex-column layout that the standalone page's <body> provides.
     * 4rem = 64px = navbar h-16 height.
     */
    #view {
      height: calc(100vh - 4rem);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    /* Rete canvas: dotted grid background + pointer behaviour */
    #rete-container {
      background-image: radial-gradient(circle, #374151 1px, transparent 1px);
      background-size: 20px 20px;
      cursor: default;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    #toolbox-sidebar {
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    #rete-container.is-panning {
      cursor: grabbing;
    }

    #rete-container [data-testid='node'] {
      cursor: pointer;
    }

    #rete-container [data-testid='node']:active {
      cursor: grabbing;
    }

    /* Connection path colour */
    .connection .main-path {
      stroke: #6366f1;
      stroke-width: 2px;
      fill: none;
    }

    /* Node status bar and dot animations (used by updateNodeDisplay in editor.ts) */
    @keyframes wf-bar-slide {
      0%   { background-position:  200% 0; }
      100% { background-position: -200% 0; }
    }

    @keyframes wf-dot-pulse {
      0%, 100% { opacity: 1;   transform: scale(1);    }
      50%       { opacity: 0.4; transform: scale(0.75); }
    }

    .wf-bar-slide {
      animation: wf-bar-slide 1.5s ease-in-out infinite;
    }

    .wf-dot-pulse {
      animation: wf-dot-pulse 1.2s ease-in-out infinite;
    }
  </style>

    <!-- Main Workflow Layout -->
    <div id="workflow-app" class="flex flex-1 min-h-0">
      <!-- LEFT SIDEBAR: Node Toolbox -->
      <aside
        id="toolbox-sidebar"
        class="w-60 bg-gray-800 border-r border-gray-700 flex-col overflow-y-auto flex-shrink-0 hidden md:flex max-md:fixed max-md:inset-y-0 max-md:left-0 max-md:z-40 max-md:shadow-2xl"
      >
        <div class="p-3 border-b border-gray-700">
          <h2 class="text-white font-bold text-sm mb-2">Nodes</h2>
          <input
            id="node-search"
            type="text"
            placeholder="Search nodes..."
            class="w-full bg-gray-900 border border-gray-600 text-white rounded-md px-2 py-1.5 text-xs focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div id="toolbox-categories" class="flex-1 p-2 space-y-2 text-sm"></div>
      </aside>
      <div
        id="toolbox-backdrop"
        class="hidden max-md:fixed max-md:inset-0 max-md:bg-black/40 max-md:z-30"
      ></div>

      <!-- CENTER: Canvas + Toolbar -->
      <main class="flex-1 flex flex-col min-w-0">
        <!-- Top Toolbar -->
        <div
          id="workflow-toolbar"
          class="h-11 bg-gray-800 border-b border-gray-700 flex items-center px-2 md:px-4 gap-1.5 md:gap-2 flex-shrink-0"
        >
          <button
            id="toolbox-toggle"
            class="md:hidden bg-gray-700 hover:bg-gray-600 text-white p-1.5 rounded-lg transition-colors"
          >
            <i class="ph ph-plus-circle text-lg"></i>
          </button>
          <button
            id="run-btn"
            class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-3 md:px-4 py-1.5 rounded-lg flex items-center gap-1.5 text-sm transition-colors"
          >
            <i class="ph ph-play text-base"></i>
            <span class="hidden md:inline">Run</span>
          </button>
          <button
            id="clear-btn"
            class="bg-gray-700 hover:bg-gray-600 text-white px-2.5 md:px-3 py-1.5 rounded-lg text-sm flex items-center gap-1 transition-colors"
          >
            <i class="ph ph-trash text-base md:hidden"></i>
            <span class="hidden md:inline">Clear</span>
          </button>
          <div class="flex-1"></div>
          <button
            id="save-btn"
            class="bg-gray-700 hover:bg-gray-600 text-white px-2.5 md:px-3 py-1.5 rounded-lg text-sm flex items-center gap-1 transition-colors"
          >
            <i class="ph ph-floppy-disk text-sm"></i>
            <span class="hidden md:inline">Save</span>
          </button>
          <button
            id="load-btn"
            class="bg-gray-700 hover:bg-gray-600 text-white px-2.5 md:px-3 py-1.5 rounded-lg text-sm flex items-center gap-1 transition-colors"
          >
            <i class="ph ph-folder-open text-sm"></i>
            <span class="hidden md:inline">Load</span>
          </button>
          <button
            id="export-btn"
            class="bg-gray-700 hover:bg-gray-600 text-white px-2.5 md:px-3 py-1.5 rounded-lg text-sm flex items-center gap-1 transition-colors"
          >
            <i class="ph ph-export text-sm"></i>
            <span class="hidden md:inline">Export</span>
          </button>
          <button
            id="import-btn"
            class="bg-gray-700 hover:bg-gray-600 text-white px-2.5 md:px-3 py-1.5 rounded-lg text-sm flex items-center gap-1 transition-colors"
          >
            <i class="ph ph-download-simple text-sm"></i>
            <span class="hidden md:inline">Import</span>
          </button>
        </div>

        <!-- Rete.js Canvas -->
        <div id="rete-container" class="flex-1 relative"></div>

        <!-- Bottom Status Bar -->
        <div
          id="status-bar"
          class="h-7 bg-gray-800 border-t border-gray-700 hidden md:flex items-center px-4 text-xs text-gray-400"
        >
          <span id="status-text">Ready</span>
          <div class="flex-1"></div>
          <span id="node-count">0 nodes</span>
        </div>
      </main>

      <!-- RIGHT SIDEBAR: Selected Node Settings -->
      <aside
        id="settings-sidebar"
        class="w-64 bg-gray-800 border-l border-gray-700 flex flex-col overflow-y-auto flex-shrink-0 hidden max-md:fixed max-md:inset-y-0 max-md:right-0 max-md:z-40 max-md:shadow-2xl"
      >
        <div
          class="p-3 border-b border-gray-700 flex items-center justify-between"
        >
          <h2 id="settings-title" class="text-white font-bold text-sm">
            Settings
          </h2>
          <button
            id="close-settings"
            class="text-gray-400 hover:text-white transition-colors"
          >
            <i class="ph ph-x text-base"></i>
          </button>
        </div>
        <div id="settings-content" class="flex-1 p-3 space-y-3"></div>
      </aside>
    </div>

    <!-- Loader Modal -->
    <div
      id="loader-modal"
      class="hidden fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div
        class="bg-gray-800/95 p-8 rounded-2xl flex flex-col items-center gap-4 border border-gray-600/50 shadow-2xl"
      >
        <div class="solid-spinner"></div>
        <p id="loader-text" class="text-white text-lg font-medium">
          Processing...
        </p>
      </div>
    </div>

    <!-- Save Template Modal -->
    <div
      id="save-template-modal"
      class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 hidden"
    >
      <div
        class="bg-gray-800/95 rounded-2xl shadow-2xl p-6 max-w-sm w-full mx-4 border border-gray-600/50"
      >
        <div class="flex items-center gap-3 mb-5">
          <div
            class="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center"
          >
            <i class="ph ph-floppy-disk text-lg text-indigo-400"></i>
          </div>
          <h3 class="text-base font-semibold text-white">Save Template</h3>
        </div>
        <label class="block text-xs font-medium text-gray-400 mb-1.5"
          >Template Name</label
        >
        <input
          id="save-template-name"
          type="text"
          placeholder="e.g. Invoice Workflow"
          class="w-full bg-gray-900/80 border border-gray-600/60 text-white rounded-lg px-3 py-2.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 focus:outline-none placeholder-gray-500 mb-1"
        />
        <p
          id="save-template-error"
          class="text-red-400 text-xs mb-4 hidden"
        ></p>
        <div class="flex gap-2 mt-4">
          <button
            id="save-template-cancel"
            class="flex-1 bg-gray-700/80 hover:bg-gray-600 text-gray-300 font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
          >
            Cancel
          </button>
          <button
            id="save-template-confirm"
            class="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>

    <!-- Load Template Modal -->
    <div
      id="load-template-modal"
      class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 hidden"
    >
      <div
        class="bg-gray-800/95 rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4 border border-gray-600/50"
      >
        <div class="flex items-center gap-3 mb-5">
          <div
            class="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center"
          >
            <i class="ph ph-folder-open text-lg text-indigo-400"></i>
          </div>
          <h3 class="text-base font-semibold text-white">Load Template</h3>
        </div>
        <div
          id="load-template-list"
          class="space-y-1.5 max-h-64 overflow-y-auto mb-4"
        ></div>
        <p
          id="load-template-empty"
          class="text-gray-500 text-sm text-center py-6 hidden"
        >
          No saved templates yet.
        </p>
        <button
          id="load-template-cancel"
          class="w-full bg-gray-700/80 hover:bg-gray-600 text-gray-300 font-medium py-2.5 px-4 rounded-lg transition-colors text-sm mt-2"
        >
          Cancel
        </button>
      </div>
    </div>

    <!-- Alert Modal -->
    <div
      id="alert-modal"
      class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 hidden"
    >
      <div
        class="bg-gray-800/95 rounded-2xl shadow-2xl p-6 max-w-sm w-full mx-4 border border-gray-600/50"
      >
        <h3 id="alert-title" class="text-lg font-semibold text-white mb-2">
          Alert
        </h3>
        <p id="alert-message" class="text-gray-300 text-sm mb-6"></p>
        <button
          id="alert-ok"
          class="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
        >
          OK
        </button>
      </div>
    </div>

    <!-- PDF Password Modal -->
    <div
      id="pdf-password-modal"
      class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 hidden"
    >
      <div
        class="bg-gray-800/95 rounded-2xl shadow-2xl border border-gray-600/50 p-5 w-80 mx-4"
      >
        <h3 class="text-white font-semibold text-sm mb-1">
          <i class="ph ph-lock text-sm"></i> Protected PDF
        </h3>
        <p
          id="pdf-password-filename"
          class="text-gray-400 text-xs mb-3 truncate"
        ></p>
        <input
          type="password"
          id="pdf-password-input"
          placeholder="Enter password"
          class="w-full bg-gray-900 border border-gray-600 text-white rounded-md px-3 py-2 text-xs focus:border-indigo-500 focus:outline-none mb-1"
        />
        <p id="pdf-password-error" class="text-red-400 text-xs mb-3 hidden">
          Incorrect password
        </p>
        <div class="flex gap-2">
          <button
            id="pdf-password-skip"
            class="flex-1 bg-gray-700/80 hover:bg-gray-600 text-gray-300 text-xs py-2 rounded-lg transition-colors"
          >
            Skip
          </button>
          <button
            id="pdf-password-unlock"
            class="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white text-xs py-2 rounded-lg transition-colors"
          >
            Unlock
          </button>
        </div>
      </div>
    </div>
`;

export async function init(): Promise<void> {
  const mod = await import('../js/logic/pdf-workflow-page.js');
  await mod.initializePage();
}

export default { html, init } satisfies PageModule;
