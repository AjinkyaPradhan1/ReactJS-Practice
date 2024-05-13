import React, { useState } from "react";

const Clock = () => {
    
    let time = new Date().toLocaleTimeString();
    const [ctime,setTime] = useState(time);

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setTime(time)
    }
    setInterval(updateTime,1000)
    return(
        <h5>{ctime}</h5>
    )

};

export default Clock;