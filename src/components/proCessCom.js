import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../assets/styles/index'

const { width } = Dimensions.get('window')
const rate = width / 375
const ProCessCom = () => {
  return (
    <View style={styles.container} />
  )
}

export default ProCessCom

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 7 * rate,
    backgroundColor: colors.primaryLight,
    borderRadius: 10,
  },
})
