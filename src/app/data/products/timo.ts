import type { ProductDetail } from '../productDetails';

/* Frame "Producto / Timo" (escritorio) y su versión móvil. Copy exacto del volcado de Figma. */
const timo = {
  slug: "timo",
  name: "Timo",
  category: "Recepción",
  tagline: "Robot de recepción todoterreno",
  seo: {
    title: "Timo — Robot de recepción todoterreno | Shepwashi Robotics",
    description: "Recepción, interacción y control por voz, explicaciones y guía para colegios, residencias, educación y retail."
  },
  hero: {
    image: "/assets/products/timo/hero-product.png",
    imageAlt: "Robot Timo",
    tags: [
      "Reconocimiento facial",
      "Explicación de contenidos",
      "Reproducción de video"
    ],
    caption: "Serie Recepción  ·  Timo",
    summaryTitle: "Recibe, conversa y guía a tus visitantes.",
    summary: "Recepción, interacción y control por voz, explicaciones y guía. Pensado para colegios, residencias de adultos mayores, educación y retail: mejora la experiencia del cliente, optimiza al personal y atrae público.",
    stats: [
      {
        icon: "battery",
        value: "≤8",
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
        value: "19",
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
      "Explicación de contenidos",
      "Reproducción de video",
      "Recarga automática",
      "Identificación",
      "Entretenimiento",
      "Interacción por voz",
      "Patrullaje"
    ]
  },
  coreFunctions: {
    title: "Recepción inteligente que\nmejora la experiencia de servicio.",
    columns: 3,
    features: [
      {
        title: "Recepción",
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
        title: "Navegación",
        description: "Construye un mapa del interior y, tras conversar con el cliente, lo acompaña hasta el punto indicado."
      },
      {
        title: "Evasión autónoma",
        description: "Sensores múltiples y un algoritmo optimizado perciben cambios en tiempo real, rodean obstáculos y eligen la mejor ruta hasta el destino."
      }
    ]
  },
  scenarios: {
    title: "Dónde trabaja Timo",
    description: "Bancos, hoteles, hospitales, estaciones, aeropuertos, tiendas especializadas y colegios: bienvenida, orientación y consultas que alivian la carga del personal de atención y reducen costos.",
    scenes: [
      {
        name: "Sala de servicio",
        image: "/assets/products/timo/scene-sala-de-servicio.png"
      },
      {
        name: "Aula",
        image: "/assets/products/timo/scene-aula.png"
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
        value: "460 × 460 × 1200 mm"
      },
      {
        label: "Peso",
        value: "19 kg"
      },
      {
        label: "Velocidad",
        value: "0–1,2 m/s"
      },
      {
        label: "Autonomía",
        value: "≤ 8 h"
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
        value: "Láser"
      },
      {
        label: "Batería",
        value: "20 Ah"
      },
      {
        label: "Grados de libertad",
        value: "6"
      },
      {
        label: "Sistema",
        value: "Android"
      },
      {
        label: "Potencia",
        value: "40 W"
      }
    ]
  },
  related: {
    title: "Otros modelos",
    slugs: [
      "ciao",
      "amy",
      "alice",
      "snow"
    ]
  },
  cta: {
    title: "Implementa Timo en tu operación.",
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

export default timo;
