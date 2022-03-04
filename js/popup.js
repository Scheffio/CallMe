let modal = document.querySelector(".popup")
let modalContent = modal.querySelector('.popup-content')
let btn = document.querySelector("#user-action-btn")
let closeBtn = document.querySelector(".close")

btn.onclick = function () {
  modal.style.display = "block";       /* при клике включаем поп-ап */
}

function hide() {                                 /* добавляем класс, для проигрывания анимации закрытия */
  modalContent.classList.add('anim-end')
  setTimeout(() => {
    modal.style.display = "none";
    modalContent.classList.remove('anim-end')        /** убираем класс и поп-ап после таймера */
  }, 300)
}

closeBtn.onclick = hide;                              

window.addEventListener('click', function (event) {      /** Закрываем поп-ап при нажатии вне модального окна */
  if (event.target == modal) {
    modalContent.classList.add('anim-end')
    setTimeout(() => {
      modal.style.display = "none";
      modalContent.classList.remove('anim-end')
  }, 300)
  }
})
