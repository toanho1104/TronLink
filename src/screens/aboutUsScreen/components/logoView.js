import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import IconCom from '../../../components/iconCom'
import { images } from '../../../assets/images/index'
import TextCom from '../../../components/textCom'

const { width } = Dimensions.get('window')
const rate = width / 375
const LogoView = () => {
  return (
    <View style={styles.container}>
      <Image source={images.tronLink} style={styles.image} />
      <TextCom
        textPrimary
        headingSmall
        style={{ marginTop: 12 * rate }}
      >
        TronLink
      </TextCom>
      <TextCom
        linkTextNomarl
      >
        V4.4.0(584856)
      </TextCom>
    </View>
  )
}

export default LogoView

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    paddingVertical: 30 * rate,
  },
  image: {
    width: 70 * rate,
    height: 70 * rate,
  },
})
