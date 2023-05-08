import React, { Component } from 'react'

class Deezer extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }


    render() {
        return (
        <div>Deezer</div>
        )
    }
}

export default Deezer
