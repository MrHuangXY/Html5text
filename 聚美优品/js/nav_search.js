
$(function() {
	$('.log .logo .search .s-search input').focus(function(event) {
		if($(this).val()=='祛痘')
		{
			$(this).val('');
			$(this).css('color','#333');
		}
	});
	$('.log .logo .search .s-search input').blur(function(event) {
		if($(this).val()=='')
		{
			$(this).val('祛痘');
			$(this).css('color','#999');
		}
	});     // 首页祛痘搜索

	// 鼠标放到送至北京，选择送货地址
	$('.header .send,.header .choose-add').hover(function() {
		$('.header .choose-add').stop().show(500);
		$('.header .header-left li .send em').css('transform',' rotate(-90deg)');
	}, function() {
		$('.header .choose-add').stop().slideUp(500);
		$('.header .header-left li .send em').css('transform',' rotate(90deg)');
	});
	// 鼠标放到我的聚美
	$('.header .h-mine,.header .mine').hover(function() {
		$('.header .mine').stop().slideDown(500)
		$('.header .h-mine em').css('transform',' rotate(-90deg)');
	}, function() {
		$('.header .mine').stop().slideUp(500)
		$('.header .h-mine em').css('transform',' rotate(90deg)');
	});
	// 鼠标放到更多，出现更多
	$('.header .header-right li .h-more,.he-more').hover(function() {
		$('.he-more').stop().slideDown(500);
		$('.header .header-right li .h-more em').css('transform',' rotate(-90deg)');
	}, function() {
		$('.he-more').stop().slideUp(500)
		$('.header .header-right li .h-more em').css('transform',' rotate(90deg)');
	});

	// 点击×，关闭启动页面1
	var qi1_h=$(document).height();
	$('.qi1').height(qi1_h);
	$('.qi1').fadeTo(500,0.9);
	$('.address').fadeIn(400).css('z-index','2');
	$('.qi1-in').fadeIn(1000);
	// 点击欢迎界面关闭欢迎界面
	$('.qi1-in .close').click(function(event){
		$('.qi1-in').fadeOut(500);
		$('.qi1').fadeTo(500,0.6);
		$('.address').fadeIn(500).css('z-index','3');
	});
	// 点击地址关闭整个大页面
	$('.close1').click(function(event){
		$('.qi1,.address').fadeOut(500);
	});


	// banner轮播图
	$(function() {
	var windowwidth=$(window).width();
	$('.banner ul li').width(windowwidth);
	$('.banner ol li').click(function(event){
		$(this).addClass('current').siblings('li').removeClass('current');
		var index=$(this).index();
		num=index;
		$('.banner ul').stop().animate({left:-index*windowwidth},1000);
	});
	var num=0;
	var timer=null;
	function autoplay(){
		num++;
		if(num>4)
		{
			num=0;
		}
		$('.banner ul').stop().animate({left:-num*windowwidth},1000);
		$('.banner ol li').eq(num).addClass('current').siblings('li').removeClass('current');
	};
	timer=setInterval(autoplay, 3000);
	$('.banner').hover(function() {
		clearInterval(timer);
	}, function() {
		clearInterval(timer);
		timer=setInterval(autoplay, 3000);
	});
});

	// 底部banner轮播图
	$('.koubei .koubanner p').click(function(){
		autoplay();
	});
	var timer=null;
	var num=0;
	function autoplay(){
		num++;
		if(num>3)
		{num=0;}
	 	$('.koubei .koubanner ul li').eq(num).stop().fadeIn(3000).siblings('li').hide();
	 	
	};
	timer=setInterval(autoplay, 3000);
	$('.koubei .koubanner').hover(function() {
		clearInterval(timer);
	}, function() {
		clearInterval(timer);
		timer=setInterval(autoplay, 3000);
	});

	// 右部固定定位
	$('.right .geren').hover(function() {
		$('.right .geren .geren-b').css('right','40px');
	}, function() {
		$('.right .geren .geren-b').css('right','-340px');
	});
	function emhover(a,b){
		$(a).hover(function() {
			$(b).css({
				display:'block'
				
			});
			}, function() {
			$(b).css({
				display:'none',
			});
		});
	}
	emhover('.right .r1 .rmine','.right .r1 .rmine em');
	emhover('.right .r1 .rxin','.right .r1 .rxin em');
	emhover('.right .r1 .rsee','.right .r1 .rsee em');
	emhover('.right .r2 .rmine','.right .r2 .rmine em');
	emhover('.right .r2 .rxin','.right .r2 .rxin em');
	emhover('.right .r2 .rsee','.right .r2 .rsee em');
});    


