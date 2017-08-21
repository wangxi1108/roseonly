

$(function(){
	var $imgs= $("#lunbo li"),
		len= $imgs.length,
		imgW= $imgs.outerWidth(),
		currentIndex= 1,
		nextIndex= 2,
		timer= null,
		html="",
		isMoving= false;

	var first= $imgs.eq(0).clone(true),
		last= $imgs.eq(len-1).clone(true);

		$(".ull").append(first).prepend(last);
		len += 2;

	// 设置 ul 宽度, 默认显示第一张图片内容
	$(".ull").css({
		width: imgW*len,

		left:-imgW
	});

	//自动轮播
	timer= setInterval(move,3000);



	//小圆点
	for(var i=0; i<len; i++){
		html += '<div></div>';
	}
	$(html).appendTo($(".circle")).eq(0).addClass("yangshi");

	$(".circle div").click(function(){
		nextIndex= $(this).index()+1;
		move();
	});


	//点击翻页
	$(".pageS").click(function(){
		if(!isMoving){
			nextIndex=currentIndex -1;
			move();
		}
	});

	$(".pageX").click(function(){
		if(!isMoving){
			move();
		}
	});

	//移入移出
	$("#lunbo").hover(function(){
		$(".pageS").show();
		$(".pageX").show();

		clearInterval(timer);
	},function(){
		$(".pageS").hide();
		$(".pageX").hide();

		timer= setInterval(move,3000);
	});




	function move(){
		var _left= -1*imgW*nextIndex;
	//ul移动定位
	$(".ull").stop().animate({left: _left},300,
		function(){
			isMoving= false;

		if(nextIndex>= len){//向后滚动
			$(".ull").css({left: -imgW});

			nextIndex= 2;
			currentIndex= 1;
		}else{
			if(currentIndex<= 0){//向前滚动
				$(".ull").css({left:-imgW*(len-2)});

				currentIndex= len-2;
				nextIndex= len-1;
			}
		}
		});

	/* 切换小圆点样式 */
		var circleIndex= (nextIndex== len-1) ?
		 0: (nextIndex-1);//小圆点的索引为图片的-1.

		$(".circle div").eq(circleIndex).addClass("yangshi")
						.siblings().removeClass("yangshi");		 

		currentIndex= nextIndex;
		nextIndex++;
	}




});