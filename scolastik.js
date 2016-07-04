// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7();
 
// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
 
// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});
var mySwiper ;
var current_url;
get_nouveautes();
function swipe_init () {
						mySwiper = new Swiper ('.swiper-container', {
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
						fitText( $$(".cover h1"), 1 );
						}
function goto (id) {
    mySwiper.slideTo( $$('#'+id).index(),500,false );
}

function set_current_url (url) {
	
	current_url =url;
}

function mag_init () {
	mainView.router.loadPage("magazine.html");
 var  xmlhttp=new XMLHttpRequest();

xmlhttp.open("GET", current_url,false);
xmlhttp.send();
if (xmlhttp) { 
document.getElementById("magazine").innerHTML=xmlhttp.responseText;
  swipe_init ();
}
}

 function get_nouveautes() {
var  xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","http://mag.art-zoo.com/?ajax=true",false);
xmlhttp.send();
document.getElementById("grid_index").innerHTML=xmlhttp.responseText;
			}

myApp.onPageInit('my_mag', function (page) { mag_init();});
myApp.onPageInit('index', function (page) { });
