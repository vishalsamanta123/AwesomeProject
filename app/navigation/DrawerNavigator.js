// import { createDrawerNavigator } from '@react-navigation/drawer';
// import React from 'react'
// import Dashboard from '../screens/Dashboard/Dashboard';
// import TotalItems from '../screens/TotalItems';
// import ScanCurrentInventory from '../screens/ScanCurrentInventory';
// import ScannerList from '../screens/ScannerList';
// import DrawerVendors from '../screens/DrawerVendors';
// import MyAccount from '../screens/MyAccount';
// import ManageScanner from '../screens/ManagerScanner';
// import HelpCenter from '../screens/HelpCenter';
// import SignOut from '../screens/SignOut';
// import CustomDrawer from '../components/CustomDrawer';
// import Tabs from './TabNavigator';

// const Drawer = createDrawerNavigator();

// const DrawerNavigator = () => {
//   return (
   
//     <Drawer.Navigator 
//       //  drawerContent={props => <CustomDrawer {...props} />}
//        initialRouteName='dashboard'
//        screenOptions = {{
//           headerShown: 'false',
//           drawerActiveBackgroundColor: 'white',
//           drawerActiveTintColor: '#fff',
//           drawerInactiveTintColor: '#333',
//           drawerLabelStyle: {
//           marginLeft: -25,
//           fontFamily: 'Roboto-Medium',
//           fontSize: 15,
//           }
//        }}
//        >
//         {/* <Drawer.Screen 
//            name="dashboard"
//            component={Dashboard}
//         /> */}
//         <Drawer.Screen 
//            name="dashboard"
//            component={Tabs}
//         />
//          <Drawer.Screen 
//            name="totalItems"
//            component={TotalItems}
//         />
//          <Drawer.Screen 
//            name="Scan"
//            component={ScanCurrentInventory}
//         />
//          <Drawer.Screen 
//            name="Scanner"
//            component={ScannerList}
//         />
//          <Drawer.Screen 
//            name="Vendors"
//            component={DrawerVendors}
//         />
//          <Drawer.Screen 
//            name="Account"
//            component={MyAccount}
//         />
//          <Drawer.Screen 
//            name="ManageScanner"
//            component={ManageScanner}
//         />
//          <Drawer.Screen 
//            name="Help"
//            component={HelpCenter}
//         />
//          <Drawer.Screen 
//            name="signout"
//            component={SignOut}
//         />
//     </Drawer.Navigator>
//   )
// }

// export default DrawerNavigator;

