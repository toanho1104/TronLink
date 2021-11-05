import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../../../../assets/styles/index'
import TextCom from '../../../../components/textCom'
import IconCom from '../../../../components/iconCom'
import { icons } from '../../../../assets/icons/index'
import ProCessCom from '../../../../components/proCessCom'

const { width } = Dimensions.get('window')
const rate = width / 375
const Dashboard = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={[colors.primaryDark, colors.primaryLight]}
      style={styles.container}
    >
      <Header />
      <Body />
      <Footer />
    </LinearGradient>
  )
}

const Header = () => {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: '20%',
    }}
    >
      <View style={{ flexDirection: 'row', maxWidth: 250 * rate }}>
        <View
          opacity={0.8}
        >
          <TextCom
            numberOfLines={1}
          >
            ajflajfljlafljlajs asdfadfsasdffjalfjlasdfassdfsdfsdfdsfdsfdsfdsdfasdfasdfjsf
          </TextCom>
        </View>
        <IconCom
          source={icons.copy}
          style={{ width: 20, height: 20 }}
          tintColor={colors.backgroundPrimary}
        />
      </View>

      <IconCom
        source={icons.show}
        tintColor={colors.backgroundPrimary}
      />
    </View>
  )
}
const Body = () => {
  return (
    <View style={{ width: '100%', height: '50%', justifyContent: 'center' }}>
      <TextCom
        textOnPrimary
        headingLarge
        style={{ width: '100%' }}
      >
        0 TRX
      </TextCom>
      <TextCom
        textOnPrimary
        style={{ width: '100%' }}
      >
        =$ 0
      </TextCom>
    </View>
  )
}
const Footer = () => {
  return (
    <View style={{
      width: '100%', height: '30%', flexDirection: 'row', justifyContent: 'space-between',
    }}
    >

      <ProCessDashBoard title="Energy" />
      <ProCessDashBoard title="Bandwidth" />
    </View>
  )
}
const ProCessDashBoard = ({ title }) => {
  return (
    <View style={{ width: '40%' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ marginBottom: 5 * rate }}>
          <TextCom
            textOnPrimary
          >
            {title}
          </TextCom>
        </View>
        <View>
          <TextCom
            textOnPrimary
          >
            0/0
          </TextCom>
        </View>
      </View>
      <ProCessCom />
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: width - 24 * rate,
    height: 170 * rate,
    borderRadius: 25 * rate,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
})
