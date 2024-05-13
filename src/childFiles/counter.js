import React from "react";
import { useState } from "react";

const Counter = () => {
    const [cCount,setCount] = useState(0)

    const updateCount = () => {
        setCount(cCount + 1)
    }

    const decCount = () => {
        setCount(cCount - 1)
    }
    return(
        <div>
            Current Count = {cCount}&nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary" onClick={updateCount}>+</button>&nbsp;&nbsp;
            <button className="btn btn-primary" onClick={decCount}>-</button>
        </div>
    )
}

export default Counter;