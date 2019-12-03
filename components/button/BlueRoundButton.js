import React from 'react';
import RoundButton from "./RoundButton";
import c from '../../constants/Carima';

export default function BlueRoundButton(props) {
    return (
        <RoundButton {...props} style={[props.style, c.bg_blue]}/>
    );
}
