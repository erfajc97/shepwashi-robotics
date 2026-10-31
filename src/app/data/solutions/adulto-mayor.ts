import type { SolutionData } from '../solutions';

export default {
  slug: 'adulto-mayor',
  name: 'Adulto mayor',
  order: 10,
  seo: {
    title: 'Un compañero inteligente para la vida senior | Shepwashi Robotics',
    description: 'Acompañamiento, recordatorios, rondas y alertas de emergencia, sin pausas.',
  },
  hero: {
    chip: 'Adulto mayor',
    title: 'Un compañero inteligente para la vida senior.',
    subtitle: 'Acompañamiento, recordatorios, rondas y alertas de emergencia, sin pausas.',
    image: { src: '/assets/solutions/adulto-mayor/hero.jpg', alt: 'Robots de servicio en un entorno de adulto mayor' },
    cta: { label: 'Diseñar mi solución', href: '/contacto' },
    secondaryCta: { label: 'Ver robots recomendados', href: '#robots' },
  },
  stats: [
    { value: '2–3x', label: 'Eficiencia en servicios de cuidado' },
    { value: '99%', label: 'Precisión en el servicio' },
    { value: '100%', label: 'Cobertura de asistencia' },
    { value: '50%+', label: 'Menos costo de cuidado' },
  ],
  howItWorks: {
    title: 'Solución robótica para el cuidado del adulto mayor',
    description:
      'Robots humanoides sobre ruedas acompañan la rutina diaria, recuerdan actividades, hacen rondas de inspección y alertan emergencias, aliviando la carga del equipo de cuidado.',
    image: { src: '/assets/solutions/adulto-mayor/how-it-works.jpg', alt: 'Diagrama isométrico: Solución robótica para el cuidado del adulto mayor' },
  },
  challenges: {
    title: 'Lo que frena la operación hoy',
    items: [
      'Altos costos y rotación de cuidadores',
      'Brechas en turnos nocturnos y descansos del personal',
      'Poco acompañamiento y respuestas tardías',
      'El cuidado de “último metro” dentro del hogar sigue sin resolverse',
      'Puntos ciegos y riesgo de respuesta tardía ante emergencias',
      'Equipos de una sola función sin compañía, rondas y alertas',
      'Equipos aislados, mantenimiento alto y poco valor a largo plazo',
      'Sin datos para gestionar la operación y el servicio',
    ],
  },
  why: {
    title: 'Lo que cambia con una flota robótica',
    items: [
      'Fabricante líder en cuidado senior y marca confiable',
      'Operación 24/7 para residencias y apartamentos senior',
      'Navegación en todo el espacio de vivienda',
      'Humanoide sobre ruedas para compañía y asistencia diaria',
      'Recordatorios, rondas de inspección y alarma de emergencia',
      'Alivia la carga de los cuidadores con retorno rápido',
      'Compañía cálida que mejora la calidad de vida',
      'Actualizaciones de software de por vida y soporte técnico remoto',
      'Respaldo de un fabricante con I+D y tecnología central propia',
    ],
  },
  recommended: {
    title: 'La flota para el cuidado del adulto mayor',
    cta: { label: 'Ver catálogo completo', href: '/catalogo' },
    products: [
      'g1',
      'snow',
      'timo',
      'jing',
    ],
  },
  cta: {
    title: 'Diseñemos la solución para tu residencia.',
    subtitle: 'Visita técnica, propuesta de flota e implementación en un solo equipo.',
    primary: { label: 'Agendar diagnóstico', href: '/contacto' },
    secondary: { label: 'Hablar con un asesor', href: '/contacto' },
  },
} satisfies SolutionData;
