<?php
  require_once("connect.php");
  $sql = "select * from article order by dateline desc";
  $query = mysql_query($sql);
  $cnt = 0;
  if($query&&mysql_num_rows($query)){
  	while($row = mysql_fetch_assoc($query)){
  		$data[] = $row;
  	}
  }else{
  	$data = array();
  }
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
    a#release{
      display: block;
      width:100px;
      margin-top: -30px;
      margin-left:550px;
      float: left;
      padding:5px 9px;
     /* background-color:rgba(248,201,207,1);*/
      background-color:rgba(241,132,151,1);
      border-radius: 3px;
      color:#666;
    }
    a#release:hover{
      color:#FFF;
    }
    
    .right{
      width: 100%;
      font-size: small;
      text-align: right;
    }
  /*  .right::before,.right::after{
      content: "";
      display: block;
    }
    .right:after{clear:both;}*/
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
<li><a href="picture.html"><i class="fa fa-file-image-o"></i>&nbsp;图片墙</a></li>    </ul>
  
  </div>

<div class="content">
      <br/>
      <h1>文章列表</h1>    <a href="article.add.php" id="release"><i class="fa fa-file-text"></i>&nbsp;发布新文章</a>

      <?php
          if(!empty($data)){
          foreach ($data as $value) {
          $cnt++;
      ?>
      <div class="article">
        <h2><a href="article.display.php?id=<?php echo $value['id']?>"><?php echo $value['title']?></a></h2>
        <p class="right">&nbsp;<?php echo date("Y/m/d H:i:s",$value['dateline']) ?> &nbsp;&nbsp;操作:&nbsp;<a href="article.modify.php?id=<?php echo $value['id']?>">修改</a>
        <a href="article.del.handle.php?id=<?php echo $value['id']?>">删除</a>
        </p>
        <p>摘要：<?php echo $value['brief']?></p>
       
      </div>

      <?php   }
        }
       ?>


   </div>
   <div class="footer">
      <copy>&copy;May 2015.11.22</copy>
   </div>

</body>
</html>