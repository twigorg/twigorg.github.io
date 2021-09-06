'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a1c63eceb90aee12c7a3fb48fefa8e66",
"index.html": "abf3ee3f5ef0e974ebd5165e3275e498",
"/": "abf3ee3f5ef0e974ebd5165e3275e498",
"firebase-messaging-sw.js": "fa0c1b429565ba5caad76ead64868c15",
"main.dart.js": "87b6b77a1e9f90bd8ada640901151889",
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
"manifest.json": "cda441f5e3a52f62c56e403482e91b0a",
".git/config": "ae3b2f44b514ce4426d28e1a72c8598e",
".git/objects/0e/b48b647eadfaf1c6c5f563ac78af76de31ae10": "8ec16c2e2b6bb0fb91180f3eb2ecb400",
".git/objects/34/7c6f9e222eb1adb505819678f96bf9595e70b5": "2edeabacabf9eab0fd42fdef67115b2e",
".git/objects/b2/44fe921eb6963095c566a8df4ff653095bcab6": "6603c73868c432c6589f7a2fda1c0dbf",
".git/objects/a2/df602b61cdb80082ed909bd67e860522a3b37b": "e43650705255a5cfd8bdb7414e65a671",
".git/objects/bc/eebc37dc76a327c35cce3a5b4f63e400c92775": "f39e72e3d3a8d35dba933b6f692df200",
".git/objects/e4/2b0200976c2ce2ee499c60d41a6c99a4f948e9": "3e2d17c18fd7bdafc05dfa83b2b163e5",
".git/objects/e4/5570ccece0319882b48e21f0933beec958654d": "78d237c8c9608cd57e0a1966dcf9801b",
".git/objects/pack/pack-622a2725171a4f4aea48e6af29ad1948356af67e.idx": "afae9e7a136f39225749c33609620b55",
".git/objects/pack/pack-622a2725171a4f4aea48e6af29ad1948356af67e.pack": "fc737bb9a60c006042e3805e5059873e",
".git/objects/17/5a7732ba51abe65eb3e742d55adf87185b1403": "735233ca3ce7c7c0989cc60eaba0d986",
".git/objects/44/fdd4f04de7f7c991460d30018174bf190c92a8": "748451fb5286d3ec28d41a65331cf594",
".git/objects/2f/83d664ad7e7e19c102e7bb97a6bc027470c688": "ad7c1124c56a99c9dbbcf7dfb527cda7",
".git/objects/65/dfac444ae92ab3e9ae732d82965caf9003f97b": "467f2bfff5a0ab55387d412866ceb8ab",
".git/objects/3f/fddcc1f75043e01c4f55c71da9b080689a6966": "5736be07df5ccd639de2821e7da66638",
".git/objects/5e/8b84720ba8393d3d22d7c55abe57a5b32a7001": "5111b9ee277ec7230569428e3c89016b",
".git/objects/6d/a199198e72b31a7a3007305a5317c3251ba745": "6c3e3e5a6485e8b1eaac131cf4836a7d",
".git/objects/52/3a800372ea2e5400ab3173b21f51f0fb635ea3": "6067ef39cab14b7e63c7679ff0bb533e",
".git/objects/0a/d0982b0e00db7bc395988723e0bba966ccfdb5": "ff6925b2568b9a3b596517f2f2dd4781",
".git/objects/64/ebfdcd75e1b9ed5195d3c6d8c464f3432d3fd3": "95a9df40566e28f442c2afd6e4a39b2c",
".git/objects/b7/9ceceb25899fa4554169a97f4e4807caf11426": "13caac8b13715b0e24b4e82fb4f04d67",
".git/objects/c5/e7ccb4888ce6f31ba5ede5400bde6fdcbe8498": "00e32a68cdf431d650bfd7eadfb1d456",
".git/objects/f6/1a0c17545975ebb100827e98f1665eb7a81ba7": "0d62a11055e4dc919fd94bbfa603c058",
".git/objects/41/fee3bfee8ec1724e7d9e0d5dc7181d842cc971": "e9f08ca44394f9c808417d9a59b4c333",
".git/objects/83/c2d873db72d165f226addc52897a3f1fcd28d5": "58f023442d93db3ebb35c2a57c624893",
".git/objects/24/b41695aa3f63e015bdb90eb824634b8d2dd347": "1fea2ab00801b79cb2ac01ec6fa439fe",
".git/objects/85/35cf975bc4ba5c1cb5b65942e802ba3d941ad8": "beab80db2c38933d59ff788ffc29a1c6",
".git/objects/13/ee2fcfe4fd342dbfa2e3e950dbb2af2ab0dda7": "27987f156c8fd698d35bfaea71b05e57",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c65c6f662a2d7270776b804fdc3bd1fa",
".git/logs/refs/heads/main": "c65c6f662a2d7270776b804fdc3bd1fa",
".git/logs/refs/remotes/origin/main": "12c74b8aa5722a9fed1e68f172c251d9",
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
".git/refs/heads/main": "218b7710be1b3694404340923c495165",
".git/refs/remotes/origin/main": "218b7710be1b3694404340923c495165",
".git/index": "b48ed2eb45c16e4a4c1b632f34e8b83d",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "ce3a07e6a167d2d9eb536a62030b6e7c",
"assets/AssetManifest.json": "c637068fc4d703ca2d70f8f137e0b281",
"assets/NOTICES": "e7075a33fff7d3776523ce19c5a1d073",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/empty_list_bw.jpg": "7bcd78c58e37a4a4b18881e55fbc6994",
"assets/assets/images/people_search.jpeg": "250bfea4aca5de9aa068ca248f77226d",
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
