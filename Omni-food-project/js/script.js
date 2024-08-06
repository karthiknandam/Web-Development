///////////////////////////////////////////////////////////

// * Adding click event to nav button

const btns = document.querySelector(".menu-btns");
const header = document.querySelector(".header")
btns.addEventListener('click',()=>{
  header.classList.toggle("nav-open");
})

// * Add smooth transition to the links;

const links = document.querySelectorAll("a:link");
links.forEach( (href)=>{
  href.addEventListener("click",function(e){
    e.preventDefault();
    const link = href.getAttribute("href");
    console.log(link);
    
    if(link === "#"){
      window.scrollTo({
        top:0, 
        behavior:"smooth"
      })
    }
    
    if(link !== "#" && link.startsWith("#")){
      const scroll = document.querySelector(link);
      scroll.scrollIntoView({behavior:"smooth"});
      
    }
    if(href.classList.contains("nav-link")){
      header.classList.toggle("nav-open");
    }
    
  })
  
})


// * Sticky nav bar element

const sectionEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function(entries) {
    const ent = entries[0];
    if(ent.isIntersecting == false)
      document.querySelector("body").classList.add("sticky");
    if(ent.isIntersecting){
      document.querySelector("body").classList.remove("sticky");
    }
  },
  {
    root:null,
    threshold:0,
    rootMargin:"-19%",
  }
);
obs.observe(sectionEl);



// * Set the current year 

document.querySelector(".year-update").textContent = new Date().getFullYear();


// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();




