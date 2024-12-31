import React, { useCallback, useState } from 'react'
/**
     Usecallback() it is used to return the memoized function ,
       means no need to call the function again and again on each time of render 

       it is similar to useMemo , but it return the value not function 

         here we can pass the argument , but not in useMemo
    
*/
const UseCallbackExample = () => {

    let [num, setNum] = useState(1);
    let [them, setThem] = useState('light');
    let [tabel, setTable] = useState([]);



    const calculateTable = useCallback((value) => {
        setNum(value)
        return [num * 1, num * 2, num * 3, num * 4, num * 5];
    }, [num]);





    return (
        <div style={{
            height: "50vh", width: "200vh", backgroundColor: `${them == 'dark' ? 'black' : 'white'}`
        }}>


            <input type="number" onChange={(e) => setNum(e.target.value)} value={num} />
            {
                tabel.map(ele => {
                    (
                        <h1>{ele}</h1>
                    )
                })
            }

            <button onClick={them == 'dark' ? setThem('light') : setThem('dark')}>change Them </button>

        </div>
    )
}

export default UseCallbackExample
