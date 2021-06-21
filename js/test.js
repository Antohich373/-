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
    document.querySelector('.successful-sending').classList.remove('successful-sending--active')
})
window.addEventListener('keydown', function(evt){
    if(evt.keyCode === 27){
        evt.preventDefault();
       if(modalShadow.classList.contains('modal-shadow-active') || callModal.classList.contains('modal-order-call-active')){
        modalShadow.classList.remove('modal-shadow-active');
        callModal.classList.remove('modal-order-call-active');
        leaveRequest.classList.remove('leave-request-active')
        document.querySelector('.successful-sending').classList.remove('successful-sending--active')
       }  
    }   
});
//

//Оставить заявку 
let leaveRequest = document.querySelector('.leave-request')
let leaveRequestButton = document.querySelectorAll('.leave-request--button')
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
//Закрыть успешную заявку
document.querySelector('.close-modal-successful').addEventListener('click', function() {
    document.querySelector('.successful-sending').classList.remove('successful-sending--active')
    modalShadow.classList.remove('modal-shadow-active') 
})
//
  //Форма заказать звонок
  document.querySelector('.modal-order-call--form').addEventListener('submit', function(evt) {
    evt.preventDefault();
    var data = new FormData(this) // Сборка формы 
    var url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url, {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: data // Отправка самой формы
      })
      .then(response => response.json())
      .then((json) => { // Ответ
        if (json.id === 101) { // Для примера проверка пройдена если id === 101
          // Добавление поля
          document.querySelector('.successful-sending').classList.add('successful-sending--active')
          modalShadow.classList.add('modal-shadow-active')  
          callModal.classList.remove('modal-order-call-active')
        }else {
          console.log(json)
        }
  
      })
      .catch(err => console.log(err));
  })

  //Форма Отсавить заявку
  document.querySelector('.modal-order-call--form-request').addEventListener('submit', function(evt) {
    evt.preventDefault();
    var data = new FormData(this) // Сборка формы 
    var url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url, {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: data // Отправка самой формы
      })
      .then(response => response.json())
      .then((json) => { // Ответ
        if (json.id === 101) { // Для примера проверка пройдена если id === 101
          // Добавление поля
          document.querySelector('.successful-sending').classList.add('successful-sending--active')
          modalShadow.classList.add('modal-shadow-active')  
          leaveRequest.classList.remove('leave-request-active')
        }else {
          console.log(json)
        }
  
      })
      .catch(err => console.log(err));
  })

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