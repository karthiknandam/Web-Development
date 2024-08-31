import View from "./View";
import icons from '../../img/icons.svg';

class AddRecipeView extends View{
    _parentItem = document.querySelector('.upload');
    _btnAdd = document.querySelector('.nav__btn--add-recipe');
    _overlay = document.querySelector('.overlay');
    _openWindow = document.querySelector('.add-recipe-window');
    _closeWindow = document.querySelector('.btn--close-modal');
    _uploadData = document.querySelector('.upload__btn');
    
    // we need to import the value object in the constructor othewise it wont works 

    constructor(){
        super();
        // We must call this super key otherwise below keys do not exicicte;

        this._removeClassHidden();
        this._addClassHidden();
    }
    addHandlerRecipes(handler){
        // !imp
        
        // here we are selecting the entire parent elemnet so there is no need to select the upload btn here we can simply select the parent el and submit works for all el 
        // we can use this keyword as this as parent here

        this._parentItem.addEventListener('submit',function(e){

            e.preventDefault();

            const dataArr = [...new FormData(this)];
            const data = Object.fromEntries(dataArr);
            console.log(Object.entries(data));
            
            // form entries gives us total entries in from array to object by easily converting them using keys and values
            // we must call this in this way otherwise it will return th object itself[... then value]
            
            handler(data);
            
        })
        
        
    }
    _getData(){
        const dataArr = [...new FormData(this._parentItem)];
        const data = Object.fromEntries(dataArr);
    }
    _togglerFuntion(){
        this._overlay.classList.toggle('hidden');
        this._openWindow.classList.toggle('hidden');
    }
    _removeClassHidden(){
        this._btnAdd.addEventListener('click',this._togglerFuntion.bind(this))
    }

    _addClassHidden(){
        this._overlay.addEventListener('click',this._togglerFuntion.bind(this));
        this._closeWindow.addEventListener('click',this._togglerFuntion.bind(this));
    }

}
export default new AddRecipeView();