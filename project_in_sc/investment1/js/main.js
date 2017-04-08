function icheck(x){
  if(x.value==""){
    x.style.borderColor = "#FF0000";
    return false;
  }else{
    x.style.borderColor = "#e4e4e4";
  }
  return true;
}
function check_data(){
  if(!icheck(document.getElementById("company"))){
    return false;
  } 
  if(!icheck(document.getElementById("name"))){
    return false;
  } 
  if(!icheck(document.getElementById("business"))){
    return false;
  } 
  if(!icheck(document.getElementById("tel"))){
    return false;
  }
  if(!icheck(document.getElementById("intro"))){
    return false;
  }  
  document.frm.submit();
}
window.onload = function(){
  var btn = document.getElementById("btn_top");
  var scrollTop = $(document).scrollTop();
  var timer = null,ispeed;
  var clientHeight = $(window).height();
  var isTop = true;

   window.onscroll = function(){
     scrollTop = $(document).scrollTop();
     if(scrollTop>clientHeight){btn.style.display = "block";}
          else { btn.style.display = "none";}
     if(!isTop){
        clearInterval(timer);
     }
     isTop = false;

   }
  btn.onmouseover = function(){
    btn.className = "btn_hover";
    btn.innerHTML = "TOP";
  }
  btn.onmouseout = function(){
    btn.className = " ";
    btn.innerHTML = "<span class='glyphicon glyphicon-chevron-up'></span>";
  }
  btn.onclick = function(){
      timer = setInterval(function(){
        scrollTop=$(document).scrollTop();
        ispeed = Math.floor(-scrollTop/5);
        scrollTop += ispeed;
        if(scrollTop>clientHeight){btn.style.display = "block";}
          else {
            btn.style.display = "none";
          }
        console.log(scrollTop);
        if(scrollTop<=0){
          clearInterval(timer);
        }
        $(document).scrollTop(scrollTop);
        isTop = true;
      },50);
  }
  var r = window.location.search.substr(1).match(new RegExp("(^|&)succ=([^&]*)(&|$)", "i"));
  if(r != null && r[2] == 1) alert("非常感谢，您的合作申请已经提交，我们的业务人员会尽快与您联系！");
}

