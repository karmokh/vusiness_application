import React from 'react';
import {Text} from 'react-native';

export default function IranSans(props) {
    return (
        <Text {...props} style={[props.style, {fontFamily: 'iran-sans', textAlign: 'right'}]}/>
    );
}
