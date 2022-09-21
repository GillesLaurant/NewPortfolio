const staticGillesLaurant = "gilleslaurant-site";
const PREFIX = "V1";
const assets = [
  "/",
  "/index.html",
  "./assets/offline/pageOFF.html",
  "/favicon.ico",
  // "/assets/css/style.css",
  // "/assets/js/index.js",
  // "/assets/js/handles/handleMail.js",
  // "/assets/js/handles/handlerLang.js",
  // "/assets/js/handles/handlerNav.js",
  // "/assets/js/handles/handlerTheme.js",
  // "/assets/js/views/Contact.js",
  // "/assets/js/views/DetailsProject.js",
  // "/assets/js/views/Home.js",
  // "/assets/js/views/Projects.js",
  // "/assets/images/Gilou_192x128.jpg",
  // "/assets/images/Gilou_454x303.jpg",
  // "/assets/images/yes.gif",
  // "/assets/images/buttons/ButtonCloseX.svg",
  // "/assets/images/buttons/FlagFrenchButton_64.svg",
  // "/assets/images/buttons/FlagUK_64.svg",
  // "/assets/images/buttons/Moon_64.svg",
  // "/assets/images/buttons/Sun_64.svg",
  // "/assets/images/logos/ChartJS_64.svg",
  // "/assets/images/logos/EmailJS_64.svg",
  // "/assets/images/logos/GitHubW_64.svg",
  // "/assets/images/logos/Gsap_64.svg",
  // "/assets/images/logos/Hostinger_64.svg",
  // "/assets/images/logos/JS_64.svg",
  // "/assets/images/logos/Motion_64.svg",
  // "/assets/images/logos/MySQL_64.svg",
  // "/assets/images/logos/NodeJS_64.svg",
  // "/assets/images/logos/Oclock_64.svg",
  // "/assets/images/logos/OCR_64.svg",
  // "/assets/images/logos/PostgreSQL_64.svg",
  // "/assets/images/logos/React_64.svg",
  // "/assets/images/logos/Redux_64.svg",
  // "/assets/images/logos/Sass_64.svg",
  // "/assets/images/logos/SemanticUI_64.svg",
  // "/assets/images/logos/Sequelize_64.svg",
  // "/assets/images/logos/SocketIO_64.svg",
  // "/assets/images/logos/SwaggerUI_64.svg",
  // "/assets/images/mokups/myPortfolioDesk_192.svg",
  // "/assets/images/mokups/myPortfolioDeskMob_192.svg",
  // "/assets/images/mokups/myPortfolioMob_192.svg",
  // "/assets/images/mokups/newPortfolioDesk_192.svg",
  // "/assets/images/mokups/newPortfolioDeskMob_192.svg",
  // "/assets/images/mokups/newPortfolioMob_192.svg",
  // "/assets/images/mokups/ocryptoDesk_192.svg",
  // "/assets/images/mokups/ocryptoDeskMob_192.svg",
  // "/assets/images/mokups/ocryptoMob_192.svg",
  // "/assets/images/mokups/shapeartsDesk_192.svg",
  // "/assets/images/mokups/shapeartsDeskMob_192.svg",
  // "/assets/images/mokups/shapeartsMob_192.svg",
];

self.addEventListener("install", (installEvent) => {
  self.skipWaiting();
  installEvent.waitUntil(
    (async () => {
      const cache = await caches.open(PREFIX);
      cache.add(new Request("./assets/offline/pageOFF.html"));
    })()
  );
});

self.addEventListener("activate", (activeEvent) => {
  clients.claim;
  activeEvent.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (!key.includes(PREFIX)) {
            console.log("yes", key);
            caches.delete(key);
          }
          console.log(key);
        })
      );
    })()
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  console.log(PREFIX, fetchEvent.request.url, fetchEvent.request.mode);
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
          const cache = await caches.open(PREFIX);
          return await cache.match("./assets/offline/pageOFF.html");
        }
      })()
    );
  }
});
