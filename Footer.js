class Footer extends HTMLElement {
    connectedCallback() {
       this.innerHTML = `          
       <h1>This is a footer</h1>  
      `; 
    }
  }

  customElements.define('main-footer', Footer);