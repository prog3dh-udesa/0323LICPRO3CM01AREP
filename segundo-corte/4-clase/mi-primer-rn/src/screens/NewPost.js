import { Text, View } from 'react-native'
import React, { Component } from 'react'
import DesciptionPost from '../components/DesciptionPost'
import {db, auth} from '../firebase/config'
import { TouchableOpacity } from 'react-native-web'

class NewPost extends Component {
    constructor(props){
        super(props)
        this.state= {
            description:''
        }
    }


    actualizarDescripcion(descripcion){
        this.setState({
            description: descripcion
        })
    }

    enviarPost(data){
        db.collection('posts').add({
            owner: auth.currentUser.email,
            description: data.description,
            createdAt: Date.now()
        })
        .then(resp => console.log(resp))
        .catch(err=> console.log(err))
    }

  render() {
    return (
      <View>
        <DesciptionPost actualizarDescripcion={(descripcion)=> this.actualizarDescripcion(descripcion)} />
        <TouchableOpacity>
            <Text>Crear Post</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default NewPost