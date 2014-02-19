$(document).ready(function() {
	// Optimalisation: Store the references outside the event handler:
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize <= 767) {
            $('.info-block').height(function(){
            	return $(this).width() - 35;
            });

            $('.play-button').css("top", function(index, value) {
            	var height = $(this).next().position().top;
            	console.log($(this).next());
            	console.log(height);
            	return (height - $(this).height()) / 2;
            });
        } else {
        	$('.info-block').css("height", "");
        	$('.play-button').css("top", "");
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
	
    if ($('body.blog').length) {
    	$('.blog .socialicons.outside').css('left', $('.container.with-header').offset().left - 50);
    }

});

$(window).resize(function() {
	if ($('body.blog').length) {
		$('.blog .socialicons.outside').css('left', $('.container.with-header').offset().left - 50);
	}
});