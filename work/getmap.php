<?php
require("../system/database.php");

$start = intval($_GET['start']);
$end = intval($_GET['end']);

$query = "SELECT * FROM `objects` WHERE (y >= " . mysql_real_escape_string($start) . ") AND (y <= " . mysql_real_escape_string($end) . ");";

$res = mysql_query($query);

while ($row = mysql_fetch_row($res)) {
	echo join($row, "<") . "\n";
}
