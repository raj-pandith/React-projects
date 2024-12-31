import React, { useState, useEffect } from 'react'

const UseEffectExample = () => {

  let [data, setData] = useState({ name: "" });

  // this function will take two args ,
  // arg1 : fuction of what task to be done 
  // arg2 : dependency => [],[data] telling that when to perform the arg1 function 

  useEffect(() => {
    console.log("data is changed")
    return () => {
      console.log("clean up")
    };
  }, [data]);

  return (
    <div>
      <input type="text" placeholder='Enter Name ' value={data.name}
        onChange={(e) => {
          setData({ name: e.target.value });
          console.log(data.name);
        }}
      />
    </div>
  )
}

export default UseEffectExample
