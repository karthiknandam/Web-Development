import recipeView from './view/recipeView.js';
import searchView from './view/searchView.js';
import paginationView from './view/paginationView.js';
// It is used because we are implimenting the icons which are not available in the dis folder so that we can get acces from the 
// Above folder from the parent folder which means those path is undefined there "before"
import * as model from './model.js'
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeResultsView from './view/recipeResultsView.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
if(module.hot){
  module.hot.accept();
}

const controlRecipe = async function(){
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
    recipeView.renderError();
  }
};


const searchRecipe = async function(){
  try{
    const query = searchView.getQuery();
    recipeResultsView.renderSpinner();
    await model.searchRecipe(query);


    recipeResultsView.render(model.getRequiredPerPage(3));
    
    paginationView.render(model.state.search);
  }
  catch(err){
    recipeResultsView.renderError();
  }
}
const controlPagination = function(page){
  recipeResultsView.render(model.getRequiredPerPage(page));
    
  paginationView.render(model.state.search);
}

const init = function(){
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(searchRecipe);
  paginationView.addHanlderClick(controlPagination);
}
init();