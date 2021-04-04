(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{195:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),s=(a(0),a(332)),i=a(335),l=a(336),o={id:"class-request",title:"Request"},c={unversionedId:"api/class-request",id:"version-1.9.0/api/class-request",isDocsHomePage:!1,title:"Request",description:"Whenever the page sends a request for a network resource the following sequence of events are emitted by [Page]:",source:"@site/versioned_docs/version-1.9.0/api/class-request.mdx",slug:"/api/class-request",permalink:"/python/docs/1.9.0/api/class-request",version:"1.9.0",sidebar:"version-1.9.0/api",previous:{title:"Page",permalink:"/python/docs/1.9.0/api/class-page"},next:{title:"Response",permalink:"/python/docs/1.9.0/api/class-response"}},b=[{value:"request.failure",id:"requestfailure",children:[]},{value:"request.frame",id:"requestframe",children:[]},{value:"request.headers",id:"requestheaders",children:[]},{value:"request.is_navigation_request()",id:"requestis_navigation_request",children:[]},{value:"request.method",id:"requestmethod",children:[]},{value:"request.post_data",id:"requestpost_data",children:[]},{value:"request.post_data_buffer",id:"requestpost_data_buffer",children:[]},{value:"request.post_data_json",id:"requestpost_data_json",children:[]},{value:"request.redirected_from",id:"requestredirected_from",children:[]},{value:"request.redirected_to",id:"requestredirected_to",children:[]},{value:"request.resource_type",id:"requestresource_type",children:[]},{value:"request.response()",id:"requestresponse",children:[]},{value:"request.timing",id:"requesttiming",children:[]},{value:"request.url",id:"requesturl",children:[]}],p={toc:b};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Whenever the page sends a request for a network resource the following sequence of events are emitted by ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/1.9.0/api/class-page",title:"Page"}),"Page"),":"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-page#pageonrequest"}),'page.on("request")')," emitted when the request is issued by the page."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-page#pageonresponse"}),'page.on("response")')," emitted when/if the response status and headers are received for the request."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-page#pageonrequestfinished"}),'page.on("requestfinished")')," emitted when the response body is downloaded and the request is complete.")),Object(s.b)("p",null,"If request fails at some point, then instead of ",Object(s.b)("inlineCode",{parentName:"p"},"'requestfinished'")," event (and possibly instead of 'response' event), the  ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/1.9.0/api/class-page#pageonrequestfailed"}),'page.on("requestfailed")')," event is emitted."),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",Object(s.b)("inlineCode",{parentName:"p"},"'requestfinished'")," event."))),Object(s.b)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the 'requestfinished' event, and a new request is  issued to a redirected url."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-request#requestfailure"}),"request.failure")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-request#requestframe"}),"request.frame")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-request#requestheaders"}),"request.headers")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-request#requestis_navigation_request"}),"request.is_navigation_request()")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-request#requestmethod"}),"request.method")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-request#requestpost_data"}),"request.post_data")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-request#requestpost_data_buffer"}),"request.post_data_buffer")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-request#requestpost_data_json"}),"request.post_data_json")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-request#requestredirected_from"}),"request.redirected_from")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-request#requestredirected_to"}),"request.redirected_to")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-request#requestresource_type"}),"request.resource_type")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-request#requestresponse"}),"request.response()")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-request#requesttiming"}),"request.timing")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-request#requesturl"}),"request.url"))),Object(s.b)("h2",{id:"requestfailure"},"request.failure"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">")),Object(s.b)("p",null,"The method returns ",Object(s.b)("inlineCode",{parentName:"p"},"null")," unless this request has failed, as reported by ",Object(s.b)("inlineCode",{parentName:"p"},"requestfailed")," event."),Object(s.b)("p",null,"Example of logging of all the failed requests:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'page.on("requestfailed", lambda request: print(request.url + " " + request.failure))\n')),Object(s.b)("h2",{id:"requestframe"},"request.frame"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-frame",title:"Frame"}),"Frame"),">")),Object(s.b)("p",null,"Returns the ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/1.9.0/api/class-frame",title:"Frame"}),"Frame")," that initiated this request."),Object(s.b)("h2",{id:"requestheaders"},"request.headers"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),"[",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"]",">")),Object(s.b)("p",null,"An object with HTTP headers associated with the request. All header names are lower-case."),Object(s.b)("h2",{id:"requestis_navigation_request"},"request.is_navigation_request()"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">")),Object(s.b)("p",null,"Whether this request is driving frame's navigation."),Object(s.b)("h2",{id:"requestmethod"},"request.method"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">")),Object(s.b)("p",null,"Request's method (GET, POST, etc.)"),Object(s.b)("h2",{id:"requestpost_data"},"request.post_data"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">")),Object(s.b)("p",null,"Request's post body, if any."),Object(s.b)("h2",{id:"requestpost_data_buffer"},"request.post_data_buffer"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|","[Buffer]",">")),Object(s.b)("p",null,"Request's post body in a binary form, if any."),Object(s.b)("h2",{id:"requestpost_data_json"},"request.post_data_json"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Any",title:"Any"}),"Any"),">")),Object(s.b)("p",null,"Returns parsed request's body for ",Object(s.b)("inlineCode",{parentName:"p"},"form-urlencoded")," and JSON as a fallback if any."),Object(s.b)("p",null,"When the response is ",Object(s.b)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," then a key/value object of the values will be returned. Otherwise it will be parsed as JSON."),Object(s.b)("h2",{id:"requestredirected_from"},"request.redirected_from"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-request",title:"Request"}),"Request"),">")),Object(s.b)("p",null,"Request that was redirected by the server to this one, if any."),Object(s.b)("p",null,"When the server responds with a redirect, Playwright creates a new ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/1.9.0/api/class-request",title:"Request"}),"Request")," object. The two requests are connected by ",Object(s.b)("inlineCode",{parentName:"p"},"redirectedFrom()")," and ",Object(s.b)("inlineCode",{parentName:"p"},"redirectedTo()")," methods. When multiple server redirects has happened, it is possible to construct the whole redirect chain by repeatedly calling ",Object(s.b)("inlineCode",{parentName:"p"},"redirectedFrom()"),"."),Object(s.b)("p",null,"For example, if the website ",Object(s.b)("inlineCode",{parentName:"p"},"http://example.com")," redirects to ",Object(s.b)("inlineCode",{parentName:"p"},"https://example.com"),":"),Object(s.b)(i.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"sync",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'response = page.goto("http://example.com")\nprint(response.request.redirected_from.url) # "http://example.com"\n'))),Object(s.b)(l.a,{value:"async",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'response = await page.goto("http://example.com")\nprint(response.request.redirected_from.url) # "http://example.com"\n')))),Object(s.b)("p",null,"If the website ",Object(s.b)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects:"),Object(s.b)(i.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"sync",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'response = page.goto("https://google.com")\nprint(response.request.redirected_from) # None\n'))),Object(s.b)(l.a,{value:"async",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'response = await page.goto("https://google.com")\nprint(response.request.redirected_from) # None\n')))),Object(s.b)("h2",{id:"requestredirected_to"},"request.redirected_to"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-request",title:"Request"}),"Request"),">")),Object(s.b)("p",null,"New request issued by the browser if the server responded with redirect."),Object(s.b)("p",null,"This method is the opposite of ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/1.9.0/api/class-request#requestredirected_from"}),"request.redirected_from"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"assert request.redirected_from.redirected_to == request\n")),Object(s.b)("h2",{id:"requestresource_type"},"request.resource_type"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">")),Object(s.b)("p",null,"Contains the request's resource type as it was perceived by the rendering engine. ResourceType will be one of the following: ",Object(s.b)("inlineCode",{parentName:"p"},"document"),", ",Object(s.b)("inlineCode",{parentName:"p"},"stylesheet"),", ",Object(s.b)("inlineCode",{parentName:"p"},"image"),", ",Object(s.b)("inlineCode",{parentName:"p"},"media"),", ",Object(s.b)("inlineCode",{parentName:"p"},"font"),", ",Object(s.b)("inlineCode",{parentName:"p"},"script"),", ",Object(s.b)("inlineCode",{parentName:"p"},"texttrack"),", ",Object(s.b)("inlineCode",{parentName:"p"},"xhr"),", ",Object(s.b)("inlineCode",{parentName:"p"},"fetch"),", ",Object(s.b)("inlineCode",{parentName:"p"},"eventsource"),", ",Object(s.b)("inlineCode",{parentName:"p"},"websocket"),", ",Object(s.b)("inlineCode",{parentName:"p"},"manifest"),", ",Object(s.b)("inlineCode",{parentName:"p"},"other"),"."),Object(s.b)("h2",{id:"requestresponse"},"request.response()"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-response",title:"Response"}),"Response"),">")),Object(s.b)("p",null,"Returns the matching ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/1.9.0/api/class-response",title:"Response"}),"Response")," object, or ",Object(s.b)("inlineCode",{parentName:"p"},"null")," if the response was not received due to error."),Object(s.b)("h2",{id:"requesttiming"},"request.timing"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),">",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"startTime")," <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),"> Request start time in milliseconds elapsed since January 1, 1970 00:00:00 UTC"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"domainLookupStart")," <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),"> Time immediately before the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",Object(s.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"domainLookupEnd")," <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),"> Time immediately after the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",Object(s.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"connectStart")," <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),"> Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",Object(s.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"secureConnectionStart")," <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),"> Time immediately before the browser starts the handshake process to secure the current connection. The value is given in milliseconds relative to ",Object(s.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"connectEnd")," <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),"> Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",Object(s.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"requestStart")," <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),"> Time immediately before the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",Object(s.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"responseStart")," <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),"> Time immediately after the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",Object(s.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"responseEnd")," <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),"> Time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first. The value is given in milliseconds relative to ",Object(s.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available.")))),Object(s.b)("p",null,"Returns resource timing information for given request. Most of the timing values become available upon the response, ",Object(s.b)("inlineCode",{parentName:"p"},"responseEnd")," becomes available when request finishes. Find more information at ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming"}),"Resource Timing API"),"."),Object(s.b)(i.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"sync",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'with page.expect_event("requestfinished") as request_info:\n    page.goto("http://example.com")\nrequest = request_info.value\nprint(request.timing)\n'))),Object(s.b)(l.a,{value:"async",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'async with page.expect_event("requestfinished") as request_info:\n    await page.goto("http://example.com")\nrequest = await request_info.value\nprint(request.timing)\n')))),Object(s.b)("h2",{id:"requesturl"},"request.url"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">")),Object(s.b)("p",null,"URL of the request."))}u.isMDXComponent=!0},331:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},332:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),b=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=b(a),d=r,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||s;return a?n.a.createElement(m,l(l({ref:t},c),{},{components:a})):n.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},333:function(e,t,a){"use strict";var r=a(0),n=a(334);t.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},334:function(e,t,a){"use strict";var r=a(0),n=Object(r.createContext)(void 0);t.a=n},335:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(333),i=a(331),l=a(55),o=a.n(l),c=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=Object(s.a)(),h=m.tabGroupChoices,O=m.setTabGroupChoices,j=Object(r.useState)(l),f=j[0],y=j[1],N=r.Children.toArray(e.children);if(null!=u){var q=h[u];null!=q&&q!==f&&p.some((function(e){return e.value===q}))&&y(q)}var v=function(e){y(e),null!=u&&O(u,e)},g=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},d)},p.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(i.a)("tabs__item",o.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(g,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(r.cloneElement)(N.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},336:function(e,t,a){"use strict";var r=a(3),n=a(0),s=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return s.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:a,className:n}),t)}}}]);