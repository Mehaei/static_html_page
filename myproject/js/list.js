
// 导航栏

$('.top1 a').mouseover(function(){
	var This=$(this).index();
	console.log(This);
	if(This==0){
		$('.active1').fadeIn(500,function(){})

		$('.top1-2').css({display:"none"});
		$('.top1-3').css({display:"none"});
	}
	if(This==1){
		$('.active1').css({display:"none"});

		$('.top1-3').css({display:"none"});
		$('.top1-2').fadeIn(500,function(){})
	}
	if(This==2){
		$('.active1').css({display:"none"});
		$('.top1-2').css({display:"none"});
		$('.top1-3').fadeIn(500,function(){})

	}
})

$('.top1-1').mouseout(function(){

	$('.top1-1').css({display:"none"});
})
//导航栏结束