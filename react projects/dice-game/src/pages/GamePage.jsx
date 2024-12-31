import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import RollDice from '../Components/RollDice.jsx'
import Rules from '../Components/Rules.jsx'
export default function GamePage() {

    let [score, setScore] = useState(0);
    let [selectNo, setSelectedNo] = useState(-1);
    let [num, setNum] = useState(1);
    let [error, setError] = useState(true);

    function reset() {
        setScore(0);
    }

    async function getRandomDiceNumber() {
        if (!error) {

            setTimeout(() => {
                let list = document.querySelector('.dice').classList;
                list.add('dice-animate');
                let min = 1, max = 7;
                let randNum = Math.floor(Math.random() * (max - min) + min);
                setNum(randNum);
                if (randNum == selectNo) {
                    setScore(prev => prev + selectNo);
                } else {
                    setScore(prev => prev - 2);
                }
                setError(true)
                setSelectedNo(-1);
            }, 100);
        }
        document.querySelector('.dice').classList.remove('dice-animate');
        // console.log(lsit);


    }

    return (
        <>
            <Header selectNo={selectNo} setSelectedNo={setSelectedNo} score={score} error={error} setError={setError} ></Header>
            <RollDice num={num} error={error} reset={reset} getRandomDiceNumber={getRandomDiceNumber}></RollDice>
            <Rules></Rules>
        </>
    )
}
