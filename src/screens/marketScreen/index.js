import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Header from './components/header'
import SwapControl from './components/swapControl/index'
import BackGroundCom from '../../components/backGroundCom'
import ButtonCom from '../../components/buttonCom'
import ExchangeRate from './components/exchangeRate'

const { width } = Dimensions.get('window')
const rate = width / 375
const MarketScreen = () => {
  return (
    <BackGroundCom style={styles.container}>
      <View style={{ height: getStatusBarHeight() }} />
      <Header />
      <SwapControl />
      <ExchangeRate />
      <ButtonCom title="Instant Swap" />
    </BackGroundCom>
  )
}

export default MarketScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
