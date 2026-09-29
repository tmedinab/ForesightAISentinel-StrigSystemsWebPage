/**
 * Strig Systems - Preflight Verification Script
 * Validates:
 * 1. Zero Emoji Policy across all core project files
 * 2. Strict Bilingual Parity (translations.es vs translations.en)
 * 3. HTML data-i18n coverage in translation dictionaries
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const CORE_FILES = ['index.html', 'styles.css', 'script.js', 'terms.html', 'privacy.html', 'AGENTS.md'];
const EMOJI_REGEX = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1FA00}-\u{1FAFF}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}\u{1F100}-\u{1F1FF}]/u;

console.log('\n============================================================');
console.log('◈ STRIG SYSTEMS | AUTOMATED PREFLIGHT VERIFICATION PIPELINE');
console.log('============================================================\n');

let hasErrors = false;

// 1. Zero Emoji Audit
console.log('--- [1/3] AUDITING ZERO EMOJI POLICY ---');
CORE_FILES.forEach(file => {
  const filePath = path.join(ROOT_DIR, file);
  if (!fs.existsSync(filePath)) {
    console.warn(`[WARN] File not found: ${file}`);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = content.match(new RegExp(EMOJI_REGEX, 'gu')) || [];
  if (matches.length > 0) {
    console.error(`[FAIL] ${file}: Found ${matches.length} emoji(s):`, matches);
    hasErrors = true;
  } else {
    console.log(`[PASS] ${file}: 0 emojis detected.`);
  }
});

// 2. Strict Bilingual Parity
console.log('\n--- [2/3] AUDITING STRICT i18n PARITY ---');
const scriptPath = path.join(ROOT_DIR, 'script.js');
const scriptContent = fs.readFileSync(scriptPath, 'utf8');

const esMatch = scriptContent.match(/es:\s*\{([\s\S]*?)\n\s*\},\s*\n\s*en:/);
const enMatch = scriptContent.match(/en:\s*\{([\s\S]*?)\n\s*\}\s*\n\s*\};/);

if (!esMatch || !enMatch) {
  console.error('[FAIL] Could not locate translations.es or translations.en blocks in script.js');
  hasErrors = true;
} else {
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

  console.log(`Total ES translation keys: ${esKeys.length}`);
  console.log(`Total EN translation keys: ${enKeys.length}`);

  const missingInEn = esKeys.filter(k => !enKeys.includes(k));
  const missingInEs = enKeys.filter(k => !esKeys.includes(k));

  if (missingInEn.length > 0) {
    console.error('[FAIL] Keys present in ES but missing in EN:', missingInEn);
    hasErrors = true;
  } else {
    console.log('[PASS] All ES keys are mirrored in EN (0 missing).');
  }

  if (missingInEs.length > 0) {
    console.error('[FAIL] Keys present in EN but missing in ES:', missingInEs);
    hasErrors = true;
  } else {
    console.log('[PASS] All EN keys are mirrored in ES (0 missing).');
  }

  // 3. HTML data-i18n Coverage
  console.log('\n--- [3/3] AUDITING HTML data-i18n COVERAGE ---');
  const htmlPath = path.join(ROOT_DIR, 'index.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');

  const dataI18nMatches = [...htmlContent.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]);
  const uniqueHtmlKeys = [...new Set(dataI18nMatches)];
  console.log(`Total data-i18n attributes in index.html: ${dataI18nMatches.length} (${uniqueHtmlKeys.length} unique)`);

  const missingHtmlInES = uniqueHtmlKeys.filter(k => !esKeys.includes(k));
  const missingHtmlInEN = uniqueHtmlKeys.filter(k => !enKeys.includes(k));

  if (missingHtmlInES.length > 0 || missingHtmlInEN.length > 0) {
    console.error('[FAIL] HTML data-i18n keys missing in ES translations:', missingHtmlInES);
    console.error('[FAIL] HTML data-i18n keys missing in EN translations:', missingHtmlInEN);
    hasErrors = true;
  } else {
    console.log('[PASS] All HTML data-i18n tags have corresponding translations in ES & EN.');
  }
}

console.log('\n============================================================');
if (hasErrors) {
  console.error('FAILED: Preflight check found violations.');
  console.log('============================================================\n');
  process.exit(1);
} else {
  console.log('PASSED: All DeepTech architectural invariants satisfied.');
  console.log('============================================================\n');
  process.exit(0);
}
