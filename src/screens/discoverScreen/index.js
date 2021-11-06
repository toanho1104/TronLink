import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Header from './components/header/index'
import BackGroundCom from '../../components/backGroundCom'

const { width } = Dimensions.get('window')
const rate = width / 375
const DiscoverScreen = () => {
  return (
    <BackGroundCom>
      <View style={{ height: getStatusBarHeight() }} />
      <Header />
      <Text>DiscoverScreen</Text>
    </BackGroundCom>
  )
}

export default DiscoverScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
