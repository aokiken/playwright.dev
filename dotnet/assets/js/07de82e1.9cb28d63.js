(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4090],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";r(7294)},1395:function(e,t,r){"use strict";r(7294),r(944)},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},944:function(e,t,r){"use strict";var n=r(7294),a=r(9443);t.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},5012:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var n=r(2122),a=r(9756),l=(r(7294),r(3905)),o=(r(1395),r(8215),{id:"test-parallel",title:"Parallelism and sharding"}),i={unversionedId:"test-parallel",id:"test-parallel",isDocsHomePage:!1,title:"Parallelism and sharding",description:"Playwright Test runs tests in parallel by default, using multiple worker processes.",source:"@site/docs/test-parallel.mdx",sourceDirName:".",slug:"/test-parallel",permalink:"/dotnet/docs/test-parallel",version:"current",frontMatter:{id:"test-parallel",title:"Parallelism and sharding"}},s=[{value:"Workers",id:"workers",children:[]},{value:"Shards",id:"shards",children:[]}],p={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright Test runs tests in parallel by default, using multiple worker processes."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#workers"},"Workers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#shards"},"Shards"))),(0,l.kt)("h2",{id:"workers"},"Workers"),(0,l.kt)("p",null,"Each worker process creates a new environment to run tests. By default, Playwright Test reuses the worker as much as it can to make testing faster."),(0,l.kt)("p",null,"However, test runner will create a new worker when retrying tests, after any test failure, to initialize a new environment, or just to speed up test execution if the worker limit is not reached."),(0,l.kt)("p",null,"You can control the maximum number of worker processes via ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/test-cli"},"command line")," or in the ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/test-configuration"},"configuration file"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Run in parallel by default"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Disable parallelization"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --worker 1\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Control the number of workers"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --worker 4\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In the configuration file"))),(0,l.kt)("p",null,"Each worker process is assigned a unique sequential index that is accessible through the ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/test-advanced#workerinfo"},(0,l.kt)("inlineCode",{parentName:"a"},"workerInfo"))," object."),(0,l.kt)("h2",{id:"shards"},"Shards"),(0,l.kt)("p",null,"Playwright Test can shard a test suite, so that it can be executed on multiple machines. For that,  pass ",(0,l.kt)("inlineCode",{parentName:"p"},"--shard=x/y")," to the command line. For example, to split the suite into three shards, each running one third of the tests:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --shard=1/3\nnpx playwright test --shard=2/3\nnpx playwright test --shard=3/3\n")))}u.isMDXComponent=!0}}]);