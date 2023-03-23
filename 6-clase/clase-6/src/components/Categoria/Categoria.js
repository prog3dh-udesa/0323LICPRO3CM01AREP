import React from "react";

function Categoria(props){
    return(
        <article className="card">
            <p>Category {props.numero}</p>
        </article>
    )
}

export default Categoria