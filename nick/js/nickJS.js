$(document).ready(
function() {
    $('.fullPage').css({
            width: $(window).width(),
            height: $(window).height()
        });
}
);

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

function printTest() {
	console.log("test test")
};