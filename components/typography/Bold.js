import React from 'react';
import DefaultText from "./DefaultText";
import c from '../../constants/Carima';

export default function Bold(props) {
    return (
        <DefaultText {...props} style={[props.style, c.fw_bold]}/>
    );
}
