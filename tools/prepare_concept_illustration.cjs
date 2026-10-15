// Re-encode the user-supplied artwork without modifying its depicted content.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const sharp=require(require.resolve('sharp',{paths:['C:/Users/Tomas/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules']}));
const root=path.resolve(__dirname,'..');
const source=path.join(root,'docs/visual/originals/athene-concept-gemini-20261015.jpg');
(async()=>{
const supplied=process.argv[2];
if(supplied){fs.mkdirSync(path.dirname(source),{recursive:true});if(fs.existsSync(source)){
const a=crypto.createHash('sha256').update(fs.readFileSync(source)).digest('hex');const b=crypto.createHash('sha256').update(fs.readFileSync(supplied)).digest('hex');if(a!==b)throw Error('Preserved source differs; use a new revision name.');
}else fs.copyFileSync(supplied,source);}
const metadata=await sharp(source).metadata();
const files=[];
for(const [width,quality] of [[1200,85],[2400,90]]){
const name=`assets/img/tech/athene-concept-${width}.webp`;
await sharp(source).rotate().resize({width,withoutEnlargement:true}).webp({quality,effort:5}).toFile(path.join(root,name));
const output=await sharp(path.join(root,name)).metadata();files.push({path:name,width:output.width,height:output.height,bytes:fs.statSync(path.join(root,name)).size});}
const sourceSha256=crypto.createHash('sha256').update(fs.readFileSync(source)).digest('hex');
const registerFile=path.join(root,'docs/ASSET_REGISTER.json');
const register=JSON.parse(fs.readFileSync(registerFile,'utf8'));
const origin='Gemini_Generated_Image_t7ponit7ponit7po.jpg, aportada por Tomás el 2026-10-15 como ilustración generada con IA. Original preservado sin cambios; SHA-256 '+sourceSha256+'.';
const rights='Referencia generada con IA suministrada por el usuario. Sin verificación independiente de términos de uso o exclusividad. No fotografía, CAD aprobado, captura térmica real o evidencia de ensayo.';
const entries=[{path:'docs/visual/originals/athene-concept-gemini-20261015.jpg',status:'ai-generated-source',source:origin,rights,sha256:sourceSha256,approvedUse:'Conservación de procedencia y reutilización; no incluir el original en el build público.'},...files.map(file=>({path:file.path,status:'conceptual-local-review',source:origin+' Derivado WebP de '+file.width+' × '+file.height+' px, sin alteración creativa del contenido.',rights,sha256:crypto.createHash('sha256').update(fs.readFileSync(path.join(root,file.path))).digest('hex'),approvedUse:'Prueba local en panel y ampliación de Athene; selección/publicación final pendientes. Leyenda visible de generación IA y contenido térmico sintético. No atribuir identidad, clasificación o prestaciones.'}))];
for(const entry of entries){const index=register.assets.findIndex(asset=>asset.path===entry.path);if(index<0)register.assets.push(entry);else {const previous=register.assets[index];register.assets[index]={...entry,status:previous.status,approvedUse:previous.approvedUse};}}
register.updated='2026-10-15';fs.writeFileSync(registerFile,JSON.stringify(register,null,2)+'\n');
console.log(JSON.stringify({sourceSha256,sourceWidth:metadata.width,sourceHeight:metadata.height,files},null,2));
})().catch(e=>{console.error(e);process.exitCode=1});
