


$(function(){

	/*引入头部*/
	$("#top").load("../html/common/tou.html");
/*引入尾部*/
	$("#weibu").load("../html/common/footer.html");



/*正则验证*/
	/*电话*/
	$(".call").blur(function(){
		$(".tishi1").html(" ");
		var  $haoma= $(".call").val();
		/*var  $reg= /^[0-9]{11}$/;*/
		var $reg= /^1[3|4|5|8][0-9]\d{8}$/;

		if ($reg.test($haoma)) {
			
			$(".tishi1").html(" ");
			
			}else{
				$(".tishi1").html("格式不对!");
			}
			console.log($haoma);
	}); 
	/*密码*/
	$(".password").blur(function(){

		var $mima= $(".password").val();
		
		var $reg= /^[0-9A-Za-z]{6,16}$/;

		if($reg.test($mima)){
			$(".tishi2").html(" ");

		}else{
			$(".tishi2").html("密码格式不正确");
		}

	});
	
 

});