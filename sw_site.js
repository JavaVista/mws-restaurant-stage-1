const cacheID = 'static-v1';

/**
 * Call Install event.
 */
self.addEventListener('install', e => {
  console.log(`Service Worker: Installed - event type ${e.type}`);
});

/**
 * Call Activate event and remove old caches
 */
self.addEventListener('activate', e => {
  console.log(`Service Worker: Activated - event type ${e.type}`);
  e.waitUntil(
    caches.keys().then(cacheIDs => {
      return Promise.all(
        cacheIDs.map(cache => {
          if (cache !== cacheID) {
            console.log('Service Worker: Deleting old cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

/**
 * Call Fetch event, make clone of response, open cache & add response to cache
 */
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const cloneRes = res.clone();
        caches.open(cacheID).then(cache => {
          cache.put(e.request, cloneRes);
        });
        return res;
      })
      .catch(err => caches.match(e.request).then(res => res))
  );
});
