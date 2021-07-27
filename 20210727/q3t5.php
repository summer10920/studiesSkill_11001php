<?php
// print_r($_POST['odr']);
foreach ($_POST['odr'] as $key => $value) {
  echo 'key=' . $key . ' and val=' . $value . '<br>';
}
