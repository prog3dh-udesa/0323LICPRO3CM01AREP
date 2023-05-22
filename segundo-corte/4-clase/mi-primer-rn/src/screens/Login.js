import React, {Component} from 'react'
import {Text, View, TouchableOpacity} from 'react-native'

import FormLogin from '../components/FormLogin'

class Login extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <FormLogin />
                <Text>
                    Aún no tienes una cuenta?
                    <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('Register')}
                    >
                        <Text>
                        Registrate aqui
                        </Text>
                    </TouchableOpacity>
                </Text>
            </View>
        )
    }
}

export default Login