/**
 * Datos de la página Home (Figma: Home 2:13723 escritorio · 3:8254 móvil).
 * Los campos `*Mobile` existen cuando el copy del frame móvil difiere del de escritorio.
 * Los textos con `\n` llevan salto de línea solo en escritorio (clase `lg:whitespace-pre-line`).
 */
import { categories, products, type Product, type ProductCategory } from '@/app/data/products';

export interface HomeLink { label: string; href: string }

/* ------------------------------------------------------------------ Hero */
export const hero = {
  label: 'Shepwashi Robotics · LatAm & Caribe',
  labelMobile: 'Shepwashi Robotics',
  titleLine1: 'Robótica de servicio,',
  titleLine2: 'lista para operar.',
  lead: 'Robots de recepción, última milla, seguridad, humanoides y médicos. Los seleccionamos, configuramos e implementamos en tu operación, con soporte local.',
  primary: { label: 'Ver catálogo', href: '/catalogo' } satisfies HomeLink,
  secondary: { label: 'Hablar con un asesor', href: '/contacto' } satisfies HomeLink,
  image: { src: '/assets/home/hero.jpg', alt: 'Cliente recibiendo un pedido de un robot Speedybot Max frente a su casa' },
  live: 'En operación · Entrega de última milla',
  liveMobile: 'En operación',
  capabilities: ['Conducción autónoma L4', 'Ascensores y puertas', 'Hasta 100 kg', '40 km por carga'],
  spotlight: {
    slug: 'speedybot-max',
    name: 'Speedybot Max',
    description: 'Cuatro compartimentos independientes\npara entregas múltiples en un viaje.',
    descriptionMobile: 'Entrega multicompartimento',
    meta: 'Última milla · Nuevo',
    image: '/assets/home/hero-speedybot-max.jpg',
    href: '/producto/speedybot-max',
  },
};

/* ----------------------------------------------------- Respaldo de fábrica */
export interface BackingStat {
  value: string;
  unit?: string;
  unitMobile?: string;
  label: string;
  labelMobile?: string;
}
export const backing = {
  label: 'Respaldo de fábrica',
  text: 'Distribuimos robots de un fabricante con dos décadas de trayectoria y más de 300 patentes propias.',
  stats: [
    { value: '20', unit: 'años', label: 'En la industria' },
    { value: '90+', unit: 'países', label: 'Con exportaciones' },
    { value: '55.000+', unit: 'unidades', unitMobile: 'u.', label: 'Despachadas' },
    { value: '10.000+', unit: 'clientes', unitMobile: '', label: 'Atendidos en el mundo', labelMobile: 'Clientes atendidos' },
  ] satisfies BackingStat[],
};

/* ------------------------------------------------------ Líneas de producto */
export interface ProductLine {
  id: ProductCategory;
  name: string;
  description?: string;
  count: number;
  countLabel: string;
  href: string;
}
const lineDescriptions: Partial<Record<ProductCategory, string>> = {
  recepcion: 'Bienvenida, guía y consulta en lobbies, bancos y salas de exhibición.',
};
export const productLines: ProductLine[] = categories.map((c) => {
  const count = products.filter((p) => p.categoria === c.id).length;
  return {
    id: c.id,
    name: c.label,
    description: lineDescriptions[c.id],
    count,
    countLabel: `${count} ${count === 1 ? 'modelo' : 'modelos'}`,
    href: '/catalogo',
  };
});
export const productLinesCopy = {
  label: 'Líneas de producto',
  title: 'Cinco líneas de robots.\nUn solo socio de implementación.',
  titleMobile: 'Cinco líneas.\nUn solo socio.',
  description:
    'Cada línea resuelve un frente de la operación: atender, entregar, vigilar, asistir y cuidar. Elige por tarea, no por catálogo.',
  media: { src: '/assets/home/line-recepcion.jpg', alt: 'Robot de recepción en una sala de exhibición' },
  modelsTitle: 'Modelos de recepción',
};
export const receptionModels: Product[] = products.filter((p) => p.categoria === 'recepcion');

