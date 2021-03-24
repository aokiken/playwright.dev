(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{403:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(823)),o=(n(827),n(828),{id:"class-android",title:"Android"}),c={unversionedId:"api/class-android",id:"version-1.10.0/api/class-android",isDocsHomePage:!1,title:"Android",description:"Playwright has experimental support for Android automation. You can access android namespace via:",source:"@site/versioned_docs/version-1.10.0/api/class-android.mdx",slug:"/api/class-android",permalink:"/docs/api/class-android",version:"1.10.0",sidebar:"version-1.10.0/api",previous:{title:"Worker",permalink:"/docs/api/class-worker"},next:{title:"AndroidDevice",permalink:"/docs/api/class-androiddevice"}},l=[{value:"android.devices()",id:"androiddevices",children:[]},{value:"android.setDefaultTimeout(timeout)",id:"androidsetdefaulttimeouttimeout",children:[]}],s={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Playwright has ",Object(i.b)("strong",{parentName:"p"},"experimental")," support for Android automation. You can access android namespace via:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { _android: android } = require('playwright');\n")),Object(i.b)("p",null,"An example of the Android automation script would be:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { _android: android } = require('playwright');\n\n(async () => {\n  // Connect to the device.\n  const [device] = await android.devices();\n  console.log(`Model: ${device.model()}`);\n  console.log(`Serial: ${device.serial()}`);\n  // Take screenshot of the whole device.\n  await device.screenshot({ path: 'device.png' });\n\n  {\n    // --------------------- WebView -----------------------\n\n    // Launch an application with WebView.\n    await device.shell('am force-stop org.chromium.webview_shell');\n    await device.shell('am start org.chromium.webview_shell/.WebViewBrowserActivity');\n    // Get the WebView.\n    const webview = await device.webView({ pkg: 'org.chromium.webview_shell' });\n\n    // Fill the input box.\n    await device.fill({ res: 'org.chromium.webview_shell:id/url_field' }, 'github.com/microsoft/playwright');\n    await device.press({ res: 'org.chromium.webview_shell:id/url_field' }, 'Enter');\n\n    // Work with WebView's page as usual.\n    const page = await webview.page();\n    await page.waitForNavigation({ url: /.*microsoft\\/playwright.*/ });\n    console.log(await page.title());\n  }\n\n  {\n    // --------------------- Browser -----------------------\n\n    // Launch Chrome browser.\n    await device.shell('am force-stop com.android.chrome');\n    const context = await device.launchBrowser();\n\n    // Use BrowserContext as usual.\n    const page = await context.newPage();\n    await page.goto('https://webkit.org/');\n    console.log(await page.evaluate(() => window.location.href));\n    await page.screenshot({ path: 'page.png' });\n\n    await context.close();\n  }\n\n  // Close the device.\n  await device.close();\n})();\n")),Object(i.b)("p",null,"Note that since you don't need Playwright to install web browsers when testing Android, you can omit browser download via setting the following environment variable when installing Playwright:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm i -D playwright\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/class-android#androiddevices"}),"android.devices()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/class-android#androidsetdefaulttimeouttimeout"}),"android.setDefaultTimeout(timeout)"))),Object(i.b)("h2",{id:"androiddevices"},"android.devices()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/class-androiddevice",title:"AndroidDevice"}),"AndroidDevice"),">>>")),Object(i.b)("p",null,"Returns the list of detected Android devices."),Object(i.b)("h2",{id:"androidsetdefaulttimeouttimeout"},"android.setDefaultTimeout(timeout)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"timeout")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> Maximum time in milliseconds")),Object(i.b)("p",null,"This setting will change the default maximum time for all the methods accepting ",Object(i.b)("inlineCode",{parentName:"p"},"timeout")," option."))}d.isMDXComponent=!0},823:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||p[b]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},824:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},825:function(e,t,n){"use strict";var r=n(0),a=n(826);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},826:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},827:function(e,t,n){"use strict";n(0),n(825),n(824),n(55)},828:function(e,t,n){"use strict";n(3),n(0)}}]);