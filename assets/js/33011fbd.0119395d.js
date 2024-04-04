"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[50272],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>h,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h=a.createContext({}),d=function(e){return function(t){var n=c(t.components);return a.createElement(e,i({},t,{components:n}))}},c=function(e){var t=a.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(h.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,u=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return n?a.createElement(u,o(o({ref:t},h),{},{components:n})):a.createElement(u,o({ref:t},h))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var h=2;h<i;h++)s[h]=n[h];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>h,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),s=n(86341),o=["components"],l={},h="Refetchable Fragments",d={unversionedId:"tutorial/refetchable-fragments",id:"version-v16.0.0/tutorial/refetchable-fragments",title:"Refetchable Fragments",description:"In this section, we'll look at how to fetch different data in response to user input.",source:"@site/versioned_docs/version-v16.0.0/tutorial/refetchable-fragments.md",sourceDirName:"tutorial",slug:"/tutorial/refetchable-fragments",permalink:"/docs/tutorial/refetchable-fragments",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v16.0.0/tutorial/refetchable-fragments.md",tags:[],version:"v16.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1712190011,formattedLastUpdatedAt:"Apr 4, 2024",frontMatter:{},sidebar:"docs",previous:{title:"GraphQL Types, Interfaces, and Polymorphism",permalink:"/docs/tutorial/interfaces-polymorphism"},next:{title:"Connections & Pagination",permalink:"/docs/tutorial/connections-pagination"}},c={},p=[{value:"Step 1 \u2014 Add a fragment argument",id:"step-1--add-a-fragment-argument",level:3},{value:"Step 2 \u2014 Pass the fragment argument as a field argument",id:"step-2--pass-the-fragment-argument-as-a-field-argument",level:3},{value:"Step 3 \u2014 Add the @refetchable directive",id:"step-3--add-the-refetchable-directive",level:3},{value:"Step 4 \u2014 Add the search input",id:"step-4--add-the-search-input",level:3},{value:"Step 5 \u2014 Call useRefetchableFragment",id:"step-5--call-userefetchablefragment",level:3},{value:"Step 6 \u2014 Control loading with useTransition",id:"step-6--control-loading-with-usetransition",level:3},{value:"Summary",id:"summary",level:2}],m={toc:p};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"refetchable-fragments"},"Refetchable Fragments"),(0,i.mdx)("p",null,"In this section, we'll look at how to fetch different data in response to user input."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"We'll build a ",(0,i.mdx)("strong",{parentName:"li"},"filterable friends list"),"."),(0,i.mdx)("li",{parentName:"ul"},"We'll see how to refetch only the necessary data, not an entire query.")),(0,i.mdx)("hr",null),(0,i.mdx)("p",null,"Since Relay encourages you to fetch all of your data in one big query, what happens when you need to refetch some data with different variables?"),(0,i.mdx)("p",null,"For example, suppose you were building a filterable list. You would need to fetch new search results when the search input changed."),(0,i.mdx)("p",null,"One way to approach this would be to use a separate, secondary query to fetch the list, much like we did to fetch the hovercard earlier. Then we could change the query variables and refetch the query when the input changed."),(0,i.mdx)("p",null,"However, this isn't optimal, because it needlessly uses a second query to fetch the ",(0,i.mdx)("em",{parentName:"p"},"initial")," list, before any user input occurs. The hovercard only appeared in response to a user interaction, but if the filterable list is visible and ready to be filtered, we might as well get its initial contents as part of our big query."),(0,i.mdx)("p",null,"On the other hand, we don't want to refetch the ",(0,i.mdx)("em",{parentName:"p"},"entire big query")," whenever the input changes. Not only would this mean retrieving a large amount of data unnecessarily, it could disrupt other parts of the UI. If certain data unrelated to the filterable list has changed on the server, it would appear to randomly change when the query was refetched. Besides, this would mean threading the user input up to the top of the React tree where the query lives, which would not scale very well."),(0,i.mdx)("p",null,"To address these issues, Relay provides ",(0,i.mdx)("em",{parentName:"p"},"refetchable fragments"),". These are fragments that can be refetched with new variables, separately from the rest of the query that they get spread into. They allow us to change a fragment\u2019s arguments and fetch new data for the new argument values, just as we can fetch an entire query with new query variables."),(0,i.mdx)("p",null,"But fragments are just that, fragments \u2014 they aren\u2019t queries and can\u2019t be fetched without being spread into a query and read out from the query results. So how do refetchable fragments actually work? The answer is that the Relay compiler generates a new, separate query just to refetch the fragment. The data is retrieved ",(0,i.mdx)("em",{parentName:"p"},"initially")," as part of whatever larger query the fragment is spread into, but then when it\u2019s refetched, the new synthetic query is used."),(0,i.mdx)("hr",null),(0,i.mdx)("p",null,"To try this out, let's add a sidebar to the page with a filterable contacts list. After all, it wouldn't feel like a properly cozy newsfeed app without the ability to contact people."),(0,i.mdx)("p",null,"We've already prepared a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Sidebar")," component, you just need to drop it into ",(0,i.mdx)("inlineCode",{parentName:"p"},"App.tsx"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"// change-line\nimport Sidebar from './Sidebar';\n\nexport default function App(): React.ReactElement {\n  return (\n    <RelayEnvironment>\n      <React.Suspense fallback={<LoadingSpinner />}>\n        <div className=\"app\">\n          <Newsfeed />\n          // change-line\n          <Sidebar />\n        </div>\n      </React.Suspense>\n    </RelayEnvironment>\n  );\n}\n")),(0,i.mdx)("p",null,"You should now see a sidebar with a list of people at the top."),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Contacts list",src:n(42417).Z,width:"702",height:"1436"})),(0,i.mdx)("p",null,"Have a look at ",(0,i.mdx)("inlineCode",{parentName:"p"},"ContactsList.tsx")," and you\u2019ll find this fragment, which is what selects the list of contacts:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"const ContactsListFragment = graphql`\n  fragment ContactsListFragment on Viewer {\n    contacts {\n      id\n      ...ContactRowFragment\n    }\n  }\n`;\n")),(0,i.mdx)("p",null,"As it happens, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"contacts")," field accepts a ",(0,i.mdx)("inlineCode",{parentName:"p"},"search")," argument that filters the list. You can try it out by changing ",(0,i.mdx)("inlineCode",{parentName:"p"},"contacts")," in this fragment to ",(0,i.mdx)("inlineCode",{parentName:"p"},'contacts(search: "S")'),". If you refresh the page, you should see only those contacts that have the letter S in them."),(0,i.mdx)("p",null,"Our goal, then, will be to hook up a search input so that, when the input changes, we refetch ",(0,i.mdx)("em",{parentName:"p"},"just this fragment")," with a new value for that ",(0,i.mdx)("inlineCode",{parentName:"p"},"search")," argument."),(0,i.mdx)("admonition",{type:"tip"},(0,i.mdx)("p",{parentName:"admonition"},"As an optional exercise, try combining the queries of Sidebar and Newsfeed into a single query. There is no need for Sidebar to have its own query separate from Newsfeed; in a real app they would both have fragments and the ",(0,i.mdx)("em",{parentName:"p"},"entire screen")," would have only a single query. We built it with a separate query to simplify the early examples in the tutorial.")),(0,i.mdx)("h3",{id:"step-1--add-a-fragment-argument"},"Step 1 \u2014 Add a fragment argument"),(0,i.mdx)("p",null,"First we need to make this fragment accept an argument. With refetchable fragments, fragment arguments become query variables for the refetch query that Relay generates. (They also work like regular fragment arguments, so the parent query can pass in an initial value for the argument.)"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'const ContactsListFragment = graphql`\n  fragment ContactsListFragment on Viewer\n    // change\n    @argumentDefinitions(\n      search: {type: "String", defaultValue: null}\n    )\n    // end-change\n  {\n    contacts {\n      id\n      ...ContactRowFragment\n    }\n  }\n`;\n')),(0,i.mdx)("h3",{id:"step-2--pass-the-fragment-argument-as-a-field-argument"},"Step 2 \u2014 Pass the fragment argument as a field argument"),(0,i.mdx)("p",null,"Pass the fragment argument in as an argument to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"contacts")," field."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'const ContactsListFragment = graphql`\n  fragment ContactsListFragment on Viewer\n    @argumentDefinitions(\n      search: {type: "String", defaultValue: null}\n    )\n  {\n    // change-line\n    contacts(search: $search) {\n      id\n      ...ContactRowFragment\n    }\n  }\n`;\n')),(0,i.mdx)("p",null,"Remember, the first ",(0,i.mdx)("inlineCode",{parentName:"p"},"search")," here is the name of the argument to ",(0,i.mdx)("inlineCode",{parentName:"p"},"contacts"),", while the second ",(0,i.mdx)("inlineCode",{parentName:"p"},"$search")," is the variable created by our fragment argument."),(0,i.mdx)("h3",{id:"step-3--add-the-refetchable-directive"},"Step 3 \u2014 Add the @refetchable directive"),(0,i.mdx)("p",null,"Next we'll add a ",(0,i.mdx)("inlineCode",{parentName:"p"},"@refetchable")," directive. This tells Relay to generate the extra query for refetching it. You have to specify the name of the generated query \u2014 it's a good idea to base it on the name of the fragment."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'const ContactsListFragment = graphql`\n  fragment ContactsListFragment on Viewer\n    // change-line\n    @refetchable(queryName: "ContactsListRefetchQuery")\n    @argumentDefinitions(\n      search: {type: "String", defaultValue: null}\n    )\n  {\n     // ...\n  }\n`;\n')),(0,i.mdx)("h3",{id:"step-4--add-the-search-input"},"Step 4 \u2014 Add the search input"),(0,i.mdx)("p",null,"Now we need to actually hook this up to our UI. Take a look at the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ContactsList")," component:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"export default function ContactsList({ viewer }: Props) {\n  const data = useFragment(ContactsListFragment, viewer);\n  return (\n    <Card dim={true}>\n      <h3>Contacts</h3>\n      {data.contacts.map(contact =>\n        <ContactRow key={contact.id} contact={contact} />\n      )}\n    </Card>\n  );\n}\n")),(0,i.mdx)("p",null,"First we need to add a search field."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"// change-line\nimport SearchInput from './SearchInput';\n\n// change-line\nconst {useState} = React;\n\nfunction ContactsList({viewer}) {\n  const data = useFragment(ContactsListFragment, viewer);\n  // change-line\n  const [searchString, setSearchString] = useState('');\n  // change\n  const onSearchStringChanged = (value: string) => {\n    setSearchString(value);\n  };\n  // end-change\n  return (\n    <Card dim={true}>\n      <h3>Contacts</h3>\n      // change\n      <SearchInput\n        value={searchString}\n        onChange={onSearchStringChanged}\n      />\n      // end-change\n      {data.contacts.map(contact =>\n        <ContactRow key={contact.id} contact={contact} />\n      )}\n    </Card>\n  );\n}\n")),(0,i.mdx)("h3",{id:"step-5--call-userefetchablefragment"},"Step 5 \u2014 Call useRefetchableFragment"),(0,i.mdx)("p",null,"Now to refetch the fragment when the string changes, we change ",(0,i.mdx)("inlineCode",{parentName:"p"},"useFragment")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"useRefetchableFragment"),". This hook returns a ",(0,i.mdx)("inlineCode",{parentName:"p"},"refetch")," function which will refetch the fragment with new variables which we provide as an argument."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"// change-line\nimport {useRefetchableFragment} from 'react-relay';\n\nfunction ContactsList({viewer}) {\n  // change-line\n  const [data, refetch] = useRefetchableFragment(ContactsListFragment, viewer);\n  const [searchString, setSearchString] = useState('');\n  const onSearchStringChanged = (value) => {\n    setSearchString(value);\n    // change-line\n    refetch({search: value});\n  };\n  return (\n    // ...\n  );\n}\n")),(0,i.mdx)("p",null,"You\u2019ll notice that Relay gives us a callback for refetching, rather than accepting the new state variables as an argument to the hook and refetching when it is re-rendered  with a different value. This means that the fetch begins as soon as the event takes place, saving some time versus waiting until React finishes re-rendering \u2014 the same principle we saw before with preloaded queries. It also gives us more control, for example if we wanted to debounce the refetch."),(0,i.mdx)("h3",{id:"step-6--control-loading-with-usetransition"},"Step 6 \u2014 Control loading with useTransition"),(0,i.mdx)("p",null,"At this point, when the fragment is refreshed, Relay uses Suspense while the new data is loading, so the entire component is replaced with a spinner! This makes the UI fairly unusable. We would rather just keep the current data on screen until the new data is available."),(0,i.mdx)("p",null,'The way Suspense normally works is this: When a component is missing data that it needs to render (as our component does after we refetch), it tells React to wait. When this happens, React finds the nearest Suspense component in the tree. It then replaces everything under that component with a "fallback" loading indicator.'),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Component needs data",src:n(94706).Z,width:"1522",height:"842"}),"\n",(0,i.mdx)("img",{alt:"React finds the nearest Suspense point",src:n(16967).Z,width:"1452",height:"770"}),"\n",(0,i.mdx)("img",{alt:"Renders a fallback at that point until the data is available",src:n(41326).Z,width:"1438",height:"720"})),(0,i.mdx)("p",null,"This makes sense when initially loading a screen, but in this instance there's no reason to hide the existing UI and replace it with a spinner. While React is waiting, it can simply continue showing what's already there."),(0,i.mdx)("p",null,"To achieve this, we can mark the refetch as a ",(0,i.mdx)("em",{parentName:"p"},"transition"),". Transitions are React state updates that do not need to be immediately responded to \u2014 React can wait until the data is available."),(0,i.mdx)("p",null,"Transitions are marked by wrapping the state change in a call to a function provided by the ",(0,i.mdx)("inlineCode",{parentName:"p"},"useTransition")," hook. This is what the code will look like:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"// change-line\nconst {useState, useTransition} = React;\n\nfunction ContactsList({viewer}) {\n  // change-line\n  const [isPending, startTransition] = useTransition();\n  const [searchString, setSearchString] = useState('');\n  const [data, refetch] = useRefetchableFragment(ContactsListFragment, viewer);\n  const onSearchStringChanged = (value) => {\n    setSearchString(value);\n    // change\n    startTransition(() => {\n      refetch({search: value});\n    });\n    // end-change\n  };\n  return (\n    <Card dim={true}>\n      <h3>Contacts</h3>\n      <SearchInput\n        value={searchString}\n        onChange={onSearchStringChanged}\n        // change-line\n        isPending={isPending}\n      />\n      {data.contacts.map(contact =>\n        <ContactRow key={contact.id} contact={contact} />\n      )}\n    </Card>\n  );\n}\n")),(0,i.mdx)("p",null,"While React is waiting for the new data, instead of using a Suspense fallback, React re-renders the component with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"isPending")," flag set to true."),(0,i.mdx)("p",null,"We simply pass the ",(0,i.mdx)("inlineCode",{parentName:"p"},"isPending")," flag to ",(0,i.mdx)("inlineCode",{parentName:"p"},"SearchInput")," (which causes it to show a spinner) while the refetch is happening. Meanwhile, by placing ",(0,i.mdx)("inlineCode",{parentName:"p"},"setSearchString")," outside of the transition but ",(0,i.mdx)("inlineCode",{parentName:"p"},"refetch")," within it, we tell React to immediately update the search input."),(0,i.mdx)("p",null,"We should now be able to search the contacts list with a nice user experience, showing a spinner but keeping the previous data visible while loading."),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Search input goes from spinner to filtered list",src:n(67822).Z,width:"1966",height:"1194"})),(0,i.mdx)("details",null,(0,i.mdx)("summary",null,"Deep dive: What fragments can be refetched?"),(0,i.mdx)("p",null,"To refetch fragments, Relay has to know how to generate a query that lets it refetch just the information from the fragment. That\u2019s only possible for fragments that meet certain requirements."),(0,i.mdx)("p",null,"You might imagine that we could, if nothing else, re-run the original query that the fragment was spread into. However, GraphQL doesn\u2019t guarantee that the same query will return the same results at different times. For instance, imagine you had a GraphQL field that returned the top trending posts across the site:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"query MyQuery {\n  topTrendingPosts {\n    title\n    summary\n    date\n    poster {\n     ...PosterFragment\n    }\n  }\n}\n")),(0,i.mdx)("p",null,"If you wanted to refresh just ",(0,i.mdx)("inlineCode",{parentName:"p"},"PosterFragment")," from this query, it wouldn\u2019t work to construct a query like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"query MyQuery {\n  topTrendingPosts {\n    poster {\n     ...PosterFragment\n    }\n  }\n}\n")),(0,i.mdx)("p",null,"... because the top trending post could be a different post by the time you refresh it!"),(0,i.mdx)("p",null,"Relay needs a way of identifying the specific node in the graph that the fragment ends up on, even if it can no longer be reached by the same path that the original query uses. If the node has a unique and stable ID, then we can just have a convention for querying for \u201cthe graph node with some specific ID\u201d like so:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'query RefetchQuery {\n  node(id: "abcdef") {\n    ...PosterFragment\n  }\n}\n')),(0,i.mdx)("p",null,"In fact, this is exactly the convention that Relay uses. It expects your server to implement a top-level field called ",(0,i.mdx)("inlineCode",{parentName:"p"},"node")," that takes an ID and gives you the graph node with that ID. (We saw ",(0,i.mdx)("inlineCode",{parentName:"p"},"node")," earlier with the hovercard example \u2014 there it was used to fetch a specific person given their ID using a secondary query.)"),(0,i.mdx)("p",null,"Not every graph node has a stable ID \u2014 some are ephemeral. To be used with ",(0,i.mdx)("inlineCode",{parentName:"p"},"node"),", your schema has to declare that its type implements an interface called ",(0,i.mdx)("inlineCode",{parentName:"p"},"Node"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"type Person implements Node {\n  id: ID!\n  ...\n}\n")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"Node")," interface simply says it has an ID, but more importantly indicates by convention that that ID is stable and unique:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"interface Node {\n  id: ID!\n}\n")),(0,i.mdx)("p",null,"Besides fragments on types that implement ",(0,i.mdx)("inlineCode",{parentName:"p"},"Node"),", you can also refetch fragments that are on ",(0,i.mdx)("inlineCode",{parentName:"p"},"Viewer")," (since the viewer is assumed to be stable throughout a session) and that are at the top level of a query (since there\u2019s no field above them that could change identity)."),(0,i.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},"Meta only: Ents marked with ",(0,i.mdx)("a",{href:"https://fb.workplace.com/groups/graphql.fyi/permalink/1539541276187011/",target:"_blank"},"GraphQLFetchable")," can also be refetched.")),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"summary"},"Summary"),(0,i.mdx)("p",null,"Refetchable fragments let us efficiently update specific parts of the UI in response to user input, while initializing them as part of the same query that we use for the entire screen."),(0,i.mdx)("p",null,"Relay's pagination features are built on refetchable fragments, too. We'll explore those next."))}u.isMDXComponent=!0},42417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/refetchable-contacts-initial-6f0b18fcbacc45a5673bbfd8a5a92a76.png"},94706:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/refetchable-suspense-1-data-needed-05e9379009624a3afdac9e422da834e5.png"},41326:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/refetchable-suspense-3-fallback-d274cf296d7605ea275d4564cf529adf.png"},67822:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/refetchable-transition-search-b916c9e6ffbb26b6e64c9f1e19fd6fd3.png"},16967:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/refetechable-suspense-2-nearest-suspense-point-be5a2c65ed3a31ad3d32e1fb26c8c0b0.png"}}]);