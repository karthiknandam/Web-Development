import icons from '../../img/icons.svg';
import { PER_PAGE } from '../config.js';

import View from './View.js';


class PaginationView extends View{
    _data;
    _parentItem = document.querySelector('.pagination');
    
    _generateMarkup(){

        const renderData = this._data.results;
        const current = +(this._data.currPage);
        const requiredPages = Math.ceil(renderData.length / PER_PAGE);
        console.log(requiredPages , current);
        
        if(current === 1 && requiredPages > 1 ){
            return `
            <button data-goto = ${current+1} class="btn--inline pagination__btn--next">
                <span>Page ${current+1}</span>
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
          `
        }
        
        if(current === requiredPages){
            return `
            <button data-goto = ${current-1} class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${current-1}</span>
            </button>
          
            `
        }
        if(current < requiredPages){
           
            return `
            <button data-goto = ${current-1} class="btn--inline pagination__btn--prev">
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

        return '';
    }
    addHanlderClick(handler){
        this._parentItem.addEventListener('click',function(e){
            e.preventDefault();
            const data = e.target.closest('.btn--inline');
            
            if(!data) return;
            const btn = data.dataset.goto;

            handler(btn);

        })

    }
}
export default new PaginationView();