const staticCacheName = 'static-cache-v0';
const dynamicCacheName = 'dynamic-cache-v0';

const staticAssets = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './favicon.ico',
  './manifest/144x144.png',
];

self.addEventListener('install', async event => {
  const cache = await caches.open(staticCacheName);
  await cache.addAll(staticAssets);
  console.log('Service worker has been installed');
});

self.addEventListener('activate', async event => {
  const cachesKeys = await caches.keys();
  const checkKeys = cachesKeys.map(async key => {
    if (![staticCacheName, dynamicCacheName].includes(key)) {
      await caches.delete(key);
    }
  });
  await Promise.all(checkKeys);
  console.log('Service worker has been activated');
});

self.addEventListener('fetch', event => {
  console.log(`Trying to fetch ${event.request.url}`);
  event.respondWith(checkCache(event.request));
});

async function checkCache(req) {
  const cachedResponse = await caches.match(req);
  return cachedResponse || checkOnline(req);
}

async function checkOnline(req) {
  const cache = await caches.open(dynamicCacheName);
  try {
    const res = await fetch(req);
    await cache.put(req, res.clone());
    return res;
  } catch (error) {
    return await cache.match(req);
  }
}
