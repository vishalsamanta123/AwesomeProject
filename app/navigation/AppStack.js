import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../screens/Dashboard/Dashboard';
import SplashScreen from '../screens/Splash/SplashScreen';
import React from 'react';
import {View, Text} from 'react-native';
import {themeColor} from '../../theme';
import Home from '../screens/Home';
import Scan from '../screens/Scan';
import Search from '../screens/Search';
import Orders from '../screens/Orders';
import TotalItems from '../screens/TotalItems';
import ScanCurrentInventory from '../screens/ScanCurrentInventory';
import ScannerList from '../screens/ScannerList';
import DrawerVendors from '../screens/DrawerVendors';
import MyAccount from '../screens/MyAccount';
import ManageScanner from '../screens/ManagerScanner';
import HelpCenter from '../screens/HelpCenter';
import SignOut from '../screens/SignOut';
import {
  HomeIcon,
  SignalIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentIcon,
  Bars3BottomLeftIcon,
} from 'react-native-heroicons/outline';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        options={{headerShown: false}}
        component={SplashScreen}
      />
      {/* <Stack.Screen
        name="TabNavigation"
        options={{headerShown: false}}
        component={Tabs}
      /> */}
      <Stack.Screen
          name="Drawernavigation"
          options={{headerShown: false}}
          component={DrawerNavigator}
        />        
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="DashBoard"
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={() => ({
        tabBarStyle: {
          position: 'absolute',
          alignItems: 'center',
          height: 60,
          backgroundColor: themeColor.offWhite,
        },
      })}>
      <Tab.Screen
        name="DashBoard"
        // component={DrawerNavigator}
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Bars3BottomLeftIcon
                size="30"
                color={focused ? themeColor.bg : themeColor.black}
              />
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
              <HomeIcon
                size="30"
                color={focused ? themeColor.bg : themeColor.black}
              />
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
              <SignalIcon
                size="30"
                color={focused ? themeColor.bg : themeColor.black}
              />
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
              <MagnifyingGlassIcon
                size="30"
                color={focused ? themeColor.bg : themeColor.black}
              />
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
              <ClipboardDocumentIcon
                size="30"
                color={focused ? themeColor.bg : themeColor.black}
              />
              <Text>Orders</Text>
            </View>
          ),
        }}
        component={Orders}
      />
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
   
    <Drawer.Navigator 
      //  drawerContent={props => <CustomDrawer {...props} />}
       initialRouteName='dashboard'
       screenOptions = {{
          headerShown: 'false',
          drawerActiveBackgroundColor: 'white',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
          }
       }}
       >
        <Drawer.Screen 
           name="dashboard"
           component={Tabs}
          //  component={Dashboard}
        />
        {/* <Drawer.Screen 
           name="dashboard"
           component={Tabs}
        /> */}
         <Drawer.Screen 
           name="totalItems"
           component={TotalItems}
        />
         <Drawer.Screen 
           name="Scan"
           component={ScanCurrentInventory}
        />
         <Drawer.Screen 
           name="Scanner"
           component={ScannerList}
        />
         <Drawer.Screen 
           name="Vendors"
           component={DrawerVendors}
        />
         <Drawer.Screen 
           name="Account"
           component={MyAccount}
        />
         <Drawer.Screen 
           name="ManageScanner"
           component={ManageScanner}
        />
         <Drawer.Screen 
           name="Help"
           component={HelpCenter}
        />
         <Drawer.Screen 
           name="signout"
           component={SignOut}
        />
    </Drawer.Navigator>
  )
}

export default AppStack;
