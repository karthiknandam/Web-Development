const innerContent = document.querySelectorAll('.inner-content');
innerContent.forEach(el=>{
    
});
function removeActive(){
    innerContent.forEach(content => {
        content.classList.remove('active');
    });
}
innerContent.forEach(content => {
    content.addEventListener('click', () => {
        removeActive();
        content.classList.add('active');
    });
});