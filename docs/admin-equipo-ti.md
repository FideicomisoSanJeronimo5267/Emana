# Guía técnica de administración — Emana CMS

Referencia para el equipo de TI: setup inicial, gestión de usuarios, verificación de seeds y diagnóstico.

---

## Variables de entorno requeridas

| Variable | Descripción | Requerida para |
|---|---|---|
| `DATABASE_URL` | MongoDB connection string (Atlas) | Seeds, CMS runtime, build |
| `PAYLOAD_SECRET` | JWT secret para Payload CMS (mínimo 24 caracteres) | CMS runtime, autenticación |
| `NEXT_PUBLIC_ASSETS_BASE_URL` | URL base del CDN (CloudFront) donde están las imágenes | Seeds, componentes del sitio |
| `NEXT_PUBLIC_BROCHURE_URL` | URL directa al PDF del brochure descargable | Runtime del sitio |
| `GHL_API_KEY` | API key de GoHighLevel para el formulario de contacto | Formulario de contacto |
| `GHL_LOCATION_ID` | Location ID de GoHighLevel | Formulario de contacto |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Token de Mapbox GL para el mapa interactivo en /contacto | Runtime del sitio |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID | Analytics |

> **Crítico — `NEXT_PUBLIC_ASSETS_BASE_URL`:** Esta variable debe estar configurada **antes** de correr los seeds. Los seeds almacenan las URLs absolutas de las imágenes directamente en MongoDB. Si la variable está incorrecta o ausente, todas las imágenes en el CMS quedarán apuntando al CDN equivocado y será necesario re-seedear o hacer una migración de URLs. Ver `docs/image-hosting.md` para detalles.

En local: archivo `.env` en la raíz del proyecto.
En Vercel: Settings → Environment Variables.

---

## Setup inicial: crear el primer usuario administrador

### Opción A — Primer despliegue en Vercel (flujo normal)

1. Configurar todas las variables de entorno en Vercel **antes** del primer deploy.
2. El script `vercel-build` (`npm run seed:all && next build`) corre automáticamente. En el primer deploy crea los 5 documentos de `page-content` en MongoDB.
3. Una vez que el deploy completa y el sitio está en línea, navegar a `[URL]/admin`.
4. Payload detecta que no hay usuarios y muestra la pantalla **"Create First User"**.
5. Ingresar email y contraseña del usuario administrador raíz y hacer clic en "Create".

> La pantalla "Create First User" aparece **una sola vez** — cuando la colección `users` está vacía. Después de crear el primero, esta opción desaparece permanentemente.

### Opción B — Entorno local o via CLI/SSH

```bash
# Desde el directorio raíz del proyecto, con DATABASE_URL y PAYLOAD_SECRET en el entorno:
npx tsx scripts/seed-all.ts  # si los seeds aún no corrieron

# Luego ir a http://localhost:3000/admin y usar la pantalla "Create First User"
# O crear el usuario via CLI de Payload:
npx payload create-first-user
```

> Este comando solo funciona si la colección `users` está vacía. Si ya hay usuarios, fallarás silenciosamente o con error.

---

## Crear usuarios adicionales

Todos los usuarios tienen el mismo nivel de acceso — no existe sistema de roles en este proyecto. Cualquier usuario creado puede ver y editar todas las colecciones del CMS.

**Desde el admin panel:**

1. Iniciar sesión en `/admin` con el usuario administrador.
2. En el menú lateral, hacer clic en **"Users"**.
3. Hacer clic en **"Create New"** (botón superior derecho).
4. Ingresar el email del nuevo usuario y una contraseña temporal.
5. Hacer clic en **"Save"**.
6. Comunicar al usuario su email y contraseña. Puede cambiarla desde su perfil en el panel.

> **Importante:** No hay flujo de recuperación de contraseña por email configurado. Si un usuario pierde su contraseña, un administrador debe resetearla desde el panel: Users → seleccionar usuario → cambiar contraseña → Save.

---

## Verificar que los seeds se ejecutaron correctamente

### Desde el admin panel

1. Ir a `/admin` e iniciar sesión.
2. Hacer clic en **"Page Content"** en el menú lateral.
3. Deben aparecer exactamente **5 documentos**:

| pageType | Página del sitio |
|---|---|
| `home` | Página de inicio |
| `amenidades` | Amenidades |
| `residencias` | Residencias |
| `colaboradores` | Colaboradores |
| `contacto` | Contacto |

4. Hacer clic en cada documento y confirmar que tiene bloques con contenido (no vacíos).

### Desde los build logs de Vercel

En el Vercel dashboard: Deployments → último deploy → Build Logs.

Si los seeds corrieron por primera vez, buscar:
```
✓ Documento home creado correctamente
✓ Documento amenidades creado correctamente
✓ Documento residencias creado correctamente
✓ Documento colaboradores creado correctamente
✓ Documento contacto creado correctamente
```

Si los seeds ya existían desde un deploy anterior:
```
✓ Seeds ya ejecutados. Omitiendo.
```

### Desde MongoDB (Compass o Shell)

```javascript
// Contar documentos de page-content — esperado: 5
db.getCollection('page-content').countDocuments()

// Ver los pageTypes — esperado: los 5 valores de la tabla anterior
db.getCollection('page-content').find({}, { pageType: 1, _id: 0 }).toArray()
```

---

