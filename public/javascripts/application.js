jQuery.fn.onloadEvents = function() {
	$('#example').red();
	
};

jQuery.fn.red = function() {
	$(this).css('background','red');
}