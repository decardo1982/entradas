$(document).ready(function() {
  var classClicked = 'clicked';
  $('.card-flip').click(function() {
    if($(this).hasClass(classClicked)) {
      $(this).removeClass(classClicked);
    }
    else {
      $(this).addClass(classClicked);
    }
  }).mouseleave(function() {
    $(this).removeClass(classClicked);
  });
})
