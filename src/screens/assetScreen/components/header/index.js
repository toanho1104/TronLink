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

const { width } = Dimensions.get('window')
const rate = width / 375
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.maintext}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <TextCom
            headingMedium
            textPrimary
          >
            toanho
          </TextCom>
          <IconCom
            source={icons.next}
            style={styles.icon}
          />
        </View>
        <TextCom
          textSecondary
        >
          MainClain
        </TextCom>
      </View>
      <IconCom
        source={icons.add}
      />
      <View style={styles.space} />
      <IconCom source={icons.scan} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 12 * rate,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  maintext: {
    flex: 1,
  },
  icon: {
    width: 25 * rate,
    height: 25 * rate,
  },
  space: {
    width: 5 * rate,
  },
})
