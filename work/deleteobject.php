<?php
require("../system/database.php");

$id = htmlspecialchars($_GET['id']);

$query = "DELETE FROM `objects` WHERE (id = '" . mysql_real_escape_string($id) . "');";

$res = mysql_query($query);

