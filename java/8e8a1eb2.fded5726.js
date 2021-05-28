(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{192:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),i=(a(0),a(284)),l=(a(287),a(288),{id:"class-playwright",title:"Playwright"}),c={unversionedId:"api/class-playwright",id:"api/class-playwright",isDocsHomePage:!1,title:"Playwright",description:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:",source:"@site/docs/api/class-playwright.mdx",slug:"/api/class-playwright",permalink:"/java/docs/next/api/class-playwright",version:"current",sidebar:"api",next:{title:"Browser",permalink:"/java/docs/next/api/class-browser"}},o=[{value:"Playwright.close()",id:"playwrightclose",children:[]},{value:"Playwright.create()",id:"playwrightcreate",children:[]},{value:"Playwright.chromium()",id:"playwrightchromium",children:[]},{value:"Playwright.firefox()",id:"playwrightfirefox",children:[]},{value:"Playwright.selectors()",id:"playwrightselectors",children:[]},{value:"Playwright.webkit()",id:"playwrightwebkit",children:[]}],s={toc:o};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Browser browser = chromium.launch();\n      Page page = browser.newPage();\n      page.navigate("http://example.com");\n      // other actions...\n      browser.close();\n    }\n  }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-playwright#playwrightclose"}),"Playwright.close()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-playwright#playwrightcreate"}),"Playwright.create()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-playwright#playwrightchromium"}),"Playwright.chromium()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-playwright#playwrightfirefox"}),"Playwright.firefox()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-playwright#playwrightselectors"}),"Playwright.selectors()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-playwright#playwrightwebkit"}),"Playwright.webkit()"))),Object(i.b)("h2",{id:"playwrightclose"},"Playwright.close()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">")),Object(i.b)("p",null,"Terminates this instance of Playwright, will also close all created browsers if they are still running."),Object(i.b)("h2",{id:"playwrightcreate"},"Playwright.create()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-playwright",title:"Playwright"}),"Playwright"),">")),Object(i.b)("p",null,"Launches new Playwright driver process and connects to it. ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/next/api/class-playwright#playwrightclose"}),"Playwright.close()")," should be called when the instance is no longer needed."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'Playwright playwright = Playwright.create()) {\nBrowser browser = playwright.webkit().launch();\nPage page = browser.newPage();\npage.navigate("https://www.w3.org/");\nplaywright.close();\n')),Object(i.b)("h2",{id:"playwrightchromium"},"Playwright.chromium()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/next/api/class-browser",title:"Browser"}),"Browser"),"."),Object(i.b)("h2",{id:"playwrightfirefox"},"Playwright.firefox()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/next/api/class-browser",title:"Browser"}),"Browser"),"."),Object(i.b)("h2",{id:"playwrightselectors"},"Playwright.selectors()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-selectors",title:"Selectors"}),"Selectors"),">")),Object(i.b)("p",null,"Selectors can be used to install custom selector engines. See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/next/selectors"}),"Working with selectors")," for more information."),Object(i.b)("h2",{id:"playwrightwebkit"},"Playwright.webkit()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/next/api/class-browser",title:"Browser"}),"Browser"),"."))}u.isMDXComponent=!0},283:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},284:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return w}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=u(a),h=r,w=b["".concat(l,".").concat(h)]||b[h]||p[h]||i;return a?n.a.createElement(w,c(c({ref:t},s),{},{components:a})):n.a.createElement(w,c({ref:t},s))}));function w(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=a[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},285:function(e,t,a){"use strict";var r=a(0),n=a(286);t.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},286:function(e,t,a){"use strict";var r=a(0),n=Object(r.createContext)(void 0);t.a=n},287:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(285),l=a(283),c=a(53),o=a.n(c),s=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,b=e.values,p=e.groupId,h=e.className,w=Object(i.a)(),f=w.tabGroupChoices,m=w.setTabGroupChoices,y=Object(r.useState)(c),g=y[0],j=y[1],d=r.Children.toArray(e.children);if(null!=p){var O=f[p];null!=O&&O!==g&&b.some((function(e){return e.value===O}))&&j(O)}var v=function(e){j(e),null!=p&&m(p,e)},P=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},h)},b.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(r.cloneElement)(d.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},288:function(e,t,a){"use strict";var r=a(3),n=a(0),i=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return i.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:a,className:n}),t)}}}]);