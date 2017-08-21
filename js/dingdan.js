 
 $(function(){

/*引入底部*/
	$("#dingdi").load("../html/common/footer.html");



 	/*地址3级联*/
 	function sheng(data){
		var provinces= data.showapi_res_body.data;
		var html= "";
		provinces.forEach(function(province){
			html += '<option value="'+province.id+'">'+province.areaName+'</option>';
		});
	//注意：id必须要，是因为省下面的市级是根据id来查找的！
		$("#province").append(html);
	}
	// 查询省份
	$.getJSON("http://route.showapi.com/1149-1?showapi_appid=29550&showapi_sign=e48f5d7e50334ffca41693016df78054&level=1&page=1",function(data){
		sheng(data);
		//显示第二页(1页显示不完)
		$.getJSON("http://route.showapi.com/1149-1?showapi_appid=29550&showapi_sign=e48f5d7e50334ffca41693016df78054&level=1&page=2",function(data){

			sheng(data);
			// 省份初始化后绑定城市信息
			shi();

		});
	});

	// 根据省份的选择，查询城市信息
	function shi(){
		var sheng_id= $("#province").val();
		$.getJSON("http://route.showapi.com/1149-2?showapi_appid=29550&showapi_sign=e48f5d7e50334ffca41693016df78054&parentId="+sheng_id,function(data){
			var cities= data.showapi_res_body.data;
			var html="";
			cities.forEach(function(city){
				html += '<option value="'+city.id+'">'+city.areaName+'</option>';
			});
			$("#city").empty().append(html);
			//先把之前查了有的值给清空，不然会一起显示。

			quxian();
		});
	}
	// 根据城市的选择，查询区县信息
	function quxian(){
		var _id= $("#city").val();
		$.getJSON("http://route.showapi.com/1149-2?showapi_appid=29550&showapi_sign=e48f5d7e50334ffca41693016df78054&parentId="+_id,function(data){
			var districts= data.showapi_res_body.data;
			var html="";

			districts.forEach(function(district){
				html += '<option value="'+district.id+'">'+district.areaName+'</option>';
			});
			$("#district").empty().append(html);

		});
	}
	// 当省份选择改变时，更新城市下拉列表内容
	$("#province").change(shi);
	// 当城市选择改变时，更新区县下拉列表内容
	$("#city").change(quxian);


	/*获取订单信息*/

		$.cookie.json= true;

		var _products= $.cookie("products") || [];
	
		console.log(_products);

		var data= {dingdans: _products};

		var html = template("dingdan_template", data);

		$(html).appendTo(".message");


		/*合计*/
		var _all= $.cookie("all");
		$(".all").text(_all);



 });