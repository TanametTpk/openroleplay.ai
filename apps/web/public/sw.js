if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const t=e=>c(e,n),o={module:{uri:n},exports:r,require:t};s[n]=Promise.all(a.map((e=>o[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-d25a3628"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"5337f4c359a7abbddb406a80c265e791"},{url:"/_next/static/Fe4SJFbBvtor3-QyKQHWT/_buildManifest.js",revision:"748b301c2745fa3c33241b4484ba162d"},{url:"/_next/static/Fe4SJFbBvtor3-QyKQHWT/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1122.a8f08a81e5bb6be7.js",revision:"a8f08a81e5bb6be7"},{url:"/_next/static/chunks/135.02802b6ef5795561.js",revision:"02802b6ef5795561"},{url:"/_next/static/chunks/2100-d8d30d77c7d5a882.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/2318-6fc2e6601b25ca17.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/2389-cf2bf7d7a7e6b855.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/2600-152a2a18fcd90e57.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/2679-87fdb4867b06b0b3.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/2805-0276a24399175d1b.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/3160-dc7818c14071de47.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/4060-e2784d06462c1df6.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/4237-4eb1fb40b1606fef.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/4280.ddd3e22daf38da7b.js",revision:"ddd3e22daf38da7b"},{url:"/_next/static/chunks/4569.4626ad01b661540c.js",revision:"4626ad01b661540c"},{url:"/_next/static/chunks/4724-463f0712eb69bc0f.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/4745-517c113172c03c56.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/4908-e357fcbb538226c0.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/5436-06055edba65aa84c.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/5862-8d106b3358c6d00d.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/5872-ec36112e448d0a1e.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/5922-75751773450e7fa3.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/6040-f921c77af6210a48.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/6134-ffc20db8b5c5e1d5.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/6175-3dfda87cf10c4c31.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/6196-4b286f2839c8d4c4.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/625-37fd4a5cafe2bed2.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/6425-b19cc0984cceac37.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/6589-e9d4855ff4d54f2e.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/7155.350e3b1b458cd8fb.js",revision:"350e3b1b458cd8fb"},{url:"/_next/static/chunks/7332-f26a4ef45872a0f3.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/7536-ac2fe2ef44a1e915.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/7649-b2297878b57f8e7b.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/8329.673f7ca4f9a43025.js",revision:"673f7ca4f9a43025"},{url:"/_next/static/chunks/8375.c21a9ce02fc6920b.js",revision:"c21a9ce02fc6920b"},{url:"/_next/static/chunks/9037-82b9aa8665913f8d.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/9212-3d0ffa0fbb7fe579.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/9231-f1d8c7aa4aff3e52.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/9402-ce6cd4e7f1886f1b.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/9684-a5ac7c0e54fb613f.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/9e33a154-193414a441a16a7d.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/a130e3cb-7fe1e457bcab7fe7.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/_not-found-d27a9ffb66391951.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/character/%5Bid%5D/page-f89531c603588082.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/character/%5Bid%5D/stories/page-10c16804f77807b7.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/character/%5Bid%5D/story/%5BstoryId%5D/page-5dfeef82d4637546.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/characters/page-2ec474c932eb58bd.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/chats/page-265fa85e87d80843.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/crystal/terms/page-cca88933895b5b1b.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/crystals/page-b829ca2455b517b5.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/dmca/page-f069ec1476940b26.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/global-error-82642af04080348e.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/images/page-bdd74c06520cac1f.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/layout-72c6c11c0c311f04.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/loading-3b9b9785c4a5ce6c.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/models/page-575a7371963e3e8f.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/my-characters/create/page-f8f4790355d36e2c.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/my-characters/page-ec874cdeec631155.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/my-personas/page-2bf24180dd5d99c2.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/my/page-542b130e98af047b.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/page-b7c968b5de5b8587.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/safety/page-c404bce1b67291fb.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/search/page-c88bf94bf64a3bc0.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/sign-in/page-50d2bb95ecf731fa.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/app/stories/page-a7d5cba3301306e6.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/e5c2b562-74f182fc341835a1.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/framework-af9b1d45774ad36d.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/main-11e66bec74b6244d.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/main-app-7e14806412fb9774.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/pages/_app-3f113a1a238a3e1e.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/pages/_error-433879efa3631dd8.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-1f8c966d497d8719.js",revision:"Fe4SJFbBvtor3-QyKQHWT"},{url:"/_next/static/css/9e1564faacd12515.css",revision:"9e1564faacd12515"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/5dfb1d0134f1564c-s.p.otf",revision:"8088caee968a1baa9e8ff0ed9cd84b98"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/circles.svg",revision:"2517f9eb2aa231a483a2b0c27da9d454"},{url:"/locales/af.json",revision:"13c7462260843322cb437e8b13f3f555"},{url:"/locales/ar.json",revision:"b9e75edb7d0b9f013f1fd3e4ac3ae28e"},{url:"/locales/ca.json",revision:"13c7462260843322cb437e8b13f3f555"},{url:"/locales/cs.json",revision:"8fa79fc1550ce0e57beb379aca6c8d5a"},{url:"/locales/da.json",revision:"c170d0c9be928c47086e862af57b6f28"},{url:"/locales/de.json",revision:"de4804f0ba42054ba4fe6cc6fab87463"},{url:"/locales/el.json",revision:"62c02235d393f37a61b7c235af78a2bc"},{url:"/locales/en.json",revision:"13c7462260843322cb437e8b13f3f555"},{url:"/locales/es.json",revision:"591c34ee62d756a74e0da5619cbf9293"},{url:"/locales/fi.json",revision:"877d4242a08181e51a66cff272f03356"},{url:"/locales/fr.json",revision:"4af574b74fe2db380a3783baed372506"},{url:"/locales/he.json",revision:"13c7462260843322cb437e8b13f3f555"},{url:"/locales/hi.json",revision:"13c7462260843322cb437e8b13f3f555"},{url:"/locales/hu.json",revision:"13c7462260843322cb437e8b13f3f555"},{url:"/locales/it.json",revision:"e393c026506bbbea8fc600e38ebb9c4d"},{url:"/locales/ja.json",revision:"22d12da2267de43a00342aa820092550"},{url:"/locales/ko.json",revision:"ad3d52f0aed48ec03f09de6709bb8b5d"},{url:"/locales/nl.json",revision:"93479168d32d9fec88ce7830a11b4dec"},{url:"/locales/no.json",revision:"f597bd678c73929c8dc2d56d7d6dbed3"},{url:"/locales/pl.json",revision:"233b3909e564cf51da0a7583a98d4ae2"},{url:"/locales/pt.json",revision:"18ea93ba21c05600f61ee378caa12916"},{url:"/locales/ro.json",revision:"e020e847a7912c2304806ca44fe2eec5"},{url:"/locales/ru.json",revision:"7c509ff72d7ce6bc0eeecdbfd56b555e"},{url:"/locales/source/en.json",revision:"dbd36453ab460568bcc08bcfb670b0e3"},{url:"/locales/sr.json",revision:"13c7462260843322cb437e8b13f3f555"},{url:"/locales/sv.json",revision:"5f63629b626969f8c712a2b9150db1d2"},{url:"/locales/tr.json",revision:"13c7462260843322cb437e8b13f3f555"},{url:"/locales/uk.json",revision:"5129bbdc4332d8eb822941361427624d"},{url:"/locales/vi.json",revision:"13c7462260843322cb437e8b13f3f555"},{url:"/locales/zh.json",revision:"5527924dc5213ee13220f7a5cb480c68"},{url:"/models/claude.png",revision:"3e6e8330027dc9369c471b634cfd28b1"},{url:"/models/google.png",revision:"886f3b5d416d9e0ceb1c587c50797dca"},{url:"/models/meta.png",revision:"55e27bfec4c68cbd5b21bb0252678774"},{url:"/models/mistral.png",revision:"1a54eaf9c7ff9879ae5d032aa0e77a3d"},{url:"/models/openai.png",revision:"9da0c2d23c2b268a1071ce3b2011c462"},{url:"/models/perplexity.png",revision:"e4434a95089af43db6bd32f7ca4584d0"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/og.jpg",revision:"98b161f61316f31901ff7a3266b144d5"},{url:"/orp.svg",revision:"07332768de5358184d92c5a977393e84"},{url:"/privacy.html",revision:"0ecec27f9cd4c82812480272940e0020"},{url:"/pwa/icon-192x192.png",revision:"859e7d6fe5a01910373047b0fed65803"},{url:"/pwa/icon-256x256.png",revision:"aedf90f2f2f95573340e21b912bc9537"},{url:"/pwa/icon-384x384.png",revision:"086fa31184c5a778d2b81d2cb8488710"},{url:"/pwa/icon-512x512.png",revision:"2c63d2935cb270ec246c4fc2f636255e"},{url:"/pwa/ipad_splash.png",revision:"7655d6918b8ff4e764e6c1da197d5c20"},{url:"/pwa/ipadpro1_splash.png",revision:"f955f1c6cc06ffebc034bb3e06301d99"},{url:"/pwa/ipadpro2_splash.png",revision:"f40870d0ed9edf36196329564abf82b1"},{url:"/pwa/ipadpro3_splash.png",revision:"3fcf0e196e70b273d300650c88cf981f"},{url:"/pwa/iphone5_splash.png",revision:"1f94f04b3902a30a50176512ab25e0c4"},{url:"/pwa/iphone6_splash.png",revision:"afabcb45720d56730ab3d1e92796df9f"},{url:"/pwa/iphoneplus_splash.png",revision:"c7e1a49efe949e8dd38e68e7603ea3f8"},{url:"/pwa/iphonex_splash.png",revision:"42177ac18901b678a6aecbc5d6ff5540"},{url:"/pwa/iphonexr_splash.png",revision:"8b2fffae58a4c3445dfee23e85d5a379"},{url:"/pwa/iphonexsmax_splash.png",revision:"906544cebcb4a262c40205f2d37653c6"},{url:"/robots.txt",revision:"ea3a379c50c3bfc7b4965c6119cf0bff"},{url:"/shop/crystal.png",revision:"b8c4b1daffa4c8cdb824737494ba5124"},{url:"/shop/tier1.png",revision:"176f821f15c960ef3350708e755212ae"},{url:"/shop/tier2.png",revision:"126fc5a824f2a77e9916d08a43075b85"},{url:"/shop/tier3.png",revision:"0ee1ff597285e2f7e587016f52dd6438"},{url:"/shop/tier4.png",revision:"5cd8ad170a688ddd9e93064040ecd9b0"},{url:"/shop/tier5.png",revision:"373b07998284f2fe6fd6379b77eb1856"},{url:"/shop/tier6.png",revision:"18ce4f0c1c2f0b5aa67003cfb009ed36"},{url:"/terms.html",revision:"e25e377b1ece6dec65c0af3b3748ffc9"},{url:"/turborepo.svg",revision:"3d86b98e3d7c252c00dad343f37e6191"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
