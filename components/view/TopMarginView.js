import React from 'react';
import {View} from 'react-native';
import c from '../../constants/Carima';

export default function TopMarginView(props) {
    return (
        <View {...props} style={[props.style, c.mt_30]}/>
    );
}