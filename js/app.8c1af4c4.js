(function(e){function t(t){for(var n,l,i=t[0],o=t[1],c=t[2],p=0,d=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&d.push(a[l][0]),a[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var o=r[i];0!==a[o]&&(n=!1)}n&&(s.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={app:0},s=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/jeerank/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=o;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("v-spacer"),r("div",{staticClass:"d-flex align-center text-h6 font-weight-bold"},[r("h3",[e._v(" JEE Main 2022 Percentile Vs Rank")])]),r("v-spacer")],1),r("v-main",[r("router-view")],1),r("Footer")],1)},s=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-footer",{attrs:{color:"primary lighten-1",padless:""}},[r("v-row",{attrs:{justify:"center","no-gutters":""}},[r("v-col",{staticClass:"primary lighten-1 py-4 text-center white--text",attrs:{cols:"12"}},[r("v-btn",{staticClass:"white--text",attrs:{href:"https://www.youtube.com/c/KiranKisku",target:"_blank",text:""}},[e._v(" © "+e._s((new Date).getFullYear())+" - "),r("v-icon",[e._v("mdi-youtube")]),r("strong",[e._v("Kiran Kisku")])],1)],1)],1)],1)},i=[],o={name:"Footer"},c=o,u=r("2877"),p=r("6544"),d=r.n(p),v=r("8336"),h=r("62ad"),f=r("553a"),k=r("132d"),m=r("0fd9"),b=Object(u["a"])(c,l,i,!1,null,null,null),g=b.exports;d()(b,{VBtn:v["a"],VCol:h["a"],VFooter:f["a"],VIcon:k["a"],VRow:m["a"]});var y={name:"App",components:{Footer:g},data:()=>({}),methods:{about(){this.$router.push("/about")},home(){this.$router.push("/")}}},_=y,x=r("7496"),w=r("40dc"),C=r("f6c4"),V=r("2fa4"),R=Object(u["a"])(_,a,s,!1,null,null,null),j=R.exports;d()(R,{VApp:x["a"],VAppBar:w["a"],VMain:C["a"],VSpacer:V["a"]});var M=r("8c4f"),O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("RankCalculator",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},P=[],$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"600"}},[r("v-toolbar",{attrs:{color:"primary",dark:"",dense:"",flat:""}},[r("v-toolbar-title",{staticClass:"text-body-4 font-weight-bold"},[e._v(" Rank Calculator ")])],1),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("br"),r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12",sm:"6","offset-sm":"3"}},[r("v-text-field",{attrs:{type:"number",rules:e.percRules,label:"NTA Score/Percentile",required:"",outlined:"",dense:""},model:{value:e.percentile,callback:function(t){e.percentile=t},expression:"percentile"}})],1)],1),r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12",sm:"6","offset-sm":"3"}},[r("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"primary"},on:{click:e.submit}},[e._v(" Submit ")]),r("v-btn",{staticClass:"mr-4",attrs:{outlined:"",color:"primary"},on:{click:e.reset}},[e._v(" Reset ")])],1)],1),r("v-row",{directives:[{name:"show",rawName:"v-show",value:e.rankMessage,expression:"rankMessage"}],staticClass:"text-center"},[r("v-col",{attrs:{cols:"12",sm:"6","offset-sm":"3"}},[r("h2",[e._v(e._s(e.rankMessage))]),r("v-rating",{attrs:{"background-color":"indigo lighten-3",color:"indigo"},model:{value:e.rating,callback:function(t){e.rating=t},expression:"rating"}})],1)],1),r("br"),r("br")],1)],1)],1),r("br"),r("v-data-table",{staticClass:"elevation-2",attrs:{headers:e.headers,items:e.rankRangeList,"item-key":"text","items-per-page":5}})],1)},T=[],E={name:"RankCalculator",data:()=>({vm:void 0,rating:0,rankMessage:"",exam_session:!0,your_rank:null,valid:!0,percentile:"",students:769589,percRules:[e=>!!e||"Percentile is required",e=>e&&e.length<=10||"Percentile must be less than 10 characters",e=>e>=0&&e<=100||"Percentile range is 0 - 100"],headers:[{text:"SN",align:"start",sortable:!1,value:"sn",width:"30%"},{text:"Percentile Range",value:"percentile",width:"35%"},{text:"Expected All India CRL Rank",value:"rank",width:"35%"}],rankRangeList:[{sn:"1.",percentile:"100 - 99.50",rank:"1 - 3848"},{sn:"2.",percentile:"99.50 - 99.00",rank:"3848 - 7696"},{sn:"3.",percentile:"99.00 - 98.50",rank:"7696 - 11544"},{sn:"4.",percentile:"98.50 - 98.00",rank:"11544 - 15392"},{sn:"5.",percentile:"98.00 - 97.50",rank:"15392 - 19240"},{sn:"6.",percentile:"97.50 - 97.00",rank:"19240 - 23088"},{sn:"7.",percentile:"97.00 - 96.50",rank:"23088 - 26936"},{sn:"8.",percentile:"96.50 - 96.00",rank:"26936 - 30784"},{sn:"9.",percentile:"96.00 - 95.50",rank:"30784 - 34632"},{sn:"10.",percentile:"95.50 - 95.00",rank:"34632 - 38479"},{sn:"11.",percentile:"95.00 - 94.50",rank:"38479 - 42327"},{sn:"12.",percentile:"94.50 - 94.00",rank:"42327 - 46175"},{sn:"13.",percentile:"94.00 - 93.50",rank:"46175 - 50023"},{sn:"14.",percentile:"93.50 - 93.00",rank:"50023 - 53871"},{sn:"15.",percentile:"93.00 - 92.50",rank:"53871 - 57719"},{sn:"16.",percentile:"92.50 - 92.00",rank:"57719 - 61567"},{sn:"17.",percentile:"92.00 - 91.50",rank:"61567 - 65415"},{sn:"18.",percentile:"91.50 - 91.00",rank:"65415 - 69263"},{sn:"19.",percentile:"91.00 - 90.50",rank:"69263 - 73111"},{sn:"20.",percentile:"90.50 - 90.00",rank:"73111 - 76959"},{sn:"21.",percentile:"90.00 - 89.50",rank:"76959 - 80807"},{sn:"22.",percentile:"89.50 - 89.00",rank:"80807 - 84655"},{sn:"23.",percentile:"89.00 - 88.50",rank:"84655 - 88503"},{sn:"24.",percentile:"88.50 - 88.00",rank:"88503 - 92351"},{sn:"25.",percentile:"88.00 - 87.50",rank:"92351 - 96199"},{sn:"26.",percentile:"87.50 - 87.00",rank:"96199 - 100047"},{sn:"27.",percentile:"87.00 - 86.50",rank:"100047 - 103895"},{sn:"28.",percentile:"86.5 - 80.00",rank:"103895 - 153918"},{sn:"29.",percentile:"80.00 - 70.00",rank:"153918 - 230877"},{sn:"30.",percentile:"70.00 - 60.00",rank:"230877 - 307836"},{sn:"31.",percentile:"60.00 - 50.00",rank:"307836 - 384795"},{sn:"32.",percentile:"50.00 - 40.00",rank:"384795 - 461753"},{sn:"33.",percentile:"40.00 - 30.00",rank:"461753 - 538712"},{sn:"34.",percentile:"30.00 - 20.00",rank:"538712 - 615671"},{sn:"35.",percentile:"20.00 - 10.00",rank:"615671 - 692630"},{sn:"36.",percentile:"10.00 - 0.00",rank:"692630 - 769589"}]}),methods:{submit(){this.$refs.form.validate(),this.rankCal(),null===this.percentile||""===this.percentile?this.rankMessage="":this.rankMessage="Expected CRL : "+this.your_rank,this.ratingCal(this.your_rank)},reset(){this.your_rank=null,this.rating=0,this.rankMessage="",this.$refs.form.reset(),this.$refs.form.resetValidation()},rankCal(){null===this.percentile||""===this.percentile?(this.your_rank=null,this.rankMessage=""):100===Number(this.percentile)?this.your_rank=1:this.your_rank=Math.round((100-this.percentile)*(this.students/100))},ratingCal(e){this.rating=e<5e3?5:e<3e4?4:e<1e5?3:e<25e4?2:e<5e5?1:0},rankRangeCal(e,t){return Math.round((e-99)*(this.students/100))+" - "+Math.round((t-98)*(this.students/100))}}},S=E,A=r("b0af"),F=r("99d9"),K=r("a523"),L=r("8fea"),N=r("4bd4"),B=r("1d4d"),J=r("8654"),q=r("71d9"),D=r("2a7f"),H=Object(u["a"])(S,$,T,!1,null,null,null),I=H.exports;d()(H,{VBtn:v["a"],VCard:A["a"],VCardText:F["a"],VCol:h["a"],VContainer:K["a"],VDataTable:L["a"],VForm:N["a"],VRating:B["a"],VRow:m["a"],VTextField:J["a"],VToolbar:q["a"],VToolbarTitle:D["a"]});var Y={name:"Home",components:{RankCalculator:I}},z=Y,W=Object(u["a"])(z,O,P,!1,null,null,null),G=W.exports,Q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},U=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("This is an about page")])])}],X={},Z=Object(u["a"])(X,Q,U,!1,null,null,null),ee=Z.exports;n["a"].use(M["a"]);const te=[{path:"/",name:"Home",component:G},{path:"/about",name:"About",component:ee}],re=new M["a"]({routes:te});var ne=re,ae=r("2f62");n["a"].use(ae["a"]);var se=new ae["a"].Store({state:{},mutations:{},actions:{},modules:{}}),le=r("f309");n["a"].use(le["a"]);var ie=new le["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:ne,store:se,vuetify:ie,render:e=>e(j)}).$mount("#app")}});
//# sourceMappingURL=app.8c1af4c4.js.map