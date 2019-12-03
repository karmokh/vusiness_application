import React from 'react';
import DefaultText from "./DefaultText";
import c from '../../constants/Carima';

export default function Small(props) {
    return (
        <DefaultText {...props} style={[props.style, c.fs_10]}/>
    );
}
