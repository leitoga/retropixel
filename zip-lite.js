// Minimal dependency-free ZIP writer (store/no-compression method) for exporting
// a productos.json + images/ package straight from the browser.
window.ZipLite = (function () {
  var crcTable = null;
  function getCrcTable() {
    if (crcTable) return crcTable;
    crcTable = [];
    for (var n = 0; n < 256; n++) {
      var c = n;
      for (var k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
      crcTable[n] = c >>> 0;
    }
    return crcTable;
  }

  function crc32(bytes) {
    var table = getCrcTable();
    var crc = 0 ^ (-1);
    for (var i = 0; i < bytes.length; i++) {
      crc = (crc >>> 8) ^ table[(crc ^ bytes[i]) & 0xFF];
    }
    return (crc ^ (-1)) >>> 0;
  }

  function toBytes(data) {
    if (data instanceof Uint8Array) return Promise.resolve(data);
    if (data instanceof ArrayBuffer) return Promise.resolve(new Uint8Array(data));
    if (data instanceof Blob) return data.arrayBuffer().then(function (buf) { return new Uint8Array(buf); });
    return Promise.resolve(new TextEncoder().encode(String(data)));
  }

  function dosDateTime(d) {
    d = d || new Date();
    var time = ((d.getHours() & 0x1F) << 11) | ((d.getMinutes() & 0x3F) << 5) | ((Math.floor(d.getSeconds() / 2)) & 0x1F);
    var date = (((d.getFullYear() - 1980) & 0x7F) << 9) | (((d.getMonth() + 1) & 0xF) << 5) | (d.getDate() & 0x1F);
    return { time: time, date: date };
  }

  // files: [{ name: string, data: Uint8Array|ArrayBuffer|Blob|string }]
  async function build(files) {
    var dt = dosDateTime();
    var localParts = [];
    var centralParts = [];
    var offset = 0;

    for (var idx = 0; idx < files.length; idx++) {
      var f = files[idx];
      var nameBytes = new TextEncoder().encode(f.name);
      var data = await toBytes(f.data);
      var crc = crc32(data);
      var size = data.length;

      var lh = new Uint8Array(30 + nameBytes.length);
      var lv = new DataView(lh.buffer);
      lv.setUint32(0, 0x04034b50, true);
      lv.setUint16(4, 20, true);
      lv.setUint16(6, 0, true);
      lv.setUint16(8, 0, true);
      lv.setUint16(10, dt.time, true);
      lv.setUint16(12, dt.date, true);
      lv.setUint32(14, crc, true);
      lv.setUint32(18, size, true);
      lv.setUint32(22, size, true);
      lv.setUint16(26, nameBytes.length, true);
      lv.setUint16(28, 0, true);
      lh.set(nameBytes, 30);

      localParts.push(lh, data);

      var ch = new Uint8Array(46 + nameBytes.length);
      var cv = new DataView(ch.buffer);
      cv.setUint32(0, 0x02014b50, true);
      cv.setUint16(4, 20, true);
      cv.setUint16(6, 20, true);
      cv.setUint16(8, 0, true);
      cv.setUint16(10, 0, true);
      cv.setUint16(12, dt.time, true);
      cv.setUint16(14, dt.date, true);
      cv.setUint32(16, crc, true);
      cv.setUint32(20, size, true);
      cv.setUint32(24, size, true);
      cv.setUint16(28, nameBytes.length, true);
      cv.setUint16(30, 0, true);
      cv.setUint16(32, 0, true);
      cv.setUint16(34, 0, true);
      cv.setUint16(36, 0, true);
      cv.setUint32(38, 0, true);
      cv.setUint32(42, offset, true);
      ch.set(nameBytes, 46);

      centralParts.push(ch);
      offset += lh.length + data.length;
    }

    var centralSize = centralParts.reduce(function (a, p) { return a + p.length; }, 0);
    var centralOffset = offset;

    var end = new Uint8Array(22);
    var ev = new DataView(end.buffer);
    ev.setUint32(0, 0x06054b50, true);
    ev.setUint16(4, 0, true);
    ev.setUint16(6, 0, true);
    ev.setUint16(8, files.length, true);
    ev.setUint16(10, files.length, true);
    ev.setUint32(12, centralSize, true);
    ev.setUint32(16, centralOffset, true);
    ev.setUint16(20, 0, true);

    var parts = localParts.concat(centralParts, [end]);
    return new Blob(parts, { type: 'application/zip' });
  }

  return { build: build };
})();
