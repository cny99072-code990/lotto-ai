const CACHE_NAME = 'lotto-ai-app-v2';
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'])));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', e => {
  const url = e.request.url;
  if (url.includes('smok95.github.io/lotto/results/')) {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
    return;
  }
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request)));
});
