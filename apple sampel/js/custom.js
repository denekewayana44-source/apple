// Q5
 
 function mobileSize(){
    return window.innerWidth<=768;
 }
 if(mobileSize()){
    $(".footer-links-wrapper ul").hide();
 }
 $(".footer-links-wrapper h3").on('click', function(){
    if(mobileSize()){
        const h3elements = $(this); //grabs the exact h3 clicked ...to convert in to jQuery object so that to be able to use JQuery methods like toggleClass()
        const ulSibling = $(this).next("ul"); // since each h3 is directly followed by its list 
        ulSibling.slideToggle(500); //giving a little animated half a second
        h3elements.toggleClass("expanded") // add a class that controls which icon shows next to the heading(+-) 
    }
 });

 $(window).on("resize", function(){ //event listner for action to be taken when resizing the screen
if(!mobileSize()){
    $('.footer-links-wrapper ul').show(); 
    $('.footer-links-wrapper h3').removeClass('expanded');
}else{
    $('.footer-links-wrapper ul').hide();
    $('.footer-links-wrapper h3').removeClass('expanded')
}
 })