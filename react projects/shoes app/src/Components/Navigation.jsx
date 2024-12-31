import React from 'react'
import '../Components/Navigation.css'

const Navigation = () => {

    return (
        <nav class="navbar navbar-expand-lg  header-containe container ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="./public/images/brand_logo.png" alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-md-auto  gap-md-5 mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">LOCATON</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">ABOUT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">CONTACT</a>
                        </li>
                    </ul>
                    <div class="mt-4 bg-danger text-light py-1 px-3   d-flex justify-content-start pe-3 align-items-center">Login</div>
                </div>
            </div>
        </nav >
    )
}

export default Navigation
