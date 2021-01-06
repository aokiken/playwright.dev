(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{400:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(598)),c={id:"README",title:"Running Playwright in Docker"},o={unversionedId:"docker/README",id:"version-1.4.0/docker/README",isDocsHomePage:!1,title:"Running Playwright in Docker",description:"Dockerfile.bionic can be used to run Playwright scripts in Docker environments. This image includes all the dependencies needed to run browsers in a Docker container, including browsers.",source:"@site/versioned_docs/version-1.4.0/docker/README.md",slug:"/docker/README",permalink:"/docs/1.4.0/docker/README",version:"1.4.0",sidebar:"version-1.4.0/docs",previous:{title:"Test Runners",permalink:"/docs/1.4.0/test-runners"},next:{title:"Continuous Integration",permalink:"/docs/1.4.0/ci"}},b=[{value:"Usage",id:"usage",children:[{value:"Pull the image",id:"pull-the-image",children:[]},{value:"Run the image",id:"run-the-image",children:[]},{value:"Using on CI",id:"using-on-ci",children:[]}]},{value:"Image tags",id:"image-tags",children:[]},{value:"Development",id:"development",children:[{value:"Build the image",id:"build-the-image",children:[]},{value:"Push",id:"push",children:[]}]},{value:"Base images",id:"base-images",children:[{value:"Alpine",id:"alpine",children:[]}]}],l={toc:b};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.bionic"}),"Dockerfile.bionic")," can be used to run Playwright scripts in Docker environments. This image includes all the dependencies needed to run browsers in a Docker container, including browsers."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#usage"}),"Usage"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#pull-the-image"}),"Pull the image")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#run-the-image"}),"Run the image"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#end-to-end-tests"}),"End-to-end tests")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#crawling-and-scraping"}),"Crawling and scraping")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#using-on-ci"}),"Using on CI")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#image-tags"}),"Image tags")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#development"}),"Development"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#build-the-image"}),"Build the image")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#push"}),"Push")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#base-images"}),"Base images"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#alpine"}),"Alpine"))))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/_/microsoft-playwright"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/docker-mcr.microsoft.com%2Fplaywright-blue",alt:"docker hub"})))),Object(i.b)("p",null,"This image is published on ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/_/microsoft-playwright"}),"Docker Hub"),"."),Object(i.b)("h3",{id:"pull-the-image"},"Pull the image"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker pull mcr.microsoft.com/playwright:bionic\n")),Object(i.b)("h3",{id:"run-the-image"},"Run the image"),Object(i.b)("p",null,"By default, the Docker image will use the ",Object(i.b)("inlineCode",{parentName:"p"},"root")," user to run the browsers. This will disable the Chromium sandbox which is not available with root. If you run trusted code (e.g. End-to-end tests) and want to avoid the hassle of managing separate user then the root user may be fine. For web scraping or crawling, we recommend to create a separate user inside the Docker container and use the seccomp profile."),Object(i.b)("h4",{id:"end-to-end-tests"},"End-to-end tests"),Object(i.b)("p",null,"On trusted websites, you can avoid creating a separate user and use root for it since you trust the code which will run on the browsers."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"docker run -it --rm --ipc=host mcr.microsoft.com/playwright:bionic /bin/bash\n")),Object(i.b)("h4",{id:"crawling-and-scraping"},"Crawling and scraping"),Object(i.b)("p",null,"On untrusted websites, it's recommended to use a separate user for launching the browsers in combination with the seccomp profile. Inside the container or if you are using the Docker image as a base image you have to use ",Object(i.b)("inlineCode",{parentName:"p"},"adduser")," for it."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker run -it --rm --ipc=host --security-opt seccomp=seccomp_profile.json mcr.microsoft.com/playwright:bionic /bin/bash\n")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/utils/docker/seccomp_profile.json"}),Object(i.b)("inlineCode",{parentName:"a"},"seccomp_profile.json"))," is needed to run Chromium with sandbox. This is\na ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/docker/engine/blob/d0d99b04cf6e00ed3fc27e81fc3d94e7eda70af3/profiles/seccomp/default.json"}),"default Docker seccomp profile")," with extra user namespace cloning permissions:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "comment": "Allow create user namespaces",\n    "names": [\n      "clone",\n      "setns",\n      "unshare"\n    ],\n    "action": "SCMP_ACT_ALLOW",\n    "args": [],\n    "includes": {},\n    "excludes": {}\n  }\n]\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"NOTE"),": Using ",Object(i.b)("inlineCode",{parentName:"p"},"--ipc=host")," is recommended when using Chrome (",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc"}),"Docker docs"),"). Chrome can run out of memory without this flag.")),Object(i.b)("p",null,"Since the seccomp profile is now in use, you have to create a separate user with ",Object(i.b)("inlineCode",{parentName:"p"},"adduser pwuser")," which you use to run your browsers with Playwright."),Object(i.b)("h3",{id:"using-on-ci"},"Using on CI"),Object(i.b)("p",null,"See our ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.4.0/ci"}),"Continuous Integration guides")," for sample configs."),Object(i.b)("h2",{id:"image-tags"},"Image tags"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://mcr.microsoft.com/v2/playwright/tags/list"}),"all available image tags"),"."),Object(i.b)("h2",{id:"development"},"Development"),Object(i.b)("h3",{id:"build-the-image"},"Build the image"),Object(i.b)("p",null,"Use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/utils/docker/build.sh"}),Object(i.b)("inlineCode",{parentName:"a"},"//docs/docker/build.sh"))," to build the image."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ ./docs/docker/build.sh\n")),Object(i.b)("p",null,"The image will be tagged as ",Object(i.b)("inlineCode",{parentName:"p"},"playwright:localbuild")," and could be run as:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker run --rm -it playwright:localbuild /bin/bash\n")),Object(i.b)("h3",{id:"push"},"Push"),Object(i.b)("p",null,"Docker images are published automatically by Github Actions. We currently publish the following\nimages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mcr.microsoft.com/playwright:next")," - tip-of-tree image version."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mcr.microsoft.com/playwright:bionic")," - last Playwright release docker image."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mcr.microsoft.com/playwright:sha-XXXXXXX")," - docker image for every commit that changed\ndocker files or browsers, marked with a ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#Short-SHA-1"}),"short sha")," (first 7 digits of the SHA commit).")),Object(i.b)("p",null,"Status of push to MCR can be ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://mcrflow-status-ui.azurewebsites.net/"}),"verified here")," (internal link)."),Object(i.b)("h2",{id:"base-images"},"Base images"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"playwright:bionic")," is based on Ubuntu 18.04 LTS (Bionic Beaver)."),Object(i.b)("h3",{id:"alpine"},"Alpine"),Object(i.b)("p",null,"Browser builds for Firefox and WebKit are built for the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/GNU_C_Library"}),"glibc")," library. Alpine Linux and other distributions that are based on the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Musl"}),"musl")," standard library are not supported."))}s.isMDXComponent=!0},598:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?a.a.createElement(d,o(o({ref:t},l),{},{components:n})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);