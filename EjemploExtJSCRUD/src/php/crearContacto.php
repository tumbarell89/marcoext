<?php
    // LLama al archivo de conexion a la base de datos.
    include("conectar.php");
 
    $v_info = $_POST['contactos'];
 
    $v_data = json_decode(stripslashes($v_info));
 
    $v_nombre = $v_data->name;
    $v_email = $v_data->email;
    $v_telefono = $v_data->phone;
 
    // consulta sql.
    /*$v_consulta = sprintf("INSERT INTO contact (name, email, phone) values ('%s', '%s', '%s')",
        mysql_real_escape_string($v_nombre),
        mysql_real_escape_string($v_email),
        mysql_real_escape_string($v_telefono));*/

    $v_consulta = "INSERT INTO contact (name, email, phone) values ('$v_nombre', '$v_email', '$v_telefono')";
    //print_r($v_consulta);die;
    //$v_co->query($v_consulta);
    $v_f = $v_coneccion->query($v_consulta);
    //print_r($v_f);die;
 
    $rs = mysql_query($v_consulta);
 
    echo json_encode(array(
        "success" => mysql_errno() == 0,
        "contactos" => array(
            "id" => mysql_insert_id(),
            "nome" => $v_nombre,
            "email" => $v_email,
            "phone" => $v_telefono
        )
    ));
?>