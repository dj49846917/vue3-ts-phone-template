var C=Object.defineProperty,y=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var m=(a,e,n)=>e in a?C(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,v=(a,e)=>{for(var n in e||(e={}))w.call(e,n)&&m(a,n,e[n]);if(_)for(var n of _(e))z.call(e,n)&&m(a,n,e[n]);return a},h=(a,e)=>y(a,k(e));import{g as F,u as L,m as x,n as D,N as R,t as b,r as d,o as l,h as u,j as p,w as S,p as j,k as N,F as V,q as $,i as r,s as I}from"./vendor.7d3a154c.js";import{g as A}from"./list.5fab79c7.js";import{_ as E}from"./index.df472547.js";import"./index.9a305ccf.js";const U=F({setup(){const a=L();let e=x({pageIndex:1,pageSize:10,refreshing:!1,finished:!1,loading:!1,error:!1,data:[]});D(()=>{e.loading=!0,i({pageIndex:1,pageSize:10})});function n(){a.back()}function f(){i({pageIndex:1,pageSize:10})}function g(){const o={pageIndex:e.pageIndex+1,pageSize:e.pageSize};i(o)}async function i(t){try{const o=await A(t);console.log("res",o),e.data=e.data.concat(o.data),o.data.length<e.pageSize&&(e.finished=!0)}catch(o){R({type:"warning",message:o}),e.error=!0}finally{e.refreshing=!1,e.loading=!1,e.pageIndex=t.pageIndex,e.pageSize=t.pageSize}}return h(v({},b(e)),{goBack:n,onRefresh:f,onLoad:g})}}),c=a=>(j("data-v-68ccd900"),a=a(),N(),a),P={class:"container"},q=c(()=>r("div",{class:"banner"},null,-1)),M={class:"cell-item"},G=c(()=>r("span",null,"\u5B57\u5178\u7801",-1)),H={class:"cell-item"},J=c(()=>r("span",null,"\u5B57\u5178\u540D\u79F0",-1));function K(a,e,n,f,g,i){const t=d("van-nav-bar"),o=d("van-list"),B=d("van-pull-refresh");return l(),u("div",P,[p(t,{title:"\u4E0A\u62C9\u52A0\u8F7D\uFF0C\u4E0B\u62C9\u5237\u65B0","left-arrow":"",onClickLeft:e[0]||(e[0]=s=>a.goBack()),class:"nav"}),q,p(B,{modelValue:a.refreshing,"onUpdate:modelValue":e[3]||(e[3]=s=>a.refreshing=s),onRefresh:a.onRefresh,"success-text":"\u5237\u65B0\u6210\u529F"},{default:S(()=>[p(o,{loading:a.loading,"onUpdate:loading":e[1]||(e[1]=s=>a.loading=s),error:a.error,"onUpdate:error":e[2]||(e[2]=s=>a.error=s),finished:a.finished,"finished-text":"\u6CA1\u6709\u66F4\u591A\u4E86",onLoad:a.onLoad},{default:S(()=>[(l(!0),u(V,null,$(a.data,s=>(l(),u("div",{class:"cell",key:s.DicCode},[r("div",M,[G,r("span",null,I(s.DicCode),1)]),r("div",H,[J,r("span",null,I(s.DicName),1)])]))),128))]),_:1},8,["loading","error","finished","onLoad"])]),_:1},8,["modelValue","onRefresh"])])}var Y=E(U,[["render",K],["__scopeId","data-v-68ccd900"]]);export{Y as default};
