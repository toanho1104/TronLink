import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, StatusBar,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { colors } from '../../assets/styles'
import { BackGroundCom, Line } from '../../components'
import Header from './components/header'
import ItemOption from './components/itemOption'
import { icons } from '../../assets/icons/index'
import { NavigationHelpers } from '../../utils'
import { screenName } from '../../configs/index'

const { width } = Dimensions.get('window')
const rate = width / 375
const MyScreen = () => {
  const handleToAboutUsScreen = () => {
    NavigationHelpers.navigateToScreen(screenName.AboutUsScreen)
  }

  return (
    <BackGroundCom>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[colors.primaryDark, colors.primaryLight]}
        style={styles.container}
      >
        <View style={{ height: getStatusBarHeight() }} />
        <Header />
        <View style={{
          flex: 1,
          backgroundColor: colors.backgroundPrimary,
          width,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          paddingHorizontal: 12 * rate,
          paddingTop: 20 * rate,
        }}
        >
          <ItemOption
            title="Public Account Management"
            icon={icons.public}
          />
          <ItemOption
            title="Shielded Account Management"
            icon={icons.shield}
          />
          <ItemOption
            title="History"
            icon={icons.history}
          />
          <Line style={styles.line} />
          <ItemOption
            title="Address Book"
            icon={icons.addressBook}
          />
          <ItemOption
            title="Friend invatation"
            icon={icons.friend}
          />
          <ItemOption
            title="Advanced Features"
            icon={icons.advanced}
          />
          <ItemOption
            title="Setting"
            icon={icons.setting}
          />
          <Line style={styles.line} />
          <ItemOption
            title="Announcement"
            icon={icons.announce}
          />
          <ItemOption
            title="Help Center"
            icon={icons.help}
          />
          <ItemOption
            onPress={handleToAboutUsScreen}
            title="About Us"
            icon={icons.infor}
          />
        </View>
      </LinearGradient>
    </BackGroundCom>
  )
}

export default MyScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  line: { marginVertical: 12 * rate },
})
