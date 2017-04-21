// Scroll cursor to top position
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

$(document).ready(function () {
    $('.mvs-sticky-newsletter').css({visibility: "visible"});
});

// This function was taken as is from SO at
// http://stackoverflow.com/questions/7620677/jquery-shuffle-table-rows
(function($){
    //Shuffle all rows, while keeping the first column
    //Requires: Shuffle
 $.fn.shuffleRows = function(){
     return this.each(function(){
        var main = $(/table/i.test(this.tagName) ? this.tBodies[0] : this);
        var firstElem = [], counter=0;
        main.children().each(function(){
             firstElem.push(this.firstChild);
        });
        main.shuffle();
        main.children().each(function(){
           this.insertBefore(firstElem[counter++], this.firstChild);
        });
     });
   }
  /* Shuffle is required */
  $.fn.shuffle = function() {
    return this.each(function(){
      var items = $(this).children();
      return (items.length)
        ? $(this).html($.shuffle(items))
        : this;
    });
  }

  $.shuffle = function(arr) {
    for(
      var j, x, i = arr.length; i;
      j = parseInt(Math.random() * i),
      x = arr[--i], arr[i] = arr[j], arr[j] = x
    );
    return arr;
  }
})(jQuery)
