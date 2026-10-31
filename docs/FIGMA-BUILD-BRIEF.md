# Brief de construcción — Shepwashi Robotics (Figma → Astro)

## FUENTE DE VERDAD: volcado LOCAL (NO llames a Figma; su cuota está agotada)
Todo el Figma ya está volcado en `design-dump/` (no lo edites):
- `design-dump/frames/<pagina>/<frame>.json` árbol completo de cada frame (textos exactos, tipografías, colores hex, layout flex, radios, imágenes, svg).
  Páginas: `dark-desktop`, `dark-mobile`, `light-desktop`, `light-mobile`, `design-system`.
- `design-dump/frames/<pagina>/<frame>.png` captura del frame completo (úsala con Read para ver el diseño; recórtala con python/PIL si es muy alta).
- `design-dump/images/<hash>.<ext>` imágenes originales (los fills tipo IMAGE referencian el hash). `design-dump/svg/<id>.svg` vectores/ilustraciones.
- `design-dump/variables.json` tokens (modos Light/Dark).
Herramienta: `node scripts/dump-outline.mjs list` (lista frames) y
`node scripts/dump-outline.mjs dark-desktop/home-desktop "Hero" 6` (esquema legible de un nodo: tamaños, flex, fills hex, textos con fuente/tamaño/tracking, imágenes ya resueltas a nombre de archivo).
Para móvil: `dark-mobile/<mismo-nombre-con-mobile>`. Los frames de escritorio acaban en `-desktop` y los móviles en `-mobile`.
ASSETS: copia lo que necesites desde `design-dump/images/<hash>.<ext>` y `design-dump/svg/` a `public/assets/<pagina>/<nombre-descriptivo>.<ext>`
(cp en bash). Referencia siempre `/assets/...`. Nunca referencies `design-dump/` desde el código. Si un asset ya está en `public/assets`, reutilízalo.
`get_design_context` ya NO se usa. Las imágenes JPG/PNG son los originales a resolución completa: si pesan >600 KB y se muestran pequeñas, déjalas igual (se optimizan al final).

