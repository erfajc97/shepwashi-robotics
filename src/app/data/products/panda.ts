import type { ProductDetail } from '../productDetails';

// Figma: frame "Producto / Panda" (dark-desktop / dark-mobile).
const panda = {
  slug: 'panda',
  name: 'Panda',
  category: 'Última milla',
  tagline: 'Entrega de alimentos multibandeja',
  hero: {
    image: '/assets/products/panda/hero-product.png',
    imageAlt: 'Panda',
    tags: [
      'Entrega automática',
      'Presentación de platos',
      'Evasión autónoma'
    ],
    caption: 'Serie Última milla  ·  Panda',
    summaryTitle: 'Hasta 30 kg por viaje, de la cocina a la mesa.',
    summary: 'Para restaurantes, bares, hoteles, karaokes y áreas de recepción: entrega automática, presentación de platos y bienvenida. Ahorra costos de personal y atrae clientes.',
    stats: [
      {
        icon: 'battery',
        value: '≥8',
        unit: 'h',
        label: 'Autonomía'
      },
      {
        icon: 'box',
        value: '30',
        unit: 'kg',
        label: 'Carga útil'
      },
      {
        icon: 'gauge',
        value: '2',
        unit: 'm/s',
        label: 'Velocidad máxima'
      },
      {
        icon: 'monitor',
        value: '10,1',
        unit: '″',
        label: 'Pantalla'
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
      'Entrega automática',
      'Presentación de platos',
      'Evasión autónoma',
      'Bienvenida',
      'Navegación inteligente',
      'Publicidad'
    ]
  },
  coreFunctions: {
    title: 'Entrega inteligente que ahorra\ncostos de personal.',
    columns: 3,
    features: [
      {
        title: 'Entrega automática de alimentos',
        description: 'Los sensores llevan los platos al punto exacto y el sistema de amortiguación evita derrames durante el trayecto.'
      },
      {
        title: 'Navegación autónoma',
        description: 'LiDAR, infrarrojo y ultrasonido para navegar en interiores con alta precisión y moverse con libertad.'
      },
      {
        title: 'Carga automática',
        description: 'Vuelve solo a la base en el momento adecuado; su batería de litio permite unas 12 horas de trabajo continuo.'
      },
      {
        title: 'Evasión autónoma',
        description: 'Percibe cambios del entorno en tiempo real, rodea obstáculos y elige la ruta óptima hasta la mesa.'
      },
      {
        title: 'Bandejas multinivel',
        description: 'Cargan unos 30 kg y se ajustan a los distintos usos de la restauración.'
      }
    ]
  },
  scenarios: {
    title: 'Dónde trabaja Panda',
    description: 'Restaurantes de comida china, hot pot y occidental, bares, hoteles, karaokes y áreas de recepción: entrega automática, presentación de platos y bienvenida.',
    scenes: [
      {
        name: 'Restaurante',
        image: '/assets/products/panda/scene-restaurante.jpg'
      },
      {
        name: 'Local gourmet',
        image: '/assets/products/panda/scene-local-gourmet.jpg'
      }
    ]
  },
  specs: {
    title: 'Ficha técnica',
    note: 'Datos de referencia del fabricante. Confirmamos la configuración final según tu sitio y tus integraciones.',
    layout: 'table',
    pdf: {
      label: 'Descargar PDF',
      href: '/recursos'
    },
    rows: [
      {
        label: 'Dimensiones',
        value: '510 × 430 × 1200 mm'
      },
      {
        label: 'Peso',
        value: '43 kg'
      },
      {
        label: 'Velocidad',
        value: '0–2 m/s'
      },
      {
        label: 'Autonomía',
        value: '≥ 8 h'
      },
      {
        label: 'Tiempo de carga',
        value: '2–3 h'
      },
      {
        label: 'Pantalla',
        value: '10,1″ · 1280 × 800'
      },
      {
        label: 'Precisión de posicionamiento',
        value: '±50 mm'
      },
      {
        label: 'Distancia de frenado',
        value: '≤ 200 mm'
      },
      {
        label: 'Batería',
        value: '15 Ah'
      },
      {
        label: 'Carga útil',
        value: '30 kg'
      },
      {
        label: 'Potencia',
        value: '40 W'
      },
      {
        label: 'Bandeja',
        value: '380 × 380 mm'
      }
    ]
  },
  related: {
    title: 'Otros modelos',
    slugs: [
      'speedybot-pro',
      'speedybot-max',
      'speedybot-max-e',
      'panda-ultra'
    ]
  },
  cta: {
    title: 'Implementa Panda en tu operación.',
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

export default panda;
