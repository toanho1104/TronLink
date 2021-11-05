import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import IconCom from '../../../../components/iconCom'
import { icons } from '../../../../assets/icons/index'
import { TextCom } from '../../../../components'
import { colors } from '../../../../assets/styles'

const { width } = Dimensions.get('window')
const rate = width / 375
const PreferenButton = () => {
  return (
    <View style={styles.container}>
      <IconCom
        source={icons.sort}
        style={styles.icon}
      />
      <TextCom
        textPrimary
      >
        Preferen
      </TextCom>
    </View>
  )
}

export default PreferenButton

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 12 * rate,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    borderColor: colors.backgroundSecondary,
  },
  icon: {
    width: 13 * rate,
    height: 13 * rate,
  },
})
