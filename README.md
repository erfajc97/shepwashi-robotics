# Shepwashi Robotics

Landing de Shepwashi Robotics: robótica de servicio para LatAm y el Caribe. Astro 7 (SSG) + islas React + Tailwind v4, con tema oscuro/claro.

## Comandos

```sh
npm install
npm run dev       # servidor local
npm run build     # genera dist/ (49 páginas)
npm run preview   # sirve dist/
```

## Despliegue (Netlify)

- Build command: `npm run build`
- Publish directory: `dist`

## Estructura

- `src/pages` — rutas (home, catálogo, `producto/[slug]`, `soluciones/[slug]`, `recursos/[slug]`, nosotros, soporte, contacto…)
- `src/features` — componentes por página
- `src/app/data` — contenido tipado (productos, soluciones, artículos)
- `src/components` — UI y layout compartidos
- `public/assets` — imágenes e iconos (optimizadas con `scripts/optimize-images.mjs`)
- `docs/FIGMA-BUILD-BRIEF.md` — reglas de construcción desde Figma

## Pendiente

Textos oficiales (FAQ, cuerpos de artículos, mensajes de formularios), PDFs de fichas técnicas y backend de formularios.
