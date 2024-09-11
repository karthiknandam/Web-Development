const inputSec = document.querySelector('.input-sec'); 
const btnAdd = document.querySelector('.btn-add');
const taskSec = document.querySelector('.tasks');

function focus(){
    inputSec.value = '';
    inputSec.focus();
}
function addTask (){
    const {value} = inputSec;
    if(!value) return;
    const html = `
    <div class="add-in-sec">
        <p class="list-sec">${value}</p>
        <button class="btn btn-remove">Remove</button>            
    </div>
    `
    taskSec.insertAdjacentHTML('afterbegin',html);
    focus();
};

function removeTask(e){
    const target = e.target.closest('.btn-remove');
    if(!target) return;
    const taskToRemove = target.parentNode;
    taskToRemove.remove();
}
taskSec.addEventListener('click',removeTask)
btnAdd.addEventListener('click',addTask);