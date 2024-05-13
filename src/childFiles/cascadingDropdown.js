import React, { useEffect } from "react"
import { useState } from "react"

const CascadingDropdown = () => {
    const countries = [
        {
            id:"1", name:"India"
        },
        {
            id:"2",name:"US"
        },
        {
            id:"3",name:"China"
        },
        
    ];

    const States = [
        {
            id:"1",countryId:"1", name:"Maharashtra"
        },
        {
            id:"2",countryId:"1", name:"Madhya Pradesh"
        },
        {
            id:"3",countryId:"2", name:"Florida"
        },
        {
            id:"4",countryId:"2", name:"Texas"
        },
        {
            id:"5",countryId:"3", name:"Fujian"
        },
        {
            id:"6",countryId:"3", name:"Xinjiang"
        },
        
    ]

    const [country,setCountry] = useState([])
    const [state,setState] = useState([])

    useEffect(()=>{
        setCountry(countries);
    },[])

    const handleCountry = (id) => {
        const dt = States.filter(x => x.countryId === id)
        setState(dt)
    }

    return(
        <div id="mainDiv">
            <select onChange={(e)=>handleCountry(e.target.value)}>
                <option value="0">Select Country</option>
                {
                    country &&
                    country !== undefined ?
                    country.map((ctr,index)=>{
                        return(
                            <option key={index} value={ctr.id}>{ctr.name}</option>
                        )
                    }):"No Country"
                }
            </select>

            <br></br>
            <br></br>

            <select>
                <option value="0">Select State</option>
                {
                    state &&
                    state !== undefined ?
                    state.map((ctr,index)=>{
                        return(
                            <option key={index} value={ctr.id}>{ctr.name}</option>
                        )
                    }):"No Country"
                }
            </select>
        </div>     
    )
    
}

export default CascadingDropdown