(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{875:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,d=l["".concat(a,".").concat(m)]||l[m]||b[m]||i;return n?o.a.createElement(d,c(c({ref:t},p),{},{components:n})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(875)),a={id:"working-with-chrome-extensions",title:"Working with Chrome Extensions"},c={unversionedId:"api/working-with-chrome-extensions",id:"api/working-with-chrome-extensions",isDocsHomePage:!1,title:"Working with Chrome Extensions",description:"Playwright can be used for testing Chrome Extensions.",source:"@site/docs/api/working-with-chrome-extensions.md",slug:"/api/working-with-chrome-extensions",permalink:"/docs/next/api/working-with-chrome-extensions",editUrl:"https://github.com/microsoft/playwright/edit/master/docs/docs/api/working-with-chrome-extensions.md",version:"current",sidebar:"api",previous:{title:"Working with selectors",permalink:"/docs/next/api/working-with-selectors"}},s=[],p={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Playwright can be used for testing Chrome Extensions."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"NOTE")," Extensions in Chrome / Chromium currently only work in non-headless mode.")),Object(i.b)("p",null,"The following is code for getting a handle to the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.chrome.com/extensions/background_pages"}),"background page")," of an extension whose source is located in ",Object(i.b)("inlineCode",{parentName:"p"},"./my-extension"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');\n\n(async () => {\n  const pathToExtension = require('path').join(__dirname, 'my-extension');\n  const userDataDir = '/tmp/test-user-data-dir';\n  const browserContext = await chromium.launchPersistentContext(userDataDir,{\n    headless: false,\n    args: [\n      `--disable-extensions-except=${pathToExtension}`,\n      `--load-extension=${pathToExtension}`\n    ]\n  });\n  const backgroundPage = browserContext.backgroundPages()[0];\n  // Test the background page as you would any other page.\n  await browserContext.close();\n})();\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"NOTE")," It is not yet possible to test extension popups or content scripts.")))}u.isMDXComponent=!0}}]);