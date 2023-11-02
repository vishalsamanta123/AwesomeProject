import {View, Text, StyleSheet, TouchableOpacity, Image, FlatList} from 'react-native';
import {FONT_FAMILY} from '../utils/constants';
import {themeColor} from '../../theme';
import {EllipsisHorizontalIcon} from 'react-native-heroicons/outline';
import { data } from '../utils/productData';
import React from 'react';

const renderItem=(items)=> {
   return(
    <View style={styles.outerViewStyle}>
      <Image
        style={styles.imageStyle}
        source={items.image}
      />
     <View style={styles.innerViewStyle}>
       <Text style={styles.textStyle}>{items.price}</Text>
       <Text style={styles.subTitleStyle}>{items.title}</Text>
     </View>
   </View>
   )
}

const Products = props => {
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
         renderItem={({item})=>renderItem(item)}
      />
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
        <TouchableOpacity>
          <Text style={{color: themeColor.bg}}>View All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  textStyle: {
    fontSize: 15,
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
    fontSize: 18,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
  },
  subTitleStyle: {
    fontSize: 12,
    fontWeight: 'normal',
    paddingTop: 3,
  },
  box1: {
    paddingBottom: 20,
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
export default Products;
