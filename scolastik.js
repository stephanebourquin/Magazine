// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7();
 
// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
 
// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});

  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
   // loop: true,
    
    // If we need pagination
   // pagination: '.swiper-scrollbar',
    
    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // And if we need scrollbar
    scrollbar: '.swiper-scrollbar',
  })      

function goto (id) {
alert (id);
    mySwiper.slideTo( $$('#'+id).index(),500,false );
	
}
