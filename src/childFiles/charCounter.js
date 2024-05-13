import { useState } from "react";
import {toast} from "react-toastify";

const CharCounter = () => {

    const [str1,setStr1] = useState("")
    

    return(
        <div className="counterClass">
            <form>
                <label>String Length Checker</label><br/>
                <input 
                type="text"
                placeholder="Enter a string"
                value={str1}
                onChange={(e)=>setStr1(e.target.value)}
                maxLength={100}
                />
            </form>

            <br/>

            <div>
            Length of String : {str1.length}
            </div>


        </div>  
    );
}

export default CharCounter;