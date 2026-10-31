import { useState, type FormEvent } from 'react';
import { SelectField, TextField, TextAreaField, PrivacyCheck, SubmitButton, SuccessPanel } from '@/features/contact/components/FormFields';
import { robotModels, supportIncidentTypes } from '@/features/contact/data';

interface Values {
  nombre: string; empresa: string; modelo: string; serie: string; tipo: string; descripcion: string; acepto: boolean;
}
const empty: Values = { nombre: '', empresa: '', modelo: '', serie: '', tipo: '', descripcion: '', acepto: false };
type Errors = Partial<Record<keyof Values, string>>;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.nombre.trim()) e.nombre = 'Escribe tu nombre.';
  if (!v.empresa.trim()) e.empresa = 'Escribe el nombre de tu empresa.';
  if (!v.modelo) e.modelo = 'Selecciona un modelo.';
  if (v.serie.trim() && !/^[A-Za-z0-9][A-Za-z0-9-]{3,}$/.test(v.serie.trim())) e.serie = 'Revisa el número de serie (ej. SR-000000).';
  if (!v.tipo) e.tipo = 'Selecciona una opción.';
  if (!v.descripcion.trim()) e.descripcion = 'Cuéntanos qué está pasando.';
  if (!v.acepto) e.acepto = 'Debes aceptar la política de privacidad.';
  return e;
}

/** Formulario de solicitud de soporte (island). Sin backend: el envío solo muestra la confirmación. */
export default function SupportForm() {
  const [v, setV] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = <K extends keyof Values>(k: K) => (val: Values[K]) => {
    setV((p) => ({ ...p, [k]: val }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate(v);
    setErrors(e);
    if (Object.keys(e).length === 0) setSent(true);
  };

  if (sent) {
    return (
      <SuccessPanel
        title="Solicitud recibida."
        text="Un técnico te contactará en menos de 2 horas. Si necesitas atención inmediata, escríbenos por WhatsApp técnico 24/7."
        resetLabel="Reportar otra incidencia"
        onReset={() => { setV(empty); setErrors({}); setSent(false); }}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4 md:gap-5">
      <div className="flex flex-col gap-4 md:flex-row">
        <TextField className="md:flex-1" label="Nombre" value={v.nombre} onChange={set('nombre')} placeholder="Tu nombre" error={errors.nombre} autoComplete="name" />
        <TextField className="md:flex-1" label="Empresa" value={v.empresa} onChange={set('empresa')} placeholder="Nombre de la empresa" error={errors.empresa} autoComplete="organization" />
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <SelectField className="md:flex-1" label="Modelo del robot" value={v.modelo} onChange={set('modelo')} placeholder="Selecciona un modelo" options={robotModels} error={errors.modelo} />
        <TextField className="md:flex-1" label="Número de serie" value={v.serie} onChange={set('serie')} placeholder="Ej. SR-000000" error={errors.serie} />
      </div>
      <SelectField label="Tipo de incidencia" value={v.tipo} onChange={set('tipo')} placeholder="Selecciona una opción" options={supportIncidentTypes} error={errors.tipo} />
      <TextAreaField label="Descripción" value={v.descripcion} onChange={set('descripcion')} placeholder="Cuéntanos qué está pasando" error={errors.descripcion} />
      <div className="flex flex-col gap-4 pt-2 md:flex-row md:items-center md:justify-between">
        <PrivacyCheck checked={v.acepto} onChange={set('acepto')} label="Acepto la política de privacidad" error={errors.acepto} />
        <SubmitButton label="Enviar solicitud" className="w-full md:w-auto" />
      </div>
    </form>
  );
}
