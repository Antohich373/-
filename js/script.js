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

new Swiper('.work-container', {
    navigation: {
        nextEl: '.work-button-next',
        prevEl: '.work-button-prev',
      },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            loop: false,
            centeredSledes: false,
            spaceBetween: 30,
            slidesPerView: 1,
        },
        1330: {
            spaceBetween: 10,
            slidesPerView: 3,
        }
    }
});

new Swiper('.reviews-container', {
    navigation: {
        nextEl: '.reviews-button-next',
        prevEl: '.reviews-button-prev',
      },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            loop: false,
            centeredSledes: false,
            spaceBetween: 60,
            slidesPerView: 2 ,
        },
        1020: {
            spaceBetween: 30,
            slidesPerView: 3,
        },
        1330: {
            spaceBetween: 10,
            slidesPerView: 4,
        }
    }
});

let blokItem = document.querySelectorAll('.blok');
let current = 0;

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');


next.addEventListener('click', function() {
    change_block("+")
})

prev.addEventListener('click', function() {
    change_block("-")
})

function change_block(type) {
    for( let i = 0; i < blokItem.length; i++ ) {
        blokItem[i].classList.remove('block-active')
    }

    for( let i = 0; i < blokItem.length; i++ ) {
        if (i == current) {
            if (blokItem[current]) {
                switch (type) {
                    case "+":
                        current = i + 1
                        blokItem[current].classList.add('block-active')
                        break;
                    case "-":
                        current = i - 1
                        blokItem[current].classList.add('block-active')
                        break;
                }
            }
            
            break
        }
    }
    console.log(current)
}


let answersItem = document.querySelectorAll('.answers-item');

for( let i = 0; i < answersItem.length; i++ ){
  answersItem[i].addEventListener('click', function(){
    this.classList.toggle('sisi');
  });
}

let headerCategory = document.querySelectorAll('.header-close')

for( let i = 0; i < headerCategory.length; i++ ){
    headerCategory[i].addEventListener('click', function(){
    this.classList.toggle('header-open');
    this.classList.toggle('active');
  });
}   

let buttonFiltrOpen = document.querySelector('.catalog-button')
let filtr = document.querySelector('.filtrs')

buttonFiltrOpen.addEventListener('click',function() {
    filtr.classList.add('filtrs-activ')
})

let closeFilter = document.querySelector('.name-close')

closeFilter.addEventListener('click',function() {
    filtr.classList.remove('filtrs-activ')
})