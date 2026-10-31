import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { categories, products, type ProductCategory } from '@/app/data/products';

type Filter = 'todos' | ProductCategory;

/** Móvil (Figma): la rejilla muestra 8 modelos y un botón "Cargar N modelos más". */
const MOBILE_LIMIT = 8;

const valid = (v: string | null): v is ProductCategory => categories.some((c) => c.id === v);
const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

const maskStyle = {
  maskImage: 'url(/assets/icons/scan.svg)',
  maskSize: 'contain',
  maskRepeat: 'no-repeat',
  WebkitMaskImage: 'url(/assets/icons/scan.svg)',
  WebkitMaskSize: 'contain',
  WebkitMaskRepeat: 'no-repeat',
} as const;

const arrowMask = {
  maskImage: 'url(/assets/icons/arrow-up-right.svg)',
  maskSize: 'contain',
  maskRepeat: 'no-repeat',
  WebkitMaskImage: 'url(/assets/icons/arrow-up-right.svg)',
  WebkitMaskSize: 'contain',
  WebkitMaskRepeat: 'no-repeat',
} as const;

/** Filtros por categoría + búsqueda. Las tarjetas las renderiza Astro (SEO); aquí solo se muestran/ocultan por data-slug. */
export default function CatalogFilters() {
  const [filter, setFilter] = useState<Filter>('todos');
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [moreSlot, setMoreSlot] = useState<HTMLElement | null>(null);

  useEffect(() => setMoreSlot(document.getElementById('catalog-more')), []);

  useEffect(() => {
    const cat = new URLSearchParams(window.location.search).get('categoria');
    if (valid(cat)) setFilter(cat);
  }, []);

  const counts = useMemo(() => {
    const m: Record<string, number> = { todos: products.length };
    for (const c of categories) m[c.id] = products.filter((p) => p.categoria === c.id).length;
    return m;
  }, []);

  const visible = useMemo(() => {
    const q = norm(query.trim());
    return products
      .filter((p) => (filter === 'todos' || p.categoria === filter) && (!q || norm(`${p.nombre} ${p.tagline}`).includes(q)))
      .map((p) => p.slug);
  }, [filter, query]);

  const remaining = expanded ? 0 : Math.max(0, visible.length - MOBILE_LIMIT);

  useEffect(() => {
    const order = new Map(visible.map((slug, i) => [slug, i]));
    document.querySelectorAll<HTMLElement>('[data-catalog-card]').forEach((el) => {
      const i = order.get(el.dataset.slug ?? '');
      el.hidden = i === undefined;
      el.dataset.extra = String(i !== undefined && !expanded && i >= MOBILE_LIMIT);
    });
  }, [visible, expanded]);

  const select = (f: Filter) => {
    setFilter(f);
    setExpanded(false);
    const url = new URL(window.location.href);
    if (f === 'todos') url.searchParams.delete('categoria');
    else url.searchParams.set('categoria', f);
    window.history.replaceState(null, '', url);
  };

  const tabs: { id: Filter; label: string }[] = [{ id: 'todos', label: 'Todos' }, ...categories];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div role="tablist" aria-label="Categorías" className="flex gap-1.5 overflow-x-auto md:rounded-pill md:bg-surface-2 md:p-1.5">
          {tabs.map((t) => {
            const active = filter === t.id;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => select(t.id)}
                className={`flex shrink-0 cursor-pointer items-center gap-1.5 rounded-pill px-3.5 py-2.5 text-[14px] leading-normal whitespace-nowrap md:gap-2 md:px-[18px] md:text-[15px] md:leading-[1.2] md:font-medium md:tracking-[-0.03px] ${active ? 'bg-ink text-inverse' : 'bg-surface text-ink md:bg-transparent'}`}
              >
                {t.label}
                <span className={`font-mono text-[11.5px] tracking-[0.92px] uppercase ${active ? 'text-gold-soft' : 'text-muted'}`}>{counts[t.id]}</span>
              </button>
            );
          })}
        </div>
        <label className="hidden w-full items-center gap-2.5 rounded-pill border border-ink px-[18px] py-3 md:flex md:w-[320px]">
          <span aria-hidden="true" className="size-4 shrink-0 bg-ink" style={maskStyle} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por modelo o tarea"
            aria-label="Buscar por modelo o tarea"
            className="w-full bg-transparent text-[14px] text-ink outline-none placeholder:text-muted"
          />
        </label>
      </div>
      {visible.length === 0 && <p className="text-[16px] text-muted">No hay modelos que coincidan.</p>}
      {remaining > 0 && moreSlot &&
        createPortal(
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-pill border border-ink py-1.5 pr-1.5 pl-[22px] text-[15px] leading-[1.2] font-medium tracking-[-0.03px] text-ink"
          >
            Cargar {remaining} {remaining === 1 ? 'modelo' : 'modelos'} más
            <span className="grid size-9 place-items-center rounded-pill bg-ink text-inverse">
              <span aria-hidden="true" className="size-4 bg-current" style={arrowMask} />
            </span>
          </button>,
          moreSlot,
        )}
    </div>
  );
}
