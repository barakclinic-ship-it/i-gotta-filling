// Minimal service worker — its only job is to satisfy Chrome's installability
// requirement so "Install app" gives a standalone window (no address bar,
// no Chrome badge on the icon). It doesn't cache anything; every request
// just passes straight through to the network as usual.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
