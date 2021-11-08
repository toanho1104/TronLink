import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../../../../assets/styles'
import TextCom from '../../../../components/textCom'

const { width } = Dimensions.get('window')
const rate = width / 375
const Button = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        {/* <View style={styles.line} /> */}
        <TextCom
          style={{ color: colors.textOnPrimary }}
        >
          {title}
        </TextCom>
      </View>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  item: {
    backgroundColor: colors.primaryDark,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  line: {
    borderTopWidth: 2,
    borderStyle: 'dashed',
    height: '80%',
    borderColor: colors.backgroundSecondary,
  },
})
