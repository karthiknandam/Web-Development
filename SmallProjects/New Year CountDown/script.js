const hour = document.querySelector('.hour');
const minute = document.querySelector('.minutes');
const days = document.querySelector('.days');
const seconds = document.querySelector('.seconds');
const newYear = document.querySelector('.new-year');
const newYDate = new Date('2025-01-01');
const updateFn = function(){
    const date = new Date();

    let convertoMillies = (newYDate - date) ;
    if(!convertoMillies){
        newYear.textContent = 'Happy New Year 🎉';
        clearInterval(coutndown);
        return
    }
    const daysSet = Math.floor(convertoMillies / (1000 * 3600 * 24)).toString().padStart(2,0);
    // const remainingMilliesDays = convertoMillies % (1000 * 3600 * 24);
    const hoursSet = Math.floor((convertoMillies % (1000 * 3600 * 24) ) / (1000 * 60 * 60)).toString().padStart(2,0);
    // const remainingMilliesAfterHours = convertoMillies % (1000 * 60 * 60);
    const minutesSet = Math.floor((convertoMillies % (1000 * 60 * 60) ) / (1000 * 60)).toString().padStart(2,0);
    // const remainingMilliesAftMinutes = convertoMillies % (1000 * 60);
    const secSet = Math.floor((convertoMillies %  (1000 * 60))  / 1000).toString().padStart(2,0);
    
    days.textContent = daysSet;
    hour.textContent = hoursSet;
    minute.textContent = minutesSet;
    seconds.textContent = secSet;
    
}
const coutndown = setInterval( updateFn, 1000);

