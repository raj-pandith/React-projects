import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
/**
    useLayoutEffect is same as useEffect 

     but useLayout run first than the useEffect , 
     useLayout is used to desing the component/DOM with the help of useRef()
     
     but maximum time we use useEffect only , 
     in case where useEffect is not working , at that time we use useLayoutEffect
     
     modifining DOM using the useEffect and useRef would be gives glich 
       hence we use at that time useLayoutEffect() with useRef , as shown in below example

 */
const UseLayoutExample = () => {
    let [show, setShow] = useState(false);
    let display = useRef();

    useEffect(() => {
        console.log("useEffect")

    }, [show]);

    // it runs first even if the useEffect writen first
    useLayoutEffect(() => {
        console.log("useLayout")

        if (display.current != null) {

            const dim = display.current.getBoundingClientRect();
            display.current.style.paddingTop = `${dim.height}px`;
            console.log(dim);

        }

    }, [show]);

    return (
        <div>
            <button onClick={() => setShow(!show)}>{show ? "Hide" : "show"}</button>
            <br />
            {
                show ? <h1 ref={display} >hello world</h1> : ""
            }

        </div>
    )
}

export default UseLayoutExample
