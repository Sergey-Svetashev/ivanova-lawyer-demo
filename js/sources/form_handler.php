<?php
$fio = $_POST['fio'];
$email = $_POST['email'];
$text = $_POST['letter'];

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$text = htmlspecialchars($text);

$fio = urldecode($fio);
$email = urldecode($email);
$text = urldecode($text);

$fio = trim($fio);
$email = trim($email);
$text = trim($text);  /*удаляет пробелы с начала и с конца*/

if (mail("igamail@inbox.ru", "Заявка с сайта", "Имя: " . $fio . " E-mail: " . $email . " Сообщение: " . $text)) {
    echo "Сообщение успешно отправлено";
} else {
    echo "При отправке сообщения возникли ошибки";
}
?>