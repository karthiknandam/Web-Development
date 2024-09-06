const container = document.querySelector('.container');
const header  = document.querySelector('header');
const observeFunction = function(entries){
    const [entry] = entries;
    console.log(entries);
    
    console.log(entry.isIntersecting);
    
    if(entry.isIntersecting) header.classList.remove('sticky');
    else header.classList.add('sticky');

}

const observerOptions = {
    root:null,
    threshold:0,
    rootMargin:'-50px',
};

const observerHeader = new IntersectionObserver(observeFunction, observerOptions);

observerHeader.observe(container);