import type { ProductDetail } from '../productDetails';

// Figma: frame "Producto / Panda AMR Serie F" (dark-desktop / dark-mobile).
const pandaAmrSerieF = {
  slug: 'panda-amr-serie-f',
  name: 'Panda AMR Serie F',
  category: 'Última milla',
  tagline: 'Transporte industrial de 150 a 600 kg',
  hero: {
    image: '/assets/products/panda-amr-serie-f/hero-product.png',
    imageAlt: 'Panda AMR Serie F',
    tags: [
      'Navegación inteligente',
      'Evasión autónoma',
      'Anuncios por voz'
    ],
    caption: 'Serie Última milla  ·  Panda AMR Serie F',
    summaryTitle: 'Hasta 600 kg por viaje, en ciclo continuo.',
    summary: 'Cuerpo con 80% de aleación de aluminio de alta resistencia para máxima estabilidad. Diseñado para el transporte repetitivo y cíclico de carga pesada en fábricas, bodegas y centros logísticos. Disponible en F150, F300 y F600.',
    stats: [
      {
        icon: 'box',
        value: '600',
        unit: 'kg',
        label: 'Carga máxima (F600)'
      },
      {
        icon: 'navigation',
        value: '80',
        unit: 'cm',
        label: 'Paso mínimo'
      },
      {
        icon: 'zap',
        value: '30',
        unit: 'mm',
        label: 'Umbral superable'
      },
      {
        icon: 'scan',
        value: '40',
        unit: 'm',
        label: 'Alcance LiDAR'
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
      'Evasión autónoma',
      'Anuncios por voz',
      'Ascensores autónomos',
      'Carga automática',
      'Gestión remota'
    ]
  },
  coreFunctions: {
    title: 'Transporte de materiales\nconfiable, línea a línea.',
    columns: 3,
    features: [
      {
        title: 'LiDAR de 40 m',
        description: 'Navegación y seguridad en tiempo real para plantas de decenas de miles de metros cuadrados.'
      },
      {
        title: 'Cámara RGBD',
        description: 'Cámaras binoculares + LiDAR para evasión tridimensional y percepción del entorno dinámico.'
      },
      {
        title: 'Pantalla táctil de 13,3″',
        description: 'Consulta de información y mapas con mayor claridad.'
      },
      {
        title: 'Batería de alta seguridad',
        description: '48 V 20 Ah, resistente a altas temperaturas, no explosiva y no inflamable.'
      },
      {
        title: 'Supera umbrales y canaletas',
        description: 'Ruedas motrices de 8″ y universales dobles de 5″: umbrales de 30 mm y canaletas de 40 mm.'
      },
      {
        title: 'Ascensores autónomos',
        description: 'Transfiere material entre líneas de producción y pisos sin intervención.'
      }
    ]
  },
  scenarios: {
    title: 'Dónde trabaja Panda AMR Serie F',
    description: 'Fábricas, bodegas y centros logísticos con flujos repetitivos de materia prima, piezas y producto terminado.',
    scenes: [
      {
        name: 'Fábrica',
        image: '/assets/products/panda-amr-serie-f/scene-fabrica.jpg'
      },
      {
        name: 'Planta de producción',
        image: '/assets/products/panda-amr-serie-f/scene-planta-de-produccion.jpg'
      }
    ]
  },
  specs: {
    title: 'Ficha técnica',
    note: 'Datos de referencia del fabricante. Confirmamos la configuración final según tu sitio y tus integraciones.',
    layout: 'matrix',
    columns: ['F150', 'F300', 'F600'],
    pdf: {
      label: 'Descargar PDF',
      href: '/recursos'
    },
    rows: [
      { label: 'Dimensiones', values: ['600×430×1360', '885×500×1350', '985×600×1300'] },
      { label: 'Peso', values: ['45 kg', '90 kg', '100 kg'] },
      { label: 'Carga útil', values: ['150 kg', '300 kg', '600 kg'] },
      { label: 'Batería', values: ['24 V 15 Ah', '48 V 20 Ah', '48 V 20 Ah'] },
      { label: 'Pantalla', values: ['13,3″ Full HD 1080p'] },
      { label: 'LiDAR', values: ['40 m'] },
      { label: 'Cámaras de profundidad', values: ['2'] },
      { label: 'Parada de emergencia', values: ['2 interruptores con rearme'] },
      { label: 'Modos de trabajo', values: ['Automático, seguimiento y asistido'] },
      { label: 'IoT', values: ['Puertas y ascensores autónomos, llamado remoto'] }
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
    title: 'Implementa Panda AMR Serie F en tu operación.',
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

export default pandaAmrSerieF;
