const fs=require('fs'),path=require('path'),assert=require('assert/strict');
const runtime=process.env.BRAND_NODE_MODULES||'C:/Users/Tomas/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules';
const {chromium}=require(require.resolve('playwright',{paths:[runtime]}));
const out=path.resolve(__dirname,'../../assets/img/brand/current-comparison');
(async()=>{const browser=await chromium.launch({headless:true});try{
 const page=await browser.newPage({viewport:{width:1600,height:1220}});
 await page.setContent('<body style="margin:0">'+fs.readFileSync(path.join(out,'three-current-systems.svg'),'utf8')+'</body>');
 await page.evaluate(()=>document.fonts.ready);
 const clipped=await page.locator('svg text').evaluateAll(nodes=>nodes.filter(n=>{const b=n.getBBox();return b.x<0||b.y<0||b.x+b.width>1600||b.y+b.height>1220;}).map(n=>n.textContent));
 assert.deepEqual(clipped,[]);
 await page.screenshot({path:path.join(out,'three-current-systems.png')});
 console.log('Comparison rendered; captions inside canvas.');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exit(1)});
