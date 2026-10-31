import type { SolutionData } from '../solutions';

export default {
  slug: 'paqueteria',
  name: 'Paquetería',
  order: 9,
  seo: {
    title: 'Última milla automatizada para paquetes | Shepwashi Robotics',
    description: 'Almacenamiento inteligente y retiro sin contacto en parques, conjuntos y campus.',
  },
  hero: {
    chip: 'Paquetería',
    title: 'Última milla automatizada para paquetes.',
    subtitle: 'Almacenamiento inteligente y retiro sin contacto en parques, conjuntos y campus.',
    image: { src: '/assets/solutions/paqueteria/hero.jpg', alt: 'Robots de servicio en un entorno de paquetería' },
    cta: { label: 'Diseñar mi solución', href: '/contacto' },
    secondaryCta: { label: 'Ver robots recomendados', href: '#robots' },
  },
  stats: [
    { value: '2–3x', label: 'Eficiencia en última milla' },
    { value: '99%', label: 'Precisión en entregas' },
    { value: '40%+', label: 'Menos costo de entrega' },
    { value: '100%', label: 'Cobertura de áreas' },
  ],
  howItWorks: {
    title: 'Solución robótica para paquetería',
    description:
      'Robots de gran capacidad distribuyen paquetes en la última milla, se conectan con ascensores y guardan cada envío hasta su retiro sin contacto.',
    image: { src: '/assets/solutions/paqueteria/how-it-works.jpg', alt: 'Diagrama isométrico: Solución robótica para paquetería' },
  },
  challenges: {
    title: 'Lo que frena la operación hoy',
    items: [
      'Altos costos y rotación de mensajeros',
      'Brechas por mal clima, feriados y picos de envíos',
      'Acceso difícil a edificios y baja eficiencia',
      'La “última milla” de distribución sigue sin resolverse',
      'Pérdidas, entregas erróneas y riesgos de seguridad',
      'Hardware de un solo uso que no soporta envíos masivos',
      'Equipos aislados, mantenimiento alto y poco valor a largo plazo',
      'Sin datos para gestionar la operación y el servicio',
    ],
  },
  why: {
    title: 'Lo que cambia con una flota robótica',
    items: [
      'Fabricante líder en logística express y marca confiable',
      'Operación 24/7 sin supervisión en parques y conjuntos',
      'Navegación multiárea con conexión a ascensores',
      'Gran capacidad para distribución de paquetería',
      'Almacenamiento inteligente y retiro sin contacto',
      'Menos carga para mensajeros y retorno rápido',
      'Menos pérdidas y mejor experiencia del destinatario',
      'Actualizaciones de software de por vida y soporte técnico remoto',
      'Respaldo de un fabricante con I+D y tecnología central propia',
    ],
  },
  recommended: {
    title: 'La flota para paquetería',
    cta: { label: 'Ver catálogo completo', href: '/catalogo' },
    products: [
      'speedybot-max-e',
      'speedybot-max',
      'speedybot-pro',
      { slug: 'panda-amr-f600', nombre: 'Panda AMR Serie F', tagline: 'Transporte industrial de 150 a 600 kg', href: '/producto/panda-amr-serie-f' },
    ],
  },
  cta: {
    title: 'Diseñemos la solución para tu operación de paquetería.',
    subtitle: 'Visita técnica, propuesta de flota e implementación en un solo equipo.',
    primary: { label: 'Agendar diagnóstico', href: '/contacto' },
    secondary: { label: 'Hablar con un asesor', href: '/contacto' },
  },
} satisfies SolutionData;
