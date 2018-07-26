// 导航栏
$('.top1 a').mouseover(function(){
	var This=$(this).index();
	console.log(This)
	if(This==0){
		$('.inne').css({display:"block"});
		$('.inne1').css({display:"block"});
		$('.inne2').css({display:"none"});
		$('.inne3').css({display:"none"});
	}
	else if(This==1){
		$('.inne').css({display:"block"});
		$('.inne2').css({display:"block"});
		$('.inne1').css({display:"none"});
		$('.inne3').css({display:"none"});
	}
	else if(This==2){
		$('.inne').css({display:"block"});
		$('.inne3').css({display:"block"});
		$('.inne1').css({display:"none"});
		$('.inne2').css({display:"none"});
	}
	else{
		$('.inne').css({display:"none"})
		$('.inne').children().css({display:"none"})
	}
})
$('.inne').mouseout(function(){
		$('.inne').css({display:"none"});
		$('.inne3').css({display:"none"});
		$('.inne1').css({display:"none"});
		$('.inne2').css({display:"none"});
})
//导航栏结束

// =======个人信息======
$('.xlk').click(function(){
	$('.xlk1 ul').fadeToggle();
})



