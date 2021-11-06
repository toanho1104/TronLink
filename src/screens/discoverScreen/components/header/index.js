import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import TextCom from '../../../../components/textCom'
import SearchFeild from './searchFeild'
import IconCom from '../../../../components/iconCom'
import { icons } from '../../../../assets/icons/index'

const { width } = Dimensions.get('window')
const rate = width / 375
const Header = () => {
  return (
    <View style={styles.container}>
      <TextCom
        textPrimary
        headingLarge
      >
        DApp
      </TextCom>
      <SearchFeild />
      <IconCom source={icons.history} style={styles.icon} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: width - 24 * rate,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 25 * rate,
    height: 25 * rate,
  },
})
