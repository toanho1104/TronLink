import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import TextCom from '../../../../components/textCom'
import { colors } from '../../../../assets/styles'

const { width } = Dimensions.get('window')
const rate = width / 375
const ItemList = ({ item }) => {
  const { name, price, rate } = item
  return (
    <View style={styles.container}>
      <View style={{

      }}
      >
        <View style={{}}>
          <View style={{
            flexDirection: 'row',
          }}
          >
            <View style={{
              backgroundColor: '#f0a902',
              paddingHorizontal: 8,
              borderRadius: 10,
            }}
            >
              <TextCom>
                NO.
                {item.id}

              </TextCom>
            </View>
            <TextCom
              textPrimary
            >
              {'     '}
              {name}
            </TextCom>
          </View>

          <TextCom style={{ marginTop: 2 * rate }}>
            {price}
          </TextCom>
        </View>
      </View>

      <View>
        <TextCom
          style={{
            alignSelf: 'flex-end',
            color: colors.primary,
          }}
          headingSmall
        >
          {rate}
          %
        </TextCom>
        <TextCom style={{ marginTop: 2 * rate }}> Estimated Yield</TextCom>
      </View>
    </View>
  )
}

export default ItemList

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    paddingHorizontal: 12 * rate,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12 * rate,
    backgroundColor: colors.backgroundPrimary,
    marginBottom: 12 * rate,
    width: width - 24 * rate,
    alignSelf: 'center',
    borderRadius: 12,
  },
})
