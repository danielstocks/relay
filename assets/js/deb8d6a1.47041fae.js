(self.webpackChunk=self.webpackChunk||[]).push([[1518],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},68629:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var n=a(44256),r=a(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var t=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),t)}var l=function(){var e=r.useState(!1),t=e[0],a=e[1],n=function(e){a(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},c=function(){return r.createElement(o,null,r.createElement(s,null),r.createElement(l,null))},p=function(){return r.createElement(o,null,r.createElement(l,null))};const h=function(){return(0,n.fbContent)({internal:r.createElement(c,null),external:r.createElement(p,null)})}},49197:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>p,toc:()=>h,default:()=>u});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),o=a(68629),l=["components"],s={id:"thinking-in-relay",title:"Thinking in Relay",slug:"/principles-and-architecture/thinking-in-relay/",description:"Relay guide to thinking in Relay"},c=void 0,p={unversionedId:"principles-and-architecture/thinking-in-relay",id:"version-v12.0.0/principles-and-architecture/thinking-in-relay",isDocsHomePage:!1,title:"Thinking in Relay",description:"Relay guide to thinking in Relay",source:"@site/versioned_docs/version-v12.0.0/principles-and-architecture/thinking-in-relay.md",sourceDirName:"principles-and-architecture",slug:"/principles-and-architecture/thinking-in-relay/",permalink:"/docs/principles-and-architecture/thinking-in-relay/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/principles-and-architecture/thinking-in-relay.md",version:"v12.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1641483061,formattedLastUpdatedAt:"1/6/2022",frontMatter:{id:"thinking-in-relay",title:"Thinking in Relay",slug:"/principles-and-architecture/thinking-in-relay/",description:"Relay guide to thinking in Relay"},sidebar:"version-v12.0.0/docs",previous:{title:"Thinking in GraphQL",permalink:"/docs/principles-and-architecture/thinking-in-graphql/"},next:{title:"Architecture Overview",permalink:"/docs/principles-and-architecture/architecture-overview/"}},h=[{value:"Fetching Data For a View",id:"fetching-data-for-a-view",children:[]},{value:"Specifying the data requirements of a component",id:"specifying-the-data-requirements-of-a-component",children:[]},{value:"Queries",id:"queries",children:[]},{value:"Data Masking",id:"data-masking",children:[]}],d={toc:h};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Relay's approach to data-fetching is heavily inspired by our experience with React. In particular, React breaks complex interfaces into reusable ",(0,i.kt)("strong",{parentName:"p"},"components"),", allowing developers to reason about discrete units of an application in isolation, and reducing the coupling between disparate parts of an application. Even more important is that these components are ",(0,i.kt)("strong",{parentName:"p"},"declarative"),": they allow developers to specify ",(0,i.kt)("em",{parentName:"p"},"what")," the UI should look like for a given state, and not have to worry about ",(0,i.kt)("em",{parentName:"p"},"how")," to show that UI. Unlike previous approaches that used imperative commands to manipulate native views (e.g. the DOM), React uses a UI description to automatically determine the necessary commands."),(0,i.kt)("p",null,"Let's look at some product use-cases to understand how we incorporated these ideas into Relay. We'll assume a basic familiarity with React."),(0,i.kt)("h2",{id:"fetching-data-for-a-view"},"Fetching Data For a View"),(0,i.kt)("p",null,"In our experience, the overwhelming majority of products want one specific behavior: fetch all the data for a view hierarchy while displaying a loading indicator, and then render the entire view once the data is available."),(0,i.kt)("p",null,"One solution is to have a root component declare and fetch the data required by it and all of its children. However, this would introduce coupling: any change to a child component would require changing any root component that might render it! This coupling could mean a greater chance for bugs and slow the pace of development."),(0,i.kt)("p",null,"Another logical approach is to have each component declare and fetch the data it requires. This sounds great. However, the problem is that a component may render different children based on the data it received. So, nested components will be unable to render and begin fetching their data until parent components' queries have completed. In other words, ",(0,i.kt)("em",{parentName:"p"},"this forces data fetching to proceed in stages:")," first render the root and fetch the data it needs, then render its children and fetch their data, and so on until you reach leaf components. Rendering would require multiple slow, serial roundtrips."),(0,i.kt)("p",null,"Relay combines the advantages of both of these approaches by allowing components to specify what data they require, but to coalesce those requirements into a single query that fetches the data for an entire subtree of components. In other words, it determines ",(0,i.kt)("em",{parentName:"p"},"statically")," (i.e. before your application runs; at the time you write your code) the requirements for an entire view!"),(0,i.kt)("p",null,"This is achieved with the help of GraphQL. Functional components use one or more GraphQL ",(0,i.kt)("a",{href:"../../guided-tour/rendering/fragments/"},"fragments")," to describe their data requirements. These fragments are then nested within other fragments, and ultimately within queries. And when such a query is fetched, Relay will make a single network request for it and all of its nested fragments. In other words, the Relay runtime is then able to make a ",(0,i.kt)("em",{parentName:"p"},"single network request")," for all of the data required by a view!"),(0,i.kt)("p",null,"Let's dive deeper to understand how Relay achieves this feat."),(0,i.kt)("h2",{id:"specifying-the-data-requirements-of-a-component"},"Specifying the data requirements of a component"),(0,i.kt)("p",null,"With Relay, the data requirements for a component are specified with ",(0,i.kt)("a",{href:"../../guided-tour/rendering/fragments/"},"fragments"),". Fragments are named snippets of GraphQL that specify which fields to select from an object of a particular type. Fragments are written within GraphQL literals. For example, the following declares a GraphQL literal containing a fragment which selects an author's name and photo url:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// AuthorDetails.react.js\nconst authorDetailsFragment = graphql`\n  fragment AuthorDetails_author on Author {\n    name\n    photo {\n      url\n    }\n  }\n`;\n")),(0,i.kt)("p",null,"This data is then read out from the store by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"useFragment(...)")," hook in a functional React component. The actual author from which to read this data is determined by the second parameter passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"useFragment"),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// AuthorDetails.react.js\nexport default function AuthorDetails(props) {\n  const data = useFragment(authorDetailsFragment, props.author);\n  // ...\n}\n")),(0,i.kt)("p",null,"This second parameter (",(0,i.kt)("inlineCode",{parentName:"p"},"props.author"),") is a fragment reference. Fragment references are obtained by ",(0,i.kt)("strong",{parentName:"p"},"spreading")," a fragment into another fragment or query. Fragments cannot be fetched directly. Instead, all fragments must ultimately be spread (either directly or transitively) into a query for the data to be fetched."),(0,i.kt)("p",null,"Let's take a look at one such query."),(0,i.kt)("h2",{id:"queries"},"Queries"),(0,i.kt)("p",null,"In order to fetch that data, we might declare a query which spreads ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthorDetails_author")," as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Story.react.js\nconst storyQuery = graphql`\n  query StoryQuery($storyID: ID!) {\n    story(id: $storyID) {\n      title\n      author {\n        ...AuthorDetails_author\n      }\n    }\n  }\n`;\n")),(0,i.kt)("p",null,"Now, we can fetch the query by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"const data = useLazyLoadQuery(storyQuery, {storyID})"),". At this point, ",(0,i.kt)("inlineCode",{parentName:"p"},"data.author")," (if it is present; all fields are nullable by default) will be a fragment reference that we can pass to ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthorDetails"),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Story.react.js\nfunction Story(props) {\n  const data = useLazyLoadQuery(storyQuery, props.storyId);\n\n  return (<>\n    <Heading>{data?.story.title}</Heading>\n    {data?.story?.author && <AuthorDetails author={data.story.author} />}\n  </>);\n}\n")),(0,i.kt)("p",null,"Note what has happened here. We made a single network request which contained the data required by ",(0,i.kt)("em",{parentName:"p"},"both")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"Story")," component ",(0,i.kt)("em",{parentName:"p"},"and")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthorDetails")," component! When that data was available, the entire view could render in a single pass."),(0,i.kt)("h2",{id:"data-masking"},"Data Masking"),(0,i.kt)("p",null,"With typical approaches to data-fetching we found that it was common for two components to have ",(0,i.kt)("em",{parentName:"p"},"implicit dependencies"),". For example ",(0,i.kt)("inlineCode",{parentName:"p"},"<Story />")," might use some data without directly ensuring that the data was fetched. This data would often be fetched by some other part of the system, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"<AuthorDetails />"),". Then when we changed ",(0,i.kt)("inlineCode",{parentName:"p"},"<AuthorDetails />")," and removed that data-fetching logic, ",(0,i.kt)("inlineCode",{parentName:"p"},"<Story />")," would suddenly and inexplicably break. These types of bugs are not always immediately apparent, especially in larger applications developed by larger teams. Manual and automated testing can only help so much: this is exactly the type of systematic problem that is better solved by a framework."),(0,i.kt)("p",null,"We've seen that Relay ensures that the data for a view is fetched all at once. But Relay also provide another benefit that isn't immediately obvious: ",(0,i.kt)("strong",{parentName:"p"},"data masking"),". Relay only allows components to access data they specifically ask for in GraphQL fragments, and nothing more. So if one component queries for a Story's ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),", and another for its ",(0,i.kt)("inlineCode",{parentName:"p"},"text"),", each can see ",(0,i.kt)("em",{parentName:"p"},"only")," the field that they asked for. In fact, components can't even see the data requested by their ",(0,i.kt)("em",{parentName:"p"},"children"),": that would also break encapsulation."),(0,i.kt)("p",null,"Relay also goes further: it uses opaque identifiers on ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," to validate that we've explicitly fetched the data for a component before rendering it. If ",(0,i.kt)("inlineCode",{parentName:"p"},"<Story />")," renders ",(0,i.kt)("inlineCode",{parentName:"p"},"<AuthorDetails />")," but forgets to spread its fragment, Relay will warn that the data for ",(0,i.kt)("inlineCode",{parentName:"p"},"<AuthorDetails />")," is missing. In fact, Relay will warn ",(0,i.kt)("em",{parentName:"p"},"even if")," some other component happened to fetch the same data required by ",(0,i.kt)("inlineCode",{parentName:"p"},"<AuthorDetails />"),". This warning tells us that although things ",(0,i.kt)("em",{parentName:"p"},"might")," work now, they're highly likely to break later."),(0,i.kt)("h1",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"GraphQL provides a powerful tool for building efficient, decoupled client applications. Relay builds on this functionality to provide a framework for ",(0,i.kt)("strong",{parentName:"p"},"declarative data-fetching"),". By separating ",(0,i.kt)("em",{parentName:"p"},"what")," data to fetch from ",(0,i.kt)("em",{parentName:"p"},"how")," it is fetched, Relay helps developers build applications that are robust, transparent, and performant by default. It's a great complement to the component-centric way of thinking championed by React. While each of these technologies \u2014 React, Relay, and GraphQL \u2014 are powerful on their own, the combination is a ",(0,i.kt)("strong",{parentName:"p"},"UI platform")," that allows us to ",(0,i.kt)("em",{parentName:"p"},"move fast")," and ",(0,i.kt)("em",{parentName:"p"},"ship high-quality apps at scale"),"."),(0,i.kt)(o.Z,{mdxType:"DocsRating"}))}u.isMDXComponent=!0}}]);