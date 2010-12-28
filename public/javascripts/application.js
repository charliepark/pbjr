jQuery.fn.onloadEvents = function() {
	$('#example').red();
	
};

jQuery.fn.red = function() {
	$(this).css('background','red');
}

$("#new_password_trigger").click(function(){
	$("#new_password_form").fadeIn();
});

$("#new_password_cancel").click(function(){
	$("#new_password_form").fadeOut();
});