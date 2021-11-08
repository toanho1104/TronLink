import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, FlatList,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import Header from './header'
import { vote_data } from '../../../../configs'
import ItemList from './itemList'

const { width } = Dimensions.get('window')
const rate = width / 375
const ListVote = () => {
  return (

    <View style={styles.container}>
      <Header />
      {vote_data.map((item) => <ItemList item={item} key={item.id} />)}

      {/* <FlatList
        data={vote_data}
        keyExtractor={(item) => `listVote${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Text>aaa</Text>
            </View>
          )
        }}
      /> */}
    </View>
  )
}

export default ListVote

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
  },
})
