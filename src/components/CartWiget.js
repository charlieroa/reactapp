import React from 'react'


const CartWiget = () => {
    return (
        <>

    
    <div class="navbar-toolbar d-flex align-items-center order-lg-3">  
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-tool" href="#">
        <div class="navbar-tool-icon-box"><i class="navbar-tool-icon ci-search"></i></div>
      </a>
      <a class="navbar-tool ms-1 me-n1" href="#">
        <div class="navbar-tool-icon-box">
          <i class="navbar-tool-icon ci-user"></i>
        </div>
      </a>
      <a class="navbar-tool ms-3" href="#">
        <div class="navbar-tool-icon-box bg-secondary">
          <span class="navbar-tool-label">4</span>
          <i class="navbar-tool-icon ci-cart"></i>
        </div>
      </a>
      
    </div>        
    
  
        </>
    )
}

export default CartWiget