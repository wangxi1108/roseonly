
$(function(){

	/*引入头部*/
	$("#top").load("../html/common/tou.html");
	/*引入di部*/
	$("#pdibu").load("../html/common/footer.html");
	/*引入楼层导航*/
	// $("#loudao").load("../html/louceng.html");



/*放大镜下面的小图*/
	
	$(".xiaotu a").map(function(index){
		$(this).on("click",function(){
			var src= $(this).find("img").attr("src");
			$(".jleft .zoom").attr("src",src);
			$(".jleft .zoom").attr("data-zoom-image",src);
		});


	});
















/*数据*/
/*$.ajax({
		url:"../data/product.json",
		success:function(responseData){
			var data = {
				products: responseData
			};

			var html= template("product_template",data);
			$(".page1").append(html);

		} 
	});
*/

	$.ajax({
		url:"../data/product.json",
		success:function(responseData){
			var _one= responseData.one;
			var data= {
				products: _one
			}
			var html= template("product_template",data);
			$(".retu li").eq(0).append(html);
		}
	});

	$.ajax({
			url:"../data/product.json",
			success:function(responseData){
				var _one= responseData.two;
				var data= {
					products: _one
				}
				var html= template("product_template",data);
				$(".retu li").eq(1).append(html);
			}
		});


/*轮播切换页面，  页面显示数据.点击只是一个小点！*/
	/*没按照轮播的写。。。。。。。。*/
	$(".retu li").eq(0).show();
	$(".page1").css({"background":"#ddd"});

	$(".page1").click(function(){
		$(".retu li").eq(1).hide();
		$(".retu li").eq(0).show();

		$(this).css({"background":"#ddd"});
		$(".page2").css({"background":"none"});

	});
	
	$(".page2").click(function(){

		$(".retu li").eq(0).hide();
		$(".retu li").eq(1).show();

		$(this).css({"background":"#ddd"});
		$(".page1").css({"background":"none"});
		
	});



	


/*页面效果*/
	/*数量+、-*/
	$(".jamount .add").click(function(){
		// 注意：里面的值字符串，要转化成数字.
		var _shu= parseInt($(".jamount .shu").val())+1;
		$(".jamount .shu").val(_shu);
	});

	$(".jamount .jian").click(function(){
		// 注意：里面的值字符串，要转化成数字.
		var _shu= parseInt($(".jamount .shu").val())-1;
		$(".jamount .shu").val(_shu);
	});

	/*跳转购物车*/
	




/*楼层导航*/
	var headerH= $(".floor:eq(0)").offset().top,

			//可视窗口高度
			winHeight= $(window).height(),
			// 标记是否是由于点击导航发生的滚动行为，true:点击触发  false:非点击
			isClickmove= false,

			currentFloorIndex= 0;// 当前显示楼层的索引

		// 绑定页面滚动事件
		$(window).on("scroll",function(){
			if(!isClickmove){
			var _scrollTop= $(window).scrollTop();
			//当滚动距离大于窗口一半时：
			if(_scrollTop>= headerH-winHeight/2){

				$("#menu").stop().fadeIn();
			}else{
				$("#menu").stop().fadeOut();
			}

			//遍历每个楼层
			$(".floor").each(function(index,element){
			//求当前遍历到楼层在文档中距离文档顶部的绝对定位
			var _top= $(element).offset().top;
			// 与滚动距离判断
			if(_scrollTop>= _top-winHeight/2){
			//把相应导航列表里面的字显示出来
			// $("#menu li").eq(index).children("span").show().end().siblings().children("span").hide();

				$("#menu li").eq(index).css({background:"pink"})
				.siblings().css({background:"beige"});
 
				// 标记当前正显示楼层的索引
				currentFloorIndex= index;
			}

			});

		}
		});

		
		// 点击导航楼层跳转
		$("#menu li:not(:last)").click(function(){

			//定义列表导航的索引
			var floorIndex= $(this).index(),

		 //计算页面应该滚动的高度,等于要显示的楼层在文档的位置高度
		 _top= $(".floor").eq(floorIndex).offset().top;

		 isClickmove= true;

		 // $(this).children("span").show().end()
		 // 		.siblings().children("span").hide();
		
		$(this).css({background:"pink"}).siblings().css({background:"beige"});		

		 //2、 实现页面滚动效果:设置页面的滚动高度,对象是页面！
		 $("body,html").stop().animate({scrollTop: _top},300,function(){
		 		isClickmove= false;//点击事件运动 完成之后，就把标记记上。

		 	});
		 //鼠标移入移出li列表导航时，li背景的显示
		
		}).hover(function(){//鼠标滑过li时的效果。不是点击事件的
			// $(this).children("span").show();
			
			$(this).css({background:"pink"});
		},function(){
		//排除当当前正在显示的楼层与点击的楼层相同时,不取消背景
			if($(this).index() !== currentFloorIndex){
				// $(this).children("span").hide();
				
				$(this).css({background:"beige"});
			}
		});

		//点击 回到顶部时，回到顶部
		$("#menu li:last").click(function(){
			$(window).scrollTop(0);
		// $("html,body").animate({scrollTop:0},1000);
		});










});