import React from "react"
import List from "./component/List";


const Cards = List.map(card => {
    return(<div key={card.id}>
         <h2>{card.title}</h2>
        </div> 
        ) 
})

export default Cards;