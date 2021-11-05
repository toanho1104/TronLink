import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Shadows, colors } from '../../../../assets/styles'
import IconCom from '../../../../components/iconCom'
import { icons } from '../../../../assets/icons/index'
import TextCom from '../../../../components/textCom'
import { images } from '../../../../assets/images/index'
import ButtonCom from '../../../../components/buttonCom'

const { width } = Dimensions.get('window')
const rate = width / 375
const SwapControl = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewLeft}>
        <ItemTron
          icon={images.tronImage}
          title="TRX"
          content="from"
        />
      </View>

      <View style={styles.lineDashVertical} />

      <View style={styles.viewRight}>
        <ItemTron
          icon={images.usdtImage}
          title="USDT"
          content="To"
          end
        />
      </View>
      <View style={{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundSecondary,
        width: 50,
        height: 50,
        borderRadius: 50,
        right: width / 2 - 24 * rate - 11 * rate,
      }}
      >
        <IconCom
          source={icons.exchange}
          style={{ width: 20 * rate, height: 20 * rate }}
          tintColor={colors.primary}
        />
      </View>

    </View>
  )
}

const ItemTron = ({
  title, icon, content, end,
}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          width: 130 * rate,
          alignSelf: end ? 'flex-end' : 'flex-start',
        }}
      >
        <Image
          source={icon}
          style={{
            width: 40 * rate,
            height: 40 * rate,
            marginRight: 20 * rate,
          }}
        />
        <View>
          <View style={{ flexDirection: 'row' }}>
            <TextCom
              textPrimary
              contenTextBold
            >
              {title}
            </TextCom>
            <IconCom
              source={icons.dropDown}
              style={{ width: 20 * rate, height: 20 * rate }}
            />
          </View>
          <TextCom>{content}</TextCom>
        </View>

      </View>
      <TextCom
        style={{
          alignSelf: end ? 'flex-end' : 'flex-start',
        }}
      >
        0
      </TextCom>
      <TextInput
        style={{
          alignSelf: end ? 'flex-end' : 'flex-start',
        }}
        placeholder="Enter an amount"
      />
    </View>
  )
}

export default SwapControl

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: width - 24 * rate,
    height: 120 * rate,
    ...Shadows.shadowView,
    borderRadius: 10 * rate,
    padding: 12 * rate,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  viewLeft: {
    flex: 1,
    // borderWidth: 1,
    height: '100%',
  },
  viewRight: {
    flex: 1,
    // borderWidth: 1,
    height: '100%',
  },
  lineDashVertical: {
    borderRightWidth: 2,
    borderStyle: 'dashed',
    height: '80%',
    borderColor: colors.backgroundSecondary,
  },
  icon: {
    width: 40 * rate,
    height: 40 * rate,
  },
})
