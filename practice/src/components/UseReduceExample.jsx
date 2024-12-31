/**
    useReducer : 
      used to manage the state (data and it's updatation)

 */

import React, { useReducer } from 'react'
let initState = { count: 0 };

/**
    in the reducer function : 
       we get state(current data) & action from the arg of dispatch function

 */
const reducer = (state, action) => {

    switch (action.type) {
        case '+': return { count: state.count + 1 };
        case '-': return { count: state.count - 1 };
        default: return { count: state.count };
    }
}


const UseReduceExample = () => {
    /**  state, function   =      return fun , init state  */
    let [state, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            Count : {state.count}
            <br />
            <button onClick={(e) => dispatch({ type: "+" })}>+</button>
            <button onClick={(e) => dispatch({ type: "-" })}>-</button>
        </div>
    )
}

export default UseReduceExample
