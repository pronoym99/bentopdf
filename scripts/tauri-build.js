#!/usr/bin/env node
/**
 * Tauri-specific Vite build script.
 *
 * Sets WASM provider URLs to locally bundled copies in public/wasm/ so the
 * desktop build is fully self-contained and works offline with no CDN
 * dependency.  Any URL already present in the environment (e.g. set by CI)
 * is left unchanged so developers can still override them if needed.
 */
'use strict';

const { execSync } = require('child_process');

// Point WASM loaders at the local copies that ship inside the app bundle.
// These defaults are only applied when the variable is not already set.
process.env.VITE_WASM_PYMUPDF_URL =
  process.env.VITE_WASM_PYMUPDF_URL || './wasm/pymupdf/';
process.env.VITE_WASM_GS_URL =
  process.env.VITE_WASM_GS_URL || './wasm/ghostscript/';
process.env.VITE_WASM_CPDF_URL =
  process.env.VITE_WASM_CPDF_URL || './wasm/cpdf/';

console.log('[tauri-build] WASM URLs (local bundles):');
console.log('  VITE_WASM_PYMUPDF_URL =', process.env.VITE_WASM_PYMUPDF_URL);
console.log('  VITE_WASM_GS_URL      =', process.env.VITE_WASM_GS_URL);
console.log('  VITE_WASM_CPDF_URL    =', process.env.VITE_WASM_CPDF_URL);

execSync('npm run build', { stdio: 'inherit', env: process.env });
