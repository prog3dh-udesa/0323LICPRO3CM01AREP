import React, {Component} from 'react'
import CardRickMorty from '../CardRickMorty/CardRickMorty'
import Buscador from '../Buscador/Buscador'
class ContenedorRickMorty extends Component{
    //1 que se ejecuta
    constructor(props){
        super(props)
        this.state={
            numero:1,
            personajes:[],
            backup:[]
        }
    }
    //3 que se ejecuta

    //5 que se ejecuta tras ocurrir actualización
    componentDidUpdate(){
        console.log('Me actualice y pase por el didUpdate')

    }

    //Este es el ultimo que se ejecuta
    componentWillUnmount(){

    }

    actualizarEstado(){
        this.setState({
            numero: this.state.numero + 1
        })
    }

    //2 que se ejecuta
    //4 que se ejecuta si ocurre actualización
    render(){
        console.log('Soy el render')
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