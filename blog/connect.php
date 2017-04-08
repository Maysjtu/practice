<?php
  require_once("config.php");

$con = mysql_connect(HOST,USERNAME,PASSWORD);
   mysql_select_db("info");
   mysql_query("set names utf8");

?>