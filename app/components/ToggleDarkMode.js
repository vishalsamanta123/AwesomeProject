import React, {useState} from 'react';
import {View, Text, Switch, StatusBar, StyleSheet,Button} from 'react-native';

const mainView = {
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : isDarkMode ? '#333' : 'white'
   }

const text = {
    fontSize : 30,
    fontWeight : 'bold',
    color : isDarkMode ? 'white' : '#333' 
   }

   const textContent = {
      color : isDarkMode ? 'white' : '#333'
   }
const [isDarkMode , setDarkMode] = useState(false);
const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
}

const ToggleDarkMode = () => {
    return(
        <View style={mainView}>
        <Text style={text}>Toggle Theme</Text>
        <Switch value={isDarkMode} onChange={toggleDarkMode}/>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
       
     <View>
        <Text style={textContent}>
         It helps the designer plan where the content will sit. It helps in creating drafts of the content on the pages of the website. It originates from the Latin text but is seen as gibberish.
         Sometimes, the reader gets distracted while creating or working on the website. That’s why this language is important.
         This tool makes the work easier for the webmaster.
        </Text>
     </View>
 
   </View>
 
    )
}

export default ToggleDarkMode;