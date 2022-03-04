let slider = document.querySelector('.slider');
let slider_nav = document.querySelector('.slider-navigation');

let index = 0;

let slides = [                                         /** объект элементов */
    {
        image: 'img/PNG/gamer.png',
        title: 'Игрокам',
        text: 'Транслируйте игры прямо в приложении в высоком качестве',
    },
    {
        image: 'img/PNG/employee.png',
        title: 'Предприятиям',
        text: 'Создавайте видеоконференции до 75 человек одновременно!',
    },
    {
        image: 'img/PNG/support.png',
        title: 'Друзьям',
        text: 'Общайтесь с друзьями используя встроенную библиотеку масок!',
    },
];

let left = slider.querySelector('#slider-left-btn');
let image = slider.querySelector('#slide');
let right = slider.querySelector('#slider-right-btn');

let title = slider.querySelector('#title');
let text = slider.querySelector('#text');

function update(i) {
    // Установка индекса
    index = i;

    // Переход между слайдами
    if (index < 0) {
        index = slides.length - 1;  //ставим последний слайд
    }

    if (index > slides.length - 1) {
        index = 0;           //ставим первый слайд
    } 

    // Текущий слайд
    let slide = slides[index]

    // Изменение слайда
    image.src = slide.image
    title.textContent = slide.title
    text.textContent = slide.text
}

function init() {
    left.addEventListener('click', () => update(index - 1))      //Клик на стрелочки справ и слева
    right.addEventListener('click', () => update(index + 1))

    update(index)

    for (let i = 0; i < slides.length; i++) {           //Создаём кнопки слайдера в соотношении количества элементов
        let btn = document.createElement('div')
        btn.classList.add('slider-btn')
        btn.addEventListener('click', () => update(i))
        slider_nav.appendChild(btn)
    }
}

init()