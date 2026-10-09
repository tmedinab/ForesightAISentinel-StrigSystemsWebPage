const fs=require('fs'),path=require('path'),http=require('http'),assert=require('assert/strict');
const runtime=process.env.BRAND_NODE_MODULES||'C:/Users/Tomas/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules';
const {chromium}=require(require.resolve('playwright',{paths:[runtime]}));
const root=path.resolve(__dirname,'..'),pub=path.join(root,'build/public');
(async()=>{
 const server=http.createServer((req,res)=>{
  const file=path.resolve(pub,'.'+new URL(req.url,'http://localhost').pathname.replace(/^\/$/,'/index.html'));
  if(!file.startsWith(pub+path.sep))return res.writeHead(403).end();
  fs.readFile(file,(err,data)=>{
   if(err)return res.writeHead(404).end();
   const types={'.html':'text/html; charset=utf-8','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg'};
   res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'}).end(data);
  });
 });
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const base=`http://127.0.0.1:${server.address().port}`;
 let browser;
 try{
  browser=await chromium.launch({headless:true});const page=await browser.newPage();const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.route('**/*',r=>r.request().url().startsWith(base)?r.continue():r.abort());
  for(const width of [1440,768,390,320]){
   await page.setViewportSize({width,height:900});
   for(const file of ['index.html','privacy.html','terms.html','404.html']){
    await page.goto(`${base}/${file}`,{waitUntil:'load'});
    await page.locator('img').evaluateAll(imgs=>imgs.forEach(i=>i.loading='eager'));
    await page.waitForFunction(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0));
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`${file}/${width} overflow`);
    assert.ok(await page.locator('img').evaluateAll(imgs=>imgs.every(i=>i.complete&&i.naturalWidth>0)),`${file} image load`);
    if(file==='index.html'){
     for(const lang of ['es','en']){
      await page.evaluate(l=>setLanguage(l),lang);
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`${lang}/${width} overflow`);
      assert.equal(await page.locator('.institutional-logo-space').count(),2);
      for(const alt of ['IncubaUdeC','Corfo']) {
       const logo=page.locator(`.institutional-logo-space img[alt="${alt}"]`);
       assert.ok(await logo.isVisible(),`${alt}/${lang}/${width} visible`);
       assert.ok(await logo.evaluate(i=>i.complete&&i.naturalWidth>0),`${alt} loaded`);
      }
      await page.locator('.hero-actions [data-open-modal="brief-modal"]').click();
      await page.locator('#brief-modal').waitFor({state:'visible'});
      assert.ok(await page.locator('#brief-modal').isVisible());
      assert.equal(await page.locator('#brief-modal').innerText().then(t=>/disuasi|deterrence|IaaS|titularidad exclusiva|owned exclusively/i.test(t)),false);
      await page.keyboard.press('Escape');
      assert.ok(await page.locator('.hero-actions [data-open-modal="brief-modal"]').evaluate(n=>n===document.activeElement));
      await page.locator('.hero-actions [data-open-modal="contact-modal"]').click();
      await page.locator('#contact-modal').waitFor({state:'visible'});
      assert.equal(await page.locator('.intent-selector-pills').getAttribute('role'),'group');
      for(const intent of ['pilot','briefing','alliances']){
       await page.locator(`[data-intent-target="${intent}"]`).click();
       assert.equal(await page.locator('[aria-pressed="true"]').count(),1);
       assert.equal(await page.locator('.checkbox-text a').count(),2);
      }
      await page.keyboard.press('Escape');
     }
     if([1440,390].includes(width)){
      await page.evaluate(()=>setLanguage('es'));
      await page.screenshot({path:path.join(root,`scratch/public-final-${width}.png`),fullPage:true});
     }
    }
   }
  }
  await page.goto(base,{waitUntil:'load'});await page.evaluate(()=>setLanguage('en'));
  await page.locator('.hero-actions [data-open-modal="contact-modal"]').click();
  await page.locator('#contact-name').fill('Local test');await page.locator('#contact-email').fill('test@example.invalid');
  await page.locator('#contact-consent').check();
  // Intentional failure is mocked locally: no email is sent.
  await page.route('https://formsubmit.co/**',r=>r.abort());
  await page.locator('#contact-submit-btn').click();
  await page.locator('#contact-error').waitFor({state:'visible'});
  const fallback=await page.locator('#contact-error .alert-link').getAttribute('href');
  assert.ok(fallback.startsWith('mailto:contacto@strigsystems.tech?cc=tmedina@strigsystems.tech'));
  assert.ok(decodeURIComponent(fallback).includes('test@example.invalid'));
  assert.ok(await page.locator('#contact-submit-btn').isEnabled());
  assert.equal(errors.length,0,errors.join('\n'));
  for(const forbidden of ['docs/README.md','scratch/documentation-backup/2026-10-08-before-consolidation.zip','exports/brand-review/2026-10-07_AB/README.md','dossier.html','AGENTS.md'])assert.equal((await page.request.get(`${base}/${forbidden}`)).status(),404,forbidden);
  console.log('PASS: 16 page/viewport cases; ES/EN, modal controls, legal links, email fallback, loaded assets, no overflow/errors; internal material excluded. No external submission.');
 }finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1});
