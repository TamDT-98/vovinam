$(document).ready(function(){
    $(".nav-icon").hover(function(){
        $(this).children('i').addClass("flip");
        }, function(){
        $(this).children('i').removeClass("flip");
    });
});