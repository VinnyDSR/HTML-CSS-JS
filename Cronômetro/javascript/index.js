window.onload = function() {
    var seconds = 00;
    var tensOfSeconds = 00;
    var appendTensOfSeconds = document.getElementById('tensOfSeconds');
    var appendSeconds = document.getElementById('seconds');
    var start = document.getElementById('Start');
    var stop = document.getElementById('Stop');
    var reset = document.getElementById('Reset');
    var Interval;

    start.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(TimerStart, 10);

    }
    stop.onclick = function() {
        clearInterval(Interval);

    }

    reset.onclick = function() {
        clearInterval(Interval);

        tensOfSeconds = "00";
        seconds = "00";

        appendTensOfSeconds.innerHTML = tensOfSeconds;

        appendSeconds.innerHTML = seconds;

    }


    function TimerStart() {
        tensOfSeconds++;
        if (tensOfSeconds <= 9) {
            appendTensOfSeconds.innerHTML = "0" + tensOfSeconds;
        }
        if (tensOfSeconds > 9) {
            appendTensOfSeconds.innerHTML = tensOfSeconds;
        }

        if (tensOfSeconds > 99) {
            seconds++;

            appendSeconds.innerHTML = "0" + seconds;
            tensOfSeconds = 0;

            appendTensOfSeconds.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }


    }


}