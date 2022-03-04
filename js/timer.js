let countDownDate = new Date("Dec 31, 2021 00:00:00").getTime();        //дата до которой считаем

let timer = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));                              //считаем дни, часы и минуты
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  
    document.querySelector("#day").innerHTML = days                         //записываем значения
    document.querySelector("#hour").innerHTML = hours
    document.querySelector("#minutes").innerHTML = minutes
    
    
    if (distance < 0) {
      clearInterval(timer);
    }
  }, 1000);