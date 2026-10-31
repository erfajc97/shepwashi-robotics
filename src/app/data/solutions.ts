/**
 * SOLUCIONES POR INDUSTRIA — registro de datos para `/soluciones/<slug>`.
 *
 * La plantilla (`src/pages/soluciones/[slug].astro` + `src/features/solutions/components/*`) es la
 * misma para las 10 industrias; solo cambia el contenido. Para añadir una industria NO se toca
 * ningún componente: se crea `src/app/data/solutions/<slug>.ts` con
 * `export default { ... } satisfies SolutionData;` (ver `solutions/hoteles.ts`, ejemplo completo).
 * Este archivo descubre los registros con `import.meta.glob`, así que no hay que registrarlos
 * en ningún otro lugar. El nombre del archivo debe ser igual al `slug`.
 *
 * Slugs válidos: hoteles, hospitales, restaurantes, retail, fabricas, comunidades, showrooms,
 * delivery, paqueteria, adulto-mayor.
 *
 * Secciones de la página, en orden, y campos del registro (SolutionData):
 *  1. hero         chip (nombre de industria), title, subtitle, image {src,alt}, cta {label,href}
 *  2. stats        EXACTAMENTE 4 × { value: '2–3x', label }
 *  3. howItWorks   title, description, image {src,alt}  (diagrama isométrico de la solución)
 *  4. challenges   title, items: string[]  (problemas; móvil muestra los primeros 5, escritorio todos)
 *  5. why          title, items: string[]  (beneficios; móvil muestra los primeros 6, escritorio todos)
 *  6. recommended  title, cta {label,href}, products: string[]  (slugs de `products.ts`, 4 en escritorio;
 *                  móvil muestra los primeros 3). Nombre, categoría, tagline, imagen y enlace
 *                  `/producto/<slug>` salen del catálogo (`src/app/data/products.ts`).
 *  7. cta          title, subtitle?, primary {label,href}, secondary {label,href}
 *
 * Imágenes propias de la industria: `public/assets/solutions/<slug>/` (hero.png, how-it-works.png),
 * descargadas con `node scripts/fetch-assets.mjs scripts/manifests/solutions-<slug>.json`.
 * Los rótulos de sección (“01 Cómo funciona”, “02 El enfoque tradicional”, “03 Con Shepwashi Robotics”,
 * “04 Robots recomendados”) son fijos en la plantilla; se pueden sobreescribir con `labels` (opcional).
 */

export interface SolutionImage { src: string; alt: string }
export interface SolutionLink { label: string; href: string }
/** Slug del catálogo, o slug + textos/enlace propios (p. ej. “Panda AMR Serie F”, que agrupa F150 y F600). */
export type SolutionProductRef = string | { slug: string; nombre?: string; tagline?: string; href?: string };
export interface SolutionStat { value: string; label: string }

export interface SolutionData {
  slug: string;
  /** nombre de la industria (plural), p. ej. “Hoteles” */
  name: string;
  /** orden en listados (1–10) */
  order: number;
  seo: { title: string; description: string };
  /** `secondaryCta` (botón blanco, ancla #robots) solo se ve en escritorio; el breadcrumb se deriva de `chip`. */
  hero: { chip: string; title: string; subtitle: string; image: SolutionImage; cta: SolutionLink; secondaryCta: SolutionLink };
  stats: [SolutionStat, SolutionStat, SolutionStat, SolutionStat];
  howItWorks: { title: string; description: string; image: SolutionImage };
  challenges: { title: string; items: string[] };
  why: { title: string; items: string[] };
  recommended: { title: string; cta: SolutionLink; products: SolutionProductRef[] };
  cta: { title: string; subtitle?: string; primary: SolutionLink; secondary: SolutionLink };
  labels?: Partial<Record<'howItWorks' | 'challenges' | 'why' | 'recommended', string>>;
}

/** Cuántos elementos se ven en móvil (el Figma móvil recorta las listas). */
export const solutionMobileLimits = { challenges: 5, why: 6, products: 3 } as const;

export const defaultSolutionLabels = {
  howItWorks: 'Cómo funciona',
  challenges: 'El enfoque tradicional',
  why: 'Con Shepwashi Robotics',
  recommended: 'Robots recomendados',
} as const;

const modules = import.meta.glob<{ default: SolutionData }>('./solutions/*.ts', { eager: true });

export const solutions: SolutionData[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => a.order - b.order);

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
