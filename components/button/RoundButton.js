import React from 'react';
import {Button} from "react-native";
import c from '../../constants/Carima';

export default function RoundButton(props) {
    return (
        <Button {...props} style={[props.style, c.ta_right, c.rounded_circle, {fontFamily: 'iran-sans'}]}/>
    );
}
