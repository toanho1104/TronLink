import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, FlatList,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import Header from './header'
import { images } from '../../../../assets/images'
import ItemList from './itemlist'

const { width } = Dimensions.get('window')
const rate = width / 375
const TronList = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        style={{ width: width - 24 * rate }}
        data={data}
        extraData={data}
        keyExtractor={(item) => `tronList${item.id}`}
        renderItem={({ item, index }) => <ItemList item={item} />}
      />
    </View>
  )
}

export default TronList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: width - 24 * rate,
    // borderWidth: 1,
  },
})

const data = [
  {
    id: 1,
    name: 'TRC',
    image: images.tronImage,
    price: 0,
  },
  {
    id: 2,
    name: 'USDT',
    image: images.usdtImage,
    price: 0,
  },
]
