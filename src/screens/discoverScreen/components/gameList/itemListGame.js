import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import TextCom from '../../../../components/textCom'
import { colors } from '../../../../assets/styles'

const { width } = Dimensions.get('window')
const rate = width / 375
const ItemList = ({ item }) => {
  const { image, name, content } = item
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FastImage source={image} style={styles.image} />
        <View style={{ marginLeft: 12 }}>
          <TextCom textPrimary contenTextBold>{name}</TextCom>
          <TextCom contenTextItalic numberOfLines={2} style={{ width: 150 * rate }}>{content}</TextCom>
        </View>
      </View>
    </View>
  )
}

export default ItemList

const styles = StyleSheet.create({
  container: {
    width: 270 * rate,
    padding: 2,
    marginTop: 12 * rate,
    marginLeft: 12 * rate,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 20,
  },
  image: {
    width: 60 * rate,
    height: 60 * rate,
    borderRadius: 20,
  },
})
