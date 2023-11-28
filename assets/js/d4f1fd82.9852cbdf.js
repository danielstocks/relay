"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[41720],{3905:(e,a,n)=>{n.r(a),n.d(a,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>u});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=t.createContext({}),u=function(e){return function(a){var n=m(a.components);return t.createElement(e,i({},a,{components:n}))}},m=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=m(e.components);return t.createElement(d.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,h=u["".concat(l,".").concat(c)]||u[c]||p[c]||i;return n?t.createElement(h,s(s({ref:a},d),{},{components:n})):t.createElement(h,s({ref:a},d))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},68629:(e,a,n)=>{n.d(a,{Z:()=>p});var t=n(39960),r=n(86341),i=n(67294);function l(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function s(e){var a=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),a)}var o=function(){var e=i.useState(!1),a=e[0],n=e[1],t=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return a?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return t(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return t(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:l},"Filing a task"))},u=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(t.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},m=function(){return i.createElement(s,null,i.createElement(d,null),i.createElement(o,null),i.createElement(u,null))},c=function(){return i.createElement(s,null,i.createElement(o,null),i.createElement(u,null))};const p=function(){return(0,r.fbContent)({internal:i.createElement(m,null),external:i.createElement(c,null)})}},70682:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var t=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(68629),s=n(86341),o=["components"],d={id:"variables",title:"Variables",slug:"/guided-tour/rendering/variables/",description:"Relay guide to query variables",keywords:["query","variables"]},u=void 0,m={unversionedId:"guided-tour/rendering/variables",id:"version-v15.0.0/guided-tour/rendering/variables",title:"Variables",description:"Relay guide to query variables",source:"@site/versioned_docs/version-v15.0.0/guided-tour/rendering/variables.md",sourceDirName:"guided-tour/rendering",slug:"/guided-tour/rendering/variables/",permalink:"/docs/v15.0.0/guided-tour/rendering/variables/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v15.0.0/guided-tour/rendering/variables.md",tags:[],version:"v15.0.0",lastUpdatedBy:"Facebook Community Bot",lastUpdatedAt:1701129472,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"variables",title:"Variables",slug:"/guided-tour/rendering/variables/",description:"Relay guide to query variables",keywords:["query","variables"]}},c={},p=[{value:"@arguments and @argumentDefinitions",id:"arguments-and-argumentdefinitions",level:2},{value:"Accessing GraphQL Variables At Runtime",id:"accessing-graphql-variables-at-runtime",level:2}],h={toc:p};function g(e){var a=e.components,n=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,t.Z)({},h,n,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"You may have noticed that the query declarations in our examples above contain references to an ",(0,i.mdx)("inlineCode",{parentName:"p"},"$id")," symbol inside the GraphQL code: these are ",(0,i.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#variables"},"GraphQL Variables"),"."),(0,i.mdx)("p",null,"GraphQL variables are a construct that allows referencing dynamic values inside a GraphQL query. When fetching a query from the server, we also need to provide as input the actual set of values to use for the variables declared inside the query:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"query UserQuery($id: ID!) {\n  # The value of $id is used as input to the user() call:\n  user(id: $id) {\n    id\n    name\n  }\n}\n")),(0,i.mdx)("p",null,"In the above, ",(0,i.mdx)("inlineCode",{parentName:"p"},"ID!")," is the type of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"$id")," variable. That is, it is a required ID."),(0,i.mdx)("p",null,"When sending a network request to fetch the query above, we need to provide both the query, and the variables to be used for this particular execution of the query.  For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'# Query:\nquery UserQuery($id: ID!) {\n  # ...\n}\n\n# Variables:\n{"id": 4}\n')),(0,i.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("p",null,"Fetching the above query and variables from the server would produce the following response, which can also be visualized in ",(0,i.mdx)("a",{parentName:"p",href:"https://fburl.com/graphiql/kiuar058"},"GraphiQL"),":")),(0,i.mdx)(s.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("p",null,"Fetching the above query and variables from the server would produce the following response:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "user": {\n      "id": "4",\n      "name": "Mark Zuckerberg"\n    }\n  }\n}\n')),(0,i.mdx)("hr",null),(0,i.mdx)("p",null,"Fragments can also reference variables that have been declared by a query:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"fragment UserFragment on User {\n  name\n  profile_picture(scale: $scale) {\n    uri\n  }\n}\n\n\nquery ViewerQuery($scale: Float!) {\n  viewer {\n    actor {\n      ...UserFragment\n    }\n  }\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Even though the fragment above doesn't ",(0,i.mdx)("em",{parentName:"li"},"declare")," the ",(0,i.mdx)("inlineCode",{parentName:"li"},"$scale")," variable directly, it can still reference it. Doing so makes it so any query that includes this fragment, either directly or transitively, ",(0,i.mdx)("em",{parentName:"li"},"must")," declare the variable and its type, otherwise an error will be produced."),(0,i.mdx)("li",{parentName:"ul"},"In other words, ",(0,i.mdx)("em",{parentName:"li"},"query variables are available globally by any fragment that is a descendant of the query"),"."),(0,i.mdx)("li",{parentName:"ul"},"A fragment which references a global variable can only be included (directly or transitively) in a query which defines that global variable.")),(0,i.mdx)("p",null,"In Relay, fragment declarations inside components can also reference query variables:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"function UserComponent(props: Props) {\n  const data = useFragment(\n    graphql`\n    fragment UserComponent_user on User {\n      name\n      profile_picture(scale: $scale) {\n        uri\n      }\n    }\n    `,\n    props.user,\n  );\n\n  return (...);\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The above fragment could be included by multiple queries, and rendered by different components, which means that any query that ends up rendering/including the above fragment ",(0,i.mdx)("em",{parentName:"li"},"must")," declare the ",(0,i.mdx)("inlineCode",{parentName:"li"},"$scale")," variable."),(0,i.mdx)("li",{parentName:"ul"},"If any query that happens to include this fragment ",(0,i.mdx)("em",{parentName:"li"},"doesn't")," declare the ",(0,i.mdx)("inlineCode",{parentName:"li"},"$scale")," variable, an error will be produced by the Relay Compiler at build time, ensuring that an incorrect query never gets sent to the server (sending a query with missing variable declarations will also produce an error in the server).")),(0,i.mdx)("h2",{id:"arguments-and-argumentdefinitions"},"@arguments and @argumentDefinitions"),(0,i.mdx)("p",null,"Relay also provides a way to declare variables that are scoped locally to a fragment using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@arguments")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"@argumentDefinitions")," directives. Fragments that use local variables are easy to customize and reuse, since they do not depend on the value of global (query-level) variables."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'/**\n * Declare a fragment that accepts arguments with @argumentDefinitions\n */\n\nfunction TaskView(props) {\n  const data = useFragment(\n    graphql`\n      fragment TaskView_task on Task\n        @argumentDefinitions(showDetailedResults: {type: "Boolean!"}) {\n        name\n        is_completed\n        ... @include(if: $showDetailedResults) {\n          description\n        }\n      }\n    `,\n    props.task,\n  );\n}\n')),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * Include fragment using @arguments\n */\n\nfunction TaskList(props) {\n  const data = usePreloadedQuery(\n    graphql`\n      query TaskListQuery {\n        todays_tasks {\n          ...TaskView_task @arguments(showDetailedResults: true)\n        }\n        tomorrows_tasks {\n          ...TaskView_task @arguments(showDetailedResults: false)\n        }\n      }\n    `,\n    props.queryRef,\n  );\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Locally-scoped variables also make it easier to reuse a fragment from another query."),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"A query definition must list all variables that are used by any nested fragments, including in recursively-nested fragments.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Since a fragment can potentially be accessible from many queries, modifying a fragment that uses global variables can require changes to many query definitions.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},'This can also lead to awkward situations, like having multiple versions of the "same" variable, such as ',(0,i.mdx)("inlineCode",{parentName:"p"},"$showDetailedResults")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"$showDetails"),".")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Since fragments with only locally-scoped variables do not use global variables, they do not suffer from this issue.")))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Note that when passing ",(0,i.mdx)("inlineCode",{parentName:"p"},"@arguments")," to a fragment, we can pass a literal value or pass another variable. The variable can be a global query variable, a local variable declared via ",(0,i.mdx)("inlineCode",{parentName:"p"},"@argumentDefinitions")," or a literal (e.g. ",(0,i.mdx)("inlineCode",{parentName:"p"},"42.0"),").")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"When we actually fetch ",(0,i.mdx)("inlineCode",{parentName:"p"},"TaskView_task")," as part of a query, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"showDetailedResults")," value will depend on the argument that was provided by the parent of ",(0,i.mdx)("inlineCode",{parentName:"p"},"TaskView_task"),":"))),(0,i.mdx)("p",null,"Fragments that expect arguments can also declare default values, making the arguments optional:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'/**\n * Declare a fragment that accepts arguments with default values\n */\n\nfunction TaskView(props) {\n  const data = useFragment(\n    graphql`\n      fragment TaskView_task on Task\n        @argumentDefinitions(showDetailedResults: {type: "Boolean!", defaultValue: true}) {\n        name\n        is_completed\n        ... @include(if: $showDetailedResults) {\n          description\n        }\n      }\n    `,\n    props.task,\n  );\n}\n')),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"function TaskList(props) {\n  const data = usePreloadedQuery(\n    graphql`\n      query TaskListQuery {\n        todays_tasks {\n          ...TaskView_task\n        }\n        tomorrows_tasks {\n          ...TaskView_task @arguments(showDetailedResults: false)\n        }\n      }\n    `,\n    props.queryRef,\n  );\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Not passing the argument to ",(0,i.mdx)("inlineCode",{parentName:"li"},"TaskView_task")," makes it use the default value for its locally declared ",(0,i.mdx)("inlineCode",{parentName:"li"},"$showDetailedResult")," variable.")),(0,i.mdx)("h2",{id:"accessing-graphql-variables-at-runtime"},"Accessing GraphQL Variables At Runtime"),(0,i.mdx)("p",null,"If you want to access the variables that were set at the query root, the recommended approach is to pass the variables down the component tree in your application, using props, or your own application-specific context."),(0,i.mdx)("p",null,"Relay currently does not expose the resolved variables (i.e. after applying argument definitions) for a specific fragment, and you should very rarely need to do so."),(0,i.mdx)(l.Z,{mdxType:"DocsRating"}))}g.isMDXComponent=!0}}]);