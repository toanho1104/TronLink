import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'

const { width } = Dimensions.get('window')
const rate = width / 375
const AboutUsScreen = () => {
  return (
    <View>
      <Text>aaaa</Text>
    </View>
  )
}

export default AboutUsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
