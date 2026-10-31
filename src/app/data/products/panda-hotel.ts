import type { ProductDetail } from '../productDetails';

// Figma: frame "Producto / Panda Hotel" (dark-desktop / dark-mobile).
const pandaHotel = {
  slug: 'panda-hotel',
  name: 'Panda Hotel',
  category: 'Última milla',
  tagline: 'Entrega hotelera premium',
  hero: {
    image: '/assets/products/panda-hotel/hero-product.png',
    imageAlt: 'Panda Hotel',
    tags: [
      'Ascensores autónomos',
      'Anuncios por voz',
      'Evasión autónoma'
    ],
    caption: 'Serie Última milla  ·  Panda Hotel',
    summaryTitle: 'El servicio a habitación que nunca se toma un descanso.',
    summary: 'Para hoteles, oficinas, hospitales y restaurantes: entrega automática, bienvenida y recorridos promocionales. Ahorra costos de personal y atrae clientes.',
    stats: [
      {
        icon: 'battery',
        value: '≤10',
        unit: 'h',
        label: 'Autonomía'
      },
      {
        icon: 'box',
        value: '100',
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
      'Ascensores autónomos',
      'Anuncios por voz',
      'Evasión autónoma',
      'Recepción y guía',
      'Navegación inteligente',
      'Publicidad'
    ]
  },
  coreFunctions: {
    title: 'Entrega inteligente que ahorra\ncostos de personal.',
    columns: 2,
    features: [
      {
        title: 'Consulta y guía',
        description: 'Acompaña a los huéspedes a habitaciones, baños y ascensores mientras presenta el hotel.'
      },
      {
        title: 'Patrullaje promocional',
        description: 'Anuncia eventos, entrega paquetes, pedidos y documentos entre áreas; con control de ascensor, lo llama por los huéspedes.'
      },
      {
        title: 'Entrega a habitación',
        description: 'Pantuflas, cargadores, agua, amenities, recogida de ropa y toallas, y comidas ligeras. Con códigos QR habilita compras instantáneas.'
      },
      {
        title: 'Carga automática',
        description: 'Vuelve solo a la base; batería de litio para unas 11 horas de trabajo continuo.'
      }
    ]
  },
  scenarios: {
    title: 'Dónde trabaja Panda Hotel',
    description: 'Hoteles, edificios de oficinas, hospitales, restaurantes y otros espacios de servicio.',
    scenes: [
      {
        name: 'Lobby de hotel',
        image: '/assets/products/panda-hotel/scene-lobby-de-hotel.jpg'
      },
      {
        name: 'Pasillo de habitaciones',
        image: '/assets/products/panda-hotel/scene-pasillo-de-habitaciones.jpg'
      },
      {
        name: 'Recepción',
        image: '/assets/products/panda-hotel/scene-recepcion.jpg'
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
        value: '510 × 430 × 1060 mm'
      },
      {
        label: 'Peso',
        value: '59 kg'
      },
      {
        label: 'Velocidad',
        value: '0–2 m/s'
      },
      {
        label: 'Potencia',
        value: '48 W'
      },
      {
        label: 'Tiempo de carga',
        value: '2–3 h'
      },
      {
        label: 'Autonomía',
        value: '≤ 10 h'
      },
      {
        label: 'Carga útil',
        value: '100 kg'
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
        label: 'LiDAR',
        value: '40 m'
      },
      {
        label: 'Pantalla',
        value: '10,1″'
      },
      {
        label: 'Sistema',
        value: 'Android'
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
    title: 'Implementa Panda Hotel en tu operación.',
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

export default pandaHotel;
