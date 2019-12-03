import React from 'react';
import DefaultText from "./DefaultText";
import c from '../../constants/Carima';

export default function Italic(props) {
    return (
        <DefaultText {...props} style={[props.style, c.font_italic]}/>
    );
}
