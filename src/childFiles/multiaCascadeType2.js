import React from "react"
import { useState } from "react"
import { useEffect } from "react"

const MultiCascadeDropdown2 = () => {

    const states = [
        {
            id:"1", name:"Madhya Pradesh"
        },
        {
            id:"2", name:"Maharashtra"
        },
        {
            id:"3", name:"Gujarat"
        },
        
    ]

    const districts = [
        {
            id:"1",dId:"1",dvId:"1", name:"Dhar"
        },
        {
            id:"2",dId:"1",dvId:"2", name:"Indore"
        },
        {
            id:"3",dId:"1",dvId:"3", name:"Khargone"
        },
        {
            id:"4",dId:"1",dvId:"4", name:"Ujjain"
        },
        {
            id:"5",dId:"1",dvId:"5", name:"Khandwa"
        },
        {
            id:"6",dId:"1",dvId:"6", name:"Vidisha"
        },
        {
            id:"7",dId:"2",dvId:"3", name:"Pune"
        },
        {
            id:"8",dId:"2",dvId:"4", name:"Nashik"
        },
        {
            id:"9",dId:"2",dvId:"3", name:"Akola"
        },
        {
            id:"10",dId:"2",dvId:"4", name:"Nagpur"
        },
        {
            id:"11",dId:"2",dvId:"3", name:"Sambhaji Nagar"
        },
        {
            id:"12",dId:"2",dvId:"4", name:"Mumbai"
        },
        {
            id:"13",dId:"3",dvId:"5", name:"Ahmedabad"
        },
        {
            id:"14",dId:"3",dvId:"6", name:"Gandhinagar"
        },
        {
            id:"15",dId:"3",dvId:"5", name:"Mehsana"
        },
        {
            id:"16",dId:"3",dvId:"6", name:"Gir Somnath"
        },
        {
            id:"17",dId:"3",dvId:"5", name:"Vadodara"
        },
        {
            id:"18",dId:"3",dvId:"6", name:"Chota Udepur"
        },
       
        
    ]

    const villages = [
        {
            id:"1", name:"Dhamnod"
        },
        {
            id:"1",name:"Dharampuri"
        },
        {
            id:"1",vId:"1", name:"Bagdi"
        },
        {
            id:"2",vId:"1", name:"Jhalaria"
        },
        {
            id:"2",vId:"1" ,name:"Kanadia"
        },
        {
            id:"2",vId:"1", name:"Badia Hat"
        },
        {
            id:"4",vId:"1", name:"Jaiwantpura"
        },
        {
            id:"4",vId:"1" ,name:"Jamalpura"
        },
        {
            id:"4",vId:"1", name:"Daudkhedi"
        }
    ]

    const [state,setState]=useState([])
    const [district,setDistrict] = useState([])
    const [village,setVillage] = useState([])

    useEffect(()=>{
            setState(states)},[])

    const handleDist = (id) => {
        const dst = districts.filter(x=>x.dId===id)
        setDistrict(dst)
        setVillage([]);
    }

    const handleVillage = (id) => {
        const dvId = districts.find((distr)=>distr.id===id).dvId
        const vlg = villages.filter((village) => village.id === dvId);
        setVillage(vlg)
    }
  
  return(
    <div>
        <select onChange={(e)=>handleDist(e.target.value)}>
            <option value="0">Select State</option>
            {
                state &&
                state!==undefined?
                state.map((st,index)=>{
                    return(
                        <option key={index} value={st.id}>{st.name}</option>
                    )
                }):"No Such State"
            }
        </select>

        <br></br>
        <br></br>

        <select onChange={(e)=>handleVillage(e.target.value)}>
            <option value="0">Select District</option>
            {
                district &&
                district!==undefined?
                district.map((dt,index)=>{
                    return(
                        <option key={index} value={dt.id}>{dt.name}</option>
                    )
                }):"No Such District"
            }
        </select>

        <br></br>
        <br></br>

        <select>
            <option value="0">Select Village</option>
            {
                village &&
                village!==undefined?
                village.map((vlg,index)=>{
                    return(
                        <option key={index} value={vlg.id}>{vlg.name}</option>
                    )
                }):"No Such District"
            }
        </select>

            
    </div>
  );
};

export default MultiCascadeDropdown2;
