<?php

$ddd = substr($_POST['phone'], 1, 2);
$phone = substr($_POST['phone'], 5, 10);
$data = array(
	'name' => $_POST['name'],
	'email' => $_POST['email'],
	'ddd' => $ddd,
	'telefone' => $phone,
	'origem' => 'Site Soluções Educacionais',
	'subject' => $_POST['subject'],
	'description' => $_POST['description']
);
$data_string = json_encode($data);

$ch = curl_init('http://caduni.editorasaraiva.com.br/caduni/salesforce/fale-conosco');
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
	'idApplication: 67c598aaf48a522ea563a677d5fbce3d',
	'Content-Type: application/json',
	'Content-Length: ' . strlen($data_string))
);

$result = curl_exec($ch);
$bool = true;
if(strlen($result) > 0) $bool = false;
echo json_encode(array( 'success' => $bool ));
