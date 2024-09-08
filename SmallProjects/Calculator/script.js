const allButtons = document.querySelector('.all-el');
const inputEl = document.querySelector('.input-el');
const operators = ['%','*','-','+','/','='];


allButtons.addEventListener('click',function(el){

    const val = el.target.closest('.common-input');

    if(val) {
        if(inputEl.value === '' && operators.includes(val.value)) return;
        inputEl.value+=val.value;
    }    
        if(el.target.value === '=' ){
            try{
                inputEl.value = eval(inputEl.value);
            }catch(error){
                inputEl.value = 'Error';
            }   
        }
        //  inputEl.value = Function('"use strict";return (' + inputEl.value + ')')();
        if(el.target.value === 'AC') inputEl.value = '';
        if(el.target.value === 'DEL') inputEl.value = inputEl.value.slice(0,-1);
    
})


