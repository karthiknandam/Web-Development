const otpInputs = document.querySelectorAll('.otp-input');
function optFunction(index){
    return setTimeout(()=>otpInputs[index].focus(),100)
}
otpInputs.forEach((input, index) => {
    input.addEventListener('keydown',(e)=>{
        if(!/^[0-9]$/.test(e.key) && !['Backspace', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            e.preventDefault();
            return;
        }
        if(e.key>= 0 && e.key<= 9 && index < otpInputs.length - 1){
            optFunction(index + 1);
        }
        if(e.key === 'Backspace' && index > 0){
            optFunction(index - 1);
        }
        if(e.key === 'ArrowRight' && index < otpInputs.length - 1){
            e.preventDefault();
            optFunction(index + 1);
        }
        if(e.key === 'ArrowLeft' && index > 0){
            e.preventDefault();
            optFunction(index - 1);
        }
    })
})
// ? Using the e.preventDefault() for the sake of controlling the value override the default properties of the arrow keys and backspace
// ^ prevent default is optional so that it moves exactly to the next input value;
// ^ same for the left arrow;
// !The Reason for this ;
// ^the arrow right and left keys are occuring after the input text which means they are coming up with the text after foucs for instancce |5 in this case icant able to backspace it

