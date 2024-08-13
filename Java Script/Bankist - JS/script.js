'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');



// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

const openIn = function(){
  modal.classList.remove ('hidden');
  overlay.classList.remove  ('hidden');
}

const closeIn = function(){
  modal.classList.add  ('hidden');
  overlay.classList.add  ('hidden');
}

for(let i=0 ; i<btnsOpenModal.length ; i++)
  btnsOpenModal[i].addEventListener('click',openIn);

btnCloseModal.addEventListener('click',closeIn);

overlay.addEventListener('click', closeIn);

document.addEventListener('keydown', function(e){
  if(e.key==='Escape' && !modal.classList.contains('hidden')) closeIn();
})

// btnsOpenModal.addEventListener('click',openIn);


// ^ New code by Karthik ;

// ~ Click on the learn more btn;

const learnMoreBtn = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

learnMoreBtn.addEventListener('click',function(e){
  // console.log(e.target.getBoundingClientRect());
  section1.scrollIntoView({behavior:"smooth"})
})

const h1 = document.querySelector('h1');
h1.addEventListener('mouseover',()=>{
  alert("XYZ");
})