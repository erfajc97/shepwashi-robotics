import type { ProductDetail } from '../productDetails';

// Figma: frame "Producto / Panda-E" (dark-desktop / dark-mobile).
const pandaE = {
  slug: 'panda-e',
  name: 'Panda-E',
  category: 'Médico',
  tagline: 'Entrega médica multinivel',
  hero: {
    image: '/assets/products/panda-e/hero-product.png',
    imageAlt: 'Panda-E',
    tags: [
      'Medicamentos',
      'Muestras de laboratorio',
      'Insumos médicos'
    ],
    caption: 'Serie Médico  ·  Panda-E',
    summaryTitle: 'Una matriz robótica para el hospital inteligente.',
    summary: 'Cubre los escenarios clave del hospital: entrega de medicamentos e insumos, distribución entre servicios, desinfección ambiental y guía de pacientes.',
    stats: [
      {
        icon: 'box',
        value: '99',
        unit: '%',
        label: 'Precisión de entregas'
      },
      {
        icon: 'navigation',
        value: '100',
        unit: '%',
        label: 'Cobertura de áreas'
      },
      {
        icon: 'battery',
        value: '24/7',
        label: 'Operación'
      },
      {
        icon: 'users',
        value: '40',
        unit: '%+',
        label: 'Menos costo de personal'
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
      'Medicamentos',
      'Muestras de laboratorio',
      'Insumos médicos',
      'Guía de pacientes',
      'Desinfección',
      'Ascensores autónomos'
    ]
  },
  coreFunctions: {
    title: 'Logística hospitalaria sin\ncontacto.',
    columns: 2,
    features: [
      {
        title: 'Entrega en farmacia',
        description: 'Reemplaza la distribución manual de medicamentos con más trazabilidad y menos errores.'
      },
      {
        title: 'Distribución entre servicios',
        description: 'Lleva insumos, muestras y documentos entre pisos y áreas, sin contacto.'
      },
      {
        title: 'Guía de pacientes',
        description: 'Orienta en triaje, rutas y consultas para reducir filas y esperas.'
      },
      {
        title: 'Desinfección complementaria',
        description: 'Se coordina con Jing para desinfección atomizada programada.'
      }
    ]
  },
  scenarios: {
    title: 'Dónde trabaja Panda-E',
    description: 'Lobbies, salas, laboratorios y farmacias hospitalarias: menos carga para el personal médico y menor riesgo de infecciones cruzadas.',
    scenes: [
      {
        name: 'Farmacia',
        image: '/assets/products/panda-e/scene-farmacia.jpg'
      },
      {
        name: 'Recepción hospitalaria',
        image: '/assets/products/panda-e/scene-recepcion-hospitalaria.jpg'
      }
    ]
  },
  related: {
    title: 'Otros modelos',
    slugs: [
      'jing',
      'ciao',
      'timo',
      'amy'
    ]
  },
  cta: {
    title: 'Implementa Panda-E en tu operación.',
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

export default pandaE;
