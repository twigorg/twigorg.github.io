'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "88f96d8040e2390a81f325480ce6540a",
"index.html": "ed286e1bf7ac0e62b2bfc3f4c3dc5829",
"/": "ed286e1bf7ac0e62b2bfc3f4c3dc5829",
"firebase-messaging-sw.js": "fa0c1b429565ba5caad76ead64868c15",
"main.dart.js": "df55216821557fef010b1c9b898eefbf",
"icons/favicon-16x16.png": "86e03f941812898aa6012ac757ac4fc2",
"icons/favicon.ico": "21bce9094993837779190019dbcbe559",
"icons/apple-icon.png": "5b5baaafc340481cb5ea9f01234dd40c",
"icons/apple-icon-144x144.png": "d00e56d34edaba02be91b9f6971850b4",
"icons/android-icon-192x192.png": "69d08a78b613254484d7b9e5e1fe1fdc",
"icons/apple-icon-precomposed.png": "5b5baaafc340481cb5ea9f01234dd40c",
"icons/apple-icon-114x114.png": "ba992c9702075d605f9e0aaaaf2dd068",
"icons/ms-icon-310x310.png": "a544815a311be46cf8b304bbac5a88df",
"icons/ms-icon-144x144.png": "d00e56d34edaba02be91b9f6971850b4",
"icons/apple-icon-57x57.png": "a63b253960c1b73f6cc2ecbc1d18e18f",
"icons/apple-icon-152x152.png": "a95a590e7df080e46cfedb1749a8ce42",
"icons/ms-icon-150x150.png": "9facc90123b83402f066ed1d76b532e4",
"icons/android-icon-72x72.png": "8a0fca81873525a81e87315c338eb2f3",
"icons/android-icon-96x96.png": "069419ac841f0bc3ac82814977a15f52",
"icons/android-icon-36x36.png": "33a9f8a8998ea89d08d281139c9eed0e",
"icons/apple-icon-180x180.png": "d20b82aa80248977063ddf7898a62388",
"icons/favicon-96x96.png": "069419ac841f0bc3ac82814977a15f52",
"icons/android-icon-48x48.png": "1430e4c635ace6b6332acf08128be01d",
"icons/apple-icon-76x76.png": "3b3f809ad756d4867d53a41fe82fd2c9",
"icons/apple-icon-60x60.png": "872158e9f3ed5ed03de0e8fdd39d554e",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "d00e56d34edaba02be91b9f6971850b4",
"icons/apple-icon-72x72.png": "8a0fca81873525a81e87315c338eb2f3",
"icons/apple-icon-120x120.png": "47fc25d627807fc8d9d196ed0d51ccfc",
"icons/favicon-32x32.png": "75dceb21abd20951eab0d6f7e4d66417",
"icons/ms-icon-70x70.png": "b7491879bab9d76f5274fa6fc8f4821d",
"manifest.json": "84e8cdbbdc6a37bb041ab17d0c77f87e",
".git/config": "ae3b2f44b514ce4426d28e1a72c8598e",
".git/objects/pack/pack-1c78b60985cf87458e50d69a7b9a327158e0720a.idx": "b35d0e8c878ad7b2d341f53bfe69ab8c",
".git/objects/pack/pack-1c78b60985cf87458e50d69a7b9a327158e0720a.pack": "6f186fbaca0f4601f4a72191a4d2f444",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9763d01a6628a4980b6f4e8b41a1132b",
".git/logs/refs/heads/main": "9763d01a6628a4980b6f4e8b41a1132b",
".git/logs/refs/remotes/origin/HEAD": "9763d01a6628a4980b6f4e8b41a1132b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "92baf6c4799c86ecc53b75965fafd2b2",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/index": "a94f2971c5c24a51c2ac53af50ea8e92",
".git/packed-refs": "da92f7a7905512380645ad9d5d451137",
"assets/environments/production.env": "866a44239415458615ac2b7457827458",
"assets/AssetManifest.json": "fc3727afdc776a3968f53e99bad6824e",
"assets/NOTICES": "a0aece04b9b7a264fc06db76914836e6",
"assets/FontManifest.json": "088be26160e9bcbe16fd34052a6b0440",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/places/assets/images/place_search.jpeg": "85bf722d54982344ebb964e45ed9d137",
"assets/packages/twig_icons/lib/fonts/TwigIcons.ttf": "725ee1e8c11378d7d17684d633735b77",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/empty_list_bw.jpg": "7bcd78c58e37a4a4b18881e55fbc6994",
"assets/assets/images/people_search.jpeg": "250bfea4aca5de9aa068ca248f77226d",
"assets/assets/logo/twig_logo.svg": "8d2c9497f9284f6eb8c0c1f62302e020",
"assets/assets/logo/twig_logo.png": "4ea298943eb6c207738e9054114a88d8",
"assets/assets/logo/twig_logo_small.png": "4921bb6395168e91896aab5cb1ef26bf",
"assets/assets/icons/icon.png": "658d2c906ac55af8d5bfc389efebb329",
"assets/assets/icons/graphic.png": "310c238aae698b14003f3f5fcc3f1ddc",
"assets/assets/icons/icon-512x512.png": "56d9d6273d3b5795ec015ed8df92ab37"
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
