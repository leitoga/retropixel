# RetroPixel · Tienda friki &amp; otaku

Catálogo web de RetroPixel + Administrador para gestionar los productos.

## Archivos
- `index.html` — redirige a la tienda pública. En GitHub Pages es la portada.
- `RetroPixel.dc.html` — la tienda pública (lo que ve la gente).
- `Admin.dc.html` — el Administrador para crear/editar/borrar/duplicar productos (abrilo vos).
- `support.js` — runtime necesario (no borrar).
- `images-db.js` / `zip-lite.js` — helpers necesarios (no borrar).
- `productos.js` — la base de datos de productos (la genera el Administrador).
- `images/` — las fotos del catálogo.
- `README.md` — este archivo.

> **Importante:** estos archivos van todos **juntos en la misma carpeta**. No los separes.

## Cómo edito los productos
1. Abrí **`Admin.dc.html`** (con un PIN que vos definís la primera vez).
2. Creá, editá, duplicá, borrá o reordená productos.
   Cada producto tiene: título, categorías, descripción, hasta 15 fotos, precio minorista,
   mayorista y mayorista gold (automáticos o manuales), y hasta 5 atributos personalizados (talle, color, etc).
3. Los cambios se guardan solos en tu navegador mientras trabajás.
4. Cuando termines, tocá **📦 Descargar paquete (.zip)** → baja un zip con TODO el sitio actualizado
   (productos.js + fotos nuevas + los archivos de la web).

## Cómo lo publico en GitHub
1. Descomprimí el `.zip` (o usá esta carpeta tal cual).
2. Subí **todo el contenido** a tu repositorio, reemplazando los archivos.
3. La primera vez: en el repo → **Settings → Pages** → *Source* = rama `main`, carpeta `/ (root)`. Guardá.
4. A los pocos minutos el sitio queda online en `https://TU-USUARIO.github.io/TU-REPO/`.

> Si solo cambiaste textos o precios (sin fotos nuevas), alcanza con subir el `productos.js`
> que baja el botón **⬇ Descargar productos.js**.

## Notas
- Los pedidos se envían por WhatsApp al **11 7374-3813**. Para cambiarlo, buscá el número en `RetroPixel.dc.html`.
- Mayorista automático al superar $100.000 **y** llevar 5+ productos; Gold al superar $300.000 **y** llevar 10+ productos.
- El Administrador también funciona online desde GitHub Pages, pero abrilo solo vos (tiene PIN).
