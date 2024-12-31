import React from 'react'
import './Home.css'
const Home = ({ toggle }) => {
    return (
        <div className='row'>
            <div className='col-lg-5 d-flex align-items-center justify-content-center'>
                <img src="../public/images/dice.png" className='img-fluid' alt="" />
            </div>
            <div className='col-lg-4 d-lg-flex flex-column align-items-end justify-content-center' style={{ height: "100vh" }} >
                <h1 style={{ fontSize: "70px", fontWeight: "700" }}>DICE GAME</h1>
                <div className='d-flex  justify-content-end'>
                    <button className='border-1 border-dark px-5 py-2 bg-dark text-white play-btn' onClick={() => toggle()} >Play Now</button>
                </div>
            </div>
        </div>
    )
}

export default Home
