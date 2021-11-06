import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, FlatList,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { data_products } from '../../../../configs'
import ItemPopular from './itemPopular'
import { colors } from '../../../../assets/styles'
import Header from './header'

const { width } = Dimensions.get('window')
const rate = width / 375
const PopularList = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* <FlatList
        horizontal
        numColumns={2}
        data={data_products}
        extraData={data_products}
        keyExtractor={(item) => `listPup${item.id}`}
        renderItem={({ item, index }) => <ItemPopular item={item} />}
      /> */}
      <View style={styles.list}>
        {data_products.map((item) => <ItemPopular item={item} key={item.id} />)}
      </View>

    </View>
  )
}

export default PopularList

const styles = StyleSheet.create({
  container: {
    width: width - 24 * rate,
    backgroundColor: colors.backgroundPrimary,

    marginTop: 12 * rate,
    borderRadius: 12,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
