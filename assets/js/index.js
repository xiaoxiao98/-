
// 导航
document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';

new Swiper('.tabs', {
	// 每个视图展示5个
    slidesPerView: 5,
})


//轮播图
new Swiper('.carousel', {
    autoplay: true,
    loop: true,
    // 需要分页器
    pagination: {
        el: '.swiper-pagination',
    }
})

// 新品首发
new Swiper('.content', {
	// 每个视图展示
    slidesPerView: 2.4,
    slidesPerGroup: 1,
})

// 限时购
run();
setInterval(run,1000);
function run(){

	var d = new Date();
	var d1 = new Date('2018-3-26 8:0:0');
	var time = d1.getTime()-d.getTime();

	// 剩余的小时
	var hour = add(Math.floor(time/1000/60/60%24));
	// 分钟
	var minute = add(Math.floor(time/1000/60%60));
	// 秒
	var second = add(Math.floor(time/1000%60));

	document.querySelectorAll('.timeBuy .num')[0].innerHTML=hour;
	document.querySelectorAll('.timeBuy .num')[1].innerHTML=minute;
	document.querySelectorAll('.timeBuy .num')[2].innerHTML=second;
}

function add(time){
	if(time<10){
		time = '0'+time;
	}
	return time;
}


$(function(){
	 //当页面滚动到300的时候，显示出来回顶部
	 $(window).scroll(function(){
	 	if($(this).scrollTop()>=600){
	 		$('.goTop').show();
	 	} else {
	 		$('.goTop').hide();

	 	}
	 })
	 //当点击回顶部（bt）时候让页面滚动距离等于0
	 $('.goTop').click(function(){
	 	$('html,body').animate({scrollTop:'0'},600)
	 })

	 //当页面滚动的时候，隐藏
	 $(window).scroll(function(){
	 	if($(this).scrollTop()>=10){
	 		$('.open').hide();
	 		
	 	} else {
	 		$('.open').show();
	 	}
	 })
})

