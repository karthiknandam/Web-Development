const password = document.querySelector('.password-in');
const passwordCheck = document.querySelector('.passwrod-checker');


const updatePassword = function(message , color = 'red'){
    passwordCheck.textContent = message;
    passwordCheck.style.color = color;
}

const validatePassword = function(pas){
    if(pas.length < 6) return updatePassword('Password is too small' , 'black');

    if(pas.search(/[a-z]/) == -1) return updatePassword ('Password missing SmallCase');
    if(pas.search(/[A-Z]/) == -1) return updatePassword('Password missing UpperCase')
    if(pas.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\-\=\{\}\[\]\:\;\'\"\<\>\,\.\?\~\`\|\\]/) == -1)
         return updatePassword('Password Missing special Char');
    if(pas.search(/[0-9]/) == -1) return updatePassword('Password missing Number');

    password.classList.add('success');
    updatePassword('Password looks Great','green');

}

password.addEventListener('input',function(){
    password.classList.remove('success');
    validatePassword(password.value);
})

// ! Practice code use the above one for effective and optimised code;

// passwword.addEventListener('input',function(){
//     const passLen = passwword.value;

//         if(passLen.length < 6) {
//             passwordCheck.textContent = 'Passwrod is too small'
//             passwordCheck.style.color = 'black';
//         }
//         else{
//             passwword.classList.remove('success');
// // ! passLen.search(/[a-z]/) == -1 returns true if not mensioned them it wont
// // ! !passLen.search(/[a-z]/) this wont works here it wont exicute next commande it will stuck in that line only so better use the -1 command

//             if(passLen.search(/[a-z]/) == -1){
//                 // ^ if it is not there them do this otherWise do elseif
//                 passwordCheck.textContent = 'Password missing SmallCase';
//                 passwordCheck.style.color = 'red';
//             }
//             else if(passLen.search(/[A-Z]/) == -1){
//                 passwordCheck.textContent = 'Password missing UpperCase';
//                 passwordCheck.style.color = 'red';
//             }
//             else if(passLen.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\-\=\{\}\[\]\:\;\'\"\<\>\,\.\?\~\`\|\\]/) == -1){
//                 // ~ this part we see it is little bit tough but we can get them by adding all \ after each of element so we can get them
                
//                 passwordCheck.textContent = 'Password Missing special Char';
//                 passwordCheck.style.color = 'red';
//             }
//             else if(passLen.search(/[0-9]/) == -1){
//                 passwordCheck.textContent = 'Password missing Number';
//                 passwordCheck.style.color = 'red';
//             }
//             else{
//                 passwword.classList.add('success');
//                 passwordCheck.textContent = 'Password looks Great';
//                 passwordCheck.style.color = 'Green';
//             }
            
//         }
    

// })

