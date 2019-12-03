import React from 'react';
import {Text} from 'react-native';
import c from '../../constants/Carima';

export default function DefaultText(props) {
    return (
        <Text {...props} style={[props.style, c.ta_right, {fontFamily: 'iran-sans'}]}/>
    );
}
