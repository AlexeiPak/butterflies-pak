$(document).ready(function() {

  $('.j-burger').on( 'click' , function() {
    $('.j-menu').slideToggle();
  });

  let prevBtn;

  $('.j-accordion-btn').on('click', function(){

    if (prevBtn === this) {
      $(this).next().slideToggle();
      return;
    }

    $('.j-accordion-btn').next().slideUp();
    $(this).next().slideDown();
    prevBtn = this;

  });



});
