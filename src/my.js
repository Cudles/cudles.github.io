
$(document).ready(function (){

  jQuery('div.dropdown').hover(function () {
    jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);}, function () {
    jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });


});