"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[39780,21261],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>h,mdx:()=>p,useMDXComponents:()=>c,withMDXComponents:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){return function(t){var n=c(t.components);return a.createElement(e,i({},t,{components:n}))}},c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,f=m["".concat(o,".").concat(h)]||m[h]||u[h]||i;return n?a.createElement(f,d(d({ref:t},l),{},{components:n})):a.createElement(f,d({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(39960),r=n(86341),i=n(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function d(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var s=function(){var e=i.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},m=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return i.createElement(d,null,i.createElement(l,null),i.createElement(s,null),i.createElement(m,null))},h=function(){return i.createElement(d,null,i.createElement(s,null),i.createElement(m,null))};const u=function(){return(0,r.fbContent)({internal:i.createElement(c,null),external:i.createElement(h,null)})}},86441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],d={},s=void 0,l={unversionedId:"guided-tour/refetching/OssAvoidSuspenseNote",id:"version-v11.0.0/guided-tour/refetching/OssAvoidSuspenseNote",title:"OssAvoidSuspenseNote",description:"In future versions of React when concurrent rendering is supported, React will provide an option to support this case and avoid hiding already rendered content with a Suspense fallback when suspending.",source:"@site/versioned_docs/version-v11.0.0/guided-tour/refetching/OssAvoidSuspenseNote.md",sourceDirName:"guided-tour/refetching",slug:"/guided-tour/refetching/OssAvoidSuspenseNote",permalink:"/docs/v11.0.0/guided-tour/refetching/OssAvoidSuspenseNote",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/guided-tour/refetching/OssAvoidSuspenseNote.md",tags:[],version:"v11.0.0",lastUpdatedBy:"Facebook Community Bot",lastUpdatedAt:1701129472,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{}},m={},c=[],h={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"In future versions of React when concurrent rendering is supported, React will provide an option to support this case and avoid hiding already rendered content with a Suspense fallback when suspending.")))}u.isMDXComponent=!0},38361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>m,metadata:()=>h,toc:()=>f});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=n(68629),d=n(86341),s=n(86441),l=["components"],m={id:"refetching-fragments-with-different-data",title:"Refetching Fragments With Different Data",slug:"/guided-tour/refetching/refetching-fragments-with-different-data/"},c=void 0,h={unversionedId:"guided-tour/refetching/refetching-fragments-with-different-data",id:"version-v11.0.0/guided-tour/refetching/refetching-fragments-with-different-data",title:"Refetching Fragments With Different Data",description:'When referring to "refetching a fragment", we mean fetching a different version of the data than the one was originally rendered by the fragment. For example, this might be to change a currently selected item, to render a different list of items than the one being shown, or more generally to transition the currently rendered content to show new or different content.',source:"@site/versioned_docs/version-v11.0.0/guided-tour/refetching/refetching-fragments-with-different-data.md",sourceDirName:"guided-tour/refetching",slug:"/guided-tour/refetching/refetching-fragments-with-different-data/",permalink:"/docs/v11.0.0/guided-tour/refetching/refetching-fragments-with-different-data/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/guided-tour/refetching/refetching-fragments-with-different-data.md",tags:[],version:"v11.0.0",lastUpdatedBy:"Facebook Community Bot",lastUpdatedAt:1701129472,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"refetching-fragments-with-different-data",title:"Refetching Fragments With Different Data",slug:"/guided-tour/refetching/refetching-fragments-with-different-data/"},sidebar:"version-v11.0.0/docs",previous:{title:"Refreshing Fragments",permalink:"/docs/v11.0.0/guided-tour/refetching/refreshing-fragments/"},next:{title:"Connections",permalink:"/docs/v11.0.0/guided-tour/list-data/connections/"}},u={},f=[{value:"Using <code>useRefetchableFragment</code>",id:"using-userefetchablefragment",level:2},{value:"If you need to avoid Suspense",id:"if-you-need-to-avoid-suspense",level:3}],p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",t)}},g=p("FbRefetchingFragments"),y=p("FbAvoidSuspenseCaution"),w={toc:f};function v(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.mdx)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"When referring to ",(0,i.mdx)("strong",{parentName:"p"},'"refetching a fragment"'),", we mean fetching a ",(0,i.mdx)("em",{parentName:"p"},"different")," version of the data than the one was originally rendered by the fragment. For example, this might be to change a currently selected item, to render a different list of items than the one being shown, or more generally to transition the currently rendered content to show new or different content."),(0,i.mdx)("p",null,"Conceptually, this means fetching and rendering the currently rendered fragment again, but under a new query with ",(0,i.mdx)("em",{parentName:"p"},"different variables"),"; or in other words, rendering the fragment under a new query root. Remember that ",(0,i.mdx)("em",{parentName:"p"},"fragments can't be fetched by themselves: they need to be part of a query,"),' so we can\'t just "fetch" the fragment again by itself.'),(0,i.mdx)("h2",{id:"using-userefetchablefragment"},"Using ",(0,i.mdx)("inlineCode",{parentName:"h2"},"useRefetchableFragment")),(0,i.mdx)("p",null,"To do so, we can also use the ",(0,i.mdx)("a",{parentName:"p",href:"../../../api-reference/use-refetchable-fragment/"},(0,i.mdx)("inlineCode",{parentName:"a"},"useRefetchableFragment"))," Hook in combination with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@refetchable")," directive, which will automatically generate a query to refetch the fragment under, and which we can fetch using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"refetch")," function:"),(0,i.mdx)(d.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(g,{mdxType:"FbRefetchingFragments"})),(0,i.mdx)(d.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {CommentBodyRefetchQuery} from 'CommentBodyRefetchQuery.graphql';\nimport type {CommentBody_comment$key} from 'CommentBody_comment.graphql';\n\ntype Props = {\n  comment: CommentBody_comment$key,\n};\n\nfunction CommentBody(props: Props) {\n  const [data, refetch] = useRefetchableFragment<CommentBodyRefetchQuery, _>(\n    graphql`\n      fragment CommentBody_comment on Comment\n      # @refetchable makes it so Relay autogenerates a query for\n      # fetching this fragment\n      @refetchable(queryName: \"CommentBodyRefetchQuery\") {\n        body(lang: $lang) {\n          text\n        }\n      }\n    `,\n    props.comment,\n  );\n\n  const refetchTranslation = () => {\n    // We call refetch with new variables,\n    // which will refetch the @refetchable query with the\n    // new variables and update this component with the\n    // latest fetched data.\n    refetch({lang: 'SPANISH'});\n  };\n\n  return (\n    <>\n      <p>{data.body?.text}</p>\n      <Button\n        onClick={() => refetchTranslation()}>\n        Translate Comment\n      </Button>\n    </>\n  );\n}\n")),(0,i.mdx)("p",null,"Let's distill what's happening in this example:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"useRefetchableFragment")," behaves similarly to ",(0,i.mdx)("a",{parentName:"li",href:"../../../api-reference/use-fragment/"},(0,i.mdx)("inlineCode",{parentName:"a"},"useFragment"))," (see the ",(0,i.mdx)("a",{parentName:"li",href:"../../rendering/fragments/"},"Fragments")," section), but with a few additions:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"It expects a fragment that is annotated with the ",(0,i.mdx)("inlineCode",{parentName:"li"},"@refetchable")," directive. Note that ",(0,i.mdx)("inlineCode",{parentName:"li"},"@refetchable"),' directive can only be added to fragments that are "refetchable", that is, on fragments that are on ',(0,i.mdx)("inlineCode",{parentName:"li"},"Viewer"),", on ",(0,i.mdx)("inlineCode",{parentName:"li"},"Query"),", on any type that implements ",(0,i.mdx)("inlineCode",{parentName:"li"},"Node")," (i.e. a type that has an ",(0,i.mdx)("inlineCode",{parentName:"li"},"id")," field), or on a ",(0,i.mdx)("a",{parentName:"li",href:"https://fb.workplace.com/groups/graphql.fyi/permalink/1539541276187011/"},(0,i.mdx)("inlineCode",{parentName:"a"},"@fetchable"))," type."))),(0,i.mdx)("li",{parentName:"ul"},"It returns a ",(0,i.mdx)("inlineCode",{parentName:"li"},"refetch")," function, which is already  Flow-typed to expect the query variables that the generated query expects."),(0,i.mdx)("li",{parentName:"ul"},"It takes two Flow type parameters: the type of the generated query (in our case  ",(0,i.mdx)("inlineCode",{parentName:"li"},"CommentBodyRefetchQuery"),"), and a second type which can always be inferred, so you only need to pass underscore (",(0,i.mdx)("inlineCode",{parentName:"li"},"_"),")."),(0,i.mdx)("li",{parentName:"ul"},"We're calling the ",(0,i.mdx)("inlineCode",{parentName:"li"},"refetch")," function with 2 main inputs:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"The first argument is the set of variables to fetch the fragment with. In this case, calling ",(0,i.mdx)("inlineCode",{parentName:"li"},"refetch")," and passing a new set of variables will fetch the fragment again ",(0,i.mdx)("em",{parentName:"li"},"with the newly provided variables"),". The variables you need to provide are a subset of the variables that the ",(0,i.mdx)("inlineCode",{parentName:"li"},"@refetchable")," query expects; the query will require an ",(0,i.mdx)("inlineCode",{parentName:"li"},"id"),", if the type of the fragment has an ",(0,i.mdx)("inlineCode",{parentName:"li"},"id")," field, and any other variables that are transitively referenced in your fragment.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"In this case we're passing the current comment ",(0,i.mdx)("inlineCode",{parentName:"li"},"id")," and a new value for the ",(0,i.mdx)("inlineCode",{parentName:"li"},"translationType")," variable to fetch the translated comment body."))),(0,i.mdx)("li",{parentName:"ul"},"We are not passing a second options argument in this case, which means that we will use the default ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," of ",(0,i.mdx)("inlineCode",{parentName:"li"},"'store-or-network'"),", which will skip the network request if the new data for that fragment is already cached (as we covered in ",(0,i.mdx)("a",{parentName:"li",href:"../../reusing-cached-data/"},"Reusing Cached Data For Render"),")."))),(0,i.mdx)("li",{parentName:"ul"},"Calling ",(0,i.mdx)("inlineCode",{parentName:"li"},"refetch")," will re-render the component and may cause ",(0,i.mdx)("inlineCode",{parentName:"li"},"useRefetchableFragment")," to suspend (as explained in ",(0,i.mdx)("a",{parentName:"li",href:"../../rendering/loading-states/"},"Loading States with Suspense"),"). This means that you'll need to make sure that there's a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Suspense")," boundary wrapping this component from above in order to show a fallback loading state."))),(0,i.mdx)("admonition",{type:"info"},(0,i.mdx)("p",{parentName:"admonition"},"Note that this same behavior also applies to using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"refetch")," function from ",(0,i.mdx)("a",{parentName:"p",href:"../../../api-reference/use-pagination-fragment"},(0,i.mdx)("inlineCode",{parentName:"a"},"usePaginationFragment")),".")),(0,i.mdx)("h3",{id:"if-you-need-to-avoid-suspense"},"If you need to avoid Suspense"),(0,i.mdx)("p",null,"In some cases, you might want to avoid showing a Suspense fallback, which would hide the already rendered content. For these cases, you can use ",(0,i.mdx)("a",{parentName:"p",href:"../../../api-reference/fetch-query/"},(0,i.mdx)("inlineCode",{parentName:"a"},"fetchQuery"))," instead, and manually keep track of a loading state:"),(0,i.mdx)(d.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(y,{mdxType:"FbAvoidSuspenseCaution"})),(0,i.mdx)(d.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)(s.default,{mdxType:"OssAvoidSuspenseNote"})),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {CommentBodyRefetchQuery} from 'CommentBodyRefetchQuery.graphql';\nimport type {CommentBody_comment$key} from 'CommentBody_comment.graphql';\n\ntype Props = {\n  comment: CommentBody_comment$key,\n};\n\nfunction CommentBody(props: Props) {\n  const [data, refetch] = useRefetchableFragment<CommentBodyRefetchQuery, _>(\n    graphql`\n      fragment CommentBody_comment on Comment\n      # @refetchable makes it so Relay autogenerates a query for\n      # fetching this fragment\n      @refetchable(queryName: \"CommentBodyRefetchQuery\") {\n        body(lang: $lang) {\n          text\n        }\n      }\n    `,\n    props.comment,\n  );\n\n  const [isRefetching, setIsRefreshing] = useState(false)\n  const refetchTranslation = () => {\n    if (isRefetching) { return; }\n    setIsRefreshing(true);\n\n    // fetchQuery will fetch the query and write\n    // the data to the Relay store. This will ensure\n    // that when we re-render, the data is already\n    // cached and we don't suspend\n    fetchQuery(environment, AppQuery, variables)\n      .subscribe({\n        complete: () => {\n          setIsRefreshing(false);\n\n          // *After* the query has been fetched, we call\n          // refetch again to re-render with the updated data.\n          // At this point the data for the query should\n          // be cached, so we use the 'store-only'\n          // fetchPolicy to avoid suspending.\n          refetch({lang: 'SPANISH'}, {fetchPolicy: 'store-only'});\n        }\n        error: () => {\n          setIsRefreshing(false);\n        }\n      });\n  };\n\n  return (\n    <>\n      <p>{data.body?.text}</p>\n      <Button\n        disabled={isRefetching}\n        onClick={() => refetchTranslation()}>\n        Translate Comment {isRefetching ? <LoadingSpinner /> : null}\n      </Button>\n    </>\n  );\n}\n")),(0,i.mdx)("p",null,"Let's distill what's going on here:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"When refetching, we now keep track of our own ",(0,i.mdx)("inlineCode",{parentName:"li"},"isRefetching")," loading state, since we are avoiding supending. We can use this state to render a busy spinner or similar loading UI in our component, ",(0,i.mdx)("em",{parentName:"li"},"without")," hiding the content."),(0,i.mdx)("li",{parentName:"ul"},"In the event handler, we first call ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchQuery"),", which will fetch the query and write the data to the local Relay store. When the ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchQuery")," network request completes, we call ",(0,i.mdx)("inlineCode",{parentName:"li"},"refetch")," so that we render the updated data, similar to the previous example."),(0,i.mdx)("li",{parentName:"ul"},"At this point, when ",(0,i.mdx)("inlineCode",{parentName:"li"},"refetch")," is called, the data for the fragment should already be cached in the local Relay store, so we use ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," of ",(0,i.mdx)("inlineCode",{parentName:"li"},"'store-only'")," to avoid suspending and only read the already cached data.")),(0,i.mdx)(o.Z,{mdxType:"DocsRating"}))}v.isMDXComponent=!0}}]);