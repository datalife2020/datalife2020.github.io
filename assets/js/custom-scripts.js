// This is Javascript code to make the example in question02 work, feel free to remove this when you start working on your project
$(document).ready(function() {
    
        $("#bubbo g").hover(function(){
       $("#bubbo g").css("opacity", 0.3);
       $(this).css("opacity", 1);
    }, function() {
        $("#bubbo g").css("opacity", 1);
    });
    
            $("#flaps g").hover(function(){
       $("#flaps g").css("opacity", 0.3);
       $(this).css("opacity", 1);
    }, function() {
        $("#flaps g").css("opacity", 1);
    });
    
          $("#giovanni g").hover(function(){
       $("#giovanni g").css("opacity", 0.3);
       $(this).css("opacity", 1);
    }, function() {
        $("#giovanni g").css("opacity", 1);
    });
    
    
    $('.cluster0').on('mouseenter', function(event) {
        $('.cluster1').addClass('semivisible');
        $('.cluster2').addClass('semivisible');
    });
    
     $('.cluster0').on('mouseleave', function(event) {
        $('.cluster1').removeClass('semivisible');
        $('.cluster2').removeClass('semivisible');
    });
    
    
    
    
$(function(){
  $('div.milano').hide();// hide it initially
  $('#myonoffswitch').on('click', function(){
     $('div.newyork, div.milano').toggle();
  });
});
    
});
