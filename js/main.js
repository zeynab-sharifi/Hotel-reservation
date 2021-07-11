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