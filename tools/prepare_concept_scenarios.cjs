// Preserve supplied artwork and export web derivatives without creative edits.
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const sharp = require(require.resolve('sharp', { paths: [process.env.NODE_PATH || '', 'C:/Users/Tomas/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules'] }));
const root = path.resolve(__dirname, '..');
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
(async () => {
  const registerPath = path.join(root, 'docs/ASSET_REGISTER.json');
  const register = JSON.parse(fs.readFileSync(registerPath, 'utf8'));
  for (const [index, name] of ['thermal', 'person'].entries()) {
    const original = `docs/visual/originals/athene-${name}-gemini-20261016.jpg`;
    const source = path.join(root, original);
    const supplied = process.argv[index + 2];
    if (supplied) {
      if (fs.existsSync(source) && hash(source) !== hash(supplied)) throw Error('Preserved original differs: ' + original);
      if (!fs.existsSync(source)) fs.copyFileSync(supplied, source);
    }
    const output = `assets/img/tech/athene-${name}-20261016.webp`;
    await sharp(source).rotate().resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 88, effort: 5 }).toFile(path.join(root, output));
    for (const [file, status, use] of [[original, 'ai-generated-source', 'Original preservado; excluir del build público.'], [output, 'conceptual-local-review', 'Prueba local de dos escenarios con alternancia controlada, sin nueva publicación autorizada.']]) {
      const entry = { path: file, status, source: `Imagen Gemini aportada por Tomás el 2026-10-16; escenario ${name}. Original SHA-256 ${hash(source)}.`, sha256: hash(path.join(root, file)), rights: 'Ilustración IA suministrada por el usuario; sin verificación independiente de derechos. Aeronave genérica, evidencia térmica sintética; no CAD ni resultados de pruebas.', approvedUse: use };
      const previous = register.assets.find(a => a.path === file);
      if (previous) Object.assign(previous, entry, { status: previous.status, approvedUse: previous.approvedUse });
      else register.assets.push(entry);
    }
    console.log(output + ': ' + fs.statSync(path.join(root, output)).size + ' bytes');
  }
  register.updated = '2026-10-16';
  fs.writeFileSync(registerPath, JSON.stringify(register, null, 2) + '\n');
})().catch(error => { console.error(error); process.exitCode = 1; });
