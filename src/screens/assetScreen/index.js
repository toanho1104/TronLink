import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { BackGroundCom, Line } from '../../components'

import Header from './components/header'
import Dashboard from './components/dashBoard/index'
import Button from './components/botton'
import { icons } from '../../assets/icons/index'

const { width } = Dimensions.get('window')
const rate = width / 375
const AssetScreen = () => {
  return (
    <BackGroundCom>
      <Header />
      <Line style={{ width }} />

      <Dashboard />

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: width - 24 * rate,
        justifyContent: 'space-around',
        marginVertical: 10,
      }}
      >
        <Button
          title="Send"
          icon={icons.send}
        />
        <Button
          title="Receive"
          icon={icons.receive}
        />
        <Button
          title="Swap"
          icon={icons.swap}
        />
        <Button
          title="Freeze"
          icon={icons.freeze}
        />
        <Button
          title="Vote"
          icon={icons.vote}
        />
      </View>
      <View>
        {/* <Button title="Assets" />
        <Button title="Collectibles" /> */}
      </View>

    </BackGroundCom>

  )
}

export default AssetScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
