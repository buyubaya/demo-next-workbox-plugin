self.addEventListener("push", (event) => {
  const eventData = event.data;

  console.log(22222, eventData.text());
  self.registration.showNotification(
    "HAHAHA",
    {
      body: "HELLO TEST",
      icon: "https://developers.google.com/web/images/web-fundamentals-icon192x192.png"
    }
  );
});


// workbox.core.skipWaiting();
// workbox.core.clientsClaim();


self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


// workbox.routing.registerRoute(/icons-(192|512).png$/, new workbox.strategies.CacheFirst(), 'GET');
// workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');