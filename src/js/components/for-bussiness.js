function licenseSlider() {
    var swiper = new Swiper('.license .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.license .swiper-button-next',
            prevEl: '.license .swiper-button-prev',
        },
        pagination: {
            el: '.license .swiper-pagination',
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

function feedbackSlider() {
    var swiper = new Swiper('.feedback .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.feedback .swiper-button-next',
            prevEl: '.feedback .swiper-button-prev',
        },
        pagination: {
            el: '.feedback .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.05,
                spaceBetween: 20
            },
            576: {
                slidesPerView: 1.2,
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

function doneSolutionSlider() {
    var swiper = new Swiper('.done-solution .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 30,
        breakpoints: {
            320: {
                slidesPerView: 1.05,
                spaceBetween: 20
            },
            576: {
                slidesPerView: 1.2,
            },
            700: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            },
            1700: {
                slidesPerView: 5,
            },
        }
    })
}

function doneProjectsSlider() {
    var swiper = new Swiper('.done-projects .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            320: {
                slidesPerView: 1.05,
                spaceBetween: 20
            },
            576: {
                slidesPerView: 1.2,
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

licenseSlider()
feedbackSlider()
doneSolutionSlider()
doneProjectsSlider()
