importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(
  new RegExp("https://api.hitriva.com"), // YOUR API DOMAIN
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "images",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
);

// Cache the Google Fonts webfont files with a cache first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365
      })
    ]
  })
);

workbox.routing.registerNavigationRoute("/index.html");

workbox.precaching.precacheAndRoute([
  {
    "url": "public/javascript/nomodule/defineProperty-556b7d97.js",
    "revision": "10d59e91b8b8f42090abc102032d359f"
  },
  {
    "url": "public/javascript/nomodule/Forgot-e9a62cb9.js",
    "revision": "ac0d448d2400a29590c17eeb4484fd21"
  },
  {
    "url": "public/javascript/nomodule/Home-84a74241.js",
    "revision": "1e45e6db7d57a9bce33e415ac2896edd"
  },
  {
    "url": "public/javascript/nomodule/index-d1b5633b.js",
    "revision": "3451db247f0197cda3bab28441af55f3"
  },
  {
    "url": "public/javascript/nomodule/index.js",
    "revision": "41276d1cd30a5105b967dd9cd1fcc172"
  },
  {
    "url": "public/javascript/nomodule/Login-93bbc018.js",
    "revision": "beb8c0648d9ba31761cbd60e58eca649"
  },
  {
    "url": "public/javascript/nomodule/Register-a82c3759.js",
    "revision": "7732e2a5533a35c6de109d39e29ce30a"
  },
  {
    "url": "index.html",
    "revision": "51db616a111817cc73509b0ffeccd092"
  },
  {
    "url": "public/css/styles.css",
    "revision": "b7cfefd355437682d51212d95fcbe5dd"
  },
  {
    "url": "public/images/icons/icon-128x128.png",
    "revision": "0f39fa8ac56ffb23a8c9ca78e151d458"
  },
  {
    "url": "public/images/icons/icon-144x144.png",
    "revision": "b62f10fd7bec5d0ad2f4c54920873a67"
  },
  {
    "url": "public/images/icons/icon-152x152.png",
    "revision": "1fdbc0018a34b339ff0c011cb0c2c7f7"
  },
  {
    "url": "public/images/icons/icon-192x192.png",
    "revision": "8b714736d5481ca4f656789a81b8ee3d"
  },
  {
    "url": "public/images/icons/icon-384x384.png",
    "revision": "60b158338596b018884b9b4478d711dc"
  },
  {
    "url": "public/images/icons/icon-512x512.png",
    "revision": "35249da005b7936f39264fa1cba0753b"
  },
  {
    "url": "public/images/icons/icon-72x72.png",
    "revision": "c8d30f7e823fc68819646b9dc8ec3a0c"
  },
  {
    "url": "public/images/icons/icon-96x96.png",
    "revision": "015cf5ce37d9b61f9258d848faa3a975"
  },
  {
    "url": "template.html",
    "revision": "22b3b5f45a3a450989177ec27b0bd5d5"
  }
]);

workbox.googleAnalytics.initialize({
  parameterOverrides: {
    cd1: "offline"
  },
  hitFilter: params => {
    const queueTimeInSeconds = Math.round(params.get("qt") / 1000);
    params.set("cm1", queueTimeInSeconds);
  }
});
