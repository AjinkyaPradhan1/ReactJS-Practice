import React from "react"
import { useState } from "react"
import { useEffect } from "react"

const CascadeMultiDrop = () =>{
    const games = [
        {
            id:"1", name:"La Liga"
        },
        {
            id:"2", name:"Premier League"
        },
        {
            id:"3", name:"Bundesliga"
        },
    ]

    const teams = [
        {
            id:"1",tId:"1",mId:"1", name:"Barcelona"
        },
        {
            id:"2",tId:"1",mId:"2", name:"Real Madrid"
        },
        {
            id:"3",tId:"1",mId:"3", name:"Atletico Madrid"
        },
        {
            id:"4",tId:"2", name:"Manchester City"
        },
        {
            id:"5",tId:"2", name:"Liverpool"
        },
        {
            id:"6",tId:"2", name:"Arsenal"
        },
        {
            id:"7",tId:"3", name:"Bayern Munchen"
        },
        {
            id:"8",tId:"3", name:"Bayer Leverkusen"
        },
        {
            id:"9",tId:"3", name:"Borussia Dortmund"
        },
    ]

    const players = [
        {
            id:"1",pId:"1", name:"Lionel Messi"
        },
        {
            id:"2",pId:"1" ,name:"Cristiano Ronaldo"
        },
        {
            id:"3",pId:"1", name:"Antoine Griezmann"
        }
    ]

    const [game,setGame] = useState([]);
    const [team,setTeam] = useState([]);
    const [player,setPlayer] = useState([]);

    useEffect(() =>{
        setGame(games)
    },[])

    const handleGame = (id) => {
        const tms = teams.filter(x=>x.tId===id)
        setTeam(tms)
        setPlayer([]);
    }


    const handleTeams = (id) => {
        const mId = teams.find((team) => team.id === id).mId; // Get the tId of the selected team
        const pls = players.filter((player) => player.id === mId);
        setPlayer(pls);
    }

    return(
        <div className="mainClass">
            <select onChange={(e)=>handleGame(e.target.value)}>
                <option value="0">Select Game</option>
                {
                    game &&
                    game !== undefined?
                    game.map((gm,index)=>{
                        return(
                            <option key={index} value={gm.id}>{gm.name}</option>
                        )
                    }):"No Such Game"
                }
            </select>

                &nbsp;&nbsp;&nbsp;

            <select onChange={(e)=>handleTeams(e.target.value)}>
                <option value="0" >Select Team</option>
                {
                    team &&
                    team !== undefined?
                    team.map((tm,index)=>{
                        return(
                            <option key={index} value={tm.id}>{tm.name}</option>
                        )
                    }):"No Such Game"
                }
                
            </select>

            &nbsp;&nbsp;&nbsp;

            <select>
                <option value="0">Select Player</option>
                {player.map((pl,index) => (
                    <option key={index} value={pl.id}>
                        {pl.name}
                    </option>
                ))}
            </select>
        </div>
        
    )
}

export default CascadeMultiDrop