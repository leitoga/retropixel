// ============================================================
//  HIKARI · Base de datos de productos
//  Editá este archivo desde admin.html (NO a mano salvo que sepas).
//  Luego subí este productos.js (y las fotos nuevas) a GitHub.
// ============================================================
//  Campos de cada producto:
//   nombre        -> nombre (ej. "Nami")
//   kanji         -> japonés, va en el título y sobre la foto (ej. "波")
//   significado   -> subtítulo corto (ej. "Ola")
//   descripcion   -> texto descriptivo
//   precioEfectivo / precioTransferencia -> números
//   foto          -> ruta a la imagen (ej. "fotos/Lampara-01.jpg")
//   luz           -> 'calida' | 'fria' | 'ambas'
//   intensidades  -> número (0 = no se muestra)
//   conector      -> 'usb' | 'enchufe'
//   alturaCm      -> número en cm (0 = no se muestra)
// ============================================================

window.HIKARI_PRODUCTOS = [
  { nombre:"Nami", kanji:"波", significado:"Ola", descripcion:"Formas ondulantes que fluyen como el mar en calma", precioEfectivo:50000, precioTransferencia:55000, foto:"fotos/Lampara-15.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
  { nombre:"Tsutsu", kanji:"筒", significado:"Cilindro", descripcion:"Líneas verticales puras, elegancia minimalista zen", precioEfectivo:50000, precioTransferencia:55000, foto:"fotos/Lampara-02.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
  { nombre:"Tsubo", kanji:"壺", significado:"Vasija", descripcion:"Forma de ánfora inspirada en la cerámica japonesa tradicional", precioEfectivo:50000, precioTransferencia:55000, foto:"fotos/Lampara-12.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
  { nombre:"Awabi", kanji:"鮑", significado:"Abulón", descripcion:"Capas suaves apiladas como conchas del océano", precioEfectivo:50000, precioTransferencia:55000, foto:"fotos/Lampara-05.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
  { nombre:"Biwa", kanji:"琵琶", significado:"Pera", descripcion:"Curvas generosas que evocan frutos maduros de otoño", precioEfectivo:50000, precioTransferencia:55000, foto:"fotos/Lampara-13.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
  { nombre:"Fuji", kanji:"藤", significado:"Glicinia", descripcion:"Espiral ascendente como las flores de glicinia en primavera", precioEfectivo:50000, precioTransferencia:55000, foto:"fotos/Lampara-07.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
  { nombre:"Kaze", kanji:"風", significado:"Viento", descripcion:"Estrías diagonales que capturan el movimiento del viento", precioEfectivo:40000, precioTransferencia:45000, foto:"fotos/Lampara-16.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
  { nombre:"Tama", kanji:"玉", significado:"Esfera", descripcion:"Espiral suave y redonda, luminosidad perfecta y envolvente", precioEfectivo:40000, precioTransferencia:45000, foto:"fotos/Lampara-09.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
  { nombre:"Yuki", kanji:"雪", significado:"Nieve", descripcion:"Textura delicada que recuerda a copos de nieve cristalizados", precioEfectivo:40000, precioTransferencia:45000, foto:"fotos/Lampara-14.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
  { nombre:"Take", kanji:"竹", significado:"Bambú", descripcion:"Segmentos circulares apilados como cañas de bambú", precioEfectivo:40000, precioTransferencia:45000, foto:"fotos/Lampara-04.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
  { nombre:"Hyotan", kanji:"瓢箪", significado:"Calabaza", descripcion:"Doble esfera unida, símbolo de buena fortuna en Japón", precioEfectivo:40000, precioTransferencia:45000, foto:"fotos/Lampara-11.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
  { nombre:"Kame", kanji:"瓶", significado:"Jarra", descripcion:"Silueta clásica de jarra, estrías verticales radiantes", precioEfectivo:30000, precioTransferencia:35000, foto:"fotos/Lampara-03.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
  { nombre:"Kishi", kanji:"岸", significado:"Orilla", descripcion:"Facetas geométricas que brillan como piedras en la orilla", precioEfectivo:30000, precioTransferencia:35000, foto:"fotos/Lampara-17.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
  { nombre:"Nori", kanji:"海苔", significado:"Alga marina", descripcion:"Espiral ondulado de líneas horizontales entrelazadas", precioEfectivo:30000, precioTransferencia:35000, foto:"fotos/Lampara-06.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
  { nombre:"Hachi", kanji:"蜂", significado:"Abeja", descripcion:"Patrón hexagonal que evoca los panales de la naturaleza", precioEfectivo:30000, precioTransferencia:35000, foto:"fotos/Lampara-10.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
  { nombre:"Kairo", kanji:"回廊", significado:"Corredor", descripcion:"Ondas verticales que crean un ritmo arquitectónico profundo", precioEfectivo:30000, precioTransferencia:35000, foto:"fotos/Lampara-08.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
  { nombre:"Tobi", kanji:"飛び", significado:"Vuelo", descripcion:"Facetas anguladas que capturan la luz como alas en movimiento", precioEfectivo:30000, precioTransferencia:35000, foto:"fotos/Lampara-18.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
  { nombre:"Iwa", kanji:"岩", significado:"Roca", descripcion:"Textura irregular que imita la belleza de las rocas pulidas", precioEfectivo:30000, precioTransferencia:35000, foto:"fotos/Lampara-20.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
  { nombre:"Kagami", kanji:"鏡", significado:"Espejo", descripcion:"Diamantes geométricos que reflejan la luz en todas direcciones", precioEfectivo:30000, precioTransferencia:35000, foto:"fotos/Lampara-19.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
  { nombre:"Tsubomi", kanji:"蕾", significado:"Capullo", descripcion:"Facetas suaves como pétalos de una flor a punto de abrirse", precioEfectivo:30000, precioTransferencia:35000, foto:"fotos/Lampara-01.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
  { nombre:"Umi", kanji:"海", significado:"Mar", descripcion:"Líneas horizontales en espiral que fluyen como olas del océano", precioEfectivo:30000, precioTransferencia:35000, foto:"fotos/Lampara-21.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
  { nombre:"Shizen", kanji:"自然", significado:"Naturaleza", descripcion:"Rombos puros que evocan los patrones de la naturaleza japonesa", precioEfectivo:30000, precioTransferencia:35000, foto:"fotos/Lampara-22.jpg", luz:"ambas", intensidades:3, conector:"usb", alturaCm:20 },
];

// Aviso al sitio de que los datos están listos (por si carga tarde)
try { window.dispatchEvent(new Event('hikari-productos')); } catch (e) {}
