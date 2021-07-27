import React from 'react'


const CartWiget = () => {
    return (
        <>

    
    <div className="navbar-toolbar d-flex align-items-center order-lg-3">  
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-tool" href="#">
        <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-search"></i></div>
      </a>
      <a className="navbar-tool ms-1 me-n1" href="#">
        <div className="navbar-tool-icon-box">
          <i className="navbar-tool-icon ci-user"></i>
        </div>
      </a>
      <a className="navbar-tool ms-3" href="#">
        <div className="navbar-tool-icon-box bg-secondary">
          <span className="navbar-tool-label">4</span>
          <i className="navbar-tool-icon ci-cart"></i>
        </div>
      </a>
      
    </div>        
    
  
        </>
    )
}

export default CartWiget