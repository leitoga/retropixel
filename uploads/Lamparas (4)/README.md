# Hikari · Lámparas 3D

Catálogo web de Hikari + Administrador para gestionar los productos.

## Archivos
- `index.html` — la página pública (lo que ve la gente). En GitHub Pages es la portada.
- `admin.html` — el Administrador para crear/editar/borrar/reordenar productos (abrilo vos).
- `support.js` — runtime necesario (no borrar).
- `productos.js` — la base de datos de productos (la genera el Administrador).
- `fotos/` — las fotos del catálogo.
- `README.md` — este archivo.

> **Importante:** estos archivos van todos **juntos en la misma carpeta**. No los separes.

## Cómo edito los productos
1. Abrí **`admin.html`**.
2. Creá, editá, borrá o reordená lámparas (arrastrándolas o con las flechas ▲▼).
   Cada lámpara tiene: nombre, kanji, significado, descripción, precio en efectivo,
   precio por transferencia, foto, temperatura de luz, intensidades, altura y conector.
3. Fotos (hasta **10 por producto**): **Subir fotos** (desde tu compu, podés elegir varias a la vez) o **Elegir de las existentes**. La 1ª es la principal; ordenalas con ‹ › y quitá con ×. En la web, los productos con más de una foto muestran flechas para pasar las imágenes.
4. Colores (hasta **10 de lámpara** y **10 de base** por producto): en la sección **Colores disponibles**, escribí el color en formato `#RRGGBB` y tocá **Agregar**; aparece como un circulito. Quitalos con la ×. En la web, el cliente elige un color de lámpara y uno de base, y van en la consulta de WhatsApp. Lo ya cargado arranca en blanco `#FFFFFF`.
5. Los cambios se guardan solos en tu navegador. Podés cerrar y seguir después.
6. Cuando termines, tocá **Descargar paquete** → baja `hikari-sitio.zip` con TODO actualizado.

## Cómo lo publico en GitHub
1. Descomprimí `hikari-sitio.zip` (o usá esta carpeta tal cual).
2. Subí **todo el contenido** a tu repositorio, reemplazando los archivos.
3. La primera vez: en el repo → **Settings → Pages** → *Source* = rama `main`, carpeta `/ (root)`. Guardá.
4. A los pocos minutos el sitio queda online en `https://TU-USUARIO.github.io/TU-REPO/`.

> Si solo cambiaste textos o precios (sin fotos nuevas), alcanza con subir el `productos.js`
> que baja el botón **Descargar productos.js**.

## Notas
- Los pedidos se envían por WhatsApp al **+54 9 11 7374-8313**. Para cambiarlo, reemplazá `5491173748313` en `index.html`.
- El Administrador (`admin.html`) también funciona online desde GitHub Pages, pero los pedidos públicos se hacen desde `index.html`.
