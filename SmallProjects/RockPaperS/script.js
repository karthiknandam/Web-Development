const emojis = document.querySelector('.emojis');
const result = document.querySelector('.result');
const gameIcons = ['✊','✋','🖖'];
let playerPoints = 0;
let computerPoints = 0;
let won = true;
let draw = false;
function getComputerVal(){
    const randomIndex = Math.floor(Math.random()*gameIcons.length);
    const icon = gameIcons[randomIndex];
    return {randomIndex,icon};
};

function setScore(yourval,compval){
    draw = false;
    const playerScore = document.querySelector('.player-score');
    const computerScore = document.querySelector('.computer-score');
    // !IMP FORMULA TO REMEMBER
    const result = (yourval - compval + 3) % 3;
    
    if (result === 1) {
        won = true;
        playerPoints++;
        playerScore.textContent = playerPoints;
    } else if (result === 2) {
        won = false;
        computerPoints++;
        computerScore.textContent = computerPoints;
    }else{
        draw = true;
    }
}
function displayVal(e){
    const target = e.target.dataset.num
    const {randomIndex,icon} = getComputerVal();
    setScore(target,randomIndex);  
    result.textContent = draw ? 'Your Match is Draw' : `You chose ${gameIcons[target]} and Computer chose ${icon} You ${won ? 'WON' : 'LOST'}`;
};

emojis.addEventListener('click',displayVal)