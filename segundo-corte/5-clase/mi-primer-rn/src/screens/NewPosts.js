import { Text, View, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import React, { Component } from 'react'
import FormPost from '../components/FormPost'
import {auth, db} from '../firebase/config'

class NewPosts extends Component {
    constructor(props){
        super(props)
        this.state = {
            owner:auth.currentUser.email,
            description:'',
            image:'',
            likes:[],
            comments:[],
        }
    }

    createPost({owner, description, image, likes, comments}){
        db.collection('posts').add({
            owner,
            description,
            image,
            likes,
            comments,
            createdAt: Date.now()
        })
        .then(data => {
            this.setState({description:''})
            this.props.navigation.navigate('Feed')
        })
        .catch(err => console.log(err))
    }

    updateDescription(description){
        this.setState({
            description:description
        })
    }

    render() {
        return (
        <View>
            <Text>NewPost</Text>
            <FormPost 
            updateDescription={(description)=> this.updateDescription(description)}
            valueDescription = {this.state.description}
            />
            <TouchableOpacity
            onPress={()=> this.createPost({
                owner: this.state.owner,
                description: this.state.description,
                image: this.state.image,
                likes: this.state.likes,
                comments: this.state.comments,
            })}
            >
                <Text>Crear post</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

export default NewPosts