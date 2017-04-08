<?php
  require_once("connect.php");
  $title = $_POST['title'];
  $author = $_POST['author'];
  $brief = $_POST['brief'];
  $content = "<pre>".$_POST['content']."</pre>";
  $dateline = time();
  $insertsql = "insert into article(title,author,brief,content,dateline) values('$title','$author','$brief','$content','$dateline')";
  if(mysql_query($insertsql)){
  	echo "<script>alert('发布文章成功!');window.location.href='article.manage.php';</script>";
  }else{
  	echo "<script>alert('an error!');</script>";
  	echo mysql_error();
  }
?>