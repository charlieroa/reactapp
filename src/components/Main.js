import React from 'react'


const Main = (props) => {
    return (
        <>
  
  <section className="bg-darker py-5 py-lg-10 background-ecommerce">
      <div className="container pb-5">
        <div className="row justify-content-center pb-5">
          <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10 text-center">
            <h5 className="text-light fw-light">Bienvenido</h5>
            <div className="h1 text-light mb-3 pb-4">{props.titulo}             
            </div><a className="btn btn-primary" href="#cuisine" data-scroll>Ver productos</a>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default Main
