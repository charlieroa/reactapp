import React from 'react'
import CartWiget from './CartWiget';
import logo from '../assets/img/logo.png';
import {Link,} from "react-router-dom";


const NavBar = () => {
    return (
        <div>
                <header className="navbar navbar-expand-lg navbar-light shadow-sm">
  <div className="container">      
  <Link to="/" className="navbar-brand d-none d-sm-block me-4 order-lg-1">
    <img src={logo} width="142" alt="Cartzilla"></img>  
  </Link> 
      <a className="navbar-brand d-lg-none me-2" href="#">
        <img width="74" src="./img/coder.png" alt="Cartzilla"/>
      </a>   
    <div class="collapse navbar-collapse me-auto order-lg-2" id="navbarCollapse">
    <ul className="navbar-nav navbar-mega-nav">
    <li className="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Categorias</a>
          <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="docs/dev-setup.html">prueba</a></li>
         </ul>
      </li>
    </ul>    
      <ul className="navbar-nav">      
      <li className="nav-item dropdown">
      <Link to="/contacto" className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Contáctanos</Link>
      </li>
      </ul>
    
    </div>
    <CartWiget />        
    
  </div>

</header>
        </div>
    )
}

export default NavBar
