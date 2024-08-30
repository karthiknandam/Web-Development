import icons from '../../img/icons.svg';
export default class View{
    _data;
    render(data , render = true){
      if(!data || (Array.isArray(data) && data.length === 0)) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        if(!render) return markup;
        
        // We should return markup for other values so that it can addopt the values of the markup ++ brick by brick;

        this._clear();
        this._parentItem.insertAdjacentHTML('afterbegin',markup);
    }
    // ! Difficult part of the section please try to understand;
    update(data){
      this._data = data;
      const renderEl = this._generateMarkup();
      const newDom = document.createRange().createContextualFragment(renderEl);
      const newNode = Array.from(newDom.querySelectorAll('*'));
      const currNode = Array.from(this._parentItem.querySelectorAll('*'));
      
      newNode.forEach((newEl,i)=>{
        const currEl = currNode[i]
        if(!newEl.isEqualNode(currEl)  && newEl.firstChild.nodeValue.trim()!=='')
        {
          // console.log(newEl.firstChild.nodeValue.trim());
          // console.log(newEl.firstChild.textContent.trim());
          // Both are same here;

          currEl.textContent = newEl.textContent;
        }

        if(!newEl.isEqualNode(currEl)){
          // To set the attributes of data set so that it can change the values of them 
          Array.from(newEl.attributes).forEach(attr=>{
            currEl.setAttribute(attr.name , attr.value);
          })

        }
      })
      
    }
    
    _clear(){
        this._parentItem.innerHTML = '';
    }
    
    // Load animation function 

    renderSpinner(){
        const markup = `
            <div class="spinner">
                <svg>
                    <use href="${icons}#icon-loader"></use>
                </svg>
            </div>
        `;
        this._clear();
        this._parentItem.insertAdjacentHTML('afterbegin',markup);
    }
    renderError(message = this._ErrorMsg){
        const markup = `
            <div class="error">
              <div>
                <svg>
                  <use href="${icons}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${message}</p>
            </div>
        `
        this._clear();
        this._parentItem.insertAdjacentHTML('afterbegin',markup);
      }
  
      renderMessage(message = this._message){
        const markup = `
            <div class="message">
              <div>
                <svg>
                  <use href="${icons}#icon-smile"></use>
                </svg>
              </div>
              <p>${message}</p>
            </div>
        `
        this._clear();
        this._parentItem.insertAdjacentHTML('afterbegin',markup);
      }
}