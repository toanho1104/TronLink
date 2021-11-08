import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import HeaderCom from '../../components/headerCom'
import { icons } from '../../assets/icons/index'
import IconCom from '../../components/iconCom'
import LogoView from './components/logoView'
import OptionItemView from './components/optionItemView'
import Line from '../../components/line'

const { width } = Dimensions.get('window')
const rate = width / 375
const AboutUsScreen = () => {
  return (
    <View>
      <View style={{ height: getStatusBarHeight() }} />

      <HeaderCom title="About Us" />
      <LogoView />
      <OptionItemView title="Version Logs" />
      <Line />
      <OptionItemView title="Version Update" />
      <Line />
      <OptionItemView title="User Agreement" />
      <Line />
      <OptionItemView title="Join Our Communities" />
    </View>
  )
}

export default AboutUsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
