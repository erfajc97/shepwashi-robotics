import type { SolutionData } from '../solutions';

export default {
  slug: 'comunidades',
  name: 'Comunidades',
  order: 6,
  seo: {
    title: 'Servicios seguros, eficientes e inteligentes para tu comunidad | Shepwashi Robotics',
    description: 'Paquetes, comida y artículos del día a día entregados, y patrullaje de seguridad las 24 horas.',
  },
  hero: {
    chip: 'Comunidades',
    title: 'Servicios seguros, eficientes e inteligentes para tu comunidad.',
    subtitle: 'Paquetes, comida y artículos del día a día entregados, y patrullaje de seguridad las 24 horas.',
    image: { src: '/assets/solutions/comunidades/hero.jpg', alt: 'Robots de servicio en un entorno de comunidades' },
    cta: { label: 'Diseñar mi solución', href: '/contacto' },
    secondaryCta: { label: 'Ver robots recomendados', href: '#robots' },
  },
  stats: [
    { value: '2–3x', label: 'Eficiencia en última milla' },
    { value: '99%', label: 'Precisión en inspección de patrullaje' },
    { value: '24/7', label: 'Seguridad en la comunidad' },
    { value: '50%+', label: 'Menos costo de administración' },
  ],
  howItWorks: {
    title: 'Solución robótica para comunidades',
    description:
      'Robots de entrega interior–exterior y robots de patrullaje manejan paquetería, comida y artículos, y realizan rondas, inspecciones y alertas 24/7: más seguridad, menos costos y mejor calidad de vida.',
    image: { src: '/assets/solutions/comunidades/how-it-works.jpg', alt: 'Diagrama isométrico: Solución robótica para comunidades' },
  },
  challenges: {
    title: 'Lo que frena la operación hoy',
    items: [
      'Altos costos laborales y alta rotación',
      'Brechas de servicio 24/7 y limitaciones por clima',
      'Navegación deficiente en entornos complejos',
      'Los “últimos 100 metros” siguen sin resolverse',
      'Patrullajes reactivos y llenos de puntos ciegos',
      'Soluciones de un solo uso que no cubren varios casos',
      'Equipos aislados, mantenimiento alto y poco valor a largo plazo',
      'Sin datos para gestionar la operación y el servicio',
    ],
  },
  why: {
    title: 'Lo que cambia con una flota robótica',
    items: [
      'Fabricante líder y marca confiable',
      'Operación 24/7 sin supervisión y en todo clima',
      'Navegación interior–exterior de cobertura total',
      'Alta carga y gran capacidad para entregas eficientes',
      'Patrullaje inteligente con protección multisensor',
      'Ahorro significativo y retorno rápido',
      'Experiencia sin contacto y fácil de usar',
      'Actualizaciones de software de por vida y soporte técnico remoto',
      'Respaldo de un fabricante con I+D y tecnología central propia',
    ],
  },
  recommended: {
    title: 'La flota para comunidades',
    cta: { label: 'Ver catálogo completo', href: '/catalogo' },
    products: [
      'speedybot-pro',
      'speedybot-max-e',
      'catcop',
      'specopsbot',
    ],
  },
  cta: {
    title: 'Diseñemos la solución para tu comunidad.',
    subtitle: 'Visita técnica, propuesta de flota e implementación en un solo equipo.',
    primary: { label: 'Agendar diagnóstico', href: '/contacto' },
    secondary: { label: 'Hablar con un asesor', href: '/contacto' },
  },
} satisfies SolutionData;
