function projectProcessSlider() {
    var swiper = new Swiper('.project-process .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.project-process .swiper-button-next',
            prevEl: '.project-process .swiper-button-prev',
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

projectProcessSlider()
