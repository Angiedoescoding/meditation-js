const timer = 5;                  
let amountTime = timer * 60;      

function calculateTime() {
    let countdown = document.querySelector("#countdown");
    let minutes = Math.floor(amountTime/60);       
    let seconds = amountTime%60;                   

    if (seconds < 10) {
        seconds = "0" + seconds
    }
    else {
        seconds = seconds;
    }

    countdown.innerHTML = `${minutes} : ${seconds}`;
    amountTime--;

    if (amountTime < 0) {       
        stopTimer();           
        amountTime = 0;       
    }

    function stopTimer () {
        clearInterval(timerId);   
    }

}

    let timerId = setInterval(calculateTime, 1000);

