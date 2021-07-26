import React from 'react'


const Main = (props) => {
    return (
        <>
  
  <section class="bg-darker py-5 py-lg-10 background-ecommerce">
      <div class="container pb-5">
        <div class="row justify-content-center pb-5">
          <div class="col-xl-6 col-lg-7 col-md-8 col-sm-10 text-center">
            <h5 class="text-light fw-light">Bienvenido</h5>
            <div class="h1 text-light mb-3 pb-4">{props.titulo}             
            </div><a class="btn btn-primary" href="#cuisine" data-scroll>Ver productos</a>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default Main
