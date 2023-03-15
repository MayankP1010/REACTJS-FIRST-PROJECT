 import React from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
 import About from './About.js';
 import Meals from './Meals.js';
 import Drink from './Drink.js';
 import Home from './Home.js';
 import './Login.css'
 import './Home.css'

 const Nav=(props) => {
  

    return(

      <>
            
     
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <div class="container-fluid">
     <a class="navbar-brand" href="#">Prasthanam</a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
  
     <div class="collapse navbar-collapse" id="navbarSupportedContent">

       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
        <Link to="/About">About</Link> 
         </li>

         <li class="nav-item">
          <Link to="/Meals">Meals</Link>
            </li>
  
        
  
        <li class="nav-item">
          <Link to="/drinks">Drinks</Link>
           {/* <a class="nav-link active" href="#">Snacks</a> */}
         </li>

         <li class="nav-item">
          <Link to="/Cart">Cart</Link>
            </li>
           
       </ul>
     </div>
   </div>
 </nav>
 <button className="logout" > <Link to="/Home">LogOut</Link></button>   
 
  
     </>

   );
 }
 
 export default Nav;