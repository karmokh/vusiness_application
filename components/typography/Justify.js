import React from 'react';
import DefaultText from "./DefaultText";
import c from '../../constants/Carima';

export default function Justify(props) {
    return (
        <DefaultText {...props} style={[props.style, c.ta_justify]}/>
    );
}
