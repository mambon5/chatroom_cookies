<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
          $hi = $_GET['y'];
        }
$myfile = fopen("../../JSON/phpData.txt", "w") or die("Unable to open file!");
fwrite($myfile, $hi);
echo "writting done!";
fclose($myfile);

echo "<script> "
. "function goback() {window.location = '../../JSON/json2php_sendvars_1.html'}"
        . ""
        . "</script>";
echo "<button onclick='goback()'> Go back </button>";
$newURL = '../../JSON/json2php_sendvars_1.html';
header('Location: '.$newURL);
?>