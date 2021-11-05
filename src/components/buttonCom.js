import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import TextCom from './textCom'
import { colors } from '../assets/styles'

const { width } = Dimensions.get('window')
const rate = width / 375
const ButtonCom = ({ style, title }) => {
  return (
    <View
      style={[styles.container, { style }]}
    >
      <TextCom
        textOnPrimary
        buttonTextBold
      >
        {title}
      </TextCom>
    </View>
  )
}

export default ButtonCom

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    width: width - 24 * rate,
    height: 45 * rate,
    justifyContent: 'center',
    borderRadius: 10,
  },
})
