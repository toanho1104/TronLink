import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import Swiper from 'react-native-swiper'
import { SwiperCom } from '../../../../components'
import { images } from '../../../../assets/images/index'

const { width } = Dimensions.get('window')
const rate = width / 375
const SwiperList = () => {
  return (
    <View>
      <SwiperCom data={data} />
    </View>
  )
}

export default SwiperList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})

const data = [
  { image: images.p1 },
  { image: images.p2 },
  { image: images.p3 },
]
