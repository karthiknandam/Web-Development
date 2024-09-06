const container = document.querySelector('.container');
const loadAn = document.querySelector('.load-animation');
const elements = Array.from({length:50},(_,i)=>`<div class="numbers">${i+1}</div>`).join('');

// ^ i know this method is false in the case of the large size application 1) HTML 2) CSS 3}JS loads niw it takes time in large size applications

container.insertAdjacentHTML('afterbegin',elements);

window.addEventListener('scroll',function(){ 
    const percentage = (this.window.scrollY  / (this.document.body.scrollHeight - this.window.innerHeight))*100;
    
    loadAn.style.width = `${percentage}%`;
});


