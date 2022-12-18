$(".header__burger").click(function() {
    $(".header").toggleClass("header--active")
})

$(".anchor__link").click(function(event) {
    event.preventDefault();
    var idc = $(this).attr('href'),
        top = $(idc).offset().top;
    $('body,html').animate({ scrollTop: top - 55 }, 0);
    $(".header").removeClass("anchor__link--active")
});


$(window).scroll(function() {
    var $sections = $('section');
    $sections.each(function(i, el) {
        var top = $(el).offset().top - 135;

        var bottom = top + $(el).height();
        var scroll = $(window).scrollTop();
        var idn = $(el).attr('id');
        if (scroll > top && scroll < bottom) {
            $('.anchor__link.anchor__link--active').removeClass('anchor__link--active');
            $('.anchor__link[href="#' + idn + '"]').addClass('anchor__link--active');
        }
    });
});


$(".nav__item").hover(onIn, onOut);
$(".nav__show").click(function () {
    if (window.innerWidth <= 992){
        $(this).siblings(".nav__hidden").slideToggle()
    }
})


function onIn() {
    if (window.innerWidth > 992) {
        let el = $(this)
        setTimeout(function() {
            if (el.is(':hover')) {
                el.addClass("_active")
            }
        }, 200);
    }
}

function onOut() {
    if (window.innerWidth > 992) {
        $(this).removeClass("_active")
    }
}