## Colores reales (verificados en el volcado, modo oscuro = por defecto)
- Superficies del tema: `canvas`, `surface`(dark #101f35 / light #fff), `surface-2`, `stage`, `line`, `muted`, `subtle`, `ink`, `ink-2` ya definidos y theme-aware.
- Bloques "oscuros" (nav, CTA, Engineering Spotlight, Process…): `bg-panel` (dark #172f52 / light #06101e). Footer y cartas fijas: `bg-navy` (#06101e fijo).
- Texto sobre `bg-panel`/`bg-navy`: `text-white` (NO uses `text-inverse`: en oscuro vale #06101e). Tarjetas blancas fijas del diseño (p. ej. Spotlight Card): `bg-white text-navy`/colores según el JSON.
- Cuando el JSON diga `color/ink` etc., confía en el hex `color` del nodo (es el valor ya resuelto en ese modo) y elige el token cuyo valor oscuro coincida; el tema claro se obtiene gratis por los tokens.

Figma original: fileKey `2ufEJ82Kr8Gg3FuQbrEFYy` (solo referencia de nombres/ids).

## Reglas de construcción
1. Stack: Astro (SSG) + Tailwind v4 (`src/styles/global.css`). React island SOLO si hay interactividad real
   (acordeón/FAQ, filtros, tabs, galería). Lo estático va en `.astro`.
2. NUNCA hex ni `var(--…)` en clases. Usa tokens: `bg-canvas bg-surface bg-surface-2 bg-stage bg-panel bg-navy bg-navy-3
   text-ink text-ink-2 text-muted text-subtle text-inverse text-gold text-gold-soft text-on-gold text-on-dark-muted
   border-line border-line-dark rounded-sm(10) rounded-md(16) rounded-lg(24) rounded-xl(32) rounded-pill font-sans font-mono`.
   Los colores de Figma `color/xxx` mapean 1:1 a esos nombres. Superficies siempre oscuras (nav/footer/CTA oscuros) usan `bg-navy`
   (fijo #06101e) en vez de `bg-ink`, porque `ink` cambia con el tema.
3. Componentes ya hechos (no los dupliques): `@/components/ui/{Icon,Button,SectionLabel,Chip,Logo}.astro`,
   `@/components/layout/{Nav,Footer}.astro`, layouts `@/layouts/PublicLayout.astro` (Nav + `<main class="max-w-[1440px] px-4">` + Footer).
   Icon: `<Icon name="arrow-right" size={16} />` (nombres en `public/assets/icons/`). Button: `<Button label href variant="primary|secondary|on-dark|gold" />`.
4. Las secciones del Figma son frames de 1408 px de ancho apilados con 16 px de separación: el `<main>` ya da el ancho; usa `flex flex-col gap-4`.
5. Convierte el React+Tailwind que devuelve `get_design_context` a Astro + clases de tokens. Respeta tamaños tipográficos, tracking, radios y
   espaciados exactos del diseño (usa `text-[56px] tracking-[-3px]` etc. cuando no haya utilidad equivalente).
6. Responsive: desktop = layout del frame de escritorio (`md:` y arriba); móvil = layout del frame Mobile correspondiente (base sin prefijo).
   Pide `get_design_context` del frame móvil de cada sección o de la página para ver las diferencias.
7. (OBSOLETO, ver arriba) ASSETS: `get_design_context` devuelve `const assetPathPrefix = "https://www.figma.com/api/mcp/asset/<uuid>"` y constantes `imgXxx = \`${assetPathPrefix}/<hash>.<ext>\``.
   Las URLs caducan; descárgalas SIEMPRE con `node scripts/fetch-assets.mjs <manifest.json>` (ver cabecera del script) hacia
   `public/assets/<pagina>/<nombre-descriptivo>.<ext>` y referencia `/assets/<pagina>/...` en el código. Nunca dejes URLs de figma.com en el código.
   Imágenes iguales entre secciones/páginas: reutiliza el archivo ya descargado (busca antes en `public/assets`). Los iconos ya están en `public/assets/icons`
   (usa `<Icon>`; no descargues iconos sueltos, salvo ilustraciones SVG propias de una sección). Escribe los manifests en `scripts/manifests/<pagina>.json`.
8. Textos: copia el copy EXACTO del diseño (español). Enlaces internos: `/catalogo`, `/producto/<slug>`, `/soluciones/<slug>`, `/soluciones`, `/aplicaciones`,
   `/recursos`, `/recursos/<slug>`, `/nosotros`, `/soporte`, `/contacto`.
9. Datos: el contenido repetido va en `src/app/data/<tema>.ts` (tipado), no inline repetido.
10. No toques archivos de otros agentes. Verifica con `npx astro build` (debe pasar sin errores). No hagas git commit. No arranques servidores que queden abiertos.
11. Entrega: lista corta de archivos creados, rutas generadas, y cualquier cosa del diseño que NO pudiste reproducir.

## Slugs de producto (20)
timo, amy, alice, ciao, snow, fairy, speedybot-pro, speedybot-max, speedybot-max-e, panda-ultra, panda, amy-delivery, panda-amr-serie-f,
panda-hotel, specopsbot, catcop, g1, panda-e, jing  (+ nota: son 19 nombres en el Figma; usa exactamente los frames "Producto / X").

## Slugs de solución (10)
hoteles, hospitales, restaurantes, retail, fabricas, comunidades, showrooms, delivery, paqueteria, adulto-mayor

## Mapa de frames (escritorio → móvil)
Home 2:13723→3:8254 · Catálogo 2:14138→3:8560 · Timo 2:14196→3:8600 · Amy 2:14358→3:8724 · Alice 2:14531→3:8855 · Ciao 2:14709→3:8991 ·
Snow 2:14828→3:9074 · Fairy 2:14992→3:9200 · Speedybot Pro 2:15167→3:9333 · Speedybot Max 2:15315→3:9447 · Speedybot Max-E 2:15420→3:9520 ·
Panda Ultra 2:15524→3:9592 · Panda 2:15641→3:9673 · Amy Delivery 2:15794→3:9790 · Panda AMR Serie F 2:15970→3:9924 · Panda Hotel 2:16137→3:10040 ·
Specopsbot 2:16285→3:10154 · CatCop 2:16392→3:10229 · G1 2:16561→3:10364 · Panda-E 2:16667→3:10438 · Jing 2:16770→3:10509 ·
Hoteles 2:16875→3:10582 · Hospitales 2:17007→3:10673 · Restaurantes 2:17139→3:10764 · Retail 2:17267→3:10855 · Fábricas 2:17395→3:10946 ·
Comunidades 2:17523→3:11037 · Showrooms 2:17651→3:11128 · Delivery 2:17779→3:11219 · Paquetería 2:17907→3:11310 · Adulto mayor 2:18035→3:11401 ·
Soluciones 2:18163→3:11492 · Aplicaciones 2:18279→3:11593 · Recursos 2:18413→3:11690 · Artículo 2:18514→3:11737 · Nosotros 2:18580→3:11755 ·
Soporte 2:18714→3:11855 · Contacto 2:18823→3:11938 · Menú Productos 31:19685 / Menú Soluciones 31:20164 (desktop) · Menú móvil 31:26819, 31:26851, 31:26905.

Secciones hijas (frame → hijos) de Home: Hero 2:13725, Manufacturer Backing 2:13758, Product Lines 2:13783, Featured Products 2:13838,
Engineering Spotlight 2:13853, Industries 2:13902, Applications 2:13979, Process 2:14018, Resources 2:14065, FAQ 2:14090, CTA 2:14128.
Para las demás páginas, obtén los hijos con `get_metadata` del frame (guarda la salida si es larga y filtra con python/jq).
