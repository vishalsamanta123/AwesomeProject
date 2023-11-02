import {StyleSheet, Text, View} from 'react-native';
import {themeColor} from '../../theme';
import {ArrowTrendingUpIcon} from 'react-native-heroicons/outline';
import React from 'react';
import { FONT_FAMILY } from '../utils/constants';

const extractDigitFromNumber = (number)=> {
   const num = number.toString();
   const parts = num.split('.');
   const wholePart = parts[0];
   const decimalPart = parts[1] || "oo";
   return {wholePart, decimalPart}
};

const Box1 = props => {
 const {wholePart, decimalPart} = extractDigitFromNumber(props.figure);
  return (
    <View style={styles.box1}>
      <View>
          <View>
             <Text style={styles.headingStyle}>{props.heading}</Text>
             <Text style={styles.monthStyle}>{props.month}</Text>
           </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent:'center'}}>
        {props.isIcon? <Text style={styles.dollarStyle} >$</Text> :""}
        <Text style={styles.numberStyle}>{wholePart}</Text>
        {props.isIcon?<Text style={{fontSize: 30, marginLeft:3, marginTop: 30,color: themeColor.bg}}>.{decimalPart}</Text>:""}
      </View>
      <View style={{flexDirection: 'row', }}>
        <ArrowTrendingUpIcon size="20" strokeWidth={2} color={themeColor.bg} />
        <Text style={{color: themeColor.bg}}> Up to {props.percent}% </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   dollarStyle:{
    fontSize:20,
    marginTop:20
   },
    headingStyle: {
        fontSize: 22, 
        fontFamily: FONT_FAMILY.SEMI_BOLD,
        color: themeColor.black
    },
    monthStyle: {
        fontSize: 12,
        fontWeight: 'normal'
    },
  box1: {
    paddingBottom:20,
    paddingTop:10,
    paddingHorizontal:20,
    marginHorizontal: 30,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: themeColor.white,
    flexDirection: 'column',
    justifyContent: 'flex-start',
   
  },
  numberStyle: {
    fontSize: 50,
    marginTop: 10,
    marginBottom: 10,
    color: themeColor.bg,
  },
});

export default Box1;
