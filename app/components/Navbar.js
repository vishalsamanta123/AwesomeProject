import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {HomeIcon, SignalIcon,MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {ClipboardDocumentIcon} from 'react-native-heroicons/solid'
import { themeColor } from '../../theme';
import React from 'react'

const Navbar = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.innerView}>
         <TouchableOpacity>
           <HomeIcon size='30'  color={themeColor.bg}/>
         </TouchableOpacity>
         <View>
           <Text>Home</Text>
         </View>
      </View>
      <View style={styles.innerView}>
        <TouchableOpacity>
           <SignalIcon size='30'  color="black"/>
        </TouchableOpacity>
          <Text>Scan</Text>
      </View>
      <View style={styles.innerView}>
         <TouchableOpacity>
            <MagnifyingGlassIcon size='30'  color="black"/>
         </TouchableOpacity>
         <Text>Search</Text>
      </View>
      <View style={styles.innerView}>
        <TouchableOpacity>
           <ClipboardDocumentIcon size='30'  color="black"/>
        </TouchableOpacity>
         <Text>Orders</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainView: {
       flexDirection: 'row',
       justifyContent:'space-evenly',
       paddingVertical: 10
    },
    innerView: {
        flexDirection:'column',
        alignItems:'center', 
        justifyContent: 'center'
    },

})
export default Navbar;
