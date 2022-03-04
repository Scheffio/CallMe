let scrollBtn = document.querySelector("#scroll-btn")

for (let link of document.querySelectorAll('a[href^="#"]')) {  //берем все ссылки начинающиеся с #
	link.addEventListener('click', function (e) {
		e.preventDefault();                        //выключаем стандартную реакцию браузера
		let item = link.getAttribute('href');		//получаем путь 

		document.querySelector(item).scrollIntoView({   //по пути меняем повидение на плавное
			block: "center",
			behavior: "smooth"
		})
	})
}
