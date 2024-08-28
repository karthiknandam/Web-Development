import View from "./View";
import icons from '../../img/icons.svg';
class RecipeResultsView extends View {
    _data;
    _ErrorMsg = 'Sorry We can\'t find the recipie Here ';
    _parentItem = document.querySelector('.results');

    _generateMarkup(){
        return this._data.map(this._generateResult).join('');
    }
    _generateResult(data){
        return `
        <li class="preview">
            <a class="preview__link preview__link--active" href="#${data.id}">
              <figure class="preview__fig">
                <img src="${data.image}" alt="${data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${data.title}</h4>
                <p class="preview__publisher">${data.publisher}</p>
                <div class="preview__user-generated">
                //   <svg>
                //     <use href="${icons}#icon-user"></use>
                //   </svg>
                </div>
              </div>
            </a>
          </li>
        `
    }
}
export default new RecipeResultsView();