import React, { Component } from 'react'
import ContenedorRickMorty from '../../components/ContenedorRickMorty/ContenedorRickMorty'
import Buscador from '../../components/Buscador/Buscador'
class Personajes extends Component {

  constructor(props){
    super(props)
    this.state = {
      personajes:[],
      backup:[]
    }
  }

  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(data => this.setState({
        personajes: data.results,
        backup:data.results
    }))
    .catch(err => console.log(err))
  }

  actualizadorDeEstado(infoParaActualizar){
    this.setState({
        personajes: infoParaActualizar
    })
  }
  render() {
    return (
      <>
        <Buscador 
        info={this.state.backup} 
        metodoQueActualiza={(infoParaActualizar)=> this.actualizadorDeEstado(infoParaActualizar)}
        />
        <ContenedorRickMorty personajes={this.state.personajes} />
      </>
    )
  }
}

export default Personajes