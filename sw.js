// Service Worker for Tyre Warranty PWA
var CACHE = "tyre-warranty-v3";
var ASSETS = [
  "/Member_Scanner/",
  "/Member_Scanner/index.html",
  "/Member_Scanner/manifest.json",
  "/Member_Scanner/icon-192.png",
  "/Member_Scanner/icon-512.png"
];

// Install — cache assets
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(c) { return c.addAll(ASSETS); })
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener("activate", function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

// Fetch — serve from cache, fall back to network
self.addEventListener("fetch", function(e) {
  // Don't cache API calls
  if (e.request.url.includes("script.google.com") ||
      e.request.url.includes("googleapis.com") ||
      e.request.url.includes("drive.google.com")) {
    return;
  }
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      return cached || fetch(e.request);
    })
  );
});
