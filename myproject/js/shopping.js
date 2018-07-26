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





// 全选功能键
// var inpus=$('input[name=all]');
// console.log(inpus);
// var inde=inpus.index();
// console.log(inde);
// var Inp=$('.title input').eq(0).attr('checked');
// console.log(Inp);
// console.log($('.title input').eq(0).prop('checked'));
// $('.itt').attr({'checked':"false"});
// console.log(Inp);
// for(i in inpus){
	// console.log(i);
// }
// if(Inp){
// 	$('.title input').eq(1).attr('checked')
// 	$('.title input').eq(2).attr('checked')
// }


// 绑定减号单击事件

// $('.title9 button').eq(0).click(function(){
// 	var a=0;
// })
// $('.title9 button').eq(2).click(function(){
// 	console.log('133');
// 	var a=1;
// 	a++;

// })
 $(".itt").click(function () {
    if ($(this).is(":checked")) {
        $("[name=all]:checkbox").prop("checked", true);
    } else {
        $("[name=all]:checkbox").prop("checked", false);
    }
});