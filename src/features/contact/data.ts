import { products } from '@/app/data/products';
import { menuIndustries } from '@/app/data/navigation';

export const contactCountries = [
  'Colombia', 'Ecuador', 'México', 'Perú', 'Chile', 'Argentina', 'Panamá', 'Costa Rica',
  'República Dominicana', 'Estados Unidos', 'Otro',
];

export const contactIndustries = menuIndustries.map((i) => i.label);
export const robotModels = products.map((p) => p.nombre);

export const interestOptions = ['Cotización', 'Demo', 'Alquiler', 'Distribución'] as const;

export const contactChannels = [
  { icon: 'mail', label: 'Correo', value: 'contacto@shepwashi.com', href: 'mailto:contacto@shepwashi.com' },
  { icon: 'phone', label: 'Teléfono y WhatsApp', value: '+57 320 468 9357', href: 'tel:+573204689357' },
  { icon: 'pin', label: 'Oficinas', value: 'Medellín · Guayaquil · Cartagena · Los Ángeles', href: undefined },
] as const;

export const supportIncidentTypes = [
  'Falla de hardware', 'Software o actualización', 'Navegación y mapas', 'Batería y carga',
  'Capacitación', 'Otro',
];
