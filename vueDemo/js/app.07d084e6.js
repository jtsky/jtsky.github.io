(function(t){function e(e){for(var o,i,l=e[0],s=e[1],c=e[2],f=0,d=[];f<l.length;f++)i=l[f],r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vueDemo/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"46bf":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("FrameWork",{attrs:{msg:t.msg,title:t.title,footer:t.footer}},[n("template",{slot:"header"},[n("div",[t._v("sss")])]),n("template",{slot:"content"},[n("Card",{staticClass:"my-card"},[n("div",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:"logo.png"}}),n("h3",[t._v("A high quality UI Toolkit based on Vue.js")])])]),n("Button",{attrs:{type:"primary"},on:{click:t.getGankDatas}},[t._v("点击")]),n("ul",t._l(t.ganks,function(e){return n("li",{key:e._id},[t._v("\n          "+t._s(e.desc)+"\n        ")])})),n("Modal",{attrs:{title:"Common Modal dialog box title"},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[n("p",[t._v("Content of dialog")]),n("p",[t._v("Content of dialog")]),n("p",[t._v("Content of dialog")])])],1),n("template",{slot:"footer"})],2)],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("h1",[t._v(t._s(t.msg))]),n("Header",{staticClass:"my-header"},[n("h1",[t._v(t._s(t.title))]),t._t("header")],2),n("Content",[t._t("content")],2),n("Footer",[n("h1",[t._v(t._s(t.footer))]),t._t("footer")],2)],1)},l=[],s={name:"FrameWork",props:{msg:String,title:String,footer:String}},c=s,u=(n("bfae"),n("2877")),f=Object(u["a"])(c,i,l,!1,null,"00d937aa",null);f.options.__file="FrameWork.vue";var d=f.exports,p={name:"app",components:{FrameWork:d},data:function(){return{modal1:!1,msg:"我是自定义页面框架",title:"我是标题",footer:"我是foot",ganks:[]}},methods:{ok:function(){this.$Message.info("Clicked ok")},cancel:function(){this.$Message.info("Clicked cancel")},getGankDatas:function(){var t=this;t.$http.get("".concat(this.HOST,"/api/data/Android/10/1")).then(function(e){var n=e.data;n.error||(console.log(n.results),console.log(t),t.ganks=n.results)}).catch(function(t){console.log(t)})}}},g=p,v=(n("f88f"),Object(u["a"])(g,r,a,!1,null,"002ca12b",null));v.options.__file="App.vue";var m=v.exports,h=n("e069"),_=n.n(h),b=n("bc3a"),y=n.n(b),k=n("a7fe"),O=n.n(k);n("dcad");o["default"].config.productionTip=!1,o["default"].use(_.a,{transfer:!0,size:"large"}),o["default"].use(O.a,y.a),o["default"].prototype.HOST="http://gank.io",new o["default"]({render:function(t){return t(m)}}).$mount("#app")},be7a:function(t,e,n){},bfae:function(t,e,n){"use strict";var o=n("be7a"),r=n.n(o);r.a},f88f:function(t,e,n){"use strict";var o=n("46bf"),r=n.n(o);r.a}});
//# sourceMappingURL=app.07d084e6.js.map