## Re-ejecutar seeds (fallo o reseteo de contenido)

> **Comportamiento importante de los seeds:**
> - `npm run seed:all` — **omite completamente** si ya existen 5 documentos. Seguro de correr en cualquier momento.
> - `npm run seed:home-page` (y cualquier seed individual) — **siempre sobreescribe** el contenido del CMS para esa página (upsert). Cualquier edición manual del equipo comercial en esa página se perderá.

### Escenario A — El seed falló durante el deploy en Vercel

Causa más común: `DATABASE_URL` o `NEXT_PUBLIC_ASSETS_BASE_URL` incorrectas en el momento del build, o el IP del builder de Vercel no está en el whitelist de MongoDB Atlas.

1. Verificar variables de entorno en Vercel Settings → Environment Variables.
2. En MongoDB Atlas: Network Access → agregar `0.0.0.0/0` (permitir acceso desde cualquier IP) si el builder de Vercel no tiene IP fija.
3. Hacer redeploy: Vercel Dashboard → Deployments → "Redeploy".
4. Verificar build logs nuevamente.

### Escenario B — Re-ejecutar seeds manualmente

```bash
# Con .env configurado correctamente:
npm run seed:all           # todos los seeds (solo corre si hay menos de 5 docs)

# Seeds individuales (SOBRESCRIBEN el contenido existente de esa página):
npm run seed:home-page
npm run seed:amenidades-page
npm run seed:residencias-page
npm run seed:colaboradores-page
npm run seed:contacto-page
```

### Escenario C — Resetear contenido completamente y re-seedear

```javascript
// En MongoDB Shell — borra TODOS los documentos de page-content:
db.getCollection('page-content').deleteMany({})
```

```bash
# Luego re-seedear:
npm run seed:all
```

> Solo hacer esto si es intencional — cualquier edición hecha desde el admin se perderá permanentemente.

### Escenario D — Los seeds corrieron con la URL de CDN incorrecta

Todas las imágenes en el CMS apuntan al CDN equivocado. Ver `docs/image-hosting.md` — sección "Migración de URLs ya almacenadas en MongoDB" para las opciones disponibles.

Opción rápida (sin ediciones manuales previas): borrar `page-content` con `deleteMany({})` y re-seedear con la URL correcta.

---

## Diagnóstico rápido

| Síntoma | Causa probable | Acción |
|---|---|---|
| `/admin` muestra error 500 o pantalla en blanco | `PAYLOAD_SECRET` o `DATABASE_URL` incorrectos o ausentes | Verificar variables de entorno; revisar logs del servidor |
| El sitio muestra imágenes rotas | URLs de CDN incorrectas en MongoDB o `NEXT_PUBLIC_ASSETS_BASE_URL` mal configurada | Ver `docs/image-hosting.md` |
| El build falla con error en el paso de seed | `DATABASE_URL` sin acceso desde el entorno de build (whitelist de Atlas) | Agregar `0.0.0.0/0` en MongoDB Atlas → Network Access |
| Login en `/admin` falla con "Invalid credentials" | Usuario inexistente o contraseña incorrecta | Verificar en la colección `users`; resetear contraseña desde el admin con otro usuario |
| "Page Content" muestra menos de 5 documentos | Seeds no corrieron o fallaron parcialmente | Correr `npm run seed:all` manualmente |
| El formulario de contacto no envía leads | `GHL_API_KEY` o `GHL_LOCATION_ID` inválidos o expirados | Verificar credenciales de GoHighLevel en el dashboard de GHL |
| El mapa en /contacto no carga | `NEXT_PUBLIC_MAPBOX_TOKEN` inválido o expirado | Verificar y renovar el token en Mapbox |

---

## Arquitectura de referencia

**Stack:** Next.js 16 (App Router) + Payload CMS 3 montado en `/admin` + MongoDB Atlas + Vercel + AWS CloudFront

**Colecciones MongoDB:**

| Colección | Propósito |
|---|---|
| `users` | Autenticación del admin panel |
| `media` | Uploads de imágenes via admin panel |
| `page-content` | Contenido de las 5 páginas del sitio (bloque-based) |

**Archivos clave:**

| Archivo | Descripción |
|---|---|
| `src/payload.config.ts` | Configuración central de Payload (DB, secret, colecciones) |
| `src/collections/Users.ts` | Schema del usuario — auth habilitado, sin roles |
| `src/collections/PageContent.ts` | Colección de contenido con bloques condicionales por `pageType` |
| `scripts/seed-all.ts` | Orquestador de seeds — skip si ya hay 5 docs |
| `scripts/seed-{page}-page.ts` | Seeds individuales por página — siempre upsert |
| `docs/image-hosting.md` | Estrategia CDN y guía de migración de imágenes |

**Scripts npm relevantes:**

| Script | Comportamiento |
|---|---|
| `npm run seed:all` | Corre todos los seeds solo si hay menos de 5 documentos |
| `npm run seed:home-page` | Upsert del documento home (sobreescribe ediciones manuales) |
| `npm run seed:amenidades-page` | Upsert del documento amenidades |
| `npm run seed:residencias-page` | Upsert del documento residencias |
| `npm run seed:colaboradores-page` | Upsert del documento colaboradores |
| `npm run seed:contacto-page` | Upsert del documento contacto |
| `npm run vercel-build` | `seed:all && next build` — hook automático de Vercel |
