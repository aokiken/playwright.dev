(window.webpackJsonp=window.webpackJsonp||[]).push([[140,23],{219:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r.a})),n.d(t,"b",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return i}));n(220);var u=n(226),r=n.n(u),a=["en"],c=!1,o="e666dac7",s=10,i=50},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var u=n(218),r=n(222);function a(e,t,n){for(var c,o=[],s=Object(u.a)(t);!(c=s()).done;){var i=c.value,l=e.toLowerCase().indexOf(i);if(l>=0){l>0&&o.push(a(e.substr(0,l),t)),o.push("<mark>"+Object(r.a)(e.substr(l,i.length))+"</mark>");var h=l+i.length;h<e.length&&o.push(a(e.substr(h),t));break}}return 0===o.length?n?"<mark>"+Object(r.a)(e)+"</mark>":Object(r.a)(e):o.join("")}},222:function(e,t,n){"use strict";function u(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}n.d(t,"a",(function(){return u}))},228:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var u=n(224),r=n.n(u),a=n(218),c=n(225),o=n(220),s=n.n(o),i=n(219);function l(e){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(r.a.mark((function e(t){var n,u,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(t+"search-index.json?_="+i.b);case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,u=n.map((function(e,t){var n=e.documents,u=e.index;return{type:t,documents:n,index:s.a.Index.load(u)}})),c=n.reduce((function(e,t){for(var n,u=Object(a.a)(t.index.invertedIndex);!(n=u()).done;){var r=n.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(r[0][0])&&e.add(r[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:u,zhDictionary:Array.from(c)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},229:function(e,t,n){"use strict";function u(e,t){for(var n=[],u=0,r=Object.values(e);u<r.length;u++){var a=r[u];a[t]&&n.push.apply(n,a[t].position)}return n.sort((function(e,t){return e[0]-t[0]||t[1]-e[1]}))}n.d(t,"a",(function(){return u}))},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var u=n(0),r=n.n(u),a=n(227),c=n(57),o=n.n(c);function s(e){var t=e.className;return r.a.createElement("div",{className:Object(a.a)(o.a.loadingRing,t)},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var u=n(218),r=n(220),a=n.n(r);var c=n(219);function o(e,t,n){return function(t,r){var o=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return a.a[t[0]].tokenizer(e).map((function(e){return e.toString()}));var n=/[^-\s]+/g;return t.includes("zh")&&(n=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(n)||[]}(t,c.c);if(0!==o.length){var s,i=[{tokens:s=o,term:s.map((function(e){return{value:e,presence:a.a.Query.presence.REQUIRED,wildcard:a.a.Query.wildcard.LEADING|a.a.Query.wildcard.TRAILING}}))}],l=[],h=function(){for(var t,r=d.value,a=r.term,c=r.tokens,o=function(){var r=t.value,o=r.documents,s=r.index,i=r.type;if(l.push.apply(l,s.query((function(e){for(var t,n=Object(u.a)(a);!(t=n()).done;){var r=t.value;e.term(r.value,{wildcard:r.wildcard,presence:r.presence})}})).slice(0,n).filter((function(e){return!l.some((function(t){return t.document.i.toString()===e.ref}))})).slice(0,n-l.length).map((function(t){var n=o.find((function(e){return e.i.toString()===t.ref}));return{document:n,type:i,page:0!==i&&e[0].documents.find((function(e){return e.i===n.p})),metadata:t.matchData.metadata,tokens:c,score:t.score}}))),l.length>=n)return{v:"break|search"}},s=Object(u.a)(e);!(t=s()).done;){var i=o();if("object"==typeof i)return i.v}};e:for(var d,p=Object(u.a)(i);!(d=p()).done;){if("break|search"===h())break e}var f=l.filter((function(e){return"/docs/api"!==e.document.u}));!function(e){e.forEach((function(e,t){e.index=t})),e.sort((function(t,n){var u=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index,r=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index;return-1===u&&(u=t.index),-1===r&&(r=n.index),u===r?0===t.type?-1:0===n.type?1:t.index-n.index:u-r}))}(f),function(e){e.forEach((function(t,n){n>0&&t.page&&e.some((function(e){return e.document===t.page}))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(f),r(f)}else r([])}}},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var u=n(222),r=n(221),a=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function c(e){for(var t=[],n=0,u=e;u.length>0;){var r=u.match(a);if(!r){t.push(u);break}r.index>0&&t.push(u.substr(0,r.index)),t.push(r[0]),n+=r.index+r[0].length,u=e.substr(n)}return t}var o=n(219);function s(e,t,n,u){void 0===u&&(u=o.e);for(var r={chunkIndex:-1},a=i(e,t,n,0,0,r),c=a.slice(0,r.chunkIndex),s=a[r.chunkIndex],l=[s.html],h=a.slice(r.chunkIndex+1),d=s.textLength,p=0,f=0,D=!1,v=!1;d<u;)if((p<=f||0===h.length)&&c.length>0){var F=c.pop();d+F.textLength<=u?(l.unshift(F.html),p+=F.textLength,d+=F.textLength):(D=!0,c.length=0)}else{if(!(h.length>0))break;var g=h.shift();d+g.textLength<=u?(l.push(g.html),f+=g.textLength,d+=g.textLength):(v=!0,h.length=0)}return(D||c.length>0)&&l.unshift("\u2026"),(v||h.length>0)&&l.push("\u2026"),l.join("")}function i(e,t,n,a,o,s){var l=[],h=t[a],d=h[0],p=h[1];if(d<o)(a+=1)<t.length&&l.push.apply(l,i(e,t,n,a,o));else{d>o&&l.push.apply(l,c(e.substring(o,d)).map((function(e){return{html:Object(u.a)(e),textLength:e.length}}))),s&&(s.chunkIndex=l.length),l.push({html:Object(r.a)(e.substr(d,p),n,!0),textLength:p});var f=d+p;(a+=1)<t.length?l.push.apply(l,i(e,t,n,a,f)):f<e.length&&l.push.apply(l,c(e.substr(f)).map((function(e){return{html:Object(u.a)(e),textLength:e.length}})))}return l}},238:function(e,t,n){"use strict";var u=n(219),r=n(224),a=n.n(r),c=n(218),o=n(225),s=n(0),i=n.n(s),l=n(227),h=n(22),d=n(10),p=n(234),f=n(228),D=n(231),v=n(221),F=n(233),g=n(229),m=n(56),b=n.n(m);function k(e){var t=e.document,n=e.type,u=e.page,r=e.metadata,a=e.tokens,c=e.isInterOfTree,o=e.isLastOfTree,s=0===n,i=1===n,l=[];c?l.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):o&&l.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var h=l.map((function(e){return'<span class="'+b.a.hitTree+'">'+e+"</span>"})),d='<span class="'+b.a.hitIcon+'">'+(s?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':i?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",p=['<span class="'+b.a.hitTitle+'">'+Object(F.a)(t.t,Object(g.a)(r,"t"),a)+"</span>"];s||p.push('<span class="'+b.a.hitPath+'">'+Object(v.a)(u.t||(t.u.startsWith("/docs/api-reference/")?"API Reference":""),a)+"</span>");var f='<span class="'+b.a.hitAction+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>';return[].concat(h,[d,'<span class="'+b.a.hitWrapper+'">'],p,["</span>",f]).join("")}function x(){return'<span class="'+b.a.noResults+'"><span class="'+b.a.noResultsIcon+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>No results.</span></span>'}var C=n(230);function A(){return j.apply(this,arguments)}function j(){return(j=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(139),n.e(142)]).then(n.t.bind(null,302,7));case 2:return(t=e.sent).noConflict(),e.abrupt("return",t.default);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E="_highlight";t.a=function(e){var t,n=e.handleSearchBarToggle,r=Object(h.default)().siteConfig.baseUrl,v=Object(p.useHistory)(),F=Object(p.useLocation)(),g=Object(s.useRef)(null),m=Object(s.useRef)("empty"),j=Object(s.useRef)(!1),w=Object(s.useState)(!1),O=w[0],y=w[1],L=Object(s.useState)(!1),I=L[0],B=L[1],M=Object(s.useCallback)(Object(o.a)(a.a.mark((function e(){var t,n,o,s,i,l,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===m.current){e.next=2;break}return e.abrupt("return");case 2:return m.current="loading",y(!0),e.next=6,Promise.all([Object(f.a)(r),A()]);case 6:t=e.sent,n=t[0],o=n.wrappedIndexes,s=n.zhDictionary,i=t[1],l=i(g.current,{hint:!1,autoselect:!0,cssClasses:{root:b.a.searchBar,noPrefix:!0,dropdownMenu:b.a.dropdownMenu,input:b.a.input,hint:b.a.hint,suggestions:b.a.suggestions,suggestion:b.a.suggestion,cursor:b.a.cursor,dataset:b.a.dataset,empty:b.a.empty}},[{source:Object(D.a)(o,s,u.f),templates:{suggestion:k,empty:x,footer:function(e){var t=e.query;if(!e.isEmpty){var n=document.createElement("a"),u=r+"search?q="+encodeURIComponent(t);n.href=u,n.textContent="See all results",n.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),l.autocomplete.close(),v.push(u))}));var a=document.createElement("div");return a.className=b.a.hitFooter,a.appendChild(n),a}}}}]).on("autocomplete:selected",(function(e,t){var n=t.document,r=n.u,a=n.h,o=t.tokens,s=r;if(u.a&&o.length>0){for(var i,l=new URLSearchParams,h=Object(c.a)(o);!(i=h()).done;){var d=i.value;l.append(E,d)}s+="?"+l.toString()}a&&(s+=a),v.push(s)})),m.current="done",y(!1),j.current&&((h=g.current).value&&l.autocomplete.open(),h.focus());case 15:case"end":return e.stop()}}),e)}))),[r,v]);Object(s.useEffect)((function(){if(u.a){var e=d.a.canUseDOM?new URLSearchParams(F.search).getAll(E):[];if(0!==e.length){var t=document.querySelector("article");if(t)new u.a(t).mark(e)}}}),[F.search]);var N=Object(s.useCallback)((function(){j.current=!0,M(),n(!0)}),[n,M]),R=Object(s.useCallback)((function(){n(!1)}),[n]),S=Object(s.useCallback)((function(){M()}),[M]),z=Object(s.useCallback)((function(e){e.target.value&&B(!0)}),[]);return i.a.createElement("div",{className:Object(l.a)("navbar__search",b.a.searchBarContainer,(t={},t[b.a.searchIndexLoading]=O&&I,t))},i.a.createElement("input",{placeholder:"Search","aria-label":"Search",className:"navbar__search-input",onMouseEnter:S,onFocus:N,onBlur:R,onChange:z,ref:g}),i.a.createElement(C.a,{className:b.a.searchBarLoadingRing}))}},253:function(e,t,n){"use strict";n.r(t);var u=n(0),r=n.n(u),a=n(235);t.default=function(){return r.a.createElement(a.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);