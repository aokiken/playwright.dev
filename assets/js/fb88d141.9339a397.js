"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[74089],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,w=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return r?o.createElement(w,s(s({ref:t},u),{},{components:r})):o.createElement(w,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58215:function(e,t,r){var o=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return o.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return p}});var o=r(67294),n=r(79443);var a=function(){var e=(0,o.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=r(86010),i="tabItem_1uMI",c="tabItemActive_2DSg";var l=37,u=39;var p=function(e){var t=e.lazy,r=e.block,n=e.defaultValue,p=e.values,m=e.groupId,d=e.className,w=a(),b=w.tabGroupChoices,k=w.setTabGroupChoices,h=(0,o.useState)(n),x=h[0],f=h[1],g=o.Children.toArray(e.children),v=[];if(null!=m){var N=b[m];null!=N&&N!==x&&p.some((function(e){return e.value===N}))&&f(N)}var C=function(e){var t=e.currentTarget,r=v.indexOf(t),o=p[r].value;f(o),null!=m&&(k(m,o),setTimeout((function(){var e,r,o,n,a,s,i,l;(e=t.getBoundingClientRect(),r=e.top,o=e.left,n=e.bottom,a=e.right,s=window,i=s.innerHeight,l=s.innerWidth,r>=0&&a<=l&&n<=i&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},y=function(e){var t,r;switch(e.keyCode){case u:var o=v.indexOf(e.target)+1;r=v[o]||v[0];break;case l:var n=v.indexOf(e.target)-1;r=v[n]||v[v.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},d)},p.map((function(e){var t=e.value,r=e.label;return o.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":x===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:y,onFocus:C,onClick:C},r)}))),t?(0,o.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}},79443:function(e,t,r){var o=(0,r(67294).createContext)(void 0);t.Z=o},41122:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var o=r(22122),n=r(19756),a=(r(67294),r(3905)),s=(r(55064),r(58215),{id:"class-chromiumbrowsercontext",title:"ChromiumBrowserContext"}),i=void 0,c={unversionedId:"api/class-chromiumbrowsercontext",id:"version-1.9.0/api/class-chromiumbrowsercontext",isDocsHomePage:!1,title:"ChromiumBrowserContext",description:"* extends: [BrowserContext]",source:"@site/versioned_docs/version-1.9.0/api/class-chromiumbrowsercontext.mdx",sourceDirName:"api",slug:"/api/class-chromiumbrowsercontext",permalink:"/docs/1.9.0/api/class-chromiumbrowsercontext",version:"1.9.0",frontMatter:{id:"class-chromiumbrowsercontext",title:"ChromiumBrowserContext"},sidebar:"version-1.9.0/api",previous:{title:"ChromiumBrowser",permalink:"/docs/1.9.0/api/class-chromiumbrowser"},next:{title:"ChromiumCoverage",permalink:"/docs/1.9.0/api/class-chromiumcoverage"}},l=[{value:"chromiumBrowserContext.on(&#39;backgroundpage&#39;)",id:"chromiumbrowsercontextonbackgroundpage",children:[]},{value:"chromiumBrowserContext.on(&#39;serviceworker&#39;)",id:"chromiumbrowsercontextonserviceworker",children:[]},{value:"chromiumBrowserContext.backgroundPages()",id:"chromiumbrowsercontextbackgroundpages",children:[]},{value:"chromiumBrowserContext.newCDPSession(page)",id:"chromiumbrowsercontextnewcdpsessionpage",children:[]},{value:"chromiumBrowserContext.serviceWorkers()",id:"chromiumbrowsercontextserviceworkers",children:[]}],u={toc:l};function p(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"extends: ",(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"))),(0,a.kt)("p",null,"Chromium-specific features including background pages, service worker support, etc."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const backgroundPage = await context.waitForEvent('backgroundpage');\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-chromiumbrowsercontext#chromiumbrowsercontextonbackgroundpage"},"chromiumBrowserContext.on('backgroundpage')")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-chromiumbrowsercontext#chromiumbrowsercontextonserviceworker"},"chromiumBrowserContext.on('serviceworker')")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-chromiumbrowsercontext#chromiumbrowsercontextbackgroundpages"},"chromiumBrowserContext.backgroundPages()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-chromiumbrowsercontext#chromiumbrowsercontextnewcdpsessionpage"},"chromiumBrowserContext.newCDPSession(page)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-chromiumbrowsercontext#chromiumbrowsercontextserviceworkers"},"chromiumBrowserContext.serviceWorkers()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextonclose"},"browserContext.on('close')")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextonpage"},"browserContext.on('page')")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextaddcookiescookies"},"browserContext.addCookies(cookies)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextaddinitscriptscript-arg"},"browserContext.addInitScript(script[, arg])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextbrowser"},"browserContext.browser()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextclearcookies"},"browserContext.clearCookies()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextclearpermissions"},"browserContext.clearPermissions()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextclose"},"browserContext.close()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextcookiesurls"},"browserContext.cookies([urls])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextexposebindingname-callback-options"},"browserContext.exposeBinding(name, callback[, options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextexposefunctionname-callback"},"browserContext.exposeFunction(name, callback)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextgrantpermissionspermissions-options"},"browserContext.grantPermissions(permissions[, options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextnewpage"},"browserContext.newPage()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextpages"},"browserContext.pages()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextrouteurl-handler"},"browserContext.route(url, handler)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextsetdefaultnavigationtimeouttimeout"},"browserContext.setDefaultNavigationTimeout(timeout)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextsetdefaulttimeouttimeout"},"browserContext.setDefaultTimeout(timeout)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextsetextrahttpheadersheaders"},"browserContext.setExtraHTTPHeaders(headers)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextsetgeolocationgeolocation"},"browserContext.setGeolocation(geolocation)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextsethttpcredentialshttpcredentials"},"browserContext.setHTTPCredentials(httpCredentials)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextsetofflineoffline"},"browserContext.setOffline(offline)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextstoragestateoptions"},"browserContext.storageState([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextunrouteurl-handler"},"browserContext.unroute(url[, handler])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextwaitforeventevent-optionsorpredicate"},"browserContext.waitForEvent(event[, optionsOrPredicate])"))),(0,a.kt)("h2",{id:"chromiumbrowsercontextonbackgroundpage"},"chromiumBrowserContext.on('backgroundpage')"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: <",(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-page",title:"Page"},"Page"),">")),(0,a.kt)("p",null,"Emitted when new background page is created in the context."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Only works with persistent context."))),(0,a.kt)("h2",{id:"chromiumbrowsercontextonserviceworker"},"chromiumBrowserContext.on('serviceworker')"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: <",(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-worker",title:"Worker"},"Worker"),">")),(0,a.kt)("p",null,"Emitted when new service worker is created in the context."),(0,a.kt)("h2",{id:"chromiumbrowsercontextbackgroundpages"},"chromiumBrowserContext.backgroundPages()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: <",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-page",title:"Page"},"Page"),">>")),(0,a.kt)("p",null,"All existing background pages in the context."),(0,a.kt)("h2",{id:"chromiumbrowsercontextnewcdpsessionpage"},"chromiumBrowserContext.newCDPSession(page)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"page")," <",(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-page",title:"Page"},"Page"),"> Page to create new session for."),(0,a.kt)("li",{parentName:"ul"},"returns: <",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-cdpsession",title:"CDPSession"},"CDPSession"),">>")),(0,a.kt)("p",null,"Returns the newly created session."),(0,a.kt)("h2",{id:"chromiumbrowsercontextserviceworkers"},"chromiumBrowserContext.serviceWorkers()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: <",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-worker",title:"Worker"},"Worker"),">>")),(0,a.kt)("p",null,"All existing service workers in the context."))}p.isMDXComponent=!0},86010:function(e,t,r){function o(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=o(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=o(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);