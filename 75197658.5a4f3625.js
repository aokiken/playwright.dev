(window.webpackJsonp=window.webpackJsonp||[]).push([[323],{395:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return a})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return b}));var s=t(3),n=t(7),o=(t(0),t(823)),c=(t(827),t(828),{id:"class-browserserver",title:"BrowserServer"}),a={unversionedId:"api/class-browserserver",id:"version-1.10.0/api/class-browserserver",isDocsHomePage:!1,title:"BrowserServer",description:"- browserServer.on('close')",source:"@site/versioned_docs/version-1.10.0/api/class-browserserver.mdx",slug:"/api/class-browserserver",permalink:"/docs/api/class-browserserver",version:"1.10.0",sidebar:"version-1.10.0/api",previous:{title:"BrowserContext",permalink:"/docs/api/class-browsercontext"},next:{title:"BrowserType",permalink:"/docs/api/class-browsertype"}},i=[{value:"browserServer.on(&#39;close&#39;)",id:"browserserveronclose",children:[]},{value:"browserServer.close()",id:"browserserverclose",children:[]},{value:"browserServer.kill()",id:"browserserverkill",children:[]},{value:"browserServer.process()",id:"browserserverprocess",children:[]},{value:"browserServer.wsEndpoint()",id:"browserserverwsendpoint",children:[]}],l={toc:i};function b(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(s.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(s.a)({parentName:"li"},{href:"/docs/api/class-browserserver#browserserveronclose"}),"browserServer.on('close')")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(s.a)({parentName:"li"},{href:"/docs/api/class-browserserver#browserserverclose"}),"browserServer.close()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(s.a)({parentName:"li"},{href:"/docs/api/class-browserserver#browserserverkill"}),"browserServer.kill()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(s.a)({parentName:"li"},{href:"/docs/api/class-browserserver#browserserverprocess"}),"browserServer.process()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(s.a)({parentName:"li"},{href:"/docs/api/class-browserserver#browserserverwsendpoint"}),"browserServer.wsEndpoint()"))),Object(o.b)("h2",{id:"browserserveronclose"},"browserServer.on('close')"),Object(o.b)("p",null,"Emitted when the browser server closes."),Object(o.b)("h2",{id:"browserserverclose"},"browserServer.close()"),Object(o.b)("p",null,"Closes the browser gracefully and makes sure the process is terminated."),Object(o.b)("h2",{id:"browserserverkill"},"browserServer.kill()"),Object(o.b)("p",null,"Kills the browser process and waits for the process to exit."),Object(o.b)("h2",{id:"browserserverprocess"},"browserServer.process()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(s.a)({parentName:"li"},{href:"https://nodejs.org/api/child_process.html",title:"ChildProcess"}),"ChildProcess"),">")),Object(o.b)("p",null,"Spawned browser application process."),Object(o.b)("h2",{id:"browserserverwsendpoint"},"browserServer.wsEndpoint()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(s.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(o.b)("p",null,"Browser websocket url."),Object(o.b)("p",null,"Browser websocket endpoint which can be used as an argument to ",Object(o.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/api/class-browsertype#browsertypeconnectparams"}),"browserType.connect(params)")," to establish connection to the browser."))}b.isMDXComponent=!0},823:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return v}));var s=t(0),n=t.n(s);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,s,n=function(e,r){if(null==e)return{};var t,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),b=function(e){var r=n.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=b(e.components);return n.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},w=n.a.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=b(t),w=s,v=p["".concat(c,".").concat(w)]||p[w]||u[w]||o;return t?n.a.createElement(v,a(a({ref:r},l),{},{components:t})):n.a.createElement(v,a({ref:r},l))}));function v(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,c=new Array(o);c[0]=w;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:s,c[1]=a;for(var l=2;l<o;l++)c[l]=t[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}w.displayName="MDXCreateElement"},824:function(e,r,t){"use strict";function s(e){var r,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=s(e[r]))&&(n&&(n+=" "),n+=t);else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}r.a=function(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=s(e))&&(n&&(n+=" "),n+=r);return n}},825:function(e,r,t){"use strict";var s=t(0),n=t(826);r.a=function(){var e=Object(s.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},826:function(e,r,t){"use strict";var s=t(0),n=Object(s.createContext)(void 0);r.a=n},827:function(e,r,t){"use strict";t(0),t(825),t(824),t(55)},828:function(e,r,t){"use strict";t(3),t(0)}}]);