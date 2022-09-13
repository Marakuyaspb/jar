<?php
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$phone = trim($_POST['phone']);
$message = trim($_POST['message']);

// указываем адрес отправителя, можно указать адрес на домене Вашего сайта
$fromMail = 'admin@yousite.ru';
$fromName = 'yousite.ru Форма';

// Сюда введите Ваш email
$emailTo = 'youemail@gmail.com';
$subject = 'Форма обратной связи на php';
$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

// тело письма
$body = "Получено письмо с сайта testsite.ru \n Имя: $name\nТелефон: $phone \n E-mail: $email\nСообщение: $message";

// сообщение будет отправлено в случае, если поле с номером телефона не пустое
if (strlen($phone) > 0) {
    $mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>Форма обратной связи на PHP с отправкой на почту</title>
</head>
<body>
<h2>Форма обратной связи на PHP</h2>
<!--Данные введенные пользователем обрабатываются кодом в mail.php-->
<form action="index.php" method="post">
    <!--Тег используется для группировки связанных элементов в форме-->
    <fieldset>
        <!--Тег задает заголовок для групповых элементов-->
        <legend>Оставьте сообщение:</legend>
        Ваше имя:
        <!--Устанавливает однострочное текстовое поле ввода:-->
        <input type="text" name="name">
        <!--Используется для полей ввода, которые должны содержать адрес электронной почты.-->
        E-mail:
        <input type="text" name="email">
        Номер телефона:
        <input type="text" name="phone">
        Сообщение:
        <!--Тег разрешает многострочный ввод текста.-->
        Текстовая область может содержать неограниченное количество символов-->
        <textarea rows="10" cols="45" name="message"></textarea>
        <!--Устанавливает кнопку для отправки данных формы в обработчик формы.-->
        <input type="submit" value="Отправить сообщение">
    </fieldset>
</form>
</body>
</html>