import React from 'react';
import {View} from "react-native";
import c from '../../constants/Carima';

export default function Flex2(props) {
    return (
        <View {...props} style={[props.style, c.flex_2]}/>
    );
}
