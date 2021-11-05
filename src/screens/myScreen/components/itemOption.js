import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { IconCom, TextCom } from '../../../components'
import { icons } from '../../../assets/icons/index'
import { colors } from '../../../assets/styles'

const { width } = Dimensions.get('window')
const rate = width / 375
const ItemOption = ({ title, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <IconCom
          source={icon}
          style={styles.iconLeft}
        />
        <TextCom
          textPrimary
        >
          {title}
        </TextCom>
      </View>
      <IconCom
        source={icons.next}
        style={styles.iconRight}
        tintColor={colors.backgroundSecondary}
      />
    </View>
  )
}

export default ItemOption

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40 * rate,
  },
  iconLeft: {
    width: 20 * rate,
    height: 20 * rate,
    marginRight: 20 * rate,
  },
  headerLeft: {
    flexDirection: 'row',
  },
  iconRight: {
    width: 15 * rate,
    height: 15 * rate,
  },
})
