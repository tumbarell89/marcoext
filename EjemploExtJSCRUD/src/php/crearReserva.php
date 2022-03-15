<?php
    // LLama al archivo de conexion a la base de datos.
    include("conectar.php");
 
    $v_data = $_POST;
    
    $v_nombre = $v_data['nombreapellidos'];
    $noboleto = $v_data['noboleto'];
    $nopasaporte = $v_data['nopasaporte'];
   
    $image1 = $_FILES['imagen1']['tmp_name'];
    $image2 = $_FILES['imagen2']['tmp_name'];
     
     $content1 = addslashes(file_get_contents($image1));


     $content2= addslashes(file_get_contents($image2));
     
    $v_consulta = "INSERT INTO reserva (nombreapellidos, noboleto, nopasaporte, imagen1, imagen2) 
                VALUES ('$v_nombre','$noboleto','$nopasaporte', '$content1', '$content2')";
    
    $v_f = $v_coneccion->query($v_consulta);

    $v_max_id = "Select max(idreserva) as idreserva from reserva";
    $v_f2 = $v_coneccion->query($v_max_id)->fetch_all();
	/*foreach($v_data as $value){
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
        "success" => true,
        "ultimo_id"=> $v_f2
    ));
    
        //Get image data from database
//    $result = $db->query("SELECT image FROM images WHERE id = {$_GET['id']}");
//    
//    if($result->num_rows > 0){
//        $imgData = $result->fetch_assoc();
//        
//        //Render image
//        header("Content-type: image/jpg"); 
//        echo $imgData['image']; 
//    }else{
//        echo 'Image not found...';
//    }

?>