'use strict';

// prettier-ignore

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
    date = new Date();
    id = (Date.now()+'').slice(-10);
    clicks = 0;
    constructor(coords , distance , duration){
        this.coords = coords;
        this.distance = distance;
        this.duration = duration;
    }
    _setData(){
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.details = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`
        // Here this.type value is not exist so we can call this method directly in the child / parent class construtor only like this._setData(); 
    }
    click(){
        this.clicks++;
    }
}

class Running extends Workout{
    type = 'running';
    constructor(coords , distance , duration , cadence){
        super(coords , distance,duration);
        this.cadence = cadence;
        this.calcPace();
        this._setData();
    }


    calcPace(){
        this.pace = (this.duration /this.distance );
    }
}
class Cycling extends Workout{
    type = 'cycling';
    constructor(coords , distance , duration , ElevationGain){
        super(coords , distance,duration);
        this.ElevationGain = ElevationGain;
        this.calcSpeed();
        this._setData();
    }
    calcSpeed(){
        this.speed = (this.distance) /(this.duration/60);
    }
};

class App{
    #map;
    #mapEvents;
    #workouts = [];

    constructor(){
        this._getPosition();
        // ~ constructor calls immediatly when the new object is created ;
        // ~ we use this kerword in the event listners as well as 
    
        this._getLocalStorage();

        form.addEventListener('submit',this._newWorkout.bind(this));
                
        inputType.addEventListener('change',this._toggleEleavationField)
                
        containerWorkouts.addEventListener('click',this._clickOnMap.bind(this));
    }
    _getPosition(){
        
        if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),
            // this in bind is used here to set this to this class where function declaration reffers to this to navigator object;

            //  Changes to the pop up window to feel the ui better by using DOcs in leaflet
            function(){
            alert(`No location found`);
                })
            }   
        }

    _loadMap(position){
            const{latitude} = position.coords;
            const{longitude} = position.coords;
            
            const coords = [latitude,longitude];
            const dnl = [14.8673561,78.3691684];
            // only to make sure to set the position to dnl;

            this.#map = L.map('map').setView(coords, 13);
            //  13 is zoom ration which fit perfect when it is loaded;
            //  L is the this keyword for the leaf open source API
            //  L.map sets the map in the given position here we gave the map to the last div of the html
    
            L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map);

            this.#map.on('click',this._showForm.bind(this));

            this.#workouts.pop();

            this.#workouts.forEach(work=>this._renderingWorkouts(work));
            
    }
    _showForm(mapEv){
            this.#mapEvents = mapEv;
            form.classList.remove('hidden');
            inputDistance.focus();
    }
    _toggleEleavationField(){
            inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
            inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }
    _hideForm(){
        inputDistance.value =
        inputDuration.value =
        inputCadence.value =
        inputElevation.value = '';

        form.style.display = 'none';
        // removing it so we cant see the animation 
        form.classList.add('hidden');

        setTimeout(()=>form.style.display = 'grid',1000);
        // adding here to see the animation after 1 second
        // make sure it is zugad only to add display grid not using any toggle key only using setTimeOut property by adding to grid after 1 sec;

    }
    _newWorkout(e){
    
            e.preventDefault();
            let worker;
            const {lat,lng} = this.#mapEvents.latlng;
            const type = inputType.value;

            const valuesCheck = (...input)=>input.every(inp=>Number.isFinite(inp));
            const intCheck = (...input)=>input.every(inp=>inp>0);
            // Imp to note to make coding life easy [every]
            const distance = +inputDistance.value;
            const duration = +inputDuration.value;
            // converting the values from string to number is important and isFInite checks if the value given is positive integer or not return boolean 
            if(type == 'running'){
                const cadence = +inputCadence.value;
                if(!valuesCheck(distance,duration,cadence) || !intCheck(distance,duration,cadence)) {return alert('Please enter valid integer');};
                worker = new Running([lat,lng],distance,duration,cadence);
            }
            if(type == 'cycling'){
                const elevation = +inputElevation.value;
                if(!valuesCheck(distance,duration,elevation)|| !intCheck(distance,duration) ){return alert('Please enter valid integer');};
                // Here elevation is in - ve so we added other method also 
                worker = new Cycling([lat,lng],distance,duration,elevation);
            }
            
            this.#workouts.push(worker);
            console.log(this.#workouts);
            
            this._renderingWorkouts(worker);
            this._renderForm(worker);
            this._hideForm();
            this._setLocalStorage();
            
            
        
    }
    _renderingWorkouts(worker){
        L.marker(worker.coords)
        .addTo(this.#map)
            // .bindPopup('A pretty CSS popup.<br> Easily customizable.')
            .bindPopup(L.popup({
                maxWidth:250,
                minWidth:50,
                autoClose:false,
                closeOnClick:false,
                className:`${worker.type}-popup`
            }))
            .setPopupContent(`${worker.type == 'running' ? '🏃‍♂️':'🚴‍♀️'} ${worker.details}`)
            .openPopup();
    }
    _renderForm(worker){
        let html = `
        <li class="workout workout--${worker.type}" data-id='${worker.id}'>
          <h2 class="workout__title">${worker.details}</h2>
          <div class="workout__details">
            <span class="workout__icon">${worker.type == 'running' ? '🏃‍♂️':'🚴‍♀️'}</span>
            <span class="workout__value">${worker.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${worker.duration}</span>
            <span class="workout__unit">min</span>
          </div>
        `
        if(worker.type == 'running'){
            html+=`
            <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${worker.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">🦶🏼</span>
                <span class="workout__value">${worker.cadence}</span>
                <span class="workout__unit">spm</span>
            </div>
            </li>
            `
        }
        if(worker.type == 'cycling'){
            html+=`
            <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${worker.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">⛰</span>
                <span class="workout__value">${worker.ElevationGain}</span>
                <span class="workout__unit">m</span>
            </div>
            </li>
            `
        }

        form.insertAdjacentHTML('afterend',html);
    }
    _clickOnMap(e){
        const workoutEl = e.target.closest('.workout');
        if(!workoutEl) return;
        const workoutFind = this.#workouts.find(el=>el.id === workoutEl.dataset.id);
        this.#map.setView(workoutFind.coords,13,{
            animate:true,
            pan:{
                duration:1,
            }
        });
    }
    _setLocalStorage(){
        localStorage.setItem('workouts',JSON.stringify(this.#workouts));
    }
    _getLocalStorage(){
        const data = JSON.parse(localStorage.getItem('workouts'));

        if(!data) return;

        this.#workouts = data;
        this.#workouts.forEach(work=>this._renderForm(work));
    }
    reset(){
        localStorage.removeItem('workouts');
        location.reload();
    }
}
const app = new App();





