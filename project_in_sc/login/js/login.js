window.onload = function(){
       var stuff=document.getElementById('stuff');
       var manager = document.getElementById('manager');
       stuff.onclick = function(){
       	 
       	  this.style.backgroundColor = "#7793c2";
       	  this.style.color = "#fff";
       	  manager.style.backgroundColor ="#fff";
       	  manager.style.color = "#000"; 
       }
       manager.onclick = function(){
       	  this.style.backgroundColor = "#7793c2";
       	  this.style.color = "#fff";
       	  stuff.style.backgroundColor ="#fff";
       	  stuff.style.color = "#000"; 
       }
       }