const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');



ctx.beginPath();
// ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2);
// ctx.rect(500,120,100,50);
ctx.stroke();

ctx.closePath();
















// // Function to start drawing
// function startDrawing(e) {
//     isDrawing = true;
//     draw(e);
// }

// // Function to end drawing
// function endDrawing() {
//     isDrawing = false;
//     ctx.beginPath();
// }

// // Function to draw
// function draw(e) {
//     if (!isDrawing) return;

//     ctx.lineWidth = 5;
//     ctx.lineCap = 'round';
//     ctx.strokeStyle = 'black';

//     ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
// }

// // Set up event listeners
// canvas.addEventListener('mousedown', startDrawing);
// canvas.addEventListener('mousemove', draw);
// canvas.addEventListener('mouseup', endDrawing);
// canvas.addEventListener('mouseout', endDrawing);

// // Initialize drawing state
// let isDrawing = false;
