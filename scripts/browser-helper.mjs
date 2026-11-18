import { createRequire } from 'node:module';
import fs from 'node:fs';

const require = createRequire(import.meta.url);
// Playwright is a dev-only QA dependency. Prefer a repo-local install
// (npm i -D playwright) and fall back to the shared exvorta-main install,
// which is the only copy on this machine today.
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  ({ chromium } = require('/home/hamid/github/exvorta-main/node_modules/playwright'));
}

const CANDIDATE_BINS = [
  '/home/hamid/.cache/ms-playwright/chromium_headless_shell-1255/chrome-headless-shell-linux64/chrome-headless-shell',
  '/home/hamid/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome',
];

export async function launchPlaywrightBrowser({ useProxy = false } = {}) {
  const executablePath = CANDIDATE_BINS.find((p) => fs.existsSync(p));
  const launchOpts = {
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
  };
  if (executablePath) {
    launchOpts.executablePath = executablePath;
  }
  if (useProxy) {
    const proxyServer = process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy || '';
    if (proxyServer && !proxyServer.startsWith('socks')) {
      launchOpts.proxy = { server: proxyServer };
    }
  }
  return chromium.launch(launchOpts);
}
