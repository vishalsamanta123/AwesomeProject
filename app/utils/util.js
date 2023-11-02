import React from 'react';
import { Dimensions} from 'react-native';

const FULL_WIDTH = Dimensions.get('window').width;
const BASE_WIDTH = 360;

export const scale= (value, factor=0.4) => (value+(((FULL_WIDTH/BASE_WIDTH)*value)-value)*factor)