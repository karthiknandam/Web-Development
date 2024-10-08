const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');


setInterval(()=>{
    const date = new Date();
    hours.textContent = date.getHours().toString().padStart(2, '0');
    minutes.textContent = date.getMinutes().toString().padStart(2, '0');
    seconds.textContent = date.getSeconds().toString().padStart(2, '0');
},1000)

// ^ this method is used to format the date and time in a specific format and it is used to display the date and time in a specific format;

const newDate = new Intl.DateTimeFormat('en-us',{
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit',
    hour12:true
 }).format(new Date());
 console.log(newDate);