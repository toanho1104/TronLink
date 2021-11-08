import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import HeaderCom from '../../components/headerCom'
import { images } from '../../assets/images'
import { colors } from '../../assets/styles'
import { BackGroundCom, TextCom } from '../../components'

const { width } = Dimensions.get('window')
const rate = width / 375
const HistoryScreen = () => {
  return (
    <BackGroundCom style={styles.container}>
      <View style={{ height: getStatusBarHeight() }} />
      <HeaderCom title="History" />
      <View style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.backgroundPrimary,
        marginTop: 50,
      }}
      >
        <FastImage source={images.history} style={{ width: 50, height: 50 }} />
        <TextCom>
          No History Available
        </TextCom>
      </View>
    </BackGroundCom>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
  },
})
