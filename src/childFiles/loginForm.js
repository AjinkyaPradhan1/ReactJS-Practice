import React from "react"
import { useState } from "react"

const LoginForm = () =>{
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('12345')

    const handleNameChange = (e) => {
        const nameC = setUsername(e.target.value)
        if(nameC==="Ajinkya"){
            console.log("Same hai bhai")
        }
    }
    

    return(
        <div className="login">
            <form>
                <input 
                type="text"
                value={username}
                onChange={handleNameChange}
                    onClick={handleNameChange}
                />
            </form>
        </div>
    )
    

}

export default LoginForm;