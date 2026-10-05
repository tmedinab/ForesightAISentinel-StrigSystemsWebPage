const fs = require('fs');
const regex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1FA00}-\u{1FAFF}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}\u{1F100}-\u{1F1FF}]/u;

const files = [
  'index.html',
  'venture.html',
  'programa.html',
  'nosotros.html',
  'terms.html',
  'privacy.html',
  '404.html',
  'styles.css',
  'script.js'
];

let totalEmojis = 0;
files.forEach(f => {
  if (fs.existsSync(f)) {
    const text = fs.readFileSync(f, 'utf8');
    const matches = text.match(new RegExp(regex, 'gu')) || [];
    console.log(`${f}: ${matches.length} emojis`);
    totalEmojis += matches.length;
  }
});

console.log(`Total emojis found: ${totalEmojis}`);
if (totalEmojis > 0) {
  process.exit(1);
} else {
  console.log('Zero Emoji Policy strictly honored: 100% compliant!');
}
