importScripts('assets/vendor/workbox-6.3.0/workbox-sw.js');

workbox.setConfig({
  debug: false,
  modulePathPrefix: 'assets/vendor/workbox-6.3.0/'
});

workbox.precaching.precacheAndRoute([
  {url: 'index.html', revision: '03.14.22.1'},
  {url: 'manifest.json', revision: '02.10.22.1'},
  {url: 'assets/js/app.js', revision: '03.11.22.1'},
  {url: 'assets/css/app.css', revision: '03.14.22.1'},
  {url: 'assets/img/apple-touch-icon.png', revision: '10.01.21.1'},
  {url: 'assets/img/favicon-32x32.png', revision: '10.01.21.1'},
  {url: 'assets/img/favicon-16x16.png', revision: '10.01.21.1'},
  {url: 'assets/vendor/icomoon/fonts/icomoon.ttf', revision: '10.01.21.1'},
  {url: 'assets/vendor/icomoon/fonts/icomoon.woff', revision: '10.01.21.1'},
  {url: 'assets/vendor/sqljs-1.6.2/sql-wasm.js', revision: '10.01.21.1'},
  {url: 'assets/vendor/sqljs-1.6.2/sql-wasm.wasm', revision: '10.01.21.1'},
  {url: 'assets/vendor/bootstrap-5.1.3/css/bootstrap.min.css', revision: '02.22.22'},
  {url: 'assets/vendor/jquery-3.6.0.min.js', revision: '2.16.22.1'},
  {url: 'assets/vendor/bootstrap-5.1.3/js/bootstrap.bundle.min.js', revision: '02.22.22'},
  {url: 'assets/vendor/leaflet-1.7.1/images/layers.png', revision: '10.01.21.1'},
  {url: 'assets/vendor/leaflet-1.7.1/images/layers-2x.png', revision: '10.01.21.1'},
  {url: 'assets/vendor/leaflet-1.7.1/images/marker-icon.png', revision: '10.01.21.1'},
  {url: 'assets/vendor/leaflet-1.7.1/images/marker-icon-2x.png', revision: '10.01.21.1'},
  {url: 'assets/vendor/leaflet-1.7.1/images/marker-shadow.png', revision: '10.01.21.1'},
  {url: 'assets/vendor/leaflet-1.7.1/leaflet.css', revision: '10.01.21.1'},
  {url: 'assets/vendor/leaflet-1.7.1/leaflet.js', revision: '10.01.21.1'},
  {url: 'assets/vendor/leaflet-locatecontrol-0.74.0/L.Control.Locate.min.css', revision: '10.01.21.1'},
  {url: 'assets/vendor/leaflet-locatecontrol-0.74.0/L.Control.Locate.min.js', revision: '10.01.21.1'},
  {url: 'assets/vendor/leaflet-mbtiles/Leaflet.TileLayer.MBTiles.js', revision: '10.01.21.1'},
  {url: 'assets/vendor/csv2geojson-5.1.1/csv2geojson.min.js', revision: '11.05.21.1'},
  {url: 'data/ski_map.mbtiles', revision: '03.17.22.1'},
  {url: 'data/bike_map.mbtiles', revision: '03.17.22.1'},
  {url: 'data/interactive_points.geojson', revision: '03.17.22.1'}
], {
  // Ignore all URL parameters.
  ignoreURLParametersMatching: [/.*/]
});