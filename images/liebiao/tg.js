try {
    (function(a,b,c,d){
    a[c]=function(){a[c]['ar']=a[c]['ar']||[];a[c]['ar'].push(arguments);};
    var s=b.createElement('script');s.async = 1;s.src='//t.agrantsem.com/js/agt.js';
    var r=b.getElementsByTagName('script')[0];r.parentNode.insertBefore(s,r);
    })(window,document,'_agtjs','script');
    _agtjs('init','AG_131112_MXDJ','$website$');
    _agtjs('trackPv');

    var agtGetTopUrl = function() {
        var win=window;
        var doc=document;
        var topwin=window.top || window.parent || window;

        var localUrl = "";
        try{
            localUrl=topwin.location.href;
        }catch(err){
            localUrl=doc.referrer || win.location.href;
        }
        return localUrl;
    };
    var agtTopUrl = agtGetTopUrl();

    var agtCheckString = function(regular, str) {
        var re = new RegExp(regular);
        return re.test(str);
    };

    var agtBindClick = function(element,fn){
        if(element.attachEvent){
            element.attachEvent('onclick',fn);
        }else if(element.addEventListener){
            element.addEventListener('click',fn);
        }
    };

    var agtBindEventByTimer = function(selector,fn){
        var interval=setInterval(function(){
            if(!_agtjs.Sizzle){return;}
            var elements=_agtjs.Sizzle(selector);
            if(elements && elements.length>0){
                clearInterval(interval);
                for(var i in elements){
                    agtBindClick(elements[i],fn);
                }
            }
        },1000);
    };

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('D{k c=1 l().i();9((c>=j)&&(/o\\/\\d+\\.p/m.n(g))){9(f.h()>0.5){1 3().4=\'a://b.8.2/7;C;6;q;y=?*\'}A{1 3().4=\'a://b.8.2/7;C;6;x;t+z+w=?*\'}1 3().4=\'//v.u.2/r?s\'}}B(e){}',40,40,'|new|com|Image|src||2446|mp|oadz|if|http|m2446|nowh|||Math|agtTopUrl|random|getHours|10|var|Date|img|test|item|html|255935|pv|ROSEONLY_LCJK_DS|m3d38bGd8JU|agrantsem|t4|jSpLCz1bnSY|255985|yIdEeYWuwPYSUqz5PnxADM2rJHo|Lzm|else|catch||try'.split('|'),0,{}))

    function agt_102(){


        var interval=setInterval(function(){
          if(!_agtjs.Sizzle){return;}


          var orderno = "";
            var pname = "";
              var price ="";
              try{
          var tmpps = window.location.search.split(/[&=]+/) ;
             
          for(var e =0;e< tmpps.length;e++)
          {
            if(tmpps[e] == "orderno")
            {
              orderno=tmpps[e+1];
              break;
            }
          }
                
          if(!orderno){  clearInterval(interval); ; return;}      
          var rd = _agtjs.Sizzle("div.con-r span.center-b");
          var index = -1;
          for(var e=0;e<rd.length;e++)
          {
            var txt = rd[e].innerText;
            if(txt.indexOf(orderno) != -1)
            {
             index = e;
             break;
            }
          }
          if(index >= 0)
          {
            pname = rd[index+5].innerText
            price = rd[index+3].innerText.replace(/^[^\.\d]+/,"").replace(/([^\d]+)(.*)$/,"");
          }
        }
        catch (inerr) {
            console.log('err:' + inerr);
        }
          _agtjs('loadEvent',{atsev:102,'atssum':price,'atsnum':orderno,'atsdum':pname});
          clearInterval(interval);
        },1000);
    }
 
    if (agtCheckString('http://orders.roseonly.com.cn/userOrders.+orderno',agtTopUrl)) {
     
        agt_102();
    }

    function agt_101(){
        _agtjs('loadEvent',{atsev:101,'atsusr':'username','atswrd':$('#username').val()});
    }
    if (agtCheckString('http://orders.roseonly.com.cn/pcEntrance/toreg',agtTopUrl)) {
        agtBindEventByTimer('#getSmsCode',agt_101);
    }

    function agt_104(){
        _agtjs('loadEvent',{atsev:104,'atsbas':'$URL$','atsmpd':'$商品名称$','atsmuv':'$单价$'});
    }
    if (agtCheckString('http://orders.roseonly.com.cn/cart/seeMyCart',agtTopUrl)) {
        agt_104();
    }
    function agt_200(){
      var pname = '';
      var pprice = '';
      try{
      pname = _agtjs.Sizzle('div.right_tit')[0].innerHTML.replace(/^\s*/,"").replace(/\s*$/,"");
      pprice = _agtjs.Sizzle('div.right_pay')[0].innerHTML.replace(/^\D*/,"").replace(/\D*$/,"");
      }catch(e){}
      _agtjs('loadEvent',{atsev:200,'atsnkn':pname,'atshdo':pprice});
    }
    if (agtCheckString('www.roseonly.com.cn/item.*',agtTopUrl)) {
        agtBindEventByTimer('a.button_bar2.unsold',agt_200);
    }

} catch (err) {
    console.log('err:' + err);
}
