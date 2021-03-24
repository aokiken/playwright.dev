(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{120:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var a=r(3),i=r(7),n=(r(0),r(823)),o={id:"class-playwright",title:"Playwright"},c={unversionedId:"api/class-playwright",id:"version-1.2.0/api/class-playwright",isDocsHomePage:!1,title:"Playwright",description:"Playwright module provides a method to launch a browser instance.",source:"@site/versioned_docs/version-1.2.0/api/class-playwright.mdx",slug:"/api/class-playwright",permalink:"/docs/1.2.0/api/class-playwright",version:"1.2.0",sidebar:"version-1.2.0/api",next:{title:"Browser",permalink:"/docs/1.2.0/api/class-browser"}},l=[{value:"playwright.chromium",id:"playwrightchromium",children:[]},{value:"playwright.devices",id:"playwrightdevices",children:[]},{value:"playwright.errors",id:"playwrighterrors",children:[]},{value:"playwright.firefox",id:"playwrightfirefox",children:[]},{value:"playwright.selectors",id:"playwrightselectors",children:[]},{value:"playwright.webkit",id:"playwrightwebkit",children:[]}],s={toc:l};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Playwright module provides a method to launch a browser instance.\nThe following is a typical example of using Playwright to drive automation:"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { chromium, firefox, webkit } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();  // Or 'firefox' or 'webkit'.\n  const page = await browser.newPage();\n  await page.goto('http://example.com');\n  // other actions...\n  await browser.close();\n})();\n")),Object(n.b)("p",null,"By default, the ",Object(n.b)("inlineCode",{parentName:"p"},"playwright")," NPM package automatically downloads browser executables during installation. The ",Object(n.b)("inlineCode",{parentName:"p"},"playwright-core")," NPM package can be used to skip automatic downloads."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.2.0/api/class-playwright#playwrightchromium"}),"playwright.chromium")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.2.0/api/class-playwright#playwrightdevices"}),"playwright.devices")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.2.0/api/class-playwright#playwrighterrors"}),"playwright.errors")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.2.0/api/class-playwright#playwrightfirefox"}),"playwright.firefox")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.2.0/api/class-playwright#playwrightselectors"}),"playwright.selectors")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.2.0/api/class-playwright#playwrightwebkit"}),"playwright.webkit"))),Object(n.b)("h2",{id:"playwrightchromium"},"playwright.chromium"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.2.0/api/class-browsertype#class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(n.b)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.2.0/api/class-chromiumbrowser#class-chromiumbrowser",title:"ChromiumBrowser"}),"ChromiumBrowser"),"."),Object(n.b)("h2",{id:"playwrightdevices"},"playwright.devices"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">")),Object(n.b)("p",null,"Returns a list of devices to be used with ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.2.0/api/class-browser#browsernewcontextoptions"}),Object(n.b)("inlineCode",{parentName:"a"},"browser.newContext([options])"))," or ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.2.0/api/class-browser#browsernewpageoptions"}),Object(n.b)("inlineCode",{parentName:"a"},"browser.newPage([options])")),". Actual list of devices can be found in ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Microsoft/playwright/blob/master/src/deviceDescriptors.ts"}),"src/deviceDescriptors.ts"),"."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { webkit, devices } = require('playwright');\nconst iPhone = devices['iPhone 6'];\n\n(async () => {\n  const browser = await webkit.launch();\n  const context = await browser.newContext({\n    ...iPhone\n  });\n  const page = await context.newPage();\n  await page.goto('http://example.com');\n  // other actions...\n  await browser.close();\n})();\n")),Object(n.b)("h2",{id:"playwrighterrors"},"playwright.errors"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"TimeoutError")," <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"> A class of ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.2.0/api/class-timeouterror#class-timeouterror",title:"TimeoutError"}),"TimeoutError"),".")))),Object(n.b)("p",null,"Playwright methods might throw errors if they are unable to fulfill a request. For example, ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.2.0/api/class-page#pagewaitforselectorselector-options"}),"page.waitForSelector(selector[, options])"),"\nmight fail if the selector doesn't match any nodes during the given timeframe."),Object(n.b)("p",null,"For certain types of errors Playwright uses specific error classes.\nThese classes are available via ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"#playwrighterrors"}),Object(n.b)("inlineCode",{parentName:"a"},"playwright.errors")),"."),Object(n.b)("p",null,"An example of handling a timeout error:"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"try {\n  await page.waitForSelector('.foo');\n} catch (e) {\n  if (e instanceof playwright.errors.TimeoutError) {\n    // Do something if this is a timeout.\n  }\n}\n")),Object(n.b)("h2",{id:"playwrightfirefox"},"playwright.firefox"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.2.0/api/class-browsertype#class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(n.b)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.2.0/api/class-firefoxbrowser#class-firefoxbrowser",title:"FirefoxBrowser"}),"FirefoxBrowser"),"."),Object(n.b)("h2",{id:"playwrightselectors"},"playwright.selectors"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.2.0/api/class-selectors#class-selectors",title:"Selectors"}),"Selectors"),">")),Object(n.b)("p",null,"Selectors can be used to install custom selector engines. See ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.2.0/api/working-with-selectors"}),"Working with selectors"),") for more information."),Object(n.b)("h2",{id:"playwrightwebkit"},"playwright.webkit"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.2.0/api/class-browsertype#class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(n.b)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.2.0/api/class-webkitbrowser#class-webkitbrowser",title:"WebKitBrowser"}),"WebKitBrowser"),"."))}b.isMDXComponent=!0},823:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return w}));var a=r(0),i=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(r),h=a,w=p["".concat(o,".").concat(h)]||p[h]||u[h]||n;return r?i.a.createElement(w,c(c({ref:t},s),{},{components:r})):i.a.createElement(w,c({ref:t},s))}));function w(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<n;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);