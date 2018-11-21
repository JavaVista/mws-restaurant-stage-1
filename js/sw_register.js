/**
 * Register Service Worker file.
 */
if (navigator.serviceWorker) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('../sw_site.js')
            .then(reg => console.log(`Service Worker: Registered, scope is ${reg.scope}`))
            .catch(err => console.log(`Service Worker: Failed, ${err}`));
    })
  }
