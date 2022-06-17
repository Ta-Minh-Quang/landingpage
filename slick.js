$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    prevArrow:`
    <button type='button' class="slick-prev">
        <i class="fa-solid fa-angle-left"></i>
    </button>
    `,
    nextArrow:`
    <button type='button' class="slick-next">
        <i class="fa-solid fa-angle-right"></i>
    </button>
    `
  });