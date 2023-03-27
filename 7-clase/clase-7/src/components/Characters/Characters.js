import React, {Component} from "react";
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

class Characters extends Component{
    constructor(props){
        super(props)
        this.state = {
            contador:1
        }
    }
    aumentarPadre(){
        this.setState({
            contador: this.state.contador + 1
        })
    }
    render(){
        return(
            <div className="characters">
                <div>
                <h1>Este es el contador del Padre{this.state.contador}</h1>
                </div>
                {
                    heroes.map((heroe, idx)=> 
                    <CardCharacters
                    aumentarPadre={()=> this.aumentarPadre()}
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
}

export default Characters