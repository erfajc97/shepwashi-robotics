import type { ProductDetail } from '../productDetails';

/* Frame "Producto / Speedybot Max" (escritorio) y su versión móvil. Copy exacto del volcado de Figma. */
const speedybotMax = {
  slug: "speedybot-max",
  name: "Speedybot Max",
  category: "Última milla",
  tagline: "Entrega multicompartimento",
  hero: {
    image: "/assets/products/speedybot-max/hero-product.png",
    imageAlt: "Robot Speedybot Max",
    tags: [
      "Ascensores autónomos",
      "Anuncios por voz",
      "Evasión autónoma"
    ],
    caption: "Serie Última milla  ·  Speedybot Max",
    summaryTitle: "Cuatro compartimentos. Varias órdenes en un solo viaje.",
    summary: "Diseñado para comida a domicilio, productos frescos, paquetería, comunidades, estaciones de servicio, fábricas, hospitales, campus y supermercados. Entrega autónoma y gestión remota que reducen costos operativos con transporte seguro y confiable.",
    stats: [
      {
        icon: "box",
        value: "4",
        label: "Compartimentos independientes"
      },
      {
        icon: "scan",
        value: "360",
        unit: "°",
        label: "Cámara panorámica"
      },
      {
        icon: "shield",
        value: "UV",
        label: "Desinfección integrada"
      },
      {
        icon: "navigation",
        value: "24/7",
        label: "Gestión remota"
      }
    ],
    primaryCta: {
      label: "Solicitar cotización",
      href: "/contacto"
    },
    secondaryCta: {
      label: "Descargar ficha técnica",
      href: "/recursos"
    }
  },
  functionsBand: {
    items: [
      "Ascensores autónomos",
      "Anuncios por voz",
      "Evasión autónoma",
      "Cámara panorámica 360°",
      "Navegación inteligente",
      "Desinfección UV integrada"
    ]
  },
  coreFunctions: {
    title: "Entrega inteligente que ahorra\ncostos de personal.",
    columns: 2,
    features: [
      {
        title: "LiDAR 3D multilínea",
        description: "Mapeo de alta precisión y detección de obstáculos en tiempo real para navegar de forma estable en entornos complejos."
      },
      {
        title: "Cámara panorámica 360°",
        description: "Monitoreo completo del entorno durante cada ruta de entrega."
      },
      {
        title: "Almacenamiento multicompartimento",
        description: "Cuatro compartimentos independientes y amplios para varias órdenes, separadas, ordenadas y seguras."
      },
      {
        title: "Acceso autónomo a ascensores",
        description: "Llama y usa el ascensor por sí solo para entregas en varios pisos sin asistencia."
      }
    ]
  },
  scenarios: {
    title: "Dónde trabaja Speedybot Max",
    description: "Conjuntos residenciales, centros comerciales, oficinas y hospitales: entrega automática que reduce costos de personal, atrae clientes y mejora la experiencia de servicio.",
    scenes: [
      {
        name: "Restaurantes",
        image: "/assets/products/speedybot-max/scene-restaurantes.jpg"
      },
      {
        name: "Comunidad",
        image: "/assets/products/speedybot-max/scene-comunidad.jpg"
      },
      {
        name: "Hospital",
        image: "/assets/products/speedybot-max/scene-hospital.jpg"
      }
    ]
  },
  related: {
    title: "Otros modelos",
    slugs: [
      "speedybot-pro",
      "speedybot-max-e",
      "panda-ultra",
      "panda"
    ]
  },
  cta: {
    title: "Implementa Speedybot Max en tu operación.",
    description: "Te asesoramos en configuración, instalación, capacitación y soporte.",
    mobileDescription: "Configuración, instalación, capacitación y soporte local.",
    primary: {
      label: "Solicitar cotización",
      href: "/contacto"
    },
    secondary: {
      label: "Agendar una demo",
      href: "/contacto"
    }
  }
} satisfies ProductDetail;

export default speedybotMax;
