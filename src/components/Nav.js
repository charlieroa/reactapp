import React from 'react'
import CartWiget from './CartWiget';


const Nav = () => {
    return (
        <>

<header className="navbar navbar-expand-lg navbar-light shadow-sm">
  <div className="container">      
    <a className="navbar-brand d-none d-lg-block order-lg-1" href="#">
      <p>CoderHouse</p>
    </a>
    <a className="navbar-brand d-lg-none me-2" href="#">
      <img width="74" src="./img/coder.png" alt="Cartzilla"/>
    </a>   
    
    <CartWiget />    
    
    
  </div>

</header>
        </>
    )
}

export default Nav