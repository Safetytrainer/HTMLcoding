// $(document).ready(function() {
//  $('form').each(function () {
//     $(this).validate({
//         errorPlacement(error, element) {
//             return true;
//         },
//         focusInvalid: false,
//         rules: {
//             Телефон: {
//                 required: true,
//             },
//             Имя: {
//                 required: true,
//                 maxlength: 5,
//             }
//         },
//         messages: {
//             Телефон: {
//                 required: 'Нужно что-то ввести'
//             },
//             Имя: {
//                 required: 'Нужно что-то ввести',
//                 maxlength: 'Нужно ввести максимум 5 букв'
//             }
//         },
//         submitHandler(form) {
//         let th = $(form);

//         $.ajax({
//         type: 'POST',
//         url: 'mail.php',
//         data: th.serialize(),
//         // eslint-disable-next-line func-names
//     }).done(() => {

//         th.trigger('reset');
//     });

//     return false;
//     }
// });
// });
// });

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			// alert("Thank you!");

			setTimeout(function() {

				// Done Functions
				th.trigger("reset");
			}, 1000);


	// <форма Уведомление об отправки>
	

    $('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
    $('html, body').removeClass('scroll-button-none');



    
        $('.overlay-container-sent').fadeIn(function() {
            window.setTimeout(function(){
                // $('.window-container.'+type).addClass('window-container-visible');
                // $('.background-modal').addClass('background-modal-js'); 
                // $('html, body').addClass('scroll-button-none');
            }, 100); 
        });
    function after_sending() {
            $('.overlay-container-sent').fadeOut().end().find('.window-container').removeClass('window-container-visible');
            $('html, body').removeClass('scroll-button-none');
        }
        setTimeout(after_sending, 2000);

    // <форма Уведомление об отправки>

		});
		return false;
	});

});