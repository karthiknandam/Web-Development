const xPosition = document.getElementById('xPosition');
const yPosition = document.getElementById('yPosition');
const score = document.getElementById('score');
let scoreValue = 0;
window.addEventListener('mousedown', (e) => {
   xPosition.textContent = e.clientX;
   yPosition.textContent = e.clientY;
   if(e.clientX === e.clientY)scoreValue++;
   score.textContent = scoreValue;
});