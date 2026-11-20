
$(document).ready(function () {
  $('.annoucement-bar').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    arrows: false,
    dots: false,
    infinite: true
  });
$('.nav-links li a').on('click' ,function(){
    $('.nav-links li a').removeClass('active');
       $(this).addClass('active');
})

  
});
