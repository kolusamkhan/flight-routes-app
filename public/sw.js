if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,n)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return i;default:return e(s)}}))).then((e=>{const s=n(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts("fallback-rAcfrQ1BYsiWONVgvheax.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"rAcfrQ1BYsiWONVgvheax"},{url:"/_next/static/chunks/main-d7717f8943d8ac2dad93.js",revision:"rAcfrQ1BYsiWONVgvheax"},{url:"/_next/static/chunks/pages/_app-759a5fd61c74a90f4ee2.js",revision:"rAcfrQ1BYsiWONVgvheax"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"rAcfrQ1BYsiWONVgvheax"},{url:"/_next/static/chunks/pages/_offline-ad086aaa4b8752465006.js",revision:"rAcfrQ1BYsiWONVgvheax"},{url:"/_next/static/chunks/pages/flight-routes-63ab77866bb51dd1cc08.js",revision:"rAcfrQ1BYsiWONVgvheax"},{url:"/_next/static/chunks/pages/home-8b40ca496b68edd53da1.js",revision:"rAcfrQ1BYsiWONVgvheax"},{url:"/_next/static/chunks/pages/index-1961b8cfb3c7389e5863.js",revision:"rAcfrQ1BYsiWONVgvheax"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"rAcfrQ1BYsiWONVgvheax"},{url:"/_next/static/chunks/webpack-fb76148cfcfb42ca18eb.js",revision:"rAcfrQ1BYsiWONVgvheax"},{url:"/_next/static/css/59ba659c2b89f356c77f.css",revision:"rAcfrQ1BYsiWONVgvheax"},{url:"/_next/static/css/b50587dcb8cfd12a9115.css",revision:"rAcfrQ1BYsiWONVgvheax"},{url:"/_next/static/css/e96ec0767370ee29fbb2.css",revision:"rAcfrQ1BYsiWONVgvheax"},{url:"/_next/static/media/tick.386924a8a4750139837bf6bf09e0916b.svg",revision:"rAcfrQ1BYsiWONVgvheax"},{url:"/_next/static/rAcfrQ1BYsiWONVgvheax/_buildManifest.js",revision:"rAcfrQ1BYsiWONVgvheax"},{url:"/_next/static/rAcfrQ1BYsiWONVgvheax/_ssgManifest.js",revision:"rAcfrQ1BYsiWONVgvheax"},{url:"/_offline",revision:"rAcfrQ1BYsiWONVgvheax"},{url:"/ek.svg",revision:"035bd079286c28a94eba8bf2d8df573c"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fz.svg",revision:"791df46be8a943f1d85ce236e20b4319"},{url:"/html-seo.html",revision:"1053cb8d6bdbc3ce1ba38de1df4ffd69"},{url:"/ld+json.json",revision:"a61a098f2bdf3185eaf12297e16233c3"},{url:"/my-html.html",revision:"ddfbac70cd4a3cd8f7cc3d7643bea4cd"},{url:"/qf.svg",revision:"f0f59c0c3cf707eec6eda101f89e8223"},{url:"/tick.svg",revision:"93235ff7018e9c7c31ca8c16c977ef67"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:r,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
