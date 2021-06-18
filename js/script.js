//ОТКРЫТЬ ЗАКРЫТЬ МЕНЮ 
let openNav = document.querySelector('.button-open--nav')
let closeNav = document.querySelector('.button-closse--nav')

openNav.addEventListener('click', function() {
    document.querySelector('.header-nav--pop').classList.add('header-nav--pop-open')
    modalShadow.classList.add('modal-shadow-active');
})

closeNav.addEventListener('click', function() {
    document.querySelector('.header-nav--pop').classList.remove('header-nav--pop-open')
    modalShadow.classList.remove('modal-shadow-active');
})

//Наши работы
document.querySelector('.button-photo').addEventListener('click', function() {
    document.querySelector('.our-works-list-video').style.setProperty('display', 'none')
    document.querySelector('.our-works-list-photo').style.setProperty('display', 'grid')
})

document.querySelector('.button-video').addEventListener('click', function() {
    document.querySelector('.our-works-list-video').style.setProperty('display', 'grid')
    document.querySelector('.our-works-list-photo').style.setProperty('display', 'none')
})

//СЛАЙДЕР У ШАПКИ
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
//

//СЛАЙДЕР ЮНИТЕК В ЦИФРАХ
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
//

//СЛАЙДЕР СДАЕМ ДО 300 ОБЬКУТОВ
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
//

//СЛАЙДЕР ОТЗЫВЫ
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

new Swiper('.product-page-container', {
    navigation: {
        nextEl: '.button-slid-next',
        prevEl: '.button-slid-prev',
      },
    slidesPerView: 1,
    spaceBetween: 30,
    thumbs: {
        swiper: {
            el: '.product-page-min-container',
            slidesPerView: 5,
        }
    }
});
//
{/* <div id="elem" data-num="1000" data-my-num="2000"></div>
let elem = document.querySelector('#elem');

alert(elem.getAttribute('data-num'));  
alert(elem.getAttribute('data-my-num')); */}
//ТЕСТОВЫЙ СКРИПТ
let quiz = document.querySelectorAll('.quiz')
for(let i = 0; i < quiz.length; i++){
    let blokItem = quiz[i].querySelectorAll('.quiz-question');
    let current = 0;
    let prev = quiz[i].querySelector('.quiz-button--prev');
    let next = quiz[i].querySelector('.quiz-button--next');
    next.addEventListener('click', function() {
        change_block("+")
    })
    prev.addEventListener('click', function() {
        change_block("-")
    })
    
    change_block('+')
    
    function change_block(type) {
        for( let i = 0; i < blokItem.length; i++ ) {
            
            blokItem[i].classList.remove('quiz-question-active')
            setTimeout(function() {
                blokItem[i].style.setProperty('display', 'none')
            }, 300)
        }
        for( let i = 0; i < blokItem.length; i++ ) {
            if (i == current) {
                if (blokItem[current]) {
                    switch (type) {
                        case "+":
                            current = i + 1
                            break;
                        case "-":
                            current = i - 1
                            break;
                    }
    
                    setTimeout(function() {
                        blokItem[current].style.setProperty('display', 'block')
                        blokItem[current].classList.add('quiz-question-active')
                    }, 300)
                } 
                break
            }
        }
        if(current === 0) {
            quiz[i].querySelector('.quiz-button--prev').classList.add('quiz-button--prev-active')
            quiz[i].querySelector('.range-color').style.width = '30px';
        }else {
            quiz[i].querySelector('.quiz-button--prev').classList.remove('quiz-button--prev-active')
        }
        if(current === 6) {
            quiz[i].querySelector('.quiz-button--next').classList.add('quiz-button--next-active')
        }else {
            quiz[i].querySelector('.quiz-button--next').classList.remove('quiz-button--next-active')
        }
    
        if(current === 0) {
            quiz[i].querySelector('.range-color').style.width = '16.5%';
            quiz[i].querySelector('.range-text--number').textContent = '1'
        }
        if(current === 1) {
            quiz[i].querySelector('.range-color').style.width = '33%';
            quiz[i].querySelector('.range-text--number').textContent = '2'
        }
        if(current === 2) {
            quiz[i].querySelector('.range-color').style.width = '49.5%';
            quiz[i].querySelector('.range-text--number').textContent = '3'
        }
        if(current === 3) {
            quiz[i].querySelector('.range-color').style.width = '66%';
            quiz[i].querySelector('.range-text--number').textContent = '4'
        }
        if(current === 4) {
            quiz[i].querySelector('.range-color').style.width = '82.5%';
            quiz[i].querySelector('.range-text--number').textContent = '5'
        }
        if(current === 5) {
            quiz[i].querySelector('.range-color').style.width = '100%';
            quiz[i].querySelector('.range-text--number').textContent = '6'
        }
        if(current === 6) {
            quiz[i].querySelector('.range').style.display = 'none';
        }else {
            quiz[i].querySelector('.range').style.display = 'block';
        }
    }
}