/* ----------------------------------------------------- Modelos destacados */
export interface FeaturedEntry {
  slug: string;
  /** Sobrescribe el tagline de `products.ts` cuando el copy del Home difiere */
  tagline?: string;
  taglineMobile?: string;
}
export const featuredCopy = {
  label: 'Catálogo',
  title: 'Modelos destacados',
  cta: { label: 'Ver los 20 modelos', href: '/catalogo' } satisfies HomeLink,
};
const featuredEntries: FeaturedEntry[] = [
  { slug: 'ciao' },
  { slug: 'timo' },
  { slug: 'amy', tagline: 'Recepción premium con pantalla de 21,5″' },
  { slug: 'speedybot-pro', taglineMobile: 'Entrega interior y exterior' },
  { slug: 'speedybot-max' },
  { slug: 'panda' },
  { slug: 'catcop' },
  { slug: 'g1' },
];
export const featuredProducts = featuredEntries.map((e) => {
  const p = products.find((x) => x.slug === e.slug);
  if (!p) throw new Error(`Producto destacado "${e.slug}" no existe en products.ts`);
  return { product: p, tagline: e.tagline ?? p.tagline, taglineMobile: e.taglineMobile };
});

/* ------------------------------------------------------------- Ingeniería */
export const spotlight = {
  label: 'Ingeniería',
  title: 'Pensados para\nmoverse solos.',
  titleMobile: 'Pensados para moverse solos.',
  description:
    'Speedybot Pro combina un sistema de conducción autónoma L4 con fusión de sensores para entregar dentro y fuera de edificios, sin intervención humana.',
  descriptionMobile:
    'Speedybot Pro combina conducción autónoma L4 con fusión de sensores para entregar dentro y fuera de edificios.',
  image: { src: '/assets/home/spotlight-speedybot-pro.jpg', alt: 'Speedybot Pro circulando por una calle' },
  product: { name: 'Speedybot Pro', subtitle: 'Entrega autónoma · interior y exterior', href: '/producto/speedybot-pro' },
  features: [
    {
      title: 'Navegación L4',
      description: 'Posicionamiento al centímetro, evasión en milisegundos y rutas a escala de kilómetros.',
      descriptionMobile: 'Posicionamiento al centímetro y evasión en milisegundos.',
    },
    {
      title: 'Sensores fusionados',
      description: 'LiDAR 3D multilínea, cámaras y ultrasonido para leer el entorno en tiempo real.',
      descriptionMobile: 'LiDAR 3D multilínea, cámaras y ultrasonido.',
    },
    {
      title: 'IoT integrado',
      description: 'Se enlaza con puertas, barreras y ascensores; reconoce semáforos.',
      descriptionMobile: 'Se enlaza con puertas, barreras y ascensores.',
    },
  ],
  specs: [
    { value: '7,2', unit: 'km/h', label: 'Velocidad máxima' },
    { value: '100', unit: 'kg', label: 'Carga útil' },
    { value: '40', unit: 'km', label: 'Autonomía por carga', labelMobile: 'Autonomía' },
    { value: '≤15', unit: '°', label: 'Pendiente superable', desktopOnly: true },
    { value: '80', unit: 'L', label: 'Compartimento' },
  ] as Array<{ value: string; unit: string; label: string; labelMobile?: string; desktopOnly?: boolean }>,
};

/* ------------------------------------------------------------- Industrias */
export interface Industry {
  slug: string;
  name: string;
  metric: string;
  caption: string;
  image: string;
}
export const industriesCopy = {
  label: 'Soluciones por industria',
  title: 'Diez industrias.\nUna flota que se adapta.',
  titleMobile: 'Diez industrias. Una flota que se adapta.',
  cta: { label: 'Explorar soluciones', href: '/soluciones' } satisfies HomeLink,
};
const ind = (slug: string, name: string, metric: string, caption: string): Industry => ({
  slug,
  name,
  metric,
  caption,
  image: `/assets/home/industry-${slug}.jpg`,
});
export const industries: Industry[] = [
  ind('comunidades', 'Comunidades', '50%+', 'menos costo operativo'),
  ind('hoteles', 'Hoteles', '2–3x', 'eficiencia en servicio a habitación'),
  ind('showrooms', 'Showrooms', '100%', 'cobertura en recorridos guiados'),
  ind('hospitales', 'Hospitales', '99%', 'precisión en entregas de insumos'),
  ind('fabricas', 'Fábricas', '2–3x', 'eficiencia en manejo de materiales'),
  ind('restaurantes', 'Restaurantes', '2–3x', 'eficiencia en servicio a mesa'),
  ind('retail', 'Retail', '50%+', 'menos carga en asesores'),
  ind('delivery', 'Delivery', '99%', 'precisión en pedidos'),
  ind('paqueteria', 'Paquetería', '40%+', 'menos costo de entrega'),
  ind('adulto-mayor', 'Adulto mayor', '24/7', 'asistencia y acompañamiento'),
];

