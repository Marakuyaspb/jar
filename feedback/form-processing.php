<?php
$to = "spb-jara@yandex.ru"; // емайл получателя данных из формы 
$tema = "Заявка на ремонт"; // тема полученного емайла 
$message .= "Номер телефона: ".$_POST['phone']."<br>"; //полученное из формы name=phone

/*$message .= "Сообщение: ".$_POST['message']."<br>"; //полученное из формы name=message*/
$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
?>