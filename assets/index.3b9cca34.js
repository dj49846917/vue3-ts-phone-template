var k=Object.defineProperty,b=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var c=(o,e,n)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,d=(o,e)=>{for(var n in e||(e={}))D.call(e,n)&&c(o,n,e[n]);if(C)for(var n of C(e))A.call(e,n)&&c(o,n,e[n]);return o},f=(o,e)=>b(o,F(e));import{g as _,u as $,m as v,t as E,r as i,o as g,h as j,j as s,w as y}from"./vendor.1dcf2f74.js";import{_ as N}from"./index.08487953.js";const V=_({setup(){const o=$(),e=v({zjlx:"",xsrs:""}),n=v({label:"",key:"",visible:!1,columns:[]}),m=[{DicName:"\u8EAB\u4EFD\u8BC1",DicCode:100001},{DicName:"\u519B\u5B98\u8BC1",DicCode:100002},{DicName:"\u6237\u53E3\u7C3F",DicCode:100003},{DicName:"\u673A\u52A8\u8F66\u9A7E\u9A76\u8BC1",DicCode:100004},{DicName:"\u5B66\u751F\u8BC1",DicCode:100005}],p=[1,2,3,4,5,6],B=l=>{console.log("value",l),e[n.key]=l,n.visible=!1};function r(){o.back()}function a(l,t){n.visible=!0,n.label=l,n.key=t,n.columns=[],l==="\u8BC1\u4EF6\u7C7B\u578B"?m.forEach(u=>{console.log("1"),n.columns.push(u.DicName)}):(console.log("2"),p.forEach(u=>n.columns.push(u)))}return f(d(d({goBack:r,onConfirm:B},E(e)),E(n)),{openModal:a})}}),w={class:"container"};function z(o,e,n,m,p,B){const r=i("van-nav-bar"),a=i("van-field"),l=i("van-picker"),t=i("van-popup");return g(),j("div",w,[s(r,{title:"\u4E0A\u62C9\u52A0\u8F7D\uFF0C\u4E0B\u62C9\u5237\u65B0","left-arrow":"",onClickLeft:e[0]||(e[0]=u=>o.goBack()),class:"nav"}),s(a,{modelValue:o.zjlx,"onUpdate:modelValue":e[1]||(e[1]=u=>o.zjlx=u),"is-link":"",readonly:"",name:"picker",label:"\u8BC1\u4EF6\u7C7B\u578B",placeholder:"\u70B9\u51FB\u9009\u62E9\u8BC1\u4EF6\u7C7B\u578B",onClick:e[2]||(e[2]=u=>o.openModal("\u8BC1\u4EF6\u7C7B\u578B","zjlx"))},null,8,["modelValue"]),s(a,{modelValue:o.xsrs,"onUpdate:modelValue":e[3]||(e[3]=u=>o.xsrs=u),"is-link":"",readonly:"",name:"picker",label:"\u5B66\u751F\u4EBA\u6570",placeholder:"\u70B9\u51FB\u9009\u62E9\u5B66\u751F\u4EBA\u6570",onClick:e[4]||(e[4]=u=>o.openModal("\u5B66\u751F\u4EBA\u6570","xsrs"))},null,8,["modelValue"]),s(t,{show:o.visible,"onUpdate:show":e[6]||(e[6]=u=>o.visible=u),position:"bottom"},{default:y(()=>[s(l,{columns:o.columns,onConfirm:o.onConfirm,onCancel:e[5]||(e[5]=u=>o.visible=!1),title:o.label},null,8,["columns","onConfirm","title"])]),_:1},8,["show"])])}var L=N(V,[["render",z],["__scopeId","data-v-4566f266"]]);export{L as default};
