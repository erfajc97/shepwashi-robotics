import type { ProductDetail } from '../productDetails';

/* Frame "Producto / Speedybot Max-E" (escritorio) y su versión móvil. Copy exacto del volcado de Figma. */
const speedybotMaxE = {
  slug: "speedybot-max-e",
  name: "Speedybot Max-E",
  category: "Última milla",
  tagline: "Entrega no tripulada",
  hero: {
    image: "/assets/products/speedybot-max-e/hero-product.png",
    imageAlt: "Robot Speedybot Max-E",
    tags: [
      "Ascensores autónomos",
      "Anuncios por voz",
      "Cámara panorámica 360°"
    ],
    caption: "Serie Última milla  ·  Speedybot Max-E",
    summaryTitle: "Paquetería segura, sin intermediarios.",
    summary: "Almacenamiento de varios tamaños, acceso autónomo a ascensores, evasión automática de obstáculos, recarga automática y sistema de desinfección UV integrado.",
    stats: [
      {
        icon: "box",
        value: "8",
        label: "Compartimentos"
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
        icon: "battery",
        value: "Auto",
        label: "Recarga automática"
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
        title: "Compartimentos de varios tamaños",
        description: "Se adaptan a distintos artículos con almacenamiento seguro y ordenado."
      },
      {
        title: "Puerta de entrega automática",
        description: "Apertura con un toque: entregas seguras, eficientes e higiénicas."
      }
    ]
  },
  scenarios: {
    title: "Dónde trabaja Speedybot Max-E",
    description: "Pensado para paquetería en comunidades, estaciones, fábricas, colegios y más: entrega autónoma y gestión remota para un servicio seguro y confiable a menor costo operativo.",
    scenes: [
      {
        name: "Conjunto residencial",
        image: "/assets/products/speedybot-max-e/scene-conjunto-residencial.jpg"
      },
      {
        name: "Fábrica",
        image: "/assets/products/speedybot-max-e/scene-fabrica.jpg"
      },
      {
        name: "Bodega",
        image: "/assets/products/speedybot-max-e/scene-bodega.jpg"
      }
    ]
  },
  related: {
    title: "Otros modelos",
    slugs: [
      "speedybot-pro",
      "speedybot-max",
      "panda-ultra",
      "panda"
    ]
  },
  cta: {
    title: "Implementa Speedybot Max-E en tu operación.",
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

export default speedybotMaxE;
