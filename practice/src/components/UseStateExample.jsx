import React, { useState } from 'react'
const UseStateExample = () => {
  let obj = {
    firstName: "",
    lastName: ""
  };

  const [details, setDetails] = useState(obj);

  let containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw"
  }


  return (
    <div style={containerStyle}>

      <input type="text" value={details.firstName} onChange={(e) => {
        setDetails({ firstName: e.target.value })
        console.log(details.firstName)
      }} placeholder='enter first name ' />
      <br />

      <input type="text"
        value={details.lastName}
        onChange={(e) => {
          setDetails({ lastName: e.target.value })
          console.log(details.lastName)
        }}
        placeholder='enter last name' />


    </div >
  )
}

export default UseStateExample

