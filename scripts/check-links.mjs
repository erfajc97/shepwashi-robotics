// Rastrea el sitio servido (default http://localhost:4401) y reporta enlaces internos e imágenes rotos.
const base = process.argv[2] ?? 'http://localhost:4401';
const seen = new Set(), queue = ['/'], bad = [];
const check = new Map();
async function ok(path) {
  if (!check.has(path)) check.set(path, fetch(base + path).then((r) => r.status).catch(() => 0));
  return (await check.get(path)) === 200;
}
while (queue.length) {
  const p = queue.shift();
  if (seen.has(p)) continue;
  seen.add(p);
  const res = await fetch(base + p);
  if (res.status !== 200) { bad.push(`PAGE ${p} -> ${res.status}`); continue; }
  const html = await res.text();
  for (const m of html.matchAll(/(?:src|href|srcset)="([^"]+)"/g)) {
    for (let u of m[1].split(',').map((s) => s.trim().split(' ')[0])) {
      if (!u.startsWith('/') || u.startsWith('//')) continue;
      u = u.split('#')[0]; if (!u) continue;
      const clean = u.split('?')[0];
      const isPage = !/\.[a-z0-9]+$/i.test(clean);
      if (isPage) { if (!seen.has(clean)) queue.push(clean); }
      else if (!(await ok(clean))) bad.push(`ASSET ${clean} (en ${p})`);
    }
  }
}
console.log(`páginas rastreadas: ${seen.size}`);
console.log(bad.length ? [...new Set(bad)].join('\n') : 'sin enlaces ni assets rotos');
