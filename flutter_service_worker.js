'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/1.jpg": "f80341efd5f0b1966faaf1518f9046d0",
"assets/2.jpg": "f88cf871f3cd64d7225395515fc865ac",
"assets/adidas.jpg": "889b4d9af5c7405a134223c1eab8fe61",
"assets/aima.jpg": "fc2dfea5d2580eeeaa733c25798c55b7",
"assets/androidx.jpg": "64f1fd69c984f029202b384207336121",
"assets/AssetManifest.json": "4ad76a9dcb98f5dd76807f0d0f0fcef8",
"assets/avi.jpg": "8b38ce9ddc71cb4baf9a2c35374d21a5",
"assets/banner2.jpg": "56108ffa77c217e14a1475e568d38091",
"assets/banner3.jpg": "1c66dcc9625d1132b8cad2806fb4d3f7",
"assets/banner4.jpg": "a6f312685d8b5e4e8d38a65f2fb843f8",
"assets/changhong.jpg": "0f9ccdea10f293689cc9998989e0f0d8",
"assets/dayu.jpg": "e308ea1d2aa68d619fc21a829dc86485",
"assets/dianna.jpg": "c57e9d71cbd84304f2a6f2b2b268e0f6",
"assets/dimengsha.jpg": "4ba7e32f764d5f4f9fab2ce5dd3b3e66",
"assets/dj1.png": "71d1f4813dc7f0c5b3a2e8cfc36cf579",
"assets/dj2.png": "a8043120beb7608fcf834115febdbed7",
"assets/dj3.png": "d66e84f2795295ac23f9c7bab2441158",
"assets/dj4.png": "529437c683f203fe3f708cd0e5aec7c6",
"assets/dj5.png": "4dfa1f788690d24719c6fc44679dd610",
"assets/dj6.png": "71c302ae27cda2719a0b9aa2fec8c022",
"assets/dj7.png": "c9a9ff16a8b54c47ab5da9790db63b5c",
"assets/flogo2.jpg": "8897b1ec015f9fda84fc9bd80988bc68",
"assets/FontManifest.json": "c460e65dd1beae98c879486fc297eb45",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/gelanshi.jpg": "e7fec410a5a31903c753cdbe7aa158e7",
"assets/geli.jpg": "b57bbf07391bb68a5467d37602752844",
"assets/guizhoumaotai.jpg": "f0222ecb4de3596b2a5e64bb4a9e18d4",
"assets/gzh.png": "3fd625a3b64d669579b770a99777b14e",
"assets/hhgz.jpg": "e6378202b3ebf9b8f43fc419847f86ca",
"assets/hisense.jpg": "726f0a5893b36020adfe1cc8f812c2f1",
"assets/home_center_back.jpg": "f542e3c0c74f38ea22aa926eb5b93e53",
"assets/huakangjiafang.jpg": "85a8ca1d9e05e1e5560f1050fa4b56a5",
"assets/images/1.jpg": "f80341efd5f0b1966faaf1518f9046d0",
"assets/images/banner2.jpg": "56108ffa77c217e14a1475e568d38091",
"assets/images/banner3.jpg": "1c66dcc9625d1132b8cad2806fb4d3f7",
"assets/images/banner4.jpg": "a6f312685d8b5e4e8d38a65f2fb843f8",
"assets/images/lxwm.jpg": "046ae0d9fb62c0917827c3f3a5482c44",
"assets/images/main_banner.jpg": "28b1bd389163da0737316fddf48bf850",
"assets/images/mtjja.jpg": "a68c14172c4c0a03b3369c8777adf0e2",
"assets/images/sy_back1.jpg": "df6f728a77cc6e674af92d40190fcc8b",
"assets/ios.jpg": "101dfe495aebb09a472164863faa8f07",
"assets/kangjia.jpg": "73c13e416d2543823ec26530c664f027",
"assets/lansiyujiafang.jpg": "ec9c122210f12ba779ea7f1a00d3690e",
"assets/logo.png": "5a4457c4150d1892c9474d6b37fa4db0",
"assets/luolaijiafang.jpg": "32d3507eeb841d93cf19b0241056bbd6",
"assets/lxwm.jpg": "046ae0d9fb62c0917827c3f3a5482c44",
"assets/m1.png": "7b2d341059da6be3cc5269b58d8a146f",
"assets/m10.png": "1db315e7ea50f8bc0dea55e6adb1e4f1",
"assets/m11.png": "04241c098a04cdc2e135226e42e3902d",
"assets/m12.png": "223a514fba926b78361bde871945732a",
"assets/m13.png": "05fc971d27ad7b2c2b6f74abf1d33c0f",
"assets/m14.png": "5e1d24b750203e9acc0e54d6e0eb96de",
"assets/m15.png": "9b47ffda607de2ef9149e36bf6ec4e78",
"assets/m16.png": "5710cecb14cab9f7bad0eed468542006",
"assets/m2.png": "26bd6239dcd284f4e7d431819efd75bb",
"assets/m3.png": "54bb76c06b0dd3531588dbdd923c912f",
"assets/m4.png": "2f3bc10d22206b2f1d227e2f66a33017",
"assets/m5.png": "2f7473ec272d79ed096d01b64e806c0f",
"assets/m6.png": "d5ceaa1649ac2fb68aaacf96ea5f8679",
"assets/m7.png": "a1adcacbb680dff9b7ac37e58b0b101c",
"assets/m8.png": "5e9ce7a3e92f633ebad25846112c2726",
"assets/m9.png": "e52e46d5ab4477ef532392e37da8ba21",
"assets/main_banner.jpg": "28b1bd389163da0737316fddf48bf850",
"assets/mengjiejiafang.jpg": "da53020a843c368a23db99bb1257db00",
"assets/mrtx.jpg": "8f1fa9aa6c2b32c80136704202c798a2",
"assets/mrtx1.jpg": "8f1fa9aa6c2b32c80136704202c798a2",
"assets/mtjja.jpg": "a68c14172c4c0a03b3369c8777adf0e2",
"assets/NOTICES": "30a2151fe6349517ee2703fa2b364154",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/qyz.png": "908fb93807892775a703ec2c52d8bad2",
"assets/shengfulai.jpg": "26a4c73a76199a3810b6ff580baf9c11",
"assets/shuixingjiafang.jpg": "5ab0bca1a8a3110d0c851893c73a4ebb",
"assets/sy_back1.jpg": "df6f728a77cc6e674af92d40190fcc8b",
"assets/sy_bot.jpg": "067a32f1ee8df0c8cfe2f75fb5bc5335",
"assets/TCL.jpg": "19d26957791b33111fb5dc4d86180591",
"assets/tiancanjiafang.jpg": "cd11107ad4d962b332783768ab54d270",
"assets/yilaikesi.jpg": "5f3529cec15e872f18765b36698828cb",
"assets/yqm.png": "66fbcac7cf0ce0f9bef62531ece281be",
"assets/yunjiejiafang.jpg": "7c696912b7bad8a1e5d559db1d29d130",
"assets/zhigao.jpg": "468eaa5372d07af099290252cb5bd1e9",
"assets/zhongliandianqi.jpg": "5735363ef0b1d8ec0510b7385982ebd7",
"assets/zjwm.jpg": "aeb14997a45ef99e62d40cf04e873466",
"favicon.png": "4776ce31851c631032eb54db71d7089b",
"icons/Icon-192.png": "b12316bcfa34e63b9dafa2350d3cff22",
"icons/Icon-512.png": "b12316bcfa34e63b9dafa2350d3cff22",
"index.html": "7904d4cfa87195fc14afadcd94275db6",
"/": "7904d4cfa87195fc14afadcd94275db6",
"main.dart.js": "ab621110e1e98769e67c10be332f3940",
"manifest.json": "a7e60ee95653e0359cdcb95e21f6e1c1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
