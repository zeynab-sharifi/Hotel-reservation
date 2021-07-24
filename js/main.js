jQuery(document).ready(function($){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 0){
      $(".nav-header-trip").addClass('nav-header-fixed');
    }
    else{
      $(".nav-header-trip").removeClass('nav-header-fixed');
    }
    });
    });
jQuery(document).ready(function($){
  $(".owl-carousel").owlCarousel();
  
});

const selectElement = document.querySelector('.two-person');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.total');
  result.textContent = `ومان ${event.target.value}`;

});