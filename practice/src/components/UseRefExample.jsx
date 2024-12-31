
/**
   useRef : 
     used to get the element in a variable     
     and change any style 
      eg : inputElement.current.style.background = inputElement.current.style.background == "red" ? "green" : "red"

     it can also used a variable , to prevent automaticity re-rendering continuously
     means , it allow us to create a mutable variable with don't cause re-render
     it is very useful  to directly access DOM elements

 */
import React, { useEffect, useState, useRef } from 'react'
const UseRefExample = () => {
    let [name, setName] = useState("");


    // let count = useRef(0);
    // useEffect(() => {
    //     count.current = count.current + 1;
    // }, [name])



    let inputElement = useRef();
    let btn = useRef();


    return (
        <div>
            {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(count => count + 1)}>+</button>
            <br />
            <input type="text" value={count.current} /> */}

            <div style={{ width: "30vw", height: "30vh", background: "red" }} ref={inputElement}>

            </div>
            <button ref={btn} style={{ background: "green" }} onClick={() => {
                console.log(inputElement);
                inputElement.current.style.background = inputElement.current.style.background == "red" ? "green" : "red"
                btn.current.style.background = btn.current.style.background == 'green' ? "red" : "green";
            }}> green</button>

        </div>
    )
}

export default UseRefExample
