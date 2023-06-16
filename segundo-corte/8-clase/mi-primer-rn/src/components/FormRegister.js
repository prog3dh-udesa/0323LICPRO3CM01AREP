import { Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import React, { Component } from 'react'
import ImagenPerfil from './ImagenPerfil'
import {auth, db} from '../firebase/config'

export default class FormRegister extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputMail: '',
            inputPassword:'',
            fotoDePerfil:'',
            registrado:false
        }
    }

    registrarUsuario(mail, password){
        auth.createUserWithEmailAndPassword(mail, password)
        .then( data => {
            db.collection('users').add({
                owner:auth.currentUser.email,
                createdAt: Date.now(),
            })
            .then(resp => {
                this.setState({registrado: true})
                this.props.navigation.navigate('HomeNav')
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }

    actualizarStateFotoDePerfil(url){
        this.setState({fotoDePerfil: url})
    }
    
    render() {
        return (
            <View>
                {
                    this.state.registrado ?
                    <ImagenPerfil actualizador={(url)=> this.actualizarStateFotoDePerfil(url)}/>
                    :
                    <>
                        <TextInput
                            style={styles.input}
                            placeholder='Digita su correo electronico'
                            keyboardType='email-address'
                            onChangeText={(text)=> this.setState({inputMail: text}) }
                            value={this.state.inputMail}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Digita tu password'
                            onChangeText={(text) => this.setState({inputPassword: text})}
                            value={this.state.inputPassword}
                            secureTextEntry={true}
                        />
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={()=> 
                                this.registrarUsuario(
                                    this.state.inputMail,
                                    this.state.inputPassword
                                )}
                        >
                            <Text style={styles.btnText}>Registrar mi usuario</Text>
                        </TouchableOpacity>
                    </>
                }
          </View>
        )
      }
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor: '#3d3d3d',
        marginTop: 24,
        height:24,
        padding:5
    },
    btn:{
        marginTop:32,
        backgroundColor: '#54d0e0',
        padding: 10,
        borderRadius:20,
    },
    btnText:{
        textAlign:'center',
        fontWeight:'bold',
        color:'white'
    }
})
