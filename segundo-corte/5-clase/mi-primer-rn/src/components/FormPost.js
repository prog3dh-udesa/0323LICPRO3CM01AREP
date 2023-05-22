import { Text, View, TextInput, StyleSheet } from 'react-native'
import React, { Component } from 'react'

class FormPost extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
        <View>
            <TextInput
                placeholder='Agrega tu descripción'
                keyboardType='default'
                style={styles.input}
                multiline={true}
                numberOfLines={4}
                onChangeText={text => this.props.updateDescription(text)}
                value={this.props.valueDescription}
            />
        </View>
        )
    }

}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderWidth:1,
        borderColor:'#c3c3c3'
    }
})

export default FormPost