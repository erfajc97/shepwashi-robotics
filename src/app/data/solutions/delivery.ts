import type { SolutionData } from '../solutions';

export default {
  slug: 'delivery',
  name: 'Delivery',
  order: 8,
  seo: {
    title: 'Entrega automatizada para servicios de comida | Shepwashi Robotics',
    description: 'Rutas eficientes, entregas sin contacto y seguimiento de cada pedido en tiempo real.',
  },
  hero: {
    chip: 'Delivery',
    title: 'Entrega automatizada para servicios de comida.',
    subtitle: 'Rutas eficientes, entregas sin contacto y seguimiento de cada pedido en tiempo real.',
    image: { src: '/assets/solutions/delivery/hero.jpg', alt: 'Robots de servicio en un entorno de delivery' },
    cta: { label: 'Diseñar mi solución', href: '/contacto' },
    secondaryCta: { label: 'Ver robots recomendados', href: '#robots' },
  },
  stats: [
    { value: '2–3x', label: 'Eficiencia en entregas' },
    { value: '99%', label: 'Precisión en pedidos' },
    { value: '40%+', label: 'Menos costo de entrega' },
    { value: '100%', label: 'Cobertura multiedificio' },
  ],
  howItWorks: {
    title: 'Solución robótica para delivery',
    description:
      'Un sistema de entrega autónomo de punta a punta para la industria del delivery: planificación de rutas, entregas sin contacto y seguimiento en tiempo real que reducen costos y aceleran cada pedido.',
    image: { src: '/assets/solutions/delivery/how-it-works.jpg', alt: 'Diagrama isométrico: Solución robótica para delivery' },
  },
  challenges: {
    title: 'Lo que frena la operación hoy',
    items: [
      'Altos costos y rotación del personal de entrega',
      'Cuellos de botella de noche, con mal clima y en picos de pedidos',
      'Restricciones de acceso a edificios y esperas largas',
      'La “última milla” dentro de edificios sigue sin resolverse',
      'Riesgos de seguridad, pedidos perdidos y entregas erróneas',
      'Hardware de un solo uso que no soporta entregas masivas',
      'Equipos aislados, mantenimiento alto y poco valor a largo plazo',
      'Sin datos para gestionar la operación y el servicio',
    ],
  },
  why: {
    title: 'Lo que cambia con una flota robótica',
    items: [
      'Fabricante líder en delivery y marca confiable',
      'Operación 24/7 sin supervisión dentro de edificios',
      'Navegación multiedificio con ascensores compatibles',
      'Alta capacidad optimizada para pedidos de última milla',
      'Carga automática y entrega sin contacto',
      'Más rendimiento para los repartidores y retorno rápido',
      'Menos retrasos y clientes más satisfechos',
      'Actualizaciones de software de por vida y soporte técnico remoto',
      'Respaldo de un fabricante con I+D y tecnología central propia',
    ],
  },
  recommended: {
    title: 'La flota para delivery',
    cta: { label: 'Ver catálogo completo', href: '/catalogo' },
    products: [
      'speedybot-max',
      'speedybot-pro',
      'speedybot-max-e',
      'panda-hotel',
    ],
  },
  cta: {
    title: 'Diseñemos la solución para tu operación de delivery.',
    subtitle: 'Visita técnica, propuesta de flota e implementación en un solo equipo.',
    primary: { label: 'Agendar diagnóstico', href: '/contacto' },
    secondary: { label: 'Hablar con un asesor', href: '/contacto' },
  },
} satisfies SolutionData;
