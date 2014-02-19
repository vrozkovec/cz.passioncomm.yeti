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
    
    if (window.devicePixelRatio == 2) {

        var images = $("img.hires");

        // loop through the images and make them hi-res
        for(var i = 0; i < images.length; i++) {

          // create new image name
          var imageType = images[i].src.substr(-4);
          var imageName = images[i].src.substr(0, images[i].src.length - 4);
          imageName += "@2x" + imageType;

          //rename image
          images[i].src = imageName;
        }
    }
        
});

$(window).resize(function() {
	if ($('body.blog').length) {
		$('.blog .socialicons.outside').css('left', $('.container.with-header').offset().left - 50);
	}
});