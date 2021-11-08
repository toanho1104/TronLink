import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import TextCom from '../../../../components/textCom'
import IconCom from '../../../../components/iconCom'
import { icons } from '../../../../assets/icons/index'
import { colors } from '../../../../assets/styles/index'

const { width } = Dimensions.get('window')
const rate = width / 375
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <TextCom
          style={styles.text}
          contenTextBold
        >
          My vote
        </TextCom>
        <TextCom
          // textPrimary
          contenTextBold
          style={{ color: colors.primary }}
        >
          Vote for SRs
        </TextCom>
      </View>
      <View style={styles.rightView}>
        <TouchableOpacity style={styles.button}>
          <IconCom source={icons.search} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <IconCom source={icons.sort} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    // borderWidth: 1,
    paddingHorizontal: 12 * rate,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12 * rate,
  },
  leftView: {
    flexDirection: 'row',
  },
  rightView: {
    flexDirection: 'row',
  },
  icon: {
    width: 18 * rate,
    height: 18 * rate,

  },
  text: { marginRight: 12 },
  button: {
    backgroundColor: colors.backgroundSecondary,
    marginLeft: 12,
    padding: 5,
    borderRadius: 50,
  },
})
