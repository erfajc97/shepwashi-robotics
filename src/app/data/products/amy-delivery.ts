import type { ProductDetail } from '../productDetails';

// Figma: frame "Producto / Amy Delivery" (dark-desktop / dark-mobile).
const amyDelivery = {
  slug: 'amy-delivery',
  name: 'Amy Delivery',
  category: 'Última milla',
  tagline: 'Entrega humanoide de alimentos',
  hero: {
    image: '/assets/products/amy-delivery/hero-product.png',
    imageAlt: 'Amy Delivery',
    tags: [
      'Entrega automática',
      'Presentación de platos',
      'Evasión autónoma'
    ],
    caption: 'Serie Última milla  ·  Amy Delivery',
    summaryTitle: 'Sirve, recomienda y recibe a tus comensales.',
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
        value: '5',
        unit: 'kg',
        label: 'Carga útil'
      },
      {
        icon: 'gauge',
        value: '1,5',
        unit: 'm/s',
        label: 'Velocidad máxima'
      },
      {
        icon: 'monitor',
        value: '13',
        unit: '″',
        label: 'Pantalla táctil'
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
    columns: 4,
    features: [
      {
        title: 'Entrega automática de alimentos',
        description: 'Los sensores llevan los platos al punto exacto y la amortiguación evita derrames.'
      },
      {
        title: 'Presentación de platos',
        description: 'Recomienda platos fuertes, especiales del día y combos, y toma pedidos según el cliente.'
      },
      {
        title: 'Navegación autónoma',
        description: 'LiDAR, infrarrojo y ultrasonido para navegar en interiores con alta precisión.'
      },
      {
        title: 'Carga automática',
        description: 'Vuelve solo a la base; batería de litio para unas 12 horas de trabajo continuo.'
      },
      {
        title: 'Evasión autónoma',
        description: 'Percibe cambios del entorno en tiempo real y elige la ruta óptima.'
      },
      {
        title: 'Bandejas de dos niveles',
        description: 'Cargan unos 5 kg, con medidas pensadas para la restauración.'
      },
      {
        title: 'Publicidad móvil',
        description: 'Pantalla táctil HD en el pecho para anuncios, video, promociones y consulta del menú.'
      },
      {
        title: 'Bienvenida y captación',
        description: 'Detecta personas en varias direcciones y reproduce mensajes de bienvenida y promoción.'
      }
    ]
  },
  scenarios: {
    title: 'Dónde trabaja Amy Delivery',
    description: 'Restaurantes de comida china, hot pot y occidental, bares, hoteles, karaokes y áreas de recepción: entrega automática, presentación de platos y bienvenida.',
    scenes: [
      {
        name: 'Restaurante',
        image: '/assets/products/amy-delivery/scene-restaurante.jpg'
      },
      {
        name: 'Buffet',
        image: '/assets/products/amy-delivery/scene-buffet.jpg'
      },
      {
        name: 'Comida rápida',
        image: '/assets/products/amy-delivery/scene-comida-rapida.jpg'
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
        value: '780 × 560 × 1500 mm'
      },
      {
        label: 'Peso',
        value: '45 kg'
      },
      {
        label: 'Velocidad',
        value: '0–1,5 m/s'
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
        value: '13″'
      },
      {
        label: 'Precisión de posicionamiento',
        value: '±50 mm'
      },
      {
        label: 'Navegación',
        value: 'LiDAR 40 m'
      },
      {
        label: 'Batería',
        value: '15 Ah'
      },
      {
        label: 'Material',
        value: 'ABS'
      },
      {
        label: 'Carga útil',
        value: '5 kg'
      },
      {
        label: 'Bandeja',
        value: '340 × 250 mm'
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
    title: 'Implementa Amy Delivery en tu operación.',
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

export default amyDelivery;
