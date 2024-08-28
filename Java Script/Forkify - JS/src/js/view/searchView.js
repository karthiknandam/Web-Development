
class SearchView {

    _parentElement = document.querySelector('.search');

    getQuery(){
        const selector =  this._parentElement.querySelector('.search__field').value;
        this._clear();
        return selector;
    }

    _clear(){
        this._parentElement.querySelector('.search__field').value = '';
    }

    addHandlerSearch(handler){
        // 1) preventing the defalut value gives us to make the submit buttion not to load the web again and again 

        this._parentElement.addEventListener('submit',function(e){
            e.preventDefault();
            handler();
            // 2) Here we call the function so that it will exicute the given function because we store the e value in the parameter so  
            //     we can not pass the value there we must given the function call not the var call here
        });
    }
}

export default new SearchView();