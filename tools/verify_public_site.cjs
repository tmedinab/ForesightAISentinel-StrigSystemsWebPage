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
      assert.equal(await page.locator('#contact-reason').inputValue(),'athene');
      assert.equal(await page.locator('#contact-message').getAttribute('required'),'');
      assert.equal(await page.locator('#contact-form .checkbox-text a').count(),1);
      assert.equal(await page.locator('#contact-form .checkbox-text a').getAttribute('href'),'privacy.html');
      for(const intent of ['athene','collaboration','general']){
       await page.locator('#contact-reason').selectOption(intent);
       assert.equal(await page.locator('#contact-reason').inputValue(),intent);
       assert.ok((await page.locator('#contact-message-hint').innerText()).length>20);
       assert.equal(await page.locator('#contact-region, #contact-briefing-time, #contact-alliance-type').count(),0);
      }
      await page.locator('#contact-reason').selectOption('athene');
      await page.evaluate(l=>setLanguage(l),lang==='es'?'en':'es');
      assert.equal(await page.locator('#contact-reason').inputValue(),'athene');
      await page.evaluate(l=>setLanguage(l),lang);
      if([1440,390].includes(width))await page.screenshot({path:path.join(root,`scratch/contact-${lang}-${width}.png`)});
      await page.keyboard.press('Escape');
      await page.locator('[data-open-modal="join-modal"]').click();
      await page.locator('#join-modal').waitFor({state:'visible'});
      await page.waitForFunction(()=>document.activeElement.id==='join-name');
      assert.equal(await page.locator('#join-modal select').count(),0);
      assert.equal(await page.locator('#join-modal').evaluate(n=>n.scrollWidth>n.clientWidth),false);
      if([1440,390].includes(width))await page.screenshot({path:path.join(root,`scratch/join-${lang}-${width}.png`)});
      await page.locator('#join-modal .modal-close').focus();
      await page.keyboard.press('Shift+Tab');
      assert.ok(await page.locator('#join-submit-btn').evaluate(n=>n===document.activeElement));
      await page.keyboard.press('Tab');
      assert.ok(await page.locator('#join-modal .modal-close').evaluate(n=>n===document.activeElement));
      await page.keyboard.press('Escape');
      assert.ok(await page.locator('[data-open-modal="join-modal"]').evaluate(n=>n===document.activeElement));
     }
     if([1440,390].includes(width)){
      await page.evaluate(async()=>{setLanguage('es');await Promise.all([...document.images].map(i=>i.decode()));});
      await page.locator('.institutional-support').scrollIntoViewIfNeeded();
      await page.evaluate(()=>scrollTo(0,0));
      await page.waitForTimeout(150);
      await page.screenshot({path:path.join(root,`scratch/public-final-${width}.png`),fullPage:true});
     }
    }
   }
  }
  await page.setViewportSize({width:1440,height:1000});
  await page.goto(base,{waitUntil:'load'});await page.evaluate(()=>setLanguage('en'));
  await page.locator('.btn-header').click();
  assert.equal(await page.locator('#contact-reason').inputValue(),'general');
  await page.locator('#contact-name').fill('Local test');await page.locator('#contact-email').fill('test@example.invalid');
  await page.locator('#contact-consent').check();
  await page.locator('#contact-submit-btn').click();
  assert.ok(await page.locator('#contact-validation-error').isVisible());
  assert.ok(await page.locator('#contact-message').evaluate(n=>n===document.activeElement));
  await page.locator('#contact-message').fill('Local test: nighttime forestry enquiry');
  // Intentional failure is mocked locally: no email is sent.
  await page.route('https://formsubmit.co/**',r=>r.abort());
  await page.locator('#contact-submit-btn').click();
  await page.locator('#contact-error').waitFor({state:'visible'});
  const fallback=await page.locator('#contact-error .alert-link').getAttribute('href');
  assert.ok(fallback.startsWith('mailto:contacto@strigsystems.tech?cc=tmedina@strigsystems.tech'));
  assert.ok(decodeURIComponent(fallback).includes('test@example.invalid'));
  assert.ok(await page.locator('#contact-submit-btn').isEnabled());
  assert.ok(decodeURIComponent(fallback).includes('Local test: nighttime forestry enquiry'));
  // A 200 response with provider rejection must not claim success.
  await page.unroute('https://formsubmit.co/**');
  await page.route('https://formsubmit.co/**',r=>r.fulfill({status:200,contentType:'application/json',body:JSON.stringify({success:false})}));
  await page.locator('#contact-submit-btn').click();
  await page.locator('#contact-error').waitFor({state:'visible'});
  assert.equal(await page.locator('#contact-success').isVisible(),false);
  await page.unroute('https://formsubmit.co/**');
  let submitted;
  await page.route('https://formsubmit.co/**',r=>{
   submitted=r.request().postDataJSON();
   return r.fulfill({status:200,contentType:'application/json',body:JSON.stringify({success:true})});
  });
  await page.locator('#contact-reason').selectOption('collaboration');
  await page.locator('#contact-submit-btn').click();
  await page.locator('#contact-success').waitFor({state:'visible'});
  assert.equal(submitted.Email,'test@example.invalid');
  assert.equal(submitted.Empresa_Organizacion,'');
  assert.equal(submitted.Telefono,'');
  assert.ok(submitted.Motivo.toLowerCase().includes('collaboration'));
  assert.equal(submitted.Mensaje,'Local test: nighttime forestry enquiry');
  assert.equal('Horario_Preferente' in submitted,false);
  assert.ok(await page.locator('#contact-success-title').evaluate(n=>n===document.activeElement));
  assert.equal(await page.locator('#contact-form').isVisible(),false);
  await page.evaluate(()=>setLanguage('es'));
  assert.equal(await page.locator('#contact-success-title').innerText(),'Tu consulta fue enviada.');
  await page.keyboard.press('Escape');
  assert.ok(await page.locator('.btn-header').evaluate(n=>n===document.activeElement));
  await page.locator('.holding-ip-card [data-open-modal="contact-modal"]').click();
  assert.equal(await page.locator('#contact-reason').inputValue(),'athene');
  assert.ok(await page.locator('#contact-form').isVisible());
  assert.equal(await page.locator('#contact-message').inputValue(),'');
  await page.keyboard.press('Escape');
  await page.locator('[data-open-modal="join-modal"]').click();
  await page.locator('#join-submit-btn').click();
  assert.ok(await page.locator('#join-validation-error').isVisible());
  await page.locator('#join-name').fill('Local contributor');
  await page.locator('#join-email').fill('contributor@example.invalid');
  await page.locator('#join-message').fill('I would like to contribute and learn.');
  await page.locator('#join-consent').check();
  await page.locator('#join-portfolio').fill('invalid-url');
  await page.locator('#join-submit-btn').click();
  assert.ok(await page.locator('#join-portfolio').evaluate(n=>n===document.activeElement));
  await page.locator('#join-portfolio').fill('https://example.invalid/portfolio');
  await page.locator('#join-studies').fill('Engineering');
  await page.locator('#join-institution').fill('Local university');
  await page.locator('#join-availability').fill('A few hours per week');
  await page.keyboard.press('Escape');
  await page.locator('.btn-header').click();
  assert.equal(await page.locator('#contact-name').inputValue(),'');
  await page.keyboard.press('Escape');
  await page.locator('[data-open-modal="join-modal"]').click();
  assert.equal(await page.locator('#join-message').inputValue(),'I would like to contribute and learn.');
  await page.unroute('https://formsubmit.co/**');
  await page.route('https://formsubmit.co/**',r=>r.abort());
  await page.locator('#join-submit-btn').click();
  await page.locator('#join-error').waitFor({state:'visible'});
  const joinFallback=decodeURIComponent(await page.locator('#join-error .alert-link').getAttribute('href'));
  for(const value of ['Engineering','Local university','A few hours per week','https://example.invalid/portfolio'])assert.ok(joinFallback.includes(value));
  await page.unroute('https://formsubmit.co/**');
  await page.route('https://formsubmit.co/**',r=>{
   submitted=r.request().postDataJSON();
   return r.fulfill({status:200,contentType:'application/json',body:JSON.stringify({success:true})});
  });
  // Optional portfolio must accept an empty value.
  await page.locator('#join-portfolio').fill('');
  await page.locator('#join-submit-btn').click();
  await page.locator('#join-success').waitFor({state:'visible'});
  assert.equal(submitted.Email,'contributor@example.invalid');
  assert.equal(submitted.Formacion,'Engineering');
  assert.equal(submitted.Portafolio,'');
  assert.equal('Telefono' in submitted,false);
  assert.ok(await page.locator('#join-success-title').evaluate(n=>n===document.activeElement));
  await page.keyboard.press('Escape');
  await page.locator('[data-open-modal="join-modal"]').click();
  assert.equal(await page.locator('#join-name').inputValue(),'');
  await page.keyboard.press('Escape');
  assert.equal(errors.length,0,errors.join('\n'));
  for(const forbidden of ['docs/README.md','scratch/documentation-backup/2026-10-08-before-consolidation.zip','exports/brand-review/2026-10-07_AB/README.md','dossier.html','AGENTS.md'])assert.equal((await page.request.get(`${base}/${forbidden}`)).status(),404,forbidden);
  console.log('PASS: 16 page/viewport cases; ES/EN, contact and participation contexts, independent drafts, optional URL validation, keyboard focus, required message, rejected/successful mocked submissions, legal links, email fallback, loaded assets, no overflow/errors; internal material excluded. No external submission.');
 }finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1});
