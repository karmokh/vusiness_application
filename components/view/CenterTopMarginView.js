import React from 'react';
import {View} from 'react-native';
import c from '../../constants/Carima';

export default function CenterTopMarginView(props) {
    return (
        <View {...props} style={[c.center, c.mt_30]}/>
    );
}