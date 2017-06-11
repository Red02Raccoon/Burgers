<?php
header('Content-Type: text/html; charset=utf-8');

   if (isset($_POST['name']) && isset($_POST['phone'])) {
        $message = "Был сделан заказ пользователем: $name";
        $result = mail('nastya02chervona@gmail.com', 'Заказ сделан', $message);
        
        $aRes = array('mes' => 'Done mail', 'status' => 'OK');
        echo json_encode($aRes);
   }
   else {
      echo 'Данные не получены';
   }
?>