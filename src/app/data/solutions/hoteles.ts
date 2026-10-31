import type { SolutionData } from '../solutions';

export default {
  slug: 'hoteles',
  name: 'Hoteles',
  order: 1,
  seo: {
    title: 'Eleva el servicio hotelero con robótica inteligente | Shepwashi Robotics',
    description: 'Del lobby a la puerta de la habitación: bienvenida, guía, amenities y pedidos, las 24 horas.',
  },
  hero: {
    chip: 'Hoteles',
    title: 'Eleva el servicio hotelero con robótica inteligente.',
    subtitle: 'Del lobby a la puerta de la habitación: bienvenida, guía, amenities y pedidos, las 24 horas.',
    image: { src: '/assets/solutions/hoteles/hero.jpg', alt: 'Robots de servicio en un entorno de hoteles' },
    cta: { label: 'Diseñar mi solución', href: '/contacto' },
    secondaryCta: { label: 'Ver robots recomendados', href: '#robots' },
  },
  stats: [
    { value: '2–3x', label: 'Eficiencia en servicio a habitación' },
    { value: '99%', label: 'Precisión en entregas a huéspedes' },
    { value: '40%+', label: 'Menos costo de personal' },
    { value: '99%', label: 'Precisión en recepción de huéspedes' },
  ],
  howItWorks: {
    title: 'Solución robótica para hoteles',
    description:
      'Robots de recepción reciben y orientan a los huéspedes; robots de entrega llevan amenities, comidas y paquetes a cada habitación usando el ascensor por sí solos.',
    image: { src: '/assets/solutions/hoteles/how-it-works.jpg', alt: 'Diagrama isométrico: Solución robótica para hoteles' },
  },
  challenges: {
    title: 'Lo que frena la operación hoy',
    items: [
      'Altos costos y rotación en recepción y servicio a habitación',
      'Brechas de servicio en turno nocturno y horas pico',
      'Falta de personal: respuestas lentas y esperas largas',
      'La “última milla” dentro del hotel sigue sin resolverse',
      'La recepción manual genera omisiones y puntos ciegos',
      'Dispositivos de una sola función que no cubren recepción y entrega',
      'Equipos aislados, mantenimiento alto y poco valor a largo plazo',
      'Sin datos para gestionar la operación y el servicio',
    ],
  },
  why: {
    title: 'Lo que cambia con una flota robótica',
    items: [
      'Fabricante líder en hotelería y marca confiable',
      'Operación 24/7 sin supervisión en todos los escenarios del hotel',
      'Navegación en lobby, pisos y habitaciones',
      'Alta carga para amenities, comida y equipaje',
      'Recepción inteligente, saludo y guía de check-in',
      'Gran ahorro de costos y retorno rápido',
      'Experiencia sin contacto que mejora la calificación del hotel',
      'Solución integral para el hotel inteligente',
      'Actualizaciones de software de por vida y soporte técnico remoto',
      'Respaldo de un fabricante con I+D y tecnología central propia',
    ],
  },
  recommended: {
    title: 'La flota para hoteles',
    cta: { label: 'Ver catálogo completo', href: '/catalogo' },
    products: [
      'panda-hotel',
      'amy',
      'timo',
      'alice',
    ],
  },
  cta: {
    title: 'Diseñemos la solución para tu hotel.',
    subtitle: 'Visita técnica, propuesta de flota e implementación en un solo equipo.',
    primary: { label: 'Agendar diagnóstico', href: '/contacto' },
    secondary: { label: 'Hablar con un asesor', href: '/contacto' },
  },
} satisfies SolutionData;
