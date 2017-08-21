

$(function(){ 

	/*引入底部*/
	$("#cdibu").load("../html/common/footer.html");

/*购物车*/
	// 之前的模拟
	/*$.ajax({
		url : "../data/cart.json",
		type : "get",
		dataType : "json",
		success : function(responseData){
			var data = {
				carts: responseData
			};
			var html= template("cart_template",data);

			$(".cartbox").append(html);
		},
		error : function(a)	{
			console.log(a);
		}
		
	});*/
	/*把cookie里面的数据得到了添加到购物车*/
	$(function(){

			$.cookie.json = true;
			// 读取 cookie 中保存的购物车商品信息
			// [{},{},{},{}]
			var _products = $.cookie("products") || [];
			/*if (_products.length === 0) { // 购物车为空，重新选购商品
				location = "product.html";
				return;
			}*/

			var data = {carts : _products};
			var html = template("cart_template", data);
	/*添加商品到购物车并遍历所有商品信息，用.data()缓存数据,
		以便后面的+、-等操作。都是在缓存的数据上操作的，
		然后再保存到cookie。*/

		$(html).appendTo(".cartbox").filter(".cart")
		.each(function(index, element){

			$(element).data("product", _products[index]);

		});
		//合计
			total();


		// 数量 +，-
		$(".content").delegate(".jian,.add","click",function(){

			var $row= $(this).parents(".cart");

			var _product = $row.data("product");
				console.log(_product);

			if($(this).is(".add")){

				++_product.amount;
			}else{

				if(_product.amount<=1)
					return;
				--_product.amount;
			}
			$($row).find(".amount").val(_product.amount);
			// 隐藏了的小计值
	$($row).find(".xiaoji").text(_product.amount*_product.price);
			// console.log($(".xiaoji"));
			//合计
			total();
			//保存cookie
			
			$.cookie("products",_products,{expires:9});
		});

		/*手动输入数量*/
		$(".content").on("blur",".amount",function(){
		var _product= $(this).parents(".cart").data("product");

		var reg = /^[1-9]\d*$/;
			if (!reg.test($(this).val())) {
				$(this).val(_product.amount);
				return;
			}
		// 输入数量正确
			_product.amount= $(this).val();
		// 修改小计显示
		$(this).parents(".cart").find(".xiaoji").text(
			_product.amount * _product.price);

			total();
			$.cookie("products",_products,{expires:9});

		});


		/*删除*/
		$(".content").on("click",".shanchu",function(){

			var $row= $(this).parents(".cart");
			var _product = $row.data("product");

			// 从数组中删除 index 处元素
			var index= $.inArray(_product,_products);
			_products.splice(index,1);
			// 从dom结构中删除行
			$row.remove();

			total();
			// 从 cookie 中删除当前行的数据
			$.cookie("products",_products,{expires:9});

		});


		function total(){
			var _total = 0;
		$(".cart").each(function(index, element){
			_total += Number($(element).find(".xiaoji").text());
		});
		$(".totalbox .total").text(_total.toFixed(2));		

		/*var _all= $(".total").text();
		console.log(_all);*/

		return _total;

		}

		$(".jiesuan").click(function(){
			var _all= total();
			console.log(_all);
			$.cookie("all",_all);
			console.log($.cookie("all"));

		});

	

  });





});