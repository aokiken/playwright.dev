"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7262],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7294),o=n(9443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,m=e.groupId,d=e.className,f=a(),h=f.tabGroupChoices,k=f.setTabGroupChoices,g=(0,r.useState)(o),N=g[0],w=g[1],v=r.Children.toArray(e.children),b=[];if(null!=m){var y=h[m];null!=y&&y!==N&&p.some((function(e){return e.value===y}))&&w(y)}var C=function(e){var t=e.currentTarget,n=b.indexOf(t),r=p[n].value;w(r),null!=m&&(k(m,r),setTimeout((function(){var e,n,r,o,a,i,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,l=i.innerHeight,c=i.innerWidth,n>=0&&a<=c&&o<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var r=b.indexOf(e.target)+1;n=b[r]||b[0];break;case c:var o=b.indexOf(e.target)-1;n=b[o]||b[b.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":N===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:x,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},9890:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=(n(5064),n(8215),{id:"test-configuration",title:"Configuration"}),l=void 0,s={unversionedId:"test-configuration",id:"version-1.12/test-configuration",isDocsHomePage:!1,title:"Configuration",description:"- Configure browser, context, videos and screenshots",source:"@site/versioned_docs/version-1.12/test-configuration.mdx",sourceDirName:".",slug:"/test-configuration",permalink:"/java/docs/1.12/test-configuration",version:"1.12",frontMatter:{id:"test-configuration",title:"Configuration"}},c=[{value:"Configure browser, context, videos and screenshots",id:"configure-browser-context-videos-and-screenshots",children:[{value:"Global configuration",id:"global-configuration",children:[]},{value:"Local configuration",id:"local-configuration",children:[]}]},{value:"Testing options",id:"testing-options",children:[]},{value:"Different options for each browser",id:"different-options-for-each-browser",children:[]},{value:"Mobile emulation",id:"mobile-emulation",children:[]},{value:"Network mocking",id:"network-mocking",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#configure-browser-context-videos-and-screenshots"},"Configure browser, context, videos and screenshots")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#testing-options"},"Testing options")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#different-options-for-each-browser"},"Different options for each browser")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#mobile-emulation"},"Mobile emulation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#network-mocking"},"Network mocking"))),(0,a.kt)("h2",{id:"configure-browser-context-videos-and-screenshots"},"Configure browser, context, videos and screenshots"),(0,a.kt)("p",null,"Playwright Tests supports browser and context options that you typically pass to ",(0,a.kt)("a",{parentName:"p",href:"/java/docs/1.12/api/class-browsertype#browser-type-launch"},"BrowserType.launch([options])")," and ",(0,a.kt)("a",{parentName:"p",href:"/java/docs/1.12/api/class-browser#browser-new-context"},"Browser.newContext([options])")," methods, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"headless"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"viewport")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ignoreHTTPSErrors"),". It also provides options to record video for the test or capture screenshot at the end."),(0,a.kt)("p",null,"You can specify any options either locally in a test file, or globally in the configuration file."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Browser options match ",(0,a.kt)("a",{parentName:"li",href:"/java/docs/1.12/api/class-browsertype#browser-type-launch"},"BrowserType.launch([options])")," method."),(0,a.kt)("li",{parentName:"ul"},"Context options match ",(0,a.kt)("a",{parentName:"li",href:"/java/docs/1.12/api/class-browser#browser-new-context"},"Browser.newContext([options])")," method."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"screenshot")," option - whether to capture a screenshot after each test, off by default. Screenshot will appear in the test output directory, typically ",(0,a.kt)("inlineCode",{parentName:"li"},"test-results"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'off'")," - Do not capture screenshots."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'on'")," - Capture screenshot after each test."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'only-on-failure'")," - Capture screenshot after each test failure."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"trace")," option - whether to record trace for each test, off by default. Trace will appear in the test output directory, typically ",(0,a.kt)("inlineCode",{parentName:"li"},"test-results"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'off'")," - Do not record trace."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'on'")," - Record trace for each test."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'retain-on-failure'")," - Record trace for each test, but remove it from successful test runs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'retry-with-trace'")," - Record trace only when retrying a test."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"video")," option - whether to record video for each test, off by default. Video will appear in the test output directory, typically ",(0,a.kt)("inlineCode",{parentName:"li"},"test-results"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'off'")," - Do not record video."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'on'")," - Record video for each test."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'retain-on-failure'")," - Record video for each test, but remove all videos from successful test runs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'retry-with-video'")," - Record video only when retrying a test.")))),(0,a.kt)("h3",{id:"global-configuration"},"Global configuration"),(0,a.kt)("p",null,"Create ",(0,a.kt)("inlineCode",{parentName:"p"},"playwright.config.js")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"playwright.config.ts"),") and specify options in the ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," section."),(0,a.kt)("p",null,"Now run tests as usual, Playwright Test will pick up the configuration file automatically."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --browser=firefox\n")),(0,a.kt)("p",null,"If you put your configuration file in a different place, pass it with ",(0,a.kt)("inlineCode",{parentName:"p"},"--config")," option."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --config=tests/my.config.js\n")),(0,a.kt)("h3",{id:"local-configuration"},"Local configuration"),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"test.use()")," you can override some options for a file or a ",(0,a.kt)("inlineCode",{parentName:"p"},"test.describe")," block."),(0,a.kt)("p",null,"The same works inside describe."),(0,a.kt)("h2",{id:"testing-options"},"Testing options"),(0,a.kt)("p",null,"In addition to configuring ",(0,a.kt)("a",{parentName:"p",href:"/java/docs/1.12/api/class-browser",title:"Browser"},"Browser")," or ",(0,a.kt)("a",{parentName:"p",href:"/java/docs/1.12/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),", videos or screenshots, Playwright Test has many options to configure how your tests are run. Below are the most common ones, see ",(0,a.kt)("a",{parentName:"p",href:"/java/docs/1.12/test-advanced"},"advanced configuration")," for the full list."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"forbidOnly"),": Whether to exit with an error if any tests are marked as ",(0,a.kt)("inlineCode",{parentName:"li"},"test.only"),". Useful on CI."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"globalSetup"),": Path to the global setup file. This file will be required and run before all the tests. It must export a single function."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"globalTeardown"),": Path to the global teardown file. This file will be required and run after all the tests. It must export a single function."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"retries"),": The maximum number of retry attempts per test."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"testDir"),": Directory with the test files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"testIgnore"),": Glob patterns or regular expressions that should be ignored when looking for the test files. For example, ",(0,a.kt)("inlineCode",{parentName:"li"},"'**/test-assets'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"testMatch"),": Glob patterns or regular expressions that match test files. For example, ",(0,a.kt)("inlineCode",{parentName:"li"},"'**/todo-tests/*.spec.ts'"),". By default, Playwright Test runs ",(0,a.kt)("inlineCode",{parentName:"li"},".*(test|spec)\\.(js|ts|mjs)")," files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout"),": Time in milliseconds given to each test."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"workers"),": The maximum number of concurrent worker processes to use for parallelizing tests.")),(0,a.kt)("p",null,"You can specify these options in the configuration file."),(0,a.kt)("h2",{id:"different-options-for-each-browser"},"Different options for each browser"),(0,a.kt)("p",null,"To specify different options per browser, for example command line arguments for Chromium, create multiple projects in your configuration file. Below is an example that runs all tests in three browsers, with different options."),(0,a.kt)("p",null,"Playwright Test will run all projects by default."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx playwright test\n\nRunning 3 tests using 3 workers\n\n  \u2713 example.spec.ts:3:1 \u203a [Chromium] should work (2s)\n  \u2713 example.spec.ts:3:1 \u203a [Firefox] should work (2s)\n  \u2713 example.spec.ts:3:1 \u203a [WebKit] should work (2s)\n")),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"--project")," command line option to run a single project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx playwright test --project=webkit\n\nRunning 1 test using 1 worker\n\n  \u2713 example.spec.ts:3:1 \u203a [WebKit] should work (2s)\n")),(0,a.kt)("p",null,"There are many more things you can do with projects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run a subset of test by specifying different ",(0,a.kt)("inlineCode",{parentName:"li"},"testDir")," for each project."),(0,a.kt)("li",{parentName:"ul"},"Run tests in multiple configurations, for example with desktop Chromium and emulating Chrome for Android."),(0,a.kt)("li",{parentName:"ul"},'Run "core" tests without retries to ensure stability of the core functionality, and use ',(0,a.kt)("inlineCode",{parentName:"li"},"retries")," for other tests."),(0,a.kt)("li",{parentName:"ul"},"And much more! See ",(0,a.kt)("a",{parentName:"li",href:"/java/docs/1.12/test-advanced"},"advanced configuration")," for more details.")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"--browser")," command line option is not compatible with projects. Specify ",(0,a.kt)("inlineCode",{parentName:"p"},"browserName")," in each project instead."))),(0,a.kt)("h2",{id:"mobile-emulation"},"Mobile emulation"),(0,a.kt)("p",null,"You can use configuration file to make default ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," emulate a mobile device."),(0,a.kt)("p",null,'Here is an example configuration that runs tests in "Pixel 4" and "iPhone 11" emulation modes. Note that it uses the ',(0,a.kt)("a",{parentName:"p",href:"/java/docs/1.12/test-advanced#projects"},"projects")," feature to run the same set of tests in multiple configurations."),(0,a.kt)("h2",{id:"network-mocking"},"Network mocking"),(0,a.kt)("p",null,"You don't have to configure anything to mock network requests. Just define a custom ",(0,a.kt)("a",{parentName:"p",href:"/java/docs/1.12/api/class-route",title:"Route"},"Route")," that mocks network for a browser context."),(0,a.kt)("p",null,"Alternatively, you can use ",(0,a.kt)("a",{parentName:"p",href:"/java/docs/1.12/api/class-page#page-route"},"Page.route(url, handler)")," to mock network in a single test."))}p.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);