import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../assets/styles'

const { width } = Dimensions.get('window')
const rate = width / 375
const BackGroundCom = ({ children }) => {
  return (
    <View style={[styles.container, { backgroundColor: colors.backgroundPrimary }]}>
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
