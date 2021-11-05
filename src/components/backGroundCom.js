import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, StatusBar,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { colors } from '../assets/styles'

const { width } = Dimensions.get('window')
const rate = width / 375
const BackGroundCom = ({ children }) => {
  console.log(getStatusBarHeight())
  return (

    <View style={[styles.container, { backgroundColor: colors.backgroundPrimary }]}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      {children}
    </View>
  )
}

export default BackGroundCom

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
