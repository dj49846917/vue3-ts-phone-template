var j=Object.defineProperty,V=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var b=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,M=(e,t)=>{for(var n in t||(t={}))z.call(t,n)&&b(e,n,t[n]);if(B)for(var n of B(t))N.call(t,n)&&b(e,n,t[n]);return e},S=(e,t)=>V(e,$(t));import{g as q,u as H,v as f,m as R,n as U,z as G,t as J,r as m,o,h as i,j as g,i as a,F as h,q as F,y as A,A as k,B as K,C as I,w as D,D as O,p as P,k as Q,l as y,s as x,c as W}from"./vendor.1dcf2f74.js";import{_ as X}from"./index.08487953.js";const Y=[{avatar:"#",user_id:1,nickname:"\u8001\u5A46",type:"text",data:"\u5728\u5E26\u8D77\u7761\u5348\u89C9\u4E86"},{avatar:"#",user_id:1,nickname:"\u8001\u5A46",type:"text",data:"\u7B49\u54C8\u4E0B\u5348\u53BB\u6E38\u6CF3"},{avatar:"#",user_id:2,nickname:"\u81EA\u5DF1",type:"text",data:"\u6211\u9192\u4E86"},{avatar:"#",user_id:2,nickname:"\u81EA\u5DF1",type:"text",data:"\u4E2D\u5348\u592A\u597D\u7761\u5348\u89C9\u4E86"},{avatar:"#",user_id:1,nickname:"\u8001\u5A46",type:"text",data:"\u7136\u540E\u5C31\u7ED9\u5979\u5403\u54A9\u54A9\uFF0C\u5403\u5230\u5403\u5230\u5979\u5C31\u772F\u773C\u775B\u4E86\uFF0C\u7136\u540E\u5C31\u628A\u5979\u653E\u809A\u5B50\u4E0A\u7761\uFF0C\u7761\u4E2A\u5341\u51E0\u4E8C\u5341\u5206\u949F\u5C31\u53EF\u4EE5\u4FA7\u8EAB\u4E00\u4E0B\u5B50\u628A\u5979\u653E\u4E0B\u6765\uFF0C\u7136\u540E\u5979\u5C31\u4E56\u4E56\u7761\u4E86"},{avatar:"#",user_id:2,nickname:"\u81EA\u5DF1",type:"text",data:"\u54E6"},{avatar:"#",user_id:2,nickname:"\u81EA\u5DF1",type:"text",data:"\u54E6"},{avatar:"#",user_id:2,nickname:"\u81EA\u5DF1",type:"text",data:"\u54E6"},{avatar:"#",user_id:2,nickname:"\u81EA\u5DF1",type:"text",data:"\u54E6"},{avatar:"#",user_id:2,nickname:"\u81EA\u5DF1",type:"text",data:"\u54E6"},{avatar:"#",user_id:2,nickname:"\u81EA\u5DF1",type:"text",data:"\u54E6"},{avatar:"#",user_id:2,nickname:"\u81EA\u5DF1",type:"text",data:"\u54E6"}],L=[{icon:"icon-xiangce",text:"\u76F8\u7247",id:1},{icon:"icon-22",text:"\u62CD\u6444",id:2},{icon:"icon-yuyinfuben",text:"\u8BED\u97F3\u901A\u8BDD",id:3},{icon:"icon-weizhi",text:"\u4F4D\u7F6E",id:4},{icon:"icon-hongbao",text:"\u7EA2\u5305",id:5},{icon:"icon-icon_list_zhuanyi",text:"\u8F6C\u8D26",id:6},{icon:"icon-audio",text:"\u8BED\u97F3\u8F93\u5165",id:7},{icon:"icon-icon_favorite",text:"\u6536\u85CF",id:8},{icon:"icon-kabao",text:"\u7FA4\u5DE5\u5177",id:9},{icon:"icon-wenjian",text:"\u6587\u4EF6",id:10},{icon:"icon-weixin",text:"\u7FA4\u76F4\u64AD",id:11},{icon:"icon-tag-fill",text:"\u4E2A\u4EBA\u540D\u7247",id:12}];const Z=q({setup(){const e=H(),t=f(),n=f(),c=R({message:"",chatList:Y,menuData:[]}),_=f(!1);U(()=>{const u=document.querySelector(".nav");u&&(t.value.style.top=u.clientHeight+"px",d()),v()}),G(()=>{clearTimeout(n.value)});function C(){_.value=!_.value,d()}function p(){const u={avatar:"#",user_id:2,nickname:"\u81EA\u5DF1",type:"text",data:c.message};c.chatList.push(u),d()}function d(){n.value=setTimeout(()=>{t.value.scrollTop=t.value.scrollHeight},400),c.message=""}function v(){const u=Math.ceil(L.length/8);let s=8;if(u>0)for(let r=0;r<u;r++){const w={index:r,menuInfo:[]};let T=L.slice(r*s,r*s+s);w.menuInfo=T,c.menuData.push(w)}console.log(c.menuData)}function E(){e.back()}return S(M({},J(c)),{goBack:E,main:t,sendMsg:p,isShowMenu:_,toggleShowMenu:C})}}),l=e=>(P("data-v-abbe9e76"),e=e(),Q(),e),ee={class:"container"},te={key:0,class:"talk left"},ue=["src"],ne={class:"word"},ae=l(()=>a("span",{class:"iconfont icon-triangle-left"},null,-1)),oe={key:1,class:"talk right"},se={class:"word"},ie=l(()=>a("span",{class:"iconfont icon-triangle-right"},null,-1)),ce=l(()=>a("img",{src:"#",alt:"b"},null,-1)),de=l(()=>a("span",{class:"iconfont icon-yuyin"},null,-1)),re=l(()=>a("span",{class:"iconfont icon-biaoqing"},null,-1)),le=y("\u53D1\u9001"),_e={key:0,class:"menu"};function me(e,t,n,c,_,C){const p=m("van-nav-bar"),d=m("van-button"),v=m("van-swipe-item"),E=m("van-swipe");return o(),i("div",ee,[g(p,{class:"nav",title:"\u804A\u5929","left-arrow":"",onClickLeft:t[0]||(t[0]=u=>e.goBack())}),a("div",{class:A(["content",{contentActive:e.isShowMenu}]),ref:"main"},[(o(!0),i(h,null,F(e.chatList,(u,s)=>(o(),i("div",{key:s},[u.user_id===1?(o(),i("div",te,[a("img",{src:u.avatar,alt:"a"},null,8,ue),a("div",ne,[ae,y(x(u.data),1)])])):(o(),i("div",oe,[a("div",se,[ie,y(x(u.data),1)]),ce]))]))),128))],2),a("div",{class:A(["footer",{footerActive:e.isShowMenu}])},[de,k(a("textarea",{"onUpdate:modelValue":t[1]||(t[1]=u=>e.message=u)},null,512),[[K,e.message]]),re,k(g(d,{type:"success",class:"send",onClick:e.sendMsg},{default:D(()=>[le]),_:1},8,["onClick"]),[[I,e.message]]),k(a("span",{class:"iconfont icon-add",onClick:t[2]||(t[2]=(...u)=>e.toggleShowMenu&&e.toggleShowMenu(...u))},null,512),[[I,!e.message]])],2),e.isShowMenu?(o(),i("div",_e,[g(E,{class:"my-swipe","indicator-color":"white"},{default:D(()=>[(o(!0),i(h,null,F(e.menuData,u=>(o(),W(v,{key:u.index},{default:D(()=>[(o(!0),i(h,null,F(u.menuInfo,s=>(o(),i("div",{class:"menu-item",key:s.id},[a("span",{class:A(["iconfont",s.icon,"icon"])},null,2),a("div",null,x(s.text),1)]))),128))]),_:2},1024))),128))]),_:1})])):O("",!0)])}var fe=X(Z,[["render",me],["__scopeId","data-v-abbe9e76"]]);export{fe as default};
