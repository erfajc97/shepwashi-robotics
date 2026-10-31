import type { ProductDetail } from '../productDetails';

// Figma: frame "Producto / Jing" (dark-desktop / dark-mobile).
const jing = {
  slug: 'jing',
  name: 'Jing',
  category: 'Médico',
  tagline: 'Desinfección en interiores',
  hero: {
    image: '/assets/products/jing/hero-product.png',
    imageAlt: 'Jing',
    tags: [
      'Navegación inteligente',
      'Aviso de desinfección',
      'Tareas programadas'
    ],
    caption: 'Serie Médico  ·  Jing',
    summaryTitle: 'Desinfección atomizada inteligente.',
    summary: 'Desinfección dinámica y autónoma que reduce el contacto de alto riesgo, con tareas programadas y focalizadas, navegación por láser y recarga automática.',
    stats: [
      {
        icon: 'shield',
        value: '99,99',
        unit: '%',
        label: 'Tasa de esterilización'
      },
      {
        icon: 'scan',
        value: '<8',
        unit: 'µm',
        label: 'Tamaño de partícula'
      },
      {
        icon: 'zap',
        value: '2',
        label: 'Boquillas de gran caudal'
      },
      {
        icon: 'gauge',
        value: '3',
        label: 'Niveles de niebla'
      }
    ],
    primaryCta: {
      label: 'Solicitar cotización',
      href: '/contacto'
    },
    secondaryCta: {
      label: 'Descargar ficha técnica',
      href: '/recursos'
    }
  },
  functionsBand: {
    label: 'Funciones',
    items: [
      'Navegación inteligente',
      'Aviso de desinfección',
      'Tareas programadas',
      'Recarga automática',
      'Desinfección atomizada',
      'Desinfección UV'
    ]
  },
  coreFunctions: {
    title: 'Desinfección inteligente que\nmejora la calidad del servicio.',
    columns: 2,
    features: [
      {
        title: 'Navegación láser y evasión',
        description: 'Rutas autónomas y evasión multisensor; desinfección dinámica, programada y focalizada.'
      },
      {
        title: 'Recarga automática',
        description: 'Sin gestión manual. Protección en seco: se apaga y vuelve a la base cuando el nivel de agua es bajo.'
      },
      {
        title: 'Niebla en tres niveles',
        description: 'Control táctil que ajusta la niebla según la humedad del ambiente.'
      },
      {
        title: 'Movimiento autónomo',
        description: 'Esterilización del 99,99% con partículas menores a 8 µm y dos boquillas de gran caudal.'
      }
    ]
  },
  scenarios: {
    title: 'Dónde trabaja Jing',
    description: 'Aeropuertos, estaciones de tren y metro, hospitales, laboratorios, oficinas, bancos, centros comerciales, hoteles, colegios y talleres.',
    scenes: [
      {
        name: 'Oficinas',
        image: '/assets/products/jing/scene-oficinas.jpg'
      },
      {
        name: 'Recepción',
        image: '/assets/products/jing/scene-recepcion.jpg'
      },
      {
        name: 'Hospital',
        image: '/assets/products/jing/scene-hospital.jpg'
      }
    ]
  },
  related: {
    title: 'Otros modelos',
    slugs: [
      'panda-e',
      'ciao',
      'timo',
      'amy'
    ]
  },
  cta: {
    title: 'Implementa Jing en tu operación.',
    description: 'Te asesoramos en configuración, instalación, capacitación y soporte.',
    mobileDescription: 'Configuración, instalación, capacitación y soporte local.',
    primary: {
      label: 'Solicitar cotización',
      href: '/contacto'
    },
    secondary: {
      label: 'Agendar una demo',
      href: '/contacto'
    }
  }
} satisfies ProductDetail;

export default jing;
