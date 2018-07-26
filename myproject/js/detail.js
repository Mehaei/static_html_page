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

// ============放大镜===============
$('.lef').mouseover(function(){
	$('.small,.loupe').css('display','block')
})

$('.lef').mousemove(function(e){
	// 获取鼠标的位置
	var X=e.pageX;
	var Y=e.pageY;
	// console.log(X,Y);
	//让鼠标在蒙版中心
	var xx=X-96;
	var yy=Y-317;
	//计算蒙版大小
	var sW=$('.loupe').width()/$('.loupe img').width()*$('.lef').width();
	var sH=$('.loupe').height()/$('.loupe img').height()*$('.lef').height();
	$('.small').width(sW);
	$('.small').height(sH);
	//判断蒙版边界
	var maxW=$('.lef').width()-$('.small').width();
	// console.log(maxW);
	if(xx>maxW){
		xx=maxW;
	}
	if(xx<=0){
		xx=0;
	}
	var maxH=$('.lef').height()-$('.small').height();
	// console.log(maxH);
	if(yy>maxH){
		yy=maxH;
	}
	if(yy<=0){
		yy=0;
	}


// 让蒙版跟着鼠标跑
	$('.small').css({left:xx+'px',top:yy+'px'});


	//设置大图的偏移
	var maxImageX=xx*4;
	var maxImageY=yy*4;

	$('.loupe img').css({left:-maxImageX,top:-maxImageY})
})
$('.lef').mouseout(function(){
	$('.small,.loupe').css('display','none')
})

//切换图片功能
$('.detail1-1 img').click(function(){
	// console.log(this);
	var Src=$(this).attr('src');

	$('.lef img').attr('src',Src);
	$('.loupe img').attr('src',Src);
})
// ============放大镜=============


