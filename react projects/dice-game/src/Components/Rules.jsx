import React, { useState } from 'react'

const Rules = () => {
    let [show, setShow] = useState(false);
    return (
        <div className='row mt-2'>
            <div className='col d-flex flex-column align-items-center m' >
                <button className=' rounded-2 px-4' onClick={() => setShow(prev => !prev)}>{!show ? "Rules" : "Close Rules"}</button>
                {
                    show ? <div className='d-flex flex-column gap-2  px-4 py-2 mt-3' style={{ backgroundColor: "#FBF1F1" }}>
                        <h4>How to play dice game</h4>
                        <div className=''>
                            <p>Select any number</p>
                            <p>Click on dice image</p>
                            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                            <p>if you get wrong guess then  2 point will be dedcuted </p>
                        </div>
                    </div> : ""
                }
            </div>

        </div>
    )
}

export default Rules
