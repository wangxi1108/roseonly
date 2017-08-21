



$(function(){
	$(".chuang1").hover(function(){
		$(".img11").show();
	},function(){
		$(".img11").hide();
	});

	$(".chuang2").hover(function(){
		$(".img22").show();
	},function(){
		$(".img22").hide();
	});

	/*回到顶部*/
	$(window).on("scroll",function(){
		var _scrollTop= $(window).scrollTop();
		if(_scrollTop>700){

			$(".dingbu").show();
		}else{
			$(".dingbu").hide().click(function(){
				$(window).scrollTop(0);
			});


		}


	});

});



