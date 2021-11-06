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
const Header = () => {
  return (
    <View style={styles.container}>
      <TextCom
        textPrimary
        headingSmall
      >
        Game
      </TextCom>
      <TextCom
        textPrimary
        contenTextBold
        style={{ color: colors.primary }}
      >
        More
      </TextCom>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12 * rate,
    marginTop: 12 * rate,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
