import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import IconCom from '../../../../components/iconCom'
import { icons } from '../../../../assets/icons/index'
import { colors } from '../../../../assets/styles/index'

const { width } = Dimensions.get('window')
const rate = width / 375
const SearchFeild = () => {
  return (
    <View style={styles.container}>

      <IconCom source={icons.search} style={styles.icon} />
      <TextInput style={styles.textInput} placeholder="Search name or url" />
    </View>
  )
}

export default SearchFeild

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12 * rate,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 20,
    height: 35,
  },
  textInput: {
    fontSize: 12,
  },
  icon: {
    width: 20 * rate,
    height: 20 * rate,
    marginLeft: 12 * rate,
  },
})
