webpackJsonp([4],{"I+55":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Xxa5"),r=n.n(a),c=n("exGp"),i=n.n(c),s=n("gyMJ"),o={data:function(){return{article:{}}},mounted:function(){var t=this.$route.query,e=t.cateid,n=t.cateindex;this.getArtData(e,n)},methods:{getArtData:function(t,e){var n=this;return i()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(s.a)(t,e);case 2:n.article=a.sent;case 3:case"end":return a.stop()}},a,n)}))()}},filters:{date:function(t){return(t=t?new Date(Number(t)):new Date(1545977032592)).toLocaleDateString().replace(/\//g,"-")}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article"},[n("h1",[t._v(t._s(t.article.title))]),t._v(" "),n("div",{staticClass:"cont",domProps:{innerHTML:t._s(t.article.content)}}),t._v(" "),n("div",{staticClass:"art-bottom"},[t._v("\n        "+t._s(t._f("date")(t.article.create_time))+"\n    ")])])},staticRenderFns:[]};var l=n("VU/8")(o,u,!1,function(t){n("o8le")},"data-v-50648f8e",null);e.default=l.exports},o8le:function(t,e){}});