import icons from '../../img/icons.svg';
import { PER_PAGE } from '../config.js';

import View from './View.js';


class PaginationView extends View{
    _data;
    _parentItem = document.querySelector('.pagination');
    
    _generateMarkup(){

        const renderData = this._data.results;
        // Receving total data of serches so that we can get values of curr and req and all results
        const current = +(this._data.page);
        // converting value from string to number using + operator 
        const requiredPages = Math.ceil(renderData.length / PER_PAGE);

        if(current === 1 && requiredPages > 1 ){
            return `
            <button data-goto = "${current+1}" class="btn--inline pagination__btn--next">
                <span>Page ${current+1}</span>
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
          `
        }
        
        if(current === requiredPages && requiredPages > 1 ){
            return `
            <button data-goto ="${current-1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${current-1}</span>
            </button>
          
            `
        }
        if(current < requiredPages){
           
            return `
            <button data-goto = "${current-1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${current-1}</span>
            </button>
            <button data-goto = ${current+1} class="btn--inline pagination__btn--next">
                <span>Page ${current+1}</span>
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
            `
        }

        return ' ';
    }
    // handler recives the function we called in the controller and gets the handler parameter is modifies here so make sure we use the parameter there 
    addHanlderClick(handler){
        this._parentItem.addEventListener('click',function(e){
            e.preventDefault();
            const data = e.target.closest('.btn--inline');
            
            if(!data) return;
            const btn = +(data.dataset.goto);

            handler(btn);
            // const controlPagination = function(page){
            //   recipeResultsView.render(model.getRequiredPerPage(page));
                
            //   paginationView.render(model.state.search);
            //~ Here page is noted as btn and act as the btn cause we mensioned in the controller it is important
            // !  paginationView.addHanlderClick(controlPagination); } <Important to be noted >

        })

    }
}
export default new PaginationView();