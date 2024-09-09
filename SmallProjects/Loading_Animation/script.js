const loading = document.querySelector('.loading');
const loadingText = document.querySelector('.loading-text');

let count = 0;
function updateUI(percentage){
    loading.style.width = `${percentage}%`;
    loadingText.textContent = `${percentage}%`;
}
function loadingAnimation(){
    count++;
    updateUI(count);
    if(count === 100){
        clearInterval(interval);
    }
}
const interval = setInterval(loadingAnimation, 50);

