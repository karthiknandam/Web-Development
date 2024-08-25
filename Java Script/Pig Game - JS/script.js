'use strict';

// declare the values to the classs or id's

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const btnNew = document.querySelector('.btn--new')

const btnRoll = document.querySelector('.btn--roll')

const btnHold = document.querySelector('.btn--hold')
let boolValue;
let mainValue;
let totalValue;
let activeValue;
const callInIt = function(){
     boolValue = true;
     mainValue = [0 , 0];
    score0El.textContent=0;
    score1El.textContent=0;
    diceEl.classList.add('hidden');
    
     totalValue = 0;
     activeValue = 0;
    
    current0El.textContent = 0;
    current1El.textContent = 0;
    document.querySelector(`#name--0`).textContent = 'PLAYER 1'
    document.querySelector(`#name--1`).textContent = 'PLAYER 2'

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};

callInIt();

const callElseBlock = function(){
    document.querySelector(`#current--${activeValue}`).textContent = 0;
    totalValue=0;
    activeValue= activeValue===0?1:0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click' , function(){

    if(boolValue){
    diceEl.classList.remove('hidden');
    const dice = Math.trunc(Math.random()*6)+1;
    diceEl.src=`dice-${dice}.png`;
    
    if(dice!==1){

        totalValue+=dice;
        document.querySelector(`#current--${activeValue}`).textContent=totalValue;
        // current0El.textContent = totalValue;
    }else{
        callElseBlock();
    }
}
});

btnHold.addEventListener('click' , function(){
    if(boolValue){
    mainValue[activeValue] += totalValue;
    document.querySelector(`#score--${activeValue}`).textContent = mainValue[activeValue];
    if(mainValue[activeValue]>=100){
        boolValue = false;
        document.querySelector(`#name--${activeValue}`).textContent='You Won';
        document.querySelector(`#current--${activeValue}`).textContent=0;
        document.querySelector(`.player--${activeValue}`).classList.add('player--winner');
        document.querySelector(`.player--${activeValue}`).classList.remove('player--active');        
        // document.querySelector('.player--active').classList.add('hidden');
        diceEl.classList.add('hidden');

    }
    else{
        callElseBlock();   
    }
    }
});

btnNew.addEventListener('click',callInIt);




