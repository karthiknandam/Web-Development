'use strict';


///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const learnMoreBtn = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelector('.operations__tab-container');
const contentOfTab = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

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


// ~ New code by Karthik ;

//^ Click on the learn more btn;


learnMoreBtn.addEventListener('click',function(e){
  // console.log(e.target.getBoundingClientRect());
  section1.scrollIntoView({behavior:"smooth"})
});

// ^

// ^ Using Event Deligation istead of forEach loop for time Complexity

document.querySelector('.nav__links').addEventListener('click',function(e){

  e.preventDefault();
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:"smooth"});
  }
});

// ^

// ^ Btn Tabbed component building ;



// 
tabsContent.addEventListener('click',(e)=>{
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // * assigning the null value to which it gonna clicked which return out of the function 

  if(!clicked)return;

  // * Removing the default behaviour and adding the clicked behaviour

  tabs.forEach(e=>e.classList.remove('operations__tab--active'));
  contentOfTab.forEach(c=>c.classList.remove('operations__content--active'))


  clicked.classList.add('operations__tab--active');
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');


})


// ^



// ^ nav ELement 

const handlerEvnetNav = function(e){

  if(e.target.classList.contains('nav__link')){

    const link = e.target;
    const reminingLinks = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    
      reminingLinks.forEach(l=>{
        if(l !== link)l.style.opacity = this;
      })
      logo.style.opacity = this;
    
  }

}

nav.addEventListener('mouseover',handlerEvnetNav.bind(0.5));
nav.addEventListener('mouseout',handlerEvnetNav.bind(1));


// ^ TO make nav sticky at the end of the section-1;
const section1Coords = section1.getBoundingClientRect();

window.addEventListener('scroll',()=>{
  
  // console.log(section1Coords.top);

  if(window.scrollY > section1Coords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
  
  
})


















// const ev = ()=>{
//   alert("XYZ")};
// const h1 = document.querySelector('h1');
// h1.add


// EventListener('mouseenter',ev);
// setTimeout(()=>{
//   h1.removeEventListener('mouseenter',ev);
// },3000)

// // ~ for Each loop for the nav links ;

// document.querySelectorAll('.nav__link').forEach((el)=>{
//   console.log(el.getAttribute('href'));
  
//   el.addEventListener('click',(e)=>{

//     e.preventDefault();
    
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior:"smooth"});
//   })
// });

// // *
//                                   VS
//                                                                     // *

// // ^ Using Event Deligation istead of forEach loop for time Complexity

// document.querySelector('.nav__links').addEventListener('click',function(e){

//   e.preventDefault();
//   if(e.target.classList.contains('nav__link')){
//     console.log(e.currentTarget , "target",e.target);
    
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior:"smooth"});
//   }
// });

// const h1 = document.querySelector('h1');
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.childElementCount);

// console.log(h1.parentNode);
// console.log(h1.closest('.header'));
// console.log(h1.closest('.header').children);
// console.log(h1.parentElement);

// console.log(h1.nextElementSibling);
//  console.log("This are vars");
//  console.log([...h1.parentElement.children]);
 
// [...h1.parentElement.children].forEach((e)=>{
 
//   if(e!=h1){
//     e.style.backgroundColor ='var(--color-tertiary-darker)'
//   }
  
// })









