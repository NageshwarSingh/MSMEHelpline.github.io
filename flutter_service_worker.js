'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a6e3b11631f0a1b4ac97d7b2acc51dec",
"index.html": "9c5aad0bbca9dd5e8f664cfce352ce0b",
"/": "9c5aad0bbca9dd5e8f664cfce352ce0b",
"main.dart.js": "9229cc928d74e29b6c4c1191d6e5da25",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "c500b1934d10a45f2dde9380b3457882",
"icons/Icon-192.png": "0a4057defeb5d939a68497790b5fc726",
"icons/Icon-maskable-192.png": "0a4057defeb5d939a68497790b5fc726",
"icons/Icon-maskable-512.png": "10886823f9b24d7cc970462cb3c7b563",
"icons/Icon-512.png": "10886823f9b24d7cc970462cb3c7b563",
"manifest.json": "ad6be040d88b661e572bf98a99e497d5",
".git/config": "5f4485b3650386ae263093200a34b26c",
".git/objects/92/3181c21a2bc995df291014bb0bc6fd3b8a0f1f": "9cdecbe8dba1cd3a511993511e7c06a7",
".git/objects/56/0243e0f7286ba556cbc1b32df79938ea07e5cf": "e89f15cf33a8fd3778b965c8f3d43dbd",
".git/objects/b2/aa2bb1d560a08ecb2c349d5c23ecb08ace364f": "6ac693f23fa24e01e76bc3015c0192b8",
".git/objects/cf/8de0116dcc91cd3dae22c7c416b7be61042575": "baa7e47050ed76e7b8ad964465a1521c",
".git/objects/20/6c6651a09316a14e13b59e21e42267f24f5676": "a8385ed1d7790831137c9099291fb5c3",
".git/objects/29/35dc66999c8cc87e153cc4cb5254490733ef49": "39430e3657aa5b9b00d8accf3295aa5e",
".git/objects/45/3011d5934527289e38c7bf4e9b2ef42889ebde": "e007922fc507790ec1f1e1546ec11dc2",
".git/objects/98/0dff88aaa2a4b455b7026d2bbc75d01ef536f2": "dea252224a013b26c18a2e4f3db1c3df",
".git/objects/7a/d6dd0bfc34ce2f94a5c55a9f19d8245a038652": "9c622640c07287accbaf875804689bae",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "570a25fd79a220d3478b7cd8b4b1119f",
".git/logs/refs/heads/main": "ebabafc98c8bd0a520bd7b08569ba8a7",
".git/logs/refs/remotes/origin/main": "cb8f010534041d0717e457664626d1a1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3d4823c21c49a2b222ab02a6550951d2",
".git/refs/remotes/origin/main": "3d4823c21c49a2b222ab02a6550951d2",
".git/index": "41d8f8395abb08f9a38bc515888ff929",
".git/COMMIT_EDITMSG": "72e3359166d6bebcba728c4633084341",
"assets/AssetManifest.json": "57f6d40072a3888ff9b89aaec88bef68",
"assets/NOTICES": "c325b9dcdfb5cfe32b00fbc5506567ea",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "ea293412737b47d7b83c68b560724f39",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "62ff4585c4e600f88d5698392cb36da3",
"assets/fonts/MaterialIcons-Regular.otf": "b0787b61acadf195cf411539f7e222f2",
"assets/assets/images/check.png": "bd86d48b277d3512d4cf04bc2845931a",
"assets/assets/images/Icon%2520app-01-2.png": "2a5c50b90c6b3c64bfcdb70235f0adde",
"assets/assets/images/msme%2520mitraid%2520cards%2520webiste-01.png": "accc433393f94b28eb1826f2969a021b",
"assets/assets/images/first%2520page-02.png": "2614a9871fe373987be2f8ef402359c6",
"assets/assets/images/WhatsApp%2520Image%25202024-03-01%2520at%252011.28.11-2.jpeg": "803576772c1e5a7fedc9f3f2bb9940c5",
"assets/assets/images/Icon%2520app-01.png": "9799ae86a323235c9745a4eb295844d6",
"assets/assets/images/T-Shirt.png": "61b30c9c0904aaf1cd870b7159fab3b7",
"assets/assets/images/background.png": "3d0ab33177c39b13612849a35e4b8f9e",
"assets/assets/images/8459737.jpg": "a8fe3d83794c44a6bfc50d48e9ca649a",
"assets/assets/images/WhatsApp%2520Image%25202024-03-01%2520at%252011.28.12-2.jpeg": "7daaefc6ed26d049aa64b6377f0167ca",
"assets/assets/images/MSME%2520Helpline%2520App%2520ICON-01.png": "c8a6b6dcbc13ae7de93013c6ed66d118",
"assets/assets/images/visiting-card-msme-mitra-uppdated-01.png": "374b491281e301d3dc0b0744b7bbe93f",
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
"assets/assets/icons/pdf-file.png": "874537096b1c27bced2f07aed29a3f39",
"assets/assets/icons/id-card-2.png": "1a69a9acdd980f53271009e99690f34f",
"assets/assets/icons/tool-box.png": "2d3c7f5bb70ef5d3cfd16f468f81daa6",
"assets/assets/icons/id-card.png": "089a2a37fd9a18ee8810a9b454a65326",
"assets/assets/icons/pay.png": "69405ca430044e7fba862f83f41e82ba",
"assets/assets/icons/credit-card.png": "c2c66006bc12f0a136015b6958bdef52",
"assets/assets/icons/pdf.png": "54a842857de383b5db59c68f7e12b3e5",
"assets/assets/icons/form.png": "31b6f9ed984e5700707fa34333990e14",
"assets/assets/icons/job.png": "f97bdef9dbdd04c135ecf9314b953d48",
"assets/assets/icons/identification.png": "49f8c2b365b57e600bc1c46ef969669f",
"assets/assets/icons/485715920959cdff854c50a4b9df833a.png": "ac58796d560d5ca32f929cc302c89bb5",
"assets/assets/icons/people.png": "32e619b5bd886275cf6f7dda8a0f9a55",
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
