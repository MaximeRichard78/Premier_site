<?php
require("header.php");
$commentaryController->remove($_GET["id"]);
echo "<script>window.location.href='index.php'</script>";
