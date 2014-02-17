$(document).ready(function() {
});
$(window).resize(function() {
	if ($('body.blog').length) {
		$('.blog .socialicons.outside').css('left', $('.container.with-header').position().left - 50);
	}
});