<?php
    // LLama al archivo de conexion a la base de datos.
    include("conectar.php");
 
    $v_info = $_POST['reserva'];

    //print_r($v_info);die;
 
    $v_data = json_decode(stripslashes($v_info));
    
    $v_nombre = utf8_decode($v_data->nombreapellidos);
    $noboleto = utf8_decode($v_data->noboleto);
    $nopasaporte = utf8_decode($v_data->nopasaporte);
    print_r($_FILES);die;
    $check = getimagesize($_FILES["imagen1"]["tmp_name"]);
   
    $image = $_FILES['imagen1']['tmp_name'];
    $imgContent = addslashes(file_get_contents($image));

    /*$v_consulta = "INSERT INTO reserva (nombreapellidos, noboleto, nopasaporte,imagen1) 
				VALUES ('$v_nombre','$noboleto','$nopasaporte', $imgContent)";*/
    print_r($image);die;
    $v_consulta = "INSERT INTO reserva (nombreapellidos, noboleto, nopasaporte, imagen1) 
                VALUES ('$v_nombre','$noboleto','$nopasaporte')";
    $v_f = $v_coneccion->query($v_consulta);

    $v_max_id = "Select max(idreserva) as idreserva from reserva";

    /*$v_ultimo_id = $v_coneccion->query($v_max_id)->fetch_all();
	
	foreach($v_data as $value){
				$idreserva = $v_max_id;
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

				$v_consulta = "INSERT INTO viaje(idreserva, vuelo, checkin, desde, hasta, salida, llegada, terminal, cabina, estado, paradas) 
						VALUES ('$idreserva', '$vuelo', '$checkin', '$desde', '$hasta', '$salida', '$llegada', '$terminal', '$cabina', '$estado', '$paradas')";
				
				$v_f = $v_coneccion->query($v_consulta);
	}*/
 
    echo json_encode(array(
        "success" => true
    ));
?>