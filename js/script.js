$(document).ready(function() {
   $('.header__burger').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});

function ibg(){

   $.each($('.ibg'), function(index, val) {
   if($(this).find('img').length>0){
   $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
   }
   });
   }
   
   ibg();


   $(document).ready(function(){
      $('.news-tabs__item').click(function(e){
         e.preventDefault();
   
         $('.news-tabs__item').removeClass('active1');
         $('.news-tabs__block').removeClass('active1');
   
         $(this).addClass('active1');
         $($(this).attr('href')).addClass('active1');
      });
   
      $('.news-tabs__item:first').click();
   });