import React from 'react';
import {Button} from 'react-native';
import c from '../../constants/Carima';

export default function DefaultButton(props) {
    return (
        <Button {...props} style={[props.style, c.ta_right, c.rounded, {fontFamily: 'iran-sans'}]}/>
    );
}
