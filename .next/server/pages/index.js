"use strict";(()=>{var e={};e.id=332,e.ids=[220,332],e.modules={671:(e,t)=>{Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},456:(e,t,r)=>{r.r(t),r.d(t,{config:()=>j,default:()=>M,getServerSideProps:()=>h,getStaticPaths:()=>A,getStaticProps:()=>m,reportWebVitals:()=>x,routeModule:()=>q,unstable_getServerProps:()=>I,unstable_getServerSideProps:()=>O,unstable_getStaticParams:()=>G,unstable_getStaticPaths:()=>E,unstable_getStaticProps:()=>y});var n={};r.r(n),r.d(n,{default:()=>b,getStaticProps:()=>v});var a=r(865),s=r(455),i=r(671),o=r(781),u=r.n(o),l=r(645),d=r.n(l),p=r(732);let c=require("gray-matter");var P=r.n(c),f=r(873),g=r.n(f);let S=require("fs");var _=r.n(S);function b({postData:e}){let{title:t,date:r,content:n}=e;return(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:t}),(0,p.jsx)("p",{children:r}),(0,p.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})]})}async function v(){let e=g().join(process.cwd(),"posts"),t=g().join(e,"hello-world.md"),r=_().readFileSync(t,"utf8"),{data:n,content:a}=P()(r);return{props:{postData:{...n,content:a}}}}let M=(0,i.M)(n,"default"),m=(0,i.M)(n,"getStaticProps"),A=(0,i.M)(n,"getStaticPaths"),h=(0,i.M)(n,"getServerSideProps"),j=(0,i.M)(n,"config"),x=(0,i.M)(n,"reportWebVitals"),y=(0,i.M)(n,"unstable_getStaticProps"),E=(0,i.M)(n,"unstable_getStaticPaths"),G=(0,i.M)(n,"unstable_getStaticParams"),I=(0,i.M)(n,"unstable_getServerProps"),O=(0,i.M)(n,"unstable_getServerSideProps"),q=new a.PagesRouteModule({definition:{kind:s.A.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:d(),Document:u()},userland:n})},645:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let n=r(929),a=r(732),s=n._(r(15)),i=r(811);async function o(e){let{Component:t,ctx:r}=e;return{pageProps:await (0,i.loadGetInitialProps)(t,r)}}class u extends s.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,a.jsx)(e,{...t})}}u.origGetInitialProps=o,u.getInitialProps=o,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},455:(e,t)=>{var r;Object.defineProperty(t,"A",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE"}(r||(r={}))},361:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},15:e=>{e.exports=require("react")},732:e=>{e.exports=require("react/jsx-runtime")},873:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[781],()=>r(456));module.exports=n})();