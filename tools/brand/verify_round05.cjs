// Development-only rendering and portability check. Does not assess recognition.
const fs=require('fs'),path=require('path'),assert=require('assert/strict');
const runtime=process.env.BRAND_NODE_MODULES || 'C:/Users/Tomas/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules';
const {chromium}=require(require.resolve('playwright',{paths:[runtime]}));
const sharp=require(require.resolve('sharp',{paths:[runtime]}));
const directory=process.argv[2]?path.resolve(process.argv[2]):path.resolve(__dirname,'../../assets/img/brand/round-05');
const boards=fs.existsSync(path.join(directory,'boards.json'))?JSON.parse(fs.readFileSync(path.join(directory,'boards.json'),'utf8')):[['strig-evolution',1600,1290],['athene-structures',1800,1100],['native-sizes',1200,1710]];
const studies=JSON.parse(fs.readFileSync(path.join(directory,'studies.json'),'utf8'));
(async()=>{
 const browser=await chromium.launch({headless:true});const results=[];
 try {
  const page=await browser.newPage();
  for(const [name,w,h] of boards){
   await page.setViewportSize({width:w,height:h});
   await page.setContent('<body style="margin:0">'+fs.readFileSync(path.join(directory,name+'.svg'),'utf8')+'</body>');
   await page.evaluate(()=>document.fonts.ready);
   const overflow=await page.locator('svg text').evaluateAll(nodes=>nodes.filter(n=>{const b=n.getBBox();const s=n.ownerSVGElement.viewBox.baseVal;return b.x<0||b.y<0||b.x+b.width>s.width||b.y+b.height>s.height;}).map(n=>n.textContent));
   assert.deepEqual(overflow,[],'Caption clipped in '+name);
   await page.screenshot({path:path.join(directory,name+'.png')});
  }
  for(const study of studies)for(const lockup of [false,true]){
   const name=study.id+(lockup?'-lockup':'');const svg=fs.readFileSync(path.join(directory,name+'.svg'),'utf8');
   assert.ok(!/<(?:script|image|text|filter)\b|(?:href|onload|onclick)=/i.test(svg));
   assert.ok(svg.includes('aria-labelledby')&&svg.includes('<title'));
   const sizes=lockup?[490]:[16,24,32,48,128];
   for(const width of sizes){
    const height=lockup?140:width;
    await page.setViewportSize({width,height});
    await page.setContent('<body style="margin:0;background:transparent;color:black">'+svg.replace('<svg ',`<svg style="display:block;width:${width}px;height:${height}px" `)+'</body>');
    const bounds=await page.locator('svg').evaluate(n=>{const b=n.getBBox();const v=n.viewBox.baseVal;return {x:b.x,y:b.y,w:b.width,h:b.height,vw:v.width,vh:v.height};});
    assert.ok(bounds.x>=0&&bounds.y>=0&&bounds.x+bounds.w<=bounds.vw&&bounds.y+bounds.h<=bounds.vh,'Clipped geometry '+name);
    const chrome=await sharp(await page.screenshot({omitBackground:true})).ensureAlpha().raw().toBuffer();
    const viewBox=svg.match(/viewBox="([^"]+)"/)[1].split(/\s+/).map(Number);
    const lib=await sharp(Buffer.from(svg),{density:72*width/viewBox[2]}).resize(width,height,{fit:'contain',background:{r:0,g:0,b:0,alpha:0}}).ensureAlpha().raw().toBuffer();
    assert.equal(chrome.length,lib.length);let union=0,intersection=0;
    for(let i=3;i<chrome.length;i+=4){const a=chrome[i]>=128,b=lib[i]>=128;if(a||b)union++;if(a&&b)intersection++;}
    assert.ok(union>0);const iou=intersection/union;assert.ok(iou>=.72,name+' '+width+' render mismatch '+iou);
    results.push({name,width,height,bounds,maskIoU:Number(iou.toFixed(4))});
   }
  }
  const report={status:'pass',scenarioCount:results.length,boardCount:boards.length,chromiumVersion:browser.version(),librsvgVersion:sharp.versions.rsvg,note:'Rendering/bounds verification only. Letter recognition, aesthetics and customer preference are not measured.',results};
  fs.writeFileSync(path.join(directory,'render-verification.json'),JSON.stringify(report,null,2)+'\n');
  console.log(JSON.stringify({status:'pass',scenarios:results.length,minMaskIoU:Math.min(...results.map(r=>r.maskIoU)),boards:boards.length}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
