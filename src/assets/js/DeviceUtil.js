import { isObject } from "@vue/shared";

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
// Weex 是使用流行的 Web 开发体验来开发高性能原生应用的框架
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
// 两个不等号的含义有值取值，没值就是false 类似于  var  a = 'b' || false
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
// 浏览器的用户代理报头：window.navigator.userAgent
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

export default {
    android() {
        return isAndroid;
    },
    ios() {
        return isIOS;
    },
    browser() {
        return inBrowser;
    }

}