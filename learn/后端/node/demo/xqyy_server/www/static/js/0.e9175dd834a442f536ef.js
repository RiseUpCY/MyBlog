webpackJsonp([0],{"9bBU":function(e,t,a){a("mClu");var n=a("FeBl").Object;e.exports=function(e,t,a){return n.defineProperty(e,t,a)}},C4MV:function(e,t,a){e.exports={default:a("9bBU"),__esModule:!0}},MRHf:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),i=a.n(n),s=a("exGp"),r=a.n(s),o={props:{big:{type:Boolean,default:!1}},mounted:function(){this.initMap()},methods:{gocenter:function(){this.map.panTo(new BMap.Point(106.87161,29.456955))},initMap:function(){this.map=new BMap.Map("bmap");var e=new BMap.Point(106.87161,29.456955);this.map.centerAndZoom(e,18),this.map.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]})),this.map.setCurrentCity("重庆"),this.map.enableScrollWheelZoom(!0);new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT}),new BMap.NavigationControl,new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL});if(this.big){var t=new BMap.OverviewMapControl,a=new BMap.OverviewMapControl({isOpen:!0,anchor:BMAP_ANCHOR_BOTTOM_RIGHT});this.map.addControl(t),this.map.addControl(a),this.setMesWindow(e)}if(!this.big){var n=new BMap.Marker(e);this.map.addOverlay(n),n.setAnimation(BMAP_ANIMATION_BOUNCE)}var i=new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE,enableGeolocation:!0});this.map.addControl(i);var s=new BMap.GeolocationControl;s.addEventListener("locationSuccess",function(e){e.addressComponent.province,e.addressComponent.city,e.addressComponent.district,e.addressComponent.street,e.addressComponent.streetNumber}),s.addEventListener("locationError",function(e){alert(e.message)}),this.map.addControl(s)},setMesWindow:function(e){var t=null;t=new BMapLib.SearchInfoWindow(this.map,'<div style="margin:0;line-height:20px;padding:2px;">\n             <img src="https://p.ssl.qhimg.com/sdm/242_150_/t01dd750f555287da41.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>\n             地址：重庆市巴南区东泉镇正街102号<br/>电话：(023)66450999<br/>简介：世界珍稀命名级氟泉锶泉-原汤天然温泉-秀泉映月温泉。\n             </div>',{title:"秀泉映月温泉花园酒店",width:290,height:105,panel:"panel",enableAutoPan:!0,searchTypes:[BMAPLIB_TAB_SEARCH,BMAPLIB_TAB_TO_HERE,BMAPLIB_TAB_FROM_HERE]});var a=new BMap.Marker(e);a.enableDragging(),t.open(a),this.map.addOverlay(a)}}},c={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"bmap",attrs:{id:"bmap"}})},staticRenderFns:[]};var l=a("VU/8")(o,c,!1,function(e){a("mmen")},"data-v-972b6758",null).exports,h=a("d260"),d=a("Zrlr"),p=a.n(d),v=a("wxAW"),u=a.n(v),m=function(){function e(t){var a=t.el,n=t.width,i=t.height,s=t.len,r=t.lines,o=t.dots;p()(this,e),this.el=a,this.width=n||this.el.offsetWidth,this.height=i||this.el.offsetHeight,this.len=s||Math.floor(this.el.offsetWidth/30),this.lines=r||5,this.dots=o||40,this.code="",this.init()}return u()(e,[{key:"init",value:function(){var e=this;this.draw(),this.el.onclick=function(t){t.preventDefault(),e.draw()}}},{key:"draw",value:function(){var e=this.width,t=this.height,a=this.el.getContext("2d");a.fillStyle=this.makeColor(150,240),a.fillRect(0,0,e,t);for(var n=this.makeCode(),i=0;i<this.len;i++)a.save(),a.font=n[i].fontSize+"px Simhei",a.fillStyle=this.makeColor(80,120),a.translate(25*i+25,25),a.rotate(n[i].deg*Math.PI/180),a.fillText(n[i].str,-10,8),a.restore();this.makeLine(a,this.lines),this.makeDot(a,this.dots)}},{key:"makeCode",value:function(){var e=[];this.code="";for(var t="ABCDEFGHIJKLIMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwxyz1234567890",a=0;a<this.len;a++){var n=t[this.makeNum(0,t.length-1)];this.code+=n;var i=this.makeNum(20,40),s=this.makeNum(-35,35);e.push({str:n,fontSize:i,deg:s})}return e}},{key:"makeLine",value:function(e,t){for(var a=this.makeNum,n=this.width,i=this.height,s=0;s<t;s++)e.beginPath(),e.moveTo(a(0,n),a(0,i)),e.lineTo(a(0,n),a(0,i)),e.strokeStyle=this.makeColor(140,230),e.closePath(),e.stroke()}},{key:"makeDot",value:function(e,t){for(var a=this.makeNum,n=this.width,i=this.height,s=0;s<t;s++)e.beginPath(),e.arc(a(0,n),a(0,i),a(1,2),0,2*Math.PI),e.closePath(),e.fillStyle=this.makeColor(150,200),e.fill()}},{key:"makeNum",value:function(e,t){return Math.ceil(Math.random()*(t-e+1)+e-1)}},{key:"makeColor",value:function(e,t){var a=this.makeNum;return"rgb("+a(e,t)+", "+a(e,t)+", "+a(e,t)+")"}}]),e}(),f=a("gyMJ"),g={data:function(){return{vercode:"",qrcode:"",contactData:{lineone:"023-66450999 023-66450999 023-66450999 023-66450999 023-66450999",linetwo:"传真：",linethree:"地址：重庆市南川区东泉镇正街102号",linefour:"微信公众号：重庆秀泉映月温泉花园酒店"},message:{name:"",telphone:"",title:"",describle:""},showPage:{contact:!1,viewer:!1,message:!1},frameSrc:"http://api.map.baidu.com/pano/?ac=1&iec=0&showCatalog=1&indoorSceneSwitchControl=0&h=294.969558076627&p=0&pid=0902920000140806171258340IN&ak=Clo6QgwDUUHpwF7wX6Mw31IaLR0m2Dbw",noflashSrc:"https://map.baidu.com/#panoid=73afe301cf90b365a4c756bd&panotype=inter&heading=266&pitch=0&l=21&tn=B_NORMAL_MAP&sc=0&newmap=1&shareurl=1&pid=0902920000140806163815390IN&iid=73afe301cf90b365a4c756bd&psp=%7B%22PanoIndoorPoiModule%22%3A%7B%22uid%22%3A%22279e368eae3bb29dd7851f3e%22%7D%7D"}},mounted:function(){var e=this.$route.query,t=e.cateid,a=e.cateindex;this.selectShowPage(t,a)},methods:{selectShowPage:function(e,t){for(var a in this.showPage)this.showPage[a]=!1;7===e&&0==t?(this.showPage.contact=!0,this.initContact()):3===e&&1==t?(this.showPage.viewer=!0,this.initMap()):7===e&&1==t&&(this.showPage.message=!0,this.initCanvas())},initMap:function(){if(navigator.userAgent.indexOf("MSIE")>0)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(e){this.frameSrc=this.noflashSrc}(navigator.userAgent.indexOf("Firefox")>0||navigator.userAgent.indexOf("Chrome")>0)&&(navigator.plugins["Shockwave Flash"]||(this.frameSrc=this.noflashSrc))},initContact:function(){this.getQr(),this.getConta()},initCanvas:function(){var e=this;this.$nextTick(function(){e.v=new m({el:e.$refs.canvas})})},handleSubmit:function(){var e=this;return r()(i.a.mark(function t(){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((a=e.message).name||a.title||a.describle){t.next=4;break}return alert("请输入完整信息"),t.abrupt("return");case 4:if(/^\d*$/.test(a.telphone)){t.next=8;break}return alert("电话号码输入有误"),a.telphone="",t.abrupt("return");case 8:if(!new RegExp("^"+e.v.code+"$","i").test(e.vercode)){t.next=19;break}return t.next=12,Object(f.l)(a);case 12:alert("感谢您的留言，我们会根据你的建议改善"),a.name="",a.title="",a.telphone="",a.describle="",t.next=23;break;case 19:alert("验证码错误"),e.v.draw(),a.name="",a.title="";case 23:case"end":return t.stop()}},t,e)}))()},getQr:function(){var e=this;return r()(i.a.mark(function t(){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.k)();case 2:a=t.sent,e.qrcode=a.imgUrl;case 4:case"end":return t.stop()}},t,e)}))()},getConta:function(){var e=this;return r()(i.a.mark(function t(){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.c)();case 2:(a=t.sent)&&(e.contactData=a);case 4:case"end":return t.stop()}},t,e)}))()}},components:{Bmap:l,Ibutton:h.a}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"other"},[e.showPage.contact?[a("div",{staticClass:"map-wrapper"},[a("Bmap",{attrs:{big:!0}})],1),e._v(" "),a("div",{staticClass:"contact-way"},[a("div",{staticClass:"left"},[a("div",{staticClass:"sq"},[a("img",{attrs:{src:e.qrcode,alt:"微信公众号：重庆秀泉映月温泉花园酒店"}}),e._v(" "),a("p",[e._v("更多资讯扫一扫")]),e._v(" "),a("p",[e._v("加入我们的公众号")])])]),e._v(" "),a("div",{staticClass:"right"},[a("p",{staticClass:"title"},[a("span",{staticClass:"number"},[e._v(e._s(e.contactData.lineone))])]),e._v(" "),a("p",{staticClass:"title"},[a("span",{staticClass:"number"},[e._v(e._s(e.contactData.linetwo))])]),e._v(" "),a("p",[e._v(e._s(e.contactData.linethree))]),e._v(" "),a("p",[e._v(e._s(e.contactData.linefour))]),e._v(" "),a("p",[e._v("地址：重庆市南川区东泉镇正街102号")])])])]:e._e(),e._v(" "),e.showPage.message?a("div",{staticClass:"contact-wrapper"},[e._m(0),e._v(" "),a("div",{staticClass:"message-board"},[a("div",{staticClass:"item"},[a("span",[e._v("姓名:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.message.name,expression:"message.name"}],attrs:{type:"text",placeholder:"请输入您的姓名"},domProps:{value:e.message.name},on:{input:function(t){t.target.composing||e.$set(e.message,"name",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"item"},[a("span",[e._v("电话:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.message.telphone,expression:"message.telphone"}],attrs:{type:"text",placeholder:"请输入您的手机号码"},domProps:{value:e.message.telphone},on:{input:function(t){t.target.composing||e.$set(e.message,"telphone",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"item"},[a("span",[e._v("建议:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.message.title,expression:"message.title"}],attrs:{type:"text",placeholder:"请提出你的建议"},domProps:{value:e.message.title},on:{input:function(t){t.target.composing||e.$set(e.message,"title",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"item"},[a("span",[e._v("描述:")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message.describle,expression:"message.describle"}],attrs:{type:"text",placeholder:"请尽可能的描述您的建议",rows:"3"},domProps:{value:e.message.describle},on:{input:function(t){t.target.composing||e.$set(e.message,"describle",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"btn"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.vercode,expression:"vercode"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:e.vercode},on:{input:function(t){t.target.composing||(e.vercode=t.target.value)}}}),e._v(" "),a("canvas",{ref:"canvas",staticClass:"canvas",attrs:{height:"41",width:"120"}}),e._v(" "),a("Ibutton",{attrs:{content:"提 交",big:!0},on:{btnclick:e.handleSubmit}})],1)])]):e._e(),e._v(" "),e.showPage.viewer?a("div",{staticClass:"show-wrapper"},[a("iframe",{attrs:{src:e.frameSrc,frameborder:"0",width:"100%",height:"800"}})]):e._e()],2)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"slogan"},[a("h1",{staticClass:"en"},[a("p",[e._v("ONLINE ")]),e._v(" "),a("p",[e._v("MESSAGE")])]),e._v(" "),a("h1",{staticClass:"cn"},[e._v("\n                在线留言\n            ")]),e._v(" "),a("p",{staticClass:"desc"},[e._v("\n                您的每一个建议"),a("br"),e._v("都是我们服务的方向\n            ")])])}]};var w=a("VU/8")(g,_,!1,function(e){a("Njiu")},"data-v-49c9c09d",null);t.default=w.exports},Njiu:function(e,t){},Zrlr:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},mClu:function(e,t,a){var n=a("kM2E");n(n.S+n.F*!a("+E39"),"Object",{defineProperty:a("evD5").f})},mmen:function(e,t){},wxAW:function(e,t,a){"use strict";t.__esModule=!0;var n,i=a("C4MV"),s=(n=i)&&n.__esModule?n:{default:n};t.default=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s.default)(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}()}});