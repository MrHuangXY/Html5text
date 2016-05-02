$(function() {
	$('.koubanner ol li').click(function(event){
		$(this).addClass('current').siblings('li').removeClass('current');
		var index=$(this).index();
		num=index;
		$('.koubanner ul li').eq(num).addClass('active').siblings().removeClass('active');
	});
	var num=0;
	var timer=null;
	function autoplay(){
		num++;
		if(num>4)
		{
			num=0;
		}
		$('.koubanner ol li').eq(num).addClass('current').siblings('li').removeClass('current');
		$('.koubanner ul li').eq(num).addClass('active').siblings().removeClass('active');
	};
	timer=setInterval(autoplay, 2000);
	$('.koubanner').hover(function() {
		clearInterval(timer);
	}, function() {
		clearInterval(timer);
		timer=setInterval(autoplay, 2000);
	});
	
});
