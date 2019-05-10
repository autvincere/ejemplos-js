<?php
	// session_start();

   $prueba = $_POST['number'];
   $prueba2 = $_POST['action'];
   $prueba3 = $_POST['id'];

   if ($prueba === ''){
      echo 'error';
   }
   else{ 
     echo 'Su cantidad escogida es:'.$prueba.' el action es:'.$prueba2.' el Id de producto es:'.$prueba3;
   }  

?>