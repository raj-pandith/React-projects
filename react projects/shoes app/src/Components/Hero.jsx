import React from 'react'
import './Hero.css'
const Hero = () => {
    return (
        <div className='container hero-container h-25 '>
            <div className='row'>
                <div className='col-sm order-2 order-md-first hero-content d-flex flex-column gap-2'>
                    <p>
                        YOUR FEET
                        DESERVE
                        THE BEST
                    </p>
                    <p className='w-md-75'>
                        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    </p>
                    <div className='d-flex gap-3'>
                        <button className='btn btn-danger rounded-0'>Shope Now</button>
                        <button className='btn rounded-0'>Category</button>
                    </div>
                    <div className=''>
                        <p>Also Available On</p>
                        <div className='d-flex gap-3'>
                            <img src="./public/images/flipkart.png" alt="" />
                            <img src="./public/images/amazon.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='col  d-flex align-items-center justify-content-center'>
                    <img src="./images/shoe_image.png" className='img-fluid hero-img' alt="" />
                </div>

            </div>
        </div>
    )
}

export default Hero
