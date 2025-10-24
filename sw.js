const VERSION = 'v3';
const APP_CACHE = `healthflo-app-${VERSION}`;
const RUNTIME_CACHE = `healthflo-runtime-${VERSION}`;
const FONT_CACHE = `healthflo-fonts-${VERSION}`;
const OFFLINE_URL = 'offline.html';
const APP_SHELL = [
  './',
  './?utm_source=pwa',
  './index.html',
  './styles.css',
  './main.js',
  './manifest.webmanifest',
  './offline.html',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

const cachePutSafe = async (cacheName, request, response) => {
  if (!response || response.status !== 200 || response.type === 'opaque') return;
  const cache = await caches.open(cacheName);
  await cache.put(request, response.clone());
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(APP_CACHE);
      await cache.addAll(APP_SHELL);
      await self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => ![APP_CACHE, RUNTIME_CACHE, FONT_CACHE].includes(key))
          .map((key) => caches.delete(key))
      );
      if (self.registration.navigationPreload) {
        try {
          await self.registration.navigationPreload.enable();
        } catch (error) {
          console.warn('Navigation preload unavailable', error); // eslint-disable-line no-console
        }
      }
      await self.clients.claim();
    })()
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

const handleNavigation = async (event) => {
  try {
    const preload = await event.preloadResponse;
    if (preload) {
      await cachePutSafe(APP_CACHE, event.request, preload);
      return preload;
    }
    const networkResponse = await fetch(event.request);
    await cachePutSafe(APP_CACHE, event.request, networkResponse);
    return networkResponse;
  } catch (error) {
    const cached = await caches.match(event.request);
    if (cached) return cached;
    const offline = await caches.match(OFFLINE_URL);
    if (offline) return offline;
    throw error;
  }
};

const staleWhileRevalidate = async (request, cacheName) => {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const networkPromise = fetch(request)
    .then(async (response) => {
      await cachePutSafe(cacheName, request, response);
      return response.clone();
    })
    .catch(() => null);
  return cached || (await networkPromise) || fetch(request);
};

const cacheFirst = async (request, cacheName) => {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  await cachePutSafe(cacheName, request, response);
  return response;
};

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  if (request.mode === 'navigate') {
    event.respondWith(handleNavigation(event));
    return;
  }

  if (url.origin === self.location.origin) {
    if (request.destination === 'document') {
      event.respondWith(
        (async () => {
          try {
            const response = await fetch(request);
            await cachePutSafe(APP_CACHE, request, response);
            return response;
          } catch (error) {
            return (await caches.match(request)) || (await caches.match(OFFLINE_URL)) || Promise.reject(error);
          }
        })()
      );
      return;
    }
    event.respondWith(staleWhileRevalidate(request, RUNTIME_CACHE));
    return;
  }

  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(cacheFirst(request, FONT_CACHE));
    return;
  }

  event.respondWith(fetch(request));
});
