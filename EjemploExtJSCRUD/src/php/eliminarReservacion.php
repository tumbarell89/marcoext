<?php
    // LLama al archivo de conexion a la base de datos.
    include("conectar.php");
 
    $v_info = $_POST['reserva'];
 
    $v_data = json_decode(stripslashes($v_info));
 
    $v_id = $v_data->idreserva;
 
    // Consulta sql.
    /*$v_consulta = sprintf("DELETE FROM contact WHERE id=%d",
        mysql_real_escape_string($v_id));*/

    //elimina los viajes de la reserva
    $v_consulta = "DELETE FROM viaje WHERE idreserva=$v_id";
    $v_f = $v_coneccion->query($v_consulta);
	
	//elimina la reserva	
	$v_consulta = "DELETE FROM reserva WHERE idreserva=$v_id";
    $v_f = $v_coneccion->query($v_consulta);
 
    //$rs = mysql_query($v_consulta);
 
    echo json_encode(array(
        "success" => true
    ));
?>