'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "57c712ec717e0c77a49a6dcd78ad75ac",
"index.html": "20e8e10df9a89f6df89a5509acd88944",
"/": "20e8e10df9a89f6df89a5509acd88944",
"main.dart.js": "797d80fe5b0dda12dcdfe2270e71c2d9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
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
"manifest.json": "f70a189e9c85537b2c5954cd7e24fe54",
".git/config": "86c1fc0a9e059f0cee8a2d6a004faf69",
".git/objects/59/fd1b616ce0520157188b70ee15e122ece992c7": "54a17db22b2145da4cb62faf3e1f3fe3",
".git/objects/0c/eff69aa2aed8c30cd8acb9757d5dad2f925c71": "4d968243dc40fee2bd6cf8a984d5d5e0",
".git/objects/68/6207bbb03ae2367b9c287f9b6122dda2718eaf": "4b435faed79f7325c7c4731165b318e2",
".git/objects/57/a2d586294dd288780c7e3ea3b578a5ca6ca8e9": "4d5498b39658729dcfcc1bc6133edecd",
".git/objects/6a/b1c0a36bcdc0bd438aea5b643990cfab9947ba": "bc86a17e49cc4dabfd5770f5157b4fd6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/56/e22003167acf8939e6a114dd9d496455f0dae4": "743b679d20bdfc72908ce55ecb12ac4c",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/94/80026a7c6672105e055114971fad0eff914a89": "90e01721e0d7cb172ca6eba18d1d8246",
".git/objects/5a/5244eca1f2746532b81790d2d650f817ec7b6c": "9f315ada4b93a3eda9872174452381df",
".git/objects/9c/6456ae4b6e85437fa4cc841d82649683a89efc": "768d6a1847d61f032ab30908c8a9aa2e",
".git/objects/b5/f0beadaa415773785e0ded7a839eb655e4f854": "df0bc6d67a584196e23e0ba46480eb2a",
".git/objects/b2/8920ef538ec0c4b3f2295cada698562b27a5b1": "c8214d7d032f736c4e3d70cf1730d2d3",
".git/objects/be/2f701d0984d2cd02436a687601b8264c5cbb82": "b129fab006f2ca2bf584e1b3d141fbf2",
".git/objects/a2/877514678c3a15e8602410db7b7639c7d93691": "c69a64928fd5b63c5c2192551f591a83",
".git/objects/d6/6bdda5c726ade9cddee9a9e1e46ef06128160b": "76b21bb53fc9022e708dd67a4154eef6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/24bdb92e1cd4ef1eaf6f3d48dad685206c2bbd": "315e8e4c475e91e08bd42e7e6c625d40",
".git/objects/f3/ecd30e8bd04efdd4b16af4c1b0b5b01003fc21": "7db3b1f82ddf4673374178d6ebc8c460",
".git/objects/c9/6b6f2ddeeae0553563077653564fc5a7019a50": "8fc190685ee9727db4ae5c8ede1510c3",
".git/objects/fd/a99a28bcd38c0274549c4c6dde88c43e16c9a4": "d0a9c136e96cece7542c773106cce112",
".git/objects/cf/c8f650ecfdc8402b4ecbf447e83183cbf3c739": "be38c08312b7e540dce376189c45edaf",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/40070033174370c08ee427cdc530baa21d60e0": "8f851f3bdc3359532f816e894d3cc2b5",
".git/objects/7c/b9ad63a651938c018c748665922895f4060306": "62cbd26a07f7e6a7a486bae8819f46ef",
".git/objects/16/33c1872a48232d858ab64c43d65ae597ee63d8": "5eb77b021f60900a54469cf3d2a439c9",
".git/objects/16/48f2954f29bb23225e8ec05e505f2ec2826d4e": "ce12924a79095f8cc4d7930cc6b8ef7e",
".git/objects/74/58a30ae18d9a481ee50e8cc105b9af76df4d20": "b0c2db29dcd193f9412ad63b28f5887d",
".git/objects/1a/943147ac0626b606c272d0d78fba89b7a6c292": "d356316914de77dfb3bc76fe612d54e1",
".git/objects/17/5b831f4609af424f13036e0b86c122aa5c77ec": "a52ee38c37fa80a4cfe1d6b0dcc86182",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/26d1e4ccd582829e23f6e305fd10a75dc3f99b": "8175ccf52cb9ba56645622d268d1cffe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/e5430e4eca16af97a1b2789174de59be6f366f": "c43903dcb57df450518e545ebfb90135",
".git/objects/3f/f5340a83a30e7f601c398c1857f1cefd178180": "760324c80c2dec485921156a115aaf6d",
".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/01/9d2750888e5b333b1bfc9c6c6539bc14e6612b": "d835fcc40b9fdebb2a25a30378287746",
".git/objects/0f/3d66a84f2b7df343291de224e6c84f5f7fde17": "abd891c6549e9565e8981fd959ede7e0",
".git/objects/ba/498ee183e93291867b86d023807087f3683f89": "f2be38e15d4c8ecc2297d32db53bd8ae",
".git/objects/a0/aad9e10c6daa4efe32329dac4fea3ef3629c43": "fec8f0fc84eac37882fc0925c337a900",
".git/objects/a7/70fdedc09c265e04ccd8f115e8408646a5298b": "28920f26c37af5fb428902ce3c741af9",
".git/objects/b8/a9e9fde4c1324bf55f6adc63e94478274af42d": "7f442393c3b9df9f83244d0fda46532b",
".git/objects/b8/ead87793b7e863ca70ec0cb836d7c68b9cc514": "6d3d87f46b95dddc4ae1993b26c92163",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/dd/797f952765dba2aeaa82925b1956eb53f744ea": "19a32ce5c6fa291a072bba83c89c1129",
".git/objects/b6/b2d9f1932a36fbf314aaf29e832d2187143784": "50516f0bf4323639e9860dd332d42bf6",
".git/objects/a9/a6120bbb680552e8e4cd4d495eea548a81130b": "6b07da840813064dfa070157f1be433c",
".git/objects/a9/1d80ca4e42b07c91f2bea67752fc66ece7ef61": "21e1f79e306aafa2612b2626da9670d8",
".git/objects/af/ca460853fde768339622d71fc405521acb40dd": "179b49447bbacc1b77e5644ee0637a0d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a6/636f3288d97cae27c9edfe23c9664c937dd47b": "ae932aa538b43ba7294206a3a99036a3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/e8/afd78d3046a6113ebf2884f31e910f2e076b0f": "d0f5c2c9e9ed39561c121f958a8325a0",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c5/e4e987c92af37141aeb85c1bb2c87855db32ec": "ea420981423b2c01dc66a954c8e3a25d",
".git/objects/79/501931a116b03a94a7ee186803c48b895105d6": "9570f8d3b2252bfc58aaa80e861ef38e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/77/6c113d9f4c8770cd05432659b24930ca8fff8d": "593d703f0a7b91b80a4f56300768996b",
".git/objects/70/216db87768a9de48c6c473d8803a98d8e3c8c1": "f6f8511680d5fac9613754ed81f8ba44",
".git/objects/23/e7c0406aa2987fb7d49d94e1d56d1a69011a16": "9dacc607ca3204b61a44b7afc356259a",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/85/39afd926e90e196bf98fe6ad3fabb3ed76729e": "164d8dda4ec8e6c029b2fdefbaccf660",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/40/4d9f18d60bd54f6b9d3f7e779bc58c31b5b31b": "42a00eba545d4da149749c1d4e03083a",
".git/objects/2e/58b47492c43c9408663e5c4eae178c090bc7c6": "f35ce723f8bc8f4bf884be086ea63df5",
".git/objects/2e/89c9c1e75b028a3dc4fa5a41efe17aa7fa2d9e": "6315aab5509875f50c48d8124f70e66c",
".git/objects/7f/721e7943f4d258eb840a349551dd64f8a6e20c": "217ec90b2b2a906354a2dc20576f74bf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e9cef8190ab649fa3551014403951e17",
".git/logs/refs/heads/main": "946c8eef1577814561c757f8d8b3fcd5",
".git/logs/refs/remotes/origin/main": "0035a3ed94a6e1f6a02290e2fba4db29",
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
".git/refs/heads/main": "9e897007461136398393b6296b49b2a6",
".git/refs/remotes/origin/main": "9e897007461136398393b6296b49b2a6",
".git/index": "724f3cb6ddfa6b793152b009f356f9c4",
".git/COMMIT_EDITMSG": "97307f6ce731a72fc898f3f8710a115d",
"assets/AssetManifest.json": "c637068fc4d703ca2d70f8f137e0b281",
"assets/NOTICES": "693d2f77d6af852d33a19946ad6f4a1a",
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
