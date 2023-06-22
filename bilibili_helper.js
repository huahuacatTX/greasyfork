// ==UserScript==
// @name              B站哔哩哔哩使用增强，全网VIP视频免费破解去广告，全网音乐直接下载，知乎使用增强，短视频无水印下载，油管、Facebook等国外视频解析下载等
// @namespace         super_video_helper_cat
// @version           5.0.4
// @description       【❤️视频解析❤️，适配PC+移动 】功能可选择性打开：1、B站使用增强：支持视频下载(👉支持多P批量快速下载👈)、浏览记录提示、一键三连、描述文本网址转链接等；2、全网VIP视频解析：爱奇艺、腾讯、优酷、bilibili等视频免费解析(支持自定义解析接口)；3、知乎使用助手：内容种类标识、问答显示优化、视频下载等；4、短视频去水印下载：支持知乎、抖音、快手等；5、全网VIP音乐解析：网易云音乐、QQ音乐、喜马拉雅等免客户端下载；6、油管、Facebook等国外视频解析下载；7、搜索引擎导航,支持自定义网址【脚本长期维护更新，完全免费，无广告，仅限学习交流！！】
// @author            爱画画的猫,小艾特,红红火火
// @icon              data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACS0lEQVRYR8WXz2oTURTGv3MnpqhNKy1UWmxRTGdaiLSQRKkKIoK4FVrRPoHu7BMYn0B3+gQquuiuiC6kaFVsAhGEZkKqG/+Vrtp0YWsyR27KlEwz0xnnT3LgwjB37vl+97tzz9whdDiow/pwBCjofN0AJohwKQgkMxYF8Dmt0bxdnhaAQoWTXMczENJBhFvGMgqk4GY6SZXmPgvAmy/cnYijGqrwvmTVHSQup2jLvG0ByJf5EYDbUQIAeJxR6U4LQHGV1VodesTijfQxBdrkaSrL6z0Hlst8i4An7QBgYDar0lMrgM45ItxrCwDjflajnC+AtR8Gvn8zGpz9xwVOjor/Zma/ANt/GIsLNWxt8p7o4IiAmlLQP+C9pvkG+FoyUPxYs52xhFDPKIh3uRviG2ClWIdsTpHoJYymFNdliQzABBsaEZg4p+DwUftliRxAggwOC0xdidma1RaAI92Ea9OHOgcwPqlANruI1AElhsa2dBKXQJEBnDglGlvxWN/BNcE3gKyCS69b64AUlMISwEv4BpDJ3778i/Xfu5XQtFtaLq+9RiCA6gZj/dcuQN8Audod6kvodYZuz9k7UOK7JPDAbXAY/WxgLjtGDy2f408VPi8MLIUh4JbDELhwNknvLQDyQNoTh87AkFuCIP0E/NzcgWYeTC0bdrkNp6Lm9bc4YM4qr/NzEGaCzNJxLONFRqMbzf22JSu/wlcphhwzpsIAIcIHriGXGadX+/MdWDPflTjRxcH+kLYJhYtj5Piz4/0gF4YVNjk6DvAPDb0aMEr8/nEAAAAASUVORK5CYII=
// @include           *://*.youku.com/v_*
// @include           *://*.iqiyi.com/v_*
// @include           *://*.iqiyi.com/w_*
// @include           *://*.iqiyi.com/a_*
// @include           *://*.iqiyi.com/resource/pcw/play/*
// @include           *://*.le.com/ptv/vplay/*
// @include           *://v.qq.com/x/cover/*
// @include           *://v.qq.com/x/page/*
// @include           *://v.qq.com/tv/*
// @include           *://*.tudou.com/listplay/*
// @include           *://*.tudou.com/albumplay/*
// @include           *://*.tudou.com/programs/view/*
// @include           *://*.mgtv.com/b/*
// @include           *://film.sohu.com/album/*
// @include           *://tv.sohu.com/v/*
// @include           *://*.baofeng.com/play/*
// @include           *://vip.pptv.com/show/*
// @include           *://v.pptv.com/show/*
// @include           *://www.le.com/ptv/vplay/*
// @include           *://www.wasu.cn/Play/show/*
// @include           *://*.1905.com/video/*
// @include           *://*.1905.com/play/*
// @include           *://*.1905.com/*/play/*
// @include           *://www.miguvideo.com/mgs/*
//---------------------------------------------------
// @include           *://*.taobao.com/*
// @include      	  *://*detail.tmall.com/*
// @include      	  *://*detail.tmall.hk/*
// @include           *://*item.jd.com/*
// @include           *://item.yiyaojd.com/*
// @include           *://npcitem.jd.hk/*
//---------------------------------------------------
// @include           *://m.v.qq.com/x/cover/*
// @include           *://m.v.qq.com/x/page/*
// @include           *://m.v.qq.com/*
// @include           *://m.iqiyi.com/v_*
// @include           *://m.iqiyi.com/w_*
// @include           *://m.iqiyi.com/a_*
// @include           *://m.youku.com/alipay_video/*
// @include           *://m.youku.com/video/id_*
// @include           *://m.mgtv.com/b/*
// @include           *://m.tv.sohu.com/v/*
// @include           *://m.film.sohu.com/album/*
// @include           *://m.le.com/ptv/vplay/*
// @include           *://m.pptv.com/show/*
// @include           *://m.acfun.cn/v/*
// @include           *://m.wasu.cn/Play/show/*
//---------------------------------------------------
// @include           *://www.youtube.com
// @include           *://www.youtube.com/
// @include           *://www.youtube.com/watch*
// @include           *://www.facebook.com/*
// @include           *://yt1s.com/facebook-downloader
//---------------------------------------------------
// @include      	  *music.163.com*
// @include           *://y.qq.com*
// @include           *://www.kugou.com*
// @include           *://www.kuwo.cn*
// @include           *://www.lizhi.fm*
// @include           *://*.ximalaya.com*
// @include           *://music.migu.cn*
//----------------------------------------------------
// @include           *://www.baidu.com/*
// @include           *://www.so.com/s*
// @include           *://www.sogou.com/web*
// @include           *://www.sogou.com/sogou*
// @include           *://cn.bing.com/search*
// @include           *://www.bing.com/search*
// @include           *://www4.bing.com/search*
// @include           *://so.toutiao.com/search*
// @include           *://www.google.com/search*
//-------------------------------------------------------
// @include	   	      *://www.bilibili.com/**
// @include           *://search.bilibili.com/**
// @include           *://space.bilibili.com/**
// @include      	  *://*.zhihu.com/*
// @include           *://www.douyin.com/*
// @include           *://www.kuaishou.com/*
// @require           https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.2.1/jquery.min.js
// @require           https://greasyfork.org/scripts/454236-findandreplacedomtext-huahuacat/code/findAndReplaceDOMText-huahuacat.js?version=1112990
// @connect			  tt.shuqiandiqiu.com
// @connect           api.bilibili.com
// @connect           api.staticj.top
// @connect           cdn.jsdelivr.net
// @grant             unsafeWindow
// @grant             GM_openInTab
// @grant             GM.openInTab
// @grant             GM_getValue
// @grant             GM.getValue
// @grant             GM_setValue
// @grant             GM.setValue
// @grant             GM_xmlhttpRequest
// @grant             GM.xmlHttpRequest
// @grant             GM_registerMenuCommand
// @license           AGPL License
// @charset		      UTF-8
// @antifeature  	  referral-link 【此提示为GreasyFork代码规范要求含有查券功能的脚本必须添加，实际使用无任何强制跳转，代码可查，请知悉】
// @original-author   橘子爱哭
// @original-license  AGPL License
// @original-script   https://greasyfork.org/zh-CN/scripts/390952
// @run-at            document-idle
// ==/UserScript==

