import React from 'react';
import DefaultText from "./DefaultText";
import c from '../../constants/Carima';

export default function H2(props) {
    return (
        <DefaultText {...props} style={[props.style, c.fs_36]}/>
    );
}
