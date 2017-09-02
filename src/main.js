import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import {routerMode} from './config/env'
import './config/rem'
import FastClick from 'fastclick'
// import Vue2Filters from 'vue2-filters'
import moment from 'moment/moment.js'
import weixin from 'weixin-js-sdk'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

// Vue.use(Vue2Filters)
Vue.use(VueRouter)
Vue.use(weixin)

Vue.filter('dateTime', function (value,format) {
    return moment(value).format(format || 'YYYY-MM-DD HH:mm');
});

const router = new VueRouter({
	routes,
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior (to, from, savedPosition) {
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition ||0}
		}
	}
})

weixin.config({debug:true,appId:'wx95ab74c069adc622',timestamp:1504328262,nonceStr:'7d9e9f1b-1a48-4788-a0c5-b79e41b3ab5d',signature:'008245500b0ffdeffc3ce4e5fa34d9f81687a719',jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone","chooseImage","previewImage","uploadImage","downloadImage","startRecord","stopRecord","onVoiceRecordEnd","playVoice","pauseVoice","stopVoice","onVoicePlayEnd","uploadVoice","downloadVoice","translateVoice","getNetworkType","openLocation","getLocation","startSearchBeacons","stopSearchBeacons","onSearchBeacons","hideOptionMenu","showOptionMenu","closeWindow","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","scanQRCode","openProductSpecificView","chooseCard","addCard","openCard","chooseWXPay"]});


weixin.ready(function () {
    
    weixin.onMenuShareTimeline({
        title: '蜜蜂舆情', // 分享标题
        link: 'http://c.icoos.cn', // 分享链接
        desc: '蜜蜂舆情测试版', // 分享描述
        imgUrl: '', // 分享图标
        success: function () {
            alert('分享成功啦！');
        },
        cancel: function(){
            alert('分享失败');
        }
    });
});


new Vue({
	router,
	store,
}).$mount('#app')

