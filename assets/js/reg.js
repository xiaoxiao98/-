$(function(){
	// 单击后缀名让.suffix显示
	$('.code').on('singleTap', function() {
	    console.log('single');
	    $('.suffix').show();
	})

	// 点击suffix，让他隐藏
	$('.suffix').on('singleTap',function(){
		console.log(1)
		$(this).hide();
	})

	
})