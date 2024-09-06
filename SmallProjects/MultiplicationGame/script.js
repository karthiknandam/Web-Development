const numberIn = document.querySelector('#number-input');
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const scoreIn = document.querySelector('.score-in');
const btnS = document.querySelector('.submit-btn');


let score = 0;
const setFn = function(){
    const n1 = +num1.textContent
    const n2 = +num2.textContent
    if(n1*n2  === (+numberIn.value)) score++;
    scoreIn.textContent = score;
    const rand1 = Math.floor(Math.random() *10);
    const rand2 = Math.floor(Math.random() *10); 
    num1.textContent = rand1;
    num2.textContent = rand2;
}


btnS.addEventListener('click',function(e){
    e.preventDefault();
    setFn();
})
