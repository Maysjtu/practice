$(document).ready(function(){
	$("#wepic").hover(function() {
		$(this).attr("src","img/img_05_copy.png");
	}, function() {
		$(this).attr("src","img/img_05.png");
	});
	
	$("#t1").click(function() {
	    $(".intro").stop(true);	
		$(".show").hide(500);
        $(this).animate({
        	right: '940'
           },500,function(){
           	$("#start1").show();
           });
        $("#t2").animate({
        	right: '120'
           },500);
        $("#t3").animate({
        	right: '60'
           },500);
		$("#t4").animate({
        	right: '0'
           });
        
	});
	$("#t2").click(function() {
		$(".intro").stop(true);	
		$(".show").hide(500);
		$("#t1").animate({
        	right: '940'
           },500);
		$("#t2").animate({
			right: '880'
           },500,function(){
           	$("#start2").show();
           });
		$("#t3").animate({
        	right: '60'
           },500);
		$("#t4").animate({
        	right: '0'
           });
	});
	$("#t3").click(function() {
		$(".intro").stop(true);	
		$(".show").hide(500);
		$("#t1").animate({
        	right: '940'
           },500);
		$("#t2").animate({
        	right: '880'
           },500);
		$("#t3").animate({
        	right: '820'
           },500,function(){
           	$("#newyear").show();
           });
		$("#t4").animate({
        	right: '0'
           });
	});
	$("#t4").click(function() {
		$(".intro").stop(true);	
		$(".show").hide(500);
		$("#t1").animate({
        	right: '940'
           },500);
		$("#t2").animate({
        	right: '880'
           },500);
		$("#t3").animate({
        	right: '820'
           },500);
		$("#t4").animate({
        	right: '760'
           },500,function(){
           	$("#dessert").show();
           });
	});

    var cnt = 1;
	$("#nyimg").click(function() {
		
		cnt++;
		var srcs = "img/ny"+cnt+".jpg"; 
		if(cnt>5)cnt=0;
		$(this).attr("src",srcs);
	});

	$(".clickimg img").click(function() {
		var srcs = $(this).attr("src"),rightval="120px";
		var srcs1=srcs.substring(0,srcs.length-4);
		 if (parseInt($("#t1").css("right"))>500) {rightval="60px";};
		 if (parseInt($("#t2").css("right"))>500) {rightval="120px";};
		 if (parseInt($("#t3").css("right"))>500) {rightval="180px";};
		 if (parseInt($("#t4").css("right"))>500) {rightval="240px";};
		$("#bigimg").css("left",rightval);
		$("#bigimg img").attr("src",srcs1+"_big.jpg");
		
		$("#bigimg").show(500);
	});

	$("#bigimg").click(function() {
		$(this).hide('slow');
	});

	$("#egg").click(function() {
		$(".egg").fadeIn('slow');
	});

	$(".egg").click(function() {
		$(".egg").fadeOut('slow');
	});
	

})
