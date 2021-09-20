const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNumber = document.querySelector('.hours'),
    minutesNumber = document.querySelector('.minutes')

// console.log(hoursNumber);
// console.log(minutesNumber);

// let time = new Date()

// console.log(time);

function clock() {
    /* 
        new Date() - получает время с компьютера
        getHours() - получает часы с ПК
        getSeconds() - получает секунды с ПК
        getMinutes() - получает минуты с ПК
    */

    let time = new Date(),
        second = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;


    hour.style = `transform: rotate(${hours}deg)`;
    sec.style = `transform: rotate(${second}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;


    hoursNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minutesNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()


    // Рекурсия - это когда функция вызывается внутри себя

    setTimeout(() => clock(), 1000);
}

clock()


const links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');



for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        e.preventDefault();
        removeActiveClass()
        addActiveClass(this, tabs[i])
    })
}

function removeActiveClass() {
    links.forEach(link => {
        link.classList.remove('active')
    })

    tabs.forEach(tab => {
        tab.classList.remove('active')
    })
}


function addActiveClass(element, arr) { 
    element.classList.add('active')
    arr.classList.add('active')
}


const stopwatcHours = document.querySelector('.stopwatch__hours'),
    stopwatchMinutes = document.querySelector('.stopwatch__minutes'),
    stopwatchSeconds = document.querySelector('.stopwatch__seconds'),
    stopwatchBtn = document.querySelector('.stopwatch__btn');
// console.log(stopwatchBtn);
    let secondTimer = 0;
    let minutesTimer = 0;
    let hoursTimer = 0;

function timer() {
    stopwatchBtn.addEventListener('click', () =>{
        stopwatchBtn.classList.add('active')
        
            
        function secondPlus () {
            secondTimer++
            stopwatchSeconds.innerHTML = secondTimer

            if(secondTimer == 60){
            secondTimer = 0;
            stopwatchSeconds.innerHTML = secondTimer;
            minutesTimer++
            stopwatchMinutes.innerHTML = minutesTimer;
        }

        if(minutesTimer == 60){
            minutesTimer = 0;
            stopwatchMinutes.innerHTML = minutesTimer;
            hoursTimer++
            stopwatcHours.innerHTML = hoursTimer;
        }

            setTimeout(() => secondPlus (), 1000)
        }
        secondPlus ()

        

        stopwatchBtn.innerHTML = 'stop'

        if(stopwatchBtn.className == 'stopwatch__btn active'){
            stopwatchBtn.addEventListener('click', () =>{
                stopwatchBtn.classList.remove('active');
                stopwatchBtn.classList.add('stop');

                stopwatchBtn.innerHTML = 'return';

                secondTimer1 = secondTimer;
                secondTimer = secondTimer1

                if(stopwatchBtn.className == 'stopwatch__btn stop'){
            stopwatchBtn.addEventListener('click', () =>{

                stopwatchBtn.classList.remove('stop');

                stopwatchBtn.innerHTML = 'start';

                stopwatchSeconds.innerHTML = secondTimer = 0;
                stopwatchMinutes.innerHTML = minutesTimer = 0;
                stopwatcHours.innerHTML = hoursTimer = 0;
            })
            
        }
                
            })
        }

        
    })
    
}

timer()