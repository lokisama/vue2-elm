webpackJsonp([48,46],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(250),u=r(o),a=n(851),i=r(a),s=n(321),c=r(s),d=n(324),f=r(d),l=n(21);n(319);var p=n(482),h=r(p),v=n(852),m=r(v);"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){h.default.attach(document.body)},!1),u.default.use(m.default),u.default.use(i.default);var _=new i.default({routes:c.default,mode:l.routerMode,strict:!1,scrollBehavior:function(e,t,n){return n?n:(t.meta.keepAlive&&(t.meta.savedPosition=document.body.scrollTop),{x:0,y:e.meta.savedPosition||0})}});new u.default({router:_,store:f.default}).$mount("#app")},20:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.changePassword=t.signout=t.accountRegister=t.accountLogin=t.deleteAddress=t.getSearchAddress=t.getAddressList=t.getOrderDetail=t.getOrderList=t.exChangeHongbao=t.getExpired=t.getHongbaoNum=t.vipCart=t.getService=t.payRequest=t.validateOrders=t.rePostVerify=t.placeOrders=t.postAddAddress=t.searchNearby=t.getAddress=t.getRemark=t.searchplace=t.addToCart=t.cancelMyStore=t.getMyStore=t.getStoreRate=t.getStoreInfo=t.sendMobile=t.checkExsis=t.getcaptchas=t.mobileCode=t.ratingTags=t.ratingScores=t.getRatingList=t.foodMenu=t.shopDetails=t.foodActivity=t.foodDelivery=t.foodCategory=t.searchRestaurant=t.shopList=t.msiteFoodTypes=t.msiteAdress=t.currentcity=t.groupcity=t.hotcity=t.cityGuess=void 0;var o=n(107),u=r(o),a=n(318),i=r(a);n(23),t.cityGuess=function(){return(0,i.default)("/v1/cities",{type:"guess"})},t.hotcity=function(){return(0,i.default)("/v1/cities",{type:"hot"})},t.groupcity=function(){return(0,i.default)("/v1/cities",{type:"group"})},t.currentcity=function(e){return(0,i.default)("/v1/cities/"+e)},t.msiteAdress=function(e){return(0,i.default)("/v2/pois/"+e)},t.msiteFoodTypes=function(e){return(0,i.default)("/v2/index_entry",{geohash:e,group_type:"1","flags[]":"F"})},t.shopList=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],c="";s.forEach(function(e){e.status&&(c+="&support_ids[]="+e.id)});var d={latitude:e,longitude:t,offset:n,limit:"20","extras[]":"activities",keyword:"",restaurant_category_id:r,"restaurant_category_ids[]":o,order_by:u,"delivery_mode[]":a+c};return(0,i.default)("/shopping/restaurants",d)},t.searchRestaurant=function(e,t){return(0,i.default)("/v4/restaurants",{"extras[]":"restaurant_activity",geohash:e,keyword:t,type:"search"})},t.foodCategory=function(e,t){return(0,i.default)("/shopping/v2/restaurant/category",{latitude:e,longitude:t})},t.foodDelivery=function(e,t){return(0,i.default)("/shopping/v1/restaurants/delivery_modes",{latitude:e,longitude:t,kw:""})},t.foodActivity=function(e,t){return(0,i.default)("/shopping/v1/restaurants/activity_attributes",{latitude:e,longitude:t,kw:""})},t.shopDetails=function(e,t,n){return(0,i.default)("/shopping/restaurant/"+e,{latitude:t,longitude:n+"&extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics"})},t.foodMenu=function(e){return(0,i.default)("/shopping/v2/menu",{restaurant_id:e})},t.getRatingList=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return(0,i.default)("/ugc/v2/restaurants/"+e+"/ratings",{has_content:!0,offset:t,limit:10,tag_name:n})},t.ratingScores=function(e){return(0,i.default)("/ugc/v2/restaurants/"+e+"/ratings/scores")},t.ratingTags=function(e){return(0,i.default)("/ugc/v2/restaurants/"+e+"/ratings/tags")},t.mobileCode=function(e){return(0,i.default)("/v4/mobile/verify_code/send",{mobile:e,scene:"login",type:"sms"},"POST")},t.getcaptchas=function(){return(0,i.default)("/v1/captchas",{},"POST")},t.checkExsis=function(e,t){var n;return(0,i.default)("/v1/users/exists",(n={},(0,u.default)(n,t,e),(0,u.default)(n,"type",t),n))},t.sendMobile=function(e,t,n,r){var o;return(0,i.default)("/v1/mobile/verify_code/send",(o={action:"send",captcha_code:t},(0,u.default)(o,n,e),(0,u.default)(o,"type","sms"),(0,u.default)(o,"way",n),(0,u.default)(o,"password",r),o),"POST")},t.getStoreInfo=function(e,t){return(0,i.default)("/v1/store/getInfo",{userId:e,storeId:t},"POST")},t.getStoreRate=function(e,t){return(0,i.default)("/v1/store/getRate",{userId:e,storeId:t},"POST")},t.getMyStore=function(e){return(0,i.default)("/v1/user/home",{userId:e})},t.cancelMyStore=function(e,t){return(0,i.default)("/v1/user/cancelMyStore",{userId:e,storeIds:t})},t.addToCart=function(e,t){return(0,i.default)("/v1/user/addToCart",{userId:e,storeIds:t},"POST")},t.searchplace=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;return(0,i.default)("/searchDpStore",{cityName:e,keywords:t,pageNo:n,pageSize:r})},t.getRemark=function(e,t){return(0,i.default)("/v1/carts/"+e+"/remarks",{sig:t})},t.getAddress=function(e,t){return(0,i.default)("/v1/carts/"+e+"/addresses",{sig:t})},t.searchNearby=function(e){return(0,i.default)("/v1/pois",{type:"nearby",keyword:e})},t.postAddAddress=function(e,t,n,r,o,u,a,s,c,d,f){return(0,i.default)("/v1/users/"+e+"/addresses",{address:t,address_detail:n,geohash:r,name:o,phone:u,phone_bk:a,poi_type:s,sex:c,tag:d,tag_type:f},"POST")},t.placeOrders=function(e,t,n,r,o,u,a){return(0,i.default)("/v1/users/"+e+"/carts/"+t+"/orders",{address_id:n,come_from:"mobile_web",deliver_time:"",description:r,entities:o,geohash:u,paymethod_id:1,sig:a},"POST")},t.rePostVerify=function(e,t,n){return(0,i.default)("/v1/carts/"+e+"/verify_code",{sig:t,type:n},"POST")},t.validateOrders=function(e){var t=e.user_id,n=e.cart_id,r=e.address_id,o=e.description,u=e.entities,a=e.geohash,s=e.sig,c=e.validation_code,d=e.validation_token;return(0,i.default)("/v1/users/"+t+"/carts/"+n+"/orders",{address_id:r,come_from:"mobile_web",deliver_time:"",description:o,entities:u,geohash:a,paymethod_id:1,sig:s,validation_code:c,validation_token:d},"POST")},t.payRequest=function(e,t){return(0,i.default)("/payapi/payment/queryOrder",{merchantId:5,merchantOrderNo:e,source:"MOBILE_WAP",userId:t,version:"1.0.0"})},t.getService=function(){return(0,i.default)("/v3/profile/explain")},t.vipCart=function(e,t,n){return(0,i.default)("/member/v1/users/"+e+"/delivery_card/physical_card/bind",{number:t,password:n},"POST")},t.getHongbaoNum=function(e){return(0,i.default)("/promotion/v2/users/"+e+"/hongbaos?limit=20&offset=0")},t.getExpired=function(e){return(0,i.default)("/promotion/v2/users/"+e+"/expired_hongbaos?limit=20&offset=0")},t.exChangeHongbao=function(e,t,n){return(0,i.default)("/v1/users/"+e+"/hongbao/exchange",{exchange_code:t,captcha_code:n},"POST")},t.getOrderList=function(e,t){return(0,i.default)("/bos/v2/users/"+e+"/orders",{limit:10,offset:t})},t.getOrderDetail=function(e,t){return(0,i.default)("/bos/v1/users/"+e+"/orders/"+t+"/snapshot")},t.getAddressList=function(e){return(0,i.default)("/v1/users/"+e+"/addresses")},t.getSearchAddress=function(e){return(0,i.default)("v1/pois",{keyword:e,type:"nearby"})},t.deleteAddress=function(e,t){return(0,i.default)("/v1/users/"+e+"/addresses/"+t,{},"DELETE")},t.accountLogin=function(e,t){return(0,i.default)("/v1/user/signin",{phone:e},"POST")},t.accountRegister=function(e,t){return(0,i.default)("/v1/user/signup",{phone:e,code:t},"POST")},t.signout=function(){return(0,i.default)("/v2/signout")},t.changePassword=function(e,t,n,r,o){return(0,i.default)("/v2/changepassword",{username:e,oldpassWord:t,newpassword:n,confirmpassword:r,captcha_code:o},"POST")}},21:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="http://vip.linkersocks.com:8890",o="history",u="http://images.cangdu.org/";t.baseUrl=r,t.routerMode=o,t.imgBaseUrl=u},23:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.animate=t.showBack=t.loadMore=t.getStyle=t.removeStore=t.getStore=t.setStore=void 0;var o=n(128),u=r(o),a=n(181),i=r(a),s=(t.setStore=function(e,t){e&&("string"!=typeof t&&(t=(0,i.default)(t)),window.localStorage.setItem(e,t))},t.getStore=function(e){if(e)return window.localStorage.getItem(e)},t.removeStore=function(e){e&&window.localStorage.removeItem(e)},t.getStyle=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"int",r=void 0;return r="scrollTop"===t?e.scrollTop:e.currentStyle?e.currentStyle[t]:document.defaultView.getComputedStyle(e,null)[t],"float"==n?parseFloat(r):parseInt(r)});t.loadMore=function e(t,n){var r=window.screen.height,o=void 0,u=void 0,a=void 0,i=void 0,c=void 0,d=void 0;document.body.addEventListener("scroll",function(){e()},!1),t.addEventListener("touchstart",function(){o=t.offsetHeight,u=t.offsetTop,a=s(t,"paddingBottom"),i=s(t,"marginBottom")},{passive:!0}),t.addEventListener("touchmove",function(){e()},{passive:!0}),t.addEventListener("touchend",function(){d=document.body.scrollTop,f()},{passive:!0});var f=function n(){c=requestAnimationFrame(function(){document.body.scrollTop!=d?(d=document.body.scrollTop,e(),n()):(cancelAnimationFrame(c),o=t.offsetHeight,e())})},e=function(){document.body.scrollTop+r>=o+u+a+i&&n()}},t.showBack=function(e){var t=void 0,n=void 0;document.addEventListener("scroll",function(){o()},!1),document.addEventListener("touchstart",function(){o()},{passive:!0}),document.addEventListener("touchmove",function(){o()},{passive:!0}),document.addEventListener("touchend",function(){n=document.body.scrollTop,r()},{passive:!0});var r=function e(){t=requestAnimationFrame(function(){document.body.scrollTop!=n?(n=document.body.scrollTop,e()):cancelAnimationFrame(t),o()})},o=function(){e(document.body.scrollTop>500?!0:!1)}},t.animate=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ease-out",o=arguments[4];clearInterval(e.timer),n instanceof Function?(o=n,n=400):n instanceof String&&(r=n,n=400),r instanceof Function&&(o=r,r="ease-out");var a=function(t){return"opacity"===t?Math.round(100*s(e,t,"float")):s(e,t)},i=parseFloat(document.documentElement.style.fontSize),c={},d={};(0,u.default)(t).forEach(function(e){/[^\d^\.]+/gi.test(t[e])?c[e]=t[e].match(/[^\d^\.]+/gi)[0]||"px":c[e]="px",d[e]=a(e)}),(0,u.default)(t).forEach(function(e){"rem"==c[e]?t[e]=Math.ceil(parseInt(t[e])*i):t[e]=parseInt(t[e])});var f=!0,l={};e.timer=setInterval(function(){(0,u.default)(t).forEach(function(u){var i=0,s=!1,c=a(u)||0,p=0,h=void 0;switch(r){case"ease-out":p=c,h=5*n/400;break;case"linear":p=d[u],h=20*n/400;break;case"ease-in":var v=l[u]||0;i=v+(t[u]-d[u])/n,l[u]=i;break;default:p=c,h=5*n/400}switch("ease-in"!==r&&(i=(t[u]-p)/h,i=i>0?Math.ceil(i):Math.floor(i)),r){case"ease-out":s=c!=t[u];break;case"linear":s=Math.abs(Math.abs(c)-Math.abs(t[u]))>Math.abs(i);break;case"ease-in":s=Math.abs(Math.abs(c)-Math.abs(t[u]))>Math.abs(i);break;default:s=c!=t[u]}s?(f=!1,"opacity"===u?(e.style.filter="alpha(opacity:"+(c+i)+")",e.style.opacity=(c+i)/100):"scrollTop"===u?e.scrollTop=c+i:e.style[u]=c+i+"px"):f=!0,f&&(clearInterval(e.timer),o&&o())})},20)}},180:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.RECORD_ADDRESS="RECORD_ADDRESS",t.ADD_CART="ADD_CART",t.REDUCE_CART="REDUCE_CART",t.INIT_BUYCART="INIT_BUYCART",t.CLEAR_CART="CLEAR_CART",t.RECORD_SHOPDETAIL="RECORD_SHOPDETAIL",t.RECORD_USERINFO="RECORD_USERINFO",t.GET_USERINFO="GET_USERINFO",t.CONFIRM_REMARK="CONFIRM_REMARK",t.CONFIRM_INVOICE="CONFIRM_INVOICE",t.CHOOSE_SEARCH_ADDRESS="CHOOSE_SEARCH_ADDRESS",t.SAVE_GEOHASH="SAVE_GEOHASH",t.CONFIRM_ADDRESS="CONFIRM_ADDRESS",t.CHOOSE_ADDRESS="CHOOSE_ADDRESS",t.NEED_VALIDATION="NEED_VALIDATION",t.SAVE_CART_ID_SIG="SAVE_CART_ID_SIG",t.SAVE_ORDER_PARAM="SAVE_ORDER_PARAM",t.CHANGE_ORDER_PARAM="CHANGE_ORDER_PARAM",t.ORDER_SUCCESS="ORDER_SUCCESS",t.SAVE_SHOPID="SAVE_SHOPID",t.SAVE_ORDER="SAVE_ORDER",t.OUT_LOGIN="OUT_LOGIN",t.RETSET_NAME="RETSET_NAME",t.SAVE_AVANDER="SAVE_AVANDER",t.SAVE_ADDDETAIL="SAVE_ADDDETAIL",t.SAVE_ADDRESS="SAVE_ADDRESS",t.SAVE_QUESTION="SAVE_QUESTION",t.ADD_ADDRESS="ADD_ADDRESS",t.BUY_CART="BUY_CART"},270:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},318:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(25),u=r(o),a=n(183),i=r(a),s=n(182),c=r(s),d=n(181),f=r(d),l=n(128),p=r(l),h=n(24),v=r(h),m=n(21);t.default=function(){var e=(0,v.default)(u.default.mark(function e(){var t,n,r,o,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(d=d.toUpperCase(),a=m.baseUrl+a,"GET"==d&&(t="",(0,p.default)(s).forEach(function(e){t+=e+"="+s[e]+"&"}),""!==t&&(t=t.substr(0,t.lastIndexOf("&")),a=a+"?"+t)),!window.fetch||"fetch"!=l){e.next=21;break}return n={credentials:"include",method:d,headers:{Accept:"application/json","Content-Type":"application/json"},mode:"cors",cache:"force-cache"},"POST"==d&&Object.defineProperty(n,"body",{value:(0,f.default)(s)}),e.prev=6,e.next=9,fetch(a,n);case 9:return r=e.sent,e.next=12,r.json();case 12:return o=e.sent,e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(6),new Error(e.t0);case 19:e.next=22;break;case 21:return e.abrupt("return",new c.default(function(e,t){var n=void 0;n=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject;var r="";"POST"==d&&(r=(0,f.default)(s)),n.open(d,a,!0),n.setRequestHeader("Content-type","application/json"),n.send(r),n.onreadystatechange=function(){if(4==n.readyState)if(200==n.status){var r=n.response;"object"!==("undefined"==typeof r?"undefined":(0,i.default)(r))&&(r=JSON.parse(r)),e(r)}else t(n)}}));case 22:case"end":return e.stop()}},e,void 0,[[6,16]])}));return function(){return e.apply(this,arguments)}}()},319:function(e,t){"use strict";!function(e,t){var n=e.documentElement,r="orientationchange"in window?"orientationchange":"resize",o=function(){var e=n.clientWidth;e&&(n.style.fontSize=20*(e/320)+"px")};e.addEventListener&&(t.addEventListener(r,o,!1),e.addEventListener("DOMContentLoaded",o,!1))}(document,window)},321:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(754),u=r(o),a=function(e){return n.e(42,function(){return e(n(778))})},i=function(e){return n.e(45,function(){return e(n(765))})},s=function(e){return n.e(1,function(){return e(n(780))})},c=function(e){return n.e(26,function(){return e(n(791))})},d=function(e){return n.e(2,function(){return e(n(797))})},f=function(e){return n.e(28,function(){return e(n(779))})},l=function(e){return n.e(19,function(){return e(n(790))})},p=function(e){return n.e(29,function(){return e(n(777))})},h=function(e){return n.e(3,function(){return e(n(782))})},v=function(e){return n.e(13,function(){return e(n(781))})},m=function(e){return n.e(32,function(){return e(n(801))})},_=function(e){return n.e(35,function(){return e(n(798))})},g=function(e){return n.e(27,function(){return e(n(799))})},S=function(e){return n.e(40,function(){return e(n(800))})},E=function(e){return n.e(4,function(){return e(n(776))})},A=function(e){return n.e(7,function(){return e(n(773))})},R=function(e){return n.e(21,function(){return e(n(771))})},y=function(e){return n.e(24,function(){return e(n(770))})},D=function(e){return n.e(30,function(){return e(n(772))})},O=function(e){return n.e(43,function(){return e(n(769))})},I=function(e){return n.e(17,function(){return e(n(768))})},T=function(e){return n.e(25,function(){return e(n(766))})},b=function(e){return n.e(44,function(){return e(n(767))})},C=function(e){return n.e(5,function(){return e(n(795))})},M=function(e){return n.e(36,function(){return e(n(796))})},w=function(e){return n.e(33,function(){return e(n(794))})},P=function(e){return n.e(15,function(){return e(n(788))})},L=function(e){return n.e(37,function(){return e(n(789))})},N=function(e){return n.e(39,function(){return e(n(785))})},x=function(e){return n.e(22,function(){return e(n(786))})},k=function(e){return n.e(38,function(){return e(n(787))})},V=function(e){return n.e(18,function(){return e(n(757))})},H=function(e){return n.e(11,function(){return e(n(758))})},U=function(e){return n.e(6,function(){return e(n(759))})},F=function(e){return n.e(10,function(){return e(n(761))})},G=function(e){return n.e(8,function(){return e(n(763))})},j=function(e){return n.e(14,function(){return e(n(764))})},B=function(e){return n.e(31,function(){return e(n(762))})},q=function(e){return n.e(12,function(){return e(n(760))})},Y=function(e){return n.e(16,function(){return e(n(784))})},z=function(e){return n.e(9,function(){return e(n(783))})},$=function(e){return n.e(41,function(){return e(n(793))})},J=function(e){return n.e(34,function(){return e(n(792))})},K=function(e){return n.e(20,function(){return e(n(775))})},Q=function(e){return n.e(23,function(){return e(n(774))})},W=function(e){return n.e(0,function(){return e(n(756))})};t.default=[{path:"/",component:u.default,children:[{path:"",redirect:"/shop"},{path:"/home",component:a},{path:"/city/:cityid",component:i},{path:"/msite",component:s,meta:{keepAlive:!0}},{path:"/food",component:E},{path:"/search/:geohash",component:c},{path:"/shop",component:d,children:[{path:"foodDetail",component:C},{path:"shopDetail",component:M,children:[{path:"shopSafe",component:w}]}]},{path:"/confirmOrder",component:A,children:[{path:"remark",component:R},{path:"invoice",component:O},{path:"payment",component:y},{path:"userValidation",component:D},{path:"chooseAddress",component:I,children:[{path:"addAddress",component:T,children:[{path:"searchAddress",component:b}]}]}]},{path:"/login",component:f},{path:"/profile",component:l,children:[{path:"info",component:P,children:[{path:"address",component:N,children:[{path:"add",component:x,children:[{path:"addDetail",component:k}]}]}]},{path:"setusername",component:L},{path:"service",component:$}]},{path:"/forget",component:p},{path:"/order",component:h,children:[{path:"orderDetail",component:v}]},{path:"/vipcard",component:m,children:[{path:"invoiceRecord",component:_},{path:"useCart",component:g},{path:"vipDescription",component:S}]},{path:"/find",component:K},{path:"/download",component:Q},{path:"/service",component:$,children:[{path:"questionDetail",component:J}]},{path:"balance",component:V,children:[{path:"detail",component:H}]},{path:"benefit",component:U,children:[{path:"coupon",component:F},{path:"hbDescription",component:G},{path:"hbHistory",component:j},{path:"exchange",component:B},{path:"commend",component:q}]},{path:"points",component:Y,children:[{path:"detail",component:z}]},{path:"/analytics",component:W}]}]},322:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(25),u=r(o),a=n(24),i=r(a),s=n(20),c=n(180);t.default={getUserInfo:function(e){var t=this,n=e.commit;e.state;return(0,i.default)(u.default.mark(function e(){var r;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.getUser)();case 2:r=e.sent,n(c.GET_USERINFO,r);case 4:case"end":return e.stop()}},e,t)}))()},saveAddress:function(e){var t=this,n=e.commit,r=e.state;return(0,i.default)(u.default.mark(function e(){var o;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r.removeAddress.length>0)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,s.getAddressList)(r.userInfo.user_id);case 4:o=e.sent,n(c.SAVE_ADDRESS,o);case 6:case"end":return e.stop()}},e,t)}))()}}},323:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},324:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(250),u=r(o),a=n(6),i=r(a),s=n(325),c=r(s),d=n(322),f=r(d),l=n(323),p=r(l);u.default.use(i.default);var h={latitude:"",longitude:"",cartList:{},shopDetail:null,userInfo:null,shopid:null,remarkText:null,inputText:"",invoice:!1,newAddress:[],searchAddress:null,geohash:"wtw3sm0q087",choosedAddress:null,addressIndex:null,needValidation:null,cartId:null,sig:null,orderParam:null,orderMessage:null,orderDetail:null,login:!0,imgPath:null,removeAddress:[],addAddress:"",question:null,cartPrice:null};t.default=new i.default.Store({state:h,getters:p.default,actions:f.default,mutations:c.default})},325:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o,u=n(107),a=r(u),i=n(83),s=r(i),c=n(92),d=r(c),f=n(7),l=r(f),p=n(180),h=n(23);n(21);t.default=(o={},(0,a.default)(o,p.RECORD_ADDRESS,function(e,t){var n=t.latitude,r=t.longitude;e.latitude=n,e.longitude=r}),(0,a.default)(o,p.RECORD_SHOPDETAIL,function(e,t){e.shopDetail=t}),(0,a.default)(o,p.ADD_CART,function(e,t){var n=t.shopid,r=t.category_id,o=t.item_id,u=t.food_id,a=t.name,i=t.price,s=t.specs,c=t.packing_fee,d=t.sku_id,f=t.stock,p=e.cartList,v=p[n]=p[n]||{},m=v[r]=v[r]||{},_=m[o]=m[o]||{};_[u]?_[u].num++:_[u]={num:1,id:u,name:a,price:i,specs:s,packing_fee:c,sku_id:d,stock:f},e.cartList=(0,l.default)({},p),(0,h.setStore)("buyCart",e.cartList)}),(0,a.default)(o,p.REDUCE_CART,function(e,t){var n=t.shopid,r=t.category_id,o=t.item_id,u=t.food_id,a=(t.name,t.price,t.specs,e.cartList),i=a[n]||{},s=i[r]||{},c=s[o]||{};c&&c[u]&&(c[u].num>0?(c[u].num--,e.cartList=(0,l.default)({},a),(0,h.setStore)("buyCart",e.cartList)):c[u]=null)}),(0,a.default)(o,p.INIT_BUYCART,function(e){var t=(0,h.getStore)("buyCart");t&&(e.cartList=JSON.parse(t))}),(0,a.default)(o,p.CLEAR_CART,function(e,t){e.cartList[t]=null,e.cartList=(0,l.default)({},e.cartList),(0,h.setStore)("buyCart",e.cartList)}),(0,a.default)(o,p.RECORD_USERINFO,function(e,t){e.userInfo=t,e.login=!0,(0,h.setStore)("user_id",t.user_id)}),(0,a.default)(o,p.GET_USERINFO,function(e,t){e.userInfo&&e.userInfo.username!==t.username||e.login&&(t.message?e.userInfo=null:e.userInfo=(0,l.default)({},t))}),(0,a.default)(o,p.RETSET_NAME,function(e,t){e.userInfo=(0,d.default)({},e.userInfo,{username:t})}),(0,a.default)(o,p.SAVE_SHOPID,function(e,t){e.shopid=t}),(0,a.default)(o,p.CONFIRM_REMARK,function(e,t){var n=t.remarkText,r=t.inputText;e.remarkText=n,e.inputText=r}),(0,a.default)(o,p.CONFIRM_INVOICE,function(e,t){e.invoice=t}),(0,a.default)(o,p.CHOOSE_SEARCH_ADDRESS,function(e,t){e.searchAddress=t}),(0,a.default)(o,p.SAVE_GEOHASH,function(e,t){e.geohash=t}),(0,a.default)(o,p.CONFIRM_ADDRESS,function(e,t){e.newAddress.push(t)}),(0,a.default)(o,p.CHOOSE_ADDRESS,function(e,t){var n=t.address,r=t.index;e.choosedAddress=n,e.addressIndex=r}),(0,a.default)(o,p.NEED_VALIDATION,function(e,t){e.needValidation=t}),(0,a.default)(o,p.SAVE_CART_ID_SIG,function(e,t){var n=t.cart_id,r=t.sig;e.cart_id=n,e.sig=r}),(0,a.default)(o,p.SAVE_ORDER_PARAM,function(e,t){e.orderParam=t}),(0,a.default)(o,p.CHANGE_ORDER_PARAM,function(e,t){e.orderParam=(0,d.default)({},e.orderParam,t)}),(0,a.default)(o,p.ORDER_SUCCESS,function(e,t){e.cartPrice=null,e.orderMessage=t}),(0,a.default)(o,p.SAVE_ORDER,function(e,t){e.orderDetail=t}),(0,a.default)(o,p.OUT_LOGIN,function(e){e.userInfo={},e.login=!1}),(0,a.default)(o,p.SAVE_AVANDER,function(e,t){e.imgPath=t}),(0,a.default)(o,p.SAVE_ADDRESS,function(e,t){e.removeAddress=t}),(0,a.default)(o,p.SAVE_ADDDETAIL,function(e,t){e.addAddress=t}),(0,a.default)(o,p.SAVE_QUESTION,function(e,t){e.question=(0,l.default)({},t)}),(0,a.default)(o,p.ADD_ADDRESS,function(e,t){e.removeAddress=[t].concat((0,s.default)(e.removeAddress))}),(0,a.default)(o,p.BUY_CART,function(e,t){e.cartPrice=t}),o)},452:function(e,t){},754:function(e,t,n){n(452);var r=n(3)(n(270),n(822),null,null);e.exports=r.exports},822:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"router-fade",mode:"out-in"}},[n("keep-alive",[e.$route.meta.keepAlive?n("router-view"):e._e()],1)],1),e._v(" "),n("transition",{attrs:{name:"router-fade",mode:"out-in"}},[e.$route.meta.keepAlive?e._e():n("router-view")],1)],1)},staticRenderFns:[]}}});