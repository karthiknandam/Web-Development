const textAnimation = document.querySelector('.text-animation');

const text = textAnimation.textContent;
let count = 0;

function displayText(){
    textAnimation.textContent = text.slice(0,count);
    count++;
    if(count > text.length)count = 0;
}
setInterval(displayText,100);
