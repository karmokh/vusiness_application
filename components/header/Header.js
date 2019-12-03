import React from 'react';
import View from '../public/MyView';
import MyText from "../public/MyText";
import colors from '../../constants/Colors.js';

export default function Header(props) {
    return (
        <View h={props.h ?? 60} {...props}>
            <View row>
                <View flex={3} ml={30}/>
                <View flex={4} mr={30} center>
                    <MyText pb={10} color={colors.dark} size={props.size ?? 16} textCenter>{props.title}</MyText>
                </View>
            </View>
            <View row w={props.w ?? 'full'} h={props.borderHeight ?? 5}>
                <View flex={4} ml={30} bg={colors.light}/>
                <View flex={2} bg={colors.orange}/>
                <View flex mr={30} bg={colors.light}/>
            </View>
        </View>
    );
}