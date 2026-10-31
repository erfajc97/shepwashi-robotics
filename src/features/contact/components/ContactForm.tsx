import { useState, type FormEvent } from 'react';
import { SelectField, TextField, TextAreaField, PrivacyCheck, SubmitButton, SuccessPanel, labelClass, isEmail, isPhone } from './FormFields';
import { contactCountries, contactIndustries, robotModels, interestOptions } from '../data';

interface Values {
  nombre: string; apellido: string; correo: string; telefono: string; empresa: string;
  pais: string; industria: string; robot: string; mensaje: string; interes: string; acepto: boolean;
}

const empty: Values = {
  nombre: '', apellido: '', correo: '', telefono: '', empresa: '', pais: '', industria: '', robot: '',
  mensaje: '', interes: interestOptions[0], acepto: false,
};

type Errors = Partial<Record<keyof Values, string>>;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.nombre.trim()) e.nombre = 'Escribe tu nombre.';
  if (!v.correo.trim()) e.correo = 'Escribe tu correo corporativo.';
  else if (!isEmail(v.correo)) e.correo = 'Revisa el formato del correo.';
  if (v.telefono.trim() && !isPhone(v.telefono)) e.telefono = 'Revisa el formato del teléfono.';
  if (!v.empresa.trim()) e.empresa = 'Escribe el nombre de tu empresa.';
  if (!v.pais) e.pais = 'Selecciona tu país.';
  if (!v.mensaje.trim()) e.mensaje = 'Cuéntanos qué quieres automatizar.';
  if (!v.acepto) e.acepto = 'Debes aceptar la política de privacidad.';
  return e;
}

/** Formulario de contacto (island). Sin backend: el envío solo muestra la confirmación. */
export default function ContactForm() {
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
        title="¡Gracias! Recibimos tu mensaje."
        text={`Te respondemos en menos de 24 horas con una recomendación de modelo y una propuesta inicial. Escribiremos a ${v.correo.trim()}.`}
        resetLabel="Enviar otro mensaje"
        onReset={() => { setV(empty); setErrors({}); setSent(false); }}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4 md:gap-5">
      <div className="flex flex-col gap-4 md:flex-row md:gap-4">
        <TextField className="md:flex-1" label={<><span className="md:hidden">Nombre completo</span><span className="hidden md:inline">Nombre</span></>} value={v.nombre} onChange={set('nombre')} placeholder="Tu nombre" error={errors.nombre} autoComplete="given-name" />
        <TextField className="hidden md:flex md:flex-1" label="Apellido" value={v.apellido} onChange={set('apellido')} placeholder="Tu apellido" autoComplete="family-name" />
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:gap-4">
        <TextField className="md:flex-1" label="Correo corporativo" type="email" value={v.correo} onChange={set('correo')} placeholder="nombre@empresa.com" error={errors.correo} autoComplete="email" />
        <TextField className="md:flex-1" label="Teléfono" type="tel" value={v.telefono} onChange={set('telefono')} placeholder="+57 300 000 0000" error={errors.telefono} autoComplete="tel" />
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:gap-4">
        <TextField className="md:flex-1" label="Empresa" value={v.empresa} onChange={set('empresa')} placeholder="Nombre de la empresa" error={errors.empresa} autoComplete="organization" />
        <SelectField className="md:flex-1" label="País" value={v.pais} onChange={set('pais')} placeholder="Selecciona tu país" options={contactCountries} error={errors.pais} />
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:gap-4">
        <SelectField className="hidden md:flex md:flex-1" label="Industria" value={v.industria} onChange={set('industria')} placeholder="Selecciona tu industria" options={contactIndustries} />
        <SelectField className="md:flex-1" label="Robot de interés" value={v.robot} onChange={set('robot')} placeholder="Selecciona un modelo" options={robotModels} />
      </div>
      <TextAreaField label="Mensaje" value={v.mensaje} onChange={set('mensaje')} placeholder="¿Qué tareas quieres automatizar?" error={errors.mensaje} />

      <div role="radiogroup" aria-label="Me interesa" className="hidden flex-wrap md:flex items-center gap-2">
        <span className={`${labelClass} mr-1`}>Me interesa</span>
        {interestOptions.map((o) => {
          const on = v.interes === o;
          return (
            <button
              key={o}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => set('interes')(o)}
              className={`rounded-pill border px-4 py-[9px] text-[14px] leading-[1.5] transition-colors ${on ? 'border-ink bg-ink text-inverse' : 'border-line text-ink hover:border-subtle'}`}
            >
              {o}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-4 pt-2 md:flex-row md:items-center md:justify-between">
        <PrivacyCheck
          checked={v.acepto}
          onChange={set('acepto')}
          label={<><span className="md:hidden">Acepto la política de privacidad</span><span className="hidden md:inline">Acepto la política de privacidad y el tratamiento de datos</span></>}
          error={errors.acepto}
        />
        <SubmitButton label="Enviar mensaje" className="w-full md:w-auto" />
      </div>
    </form>
  );
}
