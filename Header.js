class Header extends HTMLElement {
    connectedCallback() {
       this.innerHTML = `
       <nav class="navbar bg-dark" data-bs-theme="dark">          
       <ul class="nav nav-pills">
       <li class="nav-item">
         <a class="nav-link" aria-current="page" href="/index.html">Home</a>
       </li>
       <li class="nav-item dropdown">
         <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">GitHub Projects</a>
         <ul class="dropdown-menu">
           <li><a class="dropdown-item" href="projects/Pacman.html">Pac-Man Exercise</a></li>
           <li><a class="dropdown-item" href="projects/Eyes.html">Eyes Exercise</a></li>
           <li><a class="dropdown-item" href="projects/Bus.html">Real Time Bus Tracking</a></li>
           <li><hr class="dropdown-divider"></li>
           <li><a class="dropdown-item" href="https://github.com/Beechcreech" target="_blank">GitHub</a></li>
         </ul>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="/bio.html">Bio</a>
       </li>
     </ul>     
     </nav>
      `; 
    }
  }

  customElements.define('main-header', Header);