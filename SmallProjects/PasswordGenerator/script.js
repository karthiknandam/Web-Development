const password = document.querySelector('.password-input');
const lengthVal = document.querySelector('#length');
const uppercase = document.querySelector('#uppercase');
const lowercase = document.querySelector('#lowercase');
const numbers = document.querySelector('#numbers');
const symbols = document.querySelector('#symbols');
const generate = document.querySelector('.btn-gernerate');
const btnCopy = document.querySelector('.btn-copy');
// Uppercase letters (A-Z)
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Lowercase letters (a-z)
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

// Numbers (0-9)
const numbersStr = "0123456789";

// Special characters
const specialChars = "!@#$%^&*()_+{}[]<>?,./:;'\"|\\`~";

const getPass = function(){
    if(!uppercase.checked &&
        !lowercase.checked &&
        !numbers.checked &&
        !symbols.checked) throw new Error('Please select checkboxes To Generate');

    let pass = '';
    if(uppercase.checked) pass+=upperCaseLetters;
    if(lowercase.checked) pass+=lowerCaseLetters;
    if(numbers.checked) pass+=numbersStr;
    if(symbols.checked) pass+=specialChars;
    return pass;
}

const setPass = function(){
    try{
        const pass = getPass();
        
        let genPass = '';
        for(i=0;i<lengthVal.value;i++){
            const randVal = Math.floor(Math.random()*pass.length);
            genPass+=pass[randVal];
        }
        
        return password.value = genPass
    }catch(err){
        alert(err);
    }
}

generate.addEventListener('click',setPass);

btnCopy.addEventListener('click',function(){
    const el = password.value;
    if(!el) return alert('No Value Found Please Generate');
    navigator.clipboard.writeText(el)
    .then(()=>alert('Copied to clipboard'))
    .catch((err)=>{alert('Failed to copy the text : ',err)});
})
// ^ this thing is new for me navigator.clipbord.writeText(whatever you want-> returns a promise remember that;
