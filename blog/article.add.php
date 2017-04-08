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
      background:rgba(202,195,189,1) url("img/a2.jpg") no-repeat; 
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
<li><a href="picture.html"><i class="fa fa-file-image-o"></i>&nbsp;图片墙</a></li>    </ul>
  
  </div>
<div class="content">
    <h1>添加新文章</h1>
    <div class="article">
        <form method="post" action="article.handle.php" >
            <table cellpadding="8" cellspacing="10">
             
                <tr>
                    <td><label for="title" >文章名: </label></td>
                    <td><input name="title" type="text" id="title" autofocus placeholder="请输入文章名"/></td>
                </tr>
                <tr>
                    <td><label for="author">作者: </label></td>
                    <td><input name="author" type="text" id="author" placeholder="请输入作者"/></td>
                </tr>
                <tr>
                    <td><label for="brief">简介: </label></td>
                    <td><textarea name="brief" id="brief" cols="55" rows="5"></textarea></td>
                </tr>
                <tr>
                    <td><label for="content">内容: </label></td>
                    <td><textarea name="content" id="content" cols="55" rows="10"></textarea></td>
                </tr>

            </table>

            <input type="submit" value="发布文章" />
        </form>
   
   </div>
   </div>
  <div class="footer">
      <copy>&copy;May 2015.11.22</copy>
   </div>

</body>
</html>