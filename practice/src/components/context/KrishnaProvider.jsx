import React, { createContext, useState } from 'react'

export const Krishna = createContext();

const KrishnaProvider = ({ children }) => {

    let [krishnaDetails, setKrishnaDetails] = useState({
        firstName: "krishna",
        lastName: "pandith",
        rollNo: 21,
        age: 20,
        gender: "male"
    })

    return (
        <Krishna.Provider value={krishnaDetails}>
            {children}
        </Krishna.Provider>
    )
}

export default KrishnaProvider
