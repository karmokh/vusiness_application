import React from 'react';
import RoundButton from "./RoundButton";
import c from '../../constants/Carima';

export default function GreenRoundButton(props) {
    return (
        <RoundButton {...props} style={[props.style, c.bg_green]}/>
    );
}
