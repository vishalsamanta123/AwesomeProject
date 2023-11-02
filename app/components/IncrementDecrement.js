import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { incrementNum, decrementNum } from '../redux/actions';

const IncrementDecrement = () => {
    const state = useSelector((state)=> state.changeTheNumber);
    const dispatch = useDispatch();
  return (
    <View>
      <Button title="Increment" onPress={() => dispatch(incrementNum())}/>
      <Text>{state}</Text>
      <Button title="Decrement" onPress={() => dispatch(decrementNum())}/>
    </View>
  )
}

export default IncrementDecrement