/* ----------------------------------------------------------- Aplicaciones */
export interface Application {
  tag: string;
  title: string;
  description?: string;
  descriptionMobile?: string;
  image: string;
}
export const applicationsCopy = {
  label: 'Aplicaciones',
  title: 'Robots en operación real.',
  description:
    'Escenarios donde esta flota ya trabaja todos los días: del lobby del hotel a la línea de producción.',
  href: '/aplicaciones',
};
export const applications: Application[] = [
  {
    tag: 'Hoteles',
    title: 'Servicio a habitación en horas pico y turno nocturno',
    description:
      'Robots de entrega hotelera llevan amenities y pedidos a las habitaciones, usan el ascensor por sí solos y liberan al personal en los horarios de mayor demanda.',
    descriptionMobile: 'Entregas a habitación con uso autónomo del ascensor.',
    image: '/assets/home/app-hoteles.jpg',
  },
  { tag: 'Industria farmacéutica', title: 'Logística interior–exterior entre naves', image: '/assets/home/app-farmaceutica.jpg' },
  { tag: 'Educación', title: 'Asistentes de aula multilingües', image: '/assets/home/app-educacion.jpg' },
  { tag: 'Inmobiliario', title: 'Atención en salas de ventas', image: '/assets/home/app-inmobiliario.jpg' },
  { tag: 'Eventos', title: 'Foros y exhibiciones internacionales', image: '/assets/home/app-eventos.jpg' },
];

/* ---------------------------------------------------------- Implementación */
export interface ProcessStep {
  icon: string;
  title: string;
  description: string;
  descriptionMobile: string;
}
export const processCopy = {
  label: 'Implementación',
  title: 'De la visita técnica a la\noperación, con un solo equipo.',
  titleMobile: 'De la visita técnica a la operación.',
  cta: { label: 'Agendar diagnóstico', href: '/contacto' } satisfies HomeLink,
};
export const processSteps: ProcessStep[] = [
  {
    icon: 'scan',
    title: 'Diagnóstico del sitio',
    description: 'Visitamos tu operación, mapeamos flujos y definimos qué tareas automatizar primero.',
    descriptionMobile: 'Mapeamos flujos y definimos qué tareas automatizar primero.',
  },
  {
    icon: 'wrench',
    title: 'Selección y configuración',
    description: 'Elegimos el modelo y personalizamos voz, guiones, interfaz y marca.',
    descriptionMobile: 'Modelo, voz, guiones, interfaz y marca a la medida.',
  },
  {
    icon: 'zap',
    title: 'Instalación y mapeo',
    description: 'Instalación, puesta en marcha y mapeo del sitio en aproximadamente 3 días.',
    descriptionMobile: 'Puesta en marcha y mapeo del sitio en unos 3 días.',
  },
  {
    icon: 'users',
    title: 'Capacitación en sitio',
    description: 'Formamos a operadores y al personal de mantenimiento de tu equipo.',
    descriptionMobile: 'Formamos a operadores y personal de mantenimiento.',
  },
  {
    icon: 'headset',
    title: 'Soporte continuo',
    description: 'Respuesta en 2 horas, solución en 24 h, línea técnica 24/7 y actualizaciones de por vida.',
    descriptionMobile: 'Respuesta en 2 h, solución en 24 h y línea técnica 24/7.',
  },
];

