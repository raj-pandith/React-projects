import React, { useState } from 'react'
import '../pages/GamePage.css';
const RollDice = ({ num, getRandomDiceNumber, error, reset }) => {



    return (
        <div className='row'>
            <div className={`col d-flex flex-column align-items-center justify-content-center`} onClick={getRandomDiceNumber
            }>
                <img src={`./public/images/dice_${num}.png`} className='img-fluid dice' style={{ width: "160px" }} alt="" />
                <p className='p-2'>Click on Dice to roll</p>
                <button className=' reset-score-btn' onClick={() => reset()}>reset score</button>
            </div>
        </div>
    )
}

export default RollDice
