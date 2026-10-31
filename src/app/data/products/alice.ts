import type { ProductDetail } from '../productDetails';

/* Frame "Producto / Alice" (escritorio) y su versión móvil. Copy exacto del volcado de Figma. */
const alice = {
  slug: "alice",
  name: "Alice",
  category: "Recepción",
  tagline: "Recepción humanoide",
  hero: {
    image: "/assets/products/alice/hero-product.png",
    imageAlt: "Robot Alice",
    tags: [
      "Reconocimiento facial",
      "Gestión de membresías",
      "Reproducción de video"
    ],
    caption: "Serie Recepción  ·  Alice",
    summaryTitle: "Un robot que entiende los escenarios comerciales.",
    summary: "Diseñado con equilibrio entre practicidad e innovación: capacidades de interacción superiores y aplicaciones diferenciadas para cada industria.",
    stats: [
      {
        icon: "battery",
        value: "≤10",
        unit: "h",
        label: "Autonomía"
      },
      {
        icon: "monitor",
        value: "13,3",
        unit: "″",
        label: "Pantalla táctil"
      },
      {
        icon: "gauge",
        value: "1,2",
        unit: "m/s",
        label: "Velocidad"
      },
      {
        icon: "box",
        value: "45",
        unit: "kg",
        label: "Peso"
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
      "Reconocimiento facial",
      "Gestión de membresías",
      "Reproducción de video",
      "Guía de promociones",
      "Guía y explicación",
      "Interacción por voz",
      "Entretenimiento",
      "Patrullaje"
    ]
  },
  coreFunctions: {
    title: "Bienvenida inteligente que\nmejora la experiencia de servicio.",
    columns: 4,
    features: [
      {
        title: "Recepción de bienvenida",
        description: "Detecta personas desde distintas direcciones y emite mensajes de bienvenida y despedida. Voz, imágenes e idioma personalizables por país y región."
      },
      {
        title: "Publicidad móvil",
        description: "Pantalla táctil HD de 13,3″ en el pecho para anuncios, video, promociones, consulta de productos y mapas."
      },
      {
        title: "Consultoría de negocio",
        description: "Diálogo por voz sobre modelos de datos de tu industria y bases de conocimiento extensas; aprende y mejora de forma continua."
      },
      {
        title: "Reconocimiento facial",
        description: "Detecta rostros con la cámara, los compara con tu base de datos, identifica a la persona y la saluda de forma proactiva."
      },
      {
        title: "Gestión de trámites",
        description: "Consultas de información, verificación de cobros, llamado de turnos y otros servicios, configurables a la medida."
      },
      {
        title: "Guía de ruta",
        description: "Construye un mapa del interior y, tras conversar con el visitante, lo acompaña hasta el punto indicado."
      },
      {
        title: "Desarrollo a la medida",
        description: "SDK y API abiertos para agregar funciones exclusivas según tu escenario de uso."
      },
      {
        title: "Evasión autónoma",
        description: "Sensores múltiples y un algoritmo optimizado perciben cambios en tiempo real, rodean obstáculos y eligen la mejor ruta hasta el destino."
      }
    ]
  },
  scenarios: {
    title: "Dónde trabaja Alice",
    description: "Bancos, hoteles, hospitales, estaciones, aeropuertos, tiendas especializadas y colegios: bienvenida, orientación y consultas que alivian la carga del personal de atención y reducen costos.",
    scenes: [
      {
        name: "Hospital",
        image: "/assets/products/alice/scene-hospital.jpg"
      },
      {
        name: "Tienda retail",
        image: "/assets/products/alice/scene-tienda-retail.jpg"
      },
      {
        name: "Museo",
        image: "/assets/products/alice/scene-museo.jpg"
      }
    ]
  },
  specs: {
    title: "Ficha técnica",
    note: "Datos de referencia del fabricante. Confirmamos la configuración final según tu sitio y tus integraciones.",
    layout: "table",
    pdf: {
      label: "Descargar PDF",
      href: "/recursos"
    },
    rows: [
      {
        label: "Dimensiones",
        value: "580 × 550 × 1500 mm"
      },
      {
        label: "Peso",
        value: "45 kg"
      },
      {
        label: "Velocidad",
        value: "0–1,2 m/s"
      },
      {
        label: "Autonomía",
        value: "≤ 10 h"
      },
      {
        label: "Tiempo de carga",
        value: "3–4 h"
      },
      {
        label: "Pantalla",
        value: "13,3″"
      },
      {
        label: "Precisión de posicionamiento",
        value: "±50 mm"
      },
      {
        label: "Navegación",
        value: "LiDAR 40 m"
      },
      {
        label: "Batería",
        value: "20 Ah"
      },
      {
        label: "Grados de libertad",
        value: "3"
      },
      {
        label: "Sistema",
        value: "Android"
      },
      {
        label: "Potencia",
        value: "50 W"
      }
    ]
  },
  related: {
    title: "Otros modelos",
    slugs: [
      "ciao",
      "timo",
      "amy",
      "snow"
    ]
  },
  cta: {
    title: "Implementa Alice en tu operación.",
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

export default alice;
