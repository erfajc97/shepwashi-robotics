// Fuente de verdad del catálogo (Figma: Catálogo 2:14138, grid 2:14169). Orden = orden del grid.
export type ProductCategory = 'recepcion' | 'ultima-milla' | 'seguridad' | 'humanoide' | 'medico';

export interface CategoryInfo {
  id: ProductCategory;
  label: string;
}

export const categories: CategoryInfo[] = [
  { id: 'recepcion', label: 'Recepción' },
  { id: 'ultima-milla', label: 'Última milla' },
  { id: 'seguridad', label: 'Seguridad' },
  { id: 'humanoide', label: 'Humanoide' },
  { id: 'medico', label: 'Médico' },
];

export interface Product {
  /** Identificador único; también nombre del archivo en /assets/catalog/<slug>.png */
  slug: string;
  nombre: string;
  categoria: ProductCategory;
  tagline: string;
  /** Imagen de tarjeta (public/assets/catalog) */
  imagen: string;
  /** Etiquetas/specs visibles en la tarjeta (el diseño actual no muestra ninguna) */
  etiquetas: string[];
  /** Badge "Nuevo" (el diseño actual no marca ninguno) */
  nuevo: boolean;
  /** Página de detalle */
  href: string;
}

const p = (
  slug: string,
  nombre: string,
  categoria: ProductCategory,
  tagline: string,
  href = `/producto/${slug}`,
): Product => ({ slug, nombre, categoria, tagline, imagen: `/assets/catalog/${slug}.png`, etiquetas: [], nuevo: false, href });

export const products: Product[] = [
  p('ciao', 'Ciao', 'recepcion', 'Humanoide de bienvenida y guía'),
  p('timo', 'Timo', 'recepcion', 'Recepción todoterreno'),
  p('amy', 'Amy', 'recepcion', 'Recepción premium con pantalla grande'),
  p('alice', 'Alice', 'recepcion', 'Recepción humanoide'),
  p('snow', 'Snow', 'recepcion', 'Recepción de estilo amigable'),
  p('fairy', 'Fairy', 'recepcion', 'Servicio digital móvil'),
  p('speedybot-pro', 'Speedybot Pro', 'ultima-milla', 'Entrega autónoma interior y exterior'),
  p('speedybot-max', 'Speedybot Max', 'ultima-milla', 'Entrega multicompartimento'),
  p('speedybot-max-e', 'Speedybot Max-E', 'ultima-milla', 'Entrega no tripulada'),
  p('panda-ultra', 'Panda Ultra', 'ultima-milla', 'Entrega y marketing de nueva generación'),
  p('panda', 'Panda', 'ultima-milla', 'Entrega de alimentos multibandeja'),
  p('amy-delivery', 'Amy Delivery', 'ultima-milla', 'Entrega humanoide de alimentos'),
  // Dos tarjetas en el Figma (F150 y F600) que comparten la página "Panda AMR Serie F".
  p('panda-amr-f150', 'Panda AMR F150', 'ultima-milla', 'Industrial de carga ligera', '/producto/panda-amr-serie-f'),
  p('panda-amr-f600', 'Panda AMR F600', 'ultima-milla', 'Industrial de carga pesada', '/producto/panda-amr-serie-f'),
  p('panda-hotel', 'Panda Hotel', 'ultima-milla', 'Entrega hotelera premium'),
  p('specopsbot', 'Specopsbot', 'seguridad', 'Patrullaje avanzado con IA'),
  p('catcop', 'CatCop', 'seguridad', 'Patrullaje de seguridad autónomo'),
  p('g1', 'G1', 'humanoide', 'Humanoide sobre ruedas con IA'),
  p('panda-e', 'Panda-E', 'medico', 'Entrega médica multinivel'),
  p('jing', 'Jing', 'medico', 'Desinfección en interiores'),
];

export const categoryLabel = (id: ProductCategory) => categories.find((c) => c.id === id)!.label;
