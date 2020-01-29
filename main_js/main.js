$(document).ready(function(){
    // Menu
    $(".ham-burger, .nav-menu ul li a").click(function(){
        $(".nav-menu").toggleClass("open")
        $(".ham-burger").toggleClass("active");
    })
    //Accordian
    $(".accordian-container").click(function(){
        $(".accordian-container").children(".body").slideUp();
        $(".accordian-container").removeClass("active")
        $(".accordian-container").children(".head").children("span").removeClass("fa-angle-down").addClass("fa-angle-up")
        $(this).children(".body").slideDown();
        $(this).addClass("active")
        $(this).children(".head").children("span").removeClass("fa-angle-up").addClass("fa-angle-down")
    })
    // Srolll Behavior Support Any Browser
    $(".nav-menu ul li a, .go-down").click(function(event){
        if(this.hash !== ""){
            event.preventDefault();
            var hash=this.hash;

            $('html,body').animate({
                scrollTop:$(hash).offset().top
            },800, function(){
                window.location.hash=hash;
            });
            // add active class in navigation
            $(".nav-menu ul li a").removeClass("active")
            $(this).addClass("active")
        }
    })
});