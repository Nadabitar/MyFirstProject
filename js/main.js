$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
           $(".header").css("background" , "#6195ff")
        }
        else{
            $(".header").css("background" , "transparent");
        }
       })
})