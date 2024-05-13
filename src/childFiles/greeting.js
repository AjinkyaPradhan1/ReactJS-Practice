import React from "react";
import { useState } from "react";
import './../App.css';

const Greeting = () =>{

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [dob,setDob] = useState('')
    
    return(
    <div className="greeting">
        

        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input 
                    type="email" 
                    class="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email" 
                    value = {email}    
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                <br/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input 
                    type="password" 
                    class="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <br/>

            <div class="form-group">
                <label for="exampleInputDOB">Date of Birth</label>
                <input 
                    type="date" 
                    class="form-control" 
                    id="exampleInputDOB" 
                    placeholder="Date of Birth"
                    value={dob}
                    onChange={(e)=>setDob(e.target.value)}
                />
            </div>

            <br/>
            {/* <button type="submit" class="btn btn-primary">Submit</button> */}
        </form>

       
        <div>
            Email:{email}<br/>
            Password : {password}<br/>
            Date of Birth : {dob}
        </div>
    </div>
    )
}

export default Greeting;