import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, ScrollView,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import LinearGradient from 'react-native-linear-gradient'
import HeaderCom from '../../components/headerCom'
import { colors } from '../../assets/styles/index'
import KeyBarView from './components/keyBarView'
import DashBoardView from './components/dashboard'

const { width } = Dimensions.get('window')
const rate = width / 375
const VoteScreen = () => {
  return (
    <View style={styles.container}>

      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[colors.primaryDark, colors.primaryLight]}
        style={styles.container}
      >

        <View style={{ height: getStatusBarHeight() }} />
        <HeaderCom title="Vote" />
      </LinearGradient>

      <ScrollView style={styles.scrollView}>
        <LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[colors.primaryDark, colors.primaryLight]}
          style={{
            height: 115 * rate,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
        >

          <KeyBarView />
        </LinearGradient>
        <DashBoardView />
        <Text style={{ marginTop: 300 }}>vote</Text>
      </ScrollView>
    </View>
  )
}

export default VoteScreen

const styles = StyleSheet.create({
  container: {
  },
  scrollView: {
    // borderWidth: 1,
  },
})
