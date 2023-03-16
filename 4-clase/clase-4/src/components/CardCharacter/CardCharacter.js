import React from "react";

function CardCharacters(props){
    return(
    <div className="character-card">
        <img src={props.url} alt="" />
        <h4>{props.nombre}</h4>
        <p>{props.descripcion}</p>
        <a href="#">Ver más</a>
    </div>
)
}

export default CardCharacters