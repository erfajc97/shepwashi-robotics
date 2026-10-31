// Receptor local del volcado de Figma. Uso: node scripts/dump-server.mjs
// POST /save?path=<ruta relativa dentro de design-dump>  (cuerpo = bytes del archivo)
import { createServer } from 'node:http';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, normalize } from 'node:path';

const ROOT = join(process.cwd(), 'design-dump');
const cors = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'POST, OPTIONS',
  'access-control-allow-headers': '*',
};

createServer((req, res) => {
  if (req.method === 'OPTIONS') return res.writeHead(204, cors).end();
  const url = new URL(req.url, 'http://localhost');
  if (req.method !== 'POST' || url.pathname !== '/save') return res.writeHead(404, cors).end();
  const rel = normalize(url.searchParams.get('path') ?? '').replace(/^(\.\.[\\/])+/, '');
  const chunks = [];
  req.on('data', (c) => chunks.push(c));
  req.on('end', () => {
    const file = join(ROOT, rel);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, Buffer.concat(chunks));
    res.writeHead(200, cors).end('ok');
  });
}).listen(9231, () => console.log('dump server en :9231'));
