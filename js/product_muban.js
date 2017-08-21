 
$(function(){
 
	/*引入头部*/
	$("#top").load("../html/common/tou.html");
	/*引入di部*/
	$("#pdibu").load("../html/common/footer.html");
	/*引入楼层导航*/
	// $("#loudao").load("../html/louceng.html");

/*整个模板加载*///模拟已成功
	/*$(function(){

		$.getJSON("../data/product_muban.json", 
		function(responseData){
				var data = {
					damubans : responseData
				};
				var html = template("damuban_template",data);
				$(".rightmuban").append(html);
			});	

	});*/

/*jright数据请求*/
	$(function(){

		$.cookie.json= true;
	var _number= $.cookie("number");

	$.getJSON("../data/product_muban.json",
		 function(responseData){

		 	for(var i=0,len=responseData.length;i<len;i++){

		 		if(_number== responseData[i].id){
		 			// console.log(responseData)
		 			var data= {
		 				damubans: [responseData[i] ]
		 			}
		 		}

		 	}

		 	var html = template("damuban_template",data);
			$(".rightmuban").append(html);
			// $(html).appendTo(".rightmuban");
	});
	/*添加到购物车*/

		// 获取当前点击的 “添加到购物车” 所在行对象
	$(".jright").on("click",".jche",function(){
		// 获取当前点击的 “添加到购物车” 行中商品信息，保存到对象中
		 console.log(this);

		var $row = $(this).parents(".jright");
				// 获取当前点击的 “添加到购物车” 行中商品信息，保存到对象中
			var product = {
				url: $row.find(".imgurl").attr("src"),
				id : $row.find(".bianhao").text(),
				pingpai:$row.find(".pingpai").text(),
				name :$row.find(".name").text(),
				price : $row.find(".jiaqian").text(),
				amount : $row.find(".shu").val()
			};
			console.log(product);
		$.cookie.json = true; 

		// 获取 cookie 中保存的购物车信息
		var _products = $.cookie("products") || [];
				// 判断是否已选购当前商品
				var _index = indexOf(product.id, _products);
				if (_index === -1) { // 以前未选购
					_products.push(product);
				} else { // 以前有选购当前的商品
					_products[_index].amount++;
				}
				// 将 购物车数组结构 保存回 cookie 中
				$.cookie("products", _products, {expires:9});

				// 显示结果
				console.log($.cookie("products"));
		});

			function indexOf(id, products) {
				for (var i = 0, len = products.length; i < len; i++) {
					if (id === products[i].id)
						return i;
				}

				return -1;
			}
	
		
	});




/*放大镜下面的小图*/
	
	$(".xiaotu a").map(function(index){
		$(this).on("click",function(){
			var src= $(this).find("img").attr("src");
			$(".jleft .zoom").attr("src",src);
			$(".jleft .zoom").attr("data-zoom-image",src);
		});


	});


/*数据 推荐的商品*/
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
	$(".jright").on("click",".add",function(){
		// 注意：里面的值字符串，要转化成数字.
		var _shu= parseInt($(".jamount .shu").val())+1;
		console.log(_shu);
		$(".jamount .shu").val(_shu);
	});

	$(".jright").on("click",".jian",function(){
		// 注意：里面的值字符串，要转化成数字.
		var _shu= parseInt($(".jamount .shu").val())-1;

		if(_shu<1){
			return;
		}

		$(".jamount .shu").val(_shu);
	});

	/*跳转购物车*/
	




/*楼层导航*/
// 要把模板渲染完之后才楼层导航。
	/*var headerH= $(".floor:eq(0)").offset().top,*/

	/*console.log($(".floor").eq(0));
	console.log($(".floor").eq(0).offset());*/

	var headerH= $(".floor").eq(0).offset().top,
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



/*大模板数据*/




});




