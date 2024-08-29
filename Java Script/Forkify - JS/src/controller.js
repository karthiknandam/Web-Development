import recipeView from './view/recipeView.js';
import searchView from './view/searchView.js';
import paginationView from './view/paginationView.js';
// It is used because we are implimenting the icons which are not available in the dis folder so that we can get acces from the 
// Above folder from the parent folder which means those path is undefined there "before"
import * as model from './model.js'
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeResultsView from './view/recipeResultsView.js';
import bookmarkView from './view/bookmarkView.js';
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

    
    bookmarkView.update(model.state.bookmarks);
    // 0)
    recipeResultsView.update(model.getRequiredPerPage());
    // 1)
    await model.loadRecipie(id);
    // 2)
    //  we must use the await call in order to take the actions from the async function from another async function
    recipeView.render(model.state.recipe);
    
    model.getStorage();
  }
  catch(err){
    console.error(err);
    
    recipeView.renderError();
  }
};


const controlSearchRecipe = async function(){
  try{
    
    const query = searchView.getQuery();
    recipeResultsView.renderSpinner();
    await model.searchRecipe(query);

    recipeResultsView.render(model.getRequiredPerPage());
    
    paginationView.render(model.state.search);
  }
  catch(err){    
    console.error(err);
    
    recipeResultsView.renderError();
  }
}

// ~ Imp
const controlPagination = function(page){
  recipeResultsView.render(model.getRequiredPerPage(page));
    
  paginationView.render(model.state.search);
}




const controlServings = function(serving){
  model.getServingSize(serving);
  // we used to update the value here as well so we overwrite the previous one 
  recipeView.update(model.state.recipe);
}


const controlBookmark = function(){
  if(!model.state.recipe.bookmark)
  model.updateBookmark(model.state.recipe);
  else{
    model.deleteBookmark(model.state.recipe.id);
  }
  recipeView.render(model.state.recipe);
  bookmarkView.render(model.state.bookmarks);

}

const controlStorage = function(){
  bookmarkView.render(model.state.bookmarks);
  // -> add before all the load happens it is imp 
}

const init = function(){
  bookmarkView.addHandlerBookmark(controlStorage);
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerServingSize(controlServings);
  recipeView.addHandlerBookmark(controlBookmark)
  searchView.addHandlerSearch(controlSearchRecipe);
  paginationView.addHanlderClick(controlPagination);
 
}
init();