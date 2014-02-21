$(document).ready(function() {

    function checkWidth() {
    	
    	console.log($('.jquery-media-width-fix-class').css("float"));
    	
    	//only for phone
        if ($('.jquery-media-width-fix-class').css("float") == "none") {
            $('.info-block.text-leaf').height(function(){
            	return $(this).width() - 35;
            });

//            $('.play-button').css("top", function(index, value) {
//            	var height = $(this).next().position().top;
//            	return (height - $(this).height()) / 2;
//            });
            $('.play-button').css("top", function(index, value) {
            	var height = $(this).next().position().top;
            	return (height - $(this).height()) / 2;
            });
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
        
        if ($('.blog').length) {
        	$('.blog .socialicons.outside').css('left', $('.container.with-header').offset().left - 20);
		}
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
	
    
    $('.info-block.text-leaf .orange-leaf').hover(
		function (){
	    	$(this).children('.content').addClass('active');
	    },
	    function (){
	    	$(this).children('.content').removeClass('active');
	    }
    );
        
});
