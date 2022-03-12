<?php
    // LLama al archivo de conexion a la base de datos.
    include("conectar.php");
 
    $v_info = $_POST['contactos'];
 
    $v_data = json_decode(stripslashes($v_info));
 
    $v_id = $v_data->id;
 
    // Consulta sql.
    /*$v_consulta = sprintf("DELETE FROM contact WHERE id=%d",
        mysql_real_escape_string($v_id));*/

    $v_consulta = "DELETE FROM contact WHERE id='$v_id'";
    //print_r($v_consulta);die;
    //$v_co->query($v_consulta);
    $v_f = $v_coneccion->query($v_consulta);
 
    //$rs = mysql_query($v_consulta);
 
    echo json_encode(array(
        "success" => true
    ));
?>