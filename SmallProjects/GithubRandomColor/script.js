const container = document.querySelector('.container');
const colors = ['#012901','#025202','#81a981','#e6eee6'];
const days = 365;

function setColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

function setBoxes(){
    for(let i = 0; i < days; i++){
        const box = `<div class="box" style="background-color: ${setColor()}"></div>`;
        container.innerHTML += box;
    }
}

// function setBoxes(){
//     const fragment = document.createDocumentFragment();
//     for(let i = 0 ; i < days ; i++){
//         const box = document.createElement('div');
//         box.classlist.add('box');
//         box.style.backgroundColor = setColor();
//         fragment.appendChild(box);
//     }
//     container.appendChild(fragment);
// };

setBoxes();
