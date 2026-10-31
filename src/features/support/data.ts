export const slaStats = [
  { value: '2', unit: 'h', label: 'Tiempo de respuesta' },
  { value: '24', unit: 'h', label: 'Tiempo de solución' },
  { value: '24', unit: 'h', label: 'Confirmación de visita' },
  { value: '24/7', unit: '', label: 'Línea técnica' },
] as const;

export const supportServices = [
  { icon: 'wrench', title: 'Instalación y puesta en marcha', text: 'Instalación, puesta en marcha y aceptación en sitio, en aproximadamente 3 días.' },
  { icon: 'refresh', title: 'Actualizaciones de por vida', text: 'Software actualizado en línea sin costo, diagnóstico remoto y mantenimiento periódico.' },
  { icon: 'headset', title: 'Línea técnica 24/7', text: 'Nuestro equipo técnico responde a toda hora para resolver dudas e incidencias operativas.' },
  { icon: 'users', title: 'Capacitación en sitio', text: 'Formamos a operadores y personal de mantenimiento, con acompañamiento durante toda la vida útil.' },
] as const;

export const supportChannels = [
  { icon: 'phone', label: '+57 320 468 9357', href: 'tel:+573204689357' },
  { icon: 'mail', label: 'contacto@shepwashi.com', href: 'mailto:contacto@shepwashi.com' },
  { icon: 'chat', label: 'WhatsApp técnico 24/7', href: 'https://wa.me/573204689357' },
] as const;
