for (let like of document.querySelectorAll('.like')) {
    let span = like.querySelector('span')         /*  объявляем переменные  */
    let btn = like.querySelector('.fa-heart')
    btn.addEventListener('mouseenter', () => {                     /* анимация при наведении мышки */
        if (like.classList.contains('liked')) {
            btn.className = "fas fa-heart-broken"
        }
    })

    btn.addEventListener('mouseleave', () => {
        btn.className = "fas fa-heart"                  /* Возвращаем назад класс */
    })

    btn.addEventListener('click', function () {               /* система лайков. добавляем класс "лайкнуто" при клике на сердечко */
        let isLiked = like.classList.contains('liked')          /* в переменную "isliked" добавляем все элементы, у которых есть класс "liked" */
        like.classList.toggle('liked')
        let currentNumber = Number(span.textContent)
        span.textContent = currentNumber + (isLiked ? -1 : 1)         /* Прибавляем или убираем лайк в зависимости от класса */
    })
}

window.onload = () => {
    for (let like of document.querySelectorAll('.like')) {              /* Присваиваем рандомное число к лайкам */
        let span = like.querySelector('span')
        span.textContent = getRandomLikeNumber(1, 10);
    }
}

function getRandomLikeNumber(min, max) {                       /* Рандомный генератор лайков */
    return Math.floor(Math.random() * (max - min) + min);
}