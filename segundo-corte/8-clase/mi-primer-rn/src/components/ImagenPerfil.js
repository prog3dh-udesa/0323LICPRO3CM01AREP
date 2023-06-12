import { Text, View, TouchableOpacity, Image, StyleSheet, TouchableNativeFeedbackBase} from 'react-native'
import React, { Component } from 'react'
import { storage } from '../firebase/config';
import * as ImagePicker from 'expo-image-picker';

class ImagenPerfil extends Component {

    constructor(){
        super()
        this.state={
            imgPicked:''
        }
    }

    componentDidMount(){
        ImagePicker.getMediaLibraryPermissionsAsync()
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
    }

    abrirImagenes(){
        console.log('pasa por aqui')
        ImagePicker.launchImageLibraryAsync()
        .then(resp => this.setState({imgPicked: resp.assets[0].uri}))
        .catch(err => console.log(err))
    }

    aceptarFoto(){
        fetch(this.state.imgPicked)
        .then(resp => resp.blob())
        .then(imagen => {
            let ref = storage.ref(`imgPefil/${Date.now()}.jpeg`)
            ref.put(imagen)
            .then(()=> {
                ref.getDownloadURL()
                .then(url => this.props.actualizador(url))
            })
        })
        .catch(err=> console.log(err))
    }

    descartarFoto(){
        this.setState({imgPicked: ''})
    }


  render() {
    return (
      <View>
        {
            this.state.imgPicked !== ''
            ?
            <>
                <Image
                    source={{uri: this.state.imgPicked}}
                    style={styles.img}
                />
                <TouchableOpacity
                onPress={()=> this.aceptarFoto()}
                >
                    <Text>
                        Aceptar foto
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=> this.rechazarFoto()}
                >
                    <Text>
                        Rechazar foto
                    </Text>
                </TouchableOpacity> 
            </>
            :
            <TouchableOpacity
            onPress={()=> this.abrirImagenes()}
            >
                <Text>ImagenPerfil</Text>
            </TouchableOpacity>
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
    img:{
        height: 50
    }
})
export default ImagenPerfil