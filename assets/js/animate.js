$(document).ready(function() {
    var $block = $('.bash li:last-child span');
    $block.css('color', '#FFF'); 
    setInterval(function() {
       $block.toggleClass('nodisplay'); 
    }, 500);
});
