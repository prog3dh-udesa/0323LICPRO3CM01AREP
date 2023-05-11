import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import {auth} from '../firebase/config'

class FormRegister extends Component {

    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            btnDisabled:true
        }
    }

    registrarUsuario(){
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then( data =>console.log(data))
        .catch( err => console.log(err))
    }

    render() {
        return (
        <View>
            <Text>Bienvenido a PepeApp, registrate para continuar</Text>
            <TextInput
                style={styles.input}
                keyboardType='email-address'
                onChangeText={(text)=> this.setState({email:text})}
                value={this.state.email}
                placeholder='Digita tu email'
            />
            <TextInput
                style={styles.input}
                keyboardType='default'
                onChangeText={(text)=> this.setState({password:text})
                }
                value={this.state.password}
                placeholder='Digita tu contraseña'
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={styles.btn} 
                onPress={()=>this.registrarUsuario()}
            >
                <Text
                    style={styles.btnText} 
                >
                    Registrarme
                </Text>
            </TouchableOpacity>

        </View>
        )
    }
}

const styles= StyleSheet.create({
    input:{
        borderWidth: 1,
        borderColor: '#3d3d3d',
        height:30,
        borderRadius:10,
        padding:5,
        marginTop:16
    },
    btn:{
        backgroundColor:'#54d0e0',
        borderRadius:10,
        padding:16,
        marginTop:48
    },
    btnText:{
        textAlign:'center',
        color:'white'
    }
})

export default FormRegister