import View from "./View";
import icons from '../../img/icons.svg';
import previewRecipieView from "./previewRecipieView";
class bookmarkView extends View {
    _data;
    _ErrorMsg = 'No recepies found , Add your favorate recepi right now';
    _parentItem = document.querySelector('.bookmarks__list');

    addHandlerBookmark(handler){
        window.addEventListener('load',handler);
    }
    // For loading the data of local storage ;
    _generateMarkup(){
        return this._data.map(data => previewRecipieView.render(data,false)).join('');
    }
}
export default new bookmarkView();