//

//МАСКА НА ТЕЛЕФОН
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
//

//ЗАКАЗАТЬЗВОНОК
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
    leaveRequest.classList.remove('leave-request-active')
})
modalShadow.addEventListener('click', function() {
    callModal.classList.remove('modal-order-call-active')
    modalShadow.classList.remove('modal-shadow-active') 
    leaveRequest.classList.remove('leave-request-active')
    document.querySelector('.header-nav--pop').classList.remove('header-nav--pop-open')
})
window.addEventListener('keydown', function(evt){
    if(evt.keyCode === 27){
        evt.preventDefault();
       if(modalShadow.classList.contains('modal-shadow-active') || callModal.classList.contains('modal-order-call-active')){
        modalShadow.classList.remove('modal-shadow-active');
        callModal.classList.remove('modal-order-call-active');
        leaveRequest.classList.remove('leave-request-active')
       }  
    }   
});
//

//Оставить заявку 
let leaveRequest = document.querySelector('.leave-request')
let leaveRequestButton = document.querySelectorAll('.leave-request--button')
console.log(leaveRequestButton)
let closeModalRequest = document.querySelector('.close-modal-request')

for( let i = 0; i < leaveRequestButton.length; i++ ){
    leaveRequestButton[i].addEventListener('click', function() {
        leaveRequest.classList.add('leave-request-active')
        modalShadow.classList.add('modal-shadow-active') 
        document.querySelector('.header-nav--pop').classList.remove('header-nav--pop-open')
    })     
}

closeModalRequest.addEventListener('click', function() {
    leaveRequest.classList.remove('leave-request-active')
    modalShadow.classList.remove('modal-shadow-active') 
})

//

//ОТВЕТЫ НА ВОПРОСЫ
let answersItem = document.querySelectorAll('.answers-item');
for( let i = 0; i < answersItem.length; i++ ){
  answersItem[i].addEventListener('click', function(){
    this.classList.toggle('sisi');
    this.classList.toggle('answers-item--text-open')
  });
}
let headerCategory = document.querySelectorAll('.header-close')
for( let i = 0; i < headerCategory.length; i++ ){
    headerCategory[i].addEventListener('click', function(){
    this.classList.toggle('header-open');
    this.classList.toggle('active');
  });
}   
//

//Ошибка не заполненых полей
let modalOrderCallForm = document.querySelector('.modal-order-call--form')
let inputName = document.querySelector('.order-call-name')
let inputTel = document.querySelector('.order-call-tel')

let successfuSending = document.querySelector('.successful-sending')

let modalOrderCallFormRequest = document.querySelector('.modal-order-call--form-request')
let inputNameRequest = document.querySelector('.order-call-name-request')
let inputTelRequest = document.querySelector('.order-call-tel-request')
let inputEmailRequest = document.querySelector('.order-call-mail')

modalOrderCallFormRequest.addEventListener('submit', function(evt){
    if(!inputNameRequest.value){
        inputNameRequest.classList.add('eror-input')
    }
    if(!inputTelRequest.value){
        inputTelRequest.classList.add('eror-input')
    }
    if(!inputEmailRequest.value){
        inputEmailRequest.classList.add('eror-input')
    }
})
//ФИЛЬТР ТОВАРОВ
let buttonFiltrOpen = document.querySelector('.catalog-button')
let filtr = document.querySelector('.filtrs')
buttonFiltrOpen.addEventListener('click',function() {
    filtr.classList.add('filtrs-activ')
})
let closeFilter = document.querySelector('.name-close')
closeFilter.addEventListener('click',function() {
    filtr.classList.remove('filtrs-activ')
})
//