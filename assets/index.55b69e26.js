import{g as p,u as v,v as _,m as f,n as E,r as m,o as g,h as B,j as C,p as M,k as w,i as h}from"./vendor.1dcf2f74.js";import{_ as k}from"./index.5103ebbf.js";const S=o=>(M("data-v-7f014e82"),o=o(),w(),o),A={class:"container"},b=S(()=>h("div",{id:"content",class:"content"},null,-1)),x=p({setup(o){const l=v();let e=_();const u=f({title:"\u6D77\u5E95\u635E\u738B\u5E9C\u4E95\u5E97",address:"\u5730\u5740\uFF1A\u5317\u4EAC\u5E02\u4E1C\u57CE\u533A\u738B\u5E9C\u4E95\u5927\u885788\u53F7\u4E50\u5929\u94F6\u6CF0\u767E\u8D27\u516B\u5C42",lng:null,lat:null});E(()=>{s()});function s(){e.value=new BMap.Map("content"),e.value.centerAndZoom("\u91CD\u5E86",18),e.value.enableScrollWheelZoom(!0),new BMap.Geolocation().getCurrentPosition(function(t){if(this.getStatus()==BMAP_STATUS_SUCCESS){console.log("r",t);let n=new BMap.Point(t.point.lng,t.point.lat),a=new BMap.Marker(n);e.value.addOverlay(a),e.value.centerAndZoom(n,18)}else alert("failed"+this.getStatus())},{timeout:2e4,enableHighAccuracy:!0}),e.value.addEventListener("click",function(t){let n=new BMap.Point(t.point.lng,t.point.lat);e.value.centerAndZoom(n,18);let a=new BMap.Marker(n);e.value.addOverlay(a);var c={width:200,height:100,title:u.title,enableMessage:!0},d=new BMap.InfoWindow(u.address,c);e.value.openInfoWindow(d,n)})}function i(){l.back()}return(r,t)=>{const n=m("van-nav-bar");return g(),B("div",A,[C(n,{class:"nav",title:"\u767E\u5EA6\u5730\u56FE","left-arrow":"",onClickLeft:t[0]||(t[0]=a=>i())}),b])}}});var y=k(x,[["__scopeId","data-v-7f014e82"]]);export{y as default};
