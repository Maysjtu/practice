$(document).ready(function(){
	$("#cal-water0").click(function(){
		var q1 = parseFloat($("#water0 .q1").val());
		var c1 = parseFloat($("#water0 .c1").val());
		var q2 = parseFloat($("#water0 .q2").val());
		var c2 = parseFloat($("#water0 .c2").val());
		var k = parseFloat($("#water0 .k").val());
		if(!q1||!q2||!c1||!c2){
			alert("请输入有效数据！");
			return;
		}
		var c = (q1*c1+q2*c2)/(q1+q2);
		if(k){
			c = ((1-k)*(q1*c1)+q2*c2)/(q1+q2);
		}
		$("#water0 .c").html(c.toFixed(4));
	});
	$("#cal-water1").click(function(){
		var c0 = parseFloat($("#water1 .c0").val());
		var v = parseFloat($("#water1 .v").val());
		var K1 = parseFloat($("#water1 .k1").val());
		var x = parseFloat($("#water1 .x").val());
		var D = parseFloat($("#water1 .d").val());
		console.log(c0);
		console.log(v);
		console.log(K1);
		console.log(x);
		console.log(D);
		if(!c0||!v||!K1||!x){
			alert("请输入有效数据！");
			return;
		}
		var c = c0*Math.pow(Math.E,-K1/86400*x/v);
		if(D){
			 c = c0*Math.pow(Math.E,v*(1-Math.sqrt(1+4*K1/86400*D/v/v))*x/2/D);
		}
		$("#water1 .c").html(c.toFixed(4));
	});
	$("#cal-model").click(function(){

		var q2 = parseFloat($("#model .q2").val());
		var c2 = parseFloat($("#model .c2").val());
		var q1 = parseFloat($("#model .q1").val());
		var c1 = parseFloat($("#model .c1").val());
		var q = parseFloat($("#model .q").val());
		var v = parseFloat($("#model .v").val());

		if(!c1||!c1||!q1||!q2||!q||!v){
			alert("请输入有效数据！");
			return;
		}
		var c3 = (q1*c1+q2*c2)/(q1+q2);
		var t = v*(1000000000)/q/86400;
		var r = (q1+q2)/q;
		var cday = r*c3 -(r*c3 - c1)*Math.pow(Math.E,-1/t);
		var cmonth = r*c3 -(r*c3 - c1)*Math.pow(Math.E,-30/t);
		var cc = r*c3;
		$("#for-model .c3").html(c3.toFixed(4));
		$("#for-model .t").html(t.toFixed(4));
		$("#for-model .r").html(r.toFixed(4));
		$("#for-model .c-day").html(cday.toFixed(4));
		$("#for-model .c-month").html(cmonth.toFixed(4));
		$("#for-model .c").html(cc.toFixed(4));
	});
});