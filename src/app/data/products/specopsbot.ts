import type { ProductDetail } from '../productDetails';

// Figma: frame "Producto / Specopsbot" (dark-desktop / dark-mobile).
const specopsbot = {
  slug: 'specopsbot',
  name: 'Specopsbot',
  category: 'Seguridad',
  tagline: 'Patrullaje avanzado con IA',
  hero: {
    image: '/assets/products/specopsbot/hero-product.png',
    imageAlt: 'Specopsbot',
    tags: [
      'Reconocimiento facial',
      'Intercomunicador',
      'Patrullaje autónomo'
    ],
    caption: 'Serie Seguridad  ·  Specopsbot',
    summaryTitle: 'Vigilancia autónoma, de día y de noche.',
    summary: 'Mástil telescópico, conducción autónoma L4 y reconocimiento de imagen con IA, con cámaras 360° HD, infrarroja y de luz estelar para monitoreo en tiempo real, inspección exterior y patrullaje nocturno.',
    stats: [
      {
        icon: 'navigation',
        value: 'L4',
        label: 'Conducción autónoma'
      },
      {
        icon: 'scan',
        value: '360',
        unit: '°',
        label: 'Monitoreo HD'
      },
      {
        icon: 'monitor',
        value: '13,3',
        unit: '″',
        label: 'Pantalla táctil'
      },
      {
        icon: 'shield',
        value: 'IR',
        label: 'Detección térmica'
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
      'Reconocimiento facial',
      'Intercomunicador',
      'Patrullaje autónomo',
      'Alertas tempranas',
      'Video promocional',
      'Detección térmica IR',
      'Protección',
      'Monitoreo 360°'
    ]
  },
  coreFunctions: {
    title: 'Patrullaje inteligente para\nespacios abiertos.',
    columns: 2,
    features: [
      {
        title: 'Mástil telescópico',
        description: 'Eleva las cámaras para ampliar el campo de visión en cada recorrido.'
      },
      {
        title: 'Monitoreo en tiempo real',
        description: 'Cámaras 360° HD, infrarroja y de luz estelar conectadas a tu centro de control.'
      },
      {
        title: 'Inspección exterior',
        description: 'Conducción autónoma L4 y reconocimiento de imagen para recorrer espacios abiertos.'
      },
      {
        title: 'Patrullaje nocturno',
        description: 'Visión nocturna y detección térmica para vigilar cuando nadie más lo hace.'
      }
    ]
  },
  scenarios: {
    title: 'Dónde trabaja Specopsbot',
    description: 'Servicio público, industria y zonas turísticas que necesitan vigilancia continua en exteriores.',
    scenes: [
      {
        name: 'Servicio público',
        image: '/assets/products/specopsbot/scene-servicio-publico.jpg'
      },
      {
        name: 'Industria',
        image: '/assets/products/specopsbot/scene-industria.jpg'
      },
      {
        name: 'Zona turística',
        image: '/assets/products/specopsbot/scene-zona-turistica.jpg'
      }
    ]
  },
  related: {
    title: 'Otros modelos',
    slugs: [
      'catcop',
      'ciao',
      'timo',
      'amy'
    ]
  },
  cta: {
    title: 'Implementa Specopsbot en tu operación.',
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

export default specopsbot;
