import type { SolutionData } from '../solutions';

export default {
  slug: 'fabricas',
  name: 'Fábricas',
  order: 5,
  seo: {
    title: 'Soluciones robóticas para la fábrica inteligente | Shepwashi Robotics',
    description: 'Materia prima, piezas y producto terminado en movimiento continuo, entre líneas y bodegas.',
  },
  hero: {
    chip: 'Fábricas',
    title: 'Soluciones robóticas para la fábrica inteligente.',
    subtitle: 'Materia prima, piezas y producto terminado en movimiento continuo, entre líneas y bodegas.',
    image: { src: '/assets/solutions/fabricas/hero.jpg', alt: 'Robots de servicio en un entorno de fábricas' },
    cta: { label: 'Diseñar mi solución', href: '/contacto' },
    secondaryCta: { label: 'Ver robots recomendados', href: '#robots' },
  },
  stats: [
    { value: '2–3x', label: 'Eficiencia en manejo de materiales' },
    { value: '99%', label: 'Precisión en entregas logísticas' },
    { value: '100%', label: 'Cobertura multiescenario' },
    { value: '50%+', label: 'Menos costo de personal logístico' },
  ],
  howItWorks: {
    title: 'Solución robótica para fábricas',
    description:
      'Robots industriales de entrega conectan bodega y líneas de producción con rutas autónomas, ascensores y puertas: manejo de materiales estable, repetible y medible.',
    image: { src: '/assets/solutions/fabricas/how-it-works.jpg', alt: 'Diagrama isométrico: Solución robótica para fábricas' },
  },
  challenges: {
    title: 'Lo que frena la operación hoy',
    items: [
      'Altos costos y rotación de personal de manejo y distribución',
      'Brechas de servicio en producción nocturna continua',
      'Manejo manual con baja eficiencia y calidad inconsistente',
      'La “última milla” de materiales en el taller sigue sin resolverse',
      'El transporte manual implica riesgos y pérdidas por error humano',
      'Equipos de una sola función que no cubren manejo y abastecimiento de línea',
      'Equipos aislados, mantenimiento alto y poco valor a largo plazo',
      'Sin datos para gestionar la operación y el servicio',
    ],
  },
  why: {
    title: 'Lo que cambia con una flota robótica',
    items: [
      'Fabricante líder en manufactura y marca confiable',
      'Operación 24/7 sin supervisión en el taller',
      'Navegación en todo el taller',
      'Alta carga para materia prima, piezas y producto terminado',
      'Distribución inteligente entre líneas y bodegas',
      'Menos esfuerzo físico y retorno rápido',
      'Manejo estable y repetible que reduce accidentes',
      'Actualizaciones de software de por vida y soporte técnico remoto',
      'Respaldo de un fabricante con I+D y tecnología central propia',
    ],
  },
  recommended: {
    title: 'La flota para fábricas',
    cta: { label: 'Ver catálogo completo', href: '/catalogo' },
    products: [
      { slug: 'panda-amr-f600', nombre: 'Panda AMR Serie F', tagline: 'Transporte industrial de 150 a 600 kg', href: '/producto/panda-amr-serie-f' },
      'speedybot-max-e',
      'speedybot-pro',
      'g1',
    ],
  },
  cta: {
    title: 'Diseñemos la solución para tu planta.',
    subtitle: 'Visita técnica, propuesta de flota e implementación en un solo equipo.',
    primary: { label: 'Agendar diagnóstico', href: '/contacto' },
    secondary: { label: 'Hablar con un asesor', href: '/contacto' },
  },
} satisfies SolutionData;
