/** Casos de uso de `/aplicaciones`. */
export interface ApplicationRobot { name: string; slug: string }
export interface ApplicationStory {
  id: string;
  /** etiqueta de filtro y chip sobre la imagen */
  industry: string;
  /** pestaña de filtro a la que pertenece */
  filter: (typeof applicationFilters)[number];
  title: string;
  challenge: string;
  solution: string;
  result: string;
  robots: ApplicationRobot[];
  image: string;
  /** la imagen va a la derecha (par) o izquierda (impar) en escritorio */
  imageSide: 'left' | 'right';
  /** tono del panel de texto en escritorio */
  tone: 'surface' | 'panel';
}

export const applicationFilters = ['Todas', 'Hoteles', 'Industria', 'Educación', 'Inmobiliario', 'Eventos'] as const;

export const applicationStories: ApplicationStory[] = [
  {
    id: 'hoteles', industry: 'Hoteles', filter: 'Hoteles',
    title: 'Servicio a habitación en horas pico y turno nocturno',
    challenge: 'En horas pico y de madrugada el personal no alcanza para atender pedidos a habitación sin descuidar la recepción.',
    solution: 'Robots de entrega hotelera llevan amenities, comida y paquetes a cada piso; usan el ascensor por sí solos y avisan al huésped al llegar.',
    result: 'El equipo se concentra en la atención presencial y el servicio a habitación sigue disponible toda la noche.',
    robots: [{ name: 'Panda Hotel', slug: 'panda-hotel' }, { name: 'Speedybot Max', slug: 'speedybot-max' }],
    image: '/assets/aplicaciones/hoteles.jpg', imageSide: 'left', tone: 'surface',
  },
  {
    id: 'farmaceutica', industry: 'Industria farmacéutica', filter: 'Industria',
    title: 'Logística interior–exterior entre naves',
    challenge: 'Materiales y documentos se movían a mano entre bodega, laboratorio y producción, cruzando patios.',
    solution: 'Speedybot recorre rutas autónomas interior–exterior, cruza patios y sube ascensores para conectar bodega y líneas.',
    result: 'Entregas trazables y continuas, incluso en turnos nocturnos.',
    robots: [{ name: 'Speedybot Pro', slug: 'speedybot-pro' }, { name: 'Speedybot Max-E', slug: 'speedybot-max-e' }],
    image: '/assets/aplicaciones/farmaceutica.jpg', imageSide: 'right', tone: 'surface',
  },
  {
    id: 'educacion', industry: 'Educación', filter: 'Educación',
    title: 'Asistentes de aula multilingües',
    challenge: 'Docentes que necesitan apoyo en actividades interactivas y estudiantes que hablan distintos idiomas.',
    solution: 'Timo acompaña clases y actividades con interacción por voz en varios idiomas, incluidas lenguas locales.',
    result: 'Clases más participativas y un primer contacto amable con la tecnología.',
    robots: [{ name: 'Timo', slug: 'timo' }, { name: 'Snow', slug: 'snow' }],
    image: '/assets/aplicaciones/educacion.jpg', imageSide: 'left', tone: 'panel',
  },
  {
    id: 'inmobiliario', industry: 'Inmobiliario', filter: 'Inmobiliario',
    title: 'Atención en salas de ventas',
    challenge: 'Picos de visitantes en la sala de ventas que saturan al equipo comercial.',
    solution: 'Amy recibe a los visitantes, presenta el proyecto y sirve bebidas durante el recorrido.',
    result: 'Una experiencia memorable que libera a los asesores para cerrar ventas.',
    robots: [{ name: 'Amy', slug: 'amy' }, { name: 'Amy Delivery', slug: 'amy-delivery' }],
    image: '/assets/aplicaciones/inmobiliario.jpg', imageSide: 'right', tone: 'surface',
  },
  {
    id: 'eventos', industry: 'Eventos', filter: 'Eventos',
    title: 'Foros y exhibiciones internacionales',
    challenge: 'Eventos de alto tráfico con miles de asistentes que necesitan orientación.',
    solution: 'Amy, Alice y Snow guían a los asistentes, presentan contenidos y atraen público a los stands.',
    result: 'Más tráfico en los stands y una imagen de innovación para el organizador.',
    robots: [{ name: 'Amy', slug: 'amy' }, { name: 'Alice', slug: 'alice' }, { name: 'Snow', slug: 'snow' }],
    image: '/assets/aplicaciones/eventos.jpg', imageSide: 'left', tone: 'surface',
  },
];
