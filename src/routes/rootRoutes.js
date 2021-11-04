import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AssetScreen, MarketScreen } from '../screens'
import BottomTabBarRoute from './bottomTab/bootomTabBarRoutes'
import { screenName } from '../configs'

const Stack = createNativeStackNavigator()

const RootRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={screenName.BottomTabBarRoute} component={BottomTabBarRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootRoute
