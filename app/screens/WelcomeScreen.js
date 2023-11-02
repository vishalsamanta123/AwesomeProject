import { StyleSheet, Text, View , SafeAreaView, Image, TouchableOpacity} from 'react-native'
import React from 'react';
import {themeColor} from '../theme.js';
// import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
//   const navigation = useNavigation();
  return (
    <SafeAreaView style={style.lineStyle}>
       <View>
          <Text style={style.textStyle}> Let's get Started</Text>
       </View>
       <View>
          <Image style={style.imageStyle} source={require("../assets/images/welcome.png")}/>
       </View>
       <View>
         <TouchableOpacity 
           onPress={()=> navigation.navigate('Signup')}
           style={style.touchStyle}>
            <Text style={style.signStyle}>Sign Up</Text>
         </TouchableOpacity>
         <View style={style.viewStyle}>
          <Text style={{color:themeColor.white, fontWeight:'bold'}}>Already have an account ? </Text>
          <TouchableOpacity>
             <Text
              onPress={()=>navigation.navigate('Login')}
              style={{color: themeColor.signBgColor, fontWeight:'bold'}}>Log In</Text>
          </TouchableOpacity>
         </View>
       </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
     lineStyle:{
         flex:1,
         justifyContent : "center",
         alignItems : "center",
         backgroundColor : themeColor.bg,
     },
     textStyle :{
        fontSize: 40,
        fontWeight: 'bold',
        color: themeColor.white,
     },
     imageStyle :{
      width: 350,
      height: 350
     },
     signStyle :{
      fontSize : 24,
      fontWeight: "bold",
      color: themeColor.signColor,
      textAlign :'center'
     },
     touchStyle :{
      padding : 12,
      backgroundColor : themeColor.signBgColor,
      marginHorizontal : 28,
      borderRadius : 20
     },
     viewStyle:{
       flexDirection : 'row',
       justifyContent : 'center',
       marginVertical : 16,
     },

});

export default WelcomeScreen;

