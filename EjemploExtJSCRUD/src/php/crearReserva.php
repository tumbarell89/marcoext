<?php
    // LLama al archivo de conexion a la base de datos.
    include("conectar.php");
 
    $v_info = $_POST['reserva'];

    //print_r($v_info);die;
 
    $v_data = json_decode(stripslashes($v_info));
 
    $v_nombre = $v_data->nombreapellidos;
    $noboleto = $v_data->noboleto;
    $nopasaporte = $v_data->nopasaporte;

    $v_consulta = "INSERT INTO reserva (nombreapellidos, noboleto, nopasaporte) 
				VALUES ('$v_nombre','$noboleto','$nopasaporte')";
    $v_f = $v_coneccion->query($v_consulta);

    $v_max_id = "Select max(idreserva) as idreserva from reserva";

    $v_ultimo_id = $v_coneccion->query($v_max_id)->fetch_all();
    //print_r($v_f2);die;
 
    //$rs = mysql_query($v_consulta);
 
    echo json_encode(array(
        "success" => true
    ));
?>