<?php

if ($_POST) {

    $name = trim(strip_tags($_POST['name']));
    $phone = trim(strip_tags($_POST['phone']));
    $email = trim(strip_tags($_POST['email']));
    $kind = trim(strip_tags($_POST['kind']));
    $text = trim(strip_tags($_POST['text']));

    $to = 'prizrak.vbif@gmail.com';
    $subject = 'Nirvana Party';
    $message = 'Письмо от: ' . $name . '<br/> Номер: ' . $phone . '<br/> Email: ' . $email . '<br/>Вид: ' . $kind . '<br />Сообщение: ' . $text;

    mail($to, $subject, $message, "Content-type:text/html;charset=utf-8");

    echo "Ваше сообщение успешно отправлено!";

    exit;

} else {

    echo "Произошла ошибка!";

}