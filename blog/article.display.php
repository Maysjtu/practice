<?php
  require_once("connect.php");
  $id = $_GET["id"];
  $sql = "SELECT * FROM article where id=$id";
  $query = mysql_query($sql);
  $value = mysql_fetch_assoc($query);

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
  <link rel="shortcut icon" href="img/may.ico">
  
  <title>My Blog</title>
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/font-awesome.min.css">
  <style>
     .content{
       background:rgba(217,213,206,1) url("img/a3.png") no-repeat; 
       overflow:scroll; 
     }
     .article{
      text-indent: 2em;
      font-size: 18px;
      letter-spacing: 0.05em;
     }
  </style>
</head>
<body>
  <div class="nav">
    <div id="logo">
      <a href="index.html"></a>
    </div>
    
    <ul class="fl">
      <li><a href="index.html"><i class="fa fa-home"></i>&nbsp; 主页</a></li>
     
      <li><a href="article.manage.php" target="_blank"><i class="fa fa-book"></i>&nbsp;文章</a></li>
      <li><a href="demo.html" target="_blank"><i class="fa fa-paw"></i>&nbsp;Demo</a></li>
      <li><a href="picture.html"><i class="fa fa-file-image-o"></i>&nbsp;图片墙</a></li>
    </ul>
  
  </div>

<div class="content">
      <br/>
      <h1><?php echo $value['title']?></h1>
     
      <div class="article">
        <h2></h2>
        <p class="right">作者:&nbsp;<?php echo $value['author']?> &nbsp;&nbsp;操作:&nbsp;<a href="article.modify.php?id=<?php echo $value['id']?>">修改</a>
        <a href="article.del.handle.php?id=<?php echo $value['id']?>">删除</a>
        </p>
        <br />
        <p> <?php echo $value['content'] ?></p>
       
      </div>


    

   </div>
   <div class="footer">
      <copy>&copy;May 2015.11.22</copy>
   </div>

</body>
</html>