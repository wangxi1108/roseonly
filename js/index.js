


$(function(){
/*引入头部*/
	$("#top").load("/html/common/tou.html");
/*引入尾部*/
	$("#weibu").load("/html/common/footer.html");
/*引入浮窗*/
	$("#chuang").load("/html/common/contact.html");


/*热单品*/
$(".liS li").mouseenter(function(){
	// $(".liS").css({"border-bottom":"1px solid #000"});
	// $(this).css({});在css里
});



/*图片遮罩*/
	/*大图的*/
	 $("#loubox").on("mouseenter","dt",function(){
	 	$(this).children(".cover").fadeIn();
	 });

	  $("#loubox").on("mouseleave","dt",function(){
	 	$(this).children(".cover").hide();
	 });

	/*	小图的*/

	 $("#loubox").on("mouseenter","dd",function(){
	 	$(this).children(".cover").fadeIn();
	 });

	  $("#loubox").on("mouseleave","dd",function(){
	 	$(this).children(".cover").hide();
	 });


/*热卖单品*/

	 $(".liX").on("mouseenter",".div0",function(){
 	$(this).children(".dcover").fadeIn();
 });

  $(".liX").on("mouseleave",".div0",function(){
 	$(this).children(".dcover").hide();
 });




/*数据*/

	/*$.ajax({
		url:"data/index.json",
		success:function(responseData){
			var data = {
				repins: responseData
			};
			var html= template("repin_template",data);
			$("#hotbox .liX li").eq(0).append(html);

		}
	});*/

/*最初显示的是4的数据*/
	$.ajax({
		url:"data/index2.json",
		success:function(responseData){
			var _one= responseData.four;
			var data= {
				repins: _one
			}
			var html= template("repin_template",data);
			_liX.eq(3).append(html);
		}


	});

	$(".liS li").eq(3).css({
				"border-bottom":"1px solid #fff",
			"border-left": "1px solid #000",
			"border-right": "1px solid #000",
			"border-top": "3px solid #000",
			"margin-top": -3,
	 		"margin-left":-1
		});


	var _liS= $(".liS li"),
		_liX= $(".liX li");


	$(".liS li").hover(function(){
		
		var $index= $(this).index();
		$(this).css({
				"border-bottom":"1px solid #fff",
			"border-left": "1px solid #000",
			"border-right": "1px solid #000",
			"border-top": "3px solid #000",
			"margin-top": -3,
	 		"margin-left":-1
		}).siblings().css({
			"border":"none",
			"margin-top":0
		});
		_liX.eq($index).empty();
		_liX.eq($index).show().siblings().hide();
		// console.log($index);
		
/*
		$.ajax({
		url:"data/index.json",
		success:function(responseData){
			var data = {
				repins: responseData
			};
			var html= template("repin_template",data);
			_liX.eq($index).append(html);
		}
	});*/

		/*$.ajax({
		url:"data/index2.json",
		success:function(responseData){
			var _one= responseData.two;
			var data= {
				repins: _one
			}
			var html= template("repin_template",data);
			_liX.eq($index).append(html);
		}


	});*/
	/*根据索引来数据请求*/
		$.ajax({
		url:"data/index2.json",
		success:function(responseData){

			var suoyin;
			switch($index){
				case 0:
				suoyin= responseData.one;
				break;
				case 1:
				suoyin= responseData.two;
				break;
				case 2:
				suoyin= responseData.three;
				break;
				case 3:
				suoyin= responseData.four;
				break;
			}

			var data= {
				repins: suoyin
			}
			
			var html= template("repin_template",data);

			_liX.eq($index).append(html);
		}

	});



	},function(){//鼠标移出
	
	});
// 相互绑定

	$(".liX li").hover(function(){
		var $index= $(this).index();

		_liS.eq($index).css({
			"border-bottom":"1px solid #fff",
			"border-left": "1px solid #000",
			"border-right": "1px solid #000",
			"border-top": "3px solid #000",
			"margin-top": -3,
	 		"margin-left":-1
		}).siblings().css({"border":"none",
						"margin-top":0});

		$(this).show().siblings().hide();

	},function(){
		var $index= $(this).index();

	});


	/*楼层的图*/
	$.ajax({
		url:"data/index_lou.json",
		success:function(responseData){
			var data = {
				lous: responseData
			};
			var html= template("lou_template",data);
			$("#loubox").append(html);

		}
	});


/*点热卖商品时，保存id到cookie,并跳转到详情页面*/

	$("#hotbox").on("click",".div0",function(){
              
		$.cookie.json= true;

		var _id= $(this).find(".hao").text();

		// alert(_id);
		$.cookie("number",_id,{expires:9,path:"/"});

		console.log($.cookie("number"));
		
	});



});







