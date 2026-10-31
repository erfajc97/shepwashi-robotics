import type { SolutionData } from '../solutions';

export default {
  slug: 'showrooms',
  name: 'Showrooms',
  order: 7,
  seo: {
    title: 'Guía y recepción inteligentes para espacios de exhibición | Shepwashi Robotics',
    description: 'Bienvenida, recorridos y explicación de cada producto, con un estándar que eleva tu marca.',
  },
  hero: {
    chip: 'Showrooms',
    title: 'Guía y recepción inteligentes para espacios de exhibición.',
    subtitle: 'Bienvenida, recorridos y explicación de cada producto, con un estándar que eleva tu marca.',
    image: { src: '/assets/solutions/showrooms/hero.jpg', alt: 'Robots de servicio en un entorno de showrooms' },
    cta: { label: 'Diseñar mi solución', href: '/contacto' },
    secondaryCta: { label: 'Ver robots recomendados', href: '#robots' },
  },
  stats: [
    { value: '2–3x', label: 'Eficiencia en recepción' },
    { value: '99%', label: 'Reconocimiento de visitantes' },
    { value: '100%', label: 'Cobertura de explicación' },
    { value: '50%+', label: 'Menos costo de personal' },
  ],
  howItWorks: {
    title: 'Solución robótica para showrooms',
    description:
      'Robots de recepción saludan a los visitantes, los guían por la sala y explican productos y exhibiciones de forma automática y profesional.',
    image: { src: '/assets/solutions/showrooms/how-it-works.jpg', alt: 'Diagrama isométrico: Solución robótica para showrooms' },
  },
  challenges: {
    title: 'Lo que frena la operación hoy',
    items: [
      'Altos costos y rotación de guías e intérpretes',
      'Brechas de servicio fuera de horario, feriados y picos de visitas',
      'Calidad de explicación inestable y sin estándar',
      'Visitantes que esperan a un guía: mala experiencia',
      'La recepción manual genera omisiones y puntos ciegos',
      'Equipos de una sola función que no cubren saludo, guía y explicación',
      'Equipos aislados, mantenimiento alto y poco valor a largo plazo',
      'Sin datos para gestionar la operación y el servicio',
    ],
  },
  why: {
    title: 'Lo que cambia con una flota robótica',
    items: [
      'Fabricante líder en exhibición y marca confiable',
      'Operación 24/7 sin supervisión para recibir visitantes',
      'Navegación en toda la sala de exhibición',
      'Saludo, guía de rutas y navegación del sitio',
      'Presentación automática y profesional de cada exhibición',
      'Menos presión laboral y retorno rápido',
      'Experiencia estandarizada que refuerza la marca',
      'Actualizaciones de software de por vida y soporte técnico remoto',
      'Respaldo de un fabricante con I+D y tecnología central propia',
    ],
  },
  recommended: {
    title: 'La flota para showrooms',
    cta: { label: 'Ver catálogo completo', href: '/catalogo' },
    products: [
      'ciao',
      'amy',
      'fairy',
      'alice',
    ],
  },
  cta: {
    title: 'Diseñemos la solución para tu showroom.',
    subtitle: 'Visita técnica, propuesta de flota e implementación en un solo equipo.',
    primary: { label: 'Agendar diagnóstico', href: '/contacto' },
    secondary: { label: 'Hablar con un asesor', href: '/contacto' },
  },
} satisfies SolutionData;
