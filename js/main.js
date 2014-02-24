$(document).ready(function() {

	var lastUsedSize = null;
	
	
    function checkWidth() {
    
    	//only for phone
        if ($('.screen-size-mobile').css("float") == "none") {
            $('.info-block.text-leaf').height(function(){
            	return $(this).width() - 35;
            });

            $('.play-button').css("top", function(index, value) {
            	var height = $(this).next().position().top;
            	return (height - $(this).height()) / 2;
            });
        } else {
        	$('.info-block.text-leaf').css("height", "");
        	$('.play-button').css("top", "");
        }
        
        console.log(window.devicePixelRatio);
        
        if (lastUsedSize != getScreenSize()) {
			var size = getScreenSize();
			lastUsedSize = size;
			
			if(window.devicePixelRatio >= 1.2){
				$(".hires").each(function(){
					
					var src2x = $(this).attr("data-src2x");
					
					
					if (typeof src2x !== 'undefined' && src2x !== false) {
						console.log(src2x);
						$(this).attr("src", src2x);
						return;
					}
					
					//mobil
					if (lastUsedSize == 0) {
						$(this).attr("src", $(this).attr("data-mobile-src2x"));
					}
					//tablet
					if (lastUsedSize == 1) {
						$(this).attr("src", $(this).attr("data-tablet-src2x"));
					}
					//desktop
					if (lastUsedSize == 2) {
						$(this).attr("src", $(this).attr("data-desktop-src2x"));
					}
				});
			} else {
				$(".hires").each(function(){

					var src = $(this).attr("data-src");
					
					if (typeof src !== 'undefined' && src !== false) {
						$(this).attr("src", src);
						return;
					}
					
					//mobil
					if (lastUsedSize == 0) {
						$(this).attr("src", $(this).attr("data-mobile-src"));
					}
					//tablet
					if (lastUsedSize == 1) {
						$(this).attr("src", $(this).attr("data-tablet-src"));
					}
					//desktop
					if (lastUsedSize == 2) {
						$(this).attr("src", $(this).attr("data-desktop-src"));
					}
				});
			}
			
		}
        
    }
    
    // Execute on load
    checkWidth();
    
    // Bind event listener
    $(window).resize(checkWidth);
    
    console.log($(window).innerWidth());

    
});

function getScreenSize(){
	if ($('.screen-size-mobile').css("float") == "none") {
		return 0;
	}
	if ($('.screen-size-tablet').css("float") == "none") {
		return 1;
	}
	if ($('.screen-size-desktop').css("float") == "none") {
		return 2;
	}
	return 2;
}
