import React from 'react';
import {View} from 'react-native';
import c from '../../constants/Carima';

export default function CenterView(props) {
    return (
        <View {...props} style={[props.style, c.center]}/>
    );
}