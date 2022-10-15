//Global variables
const timeKeep = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');


let tenths = 0;
let interval = null;


//Event listeners

start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);


function showTimer() {
      tenths++;

//format time

let mins = Math.floor(tenths / 600);
let secs = Math.floor((tenths - (mins * 600)) / 10);
let tens = tenths % 10;

if (tens < 10) tens = '0' + tens;
if (secs < 10) secs = '0' + secs;
if (mins < 10) mins = '0' + mins;


timeKeep.innerText = `${mins}:${secs}:${tens}`;
      
}


function start () {
    if (interval) {
        return
    }

    interval = setInterval(showTimer, 100);
}

function stop () {
    clearInterval(interval);

    interval = null;
}

function reset () {
    stop();
    tenths = 0;
    timeKeep.innerText = '00:00:0';
}
