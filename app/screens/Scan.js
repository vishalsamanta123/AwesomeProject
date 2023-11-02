import { StyleSheet, Text, View } from 'react-native'
import { themeColor } from '../../theme'
import React from 'react'

const Scan = () => {
  return (
    <View style={styles.mainView}>
      <Text style={{color: 'white', fontSize:20}}>Scan</Text>
    </View>
  )
}

export default Scan

const styles = StyleSheet.create({
    mainView: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: themeColor.bg
    }
})