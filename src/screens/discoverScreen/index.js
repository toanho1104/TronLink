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
import SwiperList from './components/SwiperList'
import PopularList from './components/PopularList'

const { width } = Dimensions.get('window')
const rate = width / 375
const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ height: getStatusBarHeight() }} />
      <Header />
      <View style={styles.space} />
      <SwiperList />
      <PopularList />
      <Text>DiscoverScreen</Text>
    </View>
  )
}

export default DiscoverScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  space: {
    height: 20 * rate,
  },
})
