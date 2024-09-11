const item = document.querySelector('.item');
const box = document.querySelector('.box');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

function dragStart() {
    this.style.opacity = '0.5';
}

function dragEnd() {
    this.style.opacity = '1';
}

box.addEventListener('dragover', dragOver);
box.addEventListener('dragenter', dragEnter);
box.addEventListener('dragleave', dragLeave);
box.addEventListener('drop', drop);

function dragOver(e) {
    e.preventDefault();
    this.style.border = '5px dashed red';
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {
    this.style.border = '';
}

function drop() {
    this.style.border = '';
    this.append(item);
}
