import recipeView from './view/recipeView.js';

// It is used because we are implimenting the icons which are not available in the dis folder so that we can get acces from the 
// Above folder from the parent folder which means those path is undefined there "before"
import * as model from './model.js'
import 'core-js/stable';
import 'regenerator-runtime/runtime';


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const serchRecepies = async function(){
  try{
    // Generally use to load the animation before the content load
  
    const id = window.location.hash.slice(1);
    
    // Basically what location does is takes the what ever has was occoured in the search engine we can get acces to that
    // https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/"""22649549""""#overview 
    // for example this """  one we can get access to that 

    
    if(!id) return;
    recipeView.renderSpinner();
    
    await model.loadRecipie(id);

    //  we must use the await call in order to take the actions from the async function from another async function
    recipeView.render(model.state.recipe);
  
    
  }
  catch(err){
    alert(err)
  }
};

['hashchange','load'].forEach(ev => window.addEventListener(ev,serchRecepies));
