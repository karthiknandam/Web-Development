import {Fraction} from 'fractional';
import icons from '../../img/icons.svg';
import { mark } from 'regenerator-runtime';
import View from './View.js';

class RecipeView extends View{
    _data;
    _parentItem = document.querySelector('.recipe');
    _ErrorMsg = 'We can not find the Receipie , Try another Recepie for this time';
    _message = '';
    

    addHandlerRender(handler){
      ['hashchange','load'].forEach(el => window.addEventListener(el ,handler))
    }
    addHandlerServingSize(handler){
      this._parentItem.addEventListener('click',function(e){
        e.preventDefault();
        const data = e.target.closest('.btn--tiny');
        if(!data) return ;
        
        const {updateTo} = data.dataset;
        
        if(+updateTo > 0) handler(+updateTo);
  
      })
    }

    addHandlerBookmark(handler){
      this._parentItem.addEventListener('click',function(e){
        e.preventDefault();
        const btn = e.target.closest('.btn--round');

        if(!btn) return ;
                
        handler();
      })
    }
    _generateMarkup(){
        return `
      <figure class="recipe__fig">
          <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button data-update-to =${this._data.servings - 1} class="btn--tiny btn--update-servings">
                <svg>
                  <use href="${icons}#icon-minus-circle"></use>
                </svg>
              </button>
              <button data-update-to =${this._data.servings + 1} class="btn--tiny btn--update-servings">
                <svg>
                  <use href="${icons}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${icons}#icon-bookmark${this._data.bookmark ? "-fill" : ''}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          
          ${this._data.ingredients.map(this._generateMarkupIng).join('')}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">The Pioneer Woman</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>

    `;

    }
    _generateMarkupIng(ing){
            return `
                <li class="recipe__ingredient">
                <svg class="recipe__icon">
                  <use href="${icons}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${ing.quantity ? new Fraction(ing.quantity).toString() : ''}</div>
                <div class="recipe__description">
                  <span class="recipe__unit">${ing.unit}</span>
                  ${ing.description}
                </div>
              </li>
            `;
        }
    
}
export default  new RecipeView();

