import type { ProductDetail } from '../productDetails';

// Figma: frame "Producto / G1" (dark-desktop / dark-mobile).
const g1 = {
  slug: 'g1',
  name: 'G1',
  category: 'Humanoide',
  tagline: 'Humanoide sobre ruedas con IA',
  hero: {
    image: '/assets/products/g1/hero-product.png',
    imageAlt: 'G1',
    tags: [
      'Reconocimiento facial',
      'Intercomunicador',
      'Patrullaje autónomo'
    ],
    caption: 'Serie Humanoide  ·  G1',
    summaryTitle: 'El primer humanoide con ruedas de doble columna del mundo.',
    summary: 'Chasis de tracción y dirección en las cuatro ruedas, diseño patentado de doble columna y el modelo de lenguaje SmartStar a bordo. Carga útil de 20 kg.',
    stats: [
      {
        icon: 'box',
        value: '20',
        unit: 'kg',
        label: 'Carga útil'
      },
      {
        icon: 'navigation',
        value: '4×4',
        label: 'Tracción y dirección'
      },
      {
        icon: 'scan',
        value: '2',
        label: 'Columnas patentadas'
      },
      {
        icon: 'zap',
        value: 'IA',
        label: 'Modelo SmartStar'
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
      'Manipulación de carga',
      'Acompañamiento en el hogar',
      'Clasificación automática',
      'Protección'
    ]
  },
  coreFunctions: {
    title: 'Un humanoide para trabajar,\nasistir y acompañar.',
    columns: 2,
    features: [
      {
        title: 'Doble columna patentada',
        description: 'Estructura de doble columna que le da alcance vertical y estabilidad al manipular objetos.'
      },
      {
        title: 'Tracción y dirección 4×4',
        description: 'Chasis de cuatro ruedas motrices y direccionales para moverse con precisión en espacios reducidos.'
      },
      {
        title: 'Modelo SmartStar',
        description: 'Modelo de lenguaje de gran escala para entender instrucciones y responder con naturalidad.'
      },
      {
        title: 'Carga útil de 20 kg',
        description: 'Manipulación y clasificación de objetos en planta, comercio y hogar.'
      }
    ]
  },
  scenarios: {
    title: 'Dónde trabaja G1',
    description: 'Hogares y residencias, comercio y plantas industriales que requieren manipulación, clasificación y acompañamiento.',
    scenes: [
      {
        name: 'Hogar',
        image: '/assets/products/g1/scene-hogar.jpg'
      },
      {
        name: 'Comercio',
        image: '/assets/products/g1/scene-comercio.jpg'
      },
      {
        name: 'Planta industrial',
        image: '/assets/products/g1/scene-planta-industrial.jpg'
      }
    ]
  },
  related: {
    title: 'Otros modelos',
    slugs: [
      'ciao',
      'timo',
      'amy',
      'alice'
    ]
  },
  cta: {
    title: 'Implementa G1 en tu operación.',
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

export default g1;
