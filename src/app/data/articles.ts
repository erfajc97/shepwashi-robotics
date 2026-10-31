// Datos de Recursos / Artículo. Fuente: frames recursos-* y articulo-* del diseño.
// El diseño solo define el cuerpo del artículo destacado ("ascensores-centros-de-negocios").
// Los demás artículos usan el mismo layout con un cuerpo mínimo derivado de su título/resumen
// (marcados con `placeholderBody: true`): NO es copy del diseño.

export type ArticleCategory = 'Última milla' | 'Seguridad' | 'Recepción' | 'Eventos';

export type ArticleBlock =
  | { type: 'h'; text: string; hideOnMobile?: boolean }
  | { type: 'p'; text: string; mobileText?: string | null }
  | { type: 'quote'; text: string; mobileText?: string }
  | { type: 'image'; src: string; alt: string };

export interface Article {
  slug: string;
  title: string;
  category: ArticleCategory;
  date: string;
  minutes: number;
  image: string;
  summary: string;
  lead: string;
  mobileLead?: string;
  body: ArticleBlock[];
  author: string;
  featured?: boolean;
  related?: string[];
  placeholderBody?: boolean;
}

const A = '/assets/recursos';
const author = 'Equipo Shepwashi Robotics';

const minimal = (text: string): ArticleBlock[] => [
  { type: 'h', text: 'Resumen' },
  { type: 'p', text },
];

