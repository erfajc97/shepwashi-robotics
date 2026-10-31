import type { ProductDetail } from '../productDetails';

// Figma: frame "Producto / CatCop" (dark-desktop / dark-mobile).
const catcop = {
  slug: 'catcop',
  name: 'CatCop',
  category: 'Seguridad',
  tagline: 'Patrullaje de seguridad autónomo',
  hero: {
    image: '/assets/products/catcop/hero-product.png',
    imageAlt: 'CatCop',
    tags: [
      'Reconocimiento facial',
      'Intercomunicador',
      'Patrullaje autónomo'
    ],
    caption: 'Serie Seguridad  ·  CatCop',
    summaryTitle: 'Seguridad 24/7 para comunidades y complejos.',
    summary: 'Fusión multisensor, mapeo autónomo y mapas en la nube; rutas planificadas y patrullaje libre con evasión; videovigilancia omnidireccional 360° de luz estelar; conducción, recarga y autonomía totalmente automáticas.',
    stats: [
      {
        icon: 'battery',
        value: '8',
        unit: 'h',
        label: 'Autonomía'
      },
      {
        icon: 'gauge',
        value: '1,0',
        unit: 'm/s',
        label: 'Velocidad máxima'
      },
      {
        icon: 'navigation',
        value: '10',
        unit: '°',
        label: 'Pendiente máxima'
      },
      {
        icon: 'box',
        value: '75',
        unit: 'kg',
        label: 'Peso'
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
      'Reconocimiento facial',
      'Intercomunicador',
      'Patrullaje autónomo',
      'Alertas tempranas',
      'Monitoreo 360°',
      'Video promocional',
      'Asesoría legal',
      'Protección'
    ]
  },
  coreFunctions: {
    title: 'Protección inteligente, sin puntos\nciegos.',
    columns: 2,
    features: [
      {
        title: 'Fusión multisensor',
        description: 'Mapeo autónomo y mapas en la nube para conocer cada rincón del recorrido.'
      },
      {
        title: 'Rutas autónomas',
        description: 'Planificación de rutas, evasión de obstáculos y patrullaje libre.'
      },
      {
        title: 'Vigilancia 360°',
        description: 'Videovigilancia omnidireccional con cámaras de luz estelar.'
      },
      {
        title: 'Totalmente autónomo',
        description: 'Conducción, recarga y gestión de batería sin intervención humana.'
      }
    ]
  },
  scenarios: {
    title: 'Dónde trabaja CatCop',
    description: 'Conjuntos residenciales, cuadras y centros comerciales que necesitan patrullaje constante y alertas tempranas.',
    scenes: [
      {
        name: 'Parque residencial',
        image: '/assets/products/catcop/scene-parque-residencial.jpg'
      },
      {
        name: 'Patrullaje nocturno',
        image: '/assets/products/catcop/scene-patrullaje-nocturno.jpg'
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
        value: '750 × 705 × 1420 mm'
      },
      {
        label: 'Altura libre al piso',
        value: '55 mm'
      },
      {
        label: 'Velocidad máxima',
        value: '1,0 m/s'
      },
      {
        label: 'Pendiente máxima',
        value: '10°'
      },
      {
        label: 'Ancho de zanja',
        value: '50 mm'
      },
      {
        label: 'Radio de giro',
        value: 'Gira sobre su eje'
      },
      {
        label: 'Altura de vadeo',
        value: '50 mm'
      },
      {
        label: 'Precisión de posicionamiento',
        value: '50 mm'
      },
      {
        label: 'Frenado mínimo',
        value: '400 mm'
      },
      {
        label: 'Batería',
        value: '48 V · 20 Ah'
      },
      {
        label: 'Giro de cabeza',
        value: '±180° horizontal'
      },
      {
        label: 'Autonomía',
        value: '8 h'
      },
      {
        label: 'Tiempo de carga',
        value: '4 h'
      },
      {
        label: 'Material',
        value: 'Aleación de aluminio y chapa'
      },
      {
        label: 'Peso',
        value: '≈ 75 kg'
      },
      {
        label: 'Chasis',
        value: 'Diferencial de cuatro ruedas'
      },
      {
        label: 'Humedad',
        value: '5–95 %, sin condensación'
      },
      {
        label: 'Conectividad',
        value: '4G / 5G / Wi-Fi'
      },
      {
        label: 'Temperatura',
        value: '−10 a 60 °C'
      }
    ]
  },
  related: {
    title: 'Otros modelos',
    slugs: [
      'specopsbot',
      'ciao',
      'timo',
      'amy'
    ]
  },
  cta: {
    title: 'Implementa CatCop en tu operación.',
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

export default catcop;
