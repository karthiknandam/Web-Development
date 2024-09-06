const imgArr = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwws3-sZJYreJ81v7TMaecLLm36FYKRxjQhQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66D5i-evBFaRAM6KZpf9JbPGNV4GPKAtqkGgXrZzInjUsjdqEfOXHB_boaNpepCuDvdA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq3caJN_R75vyhkIkN6sukhUyq2kYa7R1TCjQfbjoBTfiUDN7rIKGs8df12DKsdp_oma0&usqp=CAU',
    'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]
const nameArr = [
    'Joie',
    'Markus',
    'Zeis',
    'Karthik',
]
const fallBack = 'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const imageS = document.querySelector('.test-img');
const nameS = document.querySelector('.test-name');

let count = 0;

imageS.src = imageS.src || fallBack ;

const callBack = function(){
    
    imageS.src = imgArr[count];

    nameS.textContent = nameArr[count];
    count++;
    if(count >= imgArr.length) count = 0;
}
setInterval(callBack,3000);