import { Text, View, FlatList } from 'react-native'
import React from 'react'
import Post from './Post'

function Posts(props){
    return (
      <View>
        <FlatList
        data={props.data}
        keyExtractor= {(item) => item.id.toString()}
        renderItem = {({item}) => <Post  id={item.id} data={item.data} />}
        />
      </View>
    )
}

export default Posts