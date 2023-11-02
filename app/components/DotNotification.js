import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { themeColor } from '../../theme'

const DotNotification = () => {
  return (
    <View style={styles.mainView}>
         <Text style={{color:'white', fontSize: 8}}>1</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    mainView: {
        justifyContent:'center',
        alignItems: 'center',
        width:12,
        height:12,
        borderRadius: 50,
        backgroundColor: themeColor.red
    }
})

export default DotNotification;