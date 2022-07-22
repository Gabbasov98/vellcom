function tariffSlider() {
    var swiper = new Swiper('.tariff .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
    })
}

function equipSlider() {
    var swiper = new Swiper('.equip .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.equip .swiper-button-next',
            prevEl: '.equip .swiper-button-prev',
        },
        pagination: {
            el: '.equip .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            450: {
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

function servicesSlider() {
    var swiper = new Swiper('.services .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 50,
        navigation: {
            nextEl: '.services .swiper-button-next',
            prevEl: '.services .swiper-button-prev',
        },
        pagination: {
            el: '.services .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            576: {
                slidesPerView: 1.2,
                spaceBetween: 20
            },
            800: {
                slidesPerView: 1.5,
            },
            1200: {
                slidesPerView: 2,
            },
        }
    })
}

function cahnnelsSlider() {
    var swiper = new Swiper('.channels .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        // slidesPerColumn: 2,
        navigation: {
            nextEl: '.channels .swiper-button-next',
            prevEl: '.channels .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            450: {
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

tariffSlider()
equipSlider()
servicesSlider()
cahnnelsSlider()

$(".qa-card__show").click(function () {
    $(this).toggleClass("qa-card--active")
    $(this).siblings(".qa-card__hidden").slideToggle()
})
