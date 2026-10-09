const fs=require('fs'),path=require('path'),assert=require('assert/strict');
const runtime=process.env.BRAND_NODE_MODULES||'C:/Users/Tomas/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules';
const {chromium}=require(require.resolve('playwright',{paths:[runtime]}));
const out=path.resolve(__dirname,'../../exports/brand-review/2026-10-07_AB');
const boards=JSON.parse(fs.readFileSync(path.join(out,'source/boards.json'),'utf8'));
(async()=>{const browser=await chromium.launch({headless:true});const checks=[];try{
 const page=await browser.newPage();
 for(const [name,w,h] of boards){
  const svg=fs.readFileSync(path.join(out,'boards',name+'.svg'),'utf8');
  assert.ok(!/<(?:text|image|script|filter|style)\b|(?:href|onload)=/i.test(svg),'Board must be self-contained outlined vector');
  await page.setViewportSize({width:w,height:h});await page.setContent('<body style="margin:0">'+svg+'</body>');
  const clipped=await page.locator('svg g[aria-label]').evaluateAll(nodes=>nodes.filter(n=>{const b=n.getBBox();const m=n.getCTM();const pts=[[b.x,b.y],[b.x+b.width,b.y],[b.x,b.y+b.height],[b.x+b.width,b.y+b.height]].map(([x,y])=>new DOMPoint(x,y).matrixTransform(m));const v=n.ownerSVGElement.viewBox.baseVal;return pts.some(p=>p.x<0||p.y<0||p.x>v.width||p.y>v.height);}).map(n=>n.getAttribute('aria-label')));
  assert.deepEqual(clipped,[],'Clipped outlined caption in '+name);
  await page.screenshot({path:path.join(out,'previews',name+'.png')});checks.push({board:name,width:w,height:h,outlinedCaptionsInsideCanvas:true});
 }
 let cases=0;
 for(const route of ['A','B'])for(const file of fs.readdirSync(path.join(out,'vectors',route))){
  const svg=fs.readFileSync(path.join(out,'vectors',route,file),'utf8');
  assert.ok(!/<(?:text|image|script|filter|style)\b|(?:href|onload)=/i.test(svg));
  const lockup=file.includes('lockup');const sizes=lockup?[490]:[16,24,32,48,128];
  for(const width of sizes){
   const height=lockup?140:width;await page.setViewportSize({width,height});
   await page.setContent('<body style="margin:0;background:'+(file.includes('white')?'#101820':'#edf0f0')+'">'+svg.replace('<svg ',`<svg style="width:${width}px;height:${height}px;display:block" `)+'</body>');
   const ok=await page.locator('svg').evaluate(n=>{const b=n.getBBox();const v=n.viewBox.baseVal;return b.x>=0&&b.y>=0&&b.x+b.width<=v.width&&b.y+b.height<=v.height&&b.width>0&&b.height>0;});
   assert.ok(ok,'Clipped or empty '+route+'/'+file);cases++;
  }
 }
 await page.setViewportSize({width:1100,height:1000});await page.setContent(fs.readFileSync(path.join(out,'DESIGN_BRIEF_EN.html'),'utf8'));
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=1100),'Brief overflows horizontally');
 const scratch=path.resolve(__dirname,'../../scratch/designer-review');fs.mkdirSync(scratch,{recursive:true});
 await page.screenshot({path:path.join(scratch,'brief-html.png')});
 const report={status:'pass',boardChecks:checks,vectorCases:cases,vectorFiles:16,briefHtmlHorizontalOverflow:false,note:'Export portability and bounds checks; no aesthetic or recognition validation.'};
 fs.writeFileSync(path.join(out,'QA_REPORT.json'),JSON.stringify(report,null,2)+'\n');
 console.log(JSON.stringify({status:'pass',boards:boards.length,vectorFiles:16,vectorCases:cases}));
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exit(1)});
