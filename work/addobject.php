<?php
require("../system/database.php");

$class = htmlspecialchars($_GET['obj']);
$x = intval($_GET['x']);
$y = intval($_GET['y']);
$id = htmlspecialchars($_GET['id']);

$query = "INSERT INTO `objects` (`class`, `x`, `y`, `id`) VALUES ('" . mysql_real_escape_string($class) . "',
'".mysql_real_escape_string($x)."',
'".mysql_real_escape_string($y)."',
'".mysql_real_escape_string($id)."');";

mysql_query($query);

echo mysql_error();