import React, {Component} from 'react'
import Card from '../Card/Card'
import CardRickMorty from '../CardRickMorty/CardRickMorty'

class ContenedorRickMorty extends Component{
    constructor(props){
        super(props)
        this.state={
            numero:1,
        }
    }

    actualizarEstado(){
        this.setState({
            numero: this.state.numero + 1
        })
    }

    render(){
        return(
            <div>
                <h1>Aqui tendremos algo genial de Rick y Morty</h1>
                {
                    this.props.personajes.length <= 0 ?
                    <h2>Trayendo personajes...</h2> :
                    this.props.personajes.map(personaje => <article>
                        <CardRickMorty info={personaje} />
                    </article>)
                }
            </div>
        )
    }
}

export default ContenedorRickMorty