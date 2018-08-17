(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{3:function(t,e,c){"use strict";function n(t){const e=new Uint8Array(t),c=String.fromCharCode(...e);return console.log("string",c),c}function r(t){const e=t.length,c=new ArrayBuffer(e),n=new Uint8Array(c);for(let c=0;c<e;c++)n[c]=t.charCodeAt(c),console.log({i:c},n[c]);return c}c.d(e,"a",function(){return h}),c.d(e,"f",function(){return d}),c.d(e,"c",function(){return p}),c.d(e,"b",function(){return f}),c.d(e,"e",function(){return g}),c.d(e,"h",function(){return w}),c.d(e,"g",function(){return v}),c.d(e,"d",function(){return m});const o="00010000-89bd-43c8-9231-40f6e305f96d",s="00010001-89bd-43c8-9231-40f6e305f96d",i="00010002-89bd-43c8-9231-40f6e305f96d",a="00010005-89bd-43c8-9231-40f6e305f96d",b="00010004-89bd-43c8-9231-40f6e305f96d",j=!0,u=!1;let l,O;const h={COMPLETED:"COMPLETED",DISCONNECTED:"DISCONNECTED",SCANNING:"SCANNING",ASSOCIATING:"ASSOCIATING"};function d(){return!!navigator.bluetooth&&!!navigator.bluetooth.requestDevice}async function p(){return l=await navigator.bluetooth.requestDevice({filters:[{name:["IoT Gateway WiFi Setup"]}],optionalServices:[o]}),console.log("device",l),l}async function f(){return l?(O=await l.gatt.connect(),console.log("server",O),!0):(console.log("Device not established yet"),null)}async function g(){if(!O)return console.log("Server not established. Try to (re-)connect first."),null;const t=await O.getPrimaryService(o);console.log("service",t);const e=await t.getCharacteristic(b);console.log("characteristic",e);try{const t=await e.readValue();console.log("Wifi SSIDs value...",t);const c=n(t.buffer).split(" ");return console.log("ssids",c),c}catch(t){return console.error("Error getting SSIDs",t),null}}async function w(t){if(console.log("setWifiSSID",`"${t}"`),!O)return console.log("Server not established. Try to (re-)connect first."),u;const e=await O.getPrimaryService(o);console.log("service",e);const c=await e.getCharacteristic(s);console.log("characteristic",c);const n=r(t);console.log("Write buffer",n);try{const e=await c.writeValue(n);return console.log({response:e}),j}catch(e){console.error("Error setting wifi ssid",t,e)}return u}async function v(t){if(console.log("setWifiPassword",t),!O)return console.log("Server not established. Try to (re-)connect first."),null;const e=await O.getPrimaryService(o);console.log("service",e);const c=await e.getCharacteristic(i);console.log("characteristic",c);const n=r(t);console.log("Write buffer",n);try{const e=await c.writeValue(n);return console.log({response:e}),j}catch(e){console.error("Error setting wifi password",t,e)}return u}async function m(){if(console.log("getNetworkState"),!O)return console.log("Server not established. Try to (re-)connect first."),null;const t=await O.getPrimaryService(o);console.log("service",t);const e=await t.getCharacteristic(a);console.log("characteristic",e);try{const t=await e.readValue();console.log("Network status value...",t);const c=n(t.buffer);console.log("Network status string",c);const r=c.split(",");return r.length<2?(console.error("Invalid network status",c,r),null):{status:r[0],ipAddress:r[1]}}catch(t){return console.error("Error getting network state",t),null}}},6:function(t,e,c){"use strict";c.r(e);var n=c(0),r=c(1),o=c(3);var s={onClickConnect(){o.c().then(()=>(this.set({connecting:!0}),o.b())).then(()=>o.e()).then(t=>{t?(console.log("Setting wifi SSIDs in Store:",t),this.store.set({wifiSSIDs:t}),this.set({connecting:!1}),Object(r.a)("/wifi")):(console.error("No wifi SSIDs returned",t),this.set({error:!0}))}).catch(t=>{console.error("Bluetooth connection error",t),this.set({error:!0}),this.set({connecting:!1})})}};function i(t,e){var c,r;return{c(){c=Object(n.m)("h3"),r=Object(n.n)("There was a problem connecting to your Gateway. Please try again."),this.h()},l(t){c=Object(n.j)(t,"H3",{class:!0},!1);var e=Object(n.i)(c);r=Object(n.k)(e,"There was a problem connecting to your Gateway. Please try again."),e.forEach(n.p),this.h()},h(){c.className="error"},m(t,e){Object(n.u)(c,t,e),Object(n.d)(r,c)},d(t){t&&Object(n.p)(c)}}}function a(t,e){var c,r;return{c(){c=Object(n.m)("button"),r=Object(n.m)("span"),this.h()},l(t){c=Object(n.j)(t,"BUTTON",{id:!0,disabled:!0,class:!0},!1);var e=Object(n.i)(c);r=Object(n.j)(e,"SPAN",{class:!0},!1),Object(n.i)(r).forEach(n.p),e.forEach(n.p),this.h()},h(){r.className="loadingSpinner",c.id="connect",c.disabled=!0,c.className="svelte-1pcd5xj"},m(t,e){Object(n.u)(c,t,e),Object(n.d)(r,c)},d(t){t&&Object(n.p)(c)}}}function b(t,e){var c,r;function o(e){t.onClickConnect()}return{c(){c=Object(n.m)("button"),r=Object(n.n)("Connect"),this.h()},l(t){c=Object(n.j)(t,"BUTTON",{id:!0,class:!0},!1);var e=Object(n.i)(c);r=Object(n.k)(e,"Connect"),e.forEach(n.p),this.h()},h(){Object(n.c)(c,"click",o),c.id="connect",c.className="svelte-1pcd5xj"},m(t,e){Object(n.u)(c,t,e),Object(n.d)(r,c)},d(t){t&&Object(n.p)(c),Object(n.z)(c,"click",o)}}}function j(t,e){var c,r,o,s,i,a,b,j,u,l,O;return{c(){c=Object(n.m)("h2"),r=Object(n.n)("Sorry"),o=Object(n.n)("\n\n\t"),s=Object(n.m)("p"),i=Object(n.n)("This service requires Web Bluetooth, which your browser does not support."),a=Object(n.n)("\n\t"),b=Object(n.m)("p"),j=Object(n.n)("Please use an alternative setup method or try again in a \n\t\t"),u=Object(n.m)("a"),l=Object(n.n)("supporting browser"),O=Object(n.n)(" (such as Samsung Internet, Chrome or Opera)."),this.h()},l(t){c=Object(n.j)(t,"H2",{},!1);var e=Object(n.i)(c);r=Object(n.k)(e,"Sorry"),e.forEach(n.p),o=Object(n.k)(t,"\n\n\t"),s=Object(n.j)(t,"P",{},!1);var h=Object(n.i)(s);i=Object(n.k)(h,"This service requires Web Bluetooth, which your browser does not support."),h.forEach(n.p),a=Object(n.k)(t,"\n\t"),b=Object(n.j)(t,"P",{},!1);var d=Object(n.i)(b);j=Object(n.k)(d,"Please use an alternative setup method or try again in a \n\t\t"),u=Object(n.j)(d,"A",{href:!0},!1);var p=Object(n.i)(u);l=Object(n.k)(p,"supporting browser"),p.forEach(n.p),O=Object(n.k)(d," (such as Samsung Internet, Chrome or Opera)."),d.forEach(n.p),this.h()},h(){u.href="https://caniuse.com/#feat=web-bluetooth"},m(t,e){Object(n.u)(c,t,e),Object(n.d)(r,c),Object(n.u)(o,t,e),Object(n.u)(s,t,e),Object(n.d)(i,s),Object(n.u)(a,t,e),Object(n.u)(b,t,e),Object(n.d)(j,b),Object(n.d)(u,b),Object(n.d)(l,u),Object(n.d)(O,b)},p:n.v,d(t){t&&(Object(n.p)(c),Object(n.p)(o),Object(n.p)(s),Object(n.p)(a),Object(n.p)(b))}}}function u(t,e){var c,r,o,s,j,u,l,O,h,d,p,f=e.error&&i();function g(t){return t.connecting?a:b}var w=g(e),v=w(t,e);return{c(){f&&f.c(),c=Object(n.n)("\n\n\t"),r=Object(n.m)("h3"),o=Object(n.n)("To setup your Gateway and configure it to use your wi-fi network, follow these steps."),s=Object(n.n)("\n\n\t"),j=Object(n.m)("h2"),u=Object(n.n)("Step 1"),l=Object(n.n)("\n\n\t"),O=Object(n.m)("p"),h=Object(n.n)("Check your gateway is switched on and press the button to connect."),d=Object(n.n)("\n\n\t"),v.c(),p=Object(n.l)()},l(t){f&&f.l(t),c=Object(n.k)(t,"\n\n\t"),r=Object(n.j)(t,"H3",{},!1);var e=Object(n.i)(r);o=Object(n.k)(e,"To setup your Gateway and configure it to use your wi-fi network, follow these steps."),e.forEach(n.p),s=Object(n.k)(t,"\n\n\t"),j=Object(n.j)(t,"H2",{},!1);var i=Object(n.i)(j);u=Object(n.k)(i,"Step 1"),i.forEach(n.p),l=Object(n.k)(t,"\n\n\t"),O=Object(n.j)(t,"P",{},!1);var a=Object(n.i)(O);h=Object(n.k)(a,"Check your gateway is switched on and press the button to connect."),a.forEach(n.p),d=Object(n.k)(t,"\n\n\t"),v.l(t),p=Object(n.l)()},m(t,e){f&&f.m(t,e),Object(n.u)(c,t,e),Object(n.u)(r,t,e),Object(n.d)(o,r),Object(n.u)(s,t,e),Object(n.u)(j,t,e),Object(n.d)(u,j),Object(n.u)(l,t,e),Object(n.u)(O,t,e),Object(n.d)(h,O),Object(n.u)(d,t,e),v.m(t,e),Object(n.u)(p,t,e)},p(e,n){n.error?f||((f=i()).c(),f.m(c.parentNode,c)):f&&(f.d(1),f=null),w!==(w=g(n))&&(v.d(1),(v=w(t,n)).c(),v.m(p.parentNode,p))},d(t){f&&f.d(t),t&&(Object(n.p)(c),Object(n.p)(r),Object(n.p)(s),Object(n.p)(j),Object(n.p)(l),Object(n.p)(O),Object(n.p)(d)),v.d(t),t&&Object(n.p)(p)}}}function l(t){if(Object(n.t)(this,t),this._state=Object(n.e)({supported:null,error:!1,connecting:!1},t.data),this._intro=!0,document.getElementById("svelte-1pcd5xj-style")||function(){var t=Object(n.m)("style");t.id="svelte-1pcd5xj-style",t.textContent="#connect.svelte-1pcd5xj{width:100%}",Object(n.d)(t,document.head)}(),t.root||(this._oncreate=[]),this._fragment=function(t,e){var c,r,o,s,i,a,b,l,O;function h(t){return 0==t.supported?j:t.supported?u:null}var d=h(e),p=d&&d(t,e);return{c(){c=Object(n.n)("\n\n\n\n"),r=Object(n.m)("h1"),o=Object(n.n)("Setup "),s=Object(n.m)("strong"),i=Object(n.n)("Things"),a=Object(n.n)(" "),b=Object(n.m)("img"),l=Object(n.n)("\n\n"),p&&p.c(),O=Object(n.l)(),this.h()},l(t){c=Object(n.k)(t,"\n\n\n\n"),r=Object(n.j)(t,"H1",{},!1);var e=Object(n.i)(r);o=Object(n.k)(e,"Setup "),s=Object(n.j)(e,"STRONG",{},!1);var j=Object(n.i)(s);i=Object(n.k)(j,"Things"),j.forEach(n.p),a=Object(n.k)(e," "),b=Object(n.j)(e,"IMG",{src:!0,alt:!0,width:!0,height:!0},!1),Object(n.i)(b).forEach(n.p),e.forEach(n.p),l=Object(n.k)(t,"\n\n"),p&&p.l(t),O=Object(n.l)(),this.h()},h(){document.title="Setup Things - Step 1",b.src="logo-light.svg",b.alt="Things logo",b.width="50",b.height="50"},m(t,e){Object(n.u)(c,t,e),Object(n.u)(r,t,e),Object(n.d)(o,r),Object(n.d)(s,r),Object(n.d)(i,s),Object(n.d)(a,r),Object(n.d)(b,r),Object(n.u)(l,t,e),p&&p.m(t,e),Object(n.u)(O,t,e)},p(e,c){d===(d=h(c))&&p?p.p(e,c):(p&&p.d(1),(p=d&&d(t,c))&&p.c(),p&&p.m(O.parentNode,O))},d(t){t&&(Object(n.p)(c),Object(n.p)(r),Object(n.p)(l)),p&&p.d(t),t&&Object(n.p)(O)}}}(this,this._state),this.root._oncreate.push(()=>{(function(){this.set({supported:o.f()})}).call(this),this.fire("update",{changed:Object(n.f)({},this._state),current:this._state})}),t.target){var e=Object(n.i)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(n.p),this._mount(t.target,t.anchor),Object(n.h)(this._oncreate)}}Object(n.e)(l.prototype,n.x),Object(n.e)(l.prototype,s),e.default=l}}]);