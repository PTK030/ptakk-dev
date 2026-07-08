const fs = require('fs');
const path = require('path');

function walk(dir, exts) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file, exts));
    } else {
      if (exts.some(ext => file.endsWith(ext))) {
        results.push(file);
      }
    }
  });
  return results;
}

const astroFiles = walk('./src', ['.astro']);
const scssFiles = walk('./src/styles', ['.scss']);

let astroClasses = {};
astroFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = [...content.matchAll(/class(?:Name)?=["']([^"']+)["']/g)];
  if (matches.length > 0) {
    astroClasses[f] = [];
    matches.forEach(m => {
      astroClasses[f].push(...m[1].split(/\s+/).filter(Boolean));
    });
    astroClasses[f] = [...new Set(astroClasses[f])];
  }
});

let scssSelectors = {};
scssFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/\.[a-zA-Z0-9_-]+/g) || [];
  if (matches.length > 0) {
    scssSelectors[f] = [...new Set(matches)];
  }
});

fs.writeFileSync('bem-report.json', JSON.stringify({ astroClasses, scssSelectors }, null, 2));
console.log('Report saved to bem-report.json');
