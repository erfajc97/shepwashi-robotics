import type { ProductDetail } from '../productDetails';

/* Frame "Producto / Panda Ultra" (escritorio) y su versión móvil. Copy exacto del volcado de Figma. */
const pandaUltra = {
  slug: "panda-ultra",
  name: "Panda Ultra",
  category: "Última milla",
  tagline: "Entrega y marketing de nueva generación",
  hero: {
    image: "/assets/products/panda-ultra/hero-product.png",
    imageAlt: "Robot Panda Ultra",
    tags: [
      "Entrega automática",
      "Presentación de platos",
      "Evasión autónoma"
    ],
    caption: "Serie Última milla  ·  Panda Ultra",
    summaryTitle: "Nueva experiencia. Cero preocupaciones. Más eficiencia.",
    summary: "Lleva los platos a la mesa, presenta el menú y capta clientes con su pantalla publicitaria mientras recorre el local.",
    stats: [
      {
        icon: "zap",
        value: "4",
        label: "Modos de trabajo"
      },
      {
        icon: "navigation",
        value: "65",
        unit: "cm",
        label: "Paso mínimo"
      },
      {
        icon: "monitor",
        value: "LED",
        label: "Pantalla expresiva"
      },
      {
        icon: "users",
        value: "IA",
        label: "Interacción por voz"
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
      "Entrega automática",
      "Presentación de platos",
      "Evasión autónoma",
      "Recepción y captación",
      "Navegación inteligente",
      "Publicidad"
    ]
  },
  coreFunctions: {
    title: "Una experiencia de entrega\ncompletamente renovada.",
    columns: 3,
    features: [
      {
        title: "Interacción por voz con IA",
        description: "Conversa con los clientes y responde consultas sobre el menú."
      },
      {
        title: "Cuatro modos de trabajo",
        description: "Entrega de alimentos, circulación, celebración y bienvenida."
      },
      {
        title: "Navegación precisa",
        description: "LiDAR y navegación visual para mapear rápido y moverse estable en locales amplios."
      },
      {
        title: "Interacción multimodal",
        description: "Diseño de panda, luces que avisan cuándo retirar el plato y pantalla LED expresiva."
      },
      {
        title: "Entrega estable y confiable",
        description: "Chasis de grado automotriz y algoritmo de control propio para un andar suave."
      },
      {
        title: "Estado de bandejas",
        description: "Detecta si la bandeja está llena o vacía y pasa a la siguiente mesa al retirar el plato."
      }
    ]
  },
  scenarios: {
    title: "Dónde trabaja Panda Ultra",
    description: "Supermercados, restaurantes y centros comerciales donde la entrega también es una vitrina de marca.",
    scenes: [
      {
        name: "Supermercado",
        image: "/assets/products/panda-ultra/scene-supermercado.jpg"
      },
      {
        name: "Centro comercial",
        image: "/assets/products/panda-ultra/scene-centro-comercial.jpg"
      }
    ]
  },
  related: {
    title: "Otros modelos",
    slugs: [
      "speedybot-pro",
      "speedybot-max",
      "speedybot-max-e",
      "panda"
    ]
  },
  cta: {
    title: "Implementa Panda Ultra en tu operación.",
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

export default pandaUltra;
