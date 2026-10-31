// Optimiza in situ los JPG/PNG de public/assets (los originales siguen en design-dump/).
// JPG: mozjpeg q78, máx. 1800 px de ancho. PNG: máx. 1400 px, compresión máxima.
// Solo sobrescribe si el resultado pesa menos. Uso: node scripts/optimize-images.mjs
import sharp from 'sharp';
import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import { join, extname } from 'node:path';

const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});

let before = 0, after = 0, changed = 0;
for (const file of walk('public/assets')) {
  const ext = extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;
  const input = readFileSync(file);
  const img = sharp(input, { failOn: 'none' });
  const { width } = await img.metadata();
  const max = ext === '.png' ? 1400 : 1800;
  let pipe = img.rotate();
  if (width && width > max) pipe = pipe.resize({ width: max });
  const out = ext === '.png'
    ? await pipe.png({ compressionLevel: 9, effort: 10, adaptiveFiltering: true }).toBuffer()
    : await pipe.jpeg({ quality: 78, mozjpeg: true }).toBuffer();
  before += input.length;
  if (out.length < input.length * 0.97) { writeFileSync(file, out); after += out.length; changed++; }
  else after += input.length;
}
const mb = (n) => (n / 1048576).toFixed(1) + ' MB';
console.log(`optimizadas ${changed} imágenes: ${mb(before)} -> ${mb(after)}`);
