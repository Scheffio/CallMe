let burgerBtn = document.querySelector(".menu-burger")
let menu = document.querySelector(".header-menu")


burgerBtn.onclick = () => {                    /* событие клика на иконку бургера */
    burgerBtn.classList.toggle('open-menu')
    menu.classList.toggle('v-menu')
}