import type { SolutionData } from '../solutions';

export default {
  slug: 'hospitales',
  name: 'Hospitales',
  order: 2,
  seo: {
    title: 'Robots inteligentes para el hospital inteligente | Shepwashi Robotics',
    description: 'Medicamentos, muestras e insumos en movimiento; pacientes bien orientados; menos riesgo de contagio.',
  },
  hero: {
    chip: 'Hospitales',
    title: 'Robots inteligentes para el hospital inteligente.',
    subtitle: 'Medicamentos, muestras e insumos en movimiento; pacientes bien orientados; menos riesgo de contagio.',
    image: { src: '/assets/solutions/hospitales/hero.jpg', alt: 'Robots de servicio en un entorno de hospitales' },
    cta: { label: 'Diseñar mi solución', href: '/contacto' },
    secondaryCta: { label: 'Ver robots recomendados', href: '#robots' },
  },
  stats: [
    { value: '99%', label: 'Precisión en entrega de insumos' },
    { value: '100%', label: 'Cobertura en guía de pacientes' },
    { value: '100%', label: 'Accesibilidad de entregas en todas las áreas' },
    { value: '40%+', label: 'Menos costo de personal' },
  ],
  howItWorks: {
    title: 'Solución robótica para hospitales',
    description:
      'Robots de guía atienden triaje, rutas y consultas en el lobby; robots de entrega mueven medicamentos, muestras e insumos entre farmacia, laboratorio y pisos.',
    image: { src: '/assets/solutions/hospitales/how-it-works.jpg', alt: 'Diagrama isométrico: Solución robótica para hospitales' },
  },
  challenges: {
    title: 'Lo que frena la operación hoy',
    items: [
      'Altos costos y gran carga para enfermería y recepción',
      'Brechas de servicio en turno nocturno y horas pico',
      'Consultas frecuentes que generan filas largas',
      'La “última milla” de la logística interna sigue sin resolverse',
      'La guía manual produce errores y puntos ciegos',
      'Equipos de una sola función que no cubren guía y entrega',
      'Equipos aislados, mantenimiento alto y poco valor a largo plazo',
      'Sin datos para gestionar la operación y el servicio',
    ],
  },
  why: {
    title: 'Lo que cambia con una flota robótica',
    items: [
      'Fabricante líder en salud y marca confiable',
      'Operación 24/7 sin supervisión en escenarios hospitalarios',
      'Navegación en lobby, salas y laboratorio',
      'Guía inteligente: triaje, rutas y consultas',
      'Alta carga para medicamentos, muestras e insumos',
      'Alivia la carga del personal médico con retorno rápido',
      'Servicio sin contacto que reduce infecciones cruzadas',
      'Solución integral para el hospital inteligente',
      'Actualizaciones de software de por vida y soporte técnico remoto',
      'Respaldo de un fabricante con I+D y tecnología central propia',
    ],
  },
  recommended: {
    title: 'La flota para hospitales',
    cta: { label: 'Ver catálogo completo', href: '/catalogo' },
    products: [
      'panda-e',
      'jing',
      'alice',
      'speedybot-max',
    ],
  },
  cta: {
    title: 'Diseñemos la solución para tu hospital.',
    subtitle: 'Visita técnica, propuesta de flota e implementación en un solo equipo.',
    primary: { label: 'Agendar diagnóstico', href: '/contacto' },
    secondary: { label: 'Hablar con un asesor', href: '/contacto' },
  },
} satisfies SolutionData;
