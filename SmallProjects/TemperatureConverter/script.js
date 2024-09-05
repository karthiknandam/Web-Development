const celsius = document.querySelector('#celsius'); 
const kelvin = document.querySelector('#kelvin');
const farenheit = document.querySelector('#farenheit');

const arr = [celsius,kelvin,farenheit];
const calcFn = function(temp){
    const value = parseFloat(temp.value);
    if(isNaN(value)) return;
    if(temp==celsius){
        kelvin.value = (value + 273.15).toFixed(2);
        farenheit.value = ((value * 9/5) + 32).toFixed(2);
    }
    else if(temp==kelvin){
        celsius.value = (value-273.15).toFixed(2);
        farenheit.value = ((celsius.value * 9/5) + 32).toFixed(2);
    }
    else if(temp===farenheit){
        celsius.value =((value - 32) * (5/9)).toFixed(2);
        kelvin.value = ((value - 32 * (5/9)) + 273.15).toFixed(2);
        // ! here we must input the val all el otherwise it ill throw err not works properly
    }
}
arr.forEach(temp =>{
    temp.addEventListener('input',function(){
        calcFn(temp);
    })
})
// const form = document.querySelector('form');

// form.addEventListener('input',function(){

// })