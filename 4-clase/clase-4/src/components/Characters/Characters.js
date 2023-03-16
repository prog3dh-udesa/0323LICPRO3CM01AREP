import React from "react";
import CardCharacters from "../CardCharacter/CardCharacter";
const heroes = [
    {
        url:'./img/ahsoka.jpg',
        nombre:'Ahsoka',
        descripcion: 'Heroe copado'
    },
    {
        url:'./img/anakin.jpg',
        nombre:'Anakin',
        descripcion: 'Heroe copado'
    },
    {
        url:'./img/batman.jpg',
        nombre:'Batman',
        descripcion: 'Heroe copado'
    },
    {
        url:'./img/ahsoka.jpg',
        nombre:'Ahsoka',
        descripcion: 'Heroe copado'
    },
]

function Characters(){
    return(
        <div className="characters">
            {
                heroes.map((heroe, idx)=> 
                <CardCharacters
                    url={heroe.url}
                    nombre={heroe.nombre}
                    descripcion={heroe.descripcion}
                    key={heroe.nombre + idx}
                />)
            }
            {/* <CardCharacters
            url='./img/ahsoka.jpg'
            nombre='Ahsoka'
            descripcion='Guerrera copada'
            />
            <CardCharacters />
            <CardCharacters />
            <CardCharacters /> */}
        </div>
    )
}

export default Characters