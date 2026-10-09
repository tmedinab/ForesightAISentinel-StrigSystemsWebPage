const fs = require('fs'), path = require('path'), http = require('http'), assert = require('assert/strict');
const runtime = process.env.BRAND_NODE_MODULES || 'C:/Users/Tomas/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules';
const { chromium } = require(require.resolve('playwright', { paths: [runtime] }));
const root = path.resolve(__dirname, '../..');
(async () => {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const file = path.resolve(root, '.' + (url.pathname === '/' ? '/index.html' : url.pathname));
    if (!file.startsWith(root + path.sep)) return res.writeHead(403).end();
    fs.readFile(file, (err, data) => {
      if (err) return res.writeHead(404).end();
      const types = { '.svg': 'image/svg+xml', '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'application/javascript', '.png': 'image/png' };
      res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' }).end(data);
    });
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  let browser;
  const results = [];
  try {
    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    // Keep verification local; third-party fonts fall back to the site's font stack.
    await page.route('**/*', route => route.request().url().startsWith(base) ? route.continue() : route.abort());
    for (const width of [1440, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const file of ['index.html', 'privacy.html', 'terms.html', 'dossier.html', '404.html']) {
        await page.goto(`${base}/${file}`, { waitUntil: 'load' });
        const images = await page.locator('img[src*="brand/web/"]').evaluateAll(nodes => nodes.map(n => ({ src: n.getAttribute('src'), loaded: n.complete && n.naturalWidth > 0, alt: n.alt })));
        assert.ok(images.length && images.every(i => i.loaded && i.alt), `Brand images ${file}/${width}`);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
        if (overflow) console.log(await page.evaluate(() => [...document.querySelectorAll('body *')].filter(n => n.getBoundingClientRect().right > innerWidth + 1).map(n => ({ tag: n.tagName, class: n.className, right: n.getBoundingClientRect().right })).slice(0, 12)));
        assert.equal(overflow, false, `Overflow ${file}/${width}`);
        const favicon = await page.locator('link[rel="icon"]').getAttribute('href');
        assert.ok(favicon.endsWith('assets/img/brand/web/favicon.svg'));
        assert.equal((await page.request.get(new URL(favicon, `${base}/${file}`).href)).status(), 200);
        if (file === 'index.html') {
          await page.screenshot({ path: path.join(root, `scratch/identity-A-${width}.png`) });
          const overlap = await page.locator('.site-header').evaluate(header => {
            const logo = header.querySelector('.brand').getBoundingClientRect();
            const others = [...header.children[0].children].filter(n => !n.classList.contains('brand'));
            return others.some(n => { const r = n.getBoundingClientRect(); return r.width && r.left < logo.right && r.right > logo.left && r.top < logo.bottom && r.bottom > logo.top; });
          });
          assert.equal(overlap, false, `Header overlap ${width}`);
        }
        results.push({ file, width, images: images.length, overflow: false, favicon: 'pass' });
      }
    }
    await page.setViewportSize({ width: 1000, height: 1000 });
    await page.goto(`${base}/index.html`, { waitUntil: 'load' });
    await page.locator('.hero-actions [data-open-modal="brief-modal"]').click();
    await page.emulateMedia({ media: 'print' });
    assert.equal(await page.locator('.brief-brand .logo-on-screen').isVisible(), false);
    assert.equal(await page.locator('.brief-brand .logo-on-print').isVisible(), true);
    assert.ok(await page.locator('.brief-brand').evaluate(n => n.getBoundingClientRect().top < 50), 'Print logo begins at the top, without hidden-page whitespace');
    await page.screenshot({ path: path.join(root, 'scratch/identity-A-print.png'), fullPage: true });
    fs.writeFileSync(path.join(root, 'scratch/web-identity-results.json'), JSON.stringify({ family: 'A', results, print: 'dark SVG visible; light SVG hidden', externalRequests: 'blocked' }, null, 2));
    console.log(JSON.stringify({ cases: results.length, print: 'pass', assets: 'pass', favicon: 'pass', overflow: 'none' }));
  } finally { if (browser) await browser.close(); await new Promise(resolve => server.close(resolve)); }
})().catch(e => { console.error(e); process.exitCode = 1; });
