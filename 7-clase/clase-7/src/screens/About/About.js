import React, { Component } from 'react'

class About extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: props.match.params.id,
            personaje:'',
        }
    }

    componentDidMount(){
        fetch(`https://rickandmortyapi.com/api/character/${this.state.id}`)
        .then(resp => resp.json())
        .then(data => this.setState({personaje: data}))
        .catch(err => console.log(err))
    }

    render() {
    return (
        <>
            <h1>Este es el About del usuario</h1>
            {
                this.state.personaje === '' ?
                <h1>Cargando personaje</h1>
                :
                <h2>{this.state.personaje.name}</h2>
            }
        </>
    )
  }
}

export default About
