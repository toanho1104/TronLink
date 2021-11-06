import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, ScrollView,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../../../../assets/styles/index'
import Header from './header'
import { data_products } from '../../../../configs/index'
import ItemList from './itemListGame'

const { width } = Dimensions.get('window')
const rate = width / 375
const OrderList = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        snapToInterval={285 * rate}
        horizontal
        style={styles.listGame}
      >
        <View style={{
          flexWrap: 'wrap',
          // borderWidth: 1,
        }}
        >
          {data_products.map((item) => <ItemList item={item} key={item.id} />)}
        </View>
      </ScrollView>
    </View>
  )
}

export default OrderList

const styles = StyleSheet.create({
  container: {
    width: width - 24 * rate,
    backgroundColor: colors.backgroundPrimary,
    marginTop: 12 * rate,
    borderRadius: 12,
  },
  listGame: {
    // borderWidth: 1,
    height: 260,
  },
})
