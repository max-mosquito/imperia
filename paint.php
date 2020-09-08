<?php

$recepient = "w-2aa@mail.ru";
$sitename = "Империя Севастополь";

//$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
//$text = trim($_POST["text"]);
$message = "На сайте ремонтно-строительной компании Империя Севастополь в форме -=Заявка на малярные работы=- посетитель оставил свой телефон $phone для обратной связи. ";

$pagetitle = "Новая заявка с сайта \"$sitename\" Малярные работы";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");