
$(function(){

	/*引入头部*/
	$("#top").load("../html/common/tou.html");
/*引入尾部*/
	$("#weibu").load("../html/common/footer.html");



/*正则验证*/
	/*电话*/
	var $haoma;
	$(".call").blur(function(){
		$(".tishi1").html(" ");
		  $haoma= $(".call").val();
		/*var  $reg= /^[0-9]{11}$/;*/
		var $reg= /^1[3|4|5|8][0-9]\d{8}$/;

		if ($reg.test($haoma)) {
			
			$(".tishi1").html(" ");
			
			}else{
				$(".tishi1").html("格式不对!");
			}
			// console.log($haoma);
	}); 

	/*密码*/

	var $mima;
	$(".password").blur(function(){

		$mima= $(".password").val();
		
		var $reg= /^[0-9A-Za-z]{6,16}$/;

		if($reg.test($mima)){
			$(".tishi2").html(" ");

		}else{
			$(".tishi2").html("密码格式不正确");
		}

	});


	/*点击登录*/
	$.cookie.json= true;
	// 切记：要放在函数外面


	$(".yanzheng").click(function(){

		var _mes= $.cookie("mes");
		var mima= $(".password").val();
		var haoma= $(".call").val();
	
	// 	console.log(haoma,mima);
	// 	console.log(_mes);
	// console.log(_mes.username);
	// console.log(_mes.password);
	
		if(haoma== _mes.username && 
			mima== _mes.password){

			alert("登录成功");
			$(".denglu").text("退出");
		//没行-----
			location= "../index.html";


		}else{
			
			$(".tishi4").text("用户名或密码错误");

		}

	});







	


	





	
 

});