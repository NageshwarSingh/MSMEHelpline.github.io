'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a6e3b11631f0a1b4ac97d7b2acc51dec",
"index.html": "3f2250dd24919ffa51805aafb7d3f56f",
"/": "3f2250dd24919ffa51805aafb7d3f56f",
"main.dart.js": "8c5dd36cd1b73dc8cc9f9335a3c9b69e",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "be9e15aed3d9d05fab24c688271f8b60",
"icons/Icon-192.png": "7362494cef89a03f08b9acf520fc82ee",
"icons/Icon-maskable-192.png": "7362494cef89a03f08b9acf520fc82ee",
"icons/Icon-maskable-512.png": "3dca39ae7fa94b6c49863f6e8ec1107d",
"icons/Icon-512.png": "3dca39ae7fa94b6c49863f6e8ec1107d",
"manifest.json": "f338634f7134fd309a2f1c1f62c6cf91",
"assets/AssetManifest.json": "4201a5648b48b95746df7c62ae770c32",
"assets/NOTICES": "97d6a486a109e609969874dd650438e4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "bfb271c6a729a9bdd37ad4adfaca4a8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6b74b2c3e4ff3e129d05cab1c0e70739",
"assets/fonts/MaterialIcons-Regular.otf": "60991faf16fc55969782d62441f2120f",
"assets/assets/images/check.png": "bd86d48b277d3512d4cf04bc2845931a",
"assets/assets/images/first%2520page-02.png": "2614a9871fe373987be2f8ef402359c6",
"assets/assets/images/background.png": "3d0ab33177c39b13612849a35e4b8f9e",
"assets/assets/images/8459737.jpg": "a8fe3d83794c44a6bfc50d48e9ca649a",
"assets/assets/images/MSME%2520Helpline%2520App%2520ICON-01.png": "c8a6b6dcbc13ae7de93013c6ed66d118",
"assets/assets/images/CIMSME%2520LOGO%2520512%2520%2520512%2520FOR%2520MSME%2520MITRA%2520APP.png": "7822a67772789da144c431360c04b0b4",
"assets/assets/icons/check.png": "496f5dd1d1a732d14e64144ab41a8167",
"assets/assets/icons/kyc-2.png": "1c9d8566bb85d287b4352106ed31fbd3",
"assets/assets/icons/wallet.png": "e6003f868e8b93b12c386dca47a887d8",
"assets/assets/icons/adjustment.png": "787e92726b9694d0a5cf0b9e98f0b8b5",
"assets/assets/icons/gallery.png": "aa9d3a1182df7ab8c3eef00a1e031d00",
"assets/assets/icons/edit-text.png": "08e85ca61af6e27c9122b86bb6bfd81d",
"assets/assets/icons/441dc65f444b4c7591acfda059dad0e0.png": "fcec6e539e1ba5612b5671840e91e820",
"assets/assets/icons/photo-camera-interface-symbol-for-button.png": "8ac3a66804b8ef9d2217e0d8cef6f4a1",
"assets/assets/icons/logout.png": "7dbf537067e435f7ec47b7ee9e384135",
"assets/assets/icons/home.png": "c7f6c64ec59d4d4a19245a61ef49555b",
"assets/assets/icons/user12.png": "2e776db18463ad86d1f3b9276d50b0c6",
"assets/assets/icons/user.png": "60ad9f8fbc3b4289063b125a9d4a02e3",
"assets/assets/icons/kyc.png": "acc4a674d41415669d16b35c0c6cdd6c",
"assets/assets/icons/id-card-2.png": "1a69a9acdd980f53271009e99690f34f",
"assets/assets/icons/id-card.png": "089a2a37fd9a18ee8810a9b454a65326",
"assets/assets/icons/credit-card.png": "c2c66006bc12f0a136015b6958bdef52",
"assets/assets/icons/pdf.png": "54a842857de383b5db59c68f7e12b3e5",
"assets/assets/icons/form.png": "31b6f9ed984e5700707fa34333990e14",
"assets/assets/icons/identification.png": "49f8c2b365b57e600bc1c46ef969669f",
"assets/assets/icons/485715920959cdff854c50a4b9df833a.png": "ac58796d560d5ca32f929cc302c89bb5",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
