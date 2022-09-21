const staticGL = "gilleslaurant-pwa";

// SW INSTALL
self.addEventListener("install", (installEvent) => {
  self.skipWaiting();
  installEvent.waitUntil(
    (async () => {
      const cache = await caches.open(staticGL);
      cache.add(new Request("./assets/offline/pageOFF.html"));
    })()
  );
});

// SW ACTIVE
self.addEventListener("activate", (activeEvent) => {
  // Immediatly active
  clients.claim;
  // Delete old sw
  activeEvent.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (!key.includes(staticGL)) {
            caches.delete(key);
          }
        })
      );
    })()
  );
});

// SW FETCH
self.addEventListener("fetch", (fetchEvent) => {
  if (fetchEvent.request.mode === "navigate") {
    fetchEvent.respondWith(
      (async () => {
        try {
          const preloadResponse = await fetchEvent.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }
          return await fetch(fetchEvent.request);
        } catch (error) {
          // 404
          const cache = await caches.open(staticGL);
          return await cache.match("./assets/offline/pageOFF.html");
        }
      })()
    );
  }
});
