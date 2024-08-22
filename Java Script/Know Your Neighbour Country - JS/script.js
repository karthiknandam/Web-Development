'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getCountry = function(data,value=''){

    const html = `
     <article class="country ${value}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${((+data.population)/(10000000)).toFixed(1)} M people</p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
            <p class="country__row"><span>💰</span>${Object.keys(data.currencies)[0]}</p>
          </div>
        </article>
    `;
    
    countriesContainer.insertAdjacentHTML('beforeend',html);
}

const errHandling = function(msg){
    countriesContainer.insertAdjacentText('beforeend',msg);
    countriesContainer.style.opacity = 1;
} 
// ^ Old method of calling the ajax calls;

// const getCountries = function(name){
// const region = new XMLHttpRequest();
// region.open('GET',`https://restcountries.com/v3.1/name/${name}`);
// region.send();
// region.addEventListener('load',function(){
//     const [data] = JSON.parse(this.responseText);
//     getCountry(data);
    

//     const data2 = data.borders?.[0];
    
//     const subRegion = new XMLHttpRequest();
//     subRegion.open('GET',`https://restcountries.com/v3.1/alpha/${data2}`);
//     subRegion.send();
//     subRegion.addEventListener('load',function(){
//         const [subName] = JSON.parse(this.responseText);
//         console.log(subName);
        
//         getCountry(subName,'neighbour');
//     })
    
// })
// };
// // getCountries('india');
// // getCountries('usa');
// getCountries('portugal');

// ^ New method of calling the ajax call; (Primise return and using the fetch and then method)
const throwErrfn = function(url , msg = 'Somthing not found'){
    return fetch(url).then(region => {
        if(!region.ok) throw new Error(msg);
       
        
        return region.json();

    });
}
const getUsingFetch = function(country){
    // fetch(`https://restcountries.com/v3.1/name/${country}`)
    // // -> return empty promise we need to store the emmpty by adding the then method
    // .then(region => region.json())
    throwErrfn(`https://restcountries.com/v3.1/name/${country}`,'Country was not found')
    .then(data=>{
        getCountry(data[0]);

        const nCountry = data[0].borders?.[0];
        console.log(nCountry);
        
        if(!nCountry) throw new Error('No Near country found');
        
        return throwErrfn(`https://restcountries.com/v3.1/alpha/${nCountry}`,'No country found');
    })
    // json() returns new promise values and returns the values of neighbour country
    .then(data => getCountry(data[0],'neighbour'))
    .catch(err=> {
        console.log(`${err.message} 💥💥💥`);
        errHandling(`Unable to proccess ${err.message}`)})
    // err returns the type of error which we are getting here;
    .finally(()=>{countriesContainer.style.opacity = 1;});
    // -> exicicute any thing we can specify the opacity so the we can skip the error opacity one and exicutes all values
};





///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
let click = 0;
const getLocation = navigator.geolocation.getCurrentPosition(
function(e){
  const{coords} = e;
  
   btn.addEventListener('click',()=>{
    click++;
    if(click>1)return;
    whereAmI(coords.latitude,coords.longitude);
});
  
},function(){
    alert('Turn On the Location');
    
});


const whereAmI = function(Latitude, Longitude){

    fetch(`https://geocode.xyz/${Latitude},${Longitude}?geoit=json`)
    .then(response=>{
        if(!response.ok) throw new Error('No loaction found **')
        return response.json()})
    .then(data => {
        if(!data.country) throw new Error('No country found');
        console.log(`You ara in ${data.city} and ${data.country}`);
        console.log(data);
        console.log(`https://geocode.xyz/${Latitude},${Longitude}?geoit=json`);
        getUsingFetch(data.country);
    })
    .catch(err=>console.error(err.message));

}

  

