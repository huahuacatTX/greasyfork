// ==UserScript==
// @name              网购省钱小助手：自动查询京东、淘宝、聚划算、天猫等隐藏的优惠券；自动历史价格查询；界面优化等；低侵入、持续维护更新😈
// @name:zh           网购省钱小助手：自动查询京东、淘宝、聚划算、天猫等隐藏的优惠券；自动历史价格查询；界面优化等；低侵入、持续维护更新😈
// @name:zh-TW        網購省錢小助手：自動查詢京東、淘寶、聚划算、天貓等隱藏的優惠券；自動曆史價格查詢；界面優化等；低侵入、持續維護更新😈
// @namespace         coupon_namespace_20230625
// @version           2.1.2
// @description       用电脑端访问淘宝、天猫、京东等不会主动领取优惠券，此脚本可以把只有APP端能看到的或本来就隐藏的大额优惠券给查询出来，有券不领非好汉~  脚本采用低侵入形式，不会破坏网页结构，大家可以放心使用
// @description:zh    用电脑端访问淘宝、天猫、京东等不会主动领取优惠券，此脚本可以把只有APP端能看到的或本来就隐藏的大额优惠券给查询出来，有券不领非好汉~  脚本采用低侵入形式，不会破坏网页结构，大家可以放心使用
// @description:zh-TW 用電腦端訪問淘寶、天貓、京東等不會主動領取優惠券，此指令碼或直譯式程式可以把只有APP端能看到的或本來就隱藏的大額優惠券給查詢出來，有券不領非好漢~  指令碼或直譯式程式採用低侵入形式，不會破壞網頁結構，大家可以放心使用
// @author            huahuacat
// @icon              data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABFFJREFUWEfFl11oHFUUx/9nZne7s7PZpDUfmkANWKoQq5VqlVJUBK2BVI1QqILpLNaUlqxpRSLqQ9uQILbUNNltpImSDbXQKlJMIkR9qC0UEaJV8MVSUKs2iSZp2nRnN/txr0yanezMzmQ3G6Hn8Z5zz/nd83HnDuE2CxUS/59j27y+lKeCcaFCdKZuJuKuce/ej8YL8ZU3QCTYUEsQagFeC9Aay2CEQXA6yxk7Lzf3/5APUE6AWMhfx8AbwbE1H4dpGwL1MMZ6coEsCqAG/e8DvGUpgc22nOGg3Bw+YOfDFkANKSPg2LCc4AvZwJdSIFxn5csSQA0pv4Gj+v8InvZhl4ksgGhI6eMcil1wobwaYvWDWWp2YxJs7DL49JgtNxEapKbwiUwDA8Bcw3E+aOdBvHsdXFvfsA3A/v0LsyfeBVyCnc1VyeV6mHb1jGaUZ8FWDSkDi3W7c+PzcGx8AbGOZssA7n2diHXuBYv8DfJ5LW3MpdAzEAv6tzDw4cXqngaI7H48y0xc+xDmADqakbp0EXRnKeiOYit3VyVRup/2fHhNU+oAkS6lnQjvmHc4ap4EyfOOOIfj0XokhvosOZ11foOOTV0Bu/G7hS1t9wT6ThsAokHlFw7UZFo7N2+HY/2WZQ3D7Mn3wKZ+BWih3Qj4WAqEd+oA2t3uZfKMOdKK+rcgVN23LAAtW/FvT0GoLANcznlffMQT6H9EB4h17biHEV02R3I9uwfimjm7giV+qgOJc2fmggtV5YDHrfn60xMIr9YB1E7/Jgj8gjmK84lX4Fj3lGE5+f1XmA23WwJJb/dCWH2vQTfbux/JH8/eWhMIVFkOKvbGPYHwCh1gtrvhgVRK+DkLYH7szOupSz9ZAohr12etp6ciU0Hlq6Jy6xceHeDm0Z0VgpjMusK002tZWI5EWxvARo2TQIKQkrvPOQxToAYVbg6k1V/rg+VkQG15Dnxm2uhCdk94j3xTZgSwuAW1CdAmIVOW2gNWlxYVyRfkw8ObTRnw7wP4B4ZaraqC++W2giugnVzLgFmotLhJbhs6ZgCIdO7YQAKNGACkIrhf7SoYQKu91gMGkaVp75GvV6bXDF/DaNB/nGvPrwyRmqyv3XyotGmJdbxuNK0o6fIeHNS/ZgYAqyw4H3sJYs0mkGT9dbMD4ZNjiH8eQvLied2EfPKkfGi41JBlswM16H8T4If19RQDuzIKqLF8Dm1v4xAhFHtf9LQPnVkUQFNGOpUDJGC/bhiL34JIJAuGEH2yIh0a7s9qSDuPalDZBuDTtJ7PqOAaxFJFILDSkkZf60Cv1dYcz/I5iKMAKrXNfOo6+OhE3ghU5LmGspIGueX0kN2mnD8m/HjjXWosvosEvKaB8PFJ8AnTzWb2LkvXSXJ/IrcNNOWizQmgl6B798poKvYMgT/N/hit5/GED4mkA0ScHGKci0IUTud3olv8TGq1eTJZ0OQNkOskhepvO8B/AOOGMHhVlZkAAAAASUVORK5CYII=
// @match             *://*.taobao.com/*
// @match             *://*.tmall.com/*
// @match             *://*.tmall.hk/*
// @match             *://*.liangxinyao.com/*
// @match             *://chaoshi.detail.tmall.com/*
// @match             *://pages.tmall.com/wow/an/cs/search**
// @match             *://*.jd.com/*
// @match             *://*.jd.hk/*
// @match             *://item.jkcsjd.com/*
// @match             *://*.yiyaojd.com/*
// @match             *://www.vipglobal.hk
// @match             *://*.vip.com/*
// @match             *://detail.vip.com/detail-*
// @match             *://www.vipglobal.hk/detail-*
// @match             *://category.vip.com/suggest.php**
// @match             *://list.vip.com/*.html
// @exclude           *://jianghu.taobao.com/*
// @exclude           *://login.taobao.com/*
// @exclude           *://uland.taobao.com/*
// @exclude           *://map.taobao.com/*
// @exclude           *://creator.guanghe.taobao.com/*
// @exclude           *://myseller.taobao.com/*
// @exclude           *://qn.taobao.com/*
// @exclude           *://jingfen.jd.com/*
// @exclude           *://passport.jd.com/*
// @exclude           *://jmw.jd.com/*
// @exclude           *://passport.shop.jd.com/*
// @exclude           *://passport.vip.com/*
// @exclude           *://huodong.taobao.com/wow/z/guang/gg_publish/*
// @exclude           *://loginmyseller.taobao.com/*
// @require           https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.2.1/jquery.min.js
// @require           https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/keypress/2.1.5/keypress.min.js
// @connect			  tt.shuqiandiqiu.com
// @connect           j.jiayoushichang.com
// @grant             GM_openInTab
// @grant             GM.openInTab
// @grant             GM_getValue
// @grant             GM.getValue
// @grant             GM_setValue
// @grant             GM.setValue
// @grant             GM_addStyle
// @grant             GM_xmlhttpRequest
// @grant             GM.xmlHttpRequest
// @grant             GM_registerMenuCommand
// @license           AGPL License
// @antifeature  	  referral-link 【此提示为GreasyFork代码规范要求含有查券功能的脚本必须添加，实际使用无任何强制跳转，代码可查，请知悉】
// @charset		      UTF-8
// @run-at            document-idle
// @downloadURL       https://api.staticj.top/script/update/huahuacat_coupon.user.js
// @updateURL  		  https://api.staticj.top/script/update/huahuacat_coupon.user.js
// ==/UserScript==
(function () {
	'use strict';
	/**
 * 脚本遵循AGPL License开源协议；在协议允许的范围类，可以自由修改
 * 开完万岁！！
 */
	//共有方法，全局共享
function CommonFunction(){
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
	this.request=function(mothed, url, param, headers={"Content-Type": "application/json;charset=UTF-8"}){
		return new Promise(function(resolve, reject){
			GM_xmlhttpRequest({
				url: url,
				method: mothed,
				data:param,
				headers:headers,
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
	this.filterStr = function(str){
		if(!str) return "";
		str = str.replace(/\t/g,"");
		str = str.replace(/\r/g,"");
		return encodeURIComponent(str)
	};
	this.getParamterQueryUrl = function(text, tag) { //查询GET请求url中的参数
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
	this.getEcommercePlatform=function(url = window.location.href){
		let platform = "";
		if(url.indexOf("detail.tmall")!=-1 || url.indexOf("tmall.hk")!=-1 || url.indexOf("pages.tmall.com")!=-1){
			platform = "tmall";
		}else if(url.indexOf("taobao.com")!=-1 || url.indexOf("maiyao.liangxinyao.com")!=-1){
			platform = "taobao";
		}else if(url.indexOf("jd.com")!=-1 || url.indexOf("npcitem.jd.hk")!=-1 || url.indexOf("yiyaojd.com")!=-1 || url.indexOf("jkcsjd.com")!=-1){
			platform = "jd";
		}else if(url.indexOf("detail.vip.com")!=-1 || url.indexOf("www.vipglobal.hk")!=-1){
			platform = "vpinhui";
		}
		return platform;
	}
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
	this.getElementObject = function(selector, target=document.body, allowEmpty = true, delay=10, maxDelay=10 * 1000){
		return new Promise((resolve,reject) =>{
			if (selector.toUpperCase() === "BODY") {
				resolve(document.body);
				return;
			}
			if (selector.toUpperCase() === "HTML") {
				resolve(document.html);
				return;
			}
			let totalDelay = 0;
			
			let element = target.querySelector(selector);
			let result = allowEmpty ? !!element : (!!element && !!element.innerHTML);
			if(result){
				resolve(element);
			}
			
			const elementInterval = setInterval(()=>{
				if(totalDelay >= maxDelay){
					clearInterval(elementInterval);
					resolve(null);
				}
				element = target.querySelector(selector);
				result = allowEmpty ? !!element : (!!element && !!element.innerHTML);
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
	};
	this.decryptStr=function(str){
		let result = atob(str);
		return result.split('').reverse().join('');
	};
	this.encryptStr=function(str){
		let result = str.split('').reverse().join('');
		return btoa(result);
	};
}
//全局弹窗对象
const dialog = (function(){
	class Dialog {
		constructor() {
			this.mask = document.createElement('div');
			this.dialogStyle = document.createElement('style');
			
			this.setStyle(this.mask, {
				"width": '100%',
				"height": '100%',
				"backgroundColor": 'rgba(0, 0, 0, .6)',
				"position": 'fixed',
				"left": "0px",
				"top": "0px",
				"bottom":"0px",
				"right":"0px",
				"z-index":"9999999999999"
			});
			
			this.content = document.createElement('div');
			this.setStyle(this.content, {
				"max-width": '450px',
				"width":"100%",
				"max-height": '600px',
				"backgroundColor": '#fff',
				"boxShadow": '0 0 2px #999',
				"position": 'absolute',
				"left": '50%',
				"top": '50%',
				"transform": 'translate(-50%,-50%)',
				"borderRadius": '5px'
			})
			this.mask.appendChild(this.content);
		}
		middleBox(param) {
			// 先清空中间小div的内容 - 防止调用多次，出现混乱
			this.content.innerHTML = '';
			
			let title = '默认标题内容';
			if({}.toString.call(param) === '[object String]') {
				title = param;
			} else if({}.toString.call(param) === '[object Object]') {
				title = param.title;
			}

			document.body.appendChild(this.mask);
			this.title = document.createElement('div');
			this.setStyle(this.title, {
				"width": '100%',
				"height": '40px',
				"lineHeight": '40px',
				"boxSizing": 'border-box',
				"background-color":"#dedede",
				"color": '#000',
				"text-align": 'center',
				"font-weight":"700",
				"font-size":"17px",
				"border-radius": "4px 4px 0px 0px"
			});
			
			this.title.innerText = title;
			this.content.appendChild(this.title);

			this.closeBtn = document.createElement('div');
			this.closeBtn.innerText = '×';
			
			this.setStyle(this.closeBtn, {
				"textDecoration": 'none',
				"color": '#000',
				"position": 'absolute',
				"right": '10px',
				"top": '0px',
				"fontSize": '25px',
				"display":"inline-block",
				"cursor":"pointer"
			})
			this.title.appendChild(this.closeBtn);
			
			const self = this;
			this.closeBtn.onclick = function(){
				self.close();
				if(param.onClose && (typeof param.onClose)==="function"){
					param.onClose();
				}
			}
		}
		showMake(param) {
			//添加公用样式表
			if(param.hasOwnProperty("styleSheet")){
				this.dialogStyle.textContent = param.styleSheet;
			}
			document.querySelector("head").appendChild(this.dialogStyle);
			
			this.middleBox(param);
			this.dialogContent = document.createElement('div');
			this.setStyle(this.dialogContent,{
				"padding":"15px",
				"max-height":"400px"
			});
			this.dialogContent.innerHTML = param.content;
			this.content.appendChild(this.dialogContent);
			param.onContentReady(this);
		}
		close() {
			document.body.removeChild(this.mask);
			document.querySelector("head").removeChild(this.dialogStyle);
		}
		setStyle(ele, styleObj) {
			for(let attr in styleObj){
				ele.style[attr] = styleObj[attr];
			}
		}
	}
	let dialog = null;
	return (function() {
		if(!dialog) {
			dialog = new Dialog()
		}
		return dialog;
	})()
})();
	
//全局统一方法对象
const commonFunctionObject = new CommonFunction(); 
commonFunctionObject.addCommonHtmlCss();	//统一html、css元素添加
let functionController = null;
	
	
	
	
	
	
	/**
 * 购物助手部分功能借鉴自：https://greasyfork.org/zh-CN/scripts/428266
 * 作者：洪皓儿，原脚本开源协议：AGPL License
 * 本脚本继承AGPL License协议并开源，在源代码基础上优化了部分逻辑，修复了部分bug，特此申明！！
 */
const recordBrowsingHistoryKey = "record_browsing_history_mark_key";
const browsedHtml= `
	<div style="position:absolute;white-space: nowrap; top:7px;padding:2px 5px;font-size:12px;background-color:rgba(0,0,0);color:#FFF;z-index:9999999999;border-radius:20px;right:10px;"><b>已浏览</b></div>
`
function QueryCoupon(){
	this.platforms = ["detail.tmall.com", "item.taobao.com", "item.jd.com", "item.yiyaojd.com", "npcitem.jd.hk", 
		"detail.tmall.hk", "detail.vip.com", "item.jkcsjd.com"];
	this.createQrcodeIsResult = true;
	this.isRun=function(){
		for(var i=0; i<this.platforms.length;i++){
			if(window.location.host.indexOf(this.platforms[i])!=-1){
				return true;
			}
		}
		return false;
	};
	this.filterName=function(str){
		if(!str) return "";
		str = str.replace(/\t/g,"");
		str = str.replace(/\r/g,"");
		return encodeURIComponent(str)
	};
	this.getGoodsData=async function(platform){
		var goodsId = "";
		var goodsName = "";
		const href = window.location.href;
		if(platform=="taobao"){
			goodsId = commonFunctionObject.getParamterQueryUrl(window.location.search, "id");
			try{
				const titleObj = document.querySelector("[class^='ItemTitle--']");
				if(!!titleObj){
					goodsName = titleObj.textContent;
				}
			}catch(e){}
			
		}else if(platform=="tmall"){
			goodsId = commonFunctionObject.getParamterQueryUrl(window.location.search, "id");
			try{
				const titleObj = document.querySelector("[class^='ItemTitle--']");
				if(!!titleObj){
					goodsName = titleObj.textContent;
				}
			}catch(e){}
			
		}else if(platform=="jd"){
			goodsId = commonFunctionObject.getEndHtmlIdByUrl(href);
			try{
				const titleObj = document.querySelector("[class='sku-name']");
				if(!!titleObj){
					goodsName = titleObj.textContent;
				}
			}catch(e){}
		}else if(platform=="vpinhui"){
			goodsId = commonFunctionObject.getEndHtmlIdByUrl(href).replace("detail-","");
			const titleObj = document.querySelector("[class='pib-title-detail']");
			if(!!titleObj){
				goodsName = titleObj.textContent;
			}
		}
		const data = {"goodsId":goodsId, "goodsName":this.filterName(goodsName)};
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
	this.runAliDeceptionSpm=function(){
		const host = window.location.host;
		if(host.indexOf("aliyun.com")!=-1 || host.indexOf("taobao.com")!=-1 || host.indexOf("tmall.com")!=-1){
			this.randomSpmValue();
			setInterval(()=>{
				this.randomSpmValue();
			}, 2000);
		}
	};
	this.browsingHistoryMark=function(platform, goodsId){
		let histories = commonFunctionObject.GMgetValue(recordBrowsingHistoryKey,[]);
		let saveContent = platform+"_"+goodsId;
		if(!histories.includes(saveContent)){
			histories.unshift(saveContent);
			commonFunctionObject.GMsetValue(recordBrowsingHistoryKey,histories.slice(0,60));
		}
	};
	this.createHtml=async function(platform, goodsId, goodsName){
		if(!platform || !goodsId){
			return "kong";
		}
		this.browsingHistoryMark(platform, goodsId); //把浏览记录给存在本地
		let addition = "";
		if(platform=="vpinhui"){
			const vip = goodsId.split("-");
			addition = vip[0];
			goodsId = vip[1];
		}
		const goodsCouponUrl = "https://tt.shuqiandiqiu.com/api/coupon/discover?no=5&v=1.0.2&pl="+platform+"&id="+goodsId+"&qu="+goodsName+"&addition="+addition;
		try{
			const data = await commonFunctionObject.request("GET", goodsCouponUrl, null);
			if(data.result=="success" && !!data.data){
				const json = JSON.parse(data.data);
				
				await this.createCoupon(platform, json.data);
				await this.createQrcode(platform, json.mscan);
									
				//开启插入检测
				let heartms = 0;
				const HEART_DELAY = 1500, MAX_MS = 1000*30;  
				const createResultInterval = setInterval(async ()=>{
					if(this.createQrcodeIsResult){
						if(document.querySelector("*[name='exist-llkbccxs-9246-hi']") || heartms>=MAX_MS){
							clearInterval(createResultInterval);
						}else{
							await this.createCoupon(platform, json.data);
						}
					}
					heartms += HEART_DELAY;
				}, HEART_DELAY);
			}
		}catch(e){
			console.log("createCouponHtml:",e);
		}
	};
	this.getHandlerElement=async function(handler){
		const getElement = async (handler)=>{
			const promiseArray = [];
			const handlers = handler.split("@");
			for(let i=0; i<handlers.length; i++){
				const eleName = handlers[i];
				if(!eleName){
					continue;
				}
				if(eleName=="body"){
					promiseArray.push(
						new Promise((resolve,reject) =>{ resolve(document.body) }) 
					);
				}else if(eleName=="html"){
					promiseArray.push(
						new Promise((resolve,reject) =>{ resolve(document.html) }) 
					);
				}else{
					promiseArray.push(commonFunctionObject.getElementObject(eleName, document.body, true, 10, 1500));
				}
			}
			const element = await Promise.race(promiseArray);
			return element ? element : null;
		}

		const element = await getElement(handler);
		return new Promise((resolve,reject) =>{
			resolve(element);
		});
	};
	this.createCoupon=async function(platform, result){
		try{
			this.createQrcodeIsResult = false;
			if(!result || result==="null" || !result.hasOwnProperty("css") || !result.hasOwnProperty("html") || !result.hasOwnProperty("handler")){
				return;
			}
			const  cssText = result.css, htmlText = result.html, handler = result.handler, templateId = result.templateId;
			if(!cssText || !htmlText || !handler){
				return;
			}
			GM_addStyle(cssText);

			// 添加HTML, 需要动态检测元素
			const handlerElement = await this.getHandlerElement(handler);
			if(handlerElement){
				const $handlerElement = $(handlerElement);
				if(platform=="taobao"){
					$handlerElement.parent().after(htmlText);
				}else if(platform=="tmall"){
					$handlerElement.parent().after(htmlText);
				}else if(platform=="jd"){
					$handlerElement.after(htmlText);
				}else if(platform=="vpinhui"){
					$handlerElement.after(htmlText);
				}
			}
			
			const $template = $("#"+templateId);
			if($template.length == 0){
				return;
			}
			
			const couponId = $template.data("id");
			const goodsPrivateUrl = "https://tt.shuqiandiqiu.com/api/private/change/coupon?no=5&v=1.0.2&platform="+platform+"&id=";
			
			if(!/\d/.test(couponId)){
				return;
			}
			
			setInterval(()=>{
				$template.find("*").each(function(){
					$(this).removeAttr("data-spm-anchor-id");
				});
			},400);
			
			const couponElementA = $template.find("a[name='cpShUrl']");				
			couponElementA.unbind("click").bind("click", ()=>{
				event.stopPropagation();
				event.preventDefault();
				commonFunctionObject.request("GET", goodsPrivateUrl+couponId, null).then((privateResultData)=>{
					if(privateResultData.result==="success" && !!privateResultData.data){
						let url = JSON.parse(privateResultData.data).url;
						if(!!url) GM_openInTab(url, {active:true});
					}
				});
			});
								
			//canvas画二维码
			var $canvasElement = $("#ca"+templateId);
			if($canvasElement.length == 0){
				return;
			}
			const qrcodeResultData = await commonFunctionObject.request("GET", goodsPrivateUrl+couponId, null);
			if(!!qrcodeResultData && qrcodeResultData.result==="success" && !!qrcodeResultData.data){
				let img = JSON.parse(qrcodeResultData.data).img;
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
		}catch(e){
			console.log("~~~~~~~~~~~~~~~~~",e);
		}finally{
			this.createQrcodeIsResult = true;
		}
	};
	this.createQrcode=async function(platform, mscan){
		if(!mscan || mscan==="null" || !mscan.hasOwnProperty("mount") 
			|| !mscan.hasOwnProperty("html")|| !mscan.hasOwnProperty("qrcode")){
			return;
		}
		const {mount, html, qrcode, iden} = mscan;
		if(!!mount && !!html && !!qrcode && !!iden){
			$(mount).append(html);
			var canvasElement = document.getElementById("mscan"+iden);
			var width = canvasElement.getAttribute("width");
			var height = canvasElement.getAttribute("height");
			var cxt = canvasElement.getContext("2d");
			var imgData = new Image();
			imgData.src = qrcode;
			imgData.onload=function(){
				cxt.drawImage(imgData, 0, 0, width, height);
			}
		}
	};
	this.start=async function(){
		if(this.isRun()){
			this.runAliDeceptionSpm();
			const platform = commonFunctionObject.getEcommercePlatform();
			if(!platform) return;
			//如果sku太多就折叠,不然移动端体验太差了
			if(platform=="tmall" || platform=="taobao"){
				commonFunctionObject.getElementObject("div[class^='skuWrapper--']", document.body, false, 10, 1500).then((skuItemWrapper)=>{
					if(skuItemWrapper != null){
						const { style } = skuItemWrapper;
						style.maxHeight = "400px";
						style.overflow = "auto";
					}
				}).catch(()=>{});
			}else if(platform=="jd"){
				const skuItemWrapper = document.querySelector("#choose-attrs");
				if(skuItemWrapper){
					const { style } = skuItemWrapper;
					style.maxHeight = "400px";
					style.overflow = "auto";
				}
			}
			const goodsData = await this.getGoodsData(platform);
			this.createHtml(platform, goodsData.goodsId, goodsData.goodsName);
		}
	};
}

function SearchPageObject(){
	this.intervalIsRunComplete = true;  //定时任务一个循环是否完成
	this.histories = commonFunctionObject.GMgetValue(recordBrowsingHistoryKey, []);
	this.isRun = function(){
		const visitHref = window.location.href;
		const allows = [
			/^https:\/\/www\.taobao\.com(\/|\/\?)?/i,//淘宝首页
			/^https:\/\/s\.taobao\.com/i,
			/^https:\/\/shop(\d+)\.taobao\.com/i, 
			/^https:\/\/www\.tmall\.com(\/|\/\?)?/i,//天猫首页
			/pages\.tmall\.com/i,
			/list\.tmall\.com/i,
			/list\.tmall\.hk/i,
			/tmall\.com\/category/i,
			/tmall\.com\/search/i,
			/tmall\.com\/shop/i,
			/tmall\.com\/\?q=/i,
			/maiyao\.liangxinyao\.com/i,
			/^https:\/\/www\.jd\.com(\/|\/\?)?/i, //京东主页
			/search\.jd\.com/i,
			/search\.jd\.hk/i,
			/pro\.jd\.com\/mall/i,
			/jd\.com\/view_search/i, //商店主页
			/category\.vip\.com/i,
			/list\.vip\.com/i
		];
		let isAllow = false;
		for(let i=0; i<allows.length; i++){
			if(allows[i].test(visitHref)){
				isAllow = true;
				break;
			}
		}
		return isAllow;
	};
	
	this.requestConf=function(){
		return new Promise((resolve, reject)=>{
			commonFunctionObject.request("GET", "https://tt.shuqiandiqiu.com/api/plugin/load/conf", null).then((data)=>{
				if(data.result=="success" && !!data.data){
					resolve(data.data);
				}else{
					resolve(null);
				}
			});
		});
	};
	
	this.pickupSearchElements=function(conf){ //收集列表的元素
		const selectorElementList = new Array();
		const url = window.location.href;
		let confFilter = conf;
		try{
			confFilter = confFilter.replace(/\\\\/g,"\\");
		}catch(e){}
		const confJson = JSON.parse(confFilter);
		for(let key in confJson){
			if(!confJson.hasOwnProperty(key)){
				continue;
			}
			for(let i=0; i<confJson[key].length; i++){
				const itemJson = confJson[key][i];
				if(!itemJson.hasOwnProperty("elements") || !itemJson.hasOwnProperty("matches")){
					continue;
				}
				const {elements, matches} = itemJson;
				const isMatch = matches.map((reg)=>(new RegExp(reg, "i")).test(url)).some((res)=>res);
				if(isMatch){
					for(let j=0; j<elements.length; j++){
						selectorElementList.push({
							"element":elements[j]["element"],
							"findA":elements[j]["findA"],
							"page":elements[j]["page"]
						});
					}
				}
			}
		}
		return selectorElementList;
	};
	
	
	this.createAllElementHtml=function(items){ //为所有的商品创建提示
		this.intervalIsRunComplete = false;
		const promises = [];
		items.forEach((item)=>{
			promises.push(this.createOneElementHtml(item));
		});
		Promise.all(promises).then((result)=>{
			this.intervalIsRunComplete = true;
		});
	};
	
	/**
	 * 为商品box添加有券提醒
	 */
	this.createOneElementHtml=function(item){  //查询到每个商品list
		const {element, page, findA} = item;
		const self = this;
		return new Promise(function(resolve, reject){
			if(element.attr("honghaoerbox")){
				resolve(-10000);
				return;
			}
			element.attr("honghaoerbox","true");
			element.css("position","relative");
			element.on("click",function(){
				$(this).append(browsedHtml);
			});
			
			var goodsDetailUrl = null;
			if(findA==="this"){
				goodsDetailUrl = element.attr("href");
			}else if(/^child@/.test(findA)){
				const elementA = element.find(findA.replace(/^child@/,""));
				if(elementA){
					goodsDetailUrl = elementA.attr("href");
				}
			}
			if(!goodsDetailUrl){
				resolve(-20000);
				return;
			}
			
			var analysisData = null;
			if(page.indexOf("jd_")!=-1){
				var jdId = commonFunctionObject.getEndHtmlIdByUrl(goodsDetailUrl);
				if(!!jdId) analysisData = {"id":jdId, "platform":"jd"};
			}else if(page.indexOf("vpinhui_")!=-1){
				var vipId = commonFunctionObject.getEndHtmlIdByUrl(goodsDetailUrl).replace("detail-","");;
				if(!!vipId){
					analysisData = {"id":vipId.split("-")[1], "platform":"vpinhui"};
				}
			}else{
				var platform = commonFunctionObject.getEcommercePlatform(goodsDetailUrl);
				var id = commonFunctionObject.getParamterQueryUrl(goodsDetailUrl, "id");
				if(platform && id){
					analysisData = {"id":id, "platform":platform};
				}
			}
			if(!analysisData){
				resolve(-30000);
				return;
			}
			
			const mark = analysisData.platform + "_" + analysisData.id;
			if(self.histories.includes(mark)){
				element.append(browsedHtml);
			}
			
			const searchUrl = "https://j.jiayoushichang.com/api/ebusiness/coupon/exist/"+analysisData.platform+"?id="+analysisData.id;
			commonFunctionObject.request("GET", searchUrl, null).then((data)=>{
				if(data.result=="success" && !!data.data){
					const { tip, encryptLink } = JSON.parse(data.data);
					if(tip){
						element.append(tip);
					}
					if(encryptLink){
						let decryptUrl = null;
						try{
							const decryptLink = atob(encryptLink);
							decryptUrl = decryptLink.split('').reverse().join('');
						}catch(e){}
						if(decryptUrl){
							self.relativeJu(page, element, decryptUrl);
						}
					}
				}
				resolve(10000);
			}).catch(()=>{
				resolve(-40000);
			});
		});		
	};
	this.relativeJu=function(page, element, decryptUrl){
		const self = this;
		try{
			if(page.indexOf("jd_")!=-1){
				element.find("a").each(function(){
					if($(this).attr("href").indexOf("item.jd.com")!=-1){
						$(this).removeAttr("onclick");
						$(this).unbind("click").bind("click", function(e){
							e.preventDefault();
							e.stopPropagation();
							commonFunctionObject.GMopenInTab(decryptUrl);
						});
					}
				});
			}
			else if(page.indexOf("taobao_")!=-1 || page.indexOf("tmall_")!=-1){
				element.unbind("click").bind("click",function(e){
					const target = $(e.target);
					const tagName = target.prop("tagName").toUpperCase();
					let isPreventDefault = false;
					if(tagName==="A"){ //只有点击A标签才去判断
						const href = target.attr("href");
						const isDetail = [/detail\.tmall\.com/, /item\.taobao\.com/]
							.map((reg)=> reg.test(href))
							.some((result) => result);
						if(isDetail){
							isPreventDefault = true;
						}
					}else{
						isPreventDefault = true;
					}
					if(isPreventDefault){
						e.preventDefault();
						e.stopPropagation();
						commonFunctionObject.GMopenInTab(decryptUrl);
					}	
				});
			}
			else if(page.indexOf("vpinhui_")!=-1){
				element.find("a").each(function(){
					if($(this).attr("href").indexOf("detail.vip.com/detail-")!=-1){
						$(this).unbind("click").bind("click", function(e){
							e.preventDefault();
							e.stopPropagation();
							commonFunctionObject.GMopenInTab(decryptUrl);
						});
					}
				});
			}
		}catch(e){
			console.log(e);
		}
	};
	
	this.searchPage=function(selectorElementList){
		const items = [];
		selectorElementList.forEach((elementData)=>{
			if(elementData.element){
				$(elementData.element).each(function(){
					items.push({"element":$(this), "findA": elementData.findA, "page":elementData.page});
				});
			}
		});
		if(items.length>0){
			this.createAllElementHtml(items);
		}
	};
	
	this.start=function(){
		if(this.isRun()){
			this.requestConf().then((conf)=>{
				const selectorElementList = this.pickupSearchElements(conf);
				if(this.intervalIsRunComplete){
					this.searchPage(selectorElementList);
				}
				setInterval(()=>{
					if(this.intervalIsRunComplete){
						this.searchPage(selectorElementList);
					}
				}, 1500);
			});
		}
	};
}
try{
	(new SearchPageObject()).start();
	(new QueryCoupon()).start();
	
	if(/taobao|jd|tmall|jkcsjd|vip|vipglobal|yiyaojd|liangxinyao/.test(window.location.host)){
		GM_registerMenuCommand("清除商品浏览记录", ()=> {
			if(confirm('此弹窗来自脚本-[🔥]!!网购小助手,不花冤枉钱\n是否要移除所有的浏览记录？移除后将不可恢复...')){
				commonFunctionObject.GMsetValue(recordBrowsingHistoryKey,[]); //已浏览标识
			}
		});
	}
}catch(e){
	console.log("优惠券查询：error："+e);
}
	
	
	
})();
