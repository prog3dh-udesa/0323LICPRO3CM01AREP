import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { db, auth } from '../firebase/config'
import Posteos from '../components/Posteos'

export default class Feed extends Component {

    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
      console.log(auth.currentUser.email)
        db.collection('posts')
        .where('owner','==', auth.currentUser.email)
        .limit(2)
        .onSnapshot( docs => {
            let arrDocs=[]

            docs.forEach(doc => arrDocs.push({
                id: doc.id,
                data:doc.data()
            }))
            console.log(arrDocs)

            this.setState({
                posts: arrDocs
            })
        })
    }
  render() {
    return (
      <View>
        <Text>Feed</Text>
        <Posteos
            data={this.state.posts}
            navigation={this.props.navigation}
        />
      </View>
    )
  }
}