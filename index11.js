$(document).ready(function() {
	$ludyTrigger = $('.ludy-trigger');
	$ludyWrapper = $('.ludy-wrapper');

	$ludyTrigger.on('click', function() {
		$(this).slideUp(400, function() {
			$ludyWrapper.slideDown(400);
		});
	});
});
