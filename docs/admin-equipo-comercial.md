# Guía de edición de contenido — Panel Administrativo Emana

Esta guía es para el equipo comercial que edita los textos del sitio web de Emana. No necesitas saber programar para usarla.

---

## ¿Qué puedes editar en este panel?

El panel administrativo te permite modificar los textos que aparecen en el sitio sin necesidad de contactar al equipo de TI. Los cambios se reflejan en el sitio **inmediatamente** después de guardar.

El sitio tiene **5 páginas editables**, cada una organizada en **bloques** — piensa en cada bloque como una sección de la página (un título, una descripción, una lista de elementos). Solo editas el texto dentro de los bloques que ya existen; no puedes agregar ni eliminar bloques por tu cuenta.

---

## Cómo acceder al panel

1. Abre tu navegador (Chrome, Safari, Edge, etc.).
2. Ve a la dirección: `https://[url-del-sitio]/admin`
3. Ingresa tu correo electrónico y contraseña.
4. Haz clic en **"Login"**.

> **Si olvidaste tu contraseña:** Comunícate con el equipo de TI — el panel no tiene recuperación automática de contraseña. No compartas tu acceso con otros; cada persona debe tener el suyo.

---

## Cómo navegar a una página

1. Una vez dentro del panel, mira el menú lateral izquierdo.
2. Haz clic en **"Page Content"** (o "Contenido de página").
3. Aparecerá una lista con exactamente **5 documentos** — uno por cada página del sitio.
4. Haz clic en el documento que quieras editar.

> No elimines ninguno de estos 5 documentos.

---

## Cómo editar un bloque de contenido

1. Dentro del documento de la página, desplázate hacia abajo hasta la sección de bloques.
2. Verás una lista con los bloques de esa página. Cada uno tiene un encabezado con su nombre.
3. Haz clic en el bloque para expandirlo y ver sus campos.
4. Modifica el texto en los campos que correspondan.
5. Cuando termines **todos** los cambios en esa página, sube al inicio y haz clic en el botón azul **"Save"**.

> **Tip:** Si cometiste un error antes de guardar, cierra la pestaña sin guardar y vuelve a intentarlo — los cambios no se habrán aplicado.

> **Advertencia:** Si ya guardaste algo incorrecto, avisa al equipo de TI de inmediato para que lo corrijan.

---

## Campos que NO debes tocar

Dentro de cada bloque existen campos técnicos que **no debes modificar**. Si los cambias accidentalmente, el sitio puede mostrar imágenes rotas o errores visuales.

| Campo | Qué es | Por qué no tocarlo |
|---|---|---|
| `src`, `imageSrc`, `coverSrc`, `bgSrc`, `galleryImageSrc` | URL (dirección web) de las imágenes | Si la cambias, la imagen desaparece del sitio |
| `blurData`, `imageBlurData`, `coverBlurData`, `blurDataURL`, `galleryImageBlurData` | Código muy largo que genera el efecto borroso de carga de imágenes | Es código interno — cualquier cambio rompe el efecto de carga |
| `icon` | Código del ícono que aparece junto al texto | Es código SVG — si lo modificas el ícono desaparece |
| `titleFont` | Controla el estilo de la tipografía | Modificarlo altera el diseño visual de la página |
| `buttonHref` | La dirección a la que lleva un botón al hacer clic | Consulta con TI antes de cambiar |
| `latitude` y `longitude` | Las coordenadas del pin en el mapa del showroom | Solo cambiar si el showroom se mudó, y verificar con TI |
| `logoSrc` | Dirección del logo de cada colaborador | Si la cambias, el logo desaparece |

> **Si tocaste uno de estos campos sin querer, NO guardes.** Cierra la pestaña y vuelve a intentarlo. Si ya guardaste, avisa a TI.

---

## Páginas y sus campos editables

---

### Página de inicio (Home)

Es la primera página que ven los visitantes. Tiene 9 bloques.

| Bloque | Campos que puedes editar | Notas |
|---|---|---|
| **Coverpage** | `alt` | Descripción de la imagen de portada para accesibilidad |
| **Oasis** | `title`, `description` | Sección introductoria con título y párrafo |
| **Features** | Dentro de cada ítem: `title`, `description` | No tocar el campo `icon` |
| **Divisor** | — | Es un separador visual, no tiene campos editables |
| **Location** | `title`, `description`; dentro de cada punto importante: solo `description` | Ver aviso abajo |
| **Amenities** | `title`, `description`, `linkText`; dentro de cada amenidad: `name`, `description` | No tocar `imageSrc`, `imageAlt`, `imageBlurData` |
| **Units Available** | `title`, `buttonTitle`, `headerDescription`, `footerDescription` | |
| **Brochure** | `title`, `description` | No tocar `titleFont` |
| **Appointment** | `title`, `description` | No tocar `coverImage` ni `blurDataURL` |

