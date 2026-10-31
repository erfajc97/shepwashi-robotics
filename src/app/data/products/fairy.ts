import type { ProductDetail } from '../productDetails';

/* Frame "Producto / Fairy" (escritorio) y su versión móvil. Copy exacto del volcado de Figma. */
const fairy = {
  slug: "fairy",
  name: "Fairy",
  category: "Recepción",
  tagline: "Servicio digital móvil",
  hero: {
    image: "/assets/products/fairy/hero-product.png",
    imageAlt: "Robot Fairy",
    tags: [
      "Reconocimiento facial",
      "Gestión de membresías",
      "Reproducción de video"
    ],
    caption: "Serie Recepción  ·  Fairy",
    summaryTitle: "Una pantalla de 23,8″ que sale a buscar a tus visitantes.",
    summary: "Para salas de exhibición, aeropuertos, hoteles, centros comerciales, bancos y oficinas de gobierno. Reconocimiento facial, diálogo y control por voz, explicaciones y navegación para optimizar al personal y atraer clientes.",
    stats: [
      {
        icon: "battery",
        value: "≤10",
        unit: "h",
        label: "Autonomía"
      },
      {
        icon: "monitor",
        value: "23,8",
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
        value: "40",
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
        title: "Interacción humano–máquina",
        description: "Interacción visual, por voz, texto y tacto que hace tangible la tecnología para tus visitantes."
      },
      {
        title: "Captura de datos",
        description: "Recolección, almacenamiento, análisis y gestión visual de grandes volúmenes de datos de visitantes."
      },
      {
        title: "Información y consultas",
        description: "Diálogo según tu negocio: responde preguntas y presenta contenidos de forma proactiva."
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
        title: "API abierta",
        description: "Desarrollo a la medida para agregar funciones exclusivas según tu escenario."
      },
      {
        title: "Navegación SLAM",
        description: "Se ubica de forma autónoma en entornos complejos, rodea obstáculos y elige la mejor ruta."
      }
    ]
  },
  scenarios: {
    title: "Dónde trabaja Fairy",
    description: "Bancos, hoteles, hospitales, estaciones, aeropuertos, tiendas especializadas y colegios: bienvenida, orientación y consultas que alivian la carga del personal de atención y reducen costos.",
    scenes: [
      {
        name: "Lobby corporativo",
        image: "/assets/products/fairy/scene-lobby-corporativo.jpg"
      },
      {
        name: "Aeropuerto",
        image: "/assets/products/fairy/scene-aeropuerto.jpg"
      },
      {
        name: "Pasillos y halls",
        image: "/assets/products/fairy/scene-pasillos-y-halls.jpg"
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
        value: "540 × 470 × 1405 mm"
      },
      {
        label: "Peso",
        value: "40 kg"
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
        value: "23,8″"
      },
      {
        label: "Distancia de frenado",
        value: "≤ 200 mm"
      },
      {
        label: "Navegación",
        value: "LiDAR 40 m"
      },
      {
        label: "Batería",
        value: "20 Ah · litio"
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
    title: "Implementa Fairy en tu operación.",
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

export default fairy;