/* --------------------------------------------------------------- Recursos */
export interface Post {
  slug: string;
  category: string;
  date: string;
  title: string;
  image: string;
}
export const resourcesCopy = {
  label: 'Recursos',
  title: 'Noticias y casos de uso',
  cta: { label: 'Ver todos los artículos', href: '/recursos' } satisfies HomeLink,
};
export const posts: Post[] = [
  {
    slug: 'speedybot-ascensores-centros-de-negocios',
    category: 'Última milla',
    date: '20 sep 2026',
    title: 'Speedybot ya navega centros de negocios subiendo ascensores por sí solo',
    image: '/assets/home/post-speedybot.jpg',
  },
  {
    slug: 'seguridad-comunitaria-catcop',
    category: 'Seguridad',
    date: '02 sep 2026',
    title: 'CatCop: patrullaje autónomo para comunidades más seguras',
    image: '/assets/home/post-catcop.jpg',
  },
  {
    slug: 'amy-hipermercados',
    category: 'Recepción',
    date: '18 ago 2026',
    title: 'Amy, la nueva cara de la atención en hipermercados',
    image: '/assets/home/app-inmobiliario.jpg',
  },
];

/* -------------------------------------------------------------------- FAQ */
export interface FaqItem { question: string; answer: string; answerMobile?: string }
export const faqCopy = {
  label: 'Preguntas frecuentes',
  title: 'Lo que nos preguntan antes de implementar.',
  titleMobile: 'Antes de implementar.',
  description: '¿No encuentras tu respuesta? Un asesor te responde en menos de 2 horas.',
  cta: { label: 'Hablar con un asesor', href: '/contacto' } satisfies HomeLink,
};
export const faqItems: FaqItem[] = [
  {
    question: '¿En qué escenarios se pueden usar los robots de servicio?',
    answer:
      'Hoteles, oficinas, centros comerciales, salas de exhibición, centros de servicio público, hospitales, parques industriales, fábricas, restaurantes y agencias bancarias. Cubren recepción, guía, consulta, explicación en sitio, entrega de objetos y alimentos, patrullaje y promoción de marca.',
    answerMobile:
      'Hoteles, oficinas, centros comerciales, salas de exhibición, centros de servicio público, hospitales, parques industriales, fábricas, restaurantes y agencias bancarias.',
  },
  // El diseño solo muestra abierta la primera respuesta; las demás son copy propuesto.
  {
    question: '¿Necesitan supervisión manual las 24 horas?',
    answer:
      'No. Operan de forma autónoma: navegan, esquivan obstáculos, usan ascensores y regresan solos a cargar. Tu equipo solo interviene en tareas puntuales y, ante cualquier novedad, cuentas con línea técnica 24/7.',
  },
  {
    question: '¿Hay que adecuar el sitio o el tipo de piso?',
    answer:
      'En la mayoría de los casos no. En la visita técnica revisamos pisos, accesos y conectividad, mapeamos el sitio en aproximadamente 3 días y te indicamos si hace falta algún ajuste puntual.',
  },
  {
    question: '¿Se puede personalizar la voz, los guiones y la apariencia?',
    answer:
      'Sí. Configuramos voz, guiones, interfaz y marca para que el robot hable y se vea como tu empresa.',
  },
  {
    question: '¿Cuánto dura la batería?',
    answer:
      'Depende del modelo y de la carga de trabajo; por ejemplo, Speedybot Pro ofrece hasta 40 km de autonomía por carga. En la ficha de cada producto encuentras el detalle.',
  },
  {
    question: '¿Pueden chocar con personas u obstáculos?',
    answer:
      'Combinan LiDAR 3D, cámaras y ultrasonido para leer el entorno en tiempo real y evadir personas y obstáculos en milisegundos.',
  },
];

/* -------------------------------------------------------------------- CTA */
export const cta = {
  index: '09',
  label: 'Empecemos',
  title: 'Haz crecer tu operación\ncon robótica de servicio.',
  titleMobile: 'Haz crecer tu operación con robótica de servicio.',
  description:
    'Cuéntanos qué tareas quieres automatizar y te proponemos el modelo, la configuración y el plan de implementación.',
  descriptionMobile:
    'Cuéntanos qué tareas quieres automatizar y te proponemos modelo, configuración e implementación.',
  image: { src: '/assets/home/cta.jpg', alt: 'Robot humanoide sobre ruedas en una sala de estar' },
  actions: [
    { label: 'Solicitar cotización', href: '/contacto', variant: 'gold' as const },
    { label: 'Agendar una demo', href: '/contacto', variant: 'white' as const },
  ],
};
