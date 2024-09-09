const button = document.querySelector('.buttons');
const carousel = document.querySelector('.carousel');
let count = 0;
function transformCarousel(){
    return carousel.style.transform = `translateX(-${count*450}px)`;
}
function clickHandler(e){
    const target = e.target.classList;
    if(target.contains('prev')){
        if(!count)return;
        count--;
        transformCarousel();
    }
    if(target.contains('next')){
        if(count === 4)return;
        count++;
        transformCarousel();
    }
}
button.addEventListener('click', (e) => clickHandler(e));


