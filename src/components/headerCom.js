import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import TextCom from './textCom'
import IconCom from './iconCom'
import { icons } from '../assets/icons/index'
import { NavigationHelpers } from '../utils'

const { width } = Dimensions.get('window')
const rate = width / 375
const HeaderCom = ({ title }) => {
  const handleToBack = () => {
    NavigationHelpers.navigateBack()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleToBack}
        style={{ width: 40 * rate }}
      >
        <IconCom source={icons.back} />
      </TouchableOpacity>
      <TextCom
        textPrimary
        headingMedium
      >
        {title}
      </TextCom>
    </View>
  )
}

export default HeaderCom

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5 * rate,
    width,
  },
})
