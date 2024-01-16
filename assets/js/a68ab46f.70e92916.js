"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[9215],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),c=function(e){return function(n){var t=u(n.components);return a.createElement(e,i({},n,{components:t}))}},u=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,g=c["".concat(o,".").concat(m)]||c[m]||p[m]||i;return t?a.createElement(g,s(s({ref:n},d),{},{components:t})):a.createElement(g,s({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},68629:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(39960),r=t(86341),i=t(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function s(e){var n=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),n)}var l=function(){var e=i.useState(!1),n=e[0],t=e[1],a=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},c=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return i.createElement(s,null,i.createElement(d,null),i.createElement(l,null),i.createElement(c,null))},m=function(){return i.createElement(s,null,i.createElement(l,null),i.createElement(c,null))};const p=function(){return(0,r.fbContent)({internal:i.createElement(u,null),external:i.createElement(m,null)})}},39488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>m,toc:()=>g});var a,r=t(83117),i=t(80102),o=(t(67294),t(3905)),s=t(68629),l=t(86341),d=["components"],c={id:"pagination",title:"Pagination",slug:"/guided-tour/list-data/pagination/",description:"Relay guide to pagination",keywords:["pagination","usePaginationFragment"]},u=void 0,m={unversionedId:"guided-tour/list-data/pagination",id:"version-v12.0.0/guided-tour/list-data/pagination",title:"Pagination",description:"Relay guide to pagination",source:"@site/versioned_docs/version-v12.0.0/guided-tour/list-data/pagination.md",sourceDirName:"guided-tour/list-data",slug:"/guided-tour/list-data/pagination/",permalink:"/docs/v12.0.0/guided-tour/list-data/pagination/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/guided-tour/list-data/pagination.md",tags:[],version:"v12.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1705425950,formattedLastUpdatedAt:"Jan 16, 2024",frontMatter:{id:"pagination",title:"Pagination",slug:"/guided-tour/list-data/pagination/",description:"Relay guide to pagination",keywords:["pagination","usePaginationFragment"]},sidebar:"version-v12.0.0/docs",previous:{title:"Rendering Connections",permalink:"/docs/v12.0.0/guided-tour/list-data/rendering-connections/"},next:{title:"Streaming Pagination",permalink:"/docs/v12.0.0/guided-tour/list-data/streaming-pagination/"}},p={},g=[],f=(a="FbPaginationUsingUseTransition",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),h={toc:g};function y(e){var n=e.components,t=(0,i.Z)(e,d);return(0,o.mdx)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"To actually perform pagination over the connection, we need use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"loadNext")," function to fetch the next page of items, which is available from ",(0,o.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment"),":"),(0,o.mdx)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)(f,{mdxType:"FbPaginationUsingUseTransition"})),(0,o.mdx)(l.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import type {FriendsListPaginationQuery} from 'FriendsListPaginationQuery.graphql';\nimport type {FriendsListComponent_user$key} from 'FriendsList_user.graphql';\n\nconst React = require('React');\n\nconst {graphql, usePaginationFragment} = require('react-relay');\n\nconst {Suspense} = require('React');\n\ntype Props = {\n  user: FriendsListComponent_user$key,\n};\n\nfunction FriendsListComponent(props: Props) {\n  const {data, loadNext} = usePaginationFragment<FriendsListPaginationQuery, _>(\n    graphql`\n      fragment FriendsListComponent_user on User\n      @refetchable(queryName: \"FriendsListPaginationQuery\") {\n        name\n        friends(first: $count, after: $cursor)\n        @connection(key: \"FriendsList_user_friends\") {\n          edges {\n            node {\n              name\n              age\n            }\n          }\n        }\n      }\n    `,\n    props.user,\n  );\n\n  return (\n    <>\n      <h1>Friends of {data.name}:</h1>\n      <div>\n        {(data.friends?.edges ?? []).map(edge => {\n          const node = edge.node;\n          return (\n            <Suspense fallback={<Glimmer />}>\n              <FriendComponent user={node} />\n            </Suspense>\n          );\n        })}\n      </div>\n\n      <Button\n        onClick={() => {\n          loadNext(10)\n        }}>\n        Load more friends\n      </Button>\n    </>\n  );\n}\n\nmodule.exports = FriendsListComponent;\n")),(0,o.mdx)("p",null,"Let's distill what's happening here:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"loadNext")," takes a count to specify how many more items in the connection to fetch from the server. In this case, when ",(0,o.mdx)("inlineCode",{parentName:"li"},"loadNext")," is called we'll fetch the next 10 friends in the friends list of our currently rendered ",(0,o.mdx)("inlineCode",{parentName:"li"},"User"),"."),(0,o.mdx)("li",{parentName:"ul"},"When the request to fetch the next items completes, the connection will be automatically updated and the component will re-render with the latest items in the connection. In our case, this means that the ",(0,o.mdx)("inlineCode",{parentName:"li"},"friends")," field will always contain ",(0,o.mdx)("em",{parentName:"li"},"all")," of the friends that we've fetched so far. By default, ",(0,o.mdx)("em",{parentName:"li"},"Relay will automatically append new items to the connection upon completing a pagination request,")," and will make them available to your fragment component",(0,o.mdx)("em",{parentName:"li"},".")," If you need a different behavior, check out our ",(0,o.mdx)("a",{parentName:"li",href:"../advanced-pagination/"},"Advanced Pagination Use Cases")," section."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"loadNext")," may cause the component or new children components to suspend (as explained in ",(0,o.mdx)("a",{parentName:"li",href:"../../rendering/loading-states/"},"Loading States with Suspense"),"). This means that you'll need to make sure that there's a ",(0,o.mdx)("inlineCode",{parentName:"li"},"Suspense")," boundary wrapping this component from above."))),(0,o.mdx)("p",null,"Often, you will also want to access information about whether there are more items available to load. To do this, you can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"hasNext")," value, also available from ",(0,o.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import type {FriendsListPaginationQuery} from 'FriendsListPaginationQuery.graphql';\nimport type {FriendsListComponent_user$key} from 'FriendsList_user.graphql';\n\nconst React = require('React');\nconst {Suspense} = require('React');\n\nconst {graphql, usePaginationFragment} = require('react-relay');\n\ntype Props = {\n  user: FriendsListComponent_user$key,\n};\n\nfunction FriendsListComponent(props: Props) {\n  // ...\n  const {\n    data,\n    loadNext,\n    hasNext,\n  } = usePaginationFragment<FriendsListPaginationQuery, _>(\n    graphql`...`,\n    props.user,\n  );\n\n  return (\n    <>\n      <h1>Friends of {data.name}:</h1>\n      {/* ... */}\n\n      {/* Only render button if there are more friends to load in the list */}\n      {hasNext ? (\n        <Button\n          onClick={/* ... */}>\n          Load more friends\n        </Button>\n      ) : null}\n    </>\n  );\n}\n\nmodule.exports = FriendsListComponent;\n")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"hasNext")," is a boolean which indicates if the connection has more items available. This information can be useful for determining if different UI controls should be rendered. In our specific case, we only render the ",(0,o.mdx)("inlineCode",{parentName:"li"},"Button")," if there are more friends available in the connection .")),(0,o.mdx)(s.Z,{mdxType:"DocsRating"}))}y.isMDXComponent=!0}}]);