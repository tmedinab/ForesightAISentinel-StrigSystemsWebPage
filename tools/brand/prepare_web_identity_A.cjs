const fs=require('fs'),path=require('path');
const runtime='C:/Users/Tomas/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules';
const {chromium}=require(require.resolve('playwright',{paths:[runtime]}));
const sharp=require(require.resolve('sharp',{paths:[runtime]}));
const root=path.resolve(__dirname,'../..'),folder=path.join(root,'assets/img/brand/web');
(async()=>{const browser=await chromium.launch({headless:true});try{
 const page=await browser.newPage();const dimensions={};
 for(const brand of ['strig','athene'])for(const variant of ['light','dark']){
  const file=path.join(folder,`${brand}-lockup-${variant}.svg`);let svg=fs.readFileSync(file,'utf8');
  await page.setContent(svg);const b=await page.locator('svg').evaluate(n=>{const b=n.getBBox();return{x:b.x,y:b.y,width:b.width,height:b.height};});
  const pad=4;svg=svg.replace(/viewBox="[^"]+"/,`viewBox="${b.x-pad} ${b.y-pad} ${b.width+pad*2} ${b.height+pad*2}"`);
  fs.writeFileSync(file,svg);dimensions[brand]={width:b.width+8,height:b.height+8};
 }
 const embed=(brand,x,y,w,h)=>fs.readFileSync(path.join(folder,`${brand}-lockup-light.svg`),'utf8').replace('<svg ',`<svg x="${x}" y="${y}" width="${w}" height="${h}" `);
 const social=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="social-title"><title id="social-title">Strig Systems / Athene — prototipo en desarrollo</title><rect width="1200" height="630" fill="#07090e"/><g stroke="#94a3b8" opacity=".12"><path d="M0 126h1200M0 252h1200M0 378h1200M0 504h1200M240 0v630M480 0v630M720 0v630M960 0v630"/></g>${embed('strig',76,50,280,86)}${embed('athene',76,210,770,122)}<text x="80" y="370" fill="#cbd5e1" font-family="Arial,sans-serif" font-size="29">Sistema centinela aéreo autónomo</text><path d="M80 409h1040" stroke="#00e5ff" opacity=".3"/><text x="80" y="466" fill="#f59e0b" font-family="monospace" font-size="24">TRL 3 · PROTOTIPO EN DESARROLLO</text><text x="80" y="535" fill="#94a3b8" font-family="Arial,sans-serif" font-size="24">Concepción, Chile · strigsystems.tech</text></svg>`;
 const socialFile=path.join(root,'assets/img/brand/strig-social.svg');fs.writeFileSync(socialFile,social);
 await sharp(Buffer.from(social)).png().toFile(path.join(root,'assets/img/brand/strig-social.png'));
 fs.writeFileSync(path.join(folder,'layout.json'),JSON.stringify({family:'A',trim:'Geometry unchanged; viewBox cropped to ink bounds with4units margin',dimensions},null,2)+'\n');
 console.log(JSON.stringify(dimensions));
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exit(1)});
