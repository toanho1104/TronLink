import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import TextCom from '../../../../components/textCom'

const { width } = Dimensions.get('window')
const rate = width / 375
const Header = () => {
  return (
    <View style={styles.container}>

      <TextCom
        textPrimary
        headingMedium
        style={{ marginRight: 15 * rate }}
      >
        Swap
      </TextCom>
      <TextCom
        headingSmall
      >
        Markets
      </TextCom>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: width - 24 * rate,
    flexDirection: 'row',
    paddingVertical: 8 * rate,
  },
})
