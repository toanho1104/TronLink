import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import { AssetScreen, MarketScreen } from '../screens'

const RootRoute = () => {
  return (
    <View>
      <Text>RootRoute</Text>
      <AssetScreen />
      <MarketScreen />
    </View>
  )
}

export default RootRoute
