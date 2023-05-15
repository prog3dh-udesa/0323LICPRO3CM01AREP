import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import FormRegister from '../components/FormRegister'

class Register extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View>
        <Text>Aqui vamos a tener nuestro Registro</Text>
        <FormRegister
          navigation={this.props.navigation}
        />
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Profile')}>
          <Text>No tienes cuenta? Vamonos para la HOME</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Register
