import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import {themeColor} from '../theme.js';
import React,{useState } from 'react';
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';
// import TrendingMovies from '../components/TrendingMovies.js';
// import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
    // const navigation= useNavigation();
    const [trending, setTrending] = useState([1,2,3]);
  return (
    <View style={styles.mainView}>
      <SafeAreaView style={{marginBottom:8, marginTop:8}}>
        <StatusBar style="light"/>
        <View style={styles.innerView}>
            <TouchableOpacity>
               <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white"/>
            </TouchableOpacity>
            <Text style={styles.fontStyle} >
                M<Text style={styles.textWhite}>ovies</Text>
            </Text>
            <TouchableOpacity>
               <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
           showsVerticalScrollIndicator={false} 
           contentContainerStyle={{paddingBottom: 10}}
      >
         {/* <TrendingMovies data={trending}/> */}
      </ScrollView>
    </View>
  )
};


const styles = StyleSheet.create({
    mainView : {
        flex:1,
        backgroundColor : themeColor.black,
    },
    innerView : {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems : 'center',
        
    },
    textWhite : {
        color : themeColor.white,
        fontSize : 24,
        fontWeight : 'bold'
    },
    fontStyle : {
        color: themeColor.yellow,
        fontSize : 24,
        fontWeight : 'bold'
    }
})
export default HomeScreen;