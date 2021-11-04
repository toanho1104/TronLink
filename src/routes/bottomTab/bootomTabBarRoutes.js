import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux'
import BottomTabBarCom from './bottomTabBar'
import { screenName } from '../../configs'
import {
  AssetScreen, DiscoverScreen, MarketScreen, MyScreen,

} from '../../screens'

const Tab = createBottomTabNavigator()
const BottomTabBarRoute = () => {
  // const language = useSelector((state) => state.storage.language)
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabBarCom {...props} />}
      screenOptions={{ headerShown: false }}

    >
      <Tab.Screen
        name={screenName.AssetScreen}
        component={AssetScreen}
        options={{ title: 'Assets' }}

      />
      <Tab.Screen
        name={screenName.MarketScreen}
        component={MarketScreen}
        options={{ title: 'Market' }}
      />
      <Tab.Screen
        name={screenName.DiscoverScreen}
        component={DiscoverScreen}
        options={{ title: 'Discover' }}
      />
      <Tab.Screen
        name={screenName.MyScreen}
        component={MyScreen}
        options={{ title: 'My' }}
      />

    </Tab.Navigator>
  )
}
export default BottomTabBarRoute
