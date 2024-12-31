import React, { useContext } from 'react'
import { LoginContext } from './ContextExample';
const Pagetwo = () => {
    const data = useContext(LoginContext);
    return (
        <div>
            page two <br />
            {data.name} <br />
            {data.age}
        </div>
    )
}

export default Pagetwo
