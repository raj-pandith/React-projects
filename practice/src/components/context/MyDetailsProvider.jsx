// creating a seperate files for providing the details 
import React, { createContext, useState } from 'react'

export const MyDetails = createContext();

// create a provider and use it 
const MyDetailsProvider = ({ children }) => {

    let [data, setData] = useState({ name: "raj pandith", gender: "male", collage: "ACSCE" })
    return (
        <MyDetails.Provider value={data}>
            {children}
        </MyDetails.Provider>
    )
}

export default MyDetailsProvider
