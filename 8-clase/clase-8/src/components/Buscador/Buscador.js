import React, { Component } from 'react'

class Buscador extends Component {
    constructor(props){
        super(props)
        this.state ={
            valorInput:'',
        }
    }


    evitarSubmit(event){
        event.preventDefault()
    }

    metodoQueFiltra(infoAFiltrar, valorDelInput){
        let filtrado = infoAFiltrar.filter(
            elm => elm.name.toLowerCase().includes(valorDelInput.toLowerCase())
        )
        return filtrado
    }

    guardarValor(event){
        this.setState(
            {
                valorInput:event.target.value
            },
            ()=> this.props.metodoQueActualiza(
                    this.metodoQueFiltra(this.props.info, event.target.value)
                )
        )
    }

    metodoQueEnvia(){
        console.log('Enviamos la info')
    }

    render() {
        return (
        <form onSubmit={(event)=> this.evitarSubmit(event)}>
            <div>
                <label>Busca lo que quieras</label>
            </div>
            <div>
                <input onChange={(event)=> this.guardarValor(event)} value={this.state.valorInput}/>
            </div>
            <button onClick={() => this.metodoQueEnvia()}>Enviar consulta</button> 
        </form>
        )
    }
}

export default Buscador
