import React, { createContext } from 'react'
import PageOne from './PageOne';

// creating a data warhouse 
export const LoginContext = createContext();

const ContextExample = () => {
    return (
        <div>
            context provider talking

            {/* the value present in provider will share the value to all the nested components  */}
            <LoginContext.Provider value={{ name: "raj panidth", age: 22 }}>

                <PageOne />
                {/* this nested created component will create a Context(warehouse name) and use the value */}

            </LoginContext.Provider>

        </div>
    )
}

export default ContextExample
