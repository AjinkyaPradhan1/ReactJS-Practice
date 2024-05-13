import React from "react";
import { useState } from "react";


const Name = () =>{

    const [name,setName] = useState("Ajinkya");

    function changeVirat(){
        setName("Virat")
    }
    function changeRohit(){
        setName("Rohit")
    }
    function changeBoom(){
        setName("Boom Boom Bumrah")
    }
    function changeDada(){
        setName("Surya Dada")
    }
    const reset = (name) =>{
        setName("Ajinkya")
    }
    

    return(
        <div>
            Hello <b>{name}</b>
            <br/><br/>
            <button className="btn btn-primary" onClick={changeVirat}>Virat</button>&nbsp;
            <button className="btn btn-danger" onClick={changeRohit}>Rohit</button>&nbsp;
            <button className="btn btn-warning" onClick={changeBoom}>Bumrah</button>&nbsp;
            <button className="btn btn-info" onClick={changeDada}>Surya</button>&nbsp;
            <button className="btn btn-dark" onClick={reset}>Reset</button>&nbsp;


            
        </div>
    )
};

export default Name;