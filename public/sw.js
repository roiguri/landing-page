// Minimal service worker for PWA requirements

// Install event
self.addEventListener('install', () => {
  console.log('Service worker installing...');
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('Service worker activating...');
  event.waitUntil(self.clients.claim());
});

// Basic fetch event (just pass through for now)
self.addEventListener('fetch', () => {
  // For now, just let requests pass through
  // You can add caching logic here later if needed
}); 