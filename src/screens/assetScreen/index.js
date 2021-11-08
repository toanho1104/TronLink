import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, StatusBar,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import LinearGradient from 'react-native-linear-gradient'
import { BackGroundCom, Line } from '../../components'

import Header from './components/header'
import Dashboard from './components/dashBoard/index'
import Button from './components/botton'
import { icons } from '../../assets/icons/index'
import TronList from './components/tronList/index'
import { colors } from '../../assets/styles'
import { NavigationHelpers } from '../../utils'
import { screenName } from '../../configs'

const { width } = Dimensions.get('window')
const rate = width / 375
const AssetScreen = () => {
  const handleToVoteScreen = () => {
    NavigationHelpers.navigateToScreen(screenName.VoteScreen)
  }

  return (
    <BackGroundCom>
      <View style={{ height: getStatusBarHeight() }} />
      <Header />
      <Line style={{ width }} />
      <View style={styles.space} />

      <Dashboard />
      <View style={styles.space} />
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: width - 24 * rate,
        justifyContent: 'space-between',
        marginVertical: 20,
      }}
      >
        <Button
          title="Send"
          icon={icons.send}
          tintColor={colors.primary}
        />
        <Button
          title="Receive"
          icon={icons.receive}
          tintColor={colors.primary}
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
          onPress={handleToVoteScreen}
          title="Vote"
          icon={icons.vote}
        />
      </View>
      <View>
        <TronList />
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
  space: {
    height: 10,
  },
})