export const articles: Article[] = [
  {
    slug: 'speedybot-ascensores-centros-de-negocios',
    title: 'Cómo Speedybot usa ascensores de forma autónoma en centros de negocios',
    category: 'Última milla',
    date: '20 sep 2026',
    minutes: 4,
    image: `${A}/featured-ascensores.jpg`,
    summary: 'Llamar el ascensor, elegir el piso y salir sin ayuda: así resuelve Speedybot las entregas verticales en edificios corporativos.',
    lead: 'En un edificio corporativo, la parte difícil de una entrega no es recorrer el pasillo: es cambiar de piso. Ahí es donde la mayoría de procesos manuales se frenan.',
    mobileLead: 'En un edificio corporativo, la parte difícil de una entrega no es recorrer el pasillo: es cambiar de piso.',
    author,
    featured: true,
    related: ['speedybot-comunidades', 'speedybot-campus-universitario', 'ultima-milla-hotelera'],
    body: [
      { type: 'h', text: 'El reto vertical' },
      {
        type: 'p',
        text: 'Recepciones saturadas, mensajeros esperando en el lobby y pedidos que se acumulan en horas pico. Cada viaje en ascensor depende de una persona disponible.',
        mobileText: 'Recepciones saturadas, mensajeros esperando en el lobby y pedidos que se acumulan en horas pico.',
      },
      { type: 'h', text: 'Cómo funciona' },
      {
        type: 'p',
        text: 'Speedybot se integra con el sistema de ascensores mediante su módulo IoT: llama la cabina, indica el piso de destino, entra, viaja y sale por sí solo. En el piso correcto navega hasta el punto de entrega y avisa al destinatario.',
        mobileText: 'Speedybot se integra con el ascensor mediante su módulo IoT: llama la cabina, indica el piso, entra, viaja y sale por sí solo.',
      },
      {
        type: 'quote',
        text: '“La entrega vertical deja de depender de que alguien esté libre para acompañar el pedido.”',
        mobileText: '“La entrega vertical deja de depender de que alguien esté libre.”',
      },
      { type: 'image', src: `${A}/speedybot-comunidades.jpg`, alt: 'Speedybot entregando un pedido en un edificio' },
      { type: 'h', text: 'Seguridad en cabina', hideOnMobile: true },
      {
        type: 'p',
        text: 'La fusión de LiDAR, cámaras y ultrasonido le permite detectar personas dentro y fuera del ascensor, ceder el paso y esperar el siguiente viaje si la cabina está llena.',
        mobileText: null,
      },
      { type: 'h', text: 'Qué cambia en la operación' },
      {
        type: 'p',
        text: 'El personal de recepción se libera para atender visitantes, los pedidos llegan a tiempo a cualquier piso y la operación gana trazabilidad de cada entrega.',
        mobileText: 'Recepción liberada, pedidos a tiempo en cualquier piso y trazabilidad de cada entrega.',
      },
    ],
  },
  {
    slug: 'speedybot-comunidades',
    title: 'Speedybot en comunidades: abre puertas, sube ascensores y entrega en la puerta',
    category: 'Última milla',
    date: '12 sep 2026',
    minutes: 5,
    image: `${A}/speedybot-comunidades.jpg`,
    summary: 'Cómo Speedybot resuelve la entrega hasta la puerta en conjuntos residenciales.',
    lead: 'Cómo Speedybot resuelve la entrega hasta la puerta en conjuntos residenciales.',
    author,
    placeholderBody: true,
    body: minimal('Speedybot abre puertas, sube ascensores y entrega el pedido en la puerta del residente, sin depender de la portería.'),
  },
  {
    slug: 'seguridad-comunitaria-catcop',
    title: 'Seguridad comunitaria inteligente con CatCop',
    category: 'Seguridad',
    date: '02 sep 2026',
    minutes: 4,
    image: `${A}/catcop-comunitario.jpg`,
    summary: 'Cómo CatCop refuerza la seguridad de una comunidad con patrullaje y alertas.',
    lead: 'Cómo CatCop refuerza la seguridad de una comunidad con patrullaje y alertas.',
    author,
    placeholderBody: true,
    body: minimal('CatCop patrulla la comunidad, detecta situaciones inusuales y avisa al equipo de seguridad en tiempo real.'),
  },
  {
    slug: 'patrullaje-nocturno',
    title: 'Patrullaje nocturno: qué ve un robot cuando nadie más mira',
    category: 'Seguridad',
    date: '25 ago 2026',
    minutes: 6,
    image: `${A}/patrullaje-nocturno.jpg`,
    summary: 'Qué detecta un robot de seguridad durante el patrullaje nocturno.',
    lead: 'Qué detecta un robot de seguridad durante el patrullaje nocturno.',
    author,
    placeholderBody: true,
    body: minimal('Con cámaras y sensores, el robot recorre rutas fijas de noche y reporta cualquier anomalía a quien opera la seguridad.'),
  },
  {
    slug: 'robot-recepcion-gran-exposicion',
    title: 'Qué puede hacer un robot de recepción en una gran exposición',
    category: 'Eventos',
    date: '18 ago 2026',
    minutes: 5,
    image: `${A}/recepcion-exposicion.jpg`,
    summary: 'Funciones de un robot de recepción en ferias y exposiciones.',
    lead: 'Funciones de un robot de recepción en ferias y exposiciones.',
    author,
    placeholderBody: true,
    body: minimal('Un robot de recepción atiende visitantes, orienta hacia los stands y libera al equipo humano para conversaciones comerciales.'),
  },
  {
    slug: 'timo-ferias-internacionales',
    title: 'Timo en ferias internacionales: atraer, explicar y convertir',
    category: 'Eventos',
    date: '05 ago 2026',
    minutes: 4,
    image: `${A}/timo-ferias.jpg`,
    summary: 'Cómo Timo atrae visitantes y explica el producto en ferias internacionales.',
    lead: 'Cómo Timo atrae visitantes y explica el producto en ferias internacionales.',
    author,
    placeholderBody: true,
    body: minimal('Timo atrae al público al stand, explica la oferta y captura contactos para el equipo comercial.'),
  },
  {
    slug: 'robots-recepcion-estaciones-de-servicio',
    title: 'Robots de recepción en estaciones de servicio',
    category: 'Recepción',
    date: '22 jul 2026',
    minutes: 3,
    image: `${A}/recepcion-estaciones.jpg`,
    summary: 'Qué aporta un robot de recepción en una estación de servicio.',
    lead: 'Qué aporta un robot de recepción en una estación de servicio.',
    author,
    placeholderBody: true,
    body: minimal('El robot da la bienvenida, informa promociones y orienta a los clientes mientras el personal atiende la operación.'),
  },
  {
    slug: 'timo-supermercados',
    title: 'Timo en supermercados: saluda en horas pico y patrulla en horas valle',
    category: 'Recepción',
    date: '10 jul 2026',
    minutes: 5,
    image: `${A}/timo-supermercados.jpg`,
    summary: 'Cómo Timo alterna entre atención al cliente y patrullaje en un supermercado.',
    lead: 'Cómo Timo alterna entre atención al cliente y patrullaje en un supermercado.',
    author,
    placeholderBody: true,
    body: minimal('En horas pico Timo saluda y orienta a los clientes; en horas valle patrulla los pasillos y reporta incidencias.'),
  },
  {
    slug: 'amy-hipermercados',
    title: 'Amy en hipermercados: cinco aprendizajes de atención al cliente',
    category: 'Recepción',
    date: '26 jun 2026',
    minutes: 6,
    image: `${A}/amy-hipermercados.jpg`,
    summary: 'Cinco aprendizajes de atención al cliente con Amy en hipermercados.',
    lead: 'Cinco aprendizajes de atención al cliente con Amy en hipermercados.',
    author,
    placeholderBody: true,
    body: minimal('Lo aprendido al implementar Amy en hipermercados: ubicación, flujos de atención, integración y medición de resultados.'),
  },
  {
    slug: 'robots-foros-economicos',
    title: 'Robots en foros económicos: guía práctica para organizadores',
    category: 'Eventos',
    date: '12 jun 2026',
    minutes: 5,
    image: `${A}/foros-economicos.jpg`,
    summary: 'Guía práctica para organizadores que quieren incorporar robots en un foro.',
    lead: 'Guía práctica para organizadores que quieren incorporar robots en un foro.',
    author,
    placeholderBody: true,
    body: minimal('Qué preparar antes del evento, dónde ubicar los robots y cómo coordinarlos con el equipo organizador.'),
  },
  {
    slug: 'speedybot-campus-universitario',
    title: 'Speedybot como mensajero del campus universitario',
    category: 'Última milla',
    date: '20 may 2026',
    minutes: 4,
    image: `${A}/featured-ascensores.jpg`,
    summary: 'Speedybot como mensajero interno en un campus universitario.',
    lead: 'Speedybot como mensajero interno en un campus universitario.',
    author,
    placeholderBody: true,
    body: minimal('Speedybot lleva documentos y paquetes entre edificios del campus, con seguimiento de cada entrega.'),
  },
  {
    slug: 'ultima-milla-hotelera',
    title: 'La última milla hotelera, resuelta con robots de entrega',
    category: 'Última milla',
    date: '17 abr 2026',
    minutes: 5,
    image: `${A}/ultima-milla-hotelera.jpg`,
    summary: 'Cómo los robots de entrega resuelven la última milla dentro de un hotel.',
    lead: 'Cómo los robots de entrega resuelven la última milla dentro de un hotel.',
    author,
    placeholderBody: true,
    body: minimal('Los robots llevan pedidos a las habitaciones, usan el ascensor solos y avisan al huésped en la puerta.'),
  },
];

export const featuredArticle = articles.find((a) => a.featured)!;
/** Listado de Recursos (el destacado va aparte en escritorio y primero en móvil). */
export const libraryArticles = articles.filter((a) => !a.featured);
export const articleCategories: ArticleCategory[] = ['Última milla', 'Seguridad', 'Recepción', 'Eventos'];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export function relatedArticles(a: Article): Article[] {
  if (a.related) return a.related.map((s) => getArticle(s)!).filter(Boolean);
  const same = articles.filter((x) => x.slug !== a.slug && x.category === a.category);
  const others = articles.filter((x) => x.slug !== a.slug && x.category !== a.category);
  return [...same, ...others].slice(0, 3);
}
