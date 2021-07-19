import React from 'react'

const Header = () => {
    return (
        <>
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Ecommerce CoderHouse</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Link1</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Link2</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Link3</a>
                        </li>
                    </ul>     
                </div>
        </div>
        </>
    )
}

export default Header
