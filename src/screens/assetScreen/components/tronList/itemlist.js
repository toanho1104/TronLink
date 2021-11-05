import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { IconCom, TextCom } from '../../../../components'
import { images } from '../../../../assets/images'
import { icons } from '../../../../assets/icons'
import { colors } from '../../../../assets/styles'

const { width } = Dimensions.get('window')
const rate = width / 375
const ItemList = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemLeft}>
        <Image source={item.image} style={styles.images} />
        <TextCom
          textPrimary
          contenTextBold
        >
          {item.name}
        </TextCom>
        <IconCom
          source={icons.check}
          style={styles.icon}
          tintColor={colors.primaryLight}
        />
      </View>
      <View style={styles.itemRight}>
        <TextCom
          textPrimary
          contenTextBold
        >
          {item.price}
        </TextCom>
        <TextCom>
          =$ 0
        </TextCom>
      </View>
    </View>
  )
}

export default ItemList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 5,
  },
  images: {
    width: 30 * rate,
    height: 30 * rate,
    marginRight: 12,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemRight: {
    alignItems: 'flex-end',
  },
  icon: {
    width: 15 * rate,
    height: 15 * rate,
    marginLeft: 12,
  },
})
