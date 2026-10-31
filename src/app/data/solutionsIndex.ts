/** Tarjetas del índice `/soluciones` (orden = numeración 01–10 del diseño). */
export interface SolutionIndexItem {
  slug: string;
  name: string;
  tagline: string;
  statValue: string;
  statLabel: string;
  image: string;
}

export const solutionsIndex: SolutionIndexItem[] = [
  { slug: 'hoteles', name: 'Hoteles', tagline: 'Del lobby a la habitación: bienvenida, guía, amenities y pedidos 24/7.', statValue: '2–3x', statLabel: 'eficiencia en servicio a habitación', image: '/assets/soluciones/hoteles.jpg' },
  { slug: 'hospitales', name: 'Hospitales', tagline: 'Medicamentos, muestras e insumos en movimiento y pacientes bien orientados.', statValue: '99%', statLabel: 'precisión en entrega de insumos', image: '/assets/soluciones/hospitales.jpg' },
  { slug: 'restaurantes', name: 'Restaurantes', tagline: 'Platos de la cocina a la mesa y una experiencia de alta tecnología.', statValue: '2–3x', statLabel: 'eficiencia del servicio', image: '/assets/soluciones/restaurantes.jpg' },
  { slug: 'retail', name: 'Retail', tagline: 'Saludo, asesoría de producto y promociones en cada pasillo.', statValue: '50%+', statLabel: 'menos costo de personal', image: '/assets/soluciones/retail.jpg' },
  { slug: 'fabricas', name: 'Fábricas', tagline: 'Materiales en flujo continuo entre líneas de producción y bodegas.', statValue: '2–3x', statLabel: 'eficiencia en manejo de materiales', image: '/assets/soluciones/fabricas.jpg' },
  { slug: 'comunidades', name: 'Comunidades', tagline: 'Entregas puerta a puerta y patrullaje de seguridad las 24 horas.', statValue: '24/7', statLabel: 'seguridad en la comunidad', image: '/assets/soluciones/comunidades.jpg' },
  { slug: 'showrooms', name: 'Showrooms', tagline: 'Bienvenida, recorridos y explicación profesional de cada exhibición.', statValue: '100%', statLabel: 'cobertura de explicación', image: '/assets/soluciones/showrooms.jpg' },
  { slug: 'delivery', name: 'Delivery', tagline: 'Entrega autónoma de punta a punta con seguimiento en tiempo real.', statValue: '99%', statLabel: 'precisión en pedidos', image: '/assets/soluciones/delivery.jpg' },
  { slug: 'paqueteria', name: 'Paquetería', tagline: 'Última milla automatizada con retiro sin contacto.', statValue: '40%+', statLabel: 'menos costo de entrega', image: '/assets/soluciones/paqueteria.jpg' },
  { slug: 'adulto-mayor', name: 'Adulto mayor', tagline: 'Acompañamiento, recordatorios, rondas y alertas de emergencia.', statValue: '24/7', statLabel: 'asistencia y compañía', image: '/assets/soluciones/adulto-mayor.jpg' },
];
