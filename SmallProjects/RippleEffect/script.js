const btn = document.querySelector('.btn');
btn.addEventListener('click', rippleEffect); 
function rippleEffect(e){
    const circle = document.createElement('span');
    circle.className = 'circle';
    
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height );
    circle.style.width = circle.style.height  = size + 'px';

    // ~ imp ele of the entire section of code
    
    circle.style.top = e.clientY - rect.top - size / 2 + 'px';
    circle.style.left = e.clientX - rect.left - size / 2 + 'px';
    
    btn.appendChild(circle);
    
    // Remove the span element after the animation completes
    setTimeout(() => {
        circle.remove();
    }, 500); // 500ms matches the animation duration in the CSS
}