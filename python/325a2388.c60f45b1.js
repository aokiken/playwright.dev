(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(333)),c=(n(336),n(337),{id:"docker",title:"Docker"}),o={unversionedId:"docker",id:"version-1.10.0/docker",isDocsHomePage:!1,title:"Docker",description:"Dockerfile.bionic and Dockerfile.focal can be used to run Playwright scripts in Docker environments. These images includes all the dependencies needed to run browsers in a Docker container, and also include the browsers themselves.",source:"@site/versioned_docs/version-1.10.0/docker.mdx",slug:"/docker",permalink:"/python/docs/docker",version:"1.10.0",sidebar:"version-1.10.0/docs",previous:{title:"Test Runners",permalink:"/python/docs/test-runners"},next:{title:"Continuous Integration",permalink:"/python/docs/ci"}},s=[{value:"Usage",id:"usage",children:[{value:"Pull the image",id:"pull-the-image",children:[]},{value:"Run the image",id:"run-the-image",children:[]},{value:"Using on CI",id:"using-on-ci",children:[]}]},{value:"Image tags",id:"image-tags",children:[]},{value:"Development",id:"development",children:[{value:"Build the image",id:"build-the-image",children:[]},{value:"Push",id:"push",children:[]}]},{value:"Base images",id:"base-images",children:[{value:"Ubuntu 20",id:"ubuntu-20",children:[]},{value:"Ubuntu 18",id:"ubuntu-18",children:[]},{value:"Alpine",id:"alpine",children:[]}]}],l={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.bionic"}),"Dockerfile.bionic")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.focal"}),"Dockerfile.focal")," can be used to run Playwright scripts in Docker environments. These images includes all the dependencies needed to run browsers in a Docker container, and also include the browsers themselves."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#usage"}),"Usage")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#image-tags"}),"Image tags")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#development"}),"Development")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#base-images"}),"Base images"))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.docker.com/_/microsoft-playwright"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/docker-mcr.microsoft.com%2Fplaywright-blue",alt:"docker hub"})))),Object(i.b)("p",null,"This image is published on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.docker.com/_/microsoft-playwright"}),"Docker Hub"),"."),Object(i.b)("h3",{id:"pull-the-image"},"Pull the image"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ docker pull mcr.microsoft.com/playwright:bionic\n")),Object(i.b)("h3",{id:"run-the-image"},"Run the image"),Object(i.b)("p",null,"By default, the Docker image will use the ",Object(i.b)("inlineCode",{parentName:"p"},"root")," user to run the browsers. This will disable the Chromium sandbox which is not available with root. If you run trusted code (e.g. End-to-end tests) and want to avoid the hassle of managing separate user then the root user may be fine. For web scraping or crawling, we recommend to create a separate user inside the Docker container and use the seccomp profile."),Object(i.b)("h4",{id:"end-to-end-tests"},"End-to-end tests"),Object(i.b)("p",null,"On trusted websites, you can avoid creating a separate user and use root for it since you trust the code which will run on the browsers."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker run -it --rm --ipc=host mcr.microsoft.com/playwright:bionic /bin/bash\n")),Object(i.b)("h4",{id:"crawling-and-scraping"},"Crawling and scraping"),Object(i.b)("p",null,"On untrusted websites, it's recommended to use a separate user for launching the browsers in combination with the seccomp profile. Inside the container or if you are using the Docker image as a base image you have to use ",Object(i.b)("inlineCode",{parentName:"p"},"adduser")," for it."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ docker run -it --rm --ipc=host --user pwuser --security-opt seccomp=seccomp_profile.json mcr.microsoft.com/playwright:bionic /bin/bash\n")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/utils/docker/seccomp_profile.json"}),Object(i.b)("inlineCode",{parentName:"a"},"seccomp_profile.json"))," is needed to run Chromium with sandbox. This is a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/docker/engine/blob/d0d99b04cf6e00ed3fc27e81fc3d94e7eda70af3/profiles/seccomp/default.json"}),"default Docker seccomp profile")," with extra user namespace cloning permissions:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "comment": "Allow create user namespaces",\n    "names": [\n      "clone",\n      "setns",\n      "unshare"\n    ],\n    "action": "SCMP_ACT_ALLOW",\n    "args": [],\n    "includes": {},\n    "excludes": {}\n  }\n]\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Using ",Object(i.b)("inlineCode",{parentName:"p"},"--ipc=host")," is recommended when using Chrome (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc"}),"Docker docs"),"). Chrome can run out of memory without this flag."))),Object(i.b)("h3",{id:"using-on-ci"},"Using on CI"),Object(i.b)("p",null,"See our ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/ci"}),"Continuous Integration guides")," for sample configs."),Object(i.b)("h2",{id:"image-tags"},"Image tags"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://mcr.microsoft.com/v2/playwright/tags/list"}),"all available image tags"),"."),Object(i.b)("h2",{id:"development"},"Development"),Object(i.b)("h3",{id:"build-the-image"},"Build the image"),Object(i.b)("p",null,"Use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/utils/docker/build.sh"}),Object(i.b)("inlineCode",{parentName:"a"},"//utils/docker/build.sh"))," to build the image."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ ./utils/docker/build.sh bionic playwright:localbuild-bionic\n")),Object(i.b)("p",null,"The image will be tagged as ",Object(i.b)("inlineCode",{parentName:"p"},"playwright:localbuild-bionic")," and could be run as:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ docker run --rm -it playwright:localbuild /bin/bash\n")),Object(i.b)("h3",{id:"push"},"Push"),Object(i.b)("p",null,"Docker images are published automatically by GitHub Actions. We currently publish the following images:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mcr.microsoft.com/playwright:next")," - tip-of-tree image version."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mcr.microsoft.com/playwright:bionic")," - last Playwright release docker image."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mcr.microsoft.com/playwright:sha-XXXXXXX")," - docker image for every commit that changed docker files or browsers, marked with a ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#Short-SHA-1"}),"short sha")," (first 7 digits of the SHA commit).")),Object(i.b)("p",null,"Status of push to MCR can be ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://mcrflow-status-ui.azurewebsites.net/"}),"verified here")," (internal link)."),Object(i.b)("h2",{id:"base-images"},"Base images"),Object(i.b)("h3",{id:"ubuntu-20"},"Ubuntu 20"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"mcr.microsoft.com/playwright:focal")," is based on Ubuntu 20.04 LTS (Focal Fossa)."),Object(i.b)("h3",{id:"ubuntu-18"},"Ubuntu 18"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"mcr.microsoft.com/playwright:bionic")," is based on Ubuntu 18.04 LTS (Bionic Beaver)."),Object(i.b)("h3",{id:"alpine"},"Alpine"),Object(i.b)("p",null,"Browser builds for Firefox and WebKit are built for the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/GNU_C_Library"}),"glibc")," library. Alpine Linux and other distributions that are based on the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Musl"}),"musl")," standard library are not supported."))}b.isMDXComponent=!0},332:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},333:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?r.a.createElement(d,o(o({ref:t},l),{},{components:n})):r.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},334:function(e,t,n){"use strict";var a=n(0),r=n(335);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},335:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},336:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(334),c=n(332),o=n(55),s=n.n(o),l=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=Object(i.a)(),h=d.tabGroupChoices,f=d.setTabGroupChoices,O=Object(a.useState)(o),g=O[0],j=O[1],v=a.Children.toArray(e.children);if(null!=p){var w=h[p];null!=w&&w!==g&&u.some((function(e){return e.value===w}))&&j(w)}var y=function(e){j(e),null!=p&&f(p,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},337:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);