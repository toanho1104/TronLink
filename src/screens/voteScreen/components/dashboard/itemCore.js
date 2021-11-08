import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import TextCom from '../../../../components/textCom'
import IconCom from '../../../../components/iconCom'
import { icons } from '../../../../assets/icons'
import { colors } from '../../../../assets/styles'

const { width } = Dimensions.get('window')
const rate = width / 375
const ItemCore = ({ title, score }) => {
  return (
    <View style={styles.container}>
      <IconCom source={icons.point} tintColor={colors.primary} style={styles.icon} />
      <View>
        <TextCom>{title}</TextCom>
        <TextCom
          textPrimary
          contenTextBold
        >
          {score}
        </TextCom>
      </View>
    </View>
  )
}

export default ItemCore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    paddingVertical: 12 * rate,
  },
  icon: {
    width: 10 * rate,
    height: 10 * rate,
    marginTop: 6 * rate,
    marginRight: 10 * rate,
  },
})
