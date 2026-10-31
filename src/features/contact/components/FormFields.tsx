import { useId, type ReactNode } from 'react';

/* Piezas de formulario compartidas por Contacto y Soporte (Figma: Field/*, Input, Button Gold). */

export const labelClass = 'font-mono text-[11.5px] leading-[1.2] font-medium tracking-[0.92px] text-muted uppercase';
const controlClass =
  'w-full rounded-md border bg-surface-2 py-4 pr-3.5 pl-[18px] text-[16px] leading-[1.55] tracking-[-0.032px] text-ink outline-none transition-colors placeholder:text-subtle focus:border-gold';

const arrowUpRight = (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M5.83333 5.83333H14.1667V14.1667M5.83333 14.1667L14.1667 5.83333" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface FieldProps {
  label: ReactNode;
  error?: string;
  children: (ids: { id: string; describedBy?: string; invalid: boolean }) => ReactNode;
  className?: string;
}

export function Field({ label, error, children, className }: FieldProps) {
  const id = useId();
  const errId = `${id}-err`;
  return (
    <div className={`flex min-w-0 flex-col gap-2 ${className ?? ''}`}>
      <label htmlFor={id} className={labelClass}>{label}</label>
      {children({ id, describedBy: error ? errId : undefined, invalid: Boolean(error) })}
      {error && <p id={errId} role="alert" className="text-[13px] leading-[1.4] text-gold-soft">{error}</p>}
    </div>
  );
}

interface TextProps {
  label: ReactNode;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  error?: string;
  type?: 'text' | 'email' | 'tel';
  autoComplete?: string;
  className?: string;
}

export function TextField({ label, value, onChange, placeholder, error, type = 'text', autoComplete, className }: TextProps) {
  return (
    <Field label={label} error={error} className={className}>
      {({ id, describedBy, invalid }) => (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          className={`${controlClass} ${invalid ? 'border-gold-soft' : 'border-line'}`}
        />
      )}
    </Field>
  );
}

interface SelectProps {
  label: ReactNode;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: string[];
  error?: string;
  className?: string;
}

export function SelectField({ label, value, onChange, placeholder, options, error, className }: SelectProps) {
  return (
    <Field label={label} error={error} className={className}>
      {({ id, describedBy, invalid }) => (
        <div className="relative">
          <select
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            aria-invalid={invalid || undefined}
            aria-describedby={describedBy}
            className={`${controlClass} cursor-pointer appearance-none pr-11 ${value ? '' : 'text-subtle'} ${invalid ? 'border-gold-soft' : 'border-line'}`}
          >
            <option value="" disabled>{placeholder}</option>
            {options.map((o) => (
              <option key={o} value={o} className="text-ink">{o}</option>
            ))}
          </select>
          <svg className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-ink" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </Field>
  );
}

interface AreaProps {
  label: ReactNode;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  error?: string;
}

export function TextAreaField({ label, value, onChange, placeholder, error }: AreaProps) {
  return (
    <Field label={label} error={error}>
      {({ id, describedBy, invalid }) => (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          className={`${controlClass} h-[140px] resize-none ${invalid ? 'border-gold-soft' : 'border-line'}`}
        />
      )}
    </Field>
  );
}

interface CheckProps {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: ReactNode;
  error?: string;
}

export function PrivacyCheck({ checked, onChange, label, error }: CheckProps) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="flex cursor-pointer items-center gap-3 text-[14px] leading-[1.5] text-muted">
        <input id={id} type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} aria-invalid={Boolean(error) || undefined} className="peer sr-only" />
        <span
          className={`grid size-[18px] shrink-0 place-items-center rounded-[5px] border-[1.5px] transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold ${
            checked ? 'border-gold bg-gold text-on-gold' : error ? 'border-gold-soft' : 'border-subtle'
          }`}
          aria-hidden="true"
        >
          {checked && (
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none"><path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          )}
        </span>
        {label}
      </label>
      {error && <p role="alert" className="text-[13px] leading-[1.4] text-gold-soft">{error}</p>}
    </div>
  );
}

export function SubmitButton({ label, className }: { label: string; className?: string }) {
  return (
    <button
      type="submit"
      className={`inline-flex items-center justify-between gap-4 rounded-pill bg-gold py-1.5 pr-1.5 pl-[22px] text-[15px] leading-[1.2] font-medium tracking-[-0.03px] whitespace-nowrap text-on-gold transition-opacity hover:opacity-90 ${className ?? ''}`}
    >
      {label}
      <span className="grid size-9 place-items-center rounded-pill bg-on-gold text-white">{arrowUpRight}</span>
    </button>
  );
}

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
export const isPhone = (v: string) => /^[+\d][\d\s().-]{6,}$/.test(v.trim());

export function SuccessPanel({ title, text, onReset, resetLabel }: { title: string; text: string; onReset: () => void; resetLabel: string }) {
  return (
    <div role="status" className="flex flex-col items-start gap-5 py-6">
      <span className="grid size-12 place-items-center rounded-sm bg-gold text-on-gold">
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
      <p className="text-[28px] leading-[1.1] font-medium tracking-[-0.56px] text-ink md:text-[40px] md:tracking-[-1px]">{title}</p>
      <p className="max-w-[520px] text-[16px] leading-[1.55] tracking-[-0.032px] text-muted">{text}</p>
      <button type="button" onClick={onReset} className="rounded-pill border border-ink px-5 py-3 text-[15px] leading-[1.2] font-medium text-ink transition-opacity hover:opacity-80">{resetLabel}</button>
    </div>
  );
}
