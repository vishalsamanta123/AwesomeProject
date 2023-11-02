import { ScrollView,StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import {themeColor} from '../theme.js';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import React from 'react';
// import {useNavigation} from '@react-navigation/native';


const SignupScreen = () => {
  // const navigation = useNavigation();
  return (
    <ScrollView style={styles.viewStyle}>
      <SafeAreaView style={styles.safeAreaView}>
         <View style={styles.iconView}>
           <TouchableOpacity 
            onPress={()=>navigation.goBack()}
            style={styles.iconStyle}>
              <ArrowLeftIcon size={20} color="black"/>
           </TouchableOpacity>
         </View>
         <View style={styles.viewImage}>
            <Image style={styles.imageStyle} source={require('../assets/images/login.png')}/>
         </View>
      </SafeAreaView>

      <View style={styles.formView}>
        <View style={styles.formViewStyle}>
            <TextInput style={styles.formContent} placeholder="Enter name"></TextInput>
            <TextInput style={styles.formContent} placeholder="Enter email address"></TextInput>
            <TextInput style={styles.formContent} secureTextEntry placeholder="Enter password"></TextInput>
            <View style={styles.signStyle}>
               <TouchableOpacity style = {styles.touchStyle}>
                  <Text style={styles.touchTextStyle}>Sign Up</Text>
               </TouchableOpacity>
            </View>    
        </View>

        <Text style={styles.orStyle}>Or</Text>

       {/* icon section */}
         <View style={styles.iconViewStyle}>
            <TouchableOpacity style={styles.icon}>
                 <Image style={styles.iconSize} source={require('../assets/icons/google.png')}/>
            </TouchableOpacity >
            <TouchableOpacity style={styles.icon}>
                 <Image style={styles.iconSize} source={require('../assets/icons/apple.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
                 <Image style={styles.iconSize} source={require('../assets/icons/facebook.png')}/>
            </TouchableOpacity>
          </View>
        
        <View style={styles.loginStyle}>
          <Text style={{color:themeColor.textGray, fontWeight:'bold'}}>Already have an account ? </Text>
          <TouchableOpacity>
             <Text
              onPress={()=>navigation.navigate('Login')}
              style={{color: themeColor.signBgColor, fontWeight:'bold'}}>Login</Text>
          </TouchableOpacity>
         </View>
         

      </View>
    </ScrollView>
  )
}

export default SignupScreen;

const styles = StyleSheet.create({
    viewStyle : {
        flex:1,
        backgroundColor : themeColor.bg,
    },
    safeAreaView:{
        flex:1
    },
    iconView :{
        flexDirection: 'row', 
        justifyContent:'flex-start'
    },
    iconStyle : {
        backgroundColor : themeColor.signBgColor,
        width:50,
        padding : 12,
        borderTopRightRadius : 16,
        borderBottomLeftRadius : 16,
        marginTop: 5,
        marginLeft: 16,
    },
    viewImage : {
        flexDirection : 'row',
        justifyContent:"center",
    },
    imageStyle:{
        width: 325,
        height: 270,
    },
    formView : {
        flex :1,
        backgroundColor : themeColor.white,
        marginTop:10,
        paddingHorizontal: 8,
        paddingTop :35,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    formViewStyle : {
        marginLeft :20,
        marginRight : 10
        
    },
    textStyle:{
        color: themeColor.signColor ,
        marginLeft : 16
    },
    formContent : {
        padding : 16,
        backgroundColor : themeColor.gray,
        color : themeColor.signColor,
        borderRadius : 10,
        marginBottom :12,
        marginLeft: -15,
    },
    signStyle : {
         flexDirection : 'row',
         justifyContent: 'center'
    },
    touchStyle : {
        marginTop: 15,
        paddingVertical : 12,
        backgroundColor : themeColor.signBgColor,
        borderRadius : 10,
        width: 100,
    },
    touchTextStyle : {
        fontSize: 20,
        fontWeight : 'bold',
        textAlign : 'center'
    },
     orStyle : {
        fontSize : 20,
        color : themeColor.signColor,
        fontWeight: 'bold',
        textAlign : 'center',
        paddingTop : 10,
        marginBottom : 15
     },
     iconViewStyle : {
        flexDirection : 'row',
        justifyContent : 'space-around',
     },
     icon : {
        padding : 8,
        backgroundColor : themeColor.gray,
        borderRadius : 16
     },
     iconSize:{
        width : 60,
        height :60
     },

     loginStyle:{
        flexDirection : 'row',
        justifyContent : 'center',
        marginVertical : 28,
      },

})

