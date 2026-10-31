import type { ProductDetail } from '../productDetails';

/* Frame "Producto / Ciao" (escritorio) y su versión móvil. Copy exacto del volcado de Figma. */
const ciao = {
  slug: "ciao",
  name: "Ciao",
  category: "Recepción",
  tagline: "Humanoide de bienvenida y guía",
  hero: {
    image: "/assets/products/ciao/hero-product.png",
    imageAlt: "Robot Ciao",
    tags: [
      "Recepción de visitantes",
      "Explicación inteligente",
      "Promoción"
    ],
    caption: "Serie Recepción  ·  Ciao",
    summaryTitle: "Interacción antropomórfica. Tu marca, en otro nivel.",
    summary: "Recibe a los visitantes, conversa, responde a comandos de voz, presenta contenidos y guía recorridos. Para salas de exhibición, servicio público, educación y retail: eleva la experiencia del cliente, optimiza al personal y atrae público.",
    stats: [
      {
        icon: "globe",
        value: "50+",
        label: "Idiomas reconocidos"
      },
      {
        icon: "users",
        value: "20+",
        label: "Dialectos"
      },
      {
        icon: "scan",
        value: "360",
        unit: "°",
        label: "Percepción panorámica"
      },
      {
        icon: "zap",
        value: "0",
        label: "Palabras de activación"
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
      "Recepción de visitantes",
      "Explicación inteligente",
      "Promoción",
      "Guía de ruta",
      "Preguntas y respuestas",
      "Multilingüe"
    ]
  },
  coreFunctions: {
    title: "Servicio proactivo, con la\ncortesía de un lobby cinco\nestrellas.",
    columns: 3,
    features: [
      {
        title: "Saludo proactivo e interacción natural",
        description: "No necesita palabra de activación: saluda a los visitantes con mensajes personalizados y crea un ambiente de bienvenida."
      },
      {
        title: "Cambio libre de idioma",
        description: "Reconoce más de 50 idiomas y 20 dialectos, y se adapta automáticamente al idioma del visitante."
      },
      {
        title: "Planificación de rutas",
        description: "Entiende lo que pide el visitante y planifica el recorrido óptimo de forma autónoma."
      },
      {
        title: "Percepción panorámica",
        description: "Sensores múltiples y un algoritmo de evasión optimizado detectan cambios del entorno y navegan con seguridad."
      },
      {
        title: "Gestos de cortesía",
        description: "Manos que saludan, señalan direcciones y despiden con la etiqueta de un hotel cinco estrellas."
      },
      {
        title: "Diseño premium",
        description: "Línea minimalista que encaja en lobbies corporativos, salas de exhibición y pabellones de alto nivel."
      }
    ]
  },
  scenarios: {
    title: "Dónde trabaja Ciao",
    description: "Lobbies corporativos y hoteleros, salas de exhibición de alto nivel, servicio público, educación y retail.",
    scenes: [
      {
        name: "Lobby de hotel",
        image: "/assets/products/ciao/scene-lobby-de-hotel.jpg"
      },
      {
        name: "Recepción",
        image: "/assets/products/ciao/scene-recepcion.jpg"
      },
      {
        name: "Showroom",
        image: "/assets/products/ciao/scene-showroom.jpg"
      }
    ]
  },
  related: {
    title: "Otros modelos",
    slugs: [
      "timo",
      "amy",
      "alice",
      "snow"
    ]
  },
  cta: {
    title: "Implementa Ciao en tu operación.",
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

export default ciao;
