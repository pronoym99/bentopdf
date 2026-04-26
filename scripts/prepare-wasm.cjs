#!/usr/bin/env node
/**
 * Copies WASM module assets from node_modules into public/wasm/ so they are
 * served locally by the Tauri desktop build (no CDN required at runtime).
 *
 * Run automatically by scripts/tauri-build.js before the Vite build.
 * Safe to re-run — skips files that are already up-to-date (same size).
 *
 * Packages sourced:
 *   @bentopdf/pymupdf-wasm  → public/wasm/pymupdf/
 *   @bentopdf/gs-wasm       → public/wasm/ghostscript/
 *   coherentpdf             → public/wasm/cpdf/
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PUBLIC_WASM = path.join(ROOT, 'public', 'wasm');

/** Copy a file, creating parent dirs as needed. Skips if already identical. */
function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const srcStat = fs.statSync(src);
  if (fs.existsSync(dest) && fs.statSync(dest).size === srcStat.size) return;
  fs.copyFileSync(src, dest);
  console.log(`  copied  ${path.relative(ROOT, dest)}`);
}

/** Copy all files from srcDir into destDir (non-recursive). */
function copyDir(srcDir, destDir) {
  for (const name of fs.readdirSync(srcDir)) {
    const srcFile = path.join(srcDir, name);
    if (fs.statSync(srcFile).isFile()) {
      copyFile(srcFile, path.join(destDir, name));
    }
  }
}

/** Abort with a friendly message when a required package is missing. */
function requirePackage(pkgPath, pkgName) {
  if (!fs.existsSync(pkgPath)) {
    console.error(
      `[prepare-wasm] ERROR: Cannot find "${pkgName}" in node_modules.\n` +
      `  Run  npm install  (or  bun install / pnpm install)  and retry.`
    );
    process.exit(1);
  }
}

function run() {
  // ── PyMuPDF ──────────────────────────────────────────────────────────────
  const pymupdfBase = path.join(ROOT, 'node_modules', '@bentopdf', 'pymupdf-wasm');
  requirePackage(pymupdfBase, '@bentopdf/pymupdf-wasm');
  console.log('[prepare-wasm] PyMuPDF…');
  copyFile(
    path.join(pymupdfBase, 'dist', 'index.js'),
    path.join(PUBLIC_WASM, 'pymupdf', 'dist', 'index.js')
  );
  copyDir(
    path.join(pymupdfBase, 'assets'),
    path.join(PUBLIC_WASM, 'pymupdf', 'assets')
  );

  // ── Ghostscript ──────────────────────────────────────────────────────────
  requirePackage(path.join(ROOT, 'node_modules', '@bentopdf', 'gs-wasm'), '@bentopdf/gs-wasm');
  const gsBase = path.join(ROOT, 'node_modules', '@bentopdf', 'gs-wasm', 'assets');
  console.log('[prepare-wasm] Ghostscript…');
  copyFile(path.join(gsBase, 'gs.js'),   path.join(PUBLIC_WASM, 'ghostscript', 'gs.js'));
  copyFile(path.join(gsBase, 'gs.wasm'), path.join(PUBLIC_WASM, 'ghostscript', 'gs.wasm'));

  // ── CoherentPDF ──────────────────────────────────────────────────────────
  requirePackage(path.join(ROOT, 'node_modules', 'coherentpdf'), 'coherentpdf');
  const cpdfBase = path.join(ROOT, 'node_modules', 'coherentpdf', 'dist');
  console.log('[prepare-wasm] CoherentPDF…');
  copyFile(
    path.join(cpdfBase, 'coherentpdf.browser.min.js'),
    path.join(PUBLIC_WASM, 'cpdf', 'coherentpdf.browser.min.js')
  );

  console.log('[prepare-wasm] Done.');
}

run();
