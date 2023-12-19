const playButton = document.querySelector("#myButton");
playButton.addEventListener("click", function() {
    document.querySelector("#player").play();
    document.querySelector("#myVideo").play();
})



const timer = 5;                   // just MINUTE
let amountTime = timer * 60;      // Seconds

// не перевoдим в милисекунды, так как у нас нет отсчета дней, а только время

function calculateTime() {
    let countdown = document.querySelector("#countdown");
    let minutes = Math.floor(amountTime/60);        // расчет сколько будет минут
    let seconds = amountTime%60;                   // расчет сколько будет секунд, так как то, что не вошло в минуты поцдет в секунды и нам нужен modular (-это остаток определений: 4/2=0 (2,2,0))

    if (seconds < 10) {
        seconds = "0" + seconds
    }
    else {
        seconds = seconds;
    }

    countdown.innerHTML = `${minutes} : ${seconds}`;
    amountTime--;

    if (amountTime < 0) {       // чтобы счет не уходил в минус
        stopTimer();            // функция стоп таймер (внизу ее расшифровали)
        amountTime = 0;         // остановился таймер, когда дошло до 0        
    }

    function stopTimer () {
        clearInterval(timerId);    // clearInterval отвечает за остановку времени
    }

}

    let timerId = setInterval(calculateTime, 1000);

