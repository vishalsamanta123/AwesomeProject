import {View, Text, StyleSheet, TouchableOpacity, Image, FlatList} from 'react-native';
import {FONT_FAMILY} from '../utils/constants';
import {themeColor} from '../../theme';
import {
  EllipsisHorizontalIcon,
  ChevronDownIcon,
} from 'react-native-heroicons/outline';
import React from 'react';
import {scale} from '../utils/util';
import  {data} from '../utils/vendorData';



const renderItems = (items) => {
  
  return (
    <View style={styles.outerViewStyle}>
      <Image
        style={styles.imageStyle}
        source={items.image}
      />
      <View style={styles.innerViewStyle}>
        <Text style={styles.textStyle}>{items.title}</Text>
        <Text style={styles.subTitleStyle}>{items.subTitle}</Text>
      </View>
    </View>
  );
};

const Vendors = props => {
  return (
    <View style={styles.box1}>
      <View style={styles.headingSection}>
        <Text style={styles.headingStyle}>{props.heading}</Text>
        <TouchableOpacity
          style={{flexDirection: 'column', justifyContent: 'center'}}>
          <EllipsisHorizontalIcon
            size="30"
            strokeWidth={2}
            color={themeColor.bg}
          />
        </TouchableOpacity>
      </View>
      <FlatList
         data={data}
         keyExtractor={(items)=> items.id}
         renderItem={({item}) => renderItems(item)}
      />
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
        <Text style={{color: themeColor.bg}}>Show All</Text>
        <TouchableOpacity style={{marginTop: 5, marginLeft: 10}}>
          <ChevronDownIcon size="10" strokeWidth={2} color={themeColor.bg} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  textStyle: {
    color: themeColor.black,
  },
  innerViewStyle: {
    flexDirection: 'column',
    paddingHorizontal: 15,
  },
  outerViewStyle: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 5,
  },
  dollarStyle: {
    fontSize: 20,
    marginTop: 20,
  },
  headingSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  headingStyle: {
    fontSize: 22,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    color: themeColor.black,
  },
  subTitleStyle: {
    fontSize: 12,
    fontWeight: 'normal',
    paddingTop: 3,
  },
  box1: {
    paddingBottom: scale(20),
    paddingTop: 20,
    paddingHorizontal: 20,
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
export default Vendors;
