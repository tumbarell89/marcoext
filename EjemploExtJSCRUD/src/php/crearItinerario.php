<?php
    // LLama al archivo de conexion a la base de datos.
    include("conectar.php");
 
    $v_info = $_POST['reserva'];
 
    $v_data = json_decode(stripslashes($v_info));
	foreach($v_data as $value){
		    $idreserva = $v_data->idreserva;
			$vuelo = $v_data->vuelo;
			$checkin = $v_data->checkin;
			$desde = $v_data->desde;
			$hasta = $v_data->hasta;
			$salida = $v_data->salida;
			$llegada = $v_data->llegada;
			$terminal = $v_data->terminal;
			$cabina = $v_data->cabina;
			$estado = $v_data->estado;
			$paradas = $v_data->paradas;

			$v_consulta = "INSERT INTO `viaje`(`idreserva`, `vuelo`, `checkin`, `desde`, `hasta`, `salida`, `llegada`, `terminal`, `cabina`, `estado`, `paradas`) 
			VALUES ('$idreserva', '$vuelo', '$checkin', '$desde', '$hasta', '$salida', '$llegada', '$terminal', '$cabina', '$estado', '$paradas')";
			//print_r($v_consulta);die;
			//$v_co->query($v_consulta);
			$v_f = $v_coneccion->query($v_consulta);
			//print_r($v_f);die;
		 
			$rs = mysql_query($v_consulta);
	}

 
    echo json_encode(array(
        "success" => true,
        "viaje" => array(
            "id" => mysql_insert_id(),
        )
    ));
?>