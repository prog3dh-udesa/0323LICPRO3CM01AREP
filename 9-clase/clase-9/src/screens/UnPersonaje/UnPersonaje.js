import React, { Component } from 'react'

export default class UnPersonaje extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            personaje:''
        }
    }

    componentDidMount(){
        fetch(`https://rickandmortyapi.com/api/character/${this.state.id}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            personaje:data
        }))
    }

  render() {
    console.log(this.props.match.params.id)
    return (
      <div>
        {
        this.state.personaje === '' ?
        <h1>Cargando..</h1> :
        <div>
            <img src={this.state.personaje.image} />
            <h1>{this.state.personaje.name}</h1>
        </div>
        }
      </div>
    )
  }
}
