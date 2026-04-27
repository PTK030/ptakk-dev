const fs = require('fs');
let svg = fs.readFileSync('ibm-logo.svg', 'utf8');
svg = svg.replace(/<\?xml.*\?>/g, '');
svg = svg.replace(/<!--.*-->/g, '');
svg = svg.replace(/xml:space="preserve"/g, '');
svg = svg.replace(/xmlns:svg="[^"]*"/g, '');
svg = svg.replace(/xmlns="[^"]*"/g, '');
svg = svg.replace(/id="[^"]*"/g, '');
svg = svg.replace(/style="fill:#5a87c5"/g, '');
svg = svg.replace(/version="1.0"/g, '');
svg = svg.replace(/width="800"/g, '');
svg = svg.replace(/height="322.47"/g, '');

let bodyMatch = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
let body = bodyMatch ? bodyMatch[1] : '';

const component = `import React from 'react';\n\nexport const IbmLogo = (props: React.SVGProps<SVGSVGElement>) => (\n  <svg viewBox="0 0 800 322.47" fill="currentColor" {...props}>${body}</svg>\n);\n`;
fs.writeFileSync('app/components/IbmLogo.tsx', component);
fs.unlinkSync('ibm-logo.svg');
