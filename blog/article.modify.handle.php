<?php
   require_once("connect.php");
   $id = $_POST['id'];
   $title  = $_POST['title'];
   $author = $_POST['author'];
   $brief = $_POST['brief'];
   $content = $_POST['content'];
   $dateline = time();
   $updatesql = "update article set title='$title',author='$author',brief='$brief',content = '$content',dateline = '$dateline' where id='$id'";
   if(mysql_query($updatesql)){
   	echo "<script> alert('修改文章成功!');window.location.href='article.manage.php';</script>";

   }else{
   	echo "<script>alert('There is something wrong!');</script>";
    echo mysql_error();
   }

?>