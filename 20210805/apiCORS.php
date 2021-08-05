<?php
header("Access-Control-Allow-Origin: *");
$db = new PDO("mysql:host=127.0.0.1;dbname=jq_sample;charset=utf8", "root", "");
date_default_timezone_set('asia/Taipei');
// print_r($_POST);
// print_r($_GET);

switch ($_GET['do']) {
  case 'select':
    $sql = "SELECT * FROM ajax_animal LIMIT " . $_POST['start'] . ",10";
    $rows = $db->query($sql)->fetchAll();

    // print_r($rows);
    if ($rows) {
      $count = count($rows); //10 or 3
      foreach ($rows as $row) {
        echo '
          <tr' . ($count > 1 || count($rows) == 10 ? '' : ' class="last"') . '>
            <td>' . $row['id'] . '</td>
            <td>' . $row['name'] . '</td>
            <td>' . $row['weight'] . '</td>
            <td>' . $row['info'] . '</td>
            <td>' . $row['date'] . '</td>
            <td><button class="mdy">修改</button> | <button onclick="del(this)">刪除</button></td>
          </tr>
        ';
        $count--;
      }
    } else echo 'fail';
    break;
  case 'update':
    $sql = "UPDATE ajax_animal SET name = '" . $_POST['name'] . "', weight = " . $_POST['weight'] . ", info = '" . $_POST['info'] . "', date = NOW() WHERE id = " . $_POST['id'] . ";";
    $result = $db->query($sql);

    if ($result) echo date('Y-m-d H:i:s');

    break;
  case 'delete':
    $sql = "DELETE FROM ajax_animal WHERE id = " . $_POST['id'];
    $result = $db->query($sql);
    if ($result) echo "deleted";

    break;
  case 'insert':
    $sql = "INSERT INTO ajax_animal VALUES (NULL, '" . $_POST['name'] . "', '" . $_POST['weight'] . "', '" . $_POST['info'] . "', NOW());";
    $result = $db->query($sql);

    if ($result) {
      // echo '{"id":"'.$db->lastInsertId().'","date":"'.date('Y-m-d H:i:s').'"}';
      $ary = ['id' => $db->lastInsertId(), 'date' => date('Y-m-d H:i:s')];
      echo json_encode($ary);
    }

    break;
}
