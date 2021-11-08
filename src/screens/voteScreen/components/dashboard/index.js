import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../../../../assets/styles'
import ItemCore from './itemCore'
import Button from './button'

const { width } = Dimensions.get('window')
const rate = width / 375
const DashBoardView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemView}>
        <ItemCore title="Available TRX" score="0" />
        <ItemCore title="Available votes" score="0" />
      </View>
      <View style={styles.itemView}>
        <ItemCore title="Voted" score="0" />
        <ItemCore title="Unclaimed reward" score="0" />
      </View>
      <View style={styles.line} />
      <View style={styles.bottomView}>
        <Button title="Get votes" />
        <Button title="Claim reward" />
        <Button title="Batch votes" />
      </View>
    </View>
  )
}

export default DashBoardView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.backgroundPrimary,
    width: width - 24 * rate,
    alignSelf: 'center',
    borderRadius: 20,
    // height: 200,
    top: 30 * rate,
    position: 'absolute',
    paddingVertical: 12 * rate,
  },
  itemView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20 * rate,
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  line: {
    borderTopWidth: 2 * StyleSheet.hairlineWidth,
    borderStyle: 'dashed',
    // height: '80%',
    // borderColor: colors.backgroundSecondary,
    width: '95%',
    height: 20,
  },
})
