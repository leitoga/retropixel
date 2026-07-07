// Shared IndexedDB helper for RetroPixel product photos.
// Stores raw image Blobs client-side, keyed by their relative path (e.g. "images/foo-1.jpg"),
// so localStorage/productos.json only ever holds small text — never base64 image data.
window.ImagesDB = (function () {
  var DB_NAME = 'retropixel_images_db';
  var STORE = 'images';
  var dbPromise = null;

  function open() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise(function (resolve, reject) {
      var req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = function () {
        if (!req.result.objectStoreNames.contains(STORE)) {
          req.result.createObjectStore(STORE, { keyPath: 'name' });
        }
      };
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
    });
    return dbPromise;
  }

  function put(name, blob) {
    return open().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(STORE, 'readwrite');
        tx.objectStore(STORE).put({ name: name, blob: blob });
        tx.oncomplete = function () { resolve(); };
        tx.onerror = function () { reject(tx.error); };
      });
    });
  }

  function get(name) {
    return open().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(STORE, 'readonly');
        var req = tx.objectStore(STORE).get(name);
        req.onsuccess = function () { resolve(req.result ? req.result.blob : null); };
        req.onerror = function () { reject(req.error); };
      });
    });
  }

  function getAll() {
    return open().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(STORE, 'readonly');
        var req = tx.objectStore(STORE).getAll();
        req.onsuccess = function () { resolve(req.result || []); };
        req.onerror = function () { reject(req.error); };
      });
    });
  }

  function remove(name) {
    return open().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(STORE, 'readwrite');
        tx.objectStore(STORE).delete(name);
        tx.oncomplete = function () { resolve(); };
        tx.onerror = function () { reject(tx.error); };
      });
    });
  }

  return { put: put, get: get, getAll: getAll, remove: remove };
})();
