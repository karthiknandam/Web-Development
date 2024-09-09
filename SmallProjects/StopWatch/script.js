const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const timer = document.querySelector('.timer');
const buttons = document.querySelectorAll('button');

let active = false;
let [seconds, minutes, hours] = [0, 0, 0];
let interval;

buttons.forEach(button => {
    button.addEventListener('click', ()=>timerFn(button));
})

function timerFn(button){
    if(button === startBtn)setTimer();
    if(button === resetBtn)resetTimer();    
};

function displayTimer(){
    const padding = (pad)=> pad.toString().padStart(2, '0');
    timer.textContent = `${padding(hours)}:${padding(minutes)}:${padding(seconds)}`;
}


function startTimer(){
    if(active){
    seconds++;
    if(seconds > 59){
        seconds = 0;
        minutes++;
        if(minutes > 59){
            minutes = 0;
            hours++;
        }
    }   
    displayTimer(); 
    }
}

function resetTimer(){
    active = false;
    startBtn.textContent = 'Start';
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTimer();
}

function setTimer(){
    if(!active){
        active = true;
        startBtn.textContent = 'Pause';
        interval = setInterval(startTimer, 100);
    }
    else {
        active = false;
        startBtn.textContent = 'Start';
        clearInterval(interval);
    }
    
}

