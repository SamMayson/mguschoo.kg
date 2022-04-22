<?php
// проверка, пустые ли поля


if(empty($_POST['name'])  		      ||
   empty($_POST['email']) 	   	   ||
   empty($_POST['message'])	      ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "Введите текст!";
	return false;
   }

 
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

//$yyy = $_POST['zzz'];

	
// Отправка сообщения на почту...
$to = 'mine.fact.tt@gmail.com'; // ----->>> ваш email adress
$email_subject = "Контактная форма отправлена:  $name";
$email_body = "Вы получили новое сообщение с сайта 'mguschool.tk' \n\n".
				  "Детали: \n Имя: $name \n ".
              "Почта: $email_address \n".
				  "Номер: $phone \n ".
              "Сообщение: \n $message";
$headers = "From: admin@mguschool.tk\n";
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);


//mail("mine.fact.tt@gmail.com", "test 1", "hello $yyy test");

//echo "<h1>Success! -$yyy-</h1>";

return true;			
?>