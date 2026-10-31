import type { ProductDetail } from '../productDetails';

/* Frame "Producto / Speedybot Pro" (escritorio) y su versión móvil. Copy exacto del volcado de Figma. */
const speedybotPro = {
  slug: "speedybot-pro",
  name: "Speedybot Pro",
  category: "Última milla",
  tagline: "Entrega autónoma interior y exterior",
  hero: {
    image: "/assets/products/speedybot-pro/hero-product.png",
    imageAlt: "Robot Speedybot Pro",
    tags: [
      "Navegación inteligente",
      "Evasión autónoma",
      "Anuncios por voz"
    ],
    caption: "Serie Última milla  ·  Speedybot Pro",
    summaryTitle: "Entrega de última milla, dentro y fuera de edificios.",
    summary: "Fusión multisensor con algoritmo propio de conducción autónoma L4: posicionamiento y percepción a nivel de centímetros en interiores y exteriores, evasión en milisegundos y planificación de rutas a escala de kilómetros.",
    stats: [
      {
        icon: "gauge",
        value: "7,2",
        unit: "km/h",
        label: "Velocidad máxima"
      },
      {
        icon: "box",
        value: "100",
        unit: "kg",
        label: "Carga útil"
      },
      {
        icon: "navigation",
        value: "40",
        unit: "km",
        label: "Autonomía"
      },
      {
        icon: "zap",
        value: "≤15",
        unit: "°",
        label: "Pendiente"
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
      "Navegación inteligente",
      "Evasión autónoma",
      "Anuncios por voz",
      "Ascensores autónomos",
      "Carga automática",
      "Gestión remota"
    ]
  },
  coreFunctions: {
    title: "Hecho para la entrega\ninstantánea.",
    columns: 2,
    features: [
      {
        title: "LiDAR 3D multilínea",
        description: "Fusión de sensores con conducción autónoma L4 propia para percibir el entorno con precisión."
      },
      {
        title: "Compartimento de gran capacidad",
        description: "Diseñado para comida, productos de supermercado y entregas inmediatas."
      },
      {
        title: "IoT integrado",
        description: "Se enlaza con barreras, puertas y ascensores, y reconoce semáforos: accesibilidad tridimensional."
      },
      {
        title: "Gestión remota",
        description: "Supervisa la flota y asigna entregas desde la nube."
      }
    ]
  },
  scenarios: {
    title: "Dónde trabaja Speedybot Pro",
    description: "Oficinas, hoteles, centros comerciales, conjuntos residenciales, parques, campus, hospitales y aeropuertos.",
    scenes: [
      {
        name: "Comunidad",
        image: "/assets/products/speedybot-pro/scene-comunidad.jpg"
      },
      {
        name: "Diseño compacto",
        image: "/assets/products/speedybot-pro/scene-diseno-compacto.jpg"
      },
      {
        name: "Chasis todoterreno",
        image: "/assets/products/speedybot-pro/scene-chasis-todoterreno.jpg"
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
        label: "Modelo",
        value: "SpeedyBot Pro"
      },
      {
        label: "Dimensiones",
        value: "700 × 560 × 715 mm"
      },
      {
        label: "Peso",
        value: "≈ 65 kg"
      },
      {
        label: "Batería",
        value: "48 V · 20 Ah"
      },
      {
        label: "Operación",
        value: "8 h"
      },
      {
        label: "Tiempo de carga",
        value: "2–3 h"
      },
      {
        label: "Autonomía",
        value: "40 km"
      },
      {
        label: "Uso",
        value: "Vías internas"
      },
      {
        label: "Compartimento",
        value: "80 L"
      },
      {
        label: "Velocidad",
        value: "7,2 km/h"
      },
      {
        label: "Carga útil",
        value: "100 kg"
      },
      {
        label: "LiDAR",
        value: "60 m"
      }
    ]
  },
  related: {
    title: "Otros modelos",
    slugs: [
      "speedybot-max",
      "speedybot-max-e",
      "panda-ultra",
      "panda"
    ]
  },
  cta: {
    title: "Implementa Speedybot Pro en tu operación.",
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

export default speedybotPro;
