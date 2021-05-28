(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(163)),c=(n(166),n(167),{id:"intro",title:"Getting Started"}),o={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Getting Started",description:"- Installation",source:"@site/docs/intro.mdx",slug:"/intro",permalink:"/dotnet/docs/intro",version:"current",sidebar:"docs",previous:{title:"Why Playwright?",permalink:"/dotnet/docs/why-playwright"},next:{title:"Core concepts",permalink:"/dotnet/docs/core-concepts"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"First script",id:"first-script",children:[]},{value:"Record scripts",id:"record-scripts",children:[]},{value:"System requirements",id:"system-requirements",children:[{value:"Windows",id:"windows",children:[]},{value:"macOS",id:"macos",children:[]},{value:"Linux",id:"linux",children:[]}]}],l={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#installation"}),"Installation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#usage"}),"Usage")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#first-script"}),"First script")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#record-scripts"}),"Record scripts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#system-requirements"}),"System requirements")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/release-notes"}),"Release notes"))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Install Microsoft.Playwright package from NuGet in Visual Studio or from the CLI in your project root directory:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"dotnet add package Microsoft.Playwright\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        // Create pages, interact with UI elements, assert values\n    }\n}\n")),Object(i.b)("h2",{id:"first-script"},"First script"),Object(i.b)("p",null,"Create a console project and add the Playwright dependency."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"dotnet new console -n pw_demo\ncd pw_demo\ndotnet add package Microsoft.Playwright --prerelease\n")),Object(i.b)("p",null,"Create a Program.cs that will navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"https://playwright.dev/dotnet")," and take a screenshot in Chromium."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        var page = await browser.NewPageAsync();\n        await page.GotoAsync("https://playwright.dev/dotnet");\n        await page.ScreenshotAsync(new PageScreenshotOptions { Path = "screenshot.png" });\n    }\n}\n')),Object(i.b)("p",null,"Now build it and run it."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"dotnet build\ndotnet run\n")),Object(i.b)("p",null,"By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the ",Object(i.b)("inlineCode",{parentName:"p"},"Headless = false")," flag while launching the browser. You can also use ",Object(i.b)("inlineCode",{parentName:"p"},"slowMo")," to slow down execution. Learn more in the debugging tools ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/debug"}),"section"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"await playwright.Firefox.LaunchAsync(new BrowserTypeLaunchOptions { Headless = false, SlowMo = 50 });\n")),Object(i.b)("h2",{id:"record-scripts"},"Record scripts"),Object(i.b)("p",null,"Command Line Interface ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/cli"}),"CLI")," can be used to record user interactions and generate C# code."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# FIXME:\n")),Object(i.b)("h2",{id:"system-requirements"},"System requirements"),Object(i.b)("p",null,"The browser binaries for Chromium, Firefox and WebKit work across the 3 platforms (Windows, macOS, Linux):"),Object(i.b)("h3",{id:"windows"},"Windows"),Object(i.b)("p",null,"Works with Windows and Windows Subsystem for Linux (WSL)."),Object(i.b)("h3",{id:"macos"},"macOS"),Object(i.b)("p",null,"Requires 10.14 (Mojave) or above."),Object(i.b)("h3",{id:"linux"},"Linux"),Object(i.b)("p",null,"Depending on your Linux distribution, you might need to install additional dependencies to run the browsers."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Only Ubuntu 18.04 and Ubuntu 20.04 are officially supported."))),Object(i.b)("p",null,"See also in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/cli#install-system-dependencies"}),"Command Line Interface")," which has a command to install all necessary dependencies automatically for Ubuntu LTS releases."))}b.isMDXComponent=!0},162:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return n?r.a.createElement(m,o(o({ref:t},l),{},{components:n})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},164:function(e,t,n){"use strict";var a=n(0),r=n(165);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},165:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},166:function(e,t,n){"use strict";n(0),n(164),n(162),n(53)},167:function(e,t,n){"use strict";n(3),n(0)}}]);