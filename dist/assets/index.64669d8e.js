import{g as E,u as m,v as r,n as f,r as h,o as n,h as o,j as k,i as t,F as A,q as C,z as F,A as g,p as y,k as B,l,s as _}from"./vendor.7d3a154c.js";import{_ as x}from"./index.b0adbc1a.js";const D=[{avatar:"#",user_id:1,nickname:"\u8001\u5A46",type:"text",data:"\u5728\u5E26\u8D77\u7761\u5348\u89C9\u4E86"},{avatar:"#",user_id:1,nickname:"\u8001\u5A46",type:"text",data:"\u7B49\u54C8\u4E0B\u5348\u53BB\u6E38\u6CF3"},{avatar:"#",user_id:2,nickname:"\u81EA\u5DF1",type:"text",data:"\u6211\u9192\u4E86"},{avatar:"#",user_id:2,nickname:"\u81EA\u5DF1",type:"text",data:"\u4E2D\u5348\u592A\u597D\u7761\u5348\u89C9\u4E86"},{avatar:"#",user_id:1,nickname:"\u8001\u5A46",type:"text",data:"\u7136\u540E\u5C31\u7ED9\u5979\u5403\u54A9\u54A9\uFF0C\u5403\u5230\u5403\u5230\u5979\u5C31\u772F\u773C\u775B\u4E86\uFF0C\u7136\u540E\u5C31\u628A\u5979\u653E\u809A\u5B50\u4E0A\u7761\uFF0C\u7761\u4E2A\u5341\u51E0\u4E8C\u5341\u5206\u949F\u5C31\u53EF\u4EE5\u4FA7\u8EAB\u4E00\u4E0B\u5B50\u628A\u5979\u653E\u4E0B\u6765\uFF0C\u7136\u540E\u5979\u5C31\u4E56\u4E56\u7761\u4E86"},{avatar:"#",user_id:2,nickname:"\u81EA\u5DF1",type:"text",data:"\u54E6"}];const b=E({setup(){const u=m(),e=r(""),i=r();f(()=>{const c=document.querySelector(".nav");c&&(i.value.style.top=c.clientHeight+"px")});function d(){u.back()}return{goBack:d,message:e,main:i,chatList:D}}}),s=u=>(y("data-v-43134209"),u=u(),B(),u),w={class:"container"},S={class:"content",ref:"main"},$={key:0,class:"talk left"},I=["src"],L={class:"word"},V=s(()=>t("span",{class:"iconfont icon-triangle-left"},null,-1)),j={key:1,class:"talk right"},q={class:"word"},N=s(()=>t("span",{class:"iconfont icon-triangle-right"},null,-1)),M=s(()=>t("img",{src:"#",alt:"b"},null,-1)),T={class:"footer"},z=s(()=>t("span",{class:"iconfont icon-yuyin"},null,-1)),H=s(()=>t("span",{class:"iconfont icon-biaoqing"},null,-1)),R=s(()=>t("span",{class:"iconfont icon-add"},null,-1));function U(u,e,i,d,c,G){const p=h("van-nav-bar");return n(),o("div",w,[k(p,{class:"nav",title:"\u804A\u5929","left-arrow":"",onClickLeft:e[0]||(e[0]=a=>u.goBack())}),t("div",S,[(n(!0),o(A,null,C(u.chatList,(a,v)=>(n(),o("div",{key:v},[a.user_id===1?(n(),o("div",$,[t("img",{src:a.avatar,alt:"a"},null,8,I),t("div",L,[V,l(_(a.data),1)])])):(n(),o("div",j,[t("div",q,[N,l(_(a.data),1)]),M]))]))),128))],512),t("div",T,[z,F(t("textarea",{"onUpdate:modelValue":e[1]||(e[1]=a=>u.message=a)},null,512),[[g,u.message]]),H,R])])}var O=x(b,[["render",U],["__scopeId","data-v-43134209"]]);export{O as default};
