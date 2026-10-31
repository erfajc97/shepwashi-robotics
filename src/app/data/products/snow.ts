import type { ProductDetail } from '../productDetails';

/* Frame "Producto / Snow" (escritorio) y su versión móvil. Copy exacto del volcado de Figma. */
const snow = {
  slug: "snow",
  name: "Snow",
  category: "Recepción",
  tagline: "Recepción de estilo amigable",
  hero: {
    image: "/assets/products/snow/hero-product.png",
    imageAlt: "Robot Snow",
    tags: [
      "Reconocimiento facial",
      "Gestión de membresías",
      "Reproducción de video"
    ],
    caption: "Serie Recepción  ·  Snow",
    summaryTitle: "Cercano, simpático y listo para atender.",
    summary: "Bienvenida, conversación y control por voz, explicación y navegación. Ideal para colegios, residencias de adultos mayores, educación y retail: mejora la experiencia, optimiza al personal y atrae público.",
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
        value: "30",
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
    columns: 3,
    features: [
      {
        title: "Recepción de bienvenida",
        description: "Detecta personas desde distintas direcciones y emite mensajes de bienvenida y despedida. Voz, imágenes e idioma personalizables por país y región."
      },
      {
        title: "Publicidad móvil",
        description: "Pantalla táctil HD de 13,3″ para anuncios, video, promociones, consulta de productos y mapas."
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
        title: "Guía de ruta",
        description: "Construye un mapa del interior y, tras conversar con el visitante, lo acompaña hasta el punto indicado."
      },
      {
        title: "Evasión autónoma",
        description: "Sensores múltiples y un algoritmo optimizado perciben cambios en tiempo real, rodean obstáculos y eligen la mejor ruta hasta el destino."
      }
    ]
  },
  scenarios: {
    title: "Dónde trabaja Snow",
    description: "Bancos, hoteles, hospitales, estaciones, aeropuertos, tiendas especializadas y colegios: bienvenida, orientación y consultas que alivian la carga del personal de atención y reducen costos.",
    scenes: [
      {
        name: "Atención al público",
        image: "/assets/products/snow/scene-atencion-al-publico.jpg"
      },
      {
        name: "Recorridos guiados",
        image: "/assets/products/snow/scene-recorridos-guiados.jpg"
      },
      {
        name: "Showroom",
        image: "/assets/products/snow/scene-showroom.jpg"
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
        value: "550 × 600 × 1120 mm"
      },
      {
        label: "Peso",
        value: "30 kg"
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
        value: "4"
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
      "alice"
    ]
  },
  cta: {
    title: "Implementa Snow en tu operación.",
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

export default snow;
