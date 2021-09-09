import React from 'react'
import './cards.css'



const singelcard = (message,clr,numberofcards) => {
    const dummyarr = [];
    const range = parseInt(numberofcards);
    console.log("number",numberofcards,"range",range);
    for(let i=0;i<range;i++)
    {
        dummyarr.push(50);
    }
    const cardbar=dummyarr.map((number,index) =>
                                <span key={index} 
                                    className="cardbars" 
                                    style={{height:`${number}px` , backgroundColor:clr}}>
                                    
                                </span>)
    console.log(dummyarr,cardbar,range);

    return(
    <div>
        {cardbar}
        <span className="message">{message}</span>
    </div>)
}


function Card({message,barcolor,numberofcards}) {
    return (
        <div className="card">
                {singelcard(message,barcolor,numberofcards)}
        </div>

    )
}

export default Card
