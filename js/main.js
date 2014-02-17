$(document).ready(function() {
	$('.blog .socialicons.outside').css('left', $('.container.with-header').offset().left - 50);
});
$(window).resize(function() {
	if ($('body.blog').length) {
		$('.blog .socialicons.outside').css('left', $('.container.with-header').offset().left - 50);
	}
});