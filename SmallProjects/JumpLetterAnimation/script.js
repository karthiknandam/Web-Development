const spans = document.querySelectorAll('span');

spans.forEach(el=>{
    el.addEventListener('click',function(){
        el.classList.toggle('active');
    })
})

// ^ display: inline-block; for the span elements is important beacuse without inline-block we cant add nothing from block elemenets
