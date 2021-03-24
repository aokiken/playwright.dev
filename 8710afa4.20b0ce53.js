(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{451:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(823)),c=(n(827),n(828),{id:"inspector",title:"Inspector"}),o={unversionedId:"inspector",id:"inspector",isDocsHomePage:!1,title:"Inspector",description:"Playwright Inspector is a GUI tool that helps authoring and debugging Playwright scripts.",source:"@site/docs/inspector.mdx",slug:"/inspector",permalink:"/docs/next/inspector",version:"current",sidebar:"docs",previous:{title:"Input",permalink:"/docs/next/input"},next:{title:"Installation",permalink:"/docs/next/installation"}},p=[{value:"Open Playwright Inspector",id:"open-playwright-inspector",children:[]},{value:"Stepping through the Playwright script",id:"stepping-through-the-playwright-script",children:[]},{value:"Debugging Selectors",id:"debugging-selectors",children:[]},{value:"Recording scripts",id:"recording-scripts",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Playwright Inspector is a GUI tool that helps authoring and debugging Playwright scripts."),Object(i.b)("img",{width:"712",alt:"Playwright Inspector",src:"https://user-images.githubusercontent.com/883973/108614092-8c478a80-73ac-11eb-9597-67dfce110e00.png"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#open-playwright-inspector"}),"Open Playwright Inspector")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#stepping-through-the-playwright-script"}),"Stepping through the Playwright script")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#debugging-selectors"}),"Debugging Selectors")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#recording-scripts"}),"Recording scripts"))),Object(i.b)("h2",{id:"open-playwright-inspector"},"Open Playwright Inspector"),Object(i.b)("p",null,"There are several ways of opening Playwright Inspector:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"PWDEBUG")," environment variable to run your scripts in debug mode. This configures Playwright for debugging and opens the inspector."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PWDEBUG=1 npm run test\n\n# Windows\n$ set PWDEBUG=1\n$ npm run test\n")),Object(i.b)("p",{parentName:"li"},"Additional useful defaults are configured when ",Object(i.b)("inlineCode",{parentName:"p"},"PWDEBUG")," is set:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Browsers launch in the headed mode"),Object(i.b)("li",{parentName:"ul"},"Default timeout is set to 0 (= no timeout)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Call ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/class-page#pagepause"}),"page.pause()")," method from your script when running in headed browser."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Pause on the following line.\nawait page.pause();\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use ",Object(i.b)("inlineCode",{parentName:"p"},"open")," or ",Object(i.b)("inlineCode",{parentName:"p"},"codegen")," commands in the Playwright ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/cli"}),"CLI"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ npx playwright codegen wikipedia.org\n")))),Object(i.b)("h2",{id:"stepping-through-the-playwright-script"},"Stepping through the Playwright script"),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"PWDEBUG")," is set, Playwright Inspector window will be opened and the script will be paused on the first Playwright statement:"),Object(i.b)("img",{width:"557",alt:"Paused on line",src:"https://user-images.githubusercontent.com/883973/108614337-71761580-73ae-11eb-9f61-3d29c52c9520.png"}),Object(i.b)("p",null,"Now we know what action is about to be performed and we can look into the details on that action. For example, when stopped on an input action such as ",Object(i.b)("inlineCode",{parentName:"p"},"click"),", the exact point Playwright is about to click is highlighted with the large red dot on the inspected page:"),Object(i.b)("img",{width:"344",alt:"Red dot on inspected page",src:"https://user-images.githubusercontent.com/883973/108614363-b69a4780-73ae-11eb-8f5e-51f9c91ec9b4.png"}),Object(i.b)("p",null,"By the time Playwright has paused on that click action, it has already performed actionability checks that can be found in the log:"),Object(i.b)("img",{width:"712",alt:"Action log",src:"https://user-images.githubusercontent.com/883973/108614564-72a84200-73b0-11eb-9de2-828b28d78b36.png"}),Object(i.b)("p",null,"If actionability can't be reached, it'll show action as pending:"),Object(i.b)("img",{width:"712",alt:"Screen Shot 2021-02-20 at 7 36 06 PM",src:"https://user-images.githubusercontent.com/883973/108614840-e6e3e500-73b2-11eb-998f-0cf31b2aa9a2.png"}),Object(i.b)("p",null,'You can step over each action using the "Step over" action or resume script without further pauses:'),Object(i.b)("center",null,Object(i.b)("img",{width:"98",alt:"Stepping toolbar",src:"https://user-images.githubusercontent.com/883973/108614389-f9f4b600-73ae-11eb-8df2-8d9ce9da5d5c.png"})),Object(i.b)("h2",{id:"debugging-selectors"},"Debugging Selectors"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click the Explore button to hover over elements in the screen and click them to automatically generate selectors for those elements."),Object(i.b)("li",{parentName:"ul"},"To verify where selector points, paste it into the inspector input field:")),Object(i.b)("img",{width:"602",alt:"Screen Shot 2021-02-20 at 7 27 20 PM",src:"https://user-images.githubusercontent.com/883973/108614696-ad5eaa00-73b1-11eb-81f5-9eebe62543a2.png"}),Object(i.b)("h2",{id:"recording-scripts"},"Recording scripts"),Object(i.b)("p",null,"At any moment, clicking Record action enables recorder (codegen) mode. Every action on the target page is turned into the generated script:"),Object(i.b)("img",{width:"712",alt:"Screen Shot 2021-02-20 at 7 40 02 PM",src:"https://user-images.githubusercontent.com/883973/108614897-85704600-73b3-11eb-8bcd-f2e129786c49.png"}),Object(i.b)("p",null,"You can copy entire generated script or clear it using toolbar actions."))}l.isMDXComponent=!0},823:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),g=r,h=b["".concat(c,".").concat(g)]||b[g]||u[g]||i;return n?a.a.createElement(h,o(o({ref:t},s),{},{components:n})):a.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},824:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},825:function(e,t,n){"use strict";var r=n(0),a=n(826);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},826:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},827:function(e,t,n){"use strict";n(0),n(825),n(824),n(55)},828:function(e,t,n){"use strict";n(3),n(0)}}]);