> **Aviso — bloque Location:** El campo `description` contiene etiquetas como `<br>`. Estas son instrucciones de salto de línea — si las eliminas, el texto aparecerá todo en un solo bloque sin separaciones. Consérvalo tal como está a menos que quieras cambiar la estructura del párrafo.

---

### Amenidades

Muestra todas las amenidades del proyecto. Tiene 6 bloques.

| Bloque | Campos que puedes editar | Notas |
|---|---|---|
| **AmenidadesCoverpage** | `title`, `subtitle`, `buttonTitle` | No tocar `buttonHref`, imágenes ni blurData |
| **AmenitiesMainSection** | Dentro de cada amenidad: `title`, `description` | No tocar `imageSrc`, `imageAlt`, `imageBlurData`, ni `applyGrillDeckZoom` |
| **AmenitiesGallerySection** | Dentro de cada amenidad: `title`, `description`, `galleryDescription` | No tocar ningún campo de imagen |
| **Divisor** | — | Separador visual sin campos editables |
| **Brochure** | `title`, `description` | |
| **Appointment** | `title`, `description` | |

---

### Residencias

Presenta los tipos de unidades disponibles. Es la página con más bloques (11).

| Bloque | Campos que puedes editar | Notas |
|---|---|---|
| **ResidenciasCoverpage** | `title`, `subtitle`, `buttonTitle` | No tocar `buttonHref` ni imágenes |
| **ResidenciasFeatures** | Dentro de cada ítem: `text` | Lista de características del proyecto |
| **ResidenciasPropertyType** | Sección Apartamentos: `title`, `description`, `buttonText`; Sección Villas: `title`, `description`, `buttonText` | No tocar las imágenes de fondo |
| **ResidenciasApartmentSection** | `title`, `description`; dentro de cada feature: `text` | No tocar la imagen |
| **ResidenciasVillasSection** | `title`, `description`; dentro de cada feature: `text` | No tocar la imagen |
| **ResidenciasHero** | `title`, `description` | No tocar la imagen de fondo |
| **ResidenciasPanoramicPhoto** | `alt` | Solo el texto alternativo de accesibilidad; no tocar `src` ni `blurData` |
| **Units Available** | `title`, `buttonTitle`, `headerDescription`, `footerDescription` | |
| **Divisor** | — | Separador visual sin campos editables |
| **Brochure** | `title`, `description` | |
| **Appointment** | `title`, `description` | |

---

### Colaboradores

Presenta a los despachos y empresas detrás del proyecto.

| Bloque | Campos que puedes editar | Notas |
|---|---|---|
| **ColaboradoresCoverpage** | `title`, `subtitle` | No tocar la imagen de portada ni blurData |
| **ColaboradoresList** | Dentro de cada colaborador: `name`, `description` | Ver aviso abajo. No tocar `imageSrc`, `imageAlt`, `imageBlurData`, `logoSrc` |
| **Brochure** | `title`, `description` | |
| **Appointment** | `title`, `description` | |

> **Aviso — ColaboradoresList:** Las descripciones de los colaboradores contienen saltos de párrafo internos. Si ves que el texto en el campo está separado en varias líneas, respeta esa separación al editar — de lo contrario el texto aparecerá todo junto en el sitio.

---

### Contacto

Página con la información del showroom y el formulario de cita.

| Bloque | Campos que puedes editar | Notas |
|---|---|---|
| **ContactoHeader** | `title`, `subtitle` | Encabezado principal de la página |
| **ContactoShowroom** | `title`, `description`, `address`, `whatsapp`, `hours` | Ver avisos abajo |
| **Appointment** | `title`, `description` | |

> **Aviso — ContactoShowroom:** El campo `address` puede contener saltos de línea para formatear bien la dirección. Escríbela en varias líneas si la actualizas.

> **Aviso — Coordenadas del mapa:** Los campos `latitude` y `longitude` controlan el pin en el mapa. Si el showroom cambia de dirección, coordina con TI para actualizar también las coordenadas.

---

## Preguntas frecuentes

**¿Cada cuánto se actualizan los cambios en el sitio?**
Inmediatamente después de hacer clic en "Save". No es necesario hacer nada más.

**¿Puedo agregar o eliminar bloques?**
No. Los bloques están predefinidos por el equipo técnico. Solo edita el contenido dentro de los bloques existentes.

**¿Puedo añadir nuevas amenidades o colaboradores al listado?**
El sistema lo permite técnicamente, pero es mejor coordinar con TI primero — las imágenes también deben estar disponibles en el sistema para que se vean correctamente.

**¿Qué pasa si guardo algo mal?**
Avisa al equipo de TI. El sistema guarda el historial de cambios y es posible recuperar versiones anteriores.

**¿Puedo acceder desde el celular?**
Sí, el panel funciona en móvil, pero se recomienda usarlo desde una computadora para mayor comodidad al editar textos largos.

**¿Por qué no puedo iniciar sesión?**
Verifica que tu email y contraseña estén correctos. Si el problema persiste, contacta a TI para que revisen tu cuenta.
