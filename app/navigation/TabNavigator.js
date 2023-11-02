import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import Dashboard from '../screens/Dashboard/Dashboard';
import {themeColor} from '../../theme';
import Home from '../screens/Home';
import Scan from '../screens/Scan';
import Search from '../screens/Search';
import Orders from '../screens/Orders';
import {
  HomeIcon,
  SignalIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentIcon,
  Bars3BottomLeftIcon
} from 'react-native-heroicons/outline';
import DashBoardStackScreen from './AppStack';
import DrawerNavigator from './DrawerNavigator';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
    initialRouteName='DashBoard'
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={() => ({
        
        tabBarStyle: {
          position: 'absolute',
          alignItems: 'center',
          height:60,
          backgroundColor:themeColor.offWhite
      },
    })}
      >
      <Tab.Screen
        name="DashBoard"
        // component={DrawerNavigator}
        component={Dashboard}
        options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Bars3BottomLeftIcon size="30" color={focused? themeColor.bg:themeColor.black} />
                
              </View>
            ),
          }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <HomeIcon size="30" color={focused? themeColor.bg:themeColor.black} />
              <Text>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <SignalIcon size="30" color={focused? themeColor.bg:themeColor.black} />
              <Text>Scan</Text>
            </View>
          ),
        }}
        component={Scan}
      />
      <Tab.Screen
        name="Search"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <MagnifyingGlassIcon size="30" color={focused? themeColor.bg:themeColor.black} />
              <Text>Search</Text>
            </View>
          ),
        }}
        component={Search}
      />
      <Tab.Screen
        name="Orders"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <ClipboardDocumentIcon size="30" color={focused? themeColor.bg:themeColor.black} />
              <Text>Orders</Text>
            </View>
          ),
        }}
        component={Orders}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: themeColor.offWhite,
  },
});
export default Tabs;
