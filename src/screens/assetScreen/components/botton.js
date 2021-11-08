import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import IconCom from '../../../components/iconCom'
import { icons } from '../../../assets/icons/index'
import { colors } from '../../../assets/styles/index'
import TextCom from '../../../components/textCom'

const { width } = Dimensions.get('window')
const rate = width / 375
const Button = ({
  icon, title, tintColor, onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <IconCom
        source={icon}
        style={[styles.icon]}
        tintColor={tintColor}
      />
      <TextCom
        contenTextItalic
      >
        {title}
      </TextCom>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 60,
    justifyContent: 'center',
    width: 50 * rate,
    height: 50 * rate,
  },
  icon: {
    width: 15 * rate,
    height: 15 * rate,
  },
})
