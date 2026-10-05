const fs = require('fs');
const js = fs.readFileSync('script.js', 'utf8');

const esMatch = js.match(/es:\s*\{([\s\S]*?)\n\s*\},\s*\n\s*en:/);
const enMatch = js.match(/en:\s*\{([\s\S]*?)\n\s*\}\s*\n\s*\};/);

if (!esMatch || !enMatch) {
  console.error('Failed to match translation blocks');
  process.exit(1);
}

function getKeys(block) {
  const keys = [];
  const lines = block.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('//')) continue;
    const m = trimmed.match(/^([a-zA-Z0-9_]+):/);
    if (m) keys.push(m[1]);
  }
  return keys;
}

const esKeys = getKeys(esMatch[1]);
const enKeys = getKeys(enMatch[1]);

console.log('ES keys count:', esKeys.length);
console.log('EN keys count:', enKeys.length);

const missingInEn = esKeys.filter(k => !enKeys.includes(k));
const missingInEs = enKeys.filter(k => !esKeys.includes(k));

console.log('Missing in EN:', missingInEn);
console.log('Missing in ES:', missingInEs);

const htmlFiles = ['index.html', 'venture.html', 'programa.html', 'nosotros.html', 'terms.html', 'privacy.html', '404.html'].filter(f => fs.existsSync(f));
let allI18nMatches = [];
htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const matches = [...content.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]);
  console.log(`Found ${matches.length} data-i18n in ${file}`);
  allI18nMatches.push(...matches);
});
console.log('Total data-i18n in all HTML files:', allI18nMatches.length);
const missingHtml = allI18nMatches.filter(k => !esKeys.includes(k));
console.log('HTML keys missing in translations:');
console.dir([...new Set(missingHtml)], { maxArrayLength: null });

