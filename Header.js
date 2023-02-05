class Header extends HTMLElement {
    connectedCallback() {
     /* this.innerHTML = `           
        <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#" ">GitHub Projects</a>
          <ul>
            <li><a href="#">Pac-Man Exercise</a></li>
            <li><a href="#">Eyes Exercise</a></li>
            <li><a href="#">Real Time Bus Tracking</a></li>
            <li><a href="https://github.com/Beechcreech" target="_blank">GitHub</a></li>
          </ul>
        </li>
        <li>
          <a href="bio.html">Bio</a>
        </li>
      </ul>      
      `; */
       this.innerHTML = `   
       <header>        
       <ul class="nav nav-pills">
       <li class="nav-item">
         <a class="nav-link" aria-current="page" href="#">Home</a>
       </li>
       <li class="nav-item dropdown">
         <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">GitHub Projects</a>
         <ul class="dropdown-menu">
           <li><a class="dropdown-item" href="#">Pac-Man Exercise</a></li>
           <li><a class="dropdown-item" href="#">Eyes Exercise</a></li>
           <li><a class="dropdown-item" href="#">Real Time Bus Tracking</a></li>
           <li><hr class="dropdown-divider"></li>
           <li><a class="dropdown-item" href="https://github.com/Beechcreech" target="_blank">GitHub</a></li>
         </ul>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="bio.html">Bio</a>
       </li>
     </ul> 
     </header>       
      `; 
    }
  }

  customElements.define('main-header', Header);