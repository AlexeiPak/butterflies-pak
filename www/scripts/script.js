$(document).ready(function() {

  // бургер
  $('.j-burger').on( 'click' , function() {
    $('.j-menu').slideToggle();
  });


  // аккордионы

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

  // табы

  $('.j-tabs-link').on('click', function(event) {
    event.preventDefault();

    let index = $(this).index('.j-tabs-link');

    $('.j-tabs-link').removeClass('active');
    $(this).addClass('active');

    $('.j-contacts-item').removeClass('active');
    $('.j-contacts-item').eq(index).addClass('active');

  })


});
