//ОТКРЫТЬ ЗАКРЫТЬ МЕНЮ 
let openNav = document.querySelector('.button-open--nav')
let closeNav = document.querySelector('.button-closse--nav')

openNav.addEventListener('click', function() {
    document.querySelector('.header-nav--pop').classList.add('header-nav--pop-open')
})

closeNav.addEventListener('click', function() {
    document.querySelector('.header-nav--pop').classList.remove('header-nav--pop-open')
})

//ОТВЕТЫ НА ВОПРОСЫ
let answersItem = document.querySelectorAll('.answers-item');
let answersItemText = document.querySelectorAll('.answers-item--text');
console.log(answersItemText)
for( let i = 0; i < answersItem.length; i++ ){
  answersItem[i].addEventListener('click', function(){
    this.classList.toggle('sisi');
    this.classList.toggle('answers-item--text-open')
  });
}
