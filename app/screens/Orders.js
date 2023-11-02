import { StyleSheet, Text, View } from 'react-native'
import { themeColor } from '../../theme'
import React from 'react'

const Orders = () => {
  return (
    <View style={styles.mainView}>
      <Text style={{color: 'white', fontSize:20}}>Orders</Text>
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
    mainView: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: themeColor.bg
    }
})