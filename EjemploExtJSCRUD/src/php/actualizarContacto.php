<?php
    // LLama al archivo de conexion a la base de datos.
    include("conectar.php");
 
    $v_info = $_POST['contactos'];
 
    $v_data = json_decode(stripslashes($v_info));
 
    $v_nombre = $v_data->name;
    $v_email = $v_data->email;
    $v_telefono = $v_data->phone;
    $v_id = $v_data->id;
 
    // Consulta sql.
    $v_consulta = sprintf("UPDATE contact SET name = '%s', email = '%s', phone = '%s' WHERE id=%d",
        mysql_real_escape_string($v_nombre),
        mysql_real_escape_string($v_email),
        mysql_real_escape_string($v_telefono),
        mysql_real_escape_string($v_id));
 
    $rs = mysql_query($v_consulta);
 
    echo json_encode(array(
        "success" => mysql_errno() == 0,
        "contactos" => array(
            "id" => $v_id,
            "name" => $v_nombre,
            "email" => $v_email,
            "phone" => $v_telefono
        )
    ));
?>