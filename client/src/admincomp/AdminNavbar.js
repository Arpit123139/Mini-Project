import React from 'react'

const AdminNavbar = () => {
  return (
    
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="15"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
    
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:3000/index">home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:3000/signup">signup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:3000/signin">signin</a>
        </li>
      </ul>
    </div>
    </div>
</nav>

  )
}

export default AdminNavbar