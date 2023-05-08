import React, { Component } from 'react'

class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state = {
            personajeFavoritos: []
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
         if(storage !== null ){
            let storageTransformadoEnArray = JSON.parse(storage)
            Promise.all(
                storageTransformadoEnArray.map(id => {
                    return(
                        fetch(`https://rickandmortyapi.com/api/character/${id}`)
                        .then( resp => resp.json())
                        .then( data => data)
                    )
                })
            ).then( data => this.setState({
                    personajeFavoritos: data
            })).catch( err => console.log(err))
         }
    }

    render() {
        return (
        <div>Favoritos</div>
        )
    }
}

export default Favoritos
