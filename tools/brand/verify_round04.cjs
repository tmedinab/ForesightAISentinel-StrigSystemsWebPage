const fs = require('fs');
const path = require('path');
const assert = require('assert/strict');
const runtime = process.env.BRAND_NODE_MODULES || 'C:/Users/Tomas/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules';
const sharp = require(require.resolve('sharp', {paths:[runtime]}));
const {chromium} = require(require.resolve('playwright', {paths:[runtime]}));
const root = path.resolve(__dirname,'../..');
const directory = path.join(root,'assets/img/brand/round-04');
function mask(raw) {
  const out=[];
  for(let i=3;i<raw.length;i+=4) out.push(raw[i]>=128);
  return out;
}
(async()=>{
  const browser=await chromium.launch({headless:true});
  const results=[];
  try {
    const scenarios=[];
    for(const name of ['strig-01-campo','strig-02-bilateral','athene-01-centinela']) {
      for(const size of [16,24,32,48,128,256]) for(const dpr of [1,2]) scenarios.push({name,width:size,height:size,dpr});
    }
    for(const width of [131,202]) scenarios.push({name:'strig-03-firma',width,height:Math.ceil(width*760/3000),dpr:1});
    for(const name of ['strig-01-campo-lockup','strig-02-bilateral-lockup','strig-03-firma-lockup','athene-01-centinela-lockup']) {
      scenarios.push({name,width:name.startsWith('athene')?490:350,height:name.startsWith('athene')?140:100,dpr:1});
    }
    for(const scenario of scenarios) {
      const svg=fs.readFileSync(path.join(directory,scenario.name+'.svg'),'utf8');
      assert.ok(!/<(?:script|image|text|filter)\b|(?:href|onload|onclick)=/i.test(svg),'Unexpected resource/content in '+scenario.name);
      const viewBox=svg.match(/viewBox="([^"]+)"/)[1].split(/\s+/).map(Number);
      assert.ok(svg.includes('<title') && svg.includes('aria-labelledby'));
      const context=await browser.newContext({viewport:{width:scenario.width,height:scenario.height},deviceScaleFactor:scenario.dpr});
      try {
        const page=await context.newPage();
        await page.setContent('<html><body style="margin:0;background:transparent;color:black">'+svg.replace('<svg ',`<svg style="display:block;width:${scenario.width}px;height:${scenario.height}px" `)+'</body></html>');
        const chrome=await page.screenshot({omitBackground:true});
        const pixelWidth=scenario.width*scenario.dpr,pixelHeight=scenario.height*scenario.dpr;
        const chromeRaw=await sharp(chrome).ensureAlpha().raw().toBuffer();
        const librsvgRaw=await sharp(Buffer.from(svg),{density:72*pixelWidth/viewBox[2]}).resize(pixelWidth,pixelHeight,{fit:'contain',background:{r:0,g:0,b:0,alpha:0}}).ensureAlpha().raw().toBuffer();
        const a=mask(chromeRaw),b=mask(librsvgRaw);
        assert.equal(a.length,b.length);
        let union=0,intersection=0,inkA=0,inkB=0;
        for(let i=0;i<a.length;i++){if(a[i])inkA++;if(b[i])inkB++;if(a[i]||b[i])union++;if(a[i]&&b[i])intersection++;}
        assert.ok(inkA>0 && inkB>0,'Empty rendering '+scenario.name);
        const iou=intersection/union;
        assert.ok(iou>=0.72,`Renderer geometry differs: ${scenario.name} ${scenario.width}@${scenario.dpr} IoU=${iou}`);
        results.push({...scenario,inkPixelsChromium:inkA,inkPixelsLibrsvg:inkB,maskIoU:Number(iou.toFixed(4))});
      } finally {await context.close();}
    }
    const result={status:'pass',chromiumVersion:browser.version(),sharpVersion:sharp.versions.sharp,librsvgVersion:sharp.versions.rsvg,scenarioCount:results.length,note:'Alpha-mask agreement is a rendering check, not an aesthetic, legibility or recognition score.',results};
    fs.writeFileSync(path.join(directory,'render-verification.json'),JSON.stringify(result,null,2)+'\n');
    console.log(JSON.stringify({status:result.status,scenarioCount:results.length,minMaskIoU:Math.min(...results.map(x=>x.maskIoU)),chromium:result.chromiumVersion,librsvg:result.librsvgVersion}));
  } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exit(1)});
