import { Text, View, TextInput } from 'react-native'
import React, { Component } from 'react'

class DescriptionPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            description:''
        }
    }
  render() {
    return (
      <View>
        <TextInput
        placeholder='Describe tu nuevo post'
        keyboardType='default'
        onChangeText={(text)=> this.props.actualizarDescripcion(text)}
        value={this.state.description}
        />
      </View>
    )
  }
}

export default DescriptionPost