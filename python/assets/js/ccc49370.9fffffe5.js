(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6103],{3146:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(7294),a=n(6010),u=n(3905),i=n(4973),l=n(6742),o=n(1729),s=n(1217),c="blogPostTitle_GeHD",m="blogPostDate_fNvV",d=n(6700);var h=function(e){var t,n,h=(t=(0,d.c2)().selectMessage,function(e){var n=Math.ceil(e);return t(n,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}),p=e.children,f=e.frontMatter,v=e.metadata,g=e.truncated,D=e.isBlogPostPage,F=void 0!==D&&D,E=v.date,_=v.formattedDate,b=v.permalink,k=v.tags,A=v.readingTime,C=f.author,x=f.title,w=f.image,y=f.keywords,N=f.author_url||f.authorURL,Z=f.author_title||f.authorTitle,I=f.author_image_url||f.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(s.Z,{keywords:y,image:w}),r.createElement("article",{className:F?void 0:"margin-bottom--xl"},(n=F?"h1":"h2",r.createElement("header",null,r.createElement(n,{className:(0,a.Z)("margin-bottom--sm",c)},F?x:r.createElement(l.Z,{to:b},x)),r.createElement("div",{className:"margin-vert--md"},r.createElement("time",{dateTime:E,className:m},_,A&&r.createElement(r.Fragment,null," \xb7 ",h(A)))),r.createElement("div",{className:"avatar margin-vert--md"},I&&r.createElement(l.Z,{className:"avatar__photo-link avatar__photo",href:N},r.createElement("img",{src:I,alt:C})),r.createElement("div",{className:"avatar__intro"},C&&r.createElement(r.Fragment,null,r.createElement("h4",{className:"avatar__name"},r.createElement(l.Z,{href:N},C)),r.createElement("small",{className:"avatar__subtitle"},Z)))))),r.createElement("div",{className:"markdown"},r.createElement(u.Zo,{components:o.Z},p)),(k.length>0||g)&&r.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&r.createElement("div",{className:"col"},r.createElement("strong",null,r.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((function(e){var t=e.label,n=e.permalink;return r.createElement(l.Z,{key:n,className:"margin-horiz--sm",to:n},t)}))),g&&r.createElement("div",{className:"col text--right"},r.createElement(l.Z,{to:v.permalink,"aria-label":"Read more about "+x},r.createElement("strong",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},4147:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(7294),a=n(4543),u=n(3146),i=n(4973),l=n(6742);var o=function(e){var t=e.nextItem,n=e.prevItem;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},r.createElement("div",{className:"pagination-nav__item"},n&&r.createElement(l.Z,{className:"pagination-nav__link",to:n.permalink},r.createElement("div",{className:"pagination-nav__sublabel"},r.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),r.createElement("div",{className:"pagination-nav__label"},"\xab ",n.title))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&r.createElement(l.Z,{className:"pagination-nav__link",to:t.permalink},r.createElement("div",{className:"pagination-nav__sublabel"},r.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),r.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},s=n(5601),c=n(2725),m=n(6146),d=n(6700);var h=function(e){var t=e.content,n=e.sidebar,i=t.frontMatter,l=t.metadata,h=l.title,p=l.description,f=l.nextItem,v=l.prevItem,g=l.editUrl,D=i.hide_table_of_contents;return r.createElement(a.Z,{title:h,description:p,wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogPostPage},t&&r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--3"},r.createElement(s.Z,{sidebar:n})),r.createElement("main",{className:"col col--7"},r.createElement(u.Z,{frontMatter:i,metadata:l,isBlogPostPage:!0},r.createElement(t,null)),r.createElement("div",null,g&&r.createElement(m.Z,{editUrl:g})),(f||v)&&r.createElement("div",{className:"margin-vert--xl"},r.createElement(o,{nextItem:f,prevItem:v}))),!D&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(c.Z,{toc:t.toc})))))}},5601:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7294),a=n(6010),u=n(6742),i="sidebar_2ahu",l="sidebarItemTitle_2hhb",o="sidebarItemList_2xAf",s="sidebarItem_2UVv",c="sidebarItemLink_1RT6",m="sidebarItemLinkActive_12pM";function d(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("div",{className:(0,a.Z)(i,"thin-scrollbar")},r.createElement("h3",{className:l},t.title),r.createElement("ul",{className:o},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:s},r.createElement(u.Z,{isNavLink:!0,to:e.permalink,className:c,activeClassName:m},e.title))}))))}},6146:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),a=n(4973),u=n(2122),i=n(9756),l=n(6010),o="iconEdit_2_ui",s=function(e){var t=e.className,n=(0,i.Z)(e,["className"]);return r.createElement("svg",(0,u.Z)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:(0,l.Z)(o,t),"aria-label":"Edit page"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function c(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(s,null),r.createElement(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2725:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(6010);var u=function(e,t,n){var a=(0,r.useState)(void 0),u=a[0],i=a[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var a=0,l=!1,o=document.getElementsByClassName(e);a<o.length&&!l;){var s=o[a],c=s.href,m=decodeURIComponent(c.substring(c.indexOf("#")+1));r.id===m&&(u&&u.classList.remove(t),s.classList.add(t),i(s),l=!0),a+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},i="tableOfContents_35-E",l="table-of-contents__link";function o(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:l,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return u(l,"table-of-contents__link--active",100),r.createElement("div",{className:(0,a.Z)(i,"thin-scrollbar")},r.createElement(o,{toc:t}))}},4809:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(9756),a=n(7294),u=n(6010),i=n(6700),l="enhancedAnchor_3KR1",o=function(e){return function(t){var n,o=t.id,s=(0,r.Z)(t,["id"]),c=(0,i.LU)().navbar.hideOnScroll;if(!o)return a.createElement(e,s);return a.createElement(e,s,a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,u.Z)("anchor",(n={},n[l]=!c,n)),id:o}),s.children,a.createElement("a",{className:"hash-link",href:"#"+o,onClick:function(e){e.preventDefault();var t=new URL(e.target.href);t.search="",history.pushState("",document.title,t.toString())},title:"Direct link to heading"},"#"))}}},4535:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),a=n(8695),u="loadingRing_3atr";function i(e){var t=e.className;return r.createElement("div",{className:(0,a.Z)(u,t)},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}},3551:function(e,t,n){"use strict";n.d(t,{w:function(){return c}});var r=n(8173),a=n(2137),u=n(7757),i=n.n(u),l=n(5850),o=n.n(l),s=n(8141);function c(e){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(i().mark((function e(t){var n,a,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(t+"search-index.json?_="+s.rx);case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,a=n.map((function(e,t){var n=e.documents,r=e.index;return{type:t,documents:n,index:o().Index.load(r)}})),u=n.reduce((function(e,t){for(var n,a=(0,r.Z)(t.index.invertedIndex);!(n=a()).done;){var u=n.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(u[0][0])&&e.add(u[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:a,zhDictionary:Array.from(u)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},3636:function(e,t,n){"use strict";n.d(t,{Z:function(){return q}});var r=n(8141),a=n(8173),u=n(2137),i=n(7757),l=n.n(i),o=n(7294),s=n(8695),c=n(2263),m=n(412),d=n(5977),h=n(3551),p=n(8938),f=n(6092),v=n(5401),g=n(5579),D="searchBar_2moK",F="dropdownMenu_17SC",E="suggestion_1kAZ",_="cursor_6rPN",b="hitTree_2sUa",k="hitIcon_3jP2",A="hitPath_3Lax",C="noResultsIcon_1rmk",x="hitFooter_1JML",w="hitWrapper_4Hzp",y="hitTitle_2AMl",N="hitAction_2kg3",Z="noResults_1vI5",I="searchBarContainer_2P1H",L="searchBarLoadingRing_1FtX",z="searchIndexLoading_1eRR",B="input_1tay",T="hint_1WuO",R="suggestions_1cWc",M="dataset_3Xc2",P="empty_2isC";function S(e){var t=e.document,n=e.type,r=e.page,a=e.metadata,u=e.tokens,i=e.isInterOfTree,l=e.isLastOfTree,o=0===n,s=1===n,c=[];i?c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):l&&c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var m=c.map((function(e){return'<span class="'+b+'">'+e+"</span>"})),d='<span class="'+k+'">'+(o?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':s?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",h=['<span class="'+y+'">'+(0,v.o)(t.t,(0,g.m)(a,"t"),u)+"</span>"];return o||h.push('<span class="'+A+'">'+(0,f.C)(r.t||(t.u.startsWith("/docs/api-reference/")?"API Reference":""),u)+"</span>"),[].concat(m,[d,'<span class="'+w+'">'],h,["</span>",'<span class="'+N+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>']).join("")}function H(){return'<span class="'+Z+'"><span class="'+C+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>'+r.Iz.no_results+"</span></span>"}var U=n(4535);function j(){return O.apply(this,arguments)}function O(){return(O=(0,u.Z)(l().mark((function e(){var t,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(6756),n.e(213)]).then(n.t.bind(n,4485,23));case 2:return t=e.sent,(r=t.default).noConflict?r.noConflict():t.noConflict&&t.noConflict(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W="_highlight";var q=function(e){var t,n=e.handleSearchBarToggle,i=(0,c.default)().siteConfig.baseUrl,f=(0,d.k6)(),v=(0,d.TH)(),g=(0,o.useRef)(null),b=(0,o.useRef)("empty"),k=(0,o.useRef)(!1),A=(0,o.useState)(!1),C=A[0],w=A[1],y=(0,o.useState)(!1),N=y[0],Z=y[1],O=(0,o.useCallback)((0,u.Z)(l().mark((function e(){var t,n,u,o,s,c,m;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===b.current){e.next=2;break}return e.abrupt("return");case 2:return b.current="loading",w(!0),e.next=6,Promise.all([(0,h.w)(i),j()]);case 6:t=e.sent,n=t[0],u=n.wrappedIndexes,o=n.zhDictionary,s=t[1],c=s(g.current,{hint:!1,autoselect:!0,cssClasses:{root:D,noPrefix:!0,dropdownMenu:F,input:B,hint:T,suggestions:R,suggestion:E,cursor:_,dataset:M,empty:P}},[{source:(0,p.v)(u,o,r.qo),templates:{suggestion:S,empty:H,footer:function(e){var t=e.query;if(!e.isEmpty){var n=document.createElement("a"),a=i+"search?q="+encodeURIComponent(t);n.href=a,n.textContent=r.Iz.see_all_results,n.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),c.autocomplete.close(),f.push(a))}));var u=document.createElement("div");return u.className=x,u.appendChild(n),u}}}}]).on("autocomplete:selected",(function(e,t){var n=t.document,u=n.u,i=n.h,l=t.tokens,o=u;if(r.vc&&l.length>0){for(var s,c=new URLSearchParams,m=(0,a.Z)(l);!(s=m()).done;){var d=s.value;c.append(W,d)}o+="?"+c.toString()}i&&(o+=i),f.push(o)})),b.current="done",w(!1),k.current&&((m=g.current).value&&c.autocomplete.open(),m.focus());case 15:case"end":return e.stop()}}),e)}))),[i,f]);(0,o.useEffect)((function(){if(r.vc){var e=m.Z.canUseDOM?new URLSearchParams(v.search).getAll(W):[];if(0!==e.length){var t=document.querySelector("article");if(t){var n=new r.vc(t);n.unmark(),n.mark(e)}}}}),[v.search]);var q=(0,o.useCallback)((function(){k.current=!0,O(),null==n||n(!0)}),[n,O]),Q=(0,o.useCallback)((function(){null==n||n(!1)}),[n]),V=(0,o.useCallback)((function(){O()}),[O]),X=(0,o.useCallback)((function(e){e.target.value&&Z(!0)}),[]);return o.createElement("div",{className:(0,s.Z)("navbar__search",I,(t={},t[z]=C&&N,t))},o.createElement("input",{placeholder:r.Iz.search_placeholder,"aria-label":"Search",className:"navbar__search-input",onMouseEnter:V,onFocus:q,onBlur:Q,onChange:X,ref:g}),o.createElement(U.Z,{className:L}))}},8938:function(e,t,n){"use strict";n.d(t,{v:function(){return c}});var r=n(8173),a=n(5850),u=n.n(a);function i(e,t){var n=[];return function e(a,u){if(0!==a.length){var i=a[0];if(/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(i))for(var l,o=function(e,t){var n=[];return function e(a,u){for(var i,l=0,o=!1,s=(0,r.Z)(t);!(i=s()).done;){var c=i.value;if(a.substr(0,c.length)===c){var m={missed:u.missed,term:u.term.concat({value:c})};a.length>c.length?e(a.substr(c.length),m):n.push(m),o=!0}else for(var d=c.length-1;d>l;d-=1){var h=c.substr(0,d);if(a.substr(0,d)===h){l=d;var p={missed:u.missed,term:u.term.concat({value:h,trailing:!0})};a.length>d?e(a.substr(d),p):n.push(p),o=!0;break}}}o||(a.length>0?e(a.substr(1),{missed:u.missed+1,term:u.term}):u.term.length>0&&n.push(u))}(e,{missed:0,term:[]}),n.sort((function(e,t){var n=e.missed>0?1:0,r=t.missed>0?1:0;return n!==r?n-r:e.term.length-t.term.length})).map((function(e){return e.term}))}(i,t),s=(0,r.Z)(o);!(l=s()).done;){var c=l.value,m=u.concat.apply(u,c);e(a.slice(1),m)}else{var d=u.concat({value:i});e(a.slice(1),d)}}else n.push(u)}(e,[]),n}var l=n(8141);function o(e){return s(e).concat(s(e.filter((function(e){var t=e[e.length-1];return!t.trailing&&t.maybeTyping})),!0))}function s(e,t){return e.map((function(e){return{tokens:e.map((function(e){return e.value})),term:e.map((function(e){return{value:e.value,presence:u().Query.presence.REQUIRED,wildcard:(t?e.trailing||e.maybeTyping:e.trailing)?u().Query.wildcard.TRAILING:u().Query.wildcard.NONE}}))}}))}function c(e,t,n){return function(a,s){var c=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return u()[t[0]].tokenizer(e).map((function(e){return e.toString()}));var n=/[^-\s]+/g;return t.includes("zh")&&(n=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(n)||[]}(a,l.dK);if(0!==c.length){var m=function(e,t){var n=i(e,t);if(0===n.length)return[{tokens:e,term:e.map((function(e){return{value:e,presence:u().Query.presence.REQUIRED,wildcard:u().Query.wildcard.LEADING|u().Query.wildcard.TRAILING}}))}];for(var a,s=(0,r.Z)(n);!(a=s()).done;){var c=a.value;c[c.length-1].maybeTyping=!0}for(var m,d,h=[],p=(0,r.Z)(l.dK);!(m=p()).done;){var f=m.value;if("en"===f)l._k||h.unshift(u().stopWordFilter);else{var v=u()[f];v.stopWordFilter&&h.unshift(v.stopWordFilter)}}if(h.length>0){var g=function(e){return h.reduce((function(e,t){return e.filter((function(e){return t(e.value)}))}),e)};d=[];for(var D,F=[],E=(0,r.Z)(n);!(D=E()).done;){var _=D.value,b=g(_);d.push(b),b.length<_.length&&b.length>0&&F.push(b)}n.push.apply(n,F)}else d=n.slice();for(var k,A=[],C=(0,r.Z)(d);!(k=C()).done;){var x=k.value;if(x.length>2)for(var w=x.length-1;w>=0;w-=1)A.push(x.slice(0,w).concat(x.slice(w+1)))}return o(n).concat(o(A))}(c,t),d=[],h=function(){for(var t,a=p.value,u=a.term,i=a.tokens,l=function(){var a=t.value,l=a.documents,o=a.index,s=a.type;if(d.push.apply(d,o.query((function(e){for(var t,n=(0,r.Z)(u);!(t=n()).done;){var a=t.value;e.term(a.value,{wildcard:a.wildcard,presence:a.presence})}})).slice(0,n).filter((function(e){return!d.some((function(t){return t.document.i.toString()===e.ref}))})).slice(0,n-d.length).map((function(t){var n=l.find((function(e){return e.i.toString()===t.ref}));return{document:n,type:s,page:0!==s&&e[0].documents.find((function(e){return e.i===n.p})),metadata:t.matchData.metadata,tokens:i,score:t.score}}))),d.length>=n)return{v:"break|search"}},o=(0,r.Z)(e);!(t=o()).done;){var s=l();if("object"==typeof s)return s.v}};e:for(var p,f=(0,r.Z)(m);!(p=f()).done;){if("break|search"===h())break e}!function(e){e.forEach((function(e,t){e.index=t})),e.sort((function(t,n){var r=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index,a=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index;return-1===r&&(r=t.index),-1===a&&(a=n.index),r===a?0===t.type?-1:0===n.type?1:t.index-n.index:r-a}))}(d),function(e){e.forEach((function(t,n){n>0&&t.page&&e.some((function(e){return e.document===t.page}))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(d),s(d)}else s([])}}},8740:function(e,t,n){"use strict";function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}n.d(t,{X:function(){return r}})},5579:function(e,t,n){"use strict";function r(e,t){for(var n=[],r=0,a=Object.values(e);r<a.length;r++){var u=a[r];u[t]&&n.push.apply(n,u[t].position)}return n.sort((function(e,t){return e[0]-t[0]||t[1]-e[1]}))}n.d(t,{m:function(){return r}})},6092:function(e,t,n){"use strict";n.d(t,{C:function(){return u}});var r=n(8173),a=n(8740);function u(e,t,n){for(var i,l=[],o=(0,r.Z)(t);!(i=o()).done;){var s=i.value,c=e.toLowerCase().indexOf(s);if(c>=0){c>0&&l.push(u(e.substr(0,c),t)),l.push("<mark>"+(0,a.X)(e.substr(c,s.length))+"</mark>");var m=c+s.length;m<e.length&&l.push(u(e.substr(m),t));break}}return 0===l.length?n?"<mark>"+(0,a.X)(e)+"</mark>":(0,a.X)(e):l.join("")}},5401:function(e,t,n){"use strict";n.d(t,{o:function(){return o}});var r=n(8740),a=n(6092),u=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function i(e){for(var t=[],n=0,r=e;r.length>0;){var a=r.match(u);if(!a){t.push(r);break}a.index>0&&t.push(r.substr(0,a.index)),t.push(a[0]),n+=a.index+a[0].length,r=e.substr(n)}return t}var l=n(8141);function o(e,t,n,r){void 0===r&&(r=l.Hk);for(var a={chunkIndex:-1},u=s(e,t,n,0,0,a),i=u.slice(0,a.chunkIndex),o=u[a.chunkIndex],c=[o.html],m=u.slice(a.chunkIndex+1),d=o.textLength,h=0,p=0,f=!1,v=!1;d<r;)if((h<=p||0===m.length)&&i.length>0){var g=i.pop();d+g.textLength<=r?(c.unshift(g.html),h+=g.textLength,d+=g.textLength):(f=!0,i.length=0)}else{if(!(m.length>0))break;var D=m.shift();d+D.textLength<=r?(c.push(D.html),p+=D.textLength,d+=D.textLength):(v=!0,m.length=0)}return(f||i.length>0)&&c.unshift("\u2026"),(v||m.length>0)&&c.push("\u2026"),c.join("")}function s(e,t,n,u,l,o){var c=[],m=t[u],d=m[0],h=m[1];if(d<l)(u+=1)<t.length&&c.push.apply(c,s(e,t,n,u,l));else{d>l&&c.push.apply(c,i(e.substring(l,d)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}}))),o&&(o.chunkIndex=c.length),c.push({html:(0,a.C)(e.substr(d,h),n,!0),textLength:h});var p=d+h;(u+=1)<t.length?c.push.apply(c,s(e,t,n,u,p)):p<e.length&&c.push.apply(c,i(e.substr(p)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}})))}return c}},8141:function(e,t,n){"use strict";n.d(t,{vc:function(){return i()},rx:function(){return s},dK:function(){return l},_k:function(){return o},Hk:function(){return m},qo:function(){return c},Iz:function(){return d}});var r=n(5850),a=n.n(r),u=n(957),i=n.n(u);n(8465)(a()),n(4376).w(a()),n(3609)(a());var l=["en","zh"],o=!1,s="4fc3c962",c=10,m=50,d={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},4376:function(e,t,n){"use strict";function r(e){var t=new RegExp("^[^"+e+"]+","u"),n=new RegExp("[^"+e+"]+$","u");return function(e){return e.update((function(e){return e.replace(t,"").replace(n,"")}))}}function a(e,t){e.trimmerSupport.generateTrimmer=r,e.zh=function(){this.pipeline.reset(),this.pipeline.add(e.zh.trimmer,e.zh.stopWordFilter),t&&(this.tokenizer=t)},t&&(e.zh.tokenizer=t),e.zh.wordCharacters="\\u3400-\\u4DBF\\u4E00-\\u9FFC\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6DD}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{30000}-\\u{3134A}",e.zh.trimmer=e.trimmerSupport.generateTrimmer(e.zh.wordCharacters),e.Pipeline.registerFunction(e.zh.trimmer,"trimmer-zh"),e.zh.stopWordFilter=e.generateStopWordFilter("\u7684 \u4e00 \u4e0d \u5728 \u4eba \u6709 \u662f \u4e3a \u4ee5 \u4e8e \u4e0a \u4ed6 \u800c \u540e \u4e4b \u6765 \u53ca \u4e86 \u56e0 \u4e0b \u53ef \u5230 \u7531 \u8fd9 \u4e0e \u4e5f \u6b64 \u4f46 \u5e76 \u4e2a \u5176 \u5df2 \u65e0 \u5c0f \u6211 \u4eec \u8d77 \u6700 \u518d \u4eca \u53bb \u597d \u53ea \u53c8 \u6216 \u5f88 \u4ea6 \u67d0 \u628a \u90a3 \u4f60 \u4e43 \u5b83 \u5427 \u88ab \u6bd4 \u522b \u8d81 \u5f53 \u4ece \u5230 \u5f97 \u6253 \u51e1 \u513f \u5c14 \u8be5 \u5404 \u7ed9 \u8ddf \u548c \u4f55 \u8fd8 \u5373 \u51e0 \u65e2 \u770b \u636e \u8ddd \u9760 \u5566 \u4e86 \u53e6 \u4e48 \u6bcf \u4eec \u561b \u62ff \u54ea \u90a3 \u60a8 \u51ed \u4e14 \u5374 \u8ba9 \u4ecd \u5565 \u5982 \u82e5 \u4f7f \u8c01 \u867d \u968f \u540c \u6240 \u5979 \u54c7 \u55e1 \u5f80 \u54ea \u4e9b \u5411 \u6cbf \u54df \u7528 \u4e8e \u54b1 \u5219 \u600e \u66fe \u81f3 \u81f4 \u7740 \u8bf8 \u81ea".split(" ")),e.Pipeline.registerFunction(e.zh.stopWordFilter,"stopWordFilter-zh")}n.d(t,{w:function(){return a}})}}]);