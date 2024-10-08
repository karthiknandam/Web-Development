const dateInput = document.getElementById('date-input');
const yearsValue = document.getElementById('years');
const monthsValue = document.getElementById('months');
const daysValue = document.getElementById('days');

const btns = document.querySelector('.btn');


const currentDate = new Date().toISOString().split('T')[0];
console.log(currentDate);

btns.addEventListener('click',calcAge);

function calcAge(){
    const inputDate = dateInput.value;
    if(!validateDate(inputDate)) return alert('Please enter a valid date');
    const age = getAge(inputDate , currentDate);
    displayAge(age);
}

function validateDate(date){
    return date === '' || date > currentDate ? false : true;
}
function getAge(dateInputX , dateNowX){

    // ^ here we are converting the string to date object to acces the value of the date
    // ^ we are using the new Date() to create a new date object
    // ^ we are using the split('T')[0] to get the date part of the date object
    // ^ we are using the toISOString() to get the date object in string format

    const date = new Date(dateInputX);
    const currentDate = new Date(dateNowX);
    const calcDate = currentDate - date;
    const oneDay = 1000 * 60 * 60 * 24;
    const days = Math.floor(calcDate / oneDay);
    const years = Math.floor(days / 365);
    const months = Math.floor(days % 365 / 30);
    const remainingDays = Math.floor(days % 365 % 30);
    console.log(days , years , months , remainingDays);
    return {years , months , remainingDays};

    // ^ sending the data in the form of the object because we cant send them in the format of string;
}


function displayAge({years,months,remainingDays}){

    // ^here we are getting the values of the parameters from the return statemnet of the getAge()

    yearsValue.textContent = years;
    monthsValue.textContent = months;
    daysValue.textContent = remainingDays;  

}