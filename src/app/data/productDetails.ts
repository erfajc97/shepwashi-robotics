/**
 * ============================================================================
 * productDetails.ts — datos de la PLANTILLA de página de producto (/producto/<slug>)
 * ============================================================================
 *
 * La página `src/pages/producto/[slug].astro` genera una ruta por cada registro `ProductDetail`.
 * Los componentes de `src/features/product/components/*` solo pintan datos: NUNCA hay copy dentro de ellos.
 *
 * CÓMO AÑADIR UN PRODUCTO (sin tocar este archivo)
 *   1. Crea `src/app/data/products/<slug>.ts` con:
 *        import type { ProductDetail } from '../productDetails';
 *        const amy = { slug: 'amy', name: 'Amy', ... } satisfies ProductDetail;
 *        export default amy;
 *   2. Listo: `productDetails` (abajo) recoge automáticamente `products/*.ts` con import.meta.glob
 *      (ordenados como el catálogo). El `slug` debe ser uno de los 19 del brief.
 *   3. Copia los assets desde `design-dump/images` hacia `public/assets/products/<slug>/` y referencia `/assets/products/<slug>/<archivo>`.
 *
 * SECCIONES (todas opcionales salvo `hero` y `cta`; si una sección falta, simplemente no se pinta)
 *   hero            Título gigante + chip de categoría + tagline, escenario con imagen, etiquetas (tags),
 *                   resumen, tarjetas de datos (stats) y CTAs. `gallery` (opcional) añade una tira de imágenes
 *                   adicionales bajo el escenario (productos con galería).
 *   functionsBand   Banda "Funciones" con chips. Omítela (p. ej. Ciao) o cambia `label`/`items`.
 *   coreFunctions   "01 Funciones principales": título + tarjetas numeradas. `columns` 2 | 3 | 4 (por defecto 3);
 *                   la cantidad de tarjetas es libre (3, 4, 6, 8...). `number` fuerza la numeración; `icon` (nombre de
 *                   `public/assets/icons`) sustituye el espacio vacío superior de la tarjeta.
 *   scenarios       "Dónde trabaja X": N escenas (imagen + chip). Cualquier cantidad >= 1.
 *   specs           Ficha técnica. `layout: 'table'` (filas etiqueta/valor, por defecto) o `'grid'` (tarjetas, usa
 *                   `columns`). Omítela si el producto no tiene especificaciones (Ciao).
 *   related         "Otros modelos": slugs de productos relacionados. Si se omite se eligen 4 por defecto.
 *   cta             Bloque final oscuro (título, texto, dos botones).
 *
 *   La numeración 01, 02, 03... de las etiquetas de sección se calcula sola según las secciones presentes
 *   (coreFunctions → scenarios → specs → related).
 *
 * IMÁGENES: rutas públicas (`/assets/products/<slug>/...`). El producto del hero va recortado (PNG transparente,
 * `object-contain`) sobre el escenario `bg-stage`; las escenas son fotos (`object-cover`).
 * ICONOS (`stats[].icon`, `features[].icon`): nombre de `public/assets/icons/*.svg` (battery, monitor, gauge, box...).
 * ============================================================================
 */

import { products } from './products';

export interface ProductLink {
  label: string;
  href: string;
}

export interface ProductStat {
  /** Nombre en public/assets/icons (sin .svg). */
  icon: string;
  /** Valor grande en mono: "≤8", "13,3", "1,2". */
  value: string;
  /** Unidad pequeña junto al valor: "h", "″", "m/s", "kg". */
  unit?: string;
  label: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  /** Por defecto 01, 02, ... según el orden. */
  number?: string;
  /** Icono opcional (public/assets/icons). Sin icono se deja el espacio de 28 px del diseño. */
  icon?: string;
}

export interface ProductScene {
  name: string;
  image: string;
  alt?: string;
}

export interface ProductSpecRow {
  label: string;
  /** table/grid: valor único. En matrix puede usarse como valor que ocupa todas las columnas. */
  value?: string;
  /** matrix: un valor por columna (mismo orden que `columns`) o uno solo que ocupa todas. */
  values?: string[];
}

export interface ProductImage {
  src: string;
  alt?: string;
}

export interface ProductDetail {
  slug: string;
  name: string;
  /** Tamaño del título en escritorio: 'xl' = 136 px (nombres cortos), 'lg' = 96 px. Por defecto 'lg' si el nombre tiene 10 o más caracteres. */
  nameSize?: 'xl' | 'lg';
  /** Chip de categoría y migas: "Recepción", "Última milla", "Seguridad"... */
  category: string;
  /** Enlace de la categoría en las migas (por defecto /catalogo). */
  categoryHref?: string;
  /** Subtítulo junto al nombre gigante. */
  tagline: string;
  seo?: { title?: string; description?: string };

  hero: {
    image: string;
    imageAlt?: string;
    /** Etiquetas flotantes sobre el escenario. */
    tags: string[];
    /** Texto mono bajo el escenario: "Serie Recepción · Timo". */
    caption?: string;
    summaryTitle: string;
    summary: string;
    stats: ProductStat[];
    primaryCta?: ProductLink;
    secondaryCta?: ProductLink;
    gallery?: ProductImage[];
  };

  functionsBand?: { label?: string; items: string[] };

  coreFunctions?: {
    label?: string;
    title: string;
    intro?: string;
    columns?: 2 | 3 | 4;
    features: ProductFeature[];
  };

  scenarios?: {
    label?: string;
    /** Etiqueta en móvil (el Figma móvil usa "Escenarios"). Por defecto: "Escenarios" si `label` no se define. */
    mobileLabel?: string;
    title: string;
    description?: string;
    scenes: ProductScene[];
  };

  specs?: {
    label?: string;
    title: string;
    note?: string;
    /** 'table' (etiqueta/valor), 'grid' (tarjetas) o 'matrix' (una columna por modelo, p. ej. F150/F300/F600). */
    layout?: 'table' | 'grid' | 'matrix';
    /** grid: nº de columnas (2 | 3). matrix: nombres de columna. */
    columns?: 2 | 3 | string[];
    /** matrix: cabecera de la primera columna (por defecto "Modelo"). */
    matrixLabel?: string;
    pdf?: ProductLink;
    rows: ProductSpecRow[];
  };

  related?: { label?: string; title?: string; slugs: string[] };

  cta: {
    title: string;
    description?: string;
    /** Texto en móvil (el Figma móvil: "Configuración, instalación, capacitación y soporte local."). Por defecto = description. */
    mobileDescription?: string;
    primary: ProductLink;
    secondary?: ProductLink;
  };
}

/* Un archivo por producto en ./products/<slug>.ts (export default). */
const modules = import.meta.glob<{ default: ProductDetail }>('./products/*.ts', { eager: true });
// Orden = orden del catálogo (products.ts); los slugs que no estén allí van al final por orden alfabético.
const order = (slug: string) => {
  const i = products.findIndex((p) => p.slug === slug);
  return i === -1 ? 999 : i;
};
export const productDetails: ProductDetail[] = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, m]) => m.default)
  .sort((a, b) => order(a.slug) - order(b.slug));

export const getProductDetail = (slug: string) => productDetails.find((p) => p.slug === slug);

