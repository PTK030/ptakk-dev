const fs = require('fs');
const path = require('path');

const replacements = {
  // 1. Exact strings or full words (handled explicitly first)
  'navbar_burger-button_box-line': 'navbar__burger-line',
  'navbar_burger-button_box': 'navbar__burger-box',
  'navbar_burger-button': 'navbar__burger',
  'home_btn-primary': 'home__btn home__btn--primary',
  'minimal-list_empty': 'minimal-list minimal-list--empty',
  'project-page_meta-group': 'project-page__meta-group',
  'navbar_mac-dots': 'navbar__mac-dots',
  
  // Modifiers and nested anti-patterns mapping for SCSS
  '.home_btn-primary': '.home__btn--primary',
  '.minimal-list_empty': '.minimal-list--empty',
  
  // Utility classes in Navbar (dot red, dot yellow, dot green)
  'class="dot red"': 'class="navbar__dot navbar__dot--red"',
  'class="dot yellow"': 'class="navbar__dot navbar__dot--yellow"',
  'class="dot green"': 'class="navbar__dot navbar__dot--green"',
  'class="dot"': 'class="home__dot"', // In Home.astro there is also a dot
  '.dot.red': '.navbar__dot--red',
  '.dot.yellow': '.navbar__dot--yellow',
  '.dot.green': '.navbar__dot--green',
  '.dot': '.navbar__dot', // Will need manual fix if it's home__dot
};

function walk(dir, exts) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    let f = path.join(dir, file);
    const stat = fs.statSync(f);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(f, exts));
    } else {
      if (exts.some(ext => f.endsWith(ext))) {
        results.push(f);
      }
    }
  });
  return results;
}

const files = walk('./src', ['.astro', '.scss']);

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // 1. Explicit string replacements
  for (const [key, value] of Object.entries(replacements)) {
    // We use split/join for global literal replace
    content = content.split(key).join(value);
  }

  // 2. Global single underscore to double underscore for classes
  // Match things like `home_wrapper` or `.home_wrapper`
  // We use regex that looks for word boundaries and a single underscore
  // It handles: a-z, A-Z, 0-9, and hyphens before and after the underscore.
  content = content.replace(/([a-zA-Z0-9-&]+)_([a-zA-Z0-9-]+)/g, '$1__$2');

  if (content !== original) {
    fs.writeFileSync(f, content);
    console.log(`Refactored BEM in: ${f}`);
  }
});
console.log('BEM Refactor script completed.');
