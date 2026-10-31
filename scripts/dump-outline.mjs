// Lee el volcado local de Figma (design-dump/) sin llamar a Figma.
// Uso:
//   node scripts/dump-outline.mjs list                       -> lista de frames por página
//   node scripts/dump-outline.mjs <pagina>/<frame> [nodeId|nombre] [profundidad]
//   ej. node scripts/dump-outline.mjs dark-desktop/home-desktop "Hero" 6
//       node scripts/dump-outline.mjs dark-mobile/home-mobile 3:8254 2
// Imprime un esquema con tamaño, layout (flex), relleno (hex), radios, textos con tipografía y
// las imágenes (hash -> archivo en design-dump/images) y SVG (design-dump/svg/<id>.svg).
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(process.cwd(), 'design-dump');
const [, , arg1, arg2, arg3] = process.argv;

if (arg1 === 'list') {
  for (const page of readdirSync(join(ROOT, 'frames'))) {
    console.log(`\n${page}/`);
    for (const f of readdirSync(join(ROOT, 'frames', page)).filter((x) => x.endsWith('.json'))) {
      const t = JSON.parse(readFileSync(join(ROOT, 'frames', page, f), 'utf8'));
      console.log(`  ${f.replace('.json', '')}  (${t.id}, ${t.w}x${t.h})`);
    }
  }
  process.exit(0);
}

const images = new Map(readdirSync(join(ROOT, 'images')).map((f) => [f.split('.')[0], f]));
const tree = JSON.parse(readFileSync(join(ROOT, 'frames', arg1 + '.json'), 'utf8'));
const maxDepth = Number(arg3 ?? 4);

function find(n, q) {
  if (n.id === q || n.name === q) return n;
  for (const c of n.children ?? []) {
    const r = find(c, q);
    if (r) return r;
  }
  return null;
}
const root = arg2 ? find(tree, arg2) : tree;
if (!root) { console.error('nodo no encontrado'); process.exit(1); }

const fill = (f) => (Array.isArray(f) ? f.map((p) =>
  p.type === 'SOLID' ? `${p.color}${p.opacity !== 1 ? '@' + p.opacity : ''}${p.variable ? '(' + p.variable + ')' : ''}`
  : p.type === 'IMAGE' ? `IMG:${images.get(p.imageHash) ?? p.imageHash}[${p.scaleMode}]`
  : p.type.startsWith('GRADIENT') ? `${p.type}[${p.stops.map((s) => s.color + '@' + s.a.toFixed(2) + ':' + s.pos.toFixed(2)).join(',')}]` : p.type).join('+') : '');

function out(n, d) {
  if (d > maxDepth) return;
  const pad = '  '.repeat(d);
  const bits = [`${pad}${n.type === 'TEXT' ? 'T' : n.type[0]} "${n.name}" ${n.w}x${n.h}@${n.x},${n.y}`];
  if (n.visible === false) bits.push('HIDDEN');
  if (n.layout) bits.push(`${n.layout} gap${n.gap} pad[${n.pad}] ${n.main}/${n.cross}${n.wrap ? ' wrap' : ''}`);
  if (n.sizeH) bits.push(`${n.sizeH}/${n.sizeV}`);
  if (n.absolute) bits.push('ABS');
  if (n.clip) bits.push('clip');
  if (n.radius !== undefined) bits.push(`r${JSON.stringify(n.radius)}`);
  const f = fill(n.fills); if (f && n.type !== 'TEXT') bits.push(`fill:${f}`);
  if (n.strokes?.length) bits.push(`stroke:${fill(n.strokes)} w${JSON.stringify(n.strokeW)}`);
  if (n.effects?.length) bits.push(`fx:${JSON.stringify(n.effects)}`);
  if (n.opacity !== undefined) bits.push(`op${n.opacity}`);
  if (n.component) bits.push(`<${n.component}>`);
  if (n.svg) bits.push(`SVG:${n.svg}`);
  if (n.type === 'TEXT') {
    for (const s of n.segs) bits.push(`\n${pad}    "${s.t.replace(/\n/g, '\\n')}" ${s.font} ${s.size}px lh${s.lh.value ?? s.lh.unit}${s.lh.unit === 'PERCENT' ? '%' : ''} ls${s.ls.value}${s.ls.unit === 'PERCENT' ? '%' : ''}${s.case ? ' ' + s.case : ''} ${fill(s.fills)} ${n.align}`);
  }
  console.log(bits.join(' '));
  for (const c of n.children ?? []) out(c, d + 1);
}
out(root, 0);
