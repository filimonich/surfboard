$('.form').submit(e => {
  e.preventDefault();

  $.fancybox.open({
    src: "#modal",
    type: "inline"
  })
})

$(".app-submit-modal").click(e => {
  e.preventDefault();

  $.fancybox.close();
})

// $(document).ready(function($) {
// 	$('.app-open-modal').click(function() {
// 		$('.modal').fadeIn();
// 		return false;
// 	});	
	
// 	$('.app-close-modal').click(function() {
// 		$(this).parents('.modal').fadeOut();
// 		return false;
// 	});
 
// 	$(document).keydown(function(e) {
// 		if (e.keyCode === 27) {
// 			e.stopPropagation();
// 			$('.modal').fadeOut();
// 		}
// 	});
	
// 	$('.modal').click(function(e) {
// 		if ($(e.target).closest('.modal__content').length == 0) {
// 			$(this).fadeOut();					
// 		}
// 	});
// });