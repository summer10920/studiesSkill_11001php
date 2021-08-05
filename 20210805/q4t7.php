<?php

$account = array(
  array("id" => 1, "acc" => "admin", "pwd" => "1234"),
  array("id" => 2, "acc" => "loki", "pwd" => "4321")
);


switch ($_GET['do']) {
  case 'checkuser':
    $flag = false;
    foreach ($account as $row) if ($row['acc'] == $_POST['acc']) {
      $flag = true;
      break;
    }
    echo $flag ? "帳號重複" : "可使用此帳號";



    // if ($flag) echo "帳號重複";
    // else echo "可使用此帳號";
    break;
}
