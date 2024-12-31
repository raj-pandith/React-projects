import React, { useState, createContext } from 'react'

export const RajDetails = createContext();

const RajDetailsProvider = ({ children }) => {
     const [data, setData] = useState("hello world");
     return (
          <RajDetails.Provider value={data}>
               {children}
          </RajDetails.Provider>
     )
}

export default RajDetailsProvider
