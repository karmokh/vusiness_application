import React from 'react';
import {View} from 'react-native';
import c from '../../constants/Carima';

export default function ContainerFluid(props) {
    return (
        <View {...props} style={[props.style, c.dir_right]}/>
    );
}