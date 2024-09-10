const btns = document.querySelectorAll('.scroll-button');
const scrollImages = document.querySelector('.scroll-images');

let count = 0;

function updateUI(count){
    scrollImages.style.transform = `translateX(-${count*450}px)`;
    updateButtonStates();
}

// ^ we can disble it whenever the condition is true;

function updateButtonStates(){
    btns[0].disabled = count === 0;
    btns[1].disabled = count === scrollImages.children.length - 1;
}

function scrollDirection(direction){
    count+=direction;
    updateUI(count);
}

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        scrollDirection(btn.id === 'left' ? -1 : 1);
    })
})
