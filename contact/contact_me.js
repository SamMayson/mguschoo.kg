$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // something to have when submit produces an error ?
            // Not decided if I need it yet
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "contact/contact_me.php",
                type: "POST",
                data: { name: name, email: email, phone: phone, message: message },
                cache: false,
                success: function() {
                    // Если всё удачно
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');
                    x
                    // очистка всех полей
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong> Извините кажется, что мой почтовый сервер не отвечает...</strong> Не могли бы вы написать мне напрямую по адресу <a href='mailto:mine.fact.tt@gmail.com?Subject=Сообщение с сайта mguschool.tk (Не работающая контактная форма)'>mine.fact.tt@gmailcom</a> ? Приносим извинения за доставленные неудобства!");
                    $('#success > .alert-danger').append('</div>');
                    // очистка всех полей
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*При нажатии на Полное скрытие полей неудачи/успеха */
$('#name').focus(function() {
    $('#success').html('');
});