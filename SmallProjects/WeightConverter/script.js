const weightKg =document.querySelector('.weight-in');
const weightPnds = document.querySelector('span');
const formE = document.querySelector('form');
const setWeight = function(){
    const weight = weightKg.value;
    
    const parsedWeight = Number.parseFloat(weight);
    console.log(parsedWeight);
    
    if(isNaN(parsedWeight)) return alert('Please enter only Numbers (23 , 56.5 etc.,)');

    const Formula = (parsedWeight * 2.20462).toFixed(1);
    
    weightPnds.textContent = Formula;
}
formE.addEventListener('submit',function(e){
    e.preventDefault();
    setWeight();
})
