const CACHE_NAME = 'family-tree-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/family.json',
  '/manifest.json',
  "/icon/app-icon.png"
];

// Install event - cache assets
self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
  });
  
  // Activate event - cleanup old caches
  self.addEventListener("activate", (event) => {
    event.waitUntil(
      caches.keys().then((keys) =>
        Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
      )
    );
  });
  
  // Fetch event - serve from cache first
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  });
  
  