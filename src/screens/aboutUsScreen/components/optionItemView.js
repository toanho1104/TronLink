import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import TextCom from '../../../components/textCom'
import IconCom from '../../../components/iconCom'
import { icons } from '../../../assets/icons'
import { colors } from '../../../assets/styles'

const { width } = Dimensions.get('window')
const rate = width / 375
const OptionItemView = ({ title }) => {
  return (
    <View style={styles.container}>
      <TextCom
        textPrimary
        linkTextNomarl
      >
        {title}
      </TextCom>
      <IconCom
        source={icons.next}
        style={styles.icon}
        tintColor={colors.backgroundSecondary}
      />
    </View>
  )
}

export default OptionItemView

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12 * rate,
    paddingVertical: 7 * rate,
  },
  icon: {
    width: 25 * rate,
    height: 25 * rate,
  },
})
