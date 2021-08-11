const staticCacheName = 'static-cache-v0';

const staticAssets = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './script.js',
  './data/first.js',
  './data/second.js',
  './favicon.ico',
  './manifest/144x144.png',
];

self.addEventListener('install', async event => {
  const cache = await caches.open(staticCacheName);
  await cache.addAll(staticAssets);
  console.log('Service worker has been installed');
});

self.addEventListener('activate', async event => {
  console.log('Service worker has been activated');
});

self.addEventListener('fetch', event => {
  console.log(`Trying to fetch ${event.request.url}`);
  event.respondWith(caches.match(event.request).then(cachedResponse => {
    return cachedResponse || fetch(event.request)
  }));
});
