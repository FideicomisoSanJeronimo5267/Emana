# EMANA — Sitio de marketing residencial

Next.js 16 + Payload CMS 3 sirviendo el sitio de marketing del desarrollo residencial EMANA.

## Stack

- **Next.js 16** — App Router, Server Components
- **Payload CMS 3** — Panel de administración en `/admin`, colección `page-content`
- **MongoDB** — Base de datos para el contenido del CMS
- **Vercel** — Plataforma de despliegue
- **CloudFront (AWS)** — CDN de assets (imágenes)

---

## Desarrollo local

### 1. Requisitos previos

- Node.js 20+
- Una instancia de MongoDB accesible (local o Atlas)

### 2. Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# MongoDB
DATABASE_URL=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<db>

# Payload CMS
PAYLOAD_SECRET=una-cadena-secreta-larga-y-aleatoria

# Assets CDN (CloudFront)
NEXT_PUBLIC_ASSETS_BASE_URL=https://dlsxqwz0ptmx4.cloudfront.net

# GoHighLevel CRM (formulario de contacto)
GHL_API_KEY=
GHL_LOCATION_ID=

# Brochure
NEXT_PUBLIC_BROCHURE_URL=

# Google Tag Manager
NEXT_PUBLIC_GTM_ID=

# Mapbox (mapa interactivo en página de contacto)
NEXT_PUBLIC_MAPBOX_TOKEN=
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Poblar el CMS (primer uso)

En el primer arranque la base de datos estará vacía. Ejecuta el seed para cargar el contenido inicial de todas las páginas:

```bash
npm run seed:all
```

Este comando es idempotente: detecta si las páginas ya existen y se salta la ejecución si es así, por lo que es seguro correrlo más de una vez.

### 5. Iniciar el servidor de desarrollo

```bash
npm run dev
```

- Sitio público: [http://localhost:3000](http://localhost:3000)
- Panel CMS: [http://localhost:3000/admin](http://localhost:3000/admin)

---

## Scripts disponibles

| Script | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run lint` | Ejecuta ESLint |
| `npm run generate:types` | Regenera `payload-types.ts` desde la config de Payload |
| `npm run seed:all` | Pobla todas las páginas en el CMS (solo corre si no hay datos) |
| `npm run seed:home-page` | Seed solo de la página de inicio |
| `npm run seed:amenidades-page` | Seed solo de la página de amenidades |
| `npm run seed:residencias-page` | Seed solo de la página de residencias |
| `npm run seed:colaboradores-page` | Seed solo de la página de colaboradores |
| `npm run seed:contacto-page` | Seed solo de la página de contacto |

---

## Despliegue en Vercel

### 1. Variables de entorno en Vercel

En el dashboard de Vercel, ve a **Settings → Environment Variables** y agrega todas las variables del `.env.local`:

| Variable | Entorno |
|---|---|
| `DATABASE_URL` | Production, Preview |
| `PAYLOAD_SECRET` | Production, Preview |
| `NEXT_PUBLIC_ASSETS_BASE_URL` | Production, Preview |
| `GHL_API_KEY` | Production |
| `GHL_LOCATION_ID` | Production |
| `NEXT_PUBLIC_BROCHURE_URL` | Production, Preview |
| `NEXT_PUBLIC_GTM_ID` | Production, Preview |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Production, Preview |

> **Importante:** Usa una base de datos de MongoDB distinta para Production y Preview si no quieres que los entornos compartan datos.

### 2. Build command

El proyecto incluye el script `vercel-build` en `package.json`, que Vercel detecta y usa automáticamente:

```
npm run seed:all && next build
```

**No necesitas configurar nada adicional en Vercel.** En cada despliegue ocurre lo siguiente:

1. `seed:all` consulta la BD — si las 5 páginas ya existen, se omite el seed
2. Si es el primer despliegue y la BD está vacía, el seed crea el contenido inicial
3. Se ejecuta `next build`

### 3. Primer despliegue

1. Conecta tu repositorio en [vercel.com](https://vercel.com)
2. Agrega todas las variables de entorno
3. Haz deploy — el seed correrá automáticamente y poblará el CMS

### 4. Despliegues posteriores

El seed se detecta como ya ejecutado y se omite. Cualquier cambio hecho desde el panel `/admin` del CMS **no será sobreescrito**.

---

## Administración de contenido

Accede al panel de Payload CMS en `/admin` con las credenciales del usuario administrador.

### Páginas gestionadas desde el CMS

| Página | `pageType` en CMS |
|---|---|
| Inicio (`/`) | `home` |
| Amenidades (`/amenidades`) | `amenidades` |
| Residencias (`/residencias`) | `residencias` |
| Colaboradores (`/colaboradores`) | `colaboradores` |
| Contacto (`/contacto`) | `contacto` |

### Re-ejecutar un seed manualmente

Si necesitas restaurar el contenido original de una página específica (por ejemplo, después de un experimento):

```bash
npm run seed:residencias-page
```

> Esto **sobreescribirá** el contenido actual de esa página en el CMS. Úsalo con precaución.

---

## Imágenes y CDN

Las imágenes están servidas desde AWS CloudFront. Para más detalles sobre la estructura de archivos, los puntos de contacto en el código y cómo migrar a otra plataforma, ver:

→ [`docs/image-hosting.md`](./docs/image-hosting.md)

---

## Arquitectura

```
src/
├── app/
│   ├── (app)/          # Sitio público (layout, páginas, componentes)
│   └── (payload)/      # Panel admin de Payload CMS (/admin)
├── blocks/             # Definición de bloques de Payload por página
├── collections/        # Colecciones de Payload (PageContent, Media, Users)
├── core/
│   ├── modules/        # Capas de dominio, aplicación e infraestructura
│   └── constants/      # Metadatos de imágenes (src, alt, blurData)
scripts/
├── seed-all.ts         # Orquestador — corre todos los seeds si la BD está vacía
├── seed-home-page.ts
├── seed-amenidades-page.ts
├── seed-residencias-page.ts
├── seed-colaboradores-page.ts
└── seed-contacto-page.ts
```
