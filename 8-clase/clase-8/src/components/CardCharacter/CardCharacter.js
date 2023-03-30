import React, {Component} from "react";
import './styles.css'
class CardCharacters extends Component{
    constructor(props){
        super(props)
        this.state={
            contador:1,
            texto:'Ver mas',
            clase:'hidden'
        }
    }

    saludar(nombre){
        alert('Buen día ' + nombre)
    }

    contador(){
        this.setState({
            contador: this.state.contador + 1
        })
    }

    cambiarTexto(){
        if(this.state.texto === 'Ver mas'){
            this.setState({
                texto: 'Ver menos',
                clase: 'show'
            })
        } else {
            this.setState({
                texto: 'Ver mas',
                clase:'hidden'
            })
        }
    }


    render(){
        return(
            <div
             className="character-card"
             >
                <img src={this.props.url} alt="" />
                <h1>{this.state.contador}</h1>
                <button 
                onClick={
                    ()=> this.props.aumentarPadre()}
                    >Aumentar</button>
                <h4>{this.props.nombre}</h4>
                <p
                className={this.state.clase}
                >{this.props.descripcion}</p>
                <a
                onClick={()=> this.cambiarTexto()}
                >{this.state.texto}</a>
            </div>
        )
    }
}

export default CardCharacters