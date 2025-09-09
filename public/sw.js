if (!self.define) {
  let e,
    s = {};
  const n = (n, t) => (
    (n = new URL(n + '.js', t).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (t, i) => {
    const a =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[a]) return;
    let c = {};
    const r = (e) => n(e, a),
      o = { module: { uri: a }, exports: c, require: r };
    s[a] = Promise.all(t.map((e) => o[e] || r(e))).then((e) => (i(...e), c));
  };
}
define(['./workbox-e9849328'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: '17b4fa44597b198f5b023b4cb66a6815',
        },
        {
          url: '/_next/static/BrgJt6pJ-PVZ68OW8l_JO/_buildManifest.js',
          revision: '4c927fd72d5a6575d933508433c222bc',
        },
        {
          url: '/_next/static/BrgJt6pJ-PVZ68OW8l_JO/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/164-dfa355c9657b2a9f.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/249-32c42f32f69d4b19.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/277-5673314bfd435897.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/306-b4e89c2c0a19d922.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/3e4c56fe-85b11da11f041112.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/482-608ea355031ca4e6.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/56-05a3cf7d0bc2c2dd.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/568-bd875b4a8b5a3b66.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/766-c632af3d0f948aee.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/7b40a773-abc3730b8c5004c3.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/861b9fbb-477a40e817318267.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-bdc55ac481815c53.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/app/admin/page-fd7e9d1861ab40ef.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/app/douban/page-989d6f3106c1b8c6.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/app/layout-2200d33174e519bb.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/app/login/page-7390eba3eaf2603d.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/app/page-f68b242766442b1a.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/app/play/page-5587348c15323acf.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/app/search/page-ae6d5244c15ddc32.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/app/warning/page-08f23afea9f531c6.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/framework-6e06c675866dc992.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/main-app-2c026f3436ccc144.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/main-c2502d4e1da9cd39.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/pages/_app-57dfd8b932a4c88f.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/pages/_error-e0f3ec5ddd53197e.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-5629d35757da2aec.js',
          revision: 'BrgJt6pJ-PVZ68OW8l_JO',
        },
        {
          url: '/_next/static/css/151078b989dbe365.css',
          revision: '151078b989dbe365',
        },
        {
          url: '/_next/static/css/bf805ca69a59069e.css',
          revision: 'bf805ca69a59069e',
        },
        {
          url: '/_next/static/media/26a46d62cd723877-s.woff2',
          revision: 'befd9c0fdfa3d8a645d5f95717ed6420',
        },
        {
          url: '/_next/static/media/55c55f0601d81cf3-s.woff2',
          revision: '43828e14271c77b87e3ed582dbff9f74',
        },
        {
          url: '/_next/static/media/581909926a08bbc8-s.woff2',
          revision: 'f0b86e7c24f455280b8df606b89af891',
        },
        {
          url: '/_next/static/media/8e9860b6e62d6359-s.woff2',
          revision: '01ba6c2a184b8cba08b0d57167664d75',
        },
        {
          url: '/_next/static/media/97e0cb1ae144a2a9-s.woff2',
          revision: 'e360c61c5bd8d90639fd4503c829c2dc',
        },
        {
          url: '/_next/static/media/df0a9ae256c0569c-s.woff2',
          revision: 'd54db44de5ccb18886ece2fda72bdfe0',
        },
        {
          url: '/_next/static/media/e4af272ccee01ff0-s.p.woff2',
          revision: '65850a373e258f1c897a2b3d75eb74de',
        },
        { url: '/favicon.ico', revision: '2a440afb7f13a0c990049fc7c383bdd4' },
        {
          url: '/icons/icon-192x192.png',
          revision: 'e214d3db80d2eb6ef7a911b3f9433b81',
        },
        {
          url: '/icons/icon-256x256.png',
          revision: 'a5cd7490191373b684033f1b33c9d9da',
        },
        {
          url: '/icons/icon-384x384.png',
          revision: '8540e29a41812989d2d5bf8f61e1e755',
        },
        {
          url: '/icons/icon-512x512.png',
          revision: '3e5597604f2c5d99d7ab62b02f6863d3',
        },
        { url: '/logo.png', revision: '5c1047adbe59b9a91cc7f8d3d2f95ef4' },
        { url: '/manifest.json', revision: 'f8a4f2b082d6396d3b1a84ce0e267dfe' },
        { url: '/robots.txt', revision: '0483b37fb6cf7455cefe516197e39241' },
        {
          url: '/screenshot1.png',
          revision: 'd7de3a25686c5b9c9d8c8675bc6109fc',
        },
        {
          url: '/screenshot2.png',
          revision: 'b0b715a3018d2f02aba5d94762473bb6',
        },
        {
          url: '/screenshot3.png',
          revision: '7e454c28e110e291ee12f494fb3cf40c',
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: t,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    );
});
