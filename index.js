
$(document).ready(function()
{
    $(window).scroll(function(){
        if(this.scrollY > 20)
        {
            $(".navbar ").addClass("add");
            $(".scroll-up-button ").addClass("show");
            
        }
        else
        {
            $('.navbar').removeClass("add");
            $(".scroll-up-button ").removeClass("show");
        }
    });
    //slide-up-script
    $(".scroll-up-button ").click(function(){
        $("html").animate({scrollTop:0});

    });
    
    //typing animation
    var typed = new Typed(".typing",{
        strings:["FrontEnd Developer","Freelancer","Ethical Hacker","Graphic Designer"],
        typeSpeed:100,
        backSpeed:60,
        loop: true

    });
    var typed = new Typed(".type",{
        strings:["FrontEnd Developer","Freelancer","Ethical Hacker","Graphic Designer"],
        typeSpeed:100,
        backSpeed:60,
        loop: true

    });
    
    
    //toggle meny/navbar script

    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");

    });
    $(".carousel").owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayMoverPause:true,
        responsive:
        {
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }

        }
    });
});