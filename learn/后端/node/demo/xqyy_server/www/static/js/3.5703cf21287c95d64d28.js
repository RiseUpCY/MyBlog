webpackJsonp([3],{"70I1":function(t,e){},"9XdS":function(t,e){},MRHf:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={props:{big:{type:Boolean,default:!1}},mounted:function(){this.initMap()},methods:{gocenter:function(){this.map.panTo(new BMap.Point(106.87161,29.456955))},initMap:function(){this.map=new BMap.Map("bmap");var t=new BMap.Point(106.87161,29.456955);this.map.centerAndZoom(t,18),this.map.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]})),this.map.setCurrentCity("重庆"),this.map.enableScrollWheelZoom(!0);new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT}),new BMap.NavigationControl,new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL});if(this.big){var e=new BMap.OverviewMapControl,a=new BMap.OverviewMapControl({isOpen:!0,anchor:BMAP_ANCHOR_BOTTOM_RIGHT});this.map.addControl(e),this.map.addControl(a),this.setMesWindow(t)}if(!this.big){var s=new BMap.Marker(t);this.map.addOverlay(s),s.setAnimation(BMAP_ANIMATION_BOUNCE)}var i=new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE,enableGeolocation:!0});this.map.addControl(i);var n=new BMap.GeolocationControl;n.addEventListener("locationSuccess",function(t){t.addressComponent.province,t.addressComponent.city,t.addressComponent.district,t.addressComponent.street,t.addressComponent.streetNumber}),n.addEventListener("locationError",function(t){alert(t.message)}),this.map.addControl(n)},setMesWindow:function(t){var e=null;e=new BMapLib.SearchInfoWindow(this.map,'<div style="margin:0;line-height:20px;padding:2px;">\n             <img src="https://p.ssl.qhimg.com/sdm/242_150_/t01dd750f555287da41.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>\n             地址：重庆市南川区东泉镇正街102号<br/>电话：(023)66450999<br/>简介：世界珍稀命名级氟泉锶泉-原汤天然温泉-秀泉映月温泉。\n             </div>',{title:"秀泉映月温泉花园酒店",width:290,height:105,panel:"panel",enableAutoPan:!0,searchTypes:[BMAPLIB_TAB_SEARCH,BMAPLIB_TAB_TO_HERE,BMAPLIB_TAB_FROM_HERE]});var a=new BMap.Marker(t);a.enableDragging(),e.open(a),this.map.addOverlay(a)}}},i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"bmap",attrs:{id:"bmap"}})},staticRenderFns:[]};var n={data:function(){return{showPage:{contact:!1,viewer:!1,message:!1},frameSrc:"http://api.map.baidu.com/pano/?ac=1&iec=0&showCatalog=1&indoorSceneSwitchControl=0&h=294.969558076627&p=0&pid=0902920000140806171258340IN&ak=Clo6QgwDUUHpwF7wX6Mw31IaLR0m2Dbw",noflashSrc:"https://map.baidu.com/#panoid=73afe301cf90b365a4c756bd&panotype=inter&heading=266&pitch=0&l=21&tn=B_NORMAL_MAP&sc=0&newmap=1&shareurl=1&pid=0902920000140806163815390IN&iid=73afe301cf90b365a4c756bd&psp=%7B%22PanoIndoorPoiModule%22%3A%7B%22uid%22%3A%22279e368eae3bb29dd7851f3e%22%7D%7D"}},mounted:function(){var t=this.$route.query,e=t.cateid,a=t.cateindex;this.selectShowPage(e,a)},methods:{selectShowPage:function(t,e){for(var a in this.showPage)this.showPage[a]=!1;0==e?this.showPage.contact=!0:1==e?(this.showPage.viewer=!0,this.initMap()):2==e&&(this.showPage.message=!0)},initMap:function(){if(navigator.userAgent.indexOf("MSIE")>0)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(t){this.frameSrc=this.noflashSrc}(navigator.userAgent.indexOf("Firefox")>0||navigator.userAgent.indexOf("Chrome")>0)&&(navigator.plugins["Shockwave Flash"]||(this.frameSrc=this.noflashSrc))}},components:{Bmap:a("VU/8")(s,i,!1,function(t){a("9XdS")},"data-v-3401f5d7",null).exports,Ibutton:a("d260").a}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"other"},[t.showPage.contact?[s("div",{staticClass:"map-wrapper"},[s("Bmap",{attrs:{big:!0}})],1),t._v(" "),s("div",{staticClass:"contact-way"},[s("div",{staticClass:"left"},[s("div",{staticClass:"sq"},[s("img",{attrs:{src:a("kspA"),alt:""}}),t._v(" "),s("p",[t._v("更多资讯扫一扫")]),t._v(" "),s("p",[t._v("加入我们的公众号")])]),t._v(" "),s("div",{staticClass:"sq"},[s("img",{attrs:{src:a("kspA"),alt:""}}),t._v(" "),s("p",[t._v("更多资讯扫一扫")]),t._v(" "),s("p",[t._v("加入我们的公众号")])])]),t._v(" "),t._m(0)])]:t._e(),t._v(" "),t.showPage.message?s("div",{staticClass:"contact-wrapper"},[t._m(1),t._v(" "),s("div",{staticClass:"message-board"},[t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("div",{staticClass:"btn"},[s("Ibutton",{attrs:{content:"提 交",big:!0}})],1)])]):t._e(),t._v(" "),t.showPage.viewer?s("div",{staticClass:"show-wrapper"},[s("iframe",{attrs:{src:t.frameSrc,frameborder:"0",width:"100%",height:"800"}})]):t._e()],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right"},[a("p",{staticClass:"title"},[t._v("预订服务热线: 023-66450999")]),t._v(" "),a("p",[t._v("咨询电话：023-66450999")]),t._v(" "),a("p",[t._v("传真：")]),t._v(" "),a("p",[t._v("地址：重庆市南川区东泉镇正街102号")]),t._v(" "),a("p",[t._v("微信公众号：重庆秀泉映月温泉花园酒店")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slogan"},[a("h1",{staticClass:"en"},[a("p",[t._v("ONLINE ")]),t._v(" "),a("p",[t._v("MESSAGE")])]),t._v(" "),a("h1",{staticClass:"cn"},[t._v("\n                在线留言\n            ")]),t._v(" "),a("p",{staticClass:"desc"},[t._v("\n                您的每一个建议"),a("br"),t._v("都是我们服务的方向\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("span",[this._v("姓名:")]),this._v(" "),e("input",{attrs:{type:"text",placeholder:"请输入您的姓名"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("span",[this._v("电话:")]),this._v(" "),e("input",{attrs:{type:"text",placeholder:"请输入您的手机号码"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("span",[this._v("建议:")]),this._v(" "),e("input",{attrs:{type:"text",placeholder:"请提出你的建议"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("span",[this._v("描述:")]),this._v(" "),e("textarea",{attrs:{type:"text",placeholder:"请尽可能的描述您的建议",rows:"3"}})])}]};var o=a("VU/8")(n,r,!1,function(t){a("70I1")},"data-v-160a289e",null);e.default=o.exports}});
//# sourceMappingURL=3.5703cf21287c95d64d28.js.map