import React from 'react'
import {
  View, Dimensions, StyleSheet,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { SwiperFlatList, Pagination } from 'react-native-swiper-flatlist'
import { colors } from '../assets/styles/index'

const { width } = Dimensions.get('window')
const rate = width / 375
const Swiper = ({ data }) => {
  console.log(data)
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={5}
        autoplayLoop
        // index={3}
        showPagination
        autoplayInvertDirection
        PaginationComponent={CustomPagination}
        data={data}
        renderItem={({ item }) => {
          return (
            <SwiperItem item={item} />
          )
        }}
      />
    </View>
  )
}

const SwiperItem = ({ item }) => {
  console.log(item)
  return (
    <>
      <FastImage
        // source={image}
        source={item.image}
        style={styles.image}
        resizeMode="cover"
      />
    </>
  )
}

export default Swiper

const CustomPagination = (props) => {
  return (
    <Pagination
      {...props}
      paginationStyle={{
        // top: 20 * rate,
      }}
      paginationStyleItem={{
        width: 20 * rate,
        height: 5 * rate,
      }}
      paginationDefaultColor={colors.backgroundSecondary}
      paginationActiveColor={colors.primary}
    />
  )
}
const styles = StyleSheet.create({
  container: {
    height: 138 * rate,
    width: width - 24 * rate,
  },
  image: {
    borderRadius: 10 * rate,
    width: width - 24 * rate,
    height: 138 * rate,
  },
})
