import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import TextCom from '../../../components/textCom'
import IconCom from '../../../components/iconCom'
import { icons } from '../../../assets/icons/index'
import { colors } from '../../../assets/styles/index'

const { width } = Dimensions.get('window')
const rate = width / 375
const KeyBarView = () => {
  return (
    <View style={styles.container}>
      <TextCom
        textPrimary
        contenTextBold
      >
        ToanHo1104
      </TextCom>

      <View style={styles.rightView}>
        <TextCom
          numberOfLines={1}
          style={{ width: '90%' }}
        >
          dsafsafjitiejrTEDjeierikdjeijerijfdsojfaojfe
        </TextCom>
        <IconCom source={icons.copy} style={styles.icon} />
      </View>
    </View>
  )
}

export default KeyBarView

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 12 * rate,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width - 24 * rate,
    paddingVertical: 5 * rate,
    // borderWidth: 1,
    alignSelf: 'center',
  },
  rightView: {
    flexDirection: 'row',
    // alignItems: 'center',
    width: 150 * rate,
    // borderWidth: 1,
  },
  icon: {
    width: 15 * rate,
    height: 15 * rate,
    // width: '10%',
  },
})
