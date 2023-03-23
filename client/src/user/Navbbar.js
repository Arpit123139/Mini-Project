import React, { useEffect, useState } from 'react'
import { NavLink, useParams,useHistory } from 'react-router-dom'
const AdminNavbar = () => {
  const [getuserdata, setDiseasedata] = useState([]);
  console.log(getuserdata);

  const { id } = useParams("");
  console.log(id);
  
  const history = useHistory("");

  const getdata = async () => {

      const res = await fetch(`/getuserdata/${id}`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 422 || !data) {
          console.log("error ");

      } else {
          setDiseasedata(data)
          console.log("get data");
      }
  }

  useEffect(() => {
      getdata();
  }, [])



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

        <a class="nav-link" href={`/uhome/${id}`}>home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href={`http://localhost:3000/profile/${id}`}> profile view</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href={`http://localhost:3000/uhome/${id}`}>records</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href={`http://localhost:3000/uhome/${id}`}>skin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href={`http://localhost:3000/uhome/${id}`}>heart</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href={`http://localhost:3000/uhome/${id}`}>diabetes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:3000/index">logout</a>
        </li>
      </ul>
    </div>
    </div>
</nav>

  )
}

export default AdminNavbar