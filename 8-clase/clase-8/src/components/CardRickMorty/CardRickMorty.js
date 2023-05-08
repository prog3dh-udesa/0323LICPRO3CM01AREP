import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class CardRickMorty extends Component {
  constructor(props){
    super(props)
  }

  anhadirFavorito(idPersonaje){
    let storageFav = localStorage.getItem('favoritos')

    if(storageFav == undefined){
      let arrayParaIds = [idPersonaje]
      let arrayTransformadoEnString = JSON.stringify(arrayParaIds)
      localStorage.setItem('favoritos', arrayTransformadoEnString)

    } else {
      let storageTransformadoEnArray = JSON.parse(storageFav)
      storageTransformadoEnArray.push(idPersonaje)

      let storageAString = JSON.stringify(storageTransformadoEnArray)
      localStorage.setItem('favoritos', storageAString)
    }
  }

  render(){
    return (
      <div>
        <Link to={`/unpersonaje/id/${this.props.info.id}`}>
          <img src={this.props.info.image}/>
          <h1>{this.props.info.name}</h1>
        </Link>
        <button onClick={()=> this.anhadirFavorito(this.props.info.id)}>Favorito</button>
      </div>
    )
  }
}

export default CardRickMorty

