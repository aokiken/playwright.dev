(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{144:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),s=(r(0),r(393)),o=(r(396),r(397),{id:"test-fixtures",title:"Fixtures"}),a={unversionedId:"test-fixtures",id:"test-fixtures",isDocsHomePage:!1,title:"Fixtures",description:"- Introduction to fixtures",source:"@site/docs/test-fixtures.mdx",slug:"/test-fixtures",permalink:"/docs/next/test-fixtures",version:"current",sidebar:"docs",previous:{title:"Examples",permalink:"/docs/next/test-examples"},next:{title:"Parallelism and sharding",permalink:"/docs/next/test-parallel"}},u=[{value:"Introduction to fixtures",id:"introduction-to-fixtures",children:[{value:"Without fixtures",id:"without-fixtures",children:[]},{value:"With fixtures",id:"with-fixtures",children:[]}]},{value:"Test fixtures",id:"test-fixtures",children:[]},{value:"Worker fixtures",id:"worker-fixtures",children:[]}],c={toc:u};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"#introduction-to-fixtures"}),"Introduction to fixtures")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"#test-fixtures"}),"Test fixtures")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"#worker-fixtures"}),"Worker fixtures"))),Object(s.b)("h2",{id:"introduction-to-fixtures"},"Introduction to fixtures"),Object(s.b)("p",null,"Playwright Test is based on the concept of the test fixtures. Test fixtures are used to establish environment for each test, giving the test everything it needs and nothing else. Test fixtures are isolated between tests, which gives Playwright Test following benefits:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Playwright Test runs tests in parallel by default, making your test suite much faster."),Object(s.b)("li",{parentName:"ul"},"Playwright Test can efficiently retry the flaky failures, instead of re-running the whole suite."),Object(s.b)("li",{parentName:"ul"},"You can group tests based on their meaning, instead of their common setup.")),Object(s.b)("p",null,"Here is how typical test environment setup differs between traditional test style and the fixture-based one:"),Object(s.b)("h3",{id:"without-fixtures"},"Without fixtures"),Object(s.b)("h3",{id:"with-fixtures"},"With fixtures"),Object(s.b)("p",null,"You declare exact fixtures that the test needs and the runner initializes them for each test individually. Tests can use any combinations of the fixtures to tailor precise environment they need. You no longer need to wrap tests in ",Object(s.b)("inlineCode",{parentName:"p"},"describe"),"s that set up environment, everything is declarative and typed."),Object(s.b)("p",null,"There are two types of fixtures: ",Object(s.b)("inlineCode",{parentName:"p"},"test")," and ",Object(s.b)("inlineCode",{parentName:"p"},"worker"),". Test fixtures are set up for each test and worker fixtures are set up for each process that runs test files."),Object(s.b)("h2",{id:"test-fixtures"},"Test fixtures"),Object(s.b)("p",null,"Test fixtures are set up for each test. Consider the following test file:"),Object(s.b)("p",null,"It uses fixtures ",Object(s.b)("inlineCode",{parentName:"p"},"hello")," and ",Object(s.b)("inlineCode",{parentName:"p"},"helloWorld")," that are set up by the framework for each test run."),Object(s.b)("p",null,"Here is how test fixtures are declared and defined. Fixtures can use other fixtures - note how ",Object(s.b)("inlineCode",{parentName:"p"},"helloWorld")," uses ",Object(s.b)("inlineCode",{parentName:"p"},"hello"),"."),Object(s.b)("p",null,"With fixtures, test organization becomes flexible - you can put tests that make sense next to each other based on what they test, not based on the environment they need."),Object(s.b)("h2",{id:"worker-fixtures"},"Worker fixtures"),Object(s.b)("p",null,"Playwright Test uses worker processes to run test files. You can specify the maximum number of workers using ",Object(s.b)("inlineCode",{parentName:"p"},"--workers")," command line option. Similarly to how test fixtures are set up for individual test runs, worker fixtures are set up for each worker process. That's where you can set up services, run servers, etc. Playwright Test will reuse the worker process for as many test files as it can, provided their worker fixtures match and hence environments are identical."),Object(s.b)("p",null,"Here is how the test looks:"),Object(s.b)("p",null,"And here is how fixtures are declared and defined:"))}l.isMDXComponent=!0},392:function(e,t,r){"use strict";function n(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},393:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),l=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=l(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=l(r),b=n,d=f["".concat(o,".").concat(b)]||f[b]||p[b]||s;return r?i.a.createElement(d,a(a({ref:t},c),{},{components:r})):i.a.createElement(d,a({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=b;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var c=2;c<s;c++)o[c]=r[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},394:function(e,t,r){"use strict";var n=r(0),i=r(395);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,t,r){"use strict";var n=r(0),i=Object(n.createContext)(void 0);t.a=i},396:function(e,t,r){"use strict";r(0),r(394),r(392),r(55)},397:function(e,t,r){"use strict";r(3),r(0)}}]);