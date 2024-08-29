import { API_KEY , PER_PAGE} from "./config";
import { getURL } from "./helper";

export const state = {
     recipe : {},
     search :{
      query : '',
      results :[],
      requirePerPage : PER_PAGE,
      page : 1,
     },
     bookmarks :[]
}

export const loadRecipie =  async function(id){
    try{

    const data = await getURL(`${API_KEY}/${id}`);

    // Calling it and storing it so that below code can get access to this using async function ;

    const {recipe}  = data.data;
    
    state.recipe = {
      id:recipe.id,
      title : recipe.title,
      publisher : recipe.publisher,
      sourceUrl : recipe.source_url,
      image : recipe.image_url,
      servings : recipe.servings,
      cookingTime : recipe.cooking_time,
      ingredients : recipe.ingredients,
    }

    if(state.bookmarks.some(bookmark => bookmark.id===id)){
      state.recipe.bookmark = true;
    }
    else{
      state.recipe.bookmark = false;
    }
}
catch(err){
    console.error(`${err} 💋💋`);
    throw err;
}

}

export const searchRecipe =  async function(item){
  try{
  
    console.log(item); 
    const data = await getURL(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${item}`);
    
    state.search.query = item;
    
    const {recipes}  = data.data;
    
    state.search.results = recipes.map((item) => ({
      id: item.id,
      image: item.image_url,
      publisher: item.publisher,
      title: item.title,
    }))

    state.search.page = 1; 
    // bug to get the value back to the page - 1;

  }catch(err){
    throw err;
  }
}

// ^ Setting the arr values to be fixed -> implies proper arrangment of the section

export const getRequiredPerPage = function(page = state.search.page ){
  state.search.page = page;
  // IMP to store the value -> 
  const start = (page - 1)* state.search.requirePerPage;
  const last = (page)*state.search.requirePerPage;

  return state.search.results.slice(start , last);
}

export const getServingSize =  function(numServ){
  state.recipe.ingredients.forEach((ing)=>{
    ing.quantity = ing.quantity * numServ / state.recipe.servings;
  });

  state.recipe.servings  = numServ;
}
const parseStorage = function(){
  localStorage.setItem('bookmark',JSON.stringify(state.bookmarks));
}

export const getStorage = function(){
  state.bookmarks = JSON.parse(localStorage.getItem('bookmark'));
}
export const updateBookmark = function(recipe){
  state.bookmarks.push(recipe);
  console.log(state.bookmarks);
  if(recipe.id === state.recipe.id) state.recipe.bookmark = true;

  parseStorage();
}

export const deleteBookmark = function(id){

  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index,index+1);

  if(id === state.recipe.id) state.recipe.bookmark = false;

  parseStorage();
}

