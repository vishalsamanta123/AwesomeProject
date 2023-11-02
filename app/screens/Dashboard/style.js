import {StyleSheet} from 'react-native';
import { FONT_FAMILY } from '../../utils/constants';
import { themeColor } from '../../../theme';
const styles = StyleSheet.create({
    textStyle: {
      fontSize: 25, 
      color: themeColor.black,
      fontFamily: FONT_FAMILY.BOLD
    },
    safeAreaViewStyle: {
      marginBottom: 8,
      paddingTop: 10,
    },
    scrollView: {
      flex: 1,
    },
    mainView: {
      flex: 1,
      backgroundColor: themeColor.offWhite,
    },
    innerView: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    wishStyle: {
      marginTop: 15,
      marginBottom: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    fontStyle: {
      fontSize: 20,
      fontFamily: FONT_FAMILY.SEMI_BOLD,
      color: themeColor.black
    },
    numberStyle: {
      fontSize: 50,
      marginTop: 10,
      marginBottom: 10,
      color: themeColor.bg,
    }
    
  });

  export default styles;