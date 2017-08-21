/**
 * Created by roseonly_guangwu on 2017/02/16.
 */

(function(){
	window.lessThenIE8 = function () {
	    var UA = navigator.userAgent,
	        isIE = UA.indexOf('MSIE') > -1,
	        v = isIE ? /\d+/.exec(UA.split(';')[1]) : 'no ie';
	    return v < 9;
	}();
	
	//小于ie9执行
	if(lessThenIE8){
		$(window).ready(function(){thrid_codes();});
	}else{
		window.onload = thrid_codes;
	} 
}());

function thrid_codes(){
	var _oztime = "?tm";//+(new Date()).getTime();
	//聚胜万合
	window._mvq = window._mvq || [];
	_mvq.push(['$setAccount', 'm-23932-1']);
	_mvq.push(['$logConversion']);
	(function() {
		var mvl = document.createElement('script');
		mvl.type = 'text/javascript'; mvl.async = true;
		mvl.src = ('https:' == document.location.protocol ? 'https://static-ssl.mediav.com/mvl.js'+_oztime : 'http://static.mediav.com/mvl.js'+_oztime);
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(mvl, s); 
	})();	
	
	//亿玛声明adwq
	window._adwq = window._adwq || [];
	_adwq.push(['_setAccount', 'xlvtr']);
	_adwq.push(['_setDomainName', '.roseonly.com.cn']);
	_adwq.push(['_trackPageview']);
	(function() {
		var adw = document.createElement('script');
		adw.type = 'text/javascript';
		adw.async = true;
		adw.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://s') + '.emarbox.com/js/adw.js'+_oztime;
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(adw, s);
	})();
	
	//秒针SiteMonito
	(function(a, e, f, g, b, c, d) {a.ClickiTrackerName = b;
	a[b] = a[b] || function() {(a[b].queue = a[b].queue || []).push(arguments)};
	a[b].start = +new Date; c = e.createElement(f); d = e.getElementsByTagName(f)[0];
	c.async = 1; c.src = g; d.parentNode.insertBefore(c, d)
	})(window, document, 'script', ('https:' == document.location.protocol ? 'https://stm-collect' : 'http://stm-cdn') + '.cn.miaozhen.com/clicki.min.js'+_oztime, 'stm_clicki');
	stm_clicki('create', 'dc-760', 'auto');
	stm_clicki('send', 'pageview');
	
	//百度
	window._hmt = window._hmt || [];
	-function (d) {
		var s = d.createElement('script'),
		e = d.getElementsByTagName('script')[0];
		e.parentNode.insertBefore(s, e);
		var f = (("https:" == document.location.protocol) ? " https://" : " http://");
		s.src = f+'hm.baidu.com/hm.js?0f3247ac99d901bc088d0950da260ebf';
	}(document);
	//推送百度代码 新页面推送百度 加快收录速度
	window._ozuid = App.util.getCookie('index_cookiename');
	(function () {
		var bp = document.createElement('script');
		bp.src = '//push.zhanzhang.baidu.com/push.js'+_oztime;
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(bp, s);
	})();
	
	//无双代码 
	(function(a,b,c,d,e){
	    var s= b.createElement(c);s.async=1;s.src='//t.agrantsem.com/tg.js?c='+d+'&t='+e;
	    var r= b.getElementsByTagName(c)[0];r.parentNode.insertBefore(s,r);
	})(window,document,'script','AG_131112_MXDJ','1');
	
	//click99代码
	-function (d) {
		var s = d.createElement('script'),
		e = d.getElementsByTagName('script')[0];
		e.parentNode.insertBefore(s, e);
		s.src = 'http://www.roseonly.com.cn/assets/roseonly/js/o_code_pc.js'+_oztime;
	}(document);
	var click99userid='';
	var arrStr = document.cookie.split("; ");
	for(var i = 0;i < arrStr.length;i ++){
		var temp = arrStr[i].split("=");
		if(temp[0] == 'index_cookiename') {
			click99userid =temp[1];
		}
	}
	window._ozuid=click99userid;
	
    //ve 监控代码
	if(lessThenIE8){
	    !function () {
	        var a = document.createElement("script");
	        a.type = "text/javascript", a.async = !0, a.src = "http://configch2.veinteractive.com/tags/BEED5E66/D337/49C4/A004/6B6BA2F8ADB6/tag.js"+_oztime;
	        var b = document.getElementsByTagName("head")[0];
	        if (b)b.appendChild(a, b); else {
	            var b = document.getElementsByTagName("script")[0];
	            b.parentNode.insertBefore(a, b);
	        }
	    }();
	}
	
	//品友代码
	if(location.href.indexOf('item')<0){
		window._py = window._py || [];
		_py.push(['a', 't5s..QA4PSdkyvq6N0CHHXwj6f0']);
		_py.push(['domain','stats.ipinyou.com']);
		_py.push(['e','']);
		-function(d) {
			var s = d.createElement('script'),
			e = d.getElementsByTagName('script')[0]; 
			e.parentNode.insertBefore(s, e);
			var f = 'https:' == location.protocol;
			s.src = (f ? 'https' : 'http') + '://'+(f?'fm.ipinyou.com':'fm.p0y.cn')+'/j/adv.js'+_oztime;
		}(document);
	}
	
	
	//加载单页第三方代码
	if(typeof _thirdTP === "function"){
		_thirdTP();
	}
}
