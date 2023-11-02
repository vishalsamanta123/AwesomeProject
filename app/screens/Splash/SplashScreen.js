import { StyleSheet, Text, View , SafeAreaView, Image, TouchableOpacity} from 'react-native'
import React, {useEffect} from 'react';
import { themeColor } from '../../../theme';
import {useNavigation} from '@react-navigation/native';
import style from './style';


const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Drawernavigation');
    }, 2000); 

    return () => {
      clearTimeout(timeout); 
    };
  }, [navigation]);
  return (
    <SafeAreaView style={style.lineStyle}>
       <View>
          <Text style={style.textStyle}> Let's get Started</Text>
       </View>
    </SafeAreaView>
  )
}

export default SplashScreen;

