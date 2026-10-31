// Uso: node scripts/fetch-assets.mjs <manifest.json>
// manifest: { "outDir": "public/assets/home", "prefix": "https://www.figma.com/api/mcp/asset/<uuid>",
//             "files": { "hero-media": "b9b62.png", "icon-x": "008d8.svg" } }
// Guarda cada archivo como <outDir>/<nombre>.<ext original>. Imprime nombre -> ruta publica.
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { extname, join } from 'node:path';

const manifest = JSON.parse(readFileSync(process.argv[2], 'utf8'));
mkdirSync(manifest.outDir, { recursive: true });
const publicBase = manifest.outDir.replace(/^public/, '');
let failed = 0;
await Promise.all(
  Object.entries(manifest.files).map(async ([name, file]) => {
    const url = file.startsWith('http') ? file : `${manifest.prefix}/${file}`;
    const ext = extname(new URL(url).pathname) || '.png';
    const res = await fetch(url);
    if (!res.ok) { failed++; console.error(`FAIL ${name} ${res.status}`); return; }
    writeFileSync(join(manifest.outDir, name + ext), Buffer.from(await res.arrayBuffer()));
    console.log(`${name} -> ${publicBase}/${name}${ext}`);
  }),
);
process.exit(failed ? 1 : 0);
