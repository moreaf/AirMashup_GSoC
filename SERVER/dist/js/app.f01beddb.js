(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],f=0,d=[];f<s.length;f++)o=s[f],r[o]&&d.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("1356"),r=a.n(n);r.a},"11df":function(t,e,a){"use strict";var n=a("fc12"),r=a.n(n);r.a},1356:function(t,e,a){},"18dc":function(t,e,a){t.exports=a.p+"img/pcital.e1d5c5f3.png"},"1b3a":function(t,e,a){},"3ab4":function(t,e,a){t.exports=a.p+"img/lg.fe5c9040.png"},"3b88":function(t,e,a){t.exports=a.p+"img/lgeu.c6f7fd3d.png"},"532a":function(t,e,a){"use strict";var n=a("9f88"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("bc3a"),i=a.n(r),o={},s=i.a.create(o);s.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),s.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t,e){t.axios=s,window.axios=s,Object.defineProperties(t.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},n["a"].use(Plugin);Plugin;var l=a("bb71");a("da64");n["a"].use(l["a"],{iconfont:"md"});var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-toolbar"),a("router-view"),a("app-footer",{staticStyle:{position:"absolute","z-index":"-1"}})],1)},u=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{height:"auto",color:"white"}},[n("v-content",[n("v-layout",{attrs:{"align-center":"","justify-space-between":"",row:""}},[n("v-flex",{attrs:{"ma-3":"","ml-5":""}},[n("img",{attrs:{src:a("a588"),width:"80%","aspect-ratio":"1.7"}})]),n("v-flex",[n("img",{attrs:{src:a("3ab4"),width:"35%","aspect-ratio":"1.7"}})]),n("v-flex",{attrs:{xs3:""}},[n("img",{attrs:{src:a("9c00"),width:"90%"}})]),n("v-flex",{attrs:{xs3:""}},[n("img",{attrs:{src:a("fbea"),width:"55%"}})]),n("v-flex",{attrs:{xs3:""}},[n("img",{attrs:{src:a("18dc"),width:"70%"}})]),n("v-flex",{attrs:{xs3:""}},[n("img",{attrs:{src:a("8534"),width:"85%"}})]),n("v-flex",{attrs:{xs3:"","mr-5":""}},[n("img",{attrs:{src:a("3b88"),width:"80%"}})])],1),n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{primary:"","py-3":"","text-xs-center":"",indigo:"","white--text":"",xs12:""}},[t._v("\n        ©2019 — "),n("strong",[t._v("Liquid Galaxy Lab")])])],1)],1)],1)},d=[],v={data:function(){return{}}},p=v,g=a("2877"),h=a("6544"),x=a.n(h),m=a("549c"),b=a("0e8f"),y=a("553a"),w=a("a722"),C=Object(g["a"])(p,f,d,!1,null,null,null),_=C.exports;x()(C,{VContent:m["a"],VFlex:b["a"],VFooter:y["a"],VLayout:w["a"]});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{attrs:{color:"indigo",dark:""}},[a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("router-link",{attrs:{to:"/"}},[a("v-toolbar-title",{staticClass:"white--text headline"},[t._v("AirMashup")])],1),a("v-spacer"),a("div",{staticClass:"hidden-sm-and-down"},[a("router-link",{attrs:{to:"/aircrafts"}},[a("v-btn",{staticClass:"headline",attrs:{flat:""}},[t._v("REAL-TIME AIRCRAFTS")])],1),a("router-link",{attrs:{to:"/flightroutes"}},[a("v-btn",{staticClass:"headline",attrs:{flat:""}},[t._v("FLIGHT ROUTES")])],1),a("router-link",{attrs:{to:"/airspace"}},[a("v-btn",{staticClass:"headline",attrs:{flat:""}},[t._v("AIRSPACE")])],1)],1),a("v-navigation-drawer",{attrs:{absolute:"",temporary:"",height:"400px"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"pt-0",attrs:{dense:""}},[a("v-divider"),t._l(t.items,function(e){return a("v-list-tile",{key:e.title},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)})],2)],1)],1)},A=[],E={data:function(){return{drawer:null,items:[{title:"Home",icon:"dashboard"},{title:"About",icon:"question_answer"},{title:"About Liquid Galaxy Lab",icon:"dashboard"},{title:"Contact Us",icon:"question_answer"}]}}},L=E,j=a("8336"),S=a("ce7e"),T=a("132d"),O=a("8860"),k=a("ba95"),I=a("40fe"),R=a("5d23"),F=a("f774"),P=a("9910"),N=a("71d9"),M=a("706c"),U=a("2a7f"),B=Object(g["a"])(L,V,A,!1,null,null,null),G=B.exports;x()(B,{VBtn:j["a"],VDivider:S["a"],VIcon:T["a"],VList:O["a"],VListTile:k["a"],VListTileAction:I["a"],VListTileContent:R["a"],VListTileTitle:R["b"],VNavigationDrawer:F["a"],VSpacer:P["a"],VToolbar:N["a"],VToolbarSideIcon:M["a"],VToolbarTitle:U["a"]});var $=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"text-xs-center"},[a("div",[a("v-btn",{attrs:{small:"",color:"indigo",dark:"",large:""}},[t._v("LAUNCH GLOBAL VIEW")])],1),a("div",[a("v-btn",{attrs:{color:"indigo",dark:"",large:""}},[t._v("LAUNCH SPAIN VIEW")])],1)])])],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-subheader",{staticClass:"pl-0"},[t._v("Latitude:")]),a("v-slider",{attrs:{"thumb-label":""},model:{value:t.slider,callback:function(e){t.slider=e},expression:"slider"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-subheader",{staticClass:"pl-0"},[t._v("Longitude:")]),a("v-slider",{attrs:{"thumb-label":""},model:{value:t.slider,callback:function(e){t.slider=e},expression:"slider"}})],1)],1)],1)},H=[],z=a("a523"),K=a("ba0d"),q=a("e0c7"),J={},D=Object(g["a"])(J,$,H,!1,null,null,null),W=D.exports;x()(D,{VBtn:j["a"],VContainer:z["a"],VFlex:b["a"],VLayout:w["a"],VSlider:K["a"],VSubheader:q["a"]});var Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[n("h1",{staticStyle:{color:"#3F51B5","font-family":"roboto","font-size":"350%","font-weight":"700"}},[t._v("FLIGHT ROUTES")])]),n("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{lg5:""}},[n("v-card",{staticClass:"xxx indigo elevation-20"},[n("img",{staticClass:"white--text",attrs:{"aspect-ratio":"4/3",width:"100%",src:a("bc0d")}}),n("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{attrs:{"align-end":"",flexbox:""}},[n("span",{staticClass:"white--text display-1 font-weight-bold justify-center align-center"},[t._v(" SPAIN AIR ROUTES ")])])],1)],1),n("v-card-actions",{staticClass:"align-center justify-space-around"},[n("router-link",{attrs:{to:"/spainairroutes"}},[n("v-btn",{staticClass:"elevation-20 mb-3",attrs:{color:"yellow darken-4"}},[t._v("SEE ALL")])],1)],1)],1)],1),n("v-flex",{attrs:{lg5:""}},[n("v-card",{staticClass:"xxx indigo elevation-20"},[n("img",{staticClass:"white--text",attrs:{"aspect-ratio":"4/3",width:"100%",src:a("99bd")}}),n("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{attrs:{"align-end":"",flexbox:""}},[n("span",{staticClass:"white--text display-1 font-weight-bold justify-center align-center"},[t._v(" INTERNATIONAL AIR ROUTES ")])])],1)],1),n("v-card-actions",{staticClass:"align-center justify-space-around"},[n("router-link",{attrs:{to:"/intairroutes"}},[n("v-btn",{staticClass:"elevation-20 mb-3",attrs:{color:"yellow darken-4"}},[t._v("SEE ALL")])],1)],1)],1)],1)],1)],1)},X=[],Y={data:function(){return{}}},Z=Y,tt=(a("7a47"),a("b0af")),et=a("99d9"),at=Object(g["a"])(Z,Q,X,!1,null,null,null),nt=at.exports;x()(at,{VBtn:j["a"],VCard:tt["a"],VCardActions:et["a"],VContainer:z["a"],VFlex:b["a"],VLayout:w["a"]});var rt={name:"App",components:{AppToolbar:G,AppFooter:_,Aircrafts:W,FlightRoutes:nt}},it=rt,ot=(a("034f"),Object(g["a"])(it,c,u,!1,null,null,null)),st=ot.exports,lt=a("8c4f"),ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-content",[n("v-layout",{attrs:{"align-center":"","justify-space-between":"",row:""}},[n("v-flex",{attrs:{"ma-3":"","ml-5":""}},[n("img",{attrs:{src:a("a588"),width:"50%","aspect-ratio":"1.7"}})])],1)],1)],1)},ut=[],ft={},dt=Object(g["a"])(ft,ct,ut,!1,null,null,null),vt=dt.exports;x()(dt,{VContent:m["a"],VFlex:b["a"],VLayout:w["a"]});var pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},gt=[],ht={},xt=Object(g["a"])(ht,pt,gt,!1,null,null,null),mt=xt.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[n("h1",{staticStyle:{color:"#3F51B5","font-family":"roboto","font-size":"350%","font-weight":"700"}},[t._v("AIRSPACE")])]),n("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{lg5:""}},[n("v-card",{staticClass:"xxx indigo elevation-20"},[n("img",{staticClass:"white--text",attrs:{"aspect-ratio":"4/3",width:"100%",src:a("ea5e")}}),n("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{attrs:{"align-end":"",flexbox:""}},[n("span",{staticClass:"white--text display-1 font-weight-bold justify-center align-center"},[t._v(" OBJECT LIMITANT SURFACES (OLS) ")])])],1)],1),n("v-card-actions",{staticClass:"align-center justify-space-around"},[n("router-link",{attrs:{to:"/ols"}},[n("v-btn",{staticClass:"elevation-20 mb-3",attrs:{color:"yellow darken-4"}},[t._v("SEE MORE")])],1)],1)],1)],1),n("v-flex",{attrs:{lg5:""}},[n("v-card",{staticClass:"xxx indigo elevation-20"},[n("img",{staticClass:"white--text",attrs:{"aspect-ratio":"4/3",width:"100%",src:a("8612")}}),n("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{attrs:{"align-end":"",flexbox:""}},[n("span",{staticClass:"white--text display-1 font-weight-bold justify-center align-center"},[t._v(" AIS ")])])],1)],1),n("v-card-actions",{staticClass:"align-center justify-space-around"},[n("router-link",{attrs:{to:"/ais"}},[n("v-btn",{staticClass:"elevation-20 mb-3",attrs:{color:"yellow darken-4"}},[t._v("SEE MORE")])],1)],1)],1)],1)],1)],1)},yt=[],wt={data:function(){return{}}},Ct=wt,_t=(a("f480"),Object(g["a"])(Ct,bt,yt,!1,null,null,null)),Vt=_t.exports;x()(_t,{VBtn:j["a"],VCard:tt["a"],VCardActions:et["a"],VContainer:z["a"],VFlex:b["a"],VLayout:w["a"]});var At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[a("h1",{staticStyle:{color:"#3F51B5","font-family":"roboto","font-size":"350%","font-weight":"700"}},[t._v("SPAIN FLIGHT ROUTES")])]),a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",lg7:"","mb-3":""}},[a("v-expansion-panel",{attrs:{popout:""}},t._l(t.sroutes,function(e){return a("v-expansion-panel-content",{key:e.id,staticClass:"indigo lighten-1",scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"display-1 font-weight-bold white--text"},[t._v(t._s(e.name))])]},proxy:!0}],null,!0)},[a("v-card",[a("img",{attrs:{"aspect-ratio":"4/3",width:"100%",src:e.img}}),a("v-card-actions",{staticClass:"align-center justify-space-around indigo lighten-1"},[a("v-btn",{staticClass:"elevation-20 mb-1",attrs:{color:"yellow darken-4"},on:{click:function(a){return t.sendKML(e.id)}}},[t._v("LAUNCH AIR ROUTE")])],1)],1)],1)}),1)],1)],1)],1)},Et=[],Lt={data:function(){return{sroutes:[]}},mounted:function(){console.log("ready");var t=this,e="http://localhost:8080/getSRoutes/";i()({method:"GET",url:e}).then(function(e){console.log(e.data[0]),t.sroutes=e.data})},methods:{sendKML:function(t){var e="http://localhost:8080/changeSRoutes/"+t;i()({method:"GET",url:e}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}}},jt=Lt,St=a("cd55"),Tt=a("49e2"),Ot=Object(g["a"])(jt,At,Et,!1,null,null,null),kt=Ot.exports;x()(Ot,{VBtn:j["a"],VCard:tt["a"],VCardActions:et["a"],VContainer:z["a"],VExpansionPanel:St["a"],VExpansionPanelContent:Tt["a"],VFlex:b["a"],VLayout:w["a"]});var It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[a("h1",{staticStyle:{color:"#3F51B5","font-family":"roboto","font-size":"350%","font-weight":"700"}},[t._v("INTERNATIONAL FLIGHT ROUTES")])]),a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",lg7:"","mb-3":""}},[a("v-expansion-panel",{attrs:{popout:""}},t._l(t.introutes,function(e){return a("v-expansion-panel-content",{key:e.id,staticClass:"indigo lighten-1",scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"display-1 font-weight-bold white--text"},[t._v(t._s(e.name))])]},proxy:!0}],null,!0)},[a("v-card",[a("img",{attrs:{"aspect-ratio":"4/3",width:"100%",src:e.img}}),a("v-card-actions",{staticClass:"align-center justify-space-around indigo lighten-1"},[a("v-btn",{staticClass:"elevation-20 mb-1",attrs:{color:"yellow darken-4"},on:{click:function(a){return t.sendKML(e.id)}}},[t._v("LAUNCH AIR ROUTE")])],1)],1)],1)}),1)],1)],1)],1)},Rt=[],Ft={data:function(){return{introutes:[]}},mounted:function(){console.log("ready");var t=this,e="http://localhost:8080/getIntRoutes/";i()({method:"GET",url:e}).then(function(e){console.log(e.data[0]),t.introutes=e.data})},methods:{sendKML:function(t){var e="http://localhost:8080/changeIntRoutes/"+t;i()({method:"GET",url:e}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}}},Pt=Ft,Nt=Object(g["a"])(Pt,It,Rt,!1,null,null,null),Mt=Nt.exports;x()(Nt,{VBtn:j["a"],VCard:tt["a"],VCardActions:et["a"],VContainer:z["a"],VExpansionPanel:St["a"],VExpansionPanelContent:Tt["a"],VFlex:b["a"],VLayout:w["a"]});var Ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[a("h1",{staticStyle:{color:"#3F51B5","font-family":"roboto","font-size":"350%","font-weight":"700"}},[t._v("OBJECT LIMITANT SURFACES")])]),a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},t._l(t.airports,function(e){return a("v-flex",{attrs:{lg5:""}},[a("v-card",{key:e.id,staticClass:"xxx indigo elevation-20"},[a("img",{staticClass:"white--text",attrs:{"aspect-ratio":"4/3",width:"100%",src:e.img}}),a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{"fill-height":""}},[a("v-flex",{attrs:{"align-end":"",flexbox:""}},[a("span",{staticClass:"white--text display-1 font-weight-bold justify-center align-center"},[t._v(t._s(e.name)+" ")])])],1)],1),a("v-card-actions",{staticClass:"align-center justify-space-around"},[a("v-btn",{staticClass:"elevation-20 mb-3",attrs:{color:"yellow darken-4"},on:{click:function(a){return t.sendKML(e.id)}}},[t._v("LAUNCH OLS")])],1)],1)],1)}),1)],1)},Bt=[],Gt={data:function(){return{airports:[]}},mounted:function(){console.log("ready");var t=this,e="http://localhost:8080/getAirports/";i()({method:"GET",url:e}).then(function(e){console.log(e.data[0]),t.airports=e.data})},methods:{sendKML:function(t){var e="http://localhost:8080/changeAirports/"+t;i()({method:"GET",url:e}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}}},$t=Gt,Ht=(a("532a"),Object(g["a"])($t,Ut,Bt,!1,null,null,null)),zt=Ht.exports;x()(Ht,{VBtn:j["a"],VCard:tt["a"],VCardActions:et["a"],VContainer:z["a"],VFlex:b["a"],VLayout:w["a"]});var Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[a("h1",{staticStyle:{color:"#3F51B5","font-family":"roboto","font-size":"350%","font-weight":"700"}},[t._v("AERONAUTICAL INFORMATION SERVICES")])]),a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},t._l(t.charts,function(e){return a("v-flex",{attrs:{lg5:""}},[a("v-card",{key:e.id,staticClass:"xxx indigo elevation-20"},[a("img",{staticClass:"white--text",attrs:{"aspect-ratio":"4/3",width:"100%",src:e.cover}}),a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{"fill-height":""}},[a("v-flex",{attrs:{"align-end":"",flexbox:""}},[a("span",{staticClass:"white--text display-1 font-weight-bold justify-center align-center"},[t._v(t._s(e.name)+" ")])])],1)],1),a("v-card-actions",{staticClass:"align-center justify-space-around"},[a("v-btn",{staticClass:"elevation-20 mb-3",attrs:{color:"yellow darken-4"},on:{click:function(a){return t.sendOverlay(e.id)}}},[t._v("LAUNCH CHART")])],1)],1)],1)}),1)],1)},qt=[];a("ed18").config();var Jt={data:function(){return{charts:[]}},mounted:function(){console.log("ready"),console.log("localhost");var t=this,e="http://localhost:8080/getCharts/";i()({method:"GET",url:e}).then(function(e){console.log(e.data[0]),t.charts=e.data})},methods:{sendOverlay:function(t){var e="http://localhost:8080/changeCharts/"+t,a="http://192.168.86.90:8080/kml/manage/clean";i()({method:"GET",url:a}).then(function(t){i()({method:"GET",url:e})}).then(function(t){console.log(t)}).catch(function(t){console.log(t)}).catch(function(t){console.log(t)})}}},Dt=Jt,Wt=(a("11df"),Object(g["a"])(Dt,Kt,qt,!1,null,null,null)),Qt=Wt.exports;x()(Wt,{VBtn:j["a"],VCard:tt["a"],VCardActions:et["a"],VContainer:z["a"],VFlex:b["a"],VLayout:w["a"]}),n["a"].use(lt["a"]);var Xt=new lt["a"]({mode:"history",base:"/",routes:[{path:"/",name:"AppHome",component:vt},{path:"/login",name:"AppLogin",component:mt},{path:"/aircrafts",name:"Aircrafts",component:W},{path:"/airspace",name:"Airspace",component:Vt},{path:"/flightroutes",name:"FlightRoutes",component:nt},{path:"/spainairroutes",name:"SpainRoutes",component:kt},{path:"/intairroutes",name:"IntRoutes",component:Mt},{path:"/ols",name:"OLS",component:zt},{path:"/ais",name:"AIS",component:Qt}]});n["a"].config.productionTip=!1,new n["a"]({router:Xt,render:function(t){return t(st)}}).$mount("#app")},"7a47":function(t,e,a){"use strict";var n=a("f1e4"),r=a.n(n);r.a},8534:function(t,e,a){t.exports=a.p+"img/gsoc.e43b8b2e.png"},8612:function(t,e,a){t.exports=a.p+"img/AIScover.f7320235.png"},"99bd":function(t,e,a){t.exports=a.p+"img/intflights.b24e232f.png"},"9c00":function(t,e,a){t.exports=a.p+"img/lglab.69971993.png"},"9f88":function(t,e,a){},a588:function(t,e,a){t.exports=a.p+"img/logoAM.3063239e.png"},bc0d:function(t,e,a){t.exports=a.p+"img/spain.47d1d5c8.png"},ea5e:function(t,e,a){t.exports=a.p+"img/OLScover.a0d5efee.png"},f1e4:function(t,e,a){},f480:function(t,e,a){"use strict";var n=a("1b3a"),r=a.n(n);r.a},fbea:function(t,e,a){t.exports=a.p+"img/ticlab.f8364252.png"},fc12:function(t,e,a){}});
//# sourceMappingURL=app.f01beddb.js.map