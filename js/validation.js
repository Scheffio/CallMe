let alertpopup = document.querySelector(".alert")                       //вытягиваем все нужные элементы в переменные
let username = document.querySelector("#name")
let name_alert = document.querySelector(".name-alert")
let email = document.querySelector("#email")
let email_alert = document.querySelector(".email-alert")
let message = document.querySelector("#message")
let message_alert = document.querySelector(".message-alert")
let symbolsCount = document.querySelector(".symbolsCount")
let submit = document.querySelector("#submit")


username.onkeyup = namekeycheck;                                        //запускаем функции по клику на инпуты
email.onkeyup = emailkeycheck;
message.onkeyup = messagekeycheck;

function namekeycheck() {
  if(username.value.length > 12 || username.value.length < 1) {  //проверка длинны поля имя
    username.style.outline = "2px solid #ff4141"                 //включаем оутлайн, добавляем транзишн и включаем алёрт
    username.style.transition = ".3s"
    alertpopup.style.display = "block"
    name_alert.style.display = "block"
  }else {
    username.style.outline = "2px solid #007a21"
    username.style.transition = ".3s"
    name_alert.style.display = "none"
    hide();
  }

  if(username.value == '') {                                  //если поле пустое - возвращяем оутлайн на 0 и убираем алёрт
    username.style.outline = "0"
    alertpopup.style.display = "none"
    name_alert.style.display = "none"
  }
  
  if(username.value.length > 1 && email.value.length > 1 && message.value.length > 1) {     //проверка на заполненность поля, если все поля заполнены, то разблокируем кнопку
    submit.removeAttribute('disabled')
  }else {
    submit.setAttribute('disabled', '')
  }
}

function emailkeycheck() {
  
  if(!String(email.value).includes('@')) {
    email.style.outline = "2px solid #ff4141"
    email.style.transition = ".3s"
    alertpopup.style.display = "block"
    email_alert.style.display = "block"
  }else {
    email.style.outline = "2px solid #007a21"
    email.style.transition = ".3s"
    email_alert.style.display = "none"
    hide();
  }

  if(email.value == '') {
    email.style.outline = "0"
    alertpopup.style.display = "none"
    email_alert.style.display = "none"
  }
  
  if(username.value.length > 1 && email.value.length > 1 && message.value.length > 1) {
    submit.removeAttribute('disabled')
  }else {
    submit.setAttribute('disabled', '')
  }
}

function messagekeycheck() {
  symbolsCount.textContent = "Количество символов - " + message.value.length;
  if(message.value.length > 255 || message.value.length < 1) {
    message.style.outline = "2px solid #ff4141"
    message.style.transition = ".3s"
    alertpopup.style.display = "block"
    message_alert.style.display = "block"
  }else {
    message.style.outline = "2px solid #007a21"
    message.style.transition = ".3s"
    message_alert.style.display = "none"
    hide();
  }

  if(message.value == '') {
    message.style.outline = "0"
    alertpopup.style.display = "none"
    message_alert.style.display = "none"
  }

  if(username.value.length > 1 && email.value.length > 1 && message.value.length > 1) {
    submit.removeAttribute('disabled')
  }else {
    submit.setAttribute('disabled', '')
  }
}

function hide() {                                           //анимация плавного закрытия алёрта
  alertpopup.classList.add('anim-end')
  setTimeout(() => {
    alertpopup.style.display = "none";
    alertpopup.classList.remove('anim-end')
  }, 1000)
}




























/*   БЛОК CTRL + V + КОНТЕКСТ   */
document.querySelector('#name').addEventListener('paste', function(event) {
  event.preventDefault()
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

document.querySelector('#message').addEventListener('paste', function(event) {
  event.preventDefault()
})

document.querySelector('#email').addEventListener('paste', function(event) {
  event.preventDefault()
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
