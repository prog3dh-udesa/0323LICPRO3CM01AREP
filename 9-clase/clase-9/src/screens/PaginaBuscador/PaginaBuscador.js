import React, { Component } from 'react'
import Buscador from '../../components/Buscador/Buscador'
import ContenedorRickMorty from '../../components/ContenedorRickMorty/ContenedorRickMorty'
class PaginaBuscador extends Component {
  constructor(props){
    super(props)
    this.state = {
      personajes: [],
      backup: []
    }
  }

  actualizadorDeEstado(data){
    this.setState({
      personajes: data
    })
  }

  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/character')
    .then( resp => resp.json())
    .then( data => this.setState({
      personajes: data.results,
      backup: data.results
    }))
    .catch( err => console.log(err))
  }

    
  render() {
    return (
      <div>
        <Buscador 
        actualizador={(data) => this.actualizadorDeEstado(data)}
        fuente = {this.state.backup} 
        />
        <ContenedorRickMorty personajes={this.state.personajes} />
      </div>
    )
  }
}

export default PaginaBuscador