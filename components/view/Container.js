import React from 'react';
import ContainerFluid from "./ContainerFluid";
import c from '../../constants/Carima';

export default function Container(props) {
    return (
        <ContainerFluid {...props} style={[props.style, c.p_25]}/>
    );
}