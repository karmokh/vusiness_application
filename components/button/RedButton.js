import React from 'react';
import DefaultButton from "./DefaultButton";
import c from '../../constants/Carima';

export default function RedButton(props) {
    return (
        <DefaultButton {...props} style={[props.style, c.bg_red]}/>
    );
}
