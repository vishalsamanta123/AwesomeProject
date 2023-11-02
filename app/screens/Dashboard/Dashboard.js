import {
  StatusBar,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Bars3Icon, ChevronDoubleDownIcon} from 'react-native-heroicons/outline';
import {BellIcon} from 'react-native-heroicons/solid';
import Box from '../../components/Box';
import React from 'react';
import Vendors from '../../components/Vendors';
import Products from '../../components/Products';
import DotNotification from '../../components/DotNotification';
import styles from './style';
import Navbar from '../../components/Navbar';



const Dashboard = () => {
 
  return (
    <View style={styles.mainView}>
      <SafeAreaView style={styles.safeAreaViewStyle}>
        <StatusBar style="light" />
        <View style={styles.innerView}>
          <TouchableOpacity>
            <Bars3Icon size="30" strokeWidth={2} color="black" />
          </TouchableOpacity>
          <Text style={styles.fontStyle}>Laurie's Hallmark 1</Text>
          <TouchableOpacity>
            <ChevronDoubleDownIcon size="20" strokeWidth={2} color="black" />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity>
              <BellIcon size="30" strokeWidth={2} color="black" />
            </TouchableOpacity>
            <View style={{marginLeft: -15, marginTop: -1}}>
              <DotNotification />
            </View>
          </View>
        </View>
      </SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.wishStyle}>
          <Text style={styles.textStyle}>Good afternoon, Omar!</Text>
        </View>
        <Box
          heading="Total Scans"
          month="Last 3 months"
          figure="303"
          percent="5"
          isIcon={false}
        />
        <Box
          heading="Estimated Sales"
          month="Last 3 months"
          figure="101.03"
          percent="5"
          isIcon={true}
        />
        <Vendors heading="Top Vendors" />
        <Products heading="Best Selling Products" />
      </ScrollView>
      {/* <View>
         <Navbar /> 
      </View> */}
    </View>
  );
};

export default Dashboard;
