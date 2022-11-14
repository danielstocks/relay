"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[52205],{3905:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),m=function(e){return function(r){var t=c(r.components);return a.createElement(e,o({},r,{components:t}))}},c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=n,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(h,i(i({ref:r},l),{},{components:t})):a.createElement(h,i({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=h;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var l=2;l<o;l++)p[l]=t[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},45791:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(83117),n=t(80102),o=(t(67294),t(3905)),p=["components"],i={id:"prerequisites",title:"Prerequisites",original_id:"prerequisites"},s=void 0,l={unversionedId:"prerequisites",id:"version-v1.6.0/prerequisites",title:"Prerequisites",description:"React",source:"@site/versioned_docs/version-v1.6.0/Introduction-Prerequisites.md",sourceDirName:".",slug:"/prerequisites",permalink:"/docs/v1.6.0/prerequisites",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.6.0/Introduction-Prerequisites.md",tags:[],version:"v1.6.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1668451516,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{id:"prerequisites",title:"Prerequisites",original_id:"prerequisites"},sidebar:"version-v1.6.0/docs",previous:{title:"Introduction to Relay",permalink:"/docs/v1.6.0/"},next:{title:"Installation and Setup",permalink:"/docs/v1.6.0/installation-and-setup"}},m={},c=[{value:"React",id:"react",level:2},{value:"GraphQL",id:"graphql",level:2},{value:"A GraphQL Schema",id:"a-graphql-schema",level:3},{value:"A GraphQL Server",id:"a-graphql-server",level:3}],d={toc:c};function u(e){var r=e.components,t=(0,n.Z)(e,p);return(0,o.mdx)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"react"},"React"),(0,o.mdx)("p",null,"Relay is a framework for data management with the primary supported binding for React applications, so we assume that you are already familiar with ",(0,o.mdx)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),"."),(0,o.mdx)("h2",{id:"graphql"},"GraphQL"),(0,o.mdx)("p",null,"We also assume basic understanding of ",(0,o.mdx)("a",{parentName:"p",href:"http://graphql.org/learn/"},"GraphQL"),". In order to start using Relay, you will also need:"),(0,o.mdx)("h3",{id:"a-graphql-schema"},"A GraphQL Schema"),(0,o.mdx)("p",null,"A description of your data model with an associated set of resolve methods that know how to fetch any data your application could ever need."),(0,o.mdx)("p",null,"GraphQL is designed to support a wide range of data access patterns. In order to understand the structure of an application's data, Relay requires that you follow certain conventions when defining your schema. These are documented in the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v1.6.0/graphql-server-specification"},"GraphQL Server Specification"),"."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("a",{parentName:"strong",href:"https://github.com/graphql/graphql-js"},"graphql-js"))," on ",(0,o.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/graphql"},"npm")),(0,o.mdx)("p",{parentName:"li"},"General-purpose tools for building a GraphQL schema using JavaScript")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("a",{parentName:"strong",href:"https://github.com/graphql/graphql-relay-js"},"graphql-relay-js"))," on ",(0,o.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/graphql-relay"},"npm")),(0,o.mdx)("p",{parentName:"li"},"JavaScript helpers for defining connections between data, and mutations, in a way that smoothly integrates with Relay."))),(0,o.mdx)("h3",{id:"a-graphql-server"},"A GraphQL Server"),(0,o.mdx)("p",null,"Any server can be taught to load a schema and speak GraphQL. Our ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/relayjs/relay-examples"},"examples")," use Express."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("a",{parentName:"strong",href:"https://github.com/graphql/express-graphql"},"express-graphql"))," on ",(0,o.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/express-graphql"},"npm")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("a",{parentName:"strong",href:"https://github.com/graphcool/graphql-up"},"graphql-up"))," on ",(0,o.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/graphql-up"},"npm")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("a",{parentName:"strong",href:"https://www.graph.cool/"},"Graphcool"))," (",(0,o.mdx)("a",{parentName:"li",href:"https://www.graph.cool/docs/quickstart/"},"Quickstart tutorial"),")")))}u.isMDXComponent=!0}}]);