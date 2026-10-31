import type { SolutionData } from '../solutions';

export default {
  slug: 'restaurantes',
  name: 'Restaurantes',
  order: 3,
  seo: {
    title: 'Entrega robótica para restaurantes | Shepwashi Robotics',
    description: 'Platos de la cocina a la mesa, vajilla de vuelta y una experiencia que los comensales recuerdan.',
  },
  hero: {
    chip: 'Restaurantes',
    title: 'Entrega robótica para restaurantes.',
    subtitle: 'Platos de la cocina a la mesa, vajilla de vuelta y una experiencia que los comensales recuerdan.',
    image: { src: '/assets/solutions/restaurantes/hero.jpg', alt: 'Robots de servicio en un entorno de restaurantes' },
    cta: { label: 'Diseñar mi solución', href: '/contacto' },
    secondaryCta: { label: 'Ver robots recomendados', href: '#robots' },
  },
  stats: [
    { value: '2–3x', label: 'Eficiencia del servicio' },
    { value: '99%', label: 'Precisión en entregas' },
    { value: '2x+', label: 'Eficiencia en recepción de clientes' },
    { value: '100%', label: 'Cobertura multimesa' },
  ],
  howItWorks: {
    title: 'Solución robótica para restaurantes',
    description:
      'El robot de entrega transporta los platos de forma autónoma de la cocina a la mesa: mejora la eficiencia del servicio, reduce la carga del personal y crea una experiencia gastronómica de alta tecnología.',
    image: { src: '/assets/solutions/restaurantes/how-it-works.jpg', alt: 'Diagrama isométrico: Solución robótica para restaurantes' },
  },
  challenges: {
    title: 'Lo que frena la operación hoy',
    items: [
      'Altos costos y rotación de meseros',
      'Brechas de servicio en horas pico',
      'Meseros sobrecargados: entregas lentas y esperas largas',
      'La “última milla” a la mesa sigue sin resolverse',
      'Servicio manual con errores, omisiones y puntos ciegos',
      'Equipos de una sola función que no cubren entrega y retiro de vajilla',
      'Equipos aislados, mantenimiento alto y poco valor a largo plazo',
      'Sin datos para gestionar la operación y el servicio',
    ],
  },
  why: {
    title: 'Lo que cambia con una flota robótica',
    items: [
      'Fabricante líder en restauración y marca confiable',
      'Operación 24/7 sin supervisión en el restaurante',
      'Cobertura total del salón con evasión de obstáculos',
      'Robots multibandeja para entrega y retiro de vajilla',
      'Entrega de platos y retorno a mesa que alivian a los meseros',
      'Ahorro significativo y retorno rápido',
      'Mejor ambiente y experiencia del comensal',
      'Actualizaciones de software de por vida y soporte técnico remoto',
      'Respaldo de un fabricante con I+D y tecnología central propia',
    ],
  },
  recommended: {
    title: 'La flota para restaurantes',
    cta: { label: 'Ver catálogo completo', href: '/catalogo' },
    products: [
      'panda',
      'panda-ultra',
      'amy-delivery',
      'amy',
    ],
  },
  cta: {
    title: 'Diseñemos la solución para tu restaurante.',
    subtitle: 'Visita técnica, propuesta de flota e implementación en un solo equipo.',
    primary: { label: 'Agendar diagnóstico', href: '/contacto' },
    secondary: { label: 'Hablar con un asesor', href: '/contacto' },
  },
} satisfies SolutionData;
