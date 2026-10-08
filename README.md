# Cerrajero Express Vallès

Web estática ultra-orientada a SEO local para cerrajería de emergencias (Vallès / radio ~1 h en moto desde La Llagosta).

## Datos de negocio (editar si cambian)

- **Marca:** Cerrajero Express Vallès
- **Teléfono:** 673 252 134 → `tel:+34673252134`
- **WhatsApp:** https://wa.me/34673252134
- **Base:** La Llagosta (Barcelona)
- **URL canónica placeholder:** `https://cerrajero-express-valles.vercel.app`  
  Cámbiala en todos los `link rel="canonical"`, Open Graph, `robots.txt` y `sitemap.xml` cuando tengas dominio propio.

## Estructura

- `index.html` — inicio
- `servicios/` — apertura de puertas, cambio de cerradura, 24 horas, apertura de coches
- `zonas/` — páginas locales por municipio
- `contacto.html`, `privacidad.html`, `404.html`
- `assets/styles.css`, `assets/main.js`, `assets/favicon.svg`
- `robots.txt`, `sitemap.xml`, `vercel.json`

## Previsualizar en local

```bash
cd cerrajero-express-valles
python3 -m http.server 8080
```

Abre http://127.0.0.1:8080/

## Publicar gratis en Vercel

### Opción A — Arrastrar / subir carpeta

1. Entra en https://vercel.com y crea cuenta.
2. **Add New… → Project**.
3. Sube esta carpeta o conecta un repo de GitHub con estos archivos en la raíz.
4. Framework Preset: **Other**. Sin Build Command. Output: raíz.
5. Deploy. Obtendrás una URL `*.vercel.app`.

### Opción B — CLI

```bash
npm i -g vercel
cd cerrajero-express-valles
vercel
vercel --prod
```

### Dominio propio

Vercel → Project → Settings → Domains. Luego sustituye `https://cerrajero-express-valles.vercel.app` en canonicals, OG, sitemap y robots.

## Qué tocar si cambias teléfono o zonas

1. Busca en el proyecto `673252134` / `673 252 134` / `+34673252134` y reemplaza.
2. Zonas: añade HTML en `zonas/`, enlázalo en `index.html`, footer y `sitemap.xml`.
3. Textos legales: `privacidad.html`.

## Notas SEO

- Una H1 por página, títulos y metas únicos.
- JSON-LD LocalBusiness/Locksmith + FAQ + breadcrumbs.
- CTAs `tel:` y barra fija en móvil.
- Contenido local único por municipio.

## Aviso

El número incluido es el facilitado para pruebas. No hay reseñas inventadas ni formularios de pago.
