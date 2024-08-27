export const state = {
     recipe : {}
}

export const loadRecipie =  async function(id){
    const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=<insert your key>`);
    const data = await res.json();
    if(!res.ok) throw new Error(`${res.status}`);

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