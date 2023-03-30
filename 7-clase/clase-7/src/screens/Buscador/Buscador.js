import React, { Component } from 'react'

export default class Buscador extends Component {
    constructor(){
        super()
        this.state = {
            inputValue: '',
            personajes:[],
            backup:[]
        }
    }

    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => this.setState({
            personajes: data.results,
            backup: data.results
        }))
        .catch(err => console.log(err))
    }

    evitarSubmit(event){
        // event.preventDefault()
        console.log('Se evito el Submit')
    }

    guardaValor(event){
        this.setState({
            inputValue:event.target.value
        }, ()=> this.setState({
            personajes: this.state.backup.filter((elm) => elm.name.toLowerCase().includes(this.state.inputValue.toLowerCase()))
        }))
        console.log('Esto va a aparecer mientras que el setState ocurre de manera asincrona')
    }
    
    render() {
        return (
            <>
                <form onSubmit={(event)=> this.evitarSubmit(event)}>
                    <input onChange={(event)=> this.guardaValor(event)} />
                    <button>
                        Enviar
                    </button>
                </form>
                <div>
                    {
                        this.state.personajes.length > 0 ?
                        this.state.personajes.map((elm, idx)=> <p>{elm.name}</p>) :
                        <h2>Cargando...</h2>
                    }
                </div>
                
            </>
        )
    }
}
