$(window).scroll(function(){
    if ($(window).scrollTop() >= 120) {
        $('nav').addClass('sticky');
        $('.navbar-brand').addClass('visible-title');
    }
    else {
        $('nav').removeClass('sticky');
        $('.navbar-brand').removeClass('visible-title');
    }
});