import type { SolutionData } from '../solutions';

export default {
  slug: 'retail',
  name: 'Retail',
  order: 4,
  seo: {
    title: 'Servicio inteligente para el retail moderno | Shepwashi Robotics',
    description: 'Saludo, asesoría de producto y promociones en cada pasillo, con un estándar de servicio constante.',
  },
  hero: {
    chip: 'Retail',
    title: 'Servicio inteligente para el retail moderno.',
    subtitle: 'Saludo, asesoría de producto y promociones en cada pasillo, con un estándar de servicio constante.',
    image: { src: '/assets/solutions/retail/hero.jpg', alt: 'Robots de servicio en un entorno de retail' },
    cta: { label: 'Diseñar mi solución', href: '/contacto' },
    secondaryCta: { label: 'Ver robots recomendados', href: '#robots' },
  },
  stats: [
    { value: '2–3x', label: 'Eficiencia en asesoría de compra' },
    { value: '99%', label: 'Precisión en recepción de clientes' },
    { value: '100%', label: 'Cobertura interactiva de la tienda' },
    { value: '50%+', label: 'Menos costo de personal' },
  ],
  howItWorks: {
    title: 'Solución robótica para retail',
    description:
      'El robot guía a los clientes, responde preguntas sobre productos y promociona ofertas especiales: mejora la experiencia de compra, reduce la carga del personal y aumenta la eficiencia de la tienda.',
    image: { src: '/assets/solutions/retail/how-it-works.jpg', alt: 'Diagrama isométrico: Solución robótica para retail' },
  },
  challenges: {
    title: 'Lo que frena la operación hoy',
    items: [
      'Altos costos y rotación de asesores de piso',
      'Brechas de servicio en feriados, horas pico y cambios de turno',
      'Calidad de asesoría inestable y sin estándar',
      'La guía de “último metro” dentro de la tienda sigue sin resolverse',
      'El servicio manual genera omisiones y puntos ciegos',
      'Equipos de una sola función que no cubren saludo, consulta y promoción',
      'Equipos aislados, mantenimiento alto y poco valor a largo plazo',
      'Sin datos para gestionar la operación y el servicio',
    ],
  },
  why: {
    title: 'Lo que cambia con una flota robótica',
    items: [
      'Fabricante líder en retail y marca confiable',
      'Operación 24/7 sin supervisión en tiendas y centros comerciales',
      'Navegación en toda la tienda',
      'Saludo, consulta de producto y asesoría de compra',
      'Guía de rutas, recomendaciones y anuncios de promociones',
      'Menos presión sobre los asesores y retorno rápido',
      'Experiencia estandarizada que aumenta el engagement',
      'Actualizaciones de software de por vida y soporte técnico remoto',
      'Respaldo de un fabricante con I+D y tecnología central propia',
    ],
  },
  recommended: {
    title: 'La flota para retail',
    cta: { label: 'Ver catálogo completo', href: '/catalogo' },
    products: [
      'amy',
      'alice',
      'timo',
      'panda-ultra',
    ],
  },
  cta: {
    title: 'Diseñemos la solución para tu tienda.',
    subtitle: 'Visita técnica, propuesta de flota e implementación en un solo equipo.',
    primary: { label: 'Agendar diagnóstico', href: '/contacto' },
    secondary: { label: 'Hablar con un asesor', href: '/contacto' },
  },
} satisfies SolutionData;
