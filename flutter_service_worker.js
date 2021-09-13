'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "38a04c22d6560e08c6fb4da01b41fa3f",
"index.html": "1f4539bf167d527d9b7aecf3a5cd6917",
"/": "1f4539bf167d527d9b7aecf3a5cd6917",
"firebase-messaging-sw.js": "fa0c1b429565ba5caad76ead64868c15",
"main.dart.js": "777a6e5dcc22ed65927f6e87a7331238",
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
".git/objects/68/f8137d1510d3818de3863646e2f1f16491b076": "ffd49b22fc9939e90ba7187079d8adcd",
".git/objects/57/f8c9650c234078df6ccd0f3613d15ce6f77586": "3e41cdcf2d5cdf0dd065d1a330b460c6",
".git/objects/93/3fb7b856be5c87e553952e89d60944934e09ad": "b4846f72b901d351723ff7f70dc1b493",
".git/objects/ae/d120c30090a8d8cde5e9d520f7a5462a02ace7": "de324ecacd42301743b436d5f1e48dfc",
".git/objects/f5/8c5422dc53f2bf27ea62298fb6913e68f9843d": "2dc6c0427209a50d27c280d765c504fc",
".git/objects/4e/b9b09d7b72c92a5d89263798227129bc936f7c": "7de3967035eb154071f7ddb988fcf049",
".git/objects/20/ab2c540baf62812a03709bf3d15d36b5f8a56f": "3d4ea283b6ab24a17589e400f4af19ac",
".git/objects/pack/pack-51754db5d1221f30bc9ce6a281993a801103e835.pack": "fce85435f05477377f5d1d09ff961752",
".git/objects/pack/pack-51754db5d1221f30bc9ce6a281993a801103e835.idx": "35e32241d98b518bb77b27ccde331a72",
".git/objects/29/0e54da78504a90f7f84ba480ee90855e7a2290": "230acf92fde9ba916321ea642ce2ea12",
".git/objects/80/46fb63b873c60179d3e56b97fe3d064e69e05c": "4f35c7160a8616a8ec30e65200fc7b0e",
".git/objects/8a/72eebbfbb968da44394d62025e2d091002e30a": "b65703899419bc1f147afe3b91a0f568",
".git/objects/86/4f21800550e90f9aff29c086d1bd6b76533124": "d7adf23373440bdad25a20924d95bb81",
".git/objects/9f/fbf27cc77374aea214ebb2bc7b29514f596b5f": "0433180d249a23236f5f9e60c50d9b24",
".git/objects/6b/0ed6b285b1809ad520add86e5f618be9ef802b": "5d1363b72834093ec59ce5017c2ec21d",
".git/objects/5c/22da47b85439bab86b8ecb197c5fb6e65f255a": "7190aa9b192bf8e5f6efec685d065dc0",
".git/objects/5b/c4e6c99523149dcc797ceab7c8fde1989e131f": "29e1e542b12a234679058472d7760139",
".git/objects/08/7980ed5fdc1871980fbb940ec43422b31c7206": "19a584b8f8f7ecffa05ebddf766633fa",
".git/objects/63/a6350b99b5a6d99168d53a7beeda5ef2ccbb20": "3ecc7191537ab216288b4ddf500372d5",
".git/objects/90/a5e19ca0ab4fb596c1ee801666fd1e49230815": "614d7fd41c48ee1ac71ed52173453523",
".git/objects/d2/481f018f8d65ce8b5c606c05aa5a8b9c3f7f65": "1f8534ce4dcf61316638478cfa685205",
".git/objects/a6/03d8b4b8a94bc6f6f72d34344921e64b3b9d63": "491d0b329eecbdfc7745ca523ba0a55b",
".git/objects/e1/bfdb71881d41b9d51322c5a2460364e579d5f0": "a51f6a01f1be205003c80386adca385b",
".git/objects/e8/b6917d10ae682e90eadbfd075c74e70f0e3014": "d9bea1ddd8f11e15003768bfe8b4bb9b",
".git/objects/ce/aabc718c6439a6ee8b4a34c5a796362a89fdf2": "790928f15add9d20a7ea73694254d112",
".git/objects/e0/4fb24421d79873d37bd6bd84f7b8391dd8a889": "935f0e1023860b58a9722dd4918a483e",
".git/objects/12/932859532bafef2581212c59a2516e3f7a3c18": "f2968c1f6a53675ae2b23c90f5971dbb",
".git/objects/1d/11828dd147185693461717d76f5108a536d6ea": "fd9b0bd810a3e587869aba3b6332c187",
".git/objects/13/6b2b6c258894162fc5252feb36d7769c2e9aff": "be7fa9370b54e976549f67e72a0ce739",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8428c4af22df18352343142f8a7655a5",
".git/logs/refs/heads/main": "8428c4af22df18352343142f8a7655a5",
".git/logs/refs/remotes/origin/HEAD": "f80a7fe5f620641736dbff32edfa7f8a",
".git/logs/refs/remotes/origin/main": "22500b9e08ec8ecf61fb02d6c6b82f6c",
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
".git/refs/heads/main": "71533252cb32d603e7cc02b8134c84b8",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "71533252cb32d603e7cc02b8134c84b8",
".git/index": "823897c35174e21777cbf0361d3ae0ef",
".git/packed-refs": "c40fae05aeff0b70a6635c7d9e6f68f4",
".git/COMMIT_EDITMSG": "4795d4d23c5f5c005112e5351b38b93b",
"assets/environments/production.env": "54f7de63dbe9af82bd51099daeb3740b",
"assets/AssetManifest.json": "33a168c9d8b2b91334fe7b9fe69c39d1",
"assets/NOTICES": "bc99430cdd15a4c8fdec326ed170d613",
"assets/FontManifest.json": "6bf80580f17094b6c391e3507d0d8dfd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
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
