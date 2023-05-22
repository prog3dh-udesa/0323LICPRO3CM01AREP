import { Text, View, TouchableOpacity } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import React, { Component } from 'react'
import { db, auth } from '../firebase/config'
import firebase from 'firebase'

class Post extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLiked: false,
            likes: []
        }
    }

    componentDidMount(){
        let estaMiLike = this.props.data.likes.includes(auth.currentUser.email)

        if(estaMiLike){
            this.setState({isLiked: true})
        }
    }

    like(){
        db.collection('posts')
        .doc(this.props.id)
        .update({
            likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
        })
        .then(()=> this.setState({isLiked: true}))
        .catch(err=>console.log(err))
    }

    unlike(){
        db.collection('posts')
        .doc(this.props.id)
        .update({
            likes: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
        })
    }

    render() {
        return (
        <View>
            <Text>{this.props.data.description}</Text>
            {
                this.state.isLiked
                ?
                    <TouchableOpacity
                        onPress={()=>this.unlike()}
                    >
                        <FontAwesome name='heart' size={24} color='red' />
                    </TouchableOpacity>
                :
                    <TouchableOpacity
                        onPress={()=>this.like()}
                    >
                        <FontAwesome name='heart-o' size={24} color='red' />
                    </TouchableOpacity>
            }
        </View>
        )
    }
}

export default Post