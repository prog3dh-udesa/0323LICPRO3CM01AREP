import React, { Component } from 'react'
const API = 'https://rickandmortyapi.com/api/character'

class ContainerRickMorty extends Component {
    constructor(props){
        super(props)
        this.state={
            personajes:[],
            proximaPagina:''
        }
    }

    componentDidMount(){
        this.traerPersonajes(API, this.setearData)
    }

    traerPersonajes(url, callback){
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState(
                {
                    personajes:this.state.personajes.concat(data.results),
                    proximaPagina: data.info.next
                }
            )
        )
        .catch(err => console.log(err))
    }

    traerMasPersonajes(){
        this.traerPersonajes(this.state.proximaPagina, this.setearData)
    }

    render() {
        return (
            <div>
                {
                    this.state.personajes.length === 0 ?
                    <p>Cargando...</p> :
                    <div>
                        <ul>
                            {
                                this.state.personajes.map(personaje => <li>{personaje.name}</li>)
                            }
                        </ul>
                        <button onClick={()=> this.traerMasPersonajes()}>Traer mas personajes</button>
                    </div>
                }
            </div>
        )
    }
}

export default ContainerRickMorty
