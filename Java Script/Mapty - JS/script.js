'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let map1;
let mapEvents;
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        const {latitude} = position.coords;
        const{longitude} = position.coords;
        
        const coords = [latitude,longitude];
        const dnl = [14.8673561,78.3691684];
        map1 = L.map('map').setView(dnl, 13);
        //  13 is zoom ration which fit perfect when it is loaded;
        //  L is the this keyword for the leaf open source API
        //  L.map sets the map in the given position here we gave the map to the last div of the html
        // 

        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map1);

        //  Changess to the pop up window to feel the ui better by using DOcs in leaflet

        map1.on('click',function(mapEv){
        mapEvents = mapEv;
        form.classList.remove('hidden');
        inputDistance.focus();
        // L.marker([lat,lng])
        // .addTo(map1)
        //     // .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        //     .bindPopup(L.popup({
        //         maxWidth:250,
        //         minWidth:50,
        //         autoClose:false,
        //         closeOnClick:false,
        //         className:'running-popup'
        //     }))
        //     .setPopupContent('Workout')
        //     .openPopup();
        })
    },function(){
        alert(`No location found`);
    })
}

form.addEventListener('submit',function(e){
    
    e.preventDefault();
    inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value = '';

    const {lat ,lng} = mapEvents.latlng;
     L.marker([lat,lng])
        .addTo(map1)
            // .bindPopup('A pretty CSS popup.<br> Easily customizable.')
            .bindPopup(L.popup({
                maxWidth:250,
                minWidth:50,
                autoClose:false,
                closeOnClick:false,
                className:'running-popup'
            }))
            .setPopupContent('Workout')
            .openPopup();

});

inputType.addEventListener('change',function(){
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
})