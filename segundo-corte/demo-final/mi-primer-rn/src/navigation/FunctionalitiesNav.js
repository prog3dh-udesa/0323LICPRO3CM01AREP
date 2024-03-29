import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Feed from '../screens/Feed'
import Comments from '../screens/Comments'
import ProfileAmigo from '../screens/ProfileAmigo'
const Stack = createNativeStackNavigator()

function FunctionalitiesNav() {
    return (
      <Stack.Navigator>
        <Stack.Screen
            name='Feed'
            component={Feed}
        />
        <Stack.Screen
            name='Comments'
            component={Comments}
        />
        <Stack.Screen
          name='ProfileAmigo'
          component={ProfileAmigo}
        />
      </Stack.Navigator>
    )
}

export default FunctionalitiesNav