if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>s(e,o),f={module:{uri:o},exports:c,require:t};i[o]=Promise.all(n.map((e=>f[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-61cfd03a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-c33f9d2e.css",revision:null},{url:"assets/index-e34e3a40.js",revision:null},{url:"index.html",revision:"b3c352d183a27f6f663700d4db3d6c8f"},{url:"registerSW.js",revision:"0c584eca5ea20738e11a3649324fbada"},{url:"favicon.ico",revision:"09ee0b7280f75b5cd87951a534f37b83"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"icon-192.png",revision:"9611892cf8a87abc71a58324df76189f"},{url:"icon-512.png",revision:"a5bcebbebb02f7d3ea73d48bd99dab02"},{url:"manifest.webmanifest",revision:"fd3b88b998e091c421889c58fc8c00df"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
