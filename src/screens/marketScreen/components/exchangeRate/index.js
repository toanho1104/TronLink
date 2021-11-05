import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import TextCom from '../../../../components/textCom'
import { colors } from '../../../../assets/styles/index'

const { width } = Dimensions.get('window')
const rate = width / 375
const ExchangeRate = () => {
  return (
    <View>
      <Header />
      <View style={styles.contentView}>
        <TextCom>
          Rate
        </TextCom>
        <TextCom>
          1 USDT=9.581 TXR
        </TextCom>
      </View>
    </View>

  )
}
const Header = () => {
  return (
    <View style={styles.header}>
      <TextCom
        textPrimary
        contenTextBold
      >
        View Token
      </TextCom>
      <TextCom
        style={{ color: colors.primary }}
      >
        USDT
        <TextCom
          style={{ color: colors.backgroundSecondary }}
        >
          / TRX
        </TextCom>
      </TextCom>
    </View>
  )
}
export default ExchangeRate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: width - 24 * rate,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12 * rate,
  },
  contentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12 * rate,
    backgroundColor: colors.backgroundSecondary,
    paddingHorizontal: 12 * rate,
    height: 50 * rate,
    alignItems: 'center',
    borderRadius: 12,
  },
})
