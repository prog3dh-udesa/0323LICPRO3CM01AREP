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
          <Text>
            Ya tienes cuenta? 
        <TouchableOpacity 
        onPress={()=> this.props.navigation.navigate('Login')}
        >
          <Text>
            Inicia sesión
          </Text>
        </TouchableOpacity>
            </Text>
      </View>
    )
  }
}

export default Register
