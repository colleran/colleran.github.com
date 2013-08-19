$(document).ready(
function() {
    $('.fullPage').css({
            height: $(window).height()
        });
}
);

jQuery(document).ready(function($) {
 
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
});

function printTest() {
	console.log("test test")
};

