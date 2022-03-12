<?php
    // LLama al archivo de conexion a la base de datos.
    include("conectar.php");
 
    $v_start = $_REQUEST['start'];
    $v_limit = $_REQUEST['limit'];
 
    $v_consultaString = "select id, name, email, phone from contact limit $v_start, $v_limit ";
    //print_r($v_consultaString);die;
 
    // Consulta sql.
    $v_consulta = $v_coneccion->query($v_consultaString)->fetch_all();
    //print_r($v_consulta);die;
 
    // Se crea un array
    $v_array_contactos = array();
    /*while($contacto = mysql_fetch_assoc($v_consulta)) {
        $v_array_contactos[] = $contacto;
    }*/

    foreach ($v_consulta as $key => $value) {
        //print_r($value);die;
        $v_array_contactos[$key]['id'] = $value[0];
        $v_array_contactos[$key]['name'] = $value[1];
        $v_array_contactos[$key]['email'] = $value[2];
        $v_array_contactos[$key]['phone'] = $value[3];
        // code...
    }
    //print_r($v_array_contactos);die;
 
    // Consulta de contactos de la tabla.
    //$v_cantidadTotal = $v_coneccion->query('SELECT count(*) as num FROM contact') or die(mysql_error());

    $v_cantidadTotal = "SELECT count(*) as num FROM contact";
    $v_count = $v_coneccion->query($v_cantidadTotal)->fetch_all();
    //print_r($v_count);die;

    /*$v_row = count($v_count);
    print_r($v_row );die;*/
    $v_total = $v_count[0][0];
 
    //encoda para formato JSON
    echo json_encode(array(
        "success" => true,
        "total" => $v_total,
        "contactos" => $v_array_contactos
    ));
?>