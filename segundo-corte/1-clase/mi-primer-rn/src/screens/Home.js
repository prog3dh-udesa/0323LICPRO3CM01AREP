import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

class Home extends Component{
    constructor(){
        super()
    }

    ejecutarConAccionCorta(){
        console.log('El cliente nos pidio algo')
    }

    ejecutarConAccionLarga(){
        console.log('El cliente nos pidio algo')
    }

    render(){
        return(
            <View>
                <Text>
                    Aqui vamos a crear una Home copada
                </Text>
                <TouchableOpacity
                style={styles.button}
                onPress={()=> this.ejecutarConAccionCorta()}
                onLongPress={()=> this.ejecutarConAccionLarga()}
                >
                    <Text style={styles.textoBtn}>
                        Algun día sere Boton
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'green',
        borderRadius: 20,
        borderWidth:2,
        textAlign:'center',
        padding:10
    },
    textoBtn:{
        color:'white'
    }
})

export default Home