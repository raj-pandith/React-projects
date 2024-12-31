import React, { useMemo, useState } from 'react'
/**
      useMemo() is used when the complex calculation is to be done , which takes lot of time , 
      it return the memoized value , means no need to calculate and get the value each time on render

      it increase performance and decrease delay 

      useEffect() can also be used but with the useState to store the result 

 */



const UseMemoExample = () => {
    let [helo, setHello] = useState(false);

    const ans = useMemo(() => {
        console.log("loop started"); for (let i = 0; i < 100000; i++) { };
    }, [helo])

    return (
        <div>
            <button onClick={() => { setHello(!helo) }}>hello</button>
            {

                helo ? <h1>task done</h1> : ""

            }
        </div>
    )
}

export default UseMemoExample
