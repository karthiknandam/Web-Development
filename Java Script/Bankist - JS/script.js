'use strict';


///////////////////////////////////////
// Modal window
//* #4bbb7d Main section #4bbb7d

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

const header = document.querySelector('.header');

const sectionScroll =  document.querySelectorAll('.section');
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

//^ #ffcb03 Click on the learn more btn #ffcb03


learnMoreBtn.addEventListener('click',function(e){
  // console.log(e.target.getBoundingClientRect());
  section1.scrollIntoView({behavior:"smooth"})
});

// ^

// ^ #ffcb03 Using Event Deligation istead of forEach loop for time Complexity #ffcb03

document.querySelector('.nav__links').addEventListener('click',function(e){

  e.preventDefault();
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:"smooth"});
  }
});

// ^

// ^ #ffcb03 Btn Tabbed component building #ffcb03 ;



// 
tabsContent.addEventListener('click',(e)=>{
  const clicked = e.target.closest('.operations__tab');

  // * assigning the null value to which it gonna clicked which return out of the function 

  if(!clicked)return;

  // * Removing the default behaviour and adding the clicked behaviour

  tabs.forEach(e=>e.classList.remove('operations__tab--active'));
  contentOfTab.forEach(c=>c.classList.remove('operations__content--active'))


  clicked.classList.add('operations__tab--active');
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');


})


// ^



// ^ #ffcb03 nav ELement hover stage #ffcb03

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




// ^
// ^ #ffcb03 TO make nav sticky at the end of the section-1;-> (Intersection Observer ;) #ffcb03


const navHeight = nav.getBoundingClientRect().height;



const observerFunction = (events)=>{
  const [event] = events;
  if(!event.isIntersecting) nav.classList.add('sticky'); // -> Become false after it reaches to the certain position 
  else nav.classList.remove('sticky');
  
  }


const headerObserve = new IntersectionObserver(
  observerFunction,
{
root:null, // -> calls the total view port window 
threshold:0,  // -> set to ocupy total view port or else/Outside of the section which is observed in 169 calls/shoots -> isIntersecting to falls
rootMargin:`-${navHeight}px`
// rootMargin:'-150px' // -> Starts exicicuting the value or function before the 80 px make sure that it is in the px format other wise it wont works
}

);


headerObserve.observe(header);




// ^ #ffcb03 Make section hidden and add the remove the section hidden when it is in view port-> (Intersection Observer ;) #ffcb03
const secFunction = function (entries , observer) {
  const [entrie] = entries;
  
  if(!entrie.isIntersecting) return;
  entrie.target.classList.remove('section--hidden');
  observer.unobserve(entrie.target);
}
const secObserver = new IntersectionObserver(secFunction , {
  root:null,
  threshold:0.15,
});


sectionScroll.forEach(section=>{
  section.classList.add('section--hidden');
  secObserver.observe(section);
})

// ^ #ffcb03 Make Img hidden and add the remove the Img hidden when it is in view port-> (Intersection Observer ;) #ffcb03

const imagesScroll = document.querySelectorAll('img[data-src]');// -> important element in the selection of inside element by which we are going to select all the elm by the node list

const imgSecFn = function(entries , observer ){
  const [entrie] = entries;
  if(!entrie.isIntersecting) return;

  entrie.target.src = entrie.target.dataset.src;

  entrie.target.addEventListener('load',function(){
    entrie.target.classList.remove('lazy-img');
  });
  observer.unobserve(entrie.target);
}
const imgObs = new IntersectionObserver(imgSecFn , {
  root:null,
  threshold:0.4,
  rootMargin:'200px',// -> works before it reaches (add 200px to 0.4 above )to 200 px which includes log ;
})

imagesScroll.forEach(img=>{
  imgObs.observe(img);
});


// ^ #ffcb03 Interactive section with btns and reverse actions #ffcb03
const slideSection = function(){
const slides = document.querySelectorAll('.slide');
const slideLeftBtn = document.querySelector('.slider__btn--left');
const slideRightBtn = document.querySelector('.slider__btn--right');
const dotsContainer = document.querySelector('.dots');


const btnSection = function(){
  slides.forEach(function(_,i){
    dotsContainer.insertAdjacentHTML('beforeend',`
    <button class="dots__dot" data-slide="${i}"></button>
    `);
  })
};

// * Dots

const currentDot = function(slide){
  document.querySelectorAll('.dots__dot').forEach(e=>{
    e.classList.remove('dots__dot--active');
  });
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
};


// * main translate function 

const goToNext = function(slide){
  slides.forEach((e,i)=>{
    e.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};


let count = 0;

// * Right 

const RightClick = ()=>{
  if(count===(slides.length-1))count=0;
  else count++;
  currentDot(count);
  goToNext(count);
};

// * Left

const LeftClick = ()=>{
  if(count===0)count=2;
  else count--;
  currentDot(count);
  goToNext(count);
};

// *Init call - simply calling all simple function in init function to make code more simple to read and understood

const init = function(){
  btnSection();
  currentDot(0);
  goToNext(0);
}
init();


slideRightBtn.addEventListener('click',RightClick );
slideLeftBtn.addEventListener('click',LeftClick);

// * Key press events 

document.addEventListener('keydown',function(e){
  if(e.key == 'ArrowRight')RightClick();
  if(e.key == 'ArrowLeft')LeftClick();
  
})

dotsContainer.addEventListener('click',(e)=>{
  if(e.target.classList.contains('dots__dot')){
    const {slide} = e.target.dataset; // -> Important for destructuring the dataSet ;
    currentDot(slide);
    goToNext(slide);
  }
  
});
};

slideSection();  // -> for ease identification


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



// ^ TO make nav sticky at the end of the section-1;
// const section1Coords = section1.getBoundingClientRect();

// window.addEventListener('scroll',()=>{
  
//   // console.log(section1Coords.top);

//   if(window.scrollY > section1Coords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
  
  
// })







