$(document).ready(function() {
	// Optimalisation: Store the references outside the event handler:
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 700) {
            $('.info-block.text-leaf').height(function(){
            	return $(this).width() - 35;
            });

//            $('.play-button').css("top", function(index, value) {
//            	var height = $(this).next().position().top;
//            	return (height - $(this).height()) / 2;
//            });
        } else {
        	$('.info-block.text-leaf').css("height", "");
//        	$('.play-button').css("bottom", "");
//        	if (windowsize > 939) {
//        		$('.header .play-button').css("top", function(index, value) {
//        			var height = $('.header .orange-leaf').position().top;
//        			return (height - $(this).height()) / 2;
//        		});
//        	} else {
//        	}
        	
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
	
    if ($('body.blog').length) {
    	$('.blog .socialicons.outside').css('left', $('.container.with-header').offset().left - 50);
    }
    
    var windowsize = $window.width();
    if (windowsize < 700) {
    	$('.info-block.text-leaf').css('background-image', function(){
    		return 'url("' + $(this).children("img").attr('src') + '")';
    	});
    	$('.info-block.text-leaf img').hide();
    }


});

$(window).resize(function() {
	if ($('body.blog').length) {
		$('.blog .socialicons.outside').css('left', $('.container.with-header').offset().left - 50);
	}
});