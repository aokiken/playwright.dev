(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[409],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(67294),i=n(80944),a=n(86010),o="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,m=e.groupId,d=e.className,f=(0,i.Z)(),h=f.tabGroupChoices,k=f.setTabGroupChoices,N=(0,r.useState)(c),v=N[0],b=N[1],g=r.Children.toArray(e.children),y=[];if(null!=m){var C=h[m];null!=C&&C!==v&&p.some((function(e){return e.value===C}))&&b(C)}var w=function(e){var t=e.currentTarget,n=y.indexOf(t),r=p[n].value;b(r),null!=m&&(k(m,r),setTimeout((function(){var e,n,r,i,a,o,s,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,i=e.bottom,a=e.right,o=window,s=o.innerHeight,u=o.innerWidth,n>=0&&a<=u&&i<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case s:var i=y.indexOf(e.target)-1;n=y[i]||y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,a.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:w,onClick:w},n)}))),t?(0,r.cloneElement)(g.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){"use strict";var r=n(67294),i=n(79443);t.Z=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},27632:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=(n(41395),n(58215),{id:"test-cli",title:"Advanced: command line"}),l={unversionedId:"test-cli",id:"test-cli",isDocsHomePage:!1,title:"Advanced: command line",description:"`bash",source:"@site/docs/test-cli.mdx",sourceDirName:".",slug:"/test-cli",permalink:"/docs/next/test-cli",version:"current",frontMatter:{id:"test-cli",title:"Advanced: command line"},sidebar:"docs",previous:{title:"Visual comparisons",permalink:"/docs/next/test-snapshots"},next:{title:"Advanced: configuration",permalink:"/docs/next/test-advanced"}},s=[],u={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Ask for help!\nnpx playwright test --help\n")),(0,a.kt)("p",null,"Arguments passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"npx playwright test")," are treated as a filter for test files. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"npx playwright test my-spec")," will only run tests from files with ",(0,a.kt)("inlineCode",{parentName:"p"},"my-spec")," in the name."),(0,a.kt)("p",null,"All the options are available in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/test-advanced"},"configuration file"),". However, selected options can be passed to a command line and take a priority over the configuration file."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--headed"),": Run tests in headed browsers. Useful for debugging."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--browser"),": Run test in a specific browser. Available options are  ",(0,a.kt)("inlineCode",{parentName:"li"},'"chromium"'),", ",(0,a.kt)("inlineCode",{parentName:"li"},'"firefox"'),", ",(0,a.kt)("inlineCode",{parentName:"li"},'"webkit"')," or ",(0,a.kt)("inlineCode",{parentName:"li"},'"all"')," to run tests in all three browsers at the same time."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-c <file>")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"--config <file>"),": Configuration file. If not passed, defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"playwright.config.ts")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"playwright.config.js")," in the current directory."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-c <dir>")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"--config <dir>"),": Directory with the tests to run without configuration file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--forbid-only"),": Whether to disallow ",(0,a.kt)("inlineCode",{parentName:"li"},"test.only"),". Useful on CI."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-g <grep>")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"--grep <grep>"),": Only run tests matching this regular expression. For example, this will run ",(0,a.kt)("inlineCode",{parentName:"li"},"'should add to cart'")," when passed ",(0,a.kt)("inlineCode",{parentName:"li"},'-g="add to cart"'),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--global-timeout <number>"),": Total timeout for the whole test run in milliseconds. By default, there is no global timeout."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--list"),": List all the tests, but do not run them."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--max-failures <N>")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"-x"),": Stop after the first ",(0,a.kt)("inlineCode",{parentName:"li"},"N")," test failures. Passing ",(0,a.kt)("inlineCode",{parentName:"li"},"-x")," stops after the first failure."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--output <dir>"),": Directory for artifacts produced by tests, defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"test-results"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--project <name>"),": Only run tests from one of the specified ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/test-advanced#projects"},"projects"),". Defaults to running all projects defined in the configuration file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--quiet"),": Whether to suppress stdout and stderr from the tests."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--repeat-each <N>"),": Run each test ",(0,a.kt)("inlineCode",{parentName:"li"},"N")," times, defaults to one."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--reporter <reporter>"),": Choose a reporter: minimalist ",(0,a.kt)("inlineCode",{parentName:"li"},"dot"),", concise ",(0,a.kt)("inlineCode",{parentName:"li"},"line")," or detailed ",(0,a.kt)("inlineCode",{parentName:"li"},"list"),". See ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/test-reporters"},"reporters")," for more information."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--retries <number>"),": The maximum number of ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/test-retries"},"retries")," for flaky tests, defaults to zero (no retries)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--shard <shard>"),": ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/test-parallel#shards"},"Shard")," tests and execute only selected shard, specified in the form ",(0,a.kt)("inlineCode",{parentName:"li"},"current/all"),", 1-based, for example ",(0,a.kt)("inlineCode",{parentName:"li"},"3/5"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--timeout <number>"),": Maximum timeout in milliseconds for each test, defaults to 30 seconds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--update-snapshots")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"-u"),": Whether to update ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/test-snapshots"},"snapshots")," with actual results instead of comparing them. Use this when snapshot expectations have changed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--workers <number>")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"-j <number>"),": The maximum number of concurrent worker processes that run in ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/test-parallel"},"parallel"),".")))}c.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);