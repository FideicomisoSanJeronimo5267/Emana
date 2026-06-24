# Alojamiento de imágenes

Las imágenes del sitio están servidas desde **AWS CloudFront** usando el bucket S3 configurado en la variable de entorno `NEXT_PUBLIC_ASSETS_BASE_URL`.

URL base actual:
```
https://dlsxqwz0ptmx4.cloudfront.net
```

---

## Estructura de carpetas en el CDN

```
/
├── homepage/
│   ├── social-area-v1.webp
│   ├── frontal-tower.webp
│   ├── rooftop.webp
│   ├── pool.webp
│   ├── grill-deck.webp
│   ├── business_center.webp
│   └── emana_experience.webp
│
├── amenities/
│   ├── business_center.webp
│   ├── event-hall.webp
│   ├── family_pool_v2.webp
│   ├── family_pool.webp
│   ├── grill_deck_v2.webp
│   ├── grill_deck.webp
│   ├── sky_pool.webp
│   ├── sport_bar.webp
│   ├── toy_library.webp
│   └── emana-experience.webp
│
├── residences/
│   ├── residences-cover-bg.webp
│   ├── residences-apartments-bg.webp
│   ├── residences-villas-bg.webp
│   ├── residences-footer-bg.webp
│   ├── residences-social-area.webp
│   ├── social_area_v3.webp
│   ├── residences-t4-social-area.webp
│   ├── residences-v2-bedroom-a.webp
│   └── residences-v3-rooftop.webp
│
├── collaborators/
│   ├── tower-frontal-view.webp
│   ├── one_development_group.webp
│   ├── jsa.webp
│   ├── esrawe.webp
│   └── emana-experience.webp
│
└── contacto/
    └── contact_emana_experience_bg.webp
```

> **Importante:** Al migrar de plataforma se debe respetar esta misma estructura de carpetas y nombres de archivo, o actualizar las referencias en el código (ver sección siguiente).

---

## Puntos de contacto al cambiar de plataforma

Hay 4 lugares en el proyecto que dependen del CDN. Todos deben actualizarse al migrar.

---

### 1. Variable de entorno `NEXT_PUBLIC_ASSETS_BASE_URL`

**Archivo:** `.env.local` (desarrollo) y **Settings → Environment Variables** en Vercel (producción)

Este es el único cambio necesario si la nueva plataforma mantiene la misma estructura de carpetas y nombres de archivo.

```env
# Cambiar por la URL base de la nueva plataforma
NEXT_PUBLIC_ASSETS_BASE_URL=https://nueva-plataforma.com
```

Esta variable alimenta `src/core/config/env.ts` → `ENV.ASSETS_BASE_URL`, que a su vez es usada por los archivos de constantes de imágenes.

---

### 2. Constantes de imágenes estáticas

**Archivos:** `src/core/constants/image-data/`

```
src/core/constants/image-data/
├── home-page.ts          # 7 imágenes del homepage
├── residences-page.ts    # 9 imágenes de residencias
├── amenities-page.ts     # 10 imágenes de amenidades
├── collaborators-page.ts # 5 imágenes de colaboradores
└── contacto-page.ts      # 1 imagen de contacto
```

Estas constantes construyen las URLs usando `ENV.ASSETS_BASE_URL`, por lo que **se actualizan automáticamente** al cambiar la variable de entorno.

Son usadas por componentes que renderizan imágenes de forma estática (sin pasar por el CMS).

---

### 3. Scripts de seed

**Archivos:** `scripts/seed-*.ts`

Todos los seeds leen `process.env.NEXT_PUBLIC_ASSETS_BASE_URL` al momento de ejecutarse y almacenan las URLs absolutas en MongoDB.

```typescript
const BASE = process.env.NEXT_PUBLIC_ASSETS_BASE_URL ?? 'https://dlsxqwz0ptmx4.cloudfront.net'
// Las URLs se guardan como: `${BASE}/homepage/social-area-v1.webp`
```

**Acción requerida:** Al migrar de plataforma, asegurarse de tener la nueva variable de entorno configurada **antes** de ejecutar los seeds. Si la BD ya tiene datos, ver sección de migración más abajo.

---

### 4. `next.config.ts` — dominios permitidos para `next/image`

**Archivo:** `next.config.ts`

Next.js requiere que los dominios externos estén explícitamente autorizados para poder optimizar imágenes con el componente `<Image />`.

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'dlsxqwz0ptmx4.cloudfront.net', // ← cambiar por el nuevo hostname
      pathname: '/**',
    },
  ],
},
```

**Acción requerida:** Agregar el hostname de la nueva plataforma y eliminar el anterior.

---

## Resumen de cambios al migrar

| # | Qué cambiar | Dónde | ¿Automático? |
|---|-------------|-------|:---:|
| 1 | `NEXT_PUBLIC_ASSETS_BASE_URL` | `.env.local` + Vercel | — |
| 2 | Constantes de imágenes estáticas | `src/core/constants/image-data/` | ✅ (usan la env var) |
| 3 | URLs en scripts de seed | `scripts/seed-*.ts` | ✅ (usan la env var) |
| 4 | Hostname en `next.config.ts` | `next.config.ts` | ❌ (manual) |
| 5 | URLs almacenadas en MongoDB | CMS / MongoDB | ❌ (ver abajo) |

---

## Elección de plataforma

No todas las plataformas de almacenamiento son aptas para servir imágenes en producción. A continuación se describen las consideraciones clave.

### ⚠️ OneDrive — No recomendado

OneDrive es una herramienta de almacenamiento personal/corporativo, no un CDN. Usarlo como origen de imágenes genera los siguientes problemas:

- **Links inestables.** Las URLs de OneDrive (`1drv.ms/...`) pueden expirar, requerir autenticación o cambiar si el archivo se mueve o renombra. Cualquiera de estos casos rompe las imágenes en el sitio sin previo aviso.
- **Sin distribución geográfica.** CloudFront tiene nodos en decenas de países (edge locations). OneDrive no funciona como CDN — todas las peticiones van al mismo servidor de Microsoft, lo que aumenta la latencia para usuarios fuera de Norteamérica.
- **Impacto en `next/image`.** El componente `<Image />` de Next.js optimiza imágenes al vuelo (resize, conversión a WebP, caché). Para ello necesita hacer fetch desde el origen en cada primera petición. Si el origen es lento o intermitente, el primer render de cada imagen será notablemente más lento.
- **Rate limiting.** Microsoft no garantiza disponibilidad de sus links para tráfico de producción. En un sitio con visitas concurrentes esto puede generar errores 429 o bloqueos silenciosos.

### Alternativas recomendadas

Si se quiere migrar fuera de AWS, estas opciones son compatibles con la arquitectura actual del proyecto:

| Plataforma | Ventaja principal | Consideración |
|---|---|---|
| **Cloudflare R2 + CDN** | Sin costo por egress, CDN global incluido | Requiere cuenta Cloudflare |
| **Vercel Blob** | Integración nativa con Vercel, zero-config | Costo por almacenamiento y transferencia |
| **Cloudinary** | Optimización automática de imágenes, transformaciones en URL | Puede reemplazar `next/image` por completo |
| **Bunny.net** | CDN económico, muy fácil de configurar | Menos ecosistema que AWS |

Cualquiera de estas opciones es compatible con el proyecto siempre que exponga una URL base pública estable, ya que el único cambio de código necesario es actualizar `NEXT_PUBLIC_ASSETS_BASE_URL` y el hostname en `next.config.ts`.

---

## Migración de URLs ya almacenadas en MongoDB

Las URLs de imágenes gestionadas desde el CMS (bloques de Payload) se guardan como strings absolutos en MongoDB. Si la BD ya fue populada con la URL anterior, existen dos opciones:

### Opción A — Re-ejecutar los seeds (recomendada si el contenido no ha sido editado desde el CMS)

Con la nueva variable de entorno configurada, simplemente eliminar los documentos `page-content` de la BD y volver a correr el seed:

```bash
# Con la nueva NEXT_PUBLIC_ASSETS_BASE_URL configurada:
npm run seed:all
```

> Esto borrará cualquier edición manual hecha desde el panel `/admin` del CMS. Usar solo si el contenido del CMS no ha sido modificado desde el despliegue inicial.

### Opción B — Script de migración en MongoDB (recomendada si hay ediciones en el CMS)

Ejecutar un `find and replace` en la colección `page-content` de MongoDB para reemplazar la URL base anterior por la nueva:

```javascript
// Ejecutar en MongoDB Shell o Compass
db.getCollection('page-content').updateMany(
  {},
  [{
    $replaceWith: {
      $literal: {
        // MongoDB no tiene replace nativo para strings anidados en arrays de bloques.
        // Exportar, hacer find/replace en JSON, y reimportar es más seguro.
      }
    }
  }]
)
```

El enfoque más seguro para la Opción B es:
1. Exportar la colección con `mongoexport`
2. Hacer un find & replace del dominio antiguo por el nuevo en el JSON exportado
3. Reimportar con `mongoimport`

```bash
mongoexport --uri="$DATABASE_URL" --collection=page-content --out=page-content-backup.json
sed -i 's|https://dlsxqwz0ptmx4.cloudfront.net|https://nueva-plataforma.com|g' page-content-backup.json
mongoimport --uri="$DATABASE_URL" --collection=page-content --mode=upsert --file=page-content-backup.json
```
