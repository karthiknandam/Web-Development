import View from "./View";
import icons from '../../img/icons.svg';
class previewRecipeView extends View {
    _parentItem = '';
    _data;
    _generateMarkup(){
      const id = window.location.hash.slice(1);
      console.log(this._data.title);
      
        return `
        <li class="preview">
            <a class="preview__link ${ id === this._data.id ? "preview__link--active" :' '}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
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
export default new previewRecipeView();