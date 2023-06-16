import { Text, View, TextInput, FlatList } from 'react-native'
import React, { Component } from 'react'
import { db } from '../firebase/config'

export default class Buscador extends Component {
    constructor(props){
        super(props)
        this.state={
            busqueda:'',
            usuarios:[],
            usuariosBakcup: []
        }
    }

    componentDidMount(){
        db
        .collection('users')
        .onSnapshot(
            docs => {
                let arrUsers = []
                docs.forEach(doc => {
                  arrUsers.push({
                    id: doc.id,
                    data: doc.data()
                  })
                })
                this.setState({
                  usuarios:arrUsers,
                  usuariosBakcup:arrUsers
                })
            }
        )
    }

    metodoQueFiltra(conLoQueVamosAFiltrar){
      let arrFiltrado = this.state.usuariosBakcup
      .filter(usuario =>
        usuario.data.owner.toLowerCase().includes(conLoQueVamosAFiltrar.toLowerCase()))
        this.setState({usuarios:arrFiltrado})
    }


  render() {
    return (
      <View>
        <Text>Buscador</Text>
        <TextInput
            placeholder='Ingresa tu email'
            onChangeText={(text)=> this.metodoQueFiltra(text)}
        />
        <FlatList
          data={this.state.usuarios}
          keyExtractor={item => item.id.toString()}
          renderItem = {({item})=><Text>{item.data.owner}</Text>}
        />
      </View>
    )
  }
}