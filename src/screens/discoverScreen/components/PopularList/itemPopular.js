import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { TextCom } from '../../../../components'
import { Shadows, colors } from '../../../../assets/styles'

const { width } = Dimensions.get('window')
const rate = width / 375
const ItemPopular = ({ item }) => {
  const { id, name, image } = item
  return (
    <View style={styles.container}>

      <FastImage source={image} style={styles.image} />

      <TextCom
        textPrimary
        style={styles.text}
        numberOfLines={1}
      >
        {name}
      </TextCom>
    </View>
  )
}

export default ItemPopular

const styles = StyleSheet.create({
  container: {
    width: '16%',
    marginLeft: 12 * rate,
    marginTop: 12 * rate,
    marginBottom: 12 * rate,
    alignItems: 'center',
    borderRadius: 12,
    // backgroundColor: colors.backgroundSecondary,
    borderWidth: 2 * StyleSheet.hairlineWidth,
    paddingVertical: 9,
    borderColor: colors.backgroundSecondary,
  },
  image: {
    width: 45 * rate,
    height: 45 * rate,
    borderRadius: 12,

  },
  text: {
    marginTop: 5 * rate,
  },
})
