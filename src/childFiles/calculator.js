import React, { useState } from "react";
import '../childFiles/Calculator.css'

const Calculator = () => {

    const [dispDigit,setDispDigit] = useState('')
    
    const handleClick = (value) => {
        if(value === '='){
            try{
                setDispDigit(eval(dispDigit).toString());
            }
            catch(erorr){
                setDispDigit("Error")
            }
        }else if(value==="AC"){
                setDispDigit('')
        }
        else{
            setDispDigit(dispDigit + value)
        }
    }
    

    return(
        <div className="main">
            <div className="display">
                <div className="displayContent">{dispDigit}</div>
                
            </div>
            
            <div className="calcBody">
                <div className="first">
                    <div className="f1" onClick={() => handleClick('.')}>.</div>
                    <div className="f2" onClick={() => handleClick('=')}>=</div>
                    <div className="f3" onClick={() => handleClick('0')}>0</div>
                    <div className="f4" onClick={() => handleClick('AC')}>AC</div>
                </div>
                <div className="second">
                    <div className="f1" onClick={() => handleClick('7')}>7</div>
                    <div className="f2" onClick={() => handleClick('8')}>8</div>
                    <div className="f3" onClick={() => handleClick('9')}>9</div>
                    <div className="f4" onClick={() => handleClick('/')}>/</div>
                </div>
                <div className="third">
                    <div className="f1" onClick={() => handleClick('4')}>4</div>
                    <div className="f2" onClick={() => handleClick('5')}>5</div>
                    <div className="f3" onClick={() => handleClick('6')}>6</div>
                    <div className="f4" onClick={() => handleClick('*')}>*</div>
                </div>
                <div className="fourth">
                    <div className="f1" onClick={() =>handleClick('1')}>1</div>
                    <div className="f2" onClick={() =>handleClick('2')}>2</div>
                    <div className="f3" onClick={() =>handleClick('3')}>3</div>
                    <div className="f4" onClick={() =>handleClick('-')}>-</div>
                </div>
            </div>
        </div>
    )

}

export default Calculator;