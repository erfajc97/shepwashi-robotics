import { categories, products, type Product } from './products';

export const mainNav = {
  left: [
    { label: 'Productos', href: '/catalogo', menu: 'productos' },
    { label: 'Soluciones', href: '/soluciones', menu: 'soluciones' },
    { label: 'Aplicaciones', href: '/aplicaciones' },
    { label: 'Recursos', href: '/recursos' },
  ],
  right: [
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Soporte', href: '/soporte' },
  ],
} as const;

export interface FooterLink { label: string; href: string; desktopOnly?: boolean }
export interface FooterColumn { title: string; links: FooterLink[] }

export const footerColumns: FooterColumn[] = [
  {
    title: 'Productos',
    links: [
      { label: 'Robots de recepción', href: '/catalogo?categoria=recepcion' },
      { label: 'Robots de última milla', href: '/catalogo?categoria=ultima-milla' },
      { label: 'Robots de seguridad', href: '/catalogo?categoria=seguridad' },
      { label: 'Robots humanoides', href: '/catalogo?categoria=humanoides' },
      { label: 'Robots médicos', href: '/catalogo?categoria=medicos', desktopOnly: true },
    ],
  },
  {
    title: 'Soluciones',
    links: [
      { label: 'Hoteles', href: '/soluciones/hoteles' },
      { label: 'Hospitales', href: '/soluciones/hospitales' },
      { label: 'Restaurantes', href: '/soluciones/restaurantes' },
      { label: 'Retail', href: '/soluciones/retail' },
      { label: 'Fábricas', href: '/soluciones/fabricas', desktopOnly: true },
      { label: 'Ver las 10 industrias', href: '/soluciones', desktopOnly: true },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Nosotros', href: '/nosotros' },
      { label: 'Aplicaciones', href: '/aplicaciones' },
      { label: 'Recursos', href: '/recursos' },
      { label: 'Soporte', href: '/soporte' },
      { label: 'Contacto', href: '/contacto', desktopOnly: true },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: 'contacto@shepwashi.com', href: 'mailto:contacto@shepwashi.com' },
      { label: '+57 320 468 9357', href: 'tel:+573204689357' },
      { label: 'Medellín · Guayaquil', href: '/contacto' },
      { label: 'Cartagena · Los Ángeles', href: '/contacto' },
    ],
  },
];

/* ---------- Menús desplegables (Figma: Menú Productos 31:19685, Menú Soluciones 31:20164, Menú móvil 31:26819) ---------- */

export interface MenuProductLine {
  id: string;
  /** "01", "02"… */
  num: string;
  label: string;
  /** "6 modelos" / "1 modelo" */
  count: string;
  href: string;
  /** Modelos de la línea, partidos en dos columnas (escritorio) */
  columns: [Product[], Product[]];
}

/** Texto del menú cuando difiere del tagline del catálogo. */
const menuTagline: Record<string, string> = { snow: 'Recepción estilo amigable' };

export const menuProductLines: MenuProductLine[] = categories.map((c, i) => {
  const list = products
    .filter((p) => p.categoria === c.id)
    .map((p) => (menuTagline[p.slug] ? { ...p, tagline: menuTagline[p.slug] } : p));
  const half = Math.ceil(list.length / 2);
  return {
    id: c.id,
    num: String(i + 1).padStart(2, '0'),
    label: c.label,
    count: `${list.length} ${list.length === 1 ? 'modelo' : 'modelos'}`,
    href: `/catalogo?categoria=${c.id}`,
    columns: [list.slice(0, half), list.slice(half)],
  };
});

export const menuProductsFeature = {
  image: '/assets/menu/catalogo-destacado.jpg',
  title: 'Catálogo completo',
  text: '20 modelos en cinco líneas: recepción, última milla, seguridad, humanoides y médicos.',
  cta: { label: 'Ver catálogo', href: '/catalogo' },
  mobileCta: { label: 'Ver catálogo completo', href: '/catalogo' },
};

export interface MenuIndustry { slug: string; label: string; desc: string; image: string; href: string }
const ind = (slug: string, label: string, desc: string): MenuIndustry => ({
  slug, label, desc, image: `/assets/menu/${slug}.jpg`, href: `/soluciones/${slug}`,
});

/** Orden del Figma: columna 1 (5) y columna 2 (5). */
export const menuIndustries: MenuIndustry[] = [
  ind('hoteles', 'Hoteles', 'Eficiencia en servicio a habitación'),
  ind('hospitales', 'Hospitales', 'Insumos y muestras en movimiento'),
  ind('restaurantes', 'Restaurantes', 'Eficiencia en servicio a mesa'),
  ind('retail', 'Retail', 'Menos carga en asesores'),
  ind('fabricas', 'Fábricas', 'Materiales en flujo continuo'),
  ind('comunidades', 'Comunidades', 'Seguridad y entregas 24 h'),
  ind('showrooms', 'Showrooms', 'Cobertura profesional en exhibiciones'),
  ind('delivery', 'Delivery', 'Precisión en pedidos'),
  ind('paqueteria', 'Paquetería', 'Menos costo de entrega'),
  ind('adulto-mayor', 'Adulto mayor', 'Asistencia y compañía'),
];

export const menuSolutionsFeature = {
  image: '/assets/menu/comunidades.jpg',
  title: '¿Tu industria no está en la lista?',
  text: 'Diseñamos flotas a la medida para cualquier operación con tareas repetitivas.',
  cta: { label: 'Agendar diagnóstico', href: '/contacto' },
  mobileCta: { label: 'Ver las 10 industrias', href: '/soluciones' },
};
