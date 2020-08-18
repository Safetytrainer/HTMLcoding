

$(document).ready(function() {
	$("form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
				th.trigger("reset");
    $('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
    $('html, body').removeClass('scroll-button-none');
        $('.overlay-container-sent').fadeIn(function() {
        });
    function after_sending() {
            $('.overlay-container-sent').fadeOut().end().find('.window-container').removeClass('window-container-visible');
            $('html, body').removeClass('scroll-button-none');
        }
        setTimeout(after_sending, 2000);
		});
		return false;
	});
});