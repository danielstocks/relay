(self.webpackChunk=self.webpackChunk||[]).push([[43218],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91883:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>m});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],l={},p=void 0,c={unversionedId:"api-reference/types/CacheConfig",id:"version-v11.0.0/api-reference/types/CacheConfig",isDocsHomePage:!1,title:"CacheConfig",description:"Type CacheConfig",source:"@site/versioned_docs/version-v11.0.0/api-reference/types/CacheConfig.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/CacheConfig",permalink:"/docs/v11.0.0/api-reference/types/CacheConfig",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/api-reference/types/CacheConfig.md",version:"v11.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1641483061,formattedLastUpdatedAt:"1/6/2022",frontMatter:{}},s=[],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"type-cacheconfig"},"Type ",(0,i.kt)("inlineCode",{parentName:"h4"},"CacheConfig")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An object with the following fields:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"force"),": ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("em",{parentName:"em"},"[Optional]"))," A boolean. If true, causes a query to be issued unconditionally, regardless of the state of any configured response cache."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"poll"),": ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("em",{parentName:"em"},"[Optional]"))," A number. Causes a query to live-update by polling at the specified interval, in milliseconds. (This value will be passed to ",(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"liveConfigId"),": ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("em",{parentName:"em"},"[Optional]"))," A string. Causes a query to live-update by calling GraphQLLiveQuery; it represents a configuration of gateway when doing live query."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metadata"),": ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("em",{parentName:"em"},"[Optional]"))," An object. User-supplied metadata."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transactionId"),": ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("em",{parentName:"em"},"[Optional]"))," A string. A user-supplied value, intended for use as a unique id for a given instance of executing an operation.")))))}m.isMDXComponent=!0}}]);