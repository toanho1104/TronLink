import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  AboutUsScreen, AssetScreen, MarketScreen, VoteScreen,
} from '../screens'
import BottomTabBarRoute from './bottomTab/bootomTabBarRoutes'
import { screenName } from '../configs'
import { navigationRef } from '../utils/NavigationHelpers'

const Stack = createNativeStackNavigator()

const RootRoute = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={screenName.BottomTabBarRoute} component={BottomTabBarRoute} />
        <Stack.Screen name={screenName.AboutUsScreen} component={AboutUsScreen} />
        <Stack.Screen name={screenName.VoteScreen} component={VoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootRoute
