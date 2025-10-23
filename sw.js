const CACHE_NAME = 'family-tree-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/family.json',
  '/manifest.json'
  // add icons if present, e.g. '/icons/icon-192.png'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', evt => {
  evt.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(res => res || fetch(evt.request))
  );
});

  
  