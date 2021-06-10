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

class PhoneMask {
    constructor(input) {
        this.input = input
        this.maskPattern = '+7 (___) ___-__-__'
        this.input.oninput = this.inputEvent.bind(this)
        this.input.onfocus = this.focusEvent.bind(this)
        this.input.onblur = this.focusOutEvent.bind(this)
    }
    inputEvent(e) {
        if (this.input.getAttribute('data-input') && this.input.getAttribute('data-input').length >= 11) {
            this.input.value = this.input.value.substr(0, this.input.value.length - 1)
            this.input.setAttribute('data-input', this.input.getAttribute('data-input').substr(0, this.input.getAttribute('data-input').length - 1))
            return false
        }
        if (e.inputType != 'deleteContentBackward' && !e.data.match(/[0-9]/)) {
            this.input.value = this.input.value.replace(/[A-Za-zА-Яа-яЁё]/, '').substr(0, this.input.value.length - 1)
            return false
        }
        if (e.inputType != 'deleteContentBackward') {
            if (!this.input.getAttribute('data-input')) {
                this.input.setAttribute('data-input', e.data)
            } else {
                this.input.setAttribute('data-input', this.input.getAttribute('data-input') + e.data)
            }
        } else {
            this.input.setAttribute('data-input', this.input.getAttribute('data-input').substr(0, this.input.getAttribute('data-input').length - 1))
        }   
        let new_string = ''
        let position = 0
        for (let char of this.maskPattern) {    
            let input = this.input.getAttribute('data-input')
            let input_length = input.length
            
            if (position <= input_length-1 && char == '_') {
                new_string += input[position]
                position++
                continue
            } else {
                new_string += char
            }
        }
        this.input.value = new_string
    }
    focusEvent() {
        if (this.input.value == '') {
            this.input.value = this.maskPattern
        }
    }
    focusOutEvent() {
        if (!this.input.getAttribute('data-input') || this.input.getAttribute('data-input').length < 10) {
            this.input.value = ''
            this.input.setAttribute('data-input', '')
        }
    }
}

document.querySelectorAll('[type=tel]').forEach(function(item) {
    new PhoneMask(item)
})


let openCallModal = document.querySelectorAll('.open-cal')
let closeModal = document.querySelector('.close-modal')

let modalShadow = document.querySelector('.modal-shadow')
let callModal = document.querySelector('.modal-order-call')

for( let i = 0; i < openCallModal.length; i++ ){
    openCallModal[i].addEventListener('click', function() {
        callModal.classList.add('modal-order-call-active')
        modalShadow.classList.add('modal-shadow-active')
    })    
}


closeModal.addEventListener('click', function() {
    callModal.classList.remove('modal-order-call-active')
    modalShadow.classList.remove('modal-shadow-active') 
})


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