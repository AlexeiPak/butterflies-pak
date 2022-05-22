$(document).ready(function () {

  // бургер
  $('.j-burger').on('click', function () {
    $('.j-menu').slideToggle();
  });


  // аккордионы

  let prevBtn;

  $('.j-accordion-btn').on('click', function () {

    if (prevBtn === this) {
      $(this).next().slideToggle();
      return;
    }

    $('.j-accordion-btn').next().slideUp();
    $(this).next().slideDown();
    prevBtn = this;

  });

  // табы

  $('.j-tabs-link').on('click', function (event) {
    event.preventDefault();

    let index = $(this).index('.j-tabs-link');

    $('.j-tabs-link').removeClass('active');
    $(this).addClass('active');

    $('.j-contacts-item').removeClass('active');
    $('.j-contacts-item').eq(index).addClass('active');

  });

  // filter

  $('.j-works-link').on('click', function (event) {
    event.preventDefault();

    let dataFilter = $(this).data('filter');

    $('.j-works-link').removeClass('active');
    $(this).addClass('active');

    if (dataFilter === 'all') {
      $('.j-works-item').show();
      return;
    }

    $('.j-works-item').each(function () {
      let dataType = $(this).data('type');

      if (dataType === dataFilter) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });

  });

  //carousel

  if ($('.j-carousel').length) {

    $('.j-carousel').slick({
      dots: true
    });

  }

  // ajax

  $('.j-btn-works').on('click', function() {

    $('.j-btn-works').addClass('btn-preload');

    $.ajax({
      type: 'POST',
      url: 'jsons/reviews.json',
      data: 'count=4',
      success: function(res) {
        $('.j-btn-works').removeClass('btn-preload');
        createHtmlString(res.reviews);
      },
      error: function() {
        console.log('О нееетт!!!');
      }
    });
  });

  function createHtmlString(dataArray) {
    let htmlString = '';

    dataArray.forEach(function(dataItem) {
      htmlString = htmlString + `<div class="works-item j-works-item" data-type="strict">
      <figure class="works-portfolio">
        <img src="${dataItem.imgUrl}" alt="" class="portfolio-img">
        <figcaption class="portfolio-img-desc">${dataItem.name}</figcaption>
      </figure>
    </div>`;
    });

    printToPage(htmlString);
  }

  function printToPage(string) {
    $('.j-works-list').append(string);
  }

});


