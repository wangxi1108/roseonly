
$(function(){

/*引入头部*/
	$("#top").load("../html/common/tou.html");
/*引入尾部*/
	$("#weibu").load("../html/common/footer.html");



/*dcover遮罩效果*/

 $(".liebox").on("mouseenter",".dbox",function(){
 	$(this).children(".dcover").fadeIn();
 });

  $(".liebox").on("mouseleave",".dbox",function(){
 	$(this).children(".dcover").hide();
 });


/*$.ajax({
		url : "../data/liebiao.json",
		type : "get",
		dataType : "json",
		success : function(responseData){
			var data = {
				liebiaos: responseData
			};
			var html= template("liebiao_template",data);

			$(".liebox").append(html);
		},
		error : function(a)	{
			console.log(a);
		}
		
	});*/
/*各个列表添加商品*/

$.ajax({
		url : "../data/liebiao.json",
		type : "get",
		dataType : "json",
		success : function(responseData){
			var result = responseData.a0;
			var data = {
				liebiaos: result
			};
			var html= template("liebiao_template",data);

			$(".liebox").eq(0).append(html);
		},
		error : function(a)	{
			console.log(a);
		}
		
	});
 

$.ajax({
		url : "../data/liebiao.json",
		type : "get",
		dataType : "json",
		success : function(responseData){
			var result = responseData.a1;
			var data = {
				liebiaos: result
			};
			var html= template("liebiao_template",data);

			$(".liebox").eq(1).append(html);
		},
		error : function(a)	{
			console.log(a);
		}
		
	});

$.ajax({
		url : "../data/liebiao.json",
		type : "get",
		dataType : "json",
		success : function(responseData){
			var result = responseData.a2;
			var data = {
				liebiaos: result
			};
			var html= template("liebiao_template",data);

			$(".liebox").eq(2).append(html);
		},
		error : function(a)	{
			console.log(a);
		}
		
	});

$.ajax({
		url : "../data/liebiao.json",
		type : "get",
		dataType : "json",
		success : function(responseData){
			var result = responseData.a3;
			var data = {
				liebiaos: result
			};
			var html= template("liebiao_template",data);

			$(".liebox").eq(3).append(html);
		},
		error : function(a)	{
			console.log(a);
		}
		
	});


	$(".liebox").eq(0).css({"display":"block"});


	$(".selectbox a").map(function(){

		$(this).on("click",function(){
			// console.log($(this).index());
			var _index= $(this).index();
			$("#daliebox .liebox").eq(_index).show()
				.siblings(".liebox").hide();

		});

	});


/*点击商品时，保存cookie*/
	$("#daliebox").on("click",".dbox",function(){

		var _id= $(this).find(".bianhao").text();
			$.cookie.json = true; 
			// console.log(_id);
			$.cookie("number",_id,{expires:9,path:"/"});


	});
			

});

		



