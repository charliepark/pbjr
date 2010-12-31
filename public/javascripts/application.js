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

$(".close").click(function(){
	$(this).parents(".floating_box").fadeOut();
});

$(".popup_trigger").click(function(e){
	e.preventDefault();
	var box = $(this).attr('href');
	$("#"+box).fadeIn();
});

$("#tab_details")
	.hover(function(){
		$(this).animate({
			paddingTop: "10px"
		}, 100);
	}, function(){
		$(this).animate({
			paddingTop: "5px"
		}, 100);
	})
	.click(function(e){
		if($(this).hasClass("showing")){
			$("#review_wrapper").slideUp();
			$(this).addClass("hiding").removeClass("showing");
		} else {
			$("#review_wrapper").slideDown();
			$(this).addClass("showing").removeClass("hiding");
		}
	});

