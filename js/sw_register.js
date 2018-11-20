/**
 * Register Service Worker file.
 */
if (navigator.serviceWorker) {
    navigator.serviceWorker
        .register('../sw.js')
        .then(reg => console.log(`Service Worker: Registered, scope is ${reg.scope}`))
        .catch(err => console.log(`Service Worker: Failed, ${err}`));

  }

