function mainSlider() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    })
}

function advantagesSlider() {
    var swiper = new Swiper('.advantages .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
    })
}

function privateServicesSlider() {
    var swiper = new Swiper('.private-services .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            420: {
                slidesPerView: 'auto',
            }
        }
    })
}

function businessServicesSlider() {
    var swiper = new Swiper('.business-services .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 'auto',
            }
        }
    })
}

function trustSlider() {
    var swiper = new Swiper('.trust .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.trust .swiper-button-next',
            prevEl: '.trust .swiper-button-prev',
        },
        pagination: {
            el: '.trust .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.2,
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

mainSlider()
advantagesSlider()
privateServicesSlider()
businessServicesSlider()
trustSlider()
