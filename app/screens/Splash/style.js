import {StyleSheet} from 'react-native';
import { themeColor } from '../../../theme';
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

export default style;