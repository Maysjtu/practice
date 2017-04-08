$("#page1").mouseover(function() {
	$("#list1").show();
	$("#list2").hide();
	$(this).addClass('active');
	$("#page2").removeClass('active');
});
$("#page2").mouseover(function() {
	$("#list2").show();
	$("#list1").hide();
	$(this).addClass('active');
	$("#page1").removeClass('active');
});

$(".rc-show").hover(function(event) {
	
	$(this).siblings().removeClass('rc-active');
	$(this).addClass('rc-active');
	//$(".rc-show").stop();
	//$(this).animate({width:480}, 300).siblings().animate({width:240},300);
});