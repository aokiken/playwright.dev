"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[36585],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=a.createContext({}),o=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=o(r),m=s,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return r?a.createElement(f,n(n({ref:t},p),{},{components:r})):a.createElement(f,n({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=r.length,n=new Array(l);n[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,n[1]=i;for(var o=2;o<l;o++)n[o]=r[o];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){var a=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:s},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(67294),s=r(79443);var l=function(){var e=(0,a.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},n=r(86010),i="tabItem_1uMI",u="tabItemActive_2DSg";var o=37,p=39;var c=function(e){var t=e.lazy,r=e.block,s=e.defaultValue,c=e.values,d=e.groupId,m=e.className,f=l(),h=f.tabGroupChoices,k=f.setTabGroupChoices,v=(0,a.useState)(s),b=v[0],y=v[1],g=a.Children.toArray(e.children),N=[];if(null!=d){var S=h[d];null!=S&&S!==b&&c.some((function(e){return e.value===S}))&&y(S)}var O=function(e){var t=e.currentTarget,r=N.indexOf(t),a=c[r].value;y(a),null!=d&&(k(d,a),setTimeout((function(){var e,r,a,s,l,n,i,o;(e=t.getBoundingClientRect(),r=e.top,a=e.left,s=e.bottom,l=e.right,n=window,i=n.innerHeight,o=n.innerWidth,r>=0&&l<=o&&s<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},R=function(e){var t,r;switch(e.keyCode){case p:var a=N.indexOf(e.target)+1;r=N[a]||N[0];break;case o:var s=N.indexOf(e.target)-1;r=N[s]||N[N.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},m)},c.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,n.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:R,onFocus:O,onClick:O},r)}))),t?(0,a.cloneElement)(g.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,r){var a=(0,r(67294).createContext)(void 0);t.Z=a},65237:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return n},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return o},default:function(){return c}});var a=r(22122),s=r(19756),l=(r(67294),r(3905)),n=(r(55064),r(58215),{id:"class-testresult",title:"TestResult"}),i=void 0,u={unversionedId:"api/class-testresult",id:"version-1.14.0/api/class-testresult",isDocsHomePage:!1,title:"TestResult",description:"A result of a single [TestCase] run.",source:"@site/versioned_docs/version-1.14.0/api/class-testresult.mdx",sourceDirName:"api",slug:"/api/class-testresult",permalink:"/docs/api/class-testresult",version:"1.14.0",frontMatter:{id:"class-testresult",title:"TestResult"},sidebar:"version-1.14.0/api",previous:{title:"TestCase",permalink:"/docs/api/class-testcase"},next:{title:"Android",permalink:"/docs/api/class-android"}},o=[{value:"testResult.attachments",id:"test-result-attachments",children:[]},{value:"testResult.duration",id:"test-result-duration",children:[]},{value:"testResult.error",id:"test-result-error",children:[]},{value:"testResult.retry",id:"test-result-retry",children:[]},{value:"testResult.startTime",id:"test-result-start-time",children:[]},{value:"testResult.status",id:"test-result-status",children:[]},{value:"testResult.stderr",id:"test-result-stderr",children:[]},{value:"testResult.stdout",id:"test-result-stdout",children:[]},{value:"testResult.steps",id:"test-result-steps",children:[]},{value:"testResult.workerIndex",id:"test-result-worker-index",children:[]}],p={toc:o};function c(e){var t=e.components,r=(0,s.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A result of a single ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-testcase",title:"TestCase"},"TestCase")," run."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testresult#test-result-attachments"},"testResult.attachments")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testresult#test-result-duration"},"testResult.duration")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testresult#test-result-error"},"testResult.error")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testresult#test-result-retry"},"testResult.retry")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testresult#test-result-start-time"},"testResult.startTime")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testresult#test-result-status"},"testResult.status")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testresult#test-result-stderr"},"testResult.stderr")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testresult#test-result-stdout"},"testResult.stdout")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testresult#test-result-steps"},"testResult.steps")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testresult#test-result-worker-index"},"testResult.workerIndex"))),(0,l.kt)("h2",{id:"test-result-attachments"},"testResult.attachments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Attachment name."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contentType")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Content type of this attachment to properly present in the report, for example ",(0,l.kt)("inlineCode",{parentName:"li"},"'application/json'")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"'image/png'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Optional path on the filesystem to the attached file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"body")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">"," Optional attachment body used instead of a file.")))),(0,l.kt)("p",null,"The list of files or buffers attached during the test execution through ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-testinfo#test-info-attachments"},"testInfo.attachments"),"."),(0,l.kt)("h2",{id:"test-result-duration"},"testResult.duration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,l.kt)("p",null,"Running time in milliseconds."),(0,l.kt)("h2",{id:"test-result-error"},"testResult.error"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testerror",title:"TestError"},"TestError"),">")),(0,l.kt)("p",null,"An error thrown during the test execution, if any."),(0,l.kt)("h2",{id:"test-result-retry"},"testResult.retry"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,l.kt)("p",null,"When test is retries multiple times, each retry attempt is given a sequential number."),(0,l.kt)("p",null,"Learn more about ",(0,l.kt)("a",{parentName:"p",href:"/docs/test-retries"},"test retries"),"."),(0,l.kt)("h2",{id:"test-result-start-time"},"testResult.startTime"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<","[Date]",">")),(0,l.kt)("p",null,"Start time of this particular test run."),(0,l.kt)("h2",{id:"test-result-status"},"testResult.status"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",'"passed"|"failed"|"timedOut"|"skipped"',">")),(0,l.kt)("p",null,"The status of this test result. See also ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-testcase#test-case-expected-status"},"testCase.expectedStatus"),"."),(0,l.kt)("h2",{id:"test-result-stderr"},"testResult.stderr"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">",">")),(0,l.kt)("p",null,"Anything written to the standard error during the test run."),(0,l.kt)("h2",{id:"test-result-stdout"},"testResult.stdout"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">",">")),(0,l.kt)("p",null,"Anything written to the standard output during the test run."),(0,l.kt)("h2",{id:"test-result-steps"},"testResult.steps"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-teststep",title:"TestStep"},"TestStep"),">",">")),(0,l.kt)("p",null,"List of steps inside this test run."),(0,l.kt)("h2",{id:"test-result-worker-index"},"testResult.workerIndex"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,l.kt)("p",null,"Index of the worker where the test was run."),(0,l.kt)("p",null,"Learn more about ",(0,l.kt)("a",{parentName:"p",href:"/docs/test-parallel"},"parallelism and sharding")," with Playwright Test."))}c.isMDXComponent=!0},86010:function(e,t,r){function a(e){var t,r,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(s&&(s+=" "),s+=r);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function s(){for(var e,t,r=0,s="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(s&&(s+=" "),s+=t);return s}r.d(t,{Z:function(){return s}})}}]);