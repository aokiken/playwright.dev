"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8412],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),r=a(79443);var o=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,p=e.values,d=e.groupId,m=e.className,h=o(),f=h.tabGroupChoices,v=h.setTabGroupChoices,k=(0,n.useState)(r),N=k[0],g=k[1],b=n.Children.toArray(e.children),j=[];if(null!=d){var y=f[d];null!=y&&y!==N&&p.some((function(e){return e.value===y}))&&g(y)}var C=function(e){var t=e.currentTarget,a=j.indexOf(t),n=p[a].value;g(n),null!=d&&(v(d,n),setTimeout((function(){var e,a,n,r,o,i,l,u;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,a>=0&&o<=u&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case c:var n=j.indexOf(e.target)+1;a=j[n]||j[0];break;case u:var r=j.indexOf(e.target)-1;a=j[r]||j[j.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":N===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:w,onFocus:C,onClick:C},a)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},59393:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=a(22122),r=a(19756),o=(a(67294),a(3905)),i=(a(55064),a(58215),{id:"class-route",title:"Route"}),l=void 0,s={unversionedId:"api/class-route",id:"version-1.12.0/api/class-route",isDocsHomePage:!1,title:"Route",description:"Whenever a network route is set up with Page.route(url, handler) or BrowserContext.route(url, handler), the Route object allows to handle the route.",source:"@site/versioned_docs/version-1.12.0/api/class-route.mdx",sourceDirName:"api",slug:"/api/class-route",permalink:"/java/docs/1.12.0/api/class-route",version:"1.12.0",frontMatter:{id:"class-route",title:"Route"},sidebar:"version-1.12.0/api",previous:{title:"Response",permalink:"/java/docs/1.12.0/api/class-response"},next:{title:"Selectors",permalink:"/java/docs/1.12.0/api/class-selectors"}},u=[{value:"Route.abort(errorCode)",id:"route-abort",children:[]},{value:"Route.fulfill(options)",id:"route-fulfill",children:[]},{value:"Route.request()",id:"route-request",children:[]},{value:"Route.resume(options)",id:"route-continue",children:[]}],c={toc:u};function p(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Whenever a network route is set up with ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-page#page-route"},"Page.route(url, handler)")," or ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-browsercontext#browser-context-route"},"BrowserContext.route(url, handler)"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"Route")," object allows to handle the route."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-route#route-abort"},"Route.abort([errorCode])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-route#route-fulfill"},"Route.fulfill([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-route#route-request"},"Route.request()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-route#route-continue"},"Route.resume([options])"))),(0,o.kt)("h2",{id:"route-abort"},"Route.abort(","[errorCode]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"errorCode")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Optional error code. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"failed"),", could be one of the following:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'aborted'")," - An operation was aborted (due to user action)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'accessdenied'")," - Permission to access a resource, other than the network, was denied"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'addressunreachable'")," - The IP address is unreachable. This usually means that there is no route to the specified host or network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'blockedbyclient'")," - The client chose to block the request."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'blockedbyresponse'")," - The request failed because the response was delivered along with requirements which are not met ('X-Frame-Options' and 'Content-Security-Policy' ancestor checks, for instance)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'connectionaborted'")," - A connection timed out as a result of not receiving an ACK for data sent."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'connectionclosed'")," - A connection was closed (corresponding to a TCP FIN)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'connectionfailed'")," - A connection attempt failed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'connectionrefused'")," - A connection attempt was refused."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'connectionreset'")," - A connection was reset (corresponding to a TCP RST)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'internetdisconnected'")," - The Internet connection has been lost."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'namenotresolved'")," - The host name could not be resolved."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'timedout'")," - An operation timed out."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'failed'")," - A generic failure occurred."))),(0,o.kt)("li",{parentName:"ul"},"returns: ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">")),(0,o.kt)("p",null,"Aborts the route's request."),(0,o.kt)("h2",{id:"route-fulfill"},"Route.fulfill(","[options]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"Route.FulfillOptions"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setBody")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Optional response body as text."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setBodyBytes")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"},"byte","[","]"),">"," Optional response body as raw bytes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setContentType")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," If set, equals to setting ",(0,o.kt)("inlineCode",{parentName:"li"},"Content-Type")," response header."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setHeaders")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"},"Map"),"<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),", ",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",">"," Response headers. Header values will be converted to a string."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setPath")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"},"Path"),">"," File path to respond with. The content type will be inferred from file extension. If ",(0,o.kt)("inlineCode",{parentName:"li"},"path")," is a relative path, then it is resolved relative to the current working directory."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setStatus")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">"," Response status code, defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"200"),"."))),(0,o.kt)("li",{parentName:"ul"},"returns: ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">")),(0,o.kt)("p",null,"Fulfills route's request with given response."),(0,o.kt)("p",null,"An example of fulfilling all requests with 404 responses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'page.route("**/*", route -> {\n  route.fulfill(new Route.FulfillOptions()\n    .setStatus(404)\n    .setContentType("text/plain")\n    .setBody("Not Found!"));\n});\n')),(0,o.kt)("p",null,"An example of serving static file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'page.route("**/xhr_endpoint", route -> route.fulfill(\n  new Route.FulfillOptions().setPath(Paths.get("mock_data.json")));\n')),(0,o.kt)("h2",{id:"route-request"},"Route.request()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns: ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-request",title:"Request"},"Request"),">")),(0,o.kt)("p",null,"A request to be routed."),(0,o.kt)("h2",{id:"route-continue"},"Route.resume(","[options]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"Route.ResumeOptions"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setHeaders")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"},"Map"),"<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),", ",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",">"," If set changes the request HTTP headers. Header values will be converted to a string."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setMethod")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," If set changes the request method (e.g. GET or POST)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setPostData")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),"|",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"},"byte","[","]"),">"," If set changes the post data of request"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setUrl")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," If set changes the request URL. New URL must have same protocol as original one."))),(0,o.kt)("li",{parentName:"ul"},"returns: ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">")),(0,o.kt)("p",null,"Continues route's request with optional overrides."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'page.route("**/*", route -> {\n  // Override headers\n  Map<String, String> headers = new HashMap<>(route.request().headers());\n  headers.put("foo", "bar"); // set "foo" header\n  headers.remove("origin"); // remove "origin" header\n  route.resume(new Route.ResumeOptions().setHeaders(headers));\n});\n')))}p.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);