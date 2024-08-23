'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = Number(document.querySelector('.score').textContent);
let initialScore = Number(document.querySelector('.score').textContent);
let initialMessage = document.querySelector('.message').textContent;
let initialSecretNum = document.querySelector('.number').textContent;            
let highScore = 0;

console.log(secretNumber , 'input value');

document.querySelector('.check').addEventListener('click',function(){

    const inputValue = Number(document.querySelector('.guess').value);
    console.log(inputValue ,typeof inputValue);
    
        if(!inputValue){
            document.querySelector('.message').textContent = 'No Value';
        }
        else if (inputValue===secretNumber){
            if(score>1){
                document.querySelector('.message').textContent = 'You win';
                document.querySelector('.number').textContent = secretNumber;            
                document.querySelector('body').style.backgroundColor = 'green';
                document.querySelector('.number').style.width = '20rem';            

                if ( score >  highScore ){
                    highScore = score;
                    document.querySelector('.highscore').textContent = highScore;
                }

            }
        }
        else if (inputValue>secretNumber){
            if(score>1){
            document.querySelector('.message').textContent= 'Too High Value..'
            score--;
            document.querySelector('.score').textContent = score;
            } else{
            document.querySelector('.message').textContent= 'You Lost the Game'
            document.querySelector('.score').textContent = 0;
            }
        }
        else if(inputValue<secretNumber){
            if(score>1){
            document.querySelector('.message').textContent= 'Too Low Value..'
            score--;
            document.querySelector('.score').textContent = score;
            } else{
            document.querySelector('.message').textContent= 'You Lost the Game'
            document.querySelector('.score').textContent = 0;
            }
        }
}
);

document.querySelector('.again').addEventListener('click' , function(){
    // document.querySelector('body').textContent;
    // document.querySelector('.highscore').textContent=score;
    document.querySelector('.guess').value='';
    score=initialScore;
    document.querySelector('.message').textContent=initialMessage;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = initialSecretNum;
    secretNumber = Math.trunc(Math.random()*20)+1;
    console.log(secretNumber);
    document.querySelector('.number').style.width = '15rem'; 
});
