import { useState } from "react";
import '../childFiles/randomQuote.css'

const RandomQuote = () => {

    const [disQ,setDisQ] = useState('')
    
    const quotes = [
        {
            id:'1' , name:"You must be the change you wish to see in the world-Mahatma Gandhi"
        },
        {
            id:'2',name:"Arise, awake, and stop not until the goal is achieved-Swami Vivekanada"
        },{
            id:3,name:"The greatest glory in living lies not in never falling, but in rising every time we fall-Nelson Mandela"
        },{
            id:4,name:"The power to question is the basis of all human progress-Indira Gandhi"

        },{id:5,name:"You have to dream before your dreams can come true-APJ Abdul Kalam"}
    ]

    const dispQuote = (id) => {
        const idQ = Math.floor(Math.random(id)*quotes.length)
        const randomQuote = quotes[idQ]
        setDisQ(randomQuote.name);
    }
    const clearQuote = () => {
        setDisQ('');
    }

    return (
        <div>
            
            <button className="btn btn-dark" onClick={dispQuote}>Random Quote</button>
            <br></br>
            <div className="result" id="result">{disQ}</div>
            <br></br>
            <button className="btn btn-danger" onClick={clearQuote}>Clear Quote</button>
        </div>
    );
}

export default RandomQuote