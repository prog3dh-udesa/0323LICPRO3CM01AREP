import React from "react";
import Card from "../Card/Card";

function ContenedorCards(){
    return(
        <section className="top-data">
            <Card tituloCard='Mas buscadas'/>
            <Card tituloCard='Drama'/>
            <Card tituloCard='Comedia'/>
        </section>
    )
}
export default ContenedorCards