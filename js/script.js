let openNav = document.querySelector('.button-open--nav')
let closeNav = document.querySelector('.button-closse--nav')

openNav.addEventListener('click', function() {
    document.querySelector('.header-nav--pop').classList.add('header-nav--pop-open')
})

closeNav.addEventListener('click', function() {
    document.querySelector('.header-nav--pop').classList.remove('header-nav--pop-open')
})

new Swiper('.features-container', {
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: -23,
        },
        768: {
            loop: false,
            centeredSledes: false,
            spaceBetween: 10,
            slidesPerView: 2,
        },
        1330: {
            watchOverflow: true,
            loop: false,
            centeredSledes: false,
            spaceBetween:-90,
            slidesPerView: 4,
        }
    },
});

new Swiper('.statistics-container', {
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: -23,
        },
        768: {
            loop: false,
            centeredSledes: false,
            spaceBetween: 10,
            slidesPerView: 2,
        },
        1330: {
            watchOverflow: false,
            loop: false,
            centeredSledes: false,
            spaceBetween: 0,
            slidesPerView: 999,
        }
    },
});