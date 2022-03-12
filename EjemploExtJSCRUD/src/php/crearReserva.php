<?php
    // LLama al archivo de conexion a la base de datos.
    include("conectar.php");
 
    $v_info = $_POST['reserva'];
 
    $v_data = json_decode(stripslashes($v_info));
 
    $v_nombre = $v_data->nameapelldos;
    $noboleto = $v_data->noboleto;
    $nopasaporte = $v_data->nopasaporte;

    $v_consulta = "INSERT INTO `reserva`(`nombreapellidos`, `noboleto`, `nopasaporte`) 
				VALUES ('$v_nombre','$noboleto','$nopasaporte')";
    //print_r($v_consulta);die;
    //$v_co->query($v_consulta);
    $v_f = $v_coneccion->query($v_consulta);
    //print_r($v_f);die;
 
    $rs = mysql_query($v_consulta);
 
    echo json_encode(array(
        "success" => mysql_errno() == 0,
        "reserva" => array(
            "id" => mysql_insert_id(),
        )
    ));
?>