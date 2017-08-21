
$(function(){
	/*列表切换*/ 
var $menuboxs = $(".nav .menubox");
var $lis= $(".nav ul li");

$lis.mouseover(function () {
	var index = $(this).index()
	$(this).css({"background":"#fff"});
	$(this).children("a").css({"color":"#000"});
	$menuboxs.eq($(this).index()).css({"display":"block"})
});
$lis.mouseout(function () { 
	var index = $(this).index()
	$(this).css({"background":"#414141"});
		$(this).children("a").css({"color":"#fff"});
	
	$menuboxs.eq($(this).index()).css({"display":"none"});
});

$menuboxs.mouseover(function(){
		var index = $(this).index()-2;//-1
		$(this).css({"display":"block"});
		$(".nav ul li").eq(index).css({"background":"#fff"});
		$(".nav ul li").eq(index).children("a").css({"color":"#000"});

	});
$menuboxs.mouseout(function(){
		var index = $(this).index()-2;//-1
		$(this).css({"display":"none"})
		$(".nav ul li").eq(index).css({"background":"#414141"});
		$(".nav ul li").eq(index).children("a").css({"color":"#fff"});

	});


/*吸顶*/
	
$(window).on("scroll",function(){

	var _scrollTop= $(window).scrollTop();
			//吸顶了
	if(_scrollTop>120){
		$("#navbox").css({
				"position":"fixed",
				"top":0,
				"z-index":5
		});

		//目录表的位置
		$(".menubox").css({
			"position":"fixed",
			"top":38,
			"z-index":5
		}); 
		//加入logo和user
		$("#navbox ul li").css({
			"margin-left":30
		});
		$("#navbox ul").css({"margin-left":60});


		$("#navbox .xiaologo").css({
			"display":"block",
			"position":"fixed",
			"top":0,
			"z-index":4
		});
		//用定位,记住：不用添加进去,只用定位的！
		
		$("#header .user").addClass("userer");

	}else{
		$("#navbox").css({"position":"relative",});
		$(".menubox").css({
			"position":"fixed",
			"top":116}); 

		$("#navbox ul").css({"margin-left":0});
		$("#navbox ul li").css({
			"margin-left":96
		});
		$("#navbox ul .li0").css({
			"margin-left":0
		});

		$("#navbox .xiaologo").css({"display":"none",});

		$("#header .user").css({
			"color":"#000",

		});
		//uer
		/*$(".user a").css({"color":"#000","font-size":
			"12px"});
		$("#header .user").css({
			"color":"#000",
			"position":"relative",
			
			"font-size":"12px"
		});*/
		$("#header .user").removeClass("userer");


	}

	});
		

});