self.addEventListener('install', function(event) {
  console.log('Service Worker installed');
});
self.addEventListener('fetch', function(event) {
  // Handle fetch events here if needed
});
