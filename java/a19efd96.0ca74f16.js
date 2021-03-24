(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(213)),c=(n(216),n(217),{id:"emulation",title:"Emulation"}),i={unversionedId:"emulation",id:"emulation",isDocsHomePage:!1,title:"Emulation",description:"Playwright allows overriding various parameters of the device where the browser is running:",source:"@site/docs/emulation.mdx",slug:"/emulation",permalink:"/java/docs/next/emulation",version:"current",sidebar:"docs",previous:{title:"Element selectors",permalink:"/java/docs/next/selectors"},next:{title:"Events",permalink:"/java/docs/next/events"}},l=[{value:"User agent",id:"user-agent",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Viewport",id:"viewport",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Locale &amp; timezone",id:"locale--timezone",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Permissions",id:"permissions",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Geolocation",id:"geolocation",children:[{value:"API reference",id:"api-reference-4",children:[]}]},{value:"Color scheme and media",id:"color-scheme-and-media",children:[{value:"API reference",id:"api-reference-5",children:[]}]}],s={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright allows overriding various parameters of the device where the browser is running:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"viewport size, device scale factor, touch support"),Object(o.b)("li",{parentName:"ul"},"locale, timezone"),Object(o.b)("li",{parentName:"ul"},"color scheme"),Object(o.b)("li",{parentName:"ul"},"geolocation")),Object(o.b)("p",null,"Most of these parameters are configured during the browser context construction, but some of them such as viewport size can be changed for individual pages."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#user-agent"}),"User agent")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#viewport"}),"Viewport")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#locale--timezone"}),"Locale & timezone")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#permissions"}),"Permissions")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#geolocation"}),"Geolocation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#color-scheme-and-media"}),"Color scheme and media"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"user-agent"},"User agent"),Object(o.b)("p",null,"All pages created in the context above will share the user agent specified:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setUserAgent("My user agent"));\n')),Object(o.b)("h3",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-browser#browsernewcontextoptions"}),"Browser.newContext([options])"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"viewport"},"Viewport"),Object(o.b)("p",null,"Create a context with custom viewport size:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Create context with given viewport\nBrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setViewportSize(1280, 1024));\n\n// Resize viewport for individual page\npage.setViewportSize(1600, 1200);\n\n// Emulate high-DPI\nBrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setViewportSize(2560, 1440)\n  .setDeviceScaleFactor(2);\n")),Object(o.b)("h3",{id:"api-reference-1"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-browser#browsernewcontextoptions"}),"Browser.newContext([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pagesetviewportsizewidth-height"}),"Page.setViewportSize(width, height)"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"locale--timezone"},"Locale & timezone"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'// Emulate locale and time\nBrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setLocale("de-DE")\n  .setTimezoneId("Europe/Berlin"));\n')),Object(o.b)("h3",{id:"api-reference-2"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-browser#browsernewcontextoptions"}),"Browser.newContext([options])"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"permissions"},"Permissions"),Object(o.b)("p",null,"Allow all pages in the context to show system notifications:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setPermissions(Arrays.asList("notifications"));\n')),Object(o.b)("p",null,"Grant all pages in the existing context access to current location:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'context.grantPermissions(Arrays.asList("geolocation"));\n')),Object(o.b)("p",null,"Grant notifications access from a specific domain:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'context.grantPermissions(Arrays.asList("notifications"),\n  new BrowserContext.GrantPermissionsOptions().setOrigin("https://skype.com"));\n')),Object(o.b)("p",null,"Revoke all permissions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"context.clearPermissions();\n")),Object(o.b)("h3",{id:"api-reference-3"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-browser#browsernewcontextoptions"}),"Browser.newContext([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-browsercontext#browsercontextgrantpermissionspermissions-options"}),"BrowserContext.grantPermissions(permissions[, options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-browsercontext#browsercontextclearpermissions"}),"BrowserContext.clearPermissions()"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"geolocation"},"Geolocation"),Object(o.b)("p",null,"Create a context with ",Object(o.b)("inlineCode",{parentName:"p"},'"geolocation"')," permissions granted:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setGeolocation(48.858455, 2.294474)\n  .setPermissions(Arrays.asList("geolocation")));\n')),Object(o.b)("p",null,"Change the location later:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"context.setGeolocation(new Geolocation(29.979097, 31.134256));\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note")," you can only change geolocation for all pages in the context."),Object(o.b)("h3",{id:"api-reference-4"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-browser#browsernewcontextoptions"}),"Browser.newContext([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-browsercontext#browsercontextsetgeolocationgeolocation"}),"BrowserContext.setGeolocation(geolocation)"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"color-scheme-and-media"},"Color scheme and media"),Object(o.b)("p",null,"Create a context with dark or light mode. Pages created in this context will follow this color scheme preference."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'// Create context with dark mode\nBrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setColorScheme(ColorScheme.DARK)); // or "light"\n\n// Create page with dark mode\nPage page = browser.newPage(new Browser.NewPageOptions()\n  .setColorScheme(ColorScheme.DARK)); // or "light"\n\n// Change color scheme for the page\npage.emulateMedia(new Page.EmulateMediaOptions().setColorScheme(ColorScheme.DARK));\n\n// Change media for page\npage.emulateMedia(new Page.EmulateMediaOptions().setMedia(Media.PRINT));\n')),Object(o.b)("h3",{id:"api-reference-5"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-browser#browsernewcontextoptions"}),"Browser.newContext([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pageemulatemediaoptions"}),"Page.emulateMedia([options])"))))}b.isMDXComponent=!0},212:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,j=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?a.a.createElement(j,i(i({ref:t},s),{},{components:n})):a.a.createElement(j,i({ref:t},s))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},214:function(e,t,n){"use strict";var r=n(0),a=n(215);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},215:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},216:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(214),c=n(212),i=n(55),l=n.n(i),s=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,u=e.groupId,m=e.className,j=Object(o.a)(),O=j.tabGroupChoices,d=j.setTabGroupChoices,f=Object(r.useState)(i),w=f[0],h=f[1],g=r.Children.toArray(e.children);if(null!=u){var v=O[u];null!=v&&v!==w&&p.some((function(e){return e.value===v}))&&h(v)}var x=function(e){h(e),null!=u&&d(u,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":w===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":w===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},n)}))),t?Object(r.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},217:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);