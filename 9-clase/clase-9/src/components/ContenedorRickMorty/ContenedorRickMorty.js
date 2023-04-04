import React, {Component} from 'react'
import Card from '../Card/Card'
import CardRickMorty from '../CardRickMorty/CardRickMorty'

class ContenedorRickMorty extends Component{
    //1 que se ejecuta
    constructor(props){
        super(props)
        this.state={
            numero:1,
            personajes:[]
        }
    }
    //3 que se ejecuta
    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => this.setState({
            personajes: data.results
        }))
        .catch(err => console.log(err))
    }

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
                    this.state.personajes.length <= 0 ?
                    <h2>Trayendo personajes...</h2> :
                    this.state.personajes.map(personaje => <article>
                        <CardRickMorty info={personaje} />
                    </article>)
                }
            </div>
        )
    }
}

export default ContenedorRickMorty