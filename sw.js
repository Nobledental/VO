const CACHE_NAME = 'healthflo-app-v2';
const OFFLINE_URL = 'offline.html';
const APP_SHELL = [
  './',
  './index.html',
  './styles.css',
  './main.js',
  './manifest.webmanifest',
  './offline.html',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.map((key) => (key !== CACHE_NAME ? caches.delete(key) : Promise.resolve())))
      )
      .then(() => self.clients.claim())
  );
});

const fromNetwork = async (request) => {
  const response = await fetch(request);
  if (!response || response.status !== 200 || response.type === 'opaque') {
    return response;
  }
  const cache = await caches.open(CACHE_NAME);
  await cache.put(request, response.clone());
  return response;
};

const handleFetch = async (request) => {
  const url = new URL(request.url);

  if (request.mode === 'navigate') {
    try {
      return await fromNetwork(request);
    } catch (error) {
      return (await caches.match(OFFLINE_URL)) || (await caches.match(request)) || Promise.reject(error);
    }
  }

  if (url.origin === self.location.origin) {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      return await fromNetwork(request);
    } catch (error) {
      const offline = await caches.match(OFFLINE_URL);
      if (offline && request.destination === 'document') return offline;
      return cached || Promise.reject(error);
    }
  }

  return fetch(request);
};

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(handleFetch(event.request));
});
