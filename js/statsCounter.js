let numberTop = document.querySelector('#statistics').getBoundingClientRect().top   //вычисляем координату блока

window.addEventListener('scroll', function onScroll() {
	if (window.pageYOffset > numberTop - window.innerHeight / 2) {      //вычисляем доскроилили ли мы до нужного блока
		this.removeEventListener('scroll', onScroll);
		for (let stat of document.querySelectorAll('[data-max]')) {		//достаём максимальное и минимальное значение из дата сета
			let current = Number(stat.dataset.start)
			let end = Number(stat.dataset.max)
			
			let interval = setInterval(function () {   				//Таймер до того момента, пока текущее значение не будет больше максимального
				stat.innerHTML = current++;
				if (current > end) {
					clearInterval(interval);
				}
			}, 60);
		}
	}
})