import { API_KEY , PER_PAGE} from "./config";
import { getURL } from "./helper";

export const state = {
     recipe : {},
     search :{
      query : '',
      results :[],
      requirePerPage : PER_PAGE,
      currPage : 1,
     }
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
    
    
  }catch(err){
    throw err;
  }
}

export const getRequiredPerPage = function(page = state.search.currPage ){
  state.search.currPage = page;
  const start = (page - 1)* state.search.requirePerPage;
  const last = (page)*state.search.requirePerPage;

  return state.search.results.slice(start , last);
}


