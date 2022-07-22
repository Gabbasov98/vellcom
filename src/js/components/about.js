function aboutServiceSlider1() {
    var swiper = new Swiper('.about-services__slider1.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 26,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 'auto',
            }
        }
    })
}

function aboutServiceSlider2() {
    var swiper = new Swiper('.about-services__slider2.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 'auto',
            }
        }
    })
}

function teamSlider() {
    var swiper = new Swiper('.team .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.team .swiper-button-next',
            prevEl: '.team .swiper-button-prev',
        },
        pagination: {
            el: '.team .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            370: {
                slidesPerView: 1.1,
                spaceBetween: 20
            },
            800: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1700: {
                slidesPerView: 4,
            },
        }
    })
}

function historySlider() {
    var swiper = new Swiper('.history .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 1.1,
            },
            520: {
                slidesPerView: 'auto',
                spaceBetween: 30,
            }
        }
    })
}

aboutServiceSlider1()
aboutServiceSlider2()
teamSlider()
historySlider()
