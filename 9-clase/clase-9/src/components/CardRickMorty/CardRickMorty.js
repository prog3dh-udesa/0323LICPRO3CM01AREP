import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class CardRickMorty extends Component {
  constructor(props){
    super(props)
    this.state = {
      esFavorito: false
    }
  }

  componentDidMount(){
    let storage = localStorage.getItem('favoritos')
    let storageAArray = JSON.parse(storage)

    if(storageAArray !== null){
      let estaEnElArray = storageAArray.includes(this.props.info.id)
      if(estaEnElArray){
        this.setState({
          esFavorito: true
        })
      }
    }
  }

  anhadirFav(id){
    let storage = localStorage.getItem('favoritos')

    if(storage === null){
      let idEnArray = [id]
      let arrayAString = JSON.stringify(idEnArray)
      localStorage.setItem('favoritos', arrayAString)

    } else {
      let deStringAArray = JSON.parse(storage) 
      deStringAArray.push(id)
      let arrayAString = JSON.stringify(deStringAArray)
      localStorage.setItem('favoritos', arrayAString)
    }

    this.setState({
      esFavorito: true
    })
  }
  

  sacarFav(id){
    let storage = localStorage.getItem('favoritos')
    let storageAArray = JSON.parse(storage)
    let filtro = storageAArray.filter((elm)=> elm !== id)
    let filtroAString = JSON.stringify(filtro)
    localStorage.setItem('favoritos', filtroAString)

    this.setState({
      esFavorito: false
    })


  }

  render(){
    return (
      <div>
            <Link to={`/unpersonaje/id/${this.props.info.id}`}>
              <img src={this.props.info.image}/>
              <h1>{this.props.info.name}</h1>
            </Link>
            {
              this.state.esFavorito ?
               <button onClick={()=> this.sacarFav(this.props.info.id)}> Sacar de Favs</button>
              :
                <button onClick={()=> this.anhadirFav(this.props.info.id)}>Añadir a Favs</button>
            }
        </div>
    )
  }
}

export default CardRickMorty