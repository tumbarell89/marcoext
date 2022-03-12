<?php
    // Nombre del Servidor.
    $v_servidor = "127.0.0.1";
 
	// Usuario de la base de datos. 
	$v_user = "root";
 
	// Contrasenha de la base de datos.
	$v_password = "root";
 
	// Nombre de la base de datos.
	$v_db = "blog";
 
	// Ejecuta la coneccion con la base de datos, caso contario muestra un error.
	$v_coneccion = new mysqli($v_servidor, $v_user, $v_password, $v_db) or die (mysql_error());
	$v_coneccion->set_charset("utf8");
 
	// Seleccion la base de datos, caso contrario muestra un error.
    //$v_banco = $v_coneccion->query($v_db, $v_coneccion) or die(mysql_error());
?>