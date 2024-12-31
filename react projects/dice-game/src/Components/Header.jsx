import React, { useState } from 'react'
import '../pages/GamePage.css';
const Header = ({ selectNo, setSelectedNo, score, error, setError }) => {

    let nums = [1, 2, 3, 4, 5, 6];
    // let [selectNo, setSelectedNo] = useState(-1);

    let selectedDice = "px-4 fw-bolder fs-1 border-dark border bg-dark text-white";
    let unselectedDice = "px-4 fw-bolder fs-1 border-dark border";

    return (
        <div className='row p-5'>
            <div className='col-lg-2'>
                <div className='px-4' style={{ fontSize: "70px", fontWeight: 700 }}>
                    {score}
                </div>
                <p className='text-dark fw-bolder'>
                    Total Score
                </p>
            </div>
            <div className='col offset-lg-5 d-lg-flex justify-content-end flex-column align-items-end'>
                {
                    error ? <div className='text-danger'>
                        You have not any selected number !
                    </div> : ""
                }

                <div className='d-flex gap-1 flex-wrap  justify-content-center dice-container '>
                    {
                        nums.map((ele, key) => {
                            return (
                                <div className={selectNo == ele ? selectedDice : unselectedDice} key={key} onClick={() => {
                                    setSelectedNo(ele);
                                    setError(!error);
                                }}>{ele}</div>
                            )
                        })
                    }
                </div>
                <p className='d-flex justify-content-end fw-bolder mt-2'>
                    Select Number
                </p>
            </div>
        </div >
    )
}

export default Header
