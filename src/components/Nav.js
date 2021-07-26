import React from 'react'
import CartWiget from './CartWiget';


const Nav = () => {
    return (
        <>

<header class="navbar navbar-expand-lg navbar-light shadow-sm">
  <div class="container">      
    <a class="navbar-brand d-none d-lg-block order-lg-1" href="#">
      <img width="142" src="../img/coder.png" alt="Coderhouse"/>
    </a>
    <a class="navbar-brand d-lg-none me-2" href="#">
      <img width="74" src="./img/coder.png" alt="Cartzilla"/>
    </a>   
    
    <CartWiget />    
    
    
  </div>

</header>
        </>
    )
}

export default Nav