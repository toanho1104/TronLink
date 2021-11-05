import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { IconCom, TextCom } from '../../../../components'
import { icons } from '../../../../assets/icons'
import PreferenButton from './preferenceButton'

const { width } = Dimensions.get('window')
const rate = width / 375
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerCom}>
        <TextCom
          textPrimary
          style={styles.text}
        >
          Assets
        </TextCom>
        <TextCom>
          {' / '}
        </TextCom>
        <TextCom
          style={styles.text}
        >
          Collectibles
        </TextCom>
      </View>
      <View style={styles.headerCom}>
        <PreferenButton />
        <IconCom source={icons.addOn} style={styles.icon} />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerCom: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  icon: {
    width: 20 * rate,
    height: 20 * rate,
  },
  text: {
    fontSize: 17 * rate,
  },
})