(function () {
	'use strict';
	
	//共有方法，全局共享
	function commonFunction(){
		this.GMgetValue = function (name, value=null) {
			let storageValue = value;
			if (typeof GM_getValue === "function") {
				storageValue = GM_getValue(name, value);
			} else if(typeof GM.setValue === "function"){
				storageValue = GM.getValue(name, value);
			}else{
				var arr = window.localStorage.getItem(name);
				if(arr != null){
					storageValue = arr
				}
			}
			return storageValue;
		};
		this.GMsetValue = function(name, value){
			if (typeof GM_setValue === "function") {
				GM_setValue(name, value);
			} else if(typeof GM.setValue === "function"){
				GM.setValue(name, value);
			}else{
				window.localStorage.setItem(name, value)
			}
		};
		this.GMaddStyle = function(css){
			var myStyle = document.createElement('style');
			myStyle.textContent = css;
			var doc = document.head || document.documentElement;
			doc.appendChild(myStyle);
		};
		this.GMopenInTab = function(url, options={"active":true, "insert":true, "setParent":true}){
			if (typeof GM_openInTab === "function") {
				GM_openInTab(url, options);
			} else {
				GM.openInTab(url, options);
			}
		};
		this.addScript = function(url){
			var s = document.createElement('script');
			s.setAttribute('src',url);
			document.body.appendChild(s);
		};
		this.randomNumber = function(){
			return Math.ceil(Math.random()*100000000);
		};
		this.request = function(mothed, url, param){   //网络请求
			return new Promise(function(resolve, reject){
				GM_xmlhttpRequest({
					url: url,
					method: mothed,
					data:param,
					onload: function(response) {
						var status = response.status;
						var playurl = "";
						if(status==200||status=='200'){
							var responseText = response.responseText;
							resolve({"result":"success", "data":responseText});
						}else{
							reject({"result":"error", "data":null});
						}
					}
				});
			})
		};
		this.addCommonHtmlCss = function(){
			var cssText = 
				`
				@keyframes fadeIn {
				    0%    {opacity: 0}
				    100%  {opacity: 1}
				}
				@-webkit-keyframes fadeIn {
				    0%    {opacity: 0}
				    100%  {opacity: 1}
				}
				@-moz-keyframes fadeIn {
				    0%    {opacity: 0}
				    100%  {opacity: 1}
				}
				@-o-keyframes fadeIn {
				    0%    {opacity: 0}
				    100%  {opacity: 1}
				}
				@-ms-keyframes fadeIn {
				    0%    {opacity: 0}
				    100%  {opacity: 1}
				}
				@keyframes fadeOut {
				    0%    {opacity: 1}
				    100%  {opacity: 0}
				}
				@-webkit-keyframes fadeOut {
				    0%    {opacity: 1}
				    100%  {opacity: 0}
				}
				@-moz-keyframes fadeOut {
				    0%    {opacity: 1}
				    100%  {opacity: 0}
				}
				@-o-keyframes fadeOut {
				    0%    {opacity: 1}
				    100%  {opacity: 0}
				}
				@-ms-keyframes fadeOut {
				    0%    {opacity: 1}
				    100%  {opacity: 0}
				}
				.web-toast-kkli9{
				    position: fixed;
				    background: rgba(0, 0, 0, 0.7);
				    color: #fff;
				    font-size: 14px;
				    line-height: 1;
				    padding:10px;
				    border-radius: 3px;
				    left: 50%;
				    transform: translateX(-50%);
				    -webkit-transform: translateX(-50%);
				    -moz-transform: translateX(-50%);
				    -o-transform: translateX(-50%);
				    -ms-transform: translateX(-50%);
				    z-index: 999999999999999999999999999;
				    white-space: nowrap;
				}
				.fadeOut{
				    animation: fadeOut .5s;
				}
				.fadeIn{
				    animation:fadeIn .5s;
				}
				`;
			this.GMaddStyle(cssText);
		};
		this.webToast = function(params) {	//小提示框
		    var time = params.time;
		    var background = params.background;
		    var color = params.color;
		    var position = params.position;  //center-top, center-bottom
		    var defaultMarginValue = 50;
		    
		    if(time == undefined || time == ''){
		        time = 1500;
		    }
		    
		    var el = document.createElement("div");
		    el.setAttribute("class", "web-toast-kkli9");
		    el.innerHTML = params.message;
		    //背景颜色
		    if(background!=undefined && background!=''){
		    	el.style.backgroundColor=background;
		    }
		    //字体颜色
		    if(color!=undefined && color!=''){
		    	el.style.color=color;
		    }
		    
		    //显示位置
		    if(position==undefined || position==''){
		    	position = "center-bottom";
		    }
		    
		    //设置显示位置，当前有种两种形式
		    if(position==="center-bottom"){
		    	el.style.bottom = defaultMarginValue+"px"; 
		    }else{
		    	el.style.top = defaultMarginValue+"px"; 
		    }
			el.style.zIndex=999999;
		    
		    document.body.appendChild(el);
		    el.classList.add("fadeIn");
		    setTimeout(function () {
		        el.classList.remove("fadeIn");
		        el.classList.add("fadeOut");
		        /*监听动画结束，移除提示信息元素*/
		        el.addEventListener("animationend", function () {
		            document.body.removeChild(el);
		        });
		        el.addEventListener("webkitAnimationEnd", function () {
		            document.body.removeChild(el);
		        });
		    }, time);
		};
		this.queryUrlParamter = function(text, tag) { //查询GET请求url中的参数
			if(text.indexOf("?")!=-1){ //选取?后面的字符串,兼容window.location.search，前面的?不能去掉
				var textArray = text.split("?");
				text = "?"+textArray[textArray.length-1];
			}
			var t = new RegExp("(^|&)" + tag + "=([^&]*)(&|$)");
			var a = text.substr(1).match(t);
			if (a != null){
				return a[2];
			}
			return "";
		};
		this.isPC = function(){
			var userAgentInfo = navigator.userAgent;
			var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone", "iPad", "iPod"];
			var flag = true;
			for (var v = 0; v < Agents.length; v++) {
				if (userAgentInfo.indexOf(Agents[v]) > 0) {
					flag = false;
					break;
				}
			}
			return flag;
		};
		this.getBilibiliBV=function(){
			var pathname = window.location.pathname;
			var bv = pathname.replace("/video/","").replace("/","");
			return bv;
		};
		this.getSystemOS=function(){
			var u = navigator.userAgent;
			if (!!u.match(/compatible/i) || u.match(/Windows/i)) {
			    return 'windows';
			} else if (!!u.match(/Macintosh/i) || u.match(/MacIntel/i)) {
			    return 'macOS';
			} else if (!!u.match(/iphone/i) || u.match(/Ipad/i)) {
			    return 'ios';
			} else if (!!u.match(/android/i)) {
			    return 'android';
			} else {
			    return 'other';
			}
		};
		this.RPCDownloadFile = function(fileName, url, savePath="D:/", RPCURL="ws://localhost:16800/jsonrpc", RPCToken="") {		
			const self = this;
			if(!savePath){
				savePath = "D:/";
			}
			if(!RPCURL){
				RPCURL = "ws://localhost:16800/jsonrpc";
			}
			let options = { //下载配置文件
				"dir":savePath,
				"max-connection-per-server": "16",
				"header":["User-Agent:"+navigator.userAgent+"", "Cookie:"+document.cookie+"", "Referer:"+window.location.href+""]
			}
			if(!!fileName) {
				options.out = fileName;
			}
			let jsonRPC = {
				"jsonrpc": "2.0",
				"id": "huahuacat",
				"method": "aria2.addUri",
				"params": [[url], options],
			}
			if (!!RPCToken) {
				jsonRPC.params.unshift("token:" + RPCToken); // 必须要加在第一个
			}
			return new Promise(function(resolve, reject) {
				var webSocket = new WebSocket(RPCURL);
				webSocket.onerror = function(event) {
					console.log("webSocket.onerror", event);
					reject("Aria2连接错误，请打开Aria2和检查RPC设置！");
				}
				webSocket.onopen = function(){
					webSocket.send(JSON.stringify(jsonRPC));
				}
				webSocket.onmessage = function(event){
					let result = JSON.parse(event.data);
					switch (result.method) {
						case "aria2.onDownloadStart":
							resolve("Aria2 开始下载【"+fileName+"】");
							webSocket.close();
							break;
						case "aria2.onDownloadComplete":
							break;
						default:
							break;
					}
				}
			});
		};
		this.getElementObject = function(selector, allowEmpty = true, delay=200){
			return new Promise((resolve,reject) =>{
				let totalDelay = 0;
				let elementInterval = setInterval(()=>{
					if(totalDelay >= 3000){ //总共检查3s，如果还是没找到，则返回
						reject(false);
						clearInterval(elementInterval);
					}
					let element = document.querySelector(selector);
					let result = allowEmpty ? !!element : (!!element && !!element.innerHTML);
					if(result){
						clearInterval(elementInterval);
						resolve(element);
					}else{
						totalDelay += delay;
					}
				}, delay);
			});
		};
		/**
		 * @param {Object} time
		 * @param {Object} format
		 * 时间格式化
		 * DateFormat(new Date(dateCreated), "yyyy-MM-dd hh:mm:ss")
		 */
		this.DateFormat = function(time, format) {
		    var o = {
		        "M+": time.getMonth() + 1, //月份 
		        "d+": time.getDate(), //日 
		        "h+": time.getHours(), //小时 
		        "m+": time.getMinutes(), //分 
		        "s+": time.getSeconds(), //秒 
		        "q+": Math.floor((time.getMonth() + 3) / 3), //季度 
		        "S": time.getMilliseconds() //毫秒 
		    };
		    if(/(y+)/.test(format)){
				format = format.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
			}
		    for(var k in o){
		        if(new RegExp("(" + k + ")").test(format)){
		            format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
				}
			}
		    return format;
		}
	}
	
	//全局弹窗对象
	const popup = (function(){
	    class Popup {
	        constructor() {
	            this.mask = document.createElement('div')
	            this.setStyle(this.mask, {
	                "width": '100%',
	                "height": '100%',
	                "backgroundColor": 'rgba(0, 0, 0, .6)',
	                "position": 'fixed',
	                "left": "0px",
	                "top": "0px",
					"bottom":"0px",
					"right":"0px",
					"z-index":"99999"
	            })
	            // 创建中间显示内容的水平并垂直居中的div
	            this.content = document.createElement('div')
	            this.setStyle(this.content, {
	                "max-width": '400px',
					"width":"100%",
	                "max-height": '600px',
	                "backgroundColor": '#fff',
	                "boxShadow": '0 0 2px #999',
	                "position": 'absolute',
	                "left": '50%',
	                "top": '50%',
	                "transform": 'translate(-50%,-50%)',
	                "borderRadius": '3px'
	            })
	            // 将这个小div放在遮罩中
	            this.mask.appendChild(this.content)
	        }
	        middleBox(param) {
	            // 先清空中间小div的内容 - 防止调用多次，出现混乱
	            this.content.innerHTML = ''
	            let title = '默认标题内容';
	            // 检测参数类型
	            if({}.toString.call(param) === '[object String]') {
	                title = param
	            } else if({}.toString.call(param) === '[object Object]') {
	                title = param.title
	            }
	            // 将遮罩放在body中显示
	            document.body.appendChild(this.mask)
	            // 给中间的小div设置默认的排版
	            // 上面标题部分
	            this.title = document.createElement('div')
	            // 设置样式
	            this.setStyle(this.title, {
	                "width": '100%',
	                "height": '40px',
	                "lineHeight": '40px',
	                "boxSizing": 'border-box',
					"background-color":"#FF4D40",
	                "color": '#FFF',
					"text-align": 'center',
					"font-weight":"700",
					"font-size":"16px"
					
	            })
	            // 设置默认标题内容
	            this.title.innerText = title
	            // 将标题部分放在中间div中
	            this.content.appendChild(this.title)
	            // 关闭按钮
	            this.closeBtn = document.createElement('div')
	            // 设置内容
	            this.closeBtn.innerText = '×'
	            // 设置样式
	            this.setStyle(this.closeBtn, {
	                "textDecoration": 'none',
	                "color": '#666',
	                "position": 'absolute',
	                "right": '10px',
	                "top": '0px',
	                "fontSize": '25px',
					"color": '#FFF',
					"display":"inline-block",
					"cursor":"pointer"
	            })
	            // 将关闭按钮放在中间小div中
	            this.title.appendChild(this.closeBtn)
				this.closeBtn.onclick = () => this.close()
	        }
	        // 弹出提示框
	        dialog(param) {
	            this.middleBox(param);
				this.dialogContent = document.createElement('div')
				this.setStyle(this.dialogContent,{
					"padding":"15px",
					"max-height":"400px"
				})
				this.dialogContent.innerHTML = param.content;
				this.content.appendChild(this.dialogContent)
				param.onContentReady(this);
	        }
	        close() {
	            document.body.removeChild(this.mask)
				window.location.reload();
	        }
	        setStyle(ele, styleObj) { // 设置样式的函数
	            for(let attr in styleObj){
	                ele.style[attr] = styleObj[attr]
	            }
	        }
	    }
	    let popup = null;
	    return (function() {
	        if(!popup) {
	            popup = new Popup()
	        }
	        return popup;
	    })()
	})();
	
	//解析接口配置
	//showType=1(仅PC), showType=2(仅mobile), showType=3(同时显示)
	const originalInterfaceList = [
		
	];
	
	//全局统一方法对象
	const commonFunctionObject = new commonFunction(); 
	commonFunctionObject.addCommonHtmlCss();	//统一html、css元素添加
	//统一接口
	let newOriginalInterfaceList = originalInterfaceList;
	
	//相关功能关闭控制
	let functionController= commonFunctionObject.GMgetValue("setingData");
	if(!functionController){
		functionController={
			"bilibiliHelper":true,"superVideoHelper":true,"superMusicHelper":true,"abroadVideoHelper":true,
			"searchEnginesNavigation":true,"zhihuHelper":true,
			"shortVideoDownload":true
		}
	}	
	//用户功能设置函数
	function usersSeting(){
		var bilibiliHelper=true, superVideoHelper=true, superMusicHelper=true, abroadVideoHelper=true, 
		searchEnginesNavigation=true, zhihuHelper=true, shortVideoDownload=true;
		var isUpdateStorage = false;
		if(!functionController.hasOwnProperty("bilibiliHelper")){
			functionController.bilibiliHelper = true;
			isUpdateStorage = true;
		}else{
			bilibiliHelper = functionController.bilibiliHelper;
		}
		if(!functionController.hasOwnProperty("superVideoHelper")){
			functionController.superVideoHelper = true;
			isUpdateStorage = true;
		}else{
			superVideoHelper = functionController.superVideoHelper;
		}
		if(!functionController.hasOwnProperty("superMusicHelper")){
			functionController.superMusicHelper = true;
			isUpdateStorage = true;
		}else{
			superMusicHelper = functionController.superMusicHelper;
		}
		if(!functionController.hasOwnProperty("abroadVideoHelper")){
			functionController.abroadVideoHelper = true;
			isUpdateStorage = true;
		}else{
			abroadVideoHelper = functionController.abroadVideoHelper;
		}
		if(!functionController.hasOwnProperty("searchEnginesNavigation")){
			functionController.searchEnginesNavigation = true;
			isUpdateStorage = true;
		}else{
			searchEnginesNavigation = functionController.searchEnginesNavigation;
		}
		if(!functionController.hasOwnProperty("zhihuHelper")){
			functionController.zhihuHelper = true;
			isUpdateStorage = true;
		}else{
			zhihuHelper = functionController.zhihuHelper;
		}
		if(!functionController.hasOwnProperty("shortVideoDownload")){
			functionController.shortVideoDownload = true;
			isUpdateStorage = true;
		}else{
			shortVideoDownload = functionController.shortVideoDownload;
		}
		if(isUpdateStorage){
			commonFunctionObject.GMsetValue("setingData",functionController);
		}
		var setingData=[
			{"tag":"bilibiliHelper", "name":"B站使用助手(视频下载支持批量、浏览记录、一键三连)", "checked":bilibiliHelper},
			{"tag":"zhihuHelper", "name":"知乎使用助手(内容标识、问答显示优化、视频下载等)", "checked":zhihuHelper},
			{"tag":"superVideoHelper", "name":"全网VIP视频解析(支持爱奇艺、腾讯视频、B站番剧等)", "checked":superVideoHelper},
			{"tag":"superMusicHelper", "name":"全网VIP音乐解析(支持网易云音乐、QQ音乐等)", "checked":superMusicHelper},
			{"tag":"shortVideoDownload", "name":"短视频去水印下载(支持抖音、快手等)", "checked":shortVideoDownload},
			{"tag":"abroadVideoHelper", "name":"国外视频解析下载(支持油管、Facebook等)", "checked":abroadVideoHelper},
			{"tag":"searchEnginesNavigation", "name":"搜索引擎资源导航(适配百度、360、搜狗、必应等)", "checked":searchEnginesNavigation},
		]
		var content = "";
		for(var i=0; i<setingData.length;i++){
			var one = setingData[i];
			content += `
				<div style="padding: 5px 0px;">
					<input style="display:inline-block;width: 15px;height: 15px;display: inline-block;vertical-align: middle; -webkit-appearance:checkbox;margin-bottom: 3px;cursor: pointer;" name="Checkbox" type="checkbox" data-tag="`+one.tag+`" `+(one.checked ? "checked" : "")+`>
					<label style="display:inline-block;font-size: 14px;margin:3px 0;vertical-align: middle;font-weight:500;color:#000;">`+one.name+`</label>
				</div>
			`
		}
		popup.dialog({
			"title":"功能开关",
			"content":content,
			"onContentReady":function($that){
				$that.dialogContent.querySelectorAll("input[type='checkbox']").forEach(function(checkbox){
					checkbox.addEventListener("click", function(e){
						var tag = e.target.getAttribute("data-tag");
						var checked = e.target.checked;
						functionController[tag] = checked;
						commonFunctionObject.GMsetValue("setingData",functionController);
						commonFunctionObject.webToast({"message":"操作成功", "background":"#FF4D40"});
					});
				})
			}
		});
	}
	
	// 菜单按钮弹框
	if(commonFunctionObject.isPC()){
		GM_registerMenuCommand("功能开关",()=>usersSeting());
	}else{
		functionController.bilibiliHelper = false;
		functionController.abroadVideoHelper = false;
		functionController.superMusicHelper = false;
		functionController.searchEnginesNavigation = false;
		functionController.zhihuHelper = false;
	}
	
	/**
	 * 超级解析助手功能
	 * 
	 * 原代码作者：小艾特
	 * 脚本地址：https://greasyfork.org/zh-CN/scripts/407847
	 * 视频解析接口来自，作者：懒哈哈
	 * 脚本地址：https://greasyfork.org/zh-CN/scripts/370634
	 * 遵循AGPL License开源协议
	 */
	function superVideoHelper(originalInterfaceList){
		this.originalInterfaceList = originalInterfaceList;
		this.elementId = Math.ceil(Math.random()*100000000)+"mmx";
		this.customInterfaceKey = "custom_interface_key_dddsdxxa";
		this.quicklyInterfaceKey = "custom_quickly_interface_key_dddsdxxa";
		this.defaultQuicklyInterfaceIndex = 1;
		this.isRun = function(){ //判断是否运行
			const host = window.location.host;
			const urls = ["www.iqiyi.com","v.qq.com","youku.com", "www.le.com","mgtv.com","sohu.com", "acfun.cn","bilibili.com",
				"baofeng.com","pptv.com","1905.com","miguvideo.com","sports.iqiyi.com"];
			var result = false;
			if(!host.startsWith("m.")){ //不是移动端执行
				for(var i=0; i<urls.length;i++){ //不是B站直接判断
					if(window.location.host.indexOf("bilibili.com")==-1){
						if(window.location.host.indexOf(urls[i])!=-1){
							result = true;
							break;
						}
					}else{
						if(window.location.href.indexOf("www.bilibili.com/bangumi/play")!=-1){ //是B站只有番剧才开启VIP解析
							result = true;
							break;
						}
					}
				}
			}
			return result;
		};
		this.showPlayerWindow = function(playObject){	//显示播放窗口
			var url = playObject.url + window.location.href;
			commonFunctionObject.GMopenInTab(url);
		};
		this.analysisCustomInterface = function(){ //自定义接口解析
			var customInterface = commonFunctionObject.GMgetValue(this.customInterfaceKey,"");
			if(!!customInterface){
				try{
					var customizeInterfaceList = new Array();
					var analysisArray = customInterface.split("\n");
					for(var i=0;i<analysisArray.length;i++){
						var onePiece = analysisArray[i];
						if(!!onePiece && onePiece.indexOf(",")!=-1){
							var onePieceArray = onePiece.split(","); 
							
							if(onePieceArray.length==2 && !!onePieceArray[0] && /(http|https):\/\/\S*/.test(onePieceArray[1])){
								customizeInterfaceList.push({"name":""+onePieceArray[0]+"","url":""+onePieceArray[1]+"", "showType":1});
							}
						}
					}
					this.originalInterfaceList = customizeInterfaceList.concat(this.originalInterfaceList);
				}catch(e){}
			}
		};
		this.getQuicklyInterfaceIndex = function(){
			var quicklyInterfaceIndexString = commonFunctionObject.GMgetValue(this.quicklyInterfaceKey,"")+"";
			var quicklyInterfaceIndex = this.defaultQuicklyInterfaceIndex;
			if(!!quicklyInterfaceIndexString){
				quicklyInterfaceIndex = parseInt(quicklyInterfaceIndexString);
			}
			if(this.originalInterfaceList.length-1<quicklyInterfaceIndex){
				quicklyInterfaceIndex = this.defaultQuicklyInterfaceIndex;
			}
			return quicklyInterfaceIndex;
		};
		this.addHtmlElements = function(){  //添加HTML
			const vipVideoImageBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC9klEQVRoQ+2ZPWgVQRDH/7/CWqOIYOFHFbRSjJhGMGDpByoIago70cqvUtQgdipWFqawMWghGIidhcHKQAJqEURBRfED1CCCjc3IPu4em31775J7d3m8cAtX3O7szP7nPzszx6EeH/T4+VUD6DaDTQbMbE+3D7MY+8Ckkw8BPFuMki7KDtUAuuh9Z3oZMtBljxY2X9eBwq4raWPNQEmOLKxm+TBgZqsknQ1dAVzNco+ZhWsm6ZakHZLC1mQyrZ5OX2RvzMxnSa8lzQJ/YwLzGDCze5JOeoI/gbVtAMxJ6vPW7wKnkr4qbEuaxccDcGWBsfNV0mjMmSGAg5LGA6XbgFehITPbLel5MN84ZAUAUjMPgWO+zZY7YGbvJW0OvRoB8EjSEW9+BhhIvOvCp0wGfPPbgZfpRAzATUnn56GEmJyLd39cBNxeF99FADTa42BskuQef4wDh9oB2CXpRbDpMPA4nTOz05LuBDLrgW+dAACGIkxfkHTDm/8DrMwEkBxgOskkqdwEcMAD4GLf3YF0PACOe+uFGMgA4Bj4EAAbAGbcXLQOmNklSdeCTRuBT2bWL+lNsLYfeFIRgH2SJgJ7GwCXYjMBrJb0K9jUiHEzG5F02VubA9b4skXvQMiAmW2VdFSSn24/As0kk1mJzeyppL3ewaaBnWY2K2mLNz8S5ueCAMLwz3q/DZxreweSe3BC0v1Ai7tkYXrsB96WwMBCAfQBv3MBJCD+SVrhaXaZ54z3PgUMhpYrZKCF7bbNnJk5BhwT6fghyW8thoGxigE4my6tXwemQlt5AGI1oamDSIFLmCuURiW5BOGPL8C7drGV206b2XdJ6yJKxoDhmPKCIeS61ZZClncxFgLAtcyxrnEwRmknDFQFIFYTWnJ/CVmoGgYSj7Z81OR86Lg7sOgPmnY6s0IpN4TyYrDb6zWAmoEOPVCHUIcO7Hh7/YemYxcWU7AMf3BkNGDF/FP9rkwGqjddkoWWv5Ql6V1yNXUdWHKXBwZ7noH/dP+HQNqheToAAAAASUVORK5CYII=";
			const quicklyBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAv1JREFUWEfFl02IVWUYx39/EDdKoCiCGYquxNw404QL+wA/wIUfA5luMotk0jGoiDQFv1oMqCCOFkYQtopczKxMGsUUF2bNKsWFKBroJtLI2qjwl+dy7uV47jnnnntnygcOF97nfd7/777nfZ7nPeIZm8Zb3/ZsYBEwE5gFzAGmAX8lz9/AA0l7QnvcAGwvBd4E1gOTK/yxvQExZgDbbwHvAq9UEE1POSzpwzEB2D4KbG1TuD79G0nvdAxg+2egp0PxCBuS1NsRgG2PQbgeelbS0rYBbJ8DXisAuAdcB2Ykp7+M8ztJGyoD2H4J+AxYU7DqoKQP6j7b24AjJQQDknaUAtieDvQmz/KSxUYkNfltx07FjuVZv6RjhQC21wIHgHkV3vc2SZERTWb7d+CFHFevpKFcANvvA19UEK5PWSnphwKAS8DLGd8/wIuSbjcB2I4SubsN8Zj6iaSDBQB/AlMzvq8lvRdjTwEk5XSkTfHadEl5fyYOYRzGrC2TdOYpANvdwC+diKditgNXkxRcBSzLWe+CpFfr4w1q21eABZmAx8DFkrzvhHejpG/zAPqSbhaCtUfSv7YHgE87UcqJOSapPz1eqRDZ/h54Y4wQlyVls6H6fcD2r0BXpxB5h7QpC1otbjtq/ZRW8zL+nyS9XhTTqhR3SRpNB9u+k1y3qnAMS4qKWmhFlXAlsC/Z8lvAifodLlayPQysrkDQI6k0tfOKx0TgGjA3I7BO0sn6mO1DwEclED9KWtEKMg/gOLA5J/CupOczryN2aUlBneiTFGuVWrYUR6pFyhVZd86ZeARMyATcABZL+qMygO043eeBhQVBo5KiXDfM9iQgOlvWaq22lXj406X4c2BnQdDNaCqSTmUA4h2fzsRskfRlFfEGgO35QPTt53ICv0rEH2Z9tvcDu1LjtY+NquJpgLh8xCUkbb8B+9MnPwcgfUFttNhOANILxbfbIHBI0v2yxWx/DGwC3pYUpbptq52B5BYUPTryP2638fu/WKVu+F+SPAG7l/wh4NsJOQAAAABJRU5ErkJggg==";
			const currentHost = window.location.host;
			
			const quicklyInterfaceIndex = this.getQuicklyInterfaceIndex();
			var currentQuicklyInterfaceObject = null;
			
			var category_1_html = "";
			this.originalInterfaceList.forEach((item, index) => {
				if(item.showType != 2){
					var selected = ""
					if(index==quicklyInterfaceIndex){
						selected = "selected";
						currentQuicklyInterfaceObject =  item;
					}
					category_1_html += "<span title='"+item.name+"' data-index='"+index+"' class='"+selected+"'>" + item.name + "</span>";
				}
			});
			
			//获得自定义位置
			var left = 0;
			var top = 120;
			var Position = commonFunctionObject.GMgetValue("Position_" + currentHost);
			if(!!Position){
				left = Position.left;
				top = Position.top;
			}
			var color = "#FF4D40";
			var hoverColor = "#000000";
			if(currentHost.indexOf("bilibili.com")!=-1){ //自定义主题
				color = "#fb7299";
				hoverColor = "#00B0E1";
			}
			var cssMould = `#vip_movie_box`+this.elementId+`{cursor:pointer; position:fixed; top:` + top + `px; left:` + left + `px; width:0px; z-index:99999999; font-size:16px; text-align:left;}
							#vip_movie_box`+this.elementId+` .img_box`+this.elementId+`{width:24px; height:32px;line-height:32px;text-align:center;background-color:`+color+`;}
							#vip_movie_box`+this.elementId+` .img_box`+this.elementId+`:hover{
								background: linear-gradient(30deg, #2a66ff 40%, `+color+`);
							}
							#vip_movie_box`+this.elementId+` .img_box`+this.elementId+`>img {width:20px; display:inline-block; vertical-align:middle;}
							
							#vip_movie_box`+this.elementId+` .showhide_box`+this.elementId+`{display:none;padding-left:5px;position: absolute;left: 24px;top: 0;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii{width:380px; max-height:400px; overflow-y:auto;background-color:rgba(241,241,241);}
							#vip_movie_box`+this.elementId+` .default-scrollbar-55678::-webkit-scrollbar{width:5px; height:1px;}
							#vip_movie_box`+this.elementId+` .default-scrollbar-55678::-webkit-scrollbar-thumb{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#A8A8A8;}
							#vip_movie_box`+this.elementId+` .default-scrollbar-55678::-webkit-scrollbar-track{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#F1F1F1;}
							
							#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+`{margin-bottom:10px;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+`:last-child{margin-bottom:0px;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+` >.title`+this.elementId+`{font-size:14px; text-align:left;color:#000000;font-weight:600;margin:5px 3px;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+` >.interface_box`+this.elementId+`{}
							#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+` >.interface_box`+this.elementId+`>span{border-radius:3px;border-top:3px solid `+color+`; border-bottom:3px solid `+color+`;display:inline-block;width:calc(25% - 6px);width:-moz-calc(25% - 6px);width: -webkit-calc(25% - 6px);height:20px;line-height:20px;background-color:`+color+`;color:#FFF;cursor:pointer;margin:3px;text-align:center;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;-o-text-overflow:ellipsis;font-size:12px!important;box-sizing:content-box!important;}							
							#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+` >.interface_box`+this.elementId+`>span:hover{border-top:3px solid `+hoverColor+`; border-bottom:3px solid `+hoverColor+`;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+` >.interface_box`+this.elementId+`>span.selected{border-top:3px solid `+hoverColor+`; border-bottom:3px solid `+hoverColor+`;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+` >.content`+this.elementId+`{font-size:12px;color:#000000;margin-left:3px;}
							`
			commonFunctionObject.GMaddStyle(cssMould);
			
			//加入HTML
			var htmlMould = `<div id='vip_movie_box`+this.elementId+`'>
								<div class='plugin_inner_`+this.elementId+`'>
									<div class="img_box`+this.elementId+`" id="img_box_jump_6667897iio"><img src='`+ vipVideoImageBase64 +`' title='选择解析线路'/></div>
									<div class='showhide_box`+this.elementId+`'>									
										<div class='vip_mod_box_action_687ii default-scrollbar-55678'>
											<div class='item_box`+this.elementId+`'>
												<div class='title`+this.elementId+`'><b>接口添加</b></div>
												<div class='content`+this.elementId+`'>
													对现有接口不满意？可添加自定义接口哟~<span id="img_set_6667897iio" style="display:inline-block;border-radius:2px;margin-left:5px;padding:3px 5px;background-color:#CCC;cursor:pointer;">添加接口</span>
												</div>
												<div class='title`+this.elementId+`'>
													<a style="font-size:13px;color:blue;" href="javascript:void(0);" target="_blank">接口请自行添加~</a>
												</div>
											</div>
											<div class='item_box`+this.elementId+`' style='min-height:80px;border:1px dashed #000;'>
												<div class='interface_box`+this.elementId+`'>
													` + category_1_html + `
												</div>
											</div>
											<div class='item_box`+this.elementId+`'>
												<div class='title`+this.elementId+`'><b>免责声明：</b></div>
												<div class='content`+this.elementId+`'>
													1、<b style='color:red;'>需要使用VIP视频解析的，请自行添加接口</b>，版权问题请联系相关解析接口所有者，脚本不承担相关责任！"<br>
													2、为创造良好的创作氛围，请大家支持正版！<br>
													3、脚本仅限个人学习交流，使用即已代表您已经充分了解相关问题，否则后果自负，特此声明！<br>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="img_box`+this.elementId+`" id="img_quickly_6667897iio"><img src='`+quicklyBase64+`' title='快速开始(当前所选接口：`+(currentQuicklyInterfaceObject==null ? '无' : currentQuicklyInterfaceObject.name)+`)'/></div>
							</div>
							`;
			$("body").append(htmlMould);
		};
		this.runEvent = function(){	 //事件运行
			var that = this;
			$("#vip_movie_box"+this.elementId+" >.plugin_inner_"+this.elementId).on("mouseover", () => {
				$(".showhide_box"+this.elementId).show();
			});
			$("#vip_movie_box"+this.elementId+" >.plugin_inner_"+this.elementId).on("mouseout", () => {
				$(".showhide_box"+this.elementId).hide();
			});
			$("body").on("click","#vip_movie_box"+this.elementId+" .vip_mod_box_action_687ii>.item_box"+this.elementId+">.interface_box"+this.elementId+">span",function(){
				var index = parseInt($(this).attr("data-index"));
				var playObject = that.originalInterfaceList[index];
				that.showPlayerWindow(playObject);
				
				$("#vip_movie_box"+that.elementId+" .vip_mod_box_action_687ii> .item_box"+that.elementId+">.interface_box"+that.elementId+">span").removeClass("selected");
				$(this).addClass("selected");
				commonFunctionObject.GMsetValue(that.quicklyInterfaceKey, index);
				
				$("#img_quickly_6667897iio").find("img").attr("title","快速开始(当前所选接口："+playObject.name+")");
			});
						
			//点击视频播放界面
			$("#img_box_jump_6667897iio").on("click", function(){
				commonFunctionObject.GMopenInTab("https://laisoyiba.com/mov/s/?sv=3&url="+window.location.href);
			});
			
			//点击弹出设置框
			$("#img_set_6667897iio").on("click", function(){
				that.showSetingDialog();
			});
			
			$("#img_quickly_6667897iio").on("click", function(){
				const quicklyInterfaceIndex = that.getQuicklyInterfaceIndex();
				var playObject = that.originalInterfaceList[quicklyInterfaceIndex];
				that.showPlayerWindow(playObject);
			});
			
			//右键移动位置
			var movie_box = $("#vip_movie_box"+this.elementId);
			movie_box.mousedown(function(e) {
				if (e.which == 3) {
					e.preventDefault()
					movie_box.css("cursor", "move");
					var positionDiv = $(this).offset();
					var distenceX = e.pageX - positionDiv.left;
					var distenceY = e.pageY - positionDiv.top;
					
					$(document).mousemove(function(e) {
						var x = e.pageX - distenceX;
						var y = e.pageY - distenceY;
						var windowWidth = $(window).width();
						var windowHeight = $(window).height();
						
						if (x < 0) {
							x = 0;
						} else if (x >  windowWidth- movie_box.outerWidth(true) - 100) {
							x = windowWidth - movie_box.outerWidth(true) - 100;
						}
						
						if (y < 0) {
							y = 0;
						} else if (y > windowHeight - movie_box.outerHeight(true)) {
							y = windowHeight - movie_box.outerHeight(true);
						}
						movie_box.css("left", x);
						movie_box.css("top", y);
						commonFunctionObject.GMsetValue("Position_" + window.location.host,{ "left":x, "top":y});
					});
					$(document).mouseup(function() {
						$(document).off('mousemove');
						movie_box.css("cursor", "pointer");
					});
					$(document).contextmenu(function(e) {
						e.preventDefault();
					})
				}
			});
		};
		this.removeVideoAdBlock_iqiyi = function(){
			
		},
		this.removeVideoAdBlock_vqq = function(){

		},
		this.removeVideoAdBlock_youku = function(){
			
		},
		this.removeVideoAdBlock_mgtv = function(){
			
		},
		this.removeVideoAdBlock_sohu = function(){
			
		},
		this.removeVideoAdBlock = function(){
			const currentHost = window.location.host;
			if(currentHost.indexOf("www.iqiyi.com")!=-1){
				this.removeVideoAdBlock_iqiyi();
			}else if(currentHost.indexOf("v.qq.com")!=-1){
				this.removeVideoAdBlock_vqq();
			}else if(currentHost.indexOf("v.youku.com")!=-1){
				this.removeVideoAdBlock_youku();
			}else if(currentHost.indexOf("www.mgtv.com")!=-1){
				this.removeVideoAdBlock_mgtv();
			}else if(currentHost.indexOf("tv.sohu.com")!=-1){
				this.removeVideoAdBlock_sohu();
			}
		};
		this.showSetingDialog = function(){
			const that = this;
			var customInterfaceKey = that.customInterfaceKey;
			var customInterface = commonFunctionObject.GMgetValue(customInterfaceKey, "");
			
			var content = `
				<div>
					<div style="font-size:14px;font-weight:700;color:#000;">自定义解析接口</div>
					<div style="font-size:13px;color:red;">					
						数据格式：[名字] + [,] + [接口地址]<br>
						例如：就是名字而已,https://jx.idc126.net/jx/?url=	<br>
						注：一行一个
					</div>
					<div style="margin-top:5px;height:200px;width:100%;">
						<textarea 
							placeholder="请严格按照格式填写，否则不生效"
							class="custom-interface-textarea"
							style="font-size:14px;box-sizing: border-box;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;padding:5px;height:100%;width:100%;Overflow:auto;border:1px solid #ccc;resize:none;background-color:#FFF;outline:none;">`+customInterface+`</textarea>
					</div>
					<div style="text-align:center;margin-top:15px;">
						<button class="save-custom-interface-btn">保存自定义接口</button>
					</div>
				</div>
			`;
			popup.dialog({
				"title":"解析接口添加",
				"content":content,
				"onContentReady":function($that){
					var $saveCustomInterfaceBtn = $that.dialogContent.querySelector(".save-custom-interface-btn");
					$saveCustomInterfaceBtn.addEventListener("click", function(){
						var $customInterfaceTextarea = $that.dialogContent.querySelector(".custom-interface-textarea");
						var content = $customInterfaceTextarea.value;
						commonFunctionObject.GMsetValue(customInterfaceKey, content);
						commonFunctionObject.webToast({"message":"自定义接口保存成功", "background":"#FF4D40"});
					});
				}
			})
		}
		this.start = function(){			
			let delayTimeMs = 0;
			if(window.location.host.indexOf("www.bilibili.com")!=-1){
				delayTimeMs = 2200;
			}
			setTimeout(()=>{
				try{
					this.removeVideoAdBlock();
				}catch(e){}
				try{
					this.analysisCustomInterface();
					this.addHtmlElements();
					this.runEvent();
				}catch(e){}
			}, delayTimeMs);
		};
	};
	
	/**
	 * 移动端VIP解析
	 * @param {Object} originalInterfaceList
	 */
	function superVideoHelperMobile(originalInterfaceList){
		this.originalInterfaceList = originalInterfaceList;
		this.elementId = Math.ceil(Math.random()*100000000)+"mmx";
		this.quicklyInterfaceKey = "custom_mobile_quickly_interface_key_dddsdxxa";
		this.defaultQuicklyInterfaceIndex = 2;
		this.playerNodes=[
			{"url":"m.iqiyi.com", "showNode":".m-video-player-wrap", "color":"#05B03B"},
			{"url":"m.v.qq.com", "showNode":".mod_player", "color":"#F99D39"},
			{"url":"m.youku.com", "showNode":".h5-detail-player", "color":"#08BAFD"},
			{"url":"m.mgtv.com", "showNode":".video-area", "color":"#E95904"}
		];
		this.isRun = function(){ //判断是否运行
			const host = window.location.host;
			const urls = ["m.iqiyi.com","m.v.qq.com","m.youku.com", "m.mgtv.com", "m.bilibili.com"];
			var result = false;
			if(host.startsWith("m.")){ //是移动端执行
				for(var i=0; i<urls.length; i++){
					if(host.indexOf(urls[i]) != -1){
						result = true;
						break;
					}
				}
			}
			return result;
		};
		this.getwindowElement = function(){
			var nodeObject = null;
			for(var i in this.playerNodes) { //获得窗口ID
				if (this.playerNodes[i].url == window.location.host) {
					nodeObject = this.playerNodes[i];
					break;
				}
			}
			return nodeObject;
		};
		this.getQuicklyInterfaceIndex = function(){
			var quicklyInterfaceIndexString = commonFunctionObject.GMgetValue(this.quicklyInterfaceKey,"")+"";
			var quicklyInterfaceIndex = this.defaultQuicklyInterfaceIndex;
			if(!!quicklyInterfaceIndexString){
				quicklyInterfaceIndex = parseInt(quicklyInterfaceIndexString);
			}
			if(this.originalInterfaceList.length-1<quicklyInterfaceIndex){
				quicklyInterfaceIndex = this.defaultQuicklyInterfaceIndex;
			}
			return quicklyInterfaceIndex;
		};
		this.addHtmlElements = function(){
			let nodeObject = this.getwindowElement();
			const quicklyInterfaceIndex = this.getQuicklyInterfaceIndex();
			if(!nodeObject) return;
			return new Promise((resolve, reject)=>{
				const elementInterval = setInterval(()=>{
					const nodeElementObject = $(nodeObject.showNode), themeColor = nodeObject.color;
					
					if(nodeElementObject.length == 0) return;
					clearInterval(elementInterval);
										
					//添加HTML
					let category_1_html = "";
					this.originalInterfaceList.forEach((item, index) => {
						if (item.showType != 1) {
							var selected = "";
							if(index==quicklyInterfaceIndex){
								selected = "selected";
							}
							category_1_html += "<option value='"+item.url+"' index='"+index+"' "+selected+">"+item.name+"</option>";
						}
					});
					var htmlMould = `
						<div style="margin:15px 15px 50px 15px;padding:10px;background-color:`+themeColor+`;border-radius:4px;cursor:pointer;z-index: 999999999999999999999;color:#FFF;">
								<div style="font-weight:700;font-size:14px;text-align:center;">
									<span>选择解析接口</span>
									<select id="interface_selection_`+this.elementId+`" style="background-color:#FFF;padding: 0px 10px;">
										`+category_1_html+`
									</select>
								</div>
								<div style="text-align:center;">
									<a href="javascript:void(0);" id="start_analysis_outer_`+this.elementId+`" style="box-sizing:border-box;margin:10px 0px;display:inline-block;padding:10px 0px;width:100%;border-radius:4px;color:#FFF;background-color:#F2503F;font-size:14px;">站外解析</a>
								</div>
								<div style="text-align:left;font-size:10px;">
									<div>
										免责申明：1、VIP视频解析中所用到的解析接口全部收集自互联网（源码可见），版权问题请联系相关解析接口所有者！
										2、为创造良好的创作氛围，请大家支持正版！
										3、脚本仅限个人学习交流，切勿用于任何商业等其它用途！
										4、继续使用，即表明你已经明确使用脚本可能带来的风险，且愿意自行承担相关风险，对于风险脚本不承担任何责任！
									</div>
								</div>
						</div>
					`;
					nodeElementObject.after(htmlMould);
					resolve("ok");
				}, 100);
			});
		};
		this.getPlayObjectBySelect = function(){
			
			var indexString = $("#interface_selection_"+this.elementId).find("option:selected").attr("index");
			var index = 0;
			if(!!indexString){
				index = parseInt(indexString);
			}
			return this.originalInterfaceList[index];
		};
		this.runEvent = function(){	 //事件运行
			const self = this;

			//初始化
			var playObject = self.getPlayObjectBySelect();
			$('#start_analysis_outer_'+self.elementId).attr("href", playObject.url + window.location.href);
			$('#start_analysis_outer_'+self.elementId).on('click', function (e) {
				if(commonFunctionObject.GMgetValue("copyright_video_remind_mobile_outer",null)==="true"){
					
				}else{
					var r=confirm(
						"脚本运行提醒！！！\u000d"+
						"使用站外解析功能，视频解析时脚本跳出本页面，如不同意此脚本行为，请点击【取消】按钮！！"
					);
					if(r==false){
						e.preventDefault();
					}else{
						commonFunctionObject.GMsetValue("copyright_video_remind_mobile_outer","true");
					}
				}
			});
			//接口切换
			$('#interface_selection_'+self.elementId).on('change', function () {
				var $option = $(this).find("option:selected");
				var value = $option.val();
				var index = parseInt($option.attr("index"));
				$('#start_analysis_outer_'+self.elementId).attr("href", value+window.location.href);
				commonFunctionObject.GMsetValue(self.quicklyInterfaceKey, index);
			});
		};
		this.start = function(){
			const self = this;
			if(this.isRun()){
				this.addHtmlElements().then(()=>{
					self.runEvent();
				});
			}
		}
	}
	
	/**
	 * B站相关功能：视频多P下载，一键三联，浏览记录等
	 */
	function bilibiliHelper(){
		this.isRun = function(){
			return window.location.host.indexOf("bilibili.com") != -1
		}
		this.baseFunction = function(){
			/**
			 * b站基本功能，一件三连、视频解析、视频下载
			 */ 
			function baseFunctionObject(){
				this.elementId = Math.ceil(Math.random()*100000000)+"mmx";
				this.downloadResutError=function(btnElement){
					btnElement.text("下载视频（最高清）");
					btnElement.removeAttr("disabled");
				};
				this.downloadResutSuccess=function(btnElement){
					btnElement.text("下载视频（最高清）");
					btnElement.removeAttr("disabled");
				};
				this.getDownloadPages = function(){
					return new Promise(function(resolve, reject) {
						var pathname = window.location.pathname, bv = null;
						if (pathname.indexOf("/medialist/play/watchlater/") != -1) { // 在下载视频的时候针对稍后再看页面的链接找BV号
						    bv = pathname.replace("/medialist/play/watchlater/","").replace("/","");
						}else{
							bv = pathname.replace("/video/","").replace("/","");
						}
						if(!bv){
							resolve({"status":"bv_null"});
							return;
						}
						//bv转av
						commonFunctionObject.request("get", "http://api.bilibili.com/x/web-interface/archive/stat?bvid="+bv, null).then((resultData)=>{
							let dataJson = JSON.parse(resultData.data);
							if(!dataJson || dataJson.code!==0 || !dataJson.data){
								resolve({"status":"request_error"});
								return;
							}
							
							let aid = dataJson.data.aid;
							if(!aid){
								resolve({"status":"aid_null"});
								return;
							}
							
							//获取cid
							commonFunctionObject.request("get", "https://api.bilibili.com/x/web-interface/view?aid="+aid, null).then((resultData2)=>{
								let dataJson2 = JSON.parse(resultData2.data);
								if(!dataJson2 || dataJson2.code!==0 || !dataJson2.data){
									resolve({"status":"request_error"});
									return;
								}
								const downloadData = dataJson2.data;
								const aid = downloadData.aid, bvid = downloadData.bvid;
								const pages = new Array();
								for(var i=0; i<downloadData.pages.length; i++){
									let pageData = downloadData.pages[i];
									pages.push({
										"cover":pageData.first_frame,
										"page":pageData.page,
										"part":pageData.part,
										"cid":pageData.cid
									});
								}
								resolve({"status":"success", "downloadData":{
									"aid":aid, "bvid":bvid, "pages":pages
								}});
							}).catch((errorData)=>{
								resolve({"status":"request_error"});
							});
						}).catch((errorData)=>{
							resolve({"status":"request_error"});
						});
					});
				};
				this.startDownloadFile = function(options){
					let aid = options.aid, cid = options.cid, fileName = options.fileName, 
						savePath = options.savePath, RPCURL = options.RPCURL, RPCToken = options.RPCToken;
					let isByPRC = options.isByPRC;
					
					commonFunctionObject.request("get", "https://api.bilibili.com/x/player/playurl?avid="+aid+"&cid="+cid+"&qn=112", null).then((resultData3)=>{
						let dataJson3 = JSON.parse(resultData3.data);
						console.log("获取视频数据，准备下载", dataJson3);
						if(!!dataJson3 && dataJson3.code===0 && !!dataJson3.data){
							let downloadUrl = dataJson3.data.durl[0].url;
							if(isByPRC){
								if(!fileName) fileName = (new Date()).getTime()+"";
								fileName = fileName.replace(/[\ |\~|\`|\=|\||\\|\;|\:|\"|\'|\,|\.|\>|\/]/g,"") + ".flv";  //B站下载默认FLV格式
								commonFunctionObject.RPCDownloadFile(fileName, downloadUrl, savePath, RPCURL).then((data)=>{
									commonFunctionObject.webToast({"message":data, "time":3000});
								}).catch((data)=>{
									commonFunctionObject.webToast({"message":data, "time":3000});
								});
							}else{
								window.open(downloadUrl);
							}
						}else{
							commonFunctionObject.webToast({"message":"获取下载链接失败", "background":"#FF4D40"});
						}
					}).catch((errorData)=>{
						commonFunctionObject.webToast({"message":"获取下载链接失败", "background":"#FF4D40"});
					});
				};
				this.createModals = function(){
					var css = `
						.modal-mask-`+this.elementId+`{
							position:fixed;
							top:0;
							left:0;
							z-index:999;
							width:100%;
							height:100%;
							display:none;
							background-color:#000;
							opacity:0.3;
							overflow:hidden;
						}
						.modal-body-`+this.elementId+`{
							position:fixed;
							border-radius:5px;
							background-color: #FFFFFF;
							top:10%;
							width:600px;
							max-width:90%;
							max-height:80%;
							z-index:1000;
							left: 50%;
							transform: translateX(-50%);
							display:none;
							padding: 10px;
							overflow-y: auto;
						}
						.modal-body-`+this.elementId+` >.page-header{
							height:30px;
							line-height:30px;
							position:relative;
						}
						.modal-body-`+this.elementId+` >.page-header >span{
							display:inline-block;
						}
						.modal-body-`+this.elementId+` >.page-header >span:nth-child(1) {
							font-size:18px;
							font-weight:bold;
							position:absolute;
							left:10px;
						}
						.modal-body-`+this.elementId+` >.page-header >span:nth-child(2) {
							font-size:28px;
							font-weight:bold;
							position:absolute;
							right:10px;
							cursor:pointer;
						}
						.modal-body-`+this.elementId+` >.page-container{
							max-height: 500px;
							overflow-y: auto;
						}
						.modal-body-`+this.elementId+` .page-wrap{
							display: flex;
							flex-wrap: wrap;
							margin-top:5px;
						}
						.modal-body-`+this.elementId+` .page-wrap >.board-item{
							display: block;
							width: calc(50% - 10px);
							background-color: #6A5F60;
							margin: 5px;
							background-color:#FB7299;
							color:#FFFFFF;
							cursor: pointer;
							overflow:hidden;
							white-space:nowrap;
							text-overflow:ellipsis;
						}
						.modal-body-`+this.elementId+` .page-wrap >.board-item >input{
							width: 14px;
							height: 14px;
							vertical-align: middle;
							margin-right:5px;
						}
						.modal-body-`+this.elementId+` .page-wrap >.board-item >span{
							vertical-align: middle;
						}
						.modal-body-`+this.elementId+` .modal-btn-wrap{
							text-align: center;
							margin-top: 10px;
							cursor: pointer;
						}
						.modal-body-`+this.elementId+` .aria2-setting{
							border:1px dashed #F1F1F1;
							border-radius:4px;
							margin-top:10px;
						}
						.modal-body-`+this.elementId+` .aria2-setting >.setting-item{
							text-align: center;
							font-size:14px;
							margin:10px 0px;
						}
						.modal-body-`+this.elementId+` .aria2-setting >.setting-item .topic-name{
							display:inline-block;
							width:80px;
							text-align:left;
						}
						.modal-body-`+this.elementId+` .aria2-setting >.setting-item> input{
							width:300px;
							padding-left:10px;
							border:1px solid #888;
							outline:none;
							border-radius:3px;
						}
						.modal-body-`+this.elementId+` .modal-btn-wrap >span{
							border:1px solid #ccc;
							display:inline-block;
							padding:3px 5px;
							margin:0px 5px;
							border-radius:3px;
						}
						.modal-body-`+this.elementId+` .tip-wrap{
							margin-top: 10px;
							font-size:12px;
						}
						.modal-body-`+this.elementId+` .tip-wrap >.title{
							font-size:16px;
							font-weight:bold;
						}
						.modal-body-`+this.elementId+` .tip-wrap >.content >ul >li{
							margin-top:5px;
						}
					`;
					
					var savePath = "D:/";
					if("macOS"===commonFunctionObject.getSystemOS()){
						savePath = "/Users"
					}
					var html = `
						<div class='modal-mask-`+this.elementId+`'></div>
						<div class='modal-body-`+this.elementId+`'>
							<div class="page-header">
								<span>视频下载(可批量)</span>
								<span class="close">×</span>
							</div>
							<div class="page-container">
								<div class="page-wrap"></div>
								<div class="aria2-setting">
									<div class="setting-item">
										<label class="topic-name">配置RPC:</label><input type="text" name="RPCURL" value="ws://localhost:16800/jsonrpc" placeholder="请准确输入RPC对应软件的地址，默认：Motrix">
									</div>
									<div class="setting-item">
										<label class="topic-name">配置Token:</label><input type="text" name="RPCToken" placeholder="默认无需填写">
									</div>
									<div class="setting-item">
										<label class="topic-name">保存路径:</label><input type="text" name="savePath" value="`+savePath+`" placeholder="请准确输入文件保存路径">
										<div style="font-size:12px;color:#888;">最好自定义下载地址，默认地址可能不满足需要</div>
									</div>
								</div>
								<div class="modal-btn-wrap">
									<span name="selectall">全选</span>
									<span name="removeSelect">取消选择</span>
									<span name="downloadAll">批量下载</span>
								</div>
								<div class="tip-wrap">
									<div class="title">关于单P下载：</div>
									<div class="content"><span>点击弹框单个选集，即可下载单集视频(当前版本单P下载失效，正在想办法解决)</span></div>
									<div class="content"><span style="color:red;">单P下载，推荐大家使用BBDown下载，此工具功能很强大，具体查看：<a target="_blank" href="https://github.com/nilaoda/BBDown">https://github.com/nilaoda/BBDown</a></span></div>
								</div>
								<div class="tip-wrap">
									<div class="title">关于批量下载：</div>
									<div class="content">
										<ul>
											<li>
												<b>1、批量下载需要第三方软件的支持，脚本推荐使用：Motrix</b>
												<ul>
													<li>Motrix下载地址：<a href="https://motrix.app/zh-CN/" target="_blank">https://motrix.app/zh-CN/</a></li>
													<li>AriaNgGUI下载地址：<a href="https://github.com/Xmader/aria-ng-gui" target="_blank">https://github.com/Xmader/aria-ng-gui</a></li>
												</ul>
											</li>
											<li>
												<b>2、在批量下载前需要提前打开软件，本教程以Motrix为准</b>
												<ul>
													<li>(1)、如果全部按照默认配置，只需要打开软件即可</li>
													<li>(2)、如果想自定义RPC地址和文件保存路径，可更改上面输入框的内容（此数据非常重要，请准确填写）</li>
													<li>
													(3)、Motrix运行图片
													<img src="https://pic.rmb.bdstatic.com/bjh/8912582c0416119405ec37ea27d12376.jpeg" width="100%" />
													</li>
												</ui>
											</li>
											<li>
												<b>3、默认RPC默认地址</b>
												<ul>
													<li>(1)、Motrix RPC默认地址：ws://localhost:16800/jsonrpc</li>
													<li>(2)、Aria2 RPC默认地址：ws://localhost:6800/jsonrpc</li>
												</ul>
											</li>
											<li>
												<b>3、如使用AriaNgGUI，使用方式类似，大家可以自行研究</b>
											</li>
										</ul>
									</div>
								</div>
								<div class="tip-wrap">
									<div class="title">必要说明：</div>
									<div class="content">
										申明：本功能仅能作为学习交流使用，且不可用于其它用途，否则后果自负。请大家重视版权，尊重创作者，切勿搬运抄袭。请大家多用[一键三连]为创作者投币~，小破站牛掰！
									</div>
								</div>
							</div>
						</div>
					`;
					commonFunctionObject.GMaddStyle(css);
					$("body").append(html);
				};
				this.hideModals = function(){
					$(".modal-body-"+this.elementId+"").css('display','none');
					$(".modal-mask-"+this.elementId+"").css('display','none');
				};
				this.showModals = function(pageHtml){
					const self = this;
					$(".modal-body-"+self.elementId+"").css('display','block');
					$(".modal-mask-"+self.elementId+"").css('display','block');
					$(".modal-body-"+self.elementId+" .page-wrap").html(pageHtml);
					
					$(".modal-body-"+self.elementId+" .page-wrap >.board-item >span").off("click").on("click", function(){
						$(this).css("background-color","#ccc");
						let downloadOptions={
							"aid":$(this).data("aid"),
							"cid":$(this).data("cid"),
							"isByPRC":false
						}
						self.startDownloadFile(downloadOptions);
					});
					$(".modal-body-"+self.elementId+" .page-header >span.close").off("click").on("click", function(){
						self.hideModals();
					});
					$(".modal-body-"+self.elementId+" .modal-btn-wrap >span[name='selectall']").off("click").on("click", function(){
						$(".modal-body-"+self.elementId+" .page-wrap").find("input[type='checkbox']").each(function(){
							$(this).prop('checked', true);
						});
					});
					$(".modal-body-"+self.elementId+" .modal-btn-wrap >span[name='removeSelect']").off("click").on("click", function(){
						$(".modal-body-"+self.elementId+" .page-wrap").find("input[type='checkbox']").each(function(){
							$(this).prop('checked', false);
						});
					});
					$(".modal-body-"+self.elementId+" .modal-btn-wrap >span[name='downloadAll']").off("click").on("click", function(){
						let inputElements = $(".modal-body-"+self.elementId+" .page-wrap input[type='checkbox']:checked");
						if(inputElements.length == 0){
							commonFunctionObject.webToast({"message":"至少需要选中1P", "background":"#FF4D40"});
							return;
						}
						let RPCURL = $(".modal-body-"+self.elementId+" input[name='RPCURL']").val();
						let savePath = $(".modal-body-"+self.elementId+" input[name='savePath']").val();
						let RPCToken = $(".modal-body-"+self.elementId+" input[name='RPCToken']").val();
						
						if(!savePath){
							commonFunctionObject.webToast({"message":"保存路径不能为空", "background":"#FF4D40"});
							return;
						}
						if(!RPCURL){
							commonFunctionObject.webToast({"message":"PRC地址不能为空", "background":"#FF4D40"});
							return;
						}
						RPCToken = !RPCToken ? "" : RPCToken;
						let downloadOptions = {
							"aid":"",
							"cid":"",
							"isByPRC":true,
							"fileName":"",
							"savePath":savePath,
							"RPCURL":RPCURL,
							"RPCToken":RPCToken
						}
						console.log("downloadOptions", downloadOptions);
						inputElements.each(function(){
							setTimeout(()=>{
								let aid=$(this).data("aid"), cid = $(this).data("cid"), fileName = $(this).attr("title");
								downloadOptions.aid = aid;
								downloadOptions.cid = cid;
								downloadOptions.fileName = fileName;
								self.startDownloadFile(downloadOptions);
							}, 1000);
						})
					});
				};
				this.createElementHtml = function(){
					this.createModals();  //创建弹框
					const randomNumber = this.elementId, self = this;
					let cssText = `
						#bilibili_exti_`+randomNumber+`{
							padding:10px;
						}
						#bilibili_exti_`+randomNumber+` >.self_s_btn{
							background-color:#FB7299;
							color:#FFF;
							font-size:10px;
							display:inline-block;
							margin-right:15px;
							padding:2px 4px;
							border-radius:3px;
							cursor:pointer;
						}
					`;
					let htmlText=`
						<div id="bilibili_exti_`+randomNumber+`">
							<span class="self_s_btn" id="download_s_`+randomNumber+`">下载视频（最高清）</span>
							<span class="self_s_btn" id="focus_s_`+randomNumber+`">一键三连</span>
						</div>
					`;
					setTimeout(()=>{ //延时的目的是让B站先加载完全				
						const playerInterval = setInterval(()=>{
							let $viewboxReport = $("#arc_toolbar_report");
							if($("#focus_s_"+randomNumber).length==0 && $viewboxReport.length!=0){
								$("body").prepend("<style>"+cssText+"</style>");
								$viewboxReport.before(htmlText);
							}else{
								clearInterval(playerInterval);
							}
						}, 100);
					}, 2800);
					
					$("body").on("click", "#download_s_"+randomNumber, function(){
						const btnElement = $(this);
						btnElement.attr("disabled", "disabled");
						btnElement.text("下载视频（准备中）");
						//开始准备下载数据
						self.getDownloadPages().then((resule)=>{
							if(resule.status==="success"){
								var aid = resule.downloadData.aid, pages = resule.downloadData.pages, itemHtml = "";
								for(var i=0; i<pages.length; i++){
									var title = "【P"+pages[i].page+"】"+pages[i].part+"";
									itemHtml += "<div class='board-item'>";
									itemHtml += "<input data-aid='"+aid+"' data-cid='"+pages[i].cid+"' title='"+title+"' type='checkbox'>"
									itemHtml += "<span data-aid='"+aid+"' data-cid='"+pages[i].cid+"' title='"+title+"'>"+title+"</span>";
									itemHtml += "</div>";
								}
								self.showModals(itemHtml);
								self.downloadResutSuccess(btnElement);
							}else{
								self.downloadResutError(btnElement);
							}
						}).catch((error)=>{
							self.downloadResutError(btnElement);
						});
					});
					$("body").on("click", "#focus_s_"+randomNumber, function(){
						$("#arc_toolbar_report .like").click(); // 点赞
						$("#arc_toolbar_report .coin").click(); // 投币
						$("#arc_toolbar_report .collect").click(); // 收藏
					});
				}
				this.start = function(){
					let locationHost = window.location.host, locationPathname = window.location.pathname;
					if(locationHost==="www.bilibili.com" && (locationPathname.indexOf("/video")!=-1 || locationPathname.indexOf("/watchlater")!=-1)){
						this.createElementHtml();
					}
				}
			}
			try{
				(new baseFunctionObject()).start();
			}catch(e){
				console.log("baseFunctionObject new error", e);
			}
		};
		/**
		 * 浏览历史记录提醒
		 */
		this.recordViewFunction = function(){
			function recordViewObject(){
				this.localCacheName = "bilibili_video_record"; 
				this.recordOneVideo = function(){
					let promise = new Promise((resolve, reject)=>{
						let bv = commonFunctionObject.getBilibiliBV();
						let cacheText = commonFunctionObject.GMgetValue(this.localCacheName);
						cacheText = !cacheText ? "" : cacheText
						let maxLength = 12*500;
						let currentLength = cacheText.length;
						if(currentLength > maxLength){
							cacheText = cacheText.substring(12*100, currentLength);
						}
						
						if(cacheText.indexOf(bv)==-1){
							cacheText += bv;
							commonFunctionObject.GMsetValue(this.localCacheName, cacheText);
						}
						resolve({"result":"success"});
					});
				};
				this.searchPageRemindHtml = function($ele, top=8, right=8){
					if($ele.find("div[name='marklooked']").length==0){						
						$ele.css("position","relative");
						$ele.append("<div name='marklooked' style='z-index: 100;position:absolute; top:"+top+"px; right:"+right+"px; background-color: rgba(251,123,159,1); border-radius:3px; font-size:10px; color:#FFF;padding:0px 2px;'>已看</div>");
					}
				};
				this.searchPageRemind = function(){
					let $that = this;
					var elementArray = [
						{"node":".bili-video-card", "top":8, "right":12},  //兼容 MAC M1搜索结果
						{"node":"#page-index .small-item", "top":12, "right":12},  //用户投稿
						{"node":"#submit-video-list .small-item", "top":12, "right":12}, //用户主页
						{"node":"#page-series-detail .small-item.fakeDanmu-item", "top":12, "right":12}, //用户主页投稿
					];
					setInterval(function(){
						let cacheText = commonFunctionObject.GMgetValue($that.localCacheName);
						cacheText = !cacheText ? "" : cacheText;
						for(var i=0; i<elementArray.length; i++){
							var elementobj = elementArray[i];
							$(elementobj.node).each(function(){
								if($(this).attr("dealxll")!=="true"){
									var videourl = $(this).find("a[href^='//www.bilibili.com/video']").attr("href");
									if(!!videourl){
										var bvs = videourl.match(/(\/BV(.*?)\/)/g)
										if(bvs.length==1){
											var bv = bvs[0].replace(/\//g,"");
											if(cacheText.indexOf(bv) != -1){
												$that.searchPageRemindHtml($(this), elementobj.top, elementobj.right);
											}
											$(this).unbind("click").bind("click", ()=>{  //循环操作，单独绑定
												$that.searchPageRemindHtml($(this), elementobj.top, elementobj.right);
											})
										}
										$(this).attr("dealxll","true");
									}
								}
							});
						}
					}, 500);
				}
				this.start=function(){
					let $that = this;
					if(window.location.pathname.indexOf("/video")!=-1 && window.location.host==="www.bilibili.com"){
						let currentHref = "";
						setInterval(()=>{ //需要循环存储
							if(window.location.href !== currentHref){
								this.recordOneVideo();
								currentHref = window.location.href;
							}
						}, 500);
					}
					//搜索结果和用户主页已经看过的视频提醒
					if(window.location.host.indexOf("bilibili.com")!=-1){
						this.searchPageRemind();
						GM_registerMenuCommand("清空B站浏览记录",function(){
							if(confirm('是否要清空B站浏览记录？清空后将不可恢复...')){
								commonFunctionObject.GMsetValue($that.localCacheName, "");
							}
						});
					}
				};
			}
			try{
				(new recordViewObject()).start();
			}catch(e){
				console.log("recordViewObject new error", e);
			}
		};
		/**
		 * 视频描述文本转链接
		 */
		this.textToLinkFunction = function() {
			function textToLinkObject(){
				this.link = function(){
					if (findAndReplaceDOMText(document.querySelector(".desc-info-text"), {
						find: /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/g,
						replace: function (e, t) {
							let text = e.text;
							let element = null;
							if(text.indexOf("bilibili.com")==-1 && /^(http|ftp|https)/i.test(text)){
								element = document.createElement("a");
								element.setAttribute("href", text)
								element.setAttribute("target", "_blank");
							}else{
								element = document.createElement("span");
							}
							element.innerText = text;
							return element;
						}, 
						preset: "prose"
					}));
				}
				this.start = function(){
					let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
					let bodyMutationObserver = new MutationObserver(()=>{
						this.link()
					});
					let titleElement = document.querySelector("title");
					if(titleElement){
						bodyMutationObserver.observe(titleElement, {"characterData":true,"attributes":true, "childList":true});
					}
				}
			}
			try{
				(new textToLinkObject()).start();
			}catch(e){
				console.log("textToLinkObject new error", e);
			}
		}
		this.start = function(){
			if(this.isRun()){
				this.baseFunction();
				this.recordViewFunction();
				this.textToLinkFunction();
			}
		}
	}
	
	//国外的一些解析
	function abroadVideoHelper(){
		this.isRun = function(){
			var urls=["youtube.com", "facebook.com"];
			for(var i=0; i<urls.length;i++){
				if(window.location.host.indexOf(urls[i])!=-1){
					return true;
				}
			}
			return false;
		};
		this.start = function(){
			if(!this.isRun()){
				return;
			}
			setInterval(function(){
				const host = window.location.host;
				const href = window.location.href;
				const eleId = "free-xx1-player-script-9999";
				
				//youtube解析
				if(host.indexOf("youtube.com")!=-1){
					if(href.indexOf("youtube.com/watch")!=-1){
						if($("#"+eleId).length != 0){
							return;
						}
						$("#player-theater-container").css("z-index",9999999999); //修复全屏显示解析按钮的问题
						var iconVideo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADOUlEQVRoQ+2Zz4uNURjHP9+F8g8gykKJNJMUUmzMDKZmYVYsLBRhOaEmFhRRLCZDY4PBrJRREkUMmY3URCk/s6GMhR9ZWNk9OvXO7b133ve+57w/7szUnLqbe59fn/Oc85znnCvm+NAcj595gHgGzWwDsBZYDawEFgI/gT/AR0nDZWe8lAyYWTewF9iTEeA4MCTpblkghQHM7BxwPDCgAUn9gTqJ4oUAzOwKcChnICOS9uXUranlBjCza8CBggFclHSkiI1cAGbWBTwt4jim2y3pSV5bwQBmtgq4BazP67RB7w3gsvAX+CbpV4hdL4CoPG4H3KcjxEEOWVdyHwPjkq5m6WcCmNmFaIaybFXx+2vgsqSRNOOpAGa2GHhY4lIpAnha0qkkA4kAZuZO0k9FPFag2yHJHYR1Iw3gO7CsgiCKmPwMdEmajBuZBmBmbuMcLOKpQt1BSUdTAczMVZmQmjwtpTmC3xqo0ybpw5ROXQbMrA+45GtQUmYVy7JlZpYl0/B73YZuBAjqbWYI4KWkzWkZeBVSNuMAZua1FBorSY4MTEpangYQlM4EgOdZy6ExazkAiNtoXELvgLasIGr0sT0QZaAVAO8ltadlYBTYNcsB7kjanQZwHjg2ywGaViHXIruN7DVmYA+4lnudpC+JGXBfhlwTZwDAPQi4s6o2kloJ9yzyyKcXajGA64F6JL1tChBlwdX0oIrSgirUK+l+49pudh/IhGhhBvolDSRtzKa9jJktBdxrWk+icvXnwO3oIexFWlXJbMbMbAGwJQWg1o0WWEKpLUjSBcZ7CXnV0ZhQXoBQP/MAUzNgZu5Z8EbRGQT2S7qZ107mHmhmuIQnl2lXxFCQQgDRmTEGbAt1DIxJ2pFDr06lDIBFgDsdlwQE8wNol/Q7QCdRtDBAlIVO4FlAMJ2SMk96H3ulAEQQh4FBD6d9koY85LxESgOIIK67qtLE87CkUt+cSgWIICaAjQkQE5I2eU1rgFAVACsA9/Dk/qGcGv+ANZK+BsTmJVo6QJSFXuBeLIKdkh54RRQoVAlABHECOAOclHQ2MC5v8coAIojR+AuCd1QBgpUCBMSRW3QeIPfUlaT4H0/7RUAi2a/NAAAAAElFTkSuQmCC";
						var html='<div id="'+eleId+'" style="width:25px;padding:10px 0px;text-align:center;background-color:#E5212E;position:fixed;top:250px;left:0px;color:#FFF;font-size:0px;cursor:pointer;margin:0px auto;text-align:center;z-index:9999999;">'+
							'<img src="'+iconVideo+'" style="width:20px;">'+
							'</div>';
						$("body").append(html);
						$("body").on("click", "#"+eleId, function(){
							var location_url = window.location.href;
							var videourl = "https://www.ytdownfk.com/search?url="+location_url;
							commonFunctionObject.GMopenInTab(videourl);
						});
					}else{
						$("#"+eleId).remove();
					}
				}
				
				//facebook解析
				if(host.indexOf("facebook.com")!=-1){
					if(href.indexOf("facebook.com/watch")!=-1 || href.indexOf("/videos/")!=-1){
						if($("#"+eleId).length != 0){
							return;
						}
						var iconVideo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADOUlEQVRoQ+2Zz4uNURjHP9+F8g8gykKJNJMUUmzMDKZmYVYsLBRhOaEmFhRRLCZDY4PBrJRREkUMmY3URCk/s6GMhR9ZWNk9OvXO7b133ve+57w/7szUnLqbe59fn/Oc85znnCvm+NAcj595gHgGzWwDsBZYDawEFgI/gT/AR0nDZWe8lAyYWTewF9iTEeA4MCTpblkghQHM7BxwPDCgAUn9gTqJ4oUAzOwKcChnICOS9uXUranlBjCza8CBggFclHSkiI1cAGbWBTwt4jim2y3pSV5bwQBmtgq4BazP67RB7w3gsvAX+CbpV4hdL4CoPG4H3KcjxEEOWVdyHwPjkq5m6WcCmNmFaIaybFXx+2vgsqSRNOOpAGa2GHhY4lIpAnha0qkkA4kAZuZO0k9FPFag2yHJHYR1Iw3gO7CsgiCKmPwMdEmajBuZBmBmbuMcLOKpQt1BSUdTAczMVZmQmjwtpTmC3xqo0ybpw5ROXQbMrA+45GtQUmYVy7JlZpYl0/B73YZuBAjqbWYI4KWkzWkZeBVSNuMAZua1FBorSY4MTEpangYQlM4EgOdZy6ExazkAiNtoXELvgLasIGr0sT0QZaAVAO8ltadlYBTYNcsB7kjanQZwHjg2ywGaViHXIruN7DVmYA+4lnudpC+JGXBfhlwTZwDAPQi4s6o2kloJ9yzyyKcXajGA64F6JL1tChBlwdX0oIrSgirUK+l+49pudh/IhGhhBvolDSRtzKa9jJktBdxrWk+icvXnwO3oIexFWlXJbMbMbAGwJQWg1o0WWEKpLUjSBcZ7CXnV0ZhQXoBQP/MAUzNgZu5Z8EbRGQT2S7qZ107mHmhmuIQnl2lXxFCQQgDRmTEGbAt1DIxJ2pFDr06lDIBFgDsdlwQE8wNol/Q7QCdRtDBAlIVO4FlAMJ2SMk96H3ulAEQQh4FBD6d9koY85LxESgOIIK67qtLE87CkUt+cSgWIICaAjQkQE5I2eU1rgFAVACsA9/Dk/qGcGv+ANZK+BsTmJVo6QJSFXuBeLIKdkh54RRQoVAlABHECOAOclHQ2MC5v8coAIojR+AuCd1QBgpUCBMSRW3QeIPfUlaT4H0/7RUAi2a/NAAAAAElFTkSuQmCC";
						var html='<div id="'+eleId+'" style="width:25px;padding:10px 0px;text-align:center;background-color:#E5212E;position:fixed;top:250px;left:0px;color:#FFF;font-size:0px;z-index:9999999999999;cursor:pointer;margin:0px auto;text-align:center;">'+
							'<img src="'+iconVideo+'" style="width:20px;">'+
							'</div>';
						$("body").append(html);
						$("body").on("click", "#"+eleId, function(){
							var location_url = window.location.href;
							commonFunctionObject.GMsetValue("facebook_downloader_obj", {"facebook_url":location_url});
							commonFunctionObject.GMopenInTab("https://yt1s.com/facebook-downloader");
						});
					}else{
						$("#"+eleId).remove();
					}
				}
			}, 500);
			
			if(window.location.href.indexOf("yt1s.com/facebook-downloader")!=-1){ //facebook下载
				var facebookObject = commonFunctionObject.GMgetValue("facebook_downloader_obj");
				if(!!facebookObject){
					$("#s_input").val(facebookObject.facebook_url);
				}
			}
		}
	}
	
	//优惠券查询
	function queryCoupon(){
		this.isRun = function(){
			var urls=["detail.tmall.com", "item.taobao.com", "item.jd.com", "item.yiyaojd.com", "npcitem.jd.hk", "detail.tmall.hk"];
			for(var i=0; i<urls.length;i++){
				if(window.location.host.indexOf(urls[i])!=-1){
					return true;
				}
			}
			return false;
		}
		this.getPlatform = function(){
			let host = window.location.host;
			let platform = "";
			if(host.indexOf("detail.tmall")!=-1){
				platform = "tmall";
			}else if(host.indexOf("item.taobao.com")!=-1){
				platform = "taobao";
			}else if(host.indexOf("jd.com")!=-1 || host.indexOf("npcitem.jd.hk")!=-1){
				platform = "jd";
			}
			return platform;
		};
		this.filterStr = function(str){
			if(!str) return "";
			str = str.replace(/\t/g,"");
			str = str.replace(/\r/g,"");
			str = str.replace(/\n/g,"");
			return encodeURIComponent(str)
		};
		this.getParamterQueryUrl = function(tag) { //查询GET请求url中的参数
			var t = new RegExp("(^|&)" + tag + "=([^&]*)(&|$)");
			var a = window.location.search.substr(1).match(t);
			if (a != null){
				return a[2];
			}
			return "";
		};
		this.getEndHtmlIdByUrl = function(url) { //获得以html结束的ID
			if(url.indexOf("?")!=-1){
				url = url.split("?")[0]
			}
			if(url.indexOf("#")!=-1){
				url = url.split("#")[0]
			}
			var splitText = url.split("/");
			var idText = splitText[splitText.length-1];
			idText = idText.replace(".html","");
			return idText;
		};
		this.getGoodsData = async function(platform){
			var goodsId = "";
			var goodsName = "";
			var href = window.location.href;
			if(platform=="taobao"){
				goodsId = this.getParamterQueryUrl("id");
				goodsName=$(".tb-main-title").text();
				try{
					const titleObj = await commonFunctionObject.getElementObject("[class='tb-main-title']", false);
					goodsName = titleObj.getAttribute("data-title");
					if(!goodsName){
						goodsName = titleObj.textContent;
					}
				}catch(e){}
			}else if(platform=="tmall"){
				goodsId = this.getParamterQueryUrl("id");
				try{
					const titleObj = await commonFunctionObject.getElementObject("[class^='ItemHeader--mainTitle--']", false);
					goodsName = titleObj.textContent;
				}catch(e){}

			}else if(platform=="jd"){
				goodsId = this.getEndHtmlIdByUrl(href);
				try{
					const titleObj = await commonFunctionObject.getElementObject("[class='sku-name']", false);
					goodsName = titleObj.textContent;
				}catch(e){}
			}
			// console.log(goodsId, goodsName);
			var data={"goodsId":goodsId, "goodsName":this.filterStr(goodsName)};
			return data;
		};
		this.randomSpmValue=function(){
			$("meta[name='data-spm']").each(function(){
				var max = 5000;
				var min = 1000;
				var randomValue = Math.floor(Math.random() * (max - min + 1) ) + min;
				var randomLetter = String.fromCharCode(Math.floor( Math.random() * 26) + "a".charCodeAt(0));
				$(this).attr("content", randomValue+randomLetter);
			});
			$("meta[name='spm-id']").each(function(){
				var max = 5000;
				var min = 1000;
				var randomValue = Math.floor(Math.random() * (max - min + 1) ) + min;
				var randomLetter = String.fromCharCode(Math.floor( Math.random() * 26) + "a".charCodeAt(0));
				$(this).attr("content", randomValue+randomLetter);
			});
			$("body").find("*").each(function(){
				$(this).removeAttr("data-spm-anchor-id");
				$(this).removeAttr("data-spm");
			});
		};
		this.runAliDeceptionSpm=function() {
			if(window.location.host.indexOf("aliyun.com")!=-1 || window.location.host.indexOf("taobao.com")!=-1 || window.location.host.indexOf("tmall.com")!=-1){
				this.randomSpmValue();
				setInterval(()=>{
					this.randomSpmValue();
				}, 2000);
			}
		};
		this.request = function(mothed, url, param){
			return new Promise(function(resolve, reject){
				GM_xmlhttpRequest({
					url: url,
					method: mothed,
					data:param,
					onload: function(response) {
						var status = response.status;
						var playurl = "";
						if(status==200||status=='200'){
							var responseText = response.responseText;
							resolve({"result":"success", "json":responseText});
						}else{
							reject({"result":"error", "json":null});
						}
					}
				});
			})
		};
		this.createCouponHtml = function(platform, goodsId, goodsName){
			if(!platform || !goodsId) return;
			var goodsCouponUrl = "http://tt.shuqiandiqiu.com/api/coupon/discover?no=5&v=1.0.2&pl="+platform+"&id="+goodsId+"&qu="+goodsName;
			var goodsPrivateUrl = "http://tt.shuqiandiqiu.com/api/private/change/coupon?no=5&v=1.0.2&platform="+platform+"&id=";
			this.request("GET", goodsCouponUrl, null).then((resutData)=>{
				if(resutData.result==="success" && !!resutData.json){
					var data = JSON.parse(resutData.json).data;
					if(!data || data==="null" || !data.css || !data.html || !data.handler){
						return;
					}
					var cssText = data.css;
					var htmlText = data.html;
					var handler = data.handler;
					var templateId = data.templateId;
					if(!cssText || !htmlText || !handler){
						return;
					}
					$("body").prepend("<style>"+cssText+"</style>");
					
					var handlers = handler.split("@");
					for(var i=0; i<handlers.length; i++){
						var $handler = $(""+handlers[i]+"");
						if(platform=="taobao"){
							$handler.parent().after(htmlText);
						}else if(platform=="tmall"){
							$handler.parent().after(htmlText);
						}else if(platform=="jd"){
							$handler.after(htmlText);
						}
					}
					var $llkk = $("#"+templateId);
					if($llkk.length != 0){
						let couponElementA = $llkk.find("a[name='cpShUrl']");
						couponElementA.unbind("click").bind("click", ()=>{
							event.stopPropagation();
							event.preventDefault();
							let couponId = $llkk.data("id");
							if(!!couponId){
								this.request("GET", goodsPrivateUrl+couponId, null).then((resutData2)=>{
									if(resutData2.result==="success" && !!resutData2.json){
										let url = JSON.parse(resutData2.json).url;
										if(!!url) GM_openInTab(url, {active:true});
									}
								});
							}
						});
						setInterval(()=>{
							$llkk.find("*").each(function(){
								$(this).removeAttr("data-spm-anchor-id");
							});
						},400);
						
						//canvas画二维码
						var $canvasElement = $("#ca"+templateId);
						if($canvasElement.length != 0){
							let couponId = $llkk.data("id");
							this.request("GET", goodsPrivateUrl+couponId, null).then((resutData2)=>{
								if(resutData2.result==="success" && !!resutData2.json){
									let img = JSON.parse(resutData2.json).img;
									if(!!img){
										var canvasElement = document.getElementById("ca"+templateId);
										var cxt = canvasElement.getContext("2d");
										var imgData = new Image();
										imgData.src = img;
										imgData.onload=function(){
											cxt.drawImage(imgData, 0, 0, imgData.width, imgData.height);
										}
									}
								}
							});
						}
						
					}
				}
			});
		};
		this.start = async function(){
			if(this.isRun()){				
				var platform = this.getPlatform();
				if(!!platform){
					var goodsData = await this.getGoodsData(platform);
					this.createCouponHtml(platform, goodsData.goodsId, goodsData.goodsName);
				}
			}
			this.runAliDeceptionSpm();
		};
	}
	
	/**
	 * 全网音乐解析下载
	 */
	function superMusicHelper(){
		this.eleId = Math.ceil(Math.random()*100000000);
		this.isRun = function(){
			var urls=["music.163.com","y.qq.com","www.kugou.com","www.kuwo.cn","www.xiami.com","music.taihe.com","music.migu.cn","lizhi.fm","qingting.fm","ximalaya.com"];
			for(var i=0; i<urls.length;i++){
				if(window.location.host.indexOf(urls[i])!=-1){
					return true;
				}
			}
			return false;
		};
		this.getPlayUrl = function(){
			var currentHost = window.location.host;
			var currentUrl = window.location.href;
			var playUrl = null;
			if(currentUrl.match(/music\.163\./)){ //网易云音乐
				if(currentUrl.match(/^https?:\/\/music\.163\.com\/#\/(?:song|dj)\?id/)) {
					playUrl = 'https://music.liuzhijin.cn/?url='+encodeURIComponent(currentUrl);
				}else if(currentUrl.match(/^https?:\/\/y\.music\.163\.com\/m\/(?:song|dj)\?id/)) {
					playUrl = 'https://music.liuzhijin.cn/?url='+encodeURIComponent('https://music.163.com/song?id='+getQueryString('id'));
				}
			}
			else if(currentUrl.match(/y\.qq\.com/)){ //QQ音乐
				if(currentUrl.match(/y\.qq\.com\/n\/ryqq\/player/)){ //整体的播放页面
					var musicInfoUrl = $(".player_music__info >a:first").attr("href")
					if(!!musicInfoUrl) currentUrl = "https://y.qq.com" + musicInfoUrl
				}
				if(currentUrl.indexOf("?")) currentUrl = currentUrl.split("?")[0];
				if(currentUrl.indexOf("#")) currentUrl = currentUrl.split("#")[0];
				var musicMatch = currentUrl.match(/^https?:\/\/y\.qq\.com\/n\/ryqq\/songDetail\/(\S*)/);
				if(musicMatch){
					playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch[1]+'&type=qq'
				}
				if(!playUrl){
					var musicMatch2 = currentUrl.match(/^https?:\/\/y\.qq\.com\/n\/yqq\/song\/(\S*).html/);
					if(musicMatch2){
						playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch2[1]+'&type=qq';
					}
				}
			}
			else if(currentUrl.match(/kugou\.com/)){ //酷狗
				var musicMatch = currentUrl.match(/hash=(\S*)&album/);
				if(musicMatch){
					playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch[1]+'&type=kugou';
				}
			}
			else if(currentUrl.match(/kuwo\.cn/)){  //酷我
				if(currentUrl.indexOf("?")) currentUrl = currentUrl.split("?")[0];
				if(currentUrl.indexOf("#")) currentUrl = currentUrl.split("#")[0];
				var musicMatch = currentUrl.match(/play_detail\/(\S*)/);
				if(musicMatch){
					playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch[1]+'&type=kuwo';
				}
			}
			else if(currentUrl.match(/www\.ximalaya\.com/)){ //喜马拉雅
			    var xmlyUrlArr = currentUrl.split("/");
			    for(var xuaIndex =0;xuaIndex<xmlyUrlArr.length;xuaIndex++){
			        if(xuaIndex==xmlyUrlArr.length-1){
						playUrl = 'https://music.liuzhijin.cn/?id='+xmlyUrlArr[xuaIndex]+'&type=ximalaya&playUrl='+encodeURIComponent(currentUrl);
			        }
			    }
			}
			else if(currentUrl.match(/www\.lizhi\.fm/)){ //荔枝音乐
				if(currentUrl.indexOf("?")) currentUrl = currentUrl.split("?")[0];
				if(currentUrl.indexOf("#")) currentUrl = currentUrl.split("#")[0];
				var musicMatch = currentUrl.match(/^https?:\/\/www\.lizhi\.fm\/(\d*)\/(\d*)/);
				if(musicMatch){
					playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch[2]+'&type=lizhi';
				}
			}
			else if(currentUrl.match(/music\.migu\.cn/)){ //咪咕音乐
				if(currentUrl.indexOf("?")) currentUrl = currentUrl.split("?")[0];
				if(currentUrl.indexOf("#")) currentUrl = currentUrl.split("#")[0];
				var musicMatch = currentUrl.match(/^https?:\/\/music\.migu\.cn\/v3\/music\/song\/(\S*)/);
				if(musicMatch){
					playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch[1]+'&type=migu';
				}
			}
			return playUrl;
		};
		this.addStyle=function(){
			var innnerCss = 
			"@keyframes turnaround{0%{-webkit-transform:rotate(0deg);}25%{-webkit-transform:rotate(90deg);}50%{-webkit-transform:rotate(180deg);}75%{-webkit-transform:rotate(270deg);}100%{-webkit-transform:rotate(360deg);}}"+
			"#plugin_kiwi_analysis_vip_music_box_"+this.eleId+" {position:fixed; top:150px; left:0px; width:26px; background-color:#FF4D40;z-index:9999999899999;}"+
			"#plugin_kiwi_analysis_vip_music_box_"+this.eleId+" >.plugin_item{cursor:pointer; width:100%; padding:10px 0px; text-align:center;}"+
			"#plugin_kiwi_analysis_vip_music_box_"+this.eleId+" >.plugin_item >img{width:20px; display:inline-block; vertical-align:middle;animation:turnaround 4s linear infinite;}";
			$("body").prepend("<style>"+innnerCss+"</style>");
		};
		this.generateHtml=function(){
			var $that = this;
			var html="";
			var vipImgBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADJklEQVRYR6WXS6hOURTHf/8wux4TMZCBxwApJRSKXG8uGbieKQYGXpEMKLkGGFCURyEDJHFL6cr1uF4DlDJATDwGBnKVtzJAS0v7u53vfPvcc75j1e57nL3X+u2193ocUVDMrB8wFZgCjAcGhOEaOsN4BNwD7kr6UkS1ikwys2ZgHzCkyHzgDbBd0sW8+d0CmFmPYHhbnqKM5/sDyJ+s9ZkAZjYNuFXScHpZo6TbMV1RgODyCyWN3wGuhPEVmAecApbEjqQGwMx6Ar/qMP45GLsO3JT0Ib3WzCz810vS7+TzGMBVYE4OwHfgjBsEbkj62d38BEC7pLmZAGa2DjiaY/wGsE3S06JeSgD4kvWSjlXWdnnAzPoAz4DBOYqbJPkZF5YUwFtgtKRvriAJMAu4lqdVUl7oDgeawjgmqTUF4CZmS/I7UwWw12O2DICZTQbmA76JMQkduyW1RAD2SdqRBrgPTCwKYGZ+UWcGoyMy1mUBPJA0KQ3wChhaBMDM1gLH8+YCWQCvJQ1LA3hoNeQp9TtgZi3Arry5QIuk3ZEj+CGpdxrgfaK6ZequEyDLA52SBqYBPKlMz9tVDoAnpJfAp6DHy3LMAx2SZqQBDgKb/wPgOdAs6UVFh5k1SPoROYJDkrakAYpkQTI8UGM8uZEIQFc2TCYid78fQ1K809kDeA73KPknkUu4UdKRmPfMrD+QLlAzJHVUeSAoPgcsD4p8V8tjOT8C4K5vzQDYABxOPGuTtKDyuyqtmtk44CHgndBkSZ6caiQC0A5sSnopbGgxkG7LqmpJrBwfALZ2l/PN7DLQtYtA+A44Gb73Df1jek7V7muOIFAPArxQrI15wMyWAufzoiXy3BuRRelKmtWSjQQueUMq6XQAGwt4pKwpYfwjsFJSTbXtril1CD+/USUMJpd4i74q6z7l1XaH8DK9sCREG7BT0pOs9UVfTBqB1cCKgiBu+ESRzqkQQCIBTfAIATy8YvI4VMDCLVtdAAkQ7wW8J0jKWUmrCnqoa1opgBAVfkErnmiV5O+Pdcv/AHhDUal8IyV5Q1O3lAYIXljmn5LKJKZ/sH8B8jdXMDutk64AAAAASUVORK5CYII=";
			html+= "<div id='plugin_kiwi_analysis_vip_music_box_"+this.eleId+"'>";
			html+= "<div class='plugin_item jump_analysis_website' title='点我VIP音乐破解，免客户端下载！'><img src='"+vipImgBase64+"'></div>";
			html+= "</div>";
			$("body").append(html);
			
			$("#plugin_kiwi_analysis_vip_music_box_"+this.eleId+"").on("click", function(){
				var playUrl = $that.getPlayUrl();
				if(!!playUrl){
					GM_openInTab(playUrl, false);
				}else{
					commonFunctionObject.webToast({"message":"请跳转到单曲播放页面，再点击该按钮", "background":"#FF4D40", "position":"center-top"});
				}
			})
		};
		this.start=function(){
			if(this.isRun()){
				var $vipMusicBox = $("#plugin_kiwi_analysis_vip_music_box_"+this.eleId+"");
				if($vipMusicBox.length==0){
					this.addStyle();
					this.generateHtml();
				}
			}
		};
	}
		
	/**
	 * 搜索引擎资源提醒
	 */
	function searchEnginesNavigation(){
		this.navigationDataCache = "navigation_data_cache";
		this.customNavigationkey = "custom-navigation-key-8898";
		this.searchEnginesData=[
			{"host":"www.baidu.com", "element":"#content_right","elementInput":"#kw"},
			{"host":"www.so.com", "element":"#side","elementInput":"#keyword"},
			{"host":"www.sogou.com", "element":"#right","elementInput":"#upquery"},
			{"host":"cn.bing.com", "element":"#b_context","elementInput":"#sb_form_q"},
			{"host":"www.bing.com", "element":"#b_context","elementInput":"#sb_form_q"},
			{"host":"www4.bing.com", "element":"#b_context","elementInput":"#sb_form_q"},
			{"host":"so.toutiao.com", "element":".s-side-list","elementInput":"input[type='search']"},
			{"host":"www.google.com", "element":"#rhs","elementInput":"input[type='text']"}
		];
		this.getNavigationData = function(element, elementInput){
			const defaultNavigationData = [
				{"name":"资源搜索","list":[
					{"name":"财经搜索", "url":"https://www.shaduizi.com/s/search?q=@@&currentPage=1"},
					{"name":"百度百科", "url":"https://baike.baidu.com/item/@@"},
					{"name":"知乎搜索", "url":"https://www.zhihu.com/search?type=content&q=@@"},
					{"name":"B站搜索", "url":"https://search.bilibili.com/all?keyword=@@&from_source=webtop_search&spm_id_from=333.851"},
					{"name":"抖音搜索", "url":"https://www.douyin.com/search/@@?aid=0a9fc74b-01e8-4fb0-9509-307c5c07fda1&publish_time=0&sort_type=0&source=normal_search&type=general"},
					{"name":"搜狗|公众号", "url":"https://weixin.sogou.com/weixin?type=2&query=@@"},
					{"name":"搜狗|知乎", "url":"https://www.sogou.com/sogou?pid=sogou-wsse-ff111e4a5406ed40&insite=zhihu.com&ie=utf8&p=73351201&query=@@&ie=utf8&p=73351201&query=@@"},
					{"name":"豆瓣搜索", "url":"https://www.douban.com/search?q=@@"},
					{"name":"电影搜索", "url":"https://www.cupfox.com/search?key=@@"},
					{"name":"维基百科", "url":"https://en.wikipedia.org/w/index.php?search=@@"},
					{"name":"法律法规", "url":"https://www.pkulaw.com/law/chl?Keywords=@@"},
					{"name":"icon搜索", "url":"https://www.iconfont.cn/search/index?searchType=icon&q=@@"},
					{"name":"github", "url":"https://github.com/search?q=@@"},
					{"name":"csdn", "url":"https://so.csdn.net/so/search?q=@@&t=&u="},
					{"name":"stackoverflow", "url":"https://stackoverflow.com/"},
				]},
				{"name":"搜索引擎","list":[
					{"name":"百度", "url":"https://www.baidu.com/s?wd=@@"},
					{"name":"必应", "url":"https://cn.bing.com/search?q=@@"},
					{"name":"Google", "url":"https://www.google.com/search?q=@@"},
					{"name":"360搜索", "url":"https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&nlpv=basest&q=@@"},
					{"name":"搜狗", "url":"https://www.sogou.com/web?query=@@"},
					{"name":"头条搜索", "url":"https://so.toutiao.com/search?dvpf=pc&source=input&keyword=@@"}
				]}
			];
			
			const self = this;
			let cacheNavigationData =  commonFunctionObject.GMgetValue(self.navigationDataCache, null); // 缓存的数据
			if(!cacheNavigationData){
				cacheNavigationData = defaultNavigationData
			}
			// 合并数据
			var finalNavigationData = null;
			try{
				let customNavigationData = commonFunctionObject.GMgetValue(self.customNavigationkey, null); // 自定义的数据
				if(!!customNavigationData){
					finalNavigationData = cacheNavigationData.concat(customNavigationData);
				}else{
					finalNavigationData = cacheNavigationData;
				}
			}catch(e){
				finalNavigationData = cacheNavigationData;
			}
			self.createHtml(element, elementInput, finalNavigationData);
			
			//判断值是否有变动，如果有变动就更新换存，简单处理，长度是否一致
			commonFunctionObject.request("get", "http://api.staticj.top/script/api/get/navigation_json_url?t="+new Date().getTime(), null).then((resultData)=>{
				let dataJson = JSON.parse(resultData.data);
				if(!!dataJson && !!dataJson.url){
					commonFunctionObject.request("get", dataJson.url, null).then((resultData2)=>{
						let serverNavigationData = resultData2.data;
						if(!cacheNavigationData || (!!cacheNavigationData && serverNavigationData.length!=JSON.stringify(cacheNavigationData).length)){
							commonFunctionObject.GMsetValue(self.navigationDataCache, JSON.parse(serverNavigationData));
						}
					}).catch(()=>{});
				}
			}).catch(()=>{});
		};
		this.createCss = function(elementNum){
			var innnerCss = `
				.ddfdfd`+elementNum+`dffssqa{
					margin-top:15px;
				}
				.ddfdfd`+elementNum+`dffssqa:nth-last{
					margin-top:0px;
				}
				.ddfdfd`+elementNum+`dffssqa>.title{
					font-size:16px;
				}
				.ddfdfd`+elementNum+`dffssqa>.content-list{
					
				}
				.ddfdfd`+elementNum+`dffssqa>.content-list>a{
					display:inline-block;
					width:calc(25% - 16px);
					border:1px solid #ccc;
					border-radius:4px;
					text-align:center;
					margin-right:15px;
					margin-top:6px;
					overflow: hidden;
					white-space: nowrap;
					text-overflow:ellipsis;
					padding:2px;
					box-sizing:border-box;
					font-size:13px;
					line-height:20px;
				}
				.ddfdfd`+elementNum+`dffssqa>.content-list>a:nth-child(4n){
					margin-right:0px;
				}
			`;
			if($("#plugin_css_style_dddsoo").length==0){
				$("body").prepend("<style id='plugin_css_style_dddsoo'>"+innnerCss+"</style>");
			}
		};
		this.showSetingDialog = function(){
			const self = this;
			
			var customNavigationData = "";
			const customNavigation = commonFunctionObject.GMgetValue(self.customNavigationkey, null);
			if(!!customNavigation){
				customNavigationData = JSON.stringify(customNavigation, null, 4);
			}
			const content = `
				<div>
					<div style="font-size:13px;color:red;">
						注意事项如下：
						<br>1、请严格按照格式添加，否则不生效
						<br>2、数据为json格式，请确保json格式正确，必要时请到<a target="_blank" href="https://www.json.cn/">https://www.json.cn/</a>校验
						<br>3、点击下面”示例“按钮，查看具体格式情况
						<br>4、链接中的搜索关键词请用”@@“代替，脚本会自动替换成当前搜索词。例如：https://www.baidu.com/s?wd=@@
						<br>5、清空 -> 保存，则取消自定义的导航网址
					</div>
					<div style="margin-top:5px;height:200px;width:100%;">
						<textarea 
							placeholder="请严格按照格式填写，否则不生效"
							class="navigation-textarea"
							style="font-size:14px;box-sizing: border-box;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;padding:5px;height:100%;width:100%;Overflow:auto;border:1px solid #ccc;resize:none;background-color:#FFF;outline:none;">`+customNavigationData+`</textarea>
					</div>
					<div style="text-align:center;margin-top:15px;">
						<button class="navigation-example">示例</button>
						<button class="navigation-clear">清空</button>
						<button class="navigation-save">保存自定义导航</button>
					</div>
				</div>
			`;
			popup.dialog({
				"title":"自定义添加导航",
				"content":content,
				"onContentReady":function($that){
					var $navigationExample = $that.dialogContent.querySelector(".navigation-example");
					var $navigationClear = $that.dialogContent.querySelector(".navigation-clear");
					var $navigationSave = $that.dialogContent.querySelector(".navigation-save");
					
					var $textarea = $that.dialogContent.querySelector(".navigation-textarea");
					var exampleJson = JSON.parse('[{"name":"我是标题","list":[{"name":"百度","url":"写网址"},{"name":"必应","url":"写网址"}]},{"name":"我是标题","list":[{"name":"百度","url":"写网址"}]}]');
					$navigationExample.addEventListener("click", function(){
						$textarea.value = JSON.stringify(exampleJson, null, 4);
					});
					$navigationClear.addEventListener("click", function(){
						$textarea.value = ""
					});
					$navigationSave.addEventListener("click", function(){
						var content = $textarea.value;
						if(!content){
							commonFunctionObject.GMsetValue(self.customNavigationkey, null);
							commonFunctionObject.webToast({"message":"保存成功：数据为空", "background":"#FF4D40"});
							return;
						}
						if(content.length==0 || content.indexOf("{")==-1 || content.indexOf("[")==-1){
							commonFunctionObject.webToast({"message":"格式错误，请更正", "background":"#FF4D40"});
							return;
						}
						try{
							var contentJson = JSON.parse(content);
							if(Array.isArray(contentJson)){ //开始必须是数组
								var isOK = true;
								for(var i=0; i<contentJson.length; i++) {
									if(Array.isArray(contentJson[i])){ //此处必须是对象
										isOK = false;
										break;
									}
									if(!contentJson[i].hasOwnProperty("name") || !contentJson[i].hasOwnProperty("list")){
										isOK = false;
										break;
									}
									if(typeof(contentJson[i]["name"])!="string"){
										isOK = false;
										break;
									}
									if(!Array.isArray(contentJson[i]["list"])){ //此处必须是数组
										isOK = false;
										break;
									}
									for(var j=0; j<contentJson[i]["list"].length; j++){
										if(!contentJson[i]["list"][j].hasOwnProperty("name") || !contentJson[i]["list"][j].hasOwnProperty("url")){
											isOK = false;
											break;
										}
										if(typeof(contentJson[i]["list"][j]["name"])!="string" || typeof(contentJson[i]["list"][j]["url"])!="string"){
											isOK = false;
											break;
										}
									}
									if(!isOK){
										break;
									}
								}
								if(isOK){
									commonFunctionObject.GMsetValue(self.customNavigationkey, contentJson);
									commonFunctionObject.webToast({"message":"保存成功", "background":"#FF4D40"});
								}else{
									commonFunctionObject.webToast({"message":"格式错误，请更正", "background":"#FF4D40"});
								}
							}else{
								commonFunctionObject.webToast({"message":"格式错误，请更正", "background":"#FF4D40"});
							}
						}catch(e){
							commonFunctionObject.webToast({"message":"格式错误，请更正", "background":"#FF4D40"});
						}
					});
				}
			})
		}
		this.createHtml = function(element, elementInput, navigationData){
			$("#dsdsd99mmmjj7760011").remove();
			
			var isComplate = true;
			const host = window.location.host;
			const self = this;
			const elementNum = commonFunctionObject.randomNumber();
			const elementInterval = setInterval(function(){
				if(isComplate){
					var $element = $(element);
					var $box = $("#dsdsd99mmmjj7760011");
					isComplate = false;
					if($element.length!=0 && $box.length==0){
						var html = "";
						html  += "<div id='dsdsd99mmmjj7760011'>";
						for(var i=0; i<navigationData.length; i++){
							html  += "<div class='ddfdfd"+elementNum+"dffssqa'>";
							html  += "<div class='title'><b>"+navigationData[i].name+"</b></div>";
							html  += "<div class='content-list'>";
							for(var j=0;j<navigationData[i].list.length;j++){
								let url = navigationData[i].list[j].url;
								let name = navigationData[i].list[j].name;
								html += "<a target='_blank' name='navigation' data-url='"+url+"' href='javascript:void(0);'>"+name+"</a>"				
							}
							html += "</div>";
							html += "</div>";
						}
						html += `
							<div style='margin-bottom:10px;margin-top:5px;font-size:12px;'>
								<a target='_blank' href='https://greasyfork.org/zh-CN/scripts/418804'>
									*该数据由油猴脚本提供
								</a>
								&nbsp;&nbsp;
								<a href="javascript:void(0);" name="customNavigation">
									🔧自定义网址
								</a>
							</div>`;
						html += "</div>";
						
						//添加css 添加html
						self.createCss(elementNum);
						$element.prepend(html);
						
						$("#dsdsd99mmmjj7760011 a[name='navigation']").on("click", function(e){
							commonFunctionObject.GMopenInTab($(this).data("url").replace("@@",$(elementInput).val()));
							e.preventDefault()
						});
						
						$("#dsdsd99mmmjj7760011 a[name='customNavigation']").on("click", function(e){
							self.showSetingDialog();
							e.preventDefault()
						})
					}
					isComplate = true;
				}
			}, 100);			
		};
		this.show = function(){
			const self = this;
			const host = window.location.host;
			const href = window.location.href;
			if((host==="www.baidu.com")
				|| (host==="www.so.com" && href.indexOf("www.so.com/s")!=-1)
				|| (host==="www.sogou.com" && (href.indexOf("www.sogou.com/web")!=-1 || href.indexOf("www.sogou.com/sogou")!=-1))
				|| (host==="cn.bing.com" && href.indexOf("cn.bing.com/search")!=-1)
				|| (host==="www.bing.com" && href.indexOf("www.bing.com/search")!=-1)
				|| (host==="www4.bing.com" && href.indexOf("www4.bing.com/search")!=-1)
				|| (host==="so.toutiao.com" && href.indexOf("so.toutiao.com/search")!=-1)
				|| (host==="www.google.com" && href.indexOf("www.google.com/search")!=-1)){
				let currentSearchEnginesData = null;
				for(var i=0; i<self.searchEnginesData.length; i++){
					if(host===self.searchEnginesData[i].host){
						currentSearchEnginesData = self.searchEnginesData[i];
					}
				}
				if(currentSearchEnginesData!=null){
					self.getNavigationData(currentSearchEnginesData.element, currentSearchEnginesData.elementInput);
				}
			}
		};
		this.start = function(){
			this.show();
		};
	}
	
	/**
	 * 知乎助手开始
	 */
	////**********************************************
	//本脚本部分代码借鉴自【人鬼情未了】的脚本，已经获得原作者的完全授权，脚本代码可以随意修改使用，特此申明！
	////【人鬼情未了】脚本名字：知乎网页助手
	////【人鬼情未了】脚本地址：https://greasyfork.org/zh-CN/scripts/384172
	////本脚本做出的修改：重构了部分逻辑
	////**********************************************
	function zhihuHelper(){
		this.markArticleOrQuestion = function(){
			var questionsCss = `
				.AnswerItem .ContentItem-title a::before {
				    content: '问题';
				    color: #f68b83;
				    background-color: #f68b8333;
				    font-weight: bold;
				    font-size: 13px;
				    padding: 1px 4px 0px;
				    border-radius: 2px;
				    display: inline-block;
				    vertical-align: middle;
				    margin: 0px 4px 0px 0px;
				}
				.ArticleItem .ContentItem-title a::before {
				    content: '文章';
				    color: #0066FF;
				    background-color: #E5EFFF;
				    font-weight: bold;
				    font-size: 13px;
				    padding: 1px 4px 0;
				    border-radius: 2px;
				    display: inline-block;
				    vertical-align: middle;
				    margin: 0px 4px 0px 0px;
				}
				.ZvideoItem .ContentItem-title a::before {
					content:'视频';
					color: #00BCD4;
					background-color: #00BCD433;
					font-weight: bold;
					font-size: 13px;
					padding: 1px 4px 0;
					border-radius: 2px;
					display: inline-block;
					vertical-align: middle;
					margin: 0px 4px 0px 0px;
				}
				.TopstoryItem--advertCard{
					text-decoration:line-through;
				}
			`;
			commonFunctionObject.GMaddStyle(questionsCss);
		}
		this.autoJumpTarget = function(){
			var regexResult = location.search.match(/target=(.+?)(&|$)/);
			if(regexResult && regexResult.length==3){
				location.href = decodeURIComponent(regexResult[1]);
			}
		};
		// 为问题本身添加时间
		this.addDateQuestion = function(){
			var title = document.querySelector(".QuestionPage");
			if(!!title){
				var dateCreated = title.querySelector("[itemprop~=dateCreated][content]").content;
				var dateModified = title.querySelector("[itemprop~=dateModified][content]").content;
				var createDate = commonFunctionObject.DateFormat(new Date(dateCreated), "yyyy-MM-dd hh:mm:ss");
				var editDate = commonFunctionObject.DateFormat(new Date(dateModified), "yyyy-MM-dd hh:mm:ss");
				
				var side = title.querySelector(".QuestionHeader-side");
				var timeDiv = document.createElement('div');
				timeDiv.innerHTML = `<p>创建于:&nbsp;${createDate}</p><p>编辑于:&nbsp;${editDate}</p>`;
				timeDiv.style.cssText = 'color:#6f6f6f;font-size:13px;';
				side.appendChild(timeDiv);
			}
		};
		// 为回答添加时间
		this.addTimeAnswerItems = function(){
			var list = document.querySelectorAll(".AnswerItem:not(div[zh_date_mk='true'])");
			var item = null;
			for (var i = 0; i < list.length; i++) {
				item = list[i];
				if (item.getAttribute('zh_date_mk') === 'true') {
					continue;
				}
				item.setAttribute("zh_date_mk", "true");
				try{					
					var dateCreated = item.querySelector("[itemprop~=dateCreated][content]").content;
					var dateModified = item.querySelector("[itemprop~=dateModified][content]").content;
					var createDate = commonFunctionObject.DateFormat(new Date(dateCreated), "yyyy-MM-dd hh:mm:ss");
					var editDate = commonFunctionObject.DateFormat(new Date(dateModified), "yyyy-MM-dd hh:mm:ss");
						 
					var sideItem = item.querySelector(".ContentItem-meta");
					var timeDiv = document.createElement('div');
					timeDiv.innerHTML = `创建于:&nbsp;${createDate}&nbsp;&nbsp;&nbsp;修改于:&nbsp;${editDate}`;
					timeDiv.class = "Voters";
					timeDiv.style.cssText = 'color:#6f6f6f;font-size:13px;display:block;padding:5px 0px;';
					sideItem.appendChild(timeDiv);
				}catch(e){}
			}
			return true;
		};
		// 提问者标识出来
		this.showQuestionAuthor = function(){
			//此处代码借鉴自 - 知乎增强
			//原作者：X.I.U
			//https://greasyfork.org/zh-CN/scripts/419081-%E7%9F%A5%E4%B9%8E%E5%A2%9E%E5%BC%BA
			if (document.querySelector('.BrandQuestionSymbol, .QuestionAuthor')) return
			let qJson = JSON.parse(document.querySelector('#js-initialData').textContent).initialState.entities.questions[/\d+/.exec(location.pathname)[0]].author,
				html = `<div class="BrandQuestionSymbol"><a class="BrandQuestionSymbol-brandLink" href="/people/${qJson.urlToken}"><img role="presentation" src="${qJson.avatarUrl}" class="BrandQuestionSymbol-logo" alt=""><span class="BrandQuestionSymbol-name">${qJson.name}</span></a><div class="BrandQuestionSymbol-divider" style="margin-left: 5px;margin-right: 10px;"></div></div>`;
			document.querySelector('.QuestionHeader-topics').insertAdjacentHTML('beforebegin', html);
		};
		this.startDealwithQuestion = function(){
			let isMarkComplete = true;
			setInterval(()=>{
				if(isMarkComplete){
					isMarkComplete = false;
					isMarkComplete = this.addTimeAnswerItems();
				}
			}, 1999);
			this.showQuestionAuthor();
			this.addDateQuestion();
		};
		this.downloadVideo = function(){
			let isMarkComplete = true;
			function addDownloadButton(){
				if(!isMarkComplete) return;
				isMarkComplete = false;
				
				var itemArray = document.querySelectorAll("._1tg8oir:not(span[zh_date_mk='true'])");
				var item = null;
				// console.log("知乎视频下载循坏监听次数：", itemArray.length);
				for(var i=0; i<itemArray.length; i++){
					item = itemArray[i];
					if (item.getAttribute('zh_date_mk') === 'true') {
						continue;
					}
					item.setAttribute("zh_date_mk", "true");
					
					if(item.innerText != "倍速"){
						continue;
					}
					
					var playButLi = item.parentNode.parentNode;
					var downloadBut = playButLi.cloneNode(true)
					if(!downloadBut.querySelector('._1tg8oir')) return;
					
					// 删除其它元素
					var downloadButChildren = downloadBut.children;
					for(var j=0; j<downloadButChildren.length; j++){
						if(downloadButChildren[j].nodeName !== "BUTTON"){
							downloadBut.removeChild(downloadButChildren[j]);
						}
					}
					
					downloadBut.setAttribute("zh_date_mk", "true");
					downloadBut.querySelector('._1tg8oir').innerText='下载';
					
					playButLi.before(downloadBut);
					downloadBut.addEventListener("click",function(){
						let href = window.location.href;
						let findClassName = ".ZVideoItem-video"; // 首页
						if(href.indexOf("www.zhihu.com/search")!=-1){ //搜索界面
							findClassName = ".List-item";
						}else if(href.indexOf("www.zhihu.com/zvideo/")!=-1){ //单独视频播放界面
							findClassName = ".ZVideo-player";
						}else if(href.indexOf("https://video.zhihu.com/video")!=-1){ //视频播放iframe
							findClassName = "#player"
						}
						if(!findClassName) return;
						let playUrl = $(item).parents(findClassName).find("video").attr("src");
						if(!!playUrl){
							commonFunctionObject.GMopenInTab(playUrl);
						}
					});
				}
				isMarkComplete = true;
			}
			
			setInterval(()=>{
				addDownloadButton();
			}, 1499);
		};
		this.start = function(){
			const host = window.location.host;
			const self = this;
			if(host == "link.zhihu.com"){ 
				this.autoJumpTarget();
			}
			if(host.indexOf("zhihu.com")!=-1){
				this.markArticleOrQuestion();
				if(window.location.href.indexOf("www.zhihu.com/question/")!=-1){
					this.startDealwithQuestion();
				}
				//this.downloadVideo();
			}
		};
	}
		
	//最后统一调用
	try{
		if(functionController.superVideoHelper){
			const superVideoHelperObject = new superVideoHelper(newOriginalInterfaceList);
			if(superVideoHelperObject.isRun()){
				if(commonFunctionObject.GMgetValue("copyright_video_remind",null)==="true"){
					superVideoHelperObject.start();
				}else{
					var r=confirm(
						"脚本运行提醒！！！\u000d"+
						"1、VIP视频解析中所用到的解析接口全部收集自互联网（源码可见），版权问题请联系相关解析接口所有者！\u000d"+
						"2、为创造良好的创作氛围，请大家支持正版！\u000d"+
						"3、脚本仅限个人学习交流，切勿用于任何商业等其它用途！\u000d"+
						"4、继续使用，即表明你已经明确使用脚本可能带来的风险，且愿意自行承担相关风险，对于风险脚本不承担任何责任！\u000d"+
						"5、此提醒只弹出一次，确认后，后续将不在弹出，请知悉！"
					);
					if(r==true){
						commonFunctionObject.GMsetValue("copyright_video_remind","true");
						superVideoHelperObject.start();
					}
				}
			}
			
			(new superVideoHelperMobile(newOriginalInterfaceList)).start();
		}
	}catch(e){
		console.log("全网VIP解析：error："+e);
	}
	
	/**
	 * 短视频去水印下载，与潮玩天下共同开发维护
	 * https://greasyfork.org/zh-CN/scripts/452660
	 */
	function shortVideoDownloader(){
		this.douyinVideoDownloader = function(){
			if(window.location.host !== "www.douyin.com"){
				return;
			}
			window.addEventListener('load',function(){
				//这是搜索界面
				if(window.location.href.match(/https:\/\/www\.douyin\.com\/search\/.*?/)){
					function downloader(){
						const videoContainers = document.querySelectorAll(".player-info");
						videoContainers.forEach((element)=>{
							if(element.getAttribute("dealwith")){
								return;
							}
							let bottomMenu = element.querySelector('xg-right-grid');
							if(!bottomMenu){
								return;
							}
							let playbackSetting = bottomMenu.querySelector('.xgplayer-playback-setting');
							if(!playbackSetting){
								return;
							}
							let download = playbackSetting.cloneNode(true); // 拷贝一个节点
							let downloadText = download.querySelector('div:first-child');
							let video = element.querySelector("video");
							downloadText.innerText='下载';
							downloadText.style = 'font-size:13px';
							playbackSetting.after(download);
							element.setAttribute("dealwith","true");
							download.addEventListener("click",(e)=>{
								let playerUrl = video.children[0].src;
								commonFunctionObject.GMopenInTab(playerUrl);
							});
						});
					}
					downloader();
					setInterval(function(){
						downloader();
					},500);
				}else{
					async function downloader(){
						try{
							//延迟加载等到是否完成
							let videoContainer = await commonFunctionObject.getElementObject(".xg-video-container");
							if(!videoContainer){
								return false;
							}
							let bottomMenus = document.querySelectorAll('.xg-right-grid');
							let bottomMenuLength = bottomMenus.length;
							let bottomMenu = bottomMenus.length>1 ? bottomMenus[bottomMenuLength - 2] : bottomMenus[bottomMenuLength - 1];
							let douyinVideoDownloaderDom = document.querySelector('#douyin-video-downloder');
							if(douyinVideoDownloaderDom){
								douyinVideoDownloaderDom.parentNode.parentNode.removeChild(douyinVideoDownloaderDom.parentNode);
							}
							
							// 拷贝一个节点
							let playbackSetting = bottomMenu.querySelector('.xgplayer-playback-setting');
							if(!playbackSetting){
								return false;
							}
							let download = playbackSetting.cloneNode(true);
							let downloadText = download.querySelector('div:first-child');
							downloadText.innerText='下载';
							downloadText.style = 'font-size:14px';
							downloadText.setAttribute('id','douyin-video-downloder');
							
							let autoplaySetting = document.querySelector('.xgplayer-autoplay-setting');
							if(!autoplaySetting){
								return false;
							}
							autoplaySetting.after(download);
							let videoPlayers = document.querySelectorAll('video');
							let videoPlayDom = videoPlayers[videoPlayers.length>1 ? videoPlayers.length-2 : videoPlayers.length-1];		
							document.querySelector("#douyin-video-downloder").addEventListener("click", (e)=>{
								let playerUrl = videoPlayDom.children[0].src;
								commonFunctionObject.GMopenInTab(playerUrl);
							});
						}catch(e){}
					}
					//监听鼠标
					window.addEventListener("wheel",downloader);
					window.addEventListener('keydown',function(e){
						if(e.code == 'ArrowDown' || e.code == 'ArrowUp'){
							downloader();
						}
					});
					//视频改变后触发
					async function domNodeInserted(){
						let findVideoInterval = setInterval(function(){
							let videoElement = document.querySelector("video");
							if(videoElement){
								videoElement.addEventListener('DOMNodeInserted',(e) => {
									downloader();
								});
								clearInterval(findVideoInterval);
							}
						}, 200);
					}
					domNodeInserted();
					downloader();
					window.addEventListener("click",downloader);
				}
			});
		};
		this.kuaishouVideoDownloader = function(){
			if(window.location.host !== "www.kuaishou.com"){
				return;
			}
			window.addEventListener('load',function(){
				async function downloader(){
					let kuaishouVideoDownloder = document.querySelector("#kuaishou-video-downloder");
					if(!kuaishouVideoDownloder){
						let downloadDIV = document.createElement("div");
						downloadDIV.style = "cursor:pointer;width:50px;height:40px;line-height:40px;text-align:center;background-color:#FFF;color:#000;position:fixed;top:200px;left:0px;z-index:999;";
						downloadDIV.innerText = "下载";
						downloadDIV.setAttribute('id','kuaishou-video-downloder');
						document.body.appendChild(downloadDIV);
						
						downloadDIV.addEventListener("click", function(e){
							let videoDom = document.querySelector('.player-video');
							if(!videoDom){
								console.log('没有找到DOM');
								return;
							}
							let videoSrc = videoDom.getAttribute('src');					
							if(videoSrc.match(/^blob/)){
								console.log('blob视频无法下载');
								return;
							}
							commonFunctionObject.GMopenInTab(videoSrc);
						});
					}
				}
				document.querySelectorAll(".switch-item").forEach(function(value){
					value.addEventListener("click", function(){
						downloader();
					});
				})
				downloader();
				setInterval(function(){
					let kuaishouVideoDownloder = document.querySelector("#kuaishou-video-downloder");
					if(kuaishouVideoDownloder){
						if(window.location.href.match(/https:\/\/www\.kuaishou\.com\/short-video\/.*?/)){
							kuaishouVideoDownloder.style.display = "block";
						}else{
							kuaishouVideoDownloder.style.display = "none";
						}
					}
				}, 800);
			});
		};
		this.start = function(){
			this.douyinVideoDownloader();
			this.kuaishouVideoDownloader();
		};
	};
	
	try{
		if(functionController.abroadVideoHelper){
			(new abroadVideoHelper()).start();
		}
	}catch(e){
		console.log("国外视频解析：error："+e);
	}
	
	try{
		(new queryCoupon()).start();
	}catch(e){
		console.log("优惠券查询：error："+e);
	}
	
	try{
		if(functionController.superMusicHelper){
			(new superMusicHelper()).start();
		}
	}catch(e){
		console.log("全网音乐下载：error："+e);
	}
	
	try{
		if(functionController.bilibiliHelper){
			new bilibiliHelper(commonFunctionObject).start();
		}
	}catch(e){
		console.log("B站视频下载：error："+e);
	}
		
	try{
		if(functionController.searchEnginesNavigation){
			new searchEnginesNavigation(commonFunctionObject).start();
		}
	}catch(e){
		console.log("搜索引擎导航：error："+e);
	}
	
	try{
		if(functionController.zhihuHelper){
			new zhihuHelper(commonFunctionObject).start();
		}
	}catch(e){
		console.log("知乎助手：error："+e);
	}
	
	try{
		if(functionController.shortVideoDownload){
			(new shortVideoDownloader()).start();
		}
	}catch(e){
		console.log("短视频去水印下载：error："+e);
	}
})();
