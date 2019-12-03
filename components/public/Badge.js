import React from 'react';

import View from "./MyView";
import Text from "./MyText";
import colors from "../../constants/Colors";

export default function Badge(props) {
    return (
        <View absolute w={20} h={20} top={3} right={10} z={10} center bg={props.color} bRadius={7}>
            <Text bold color={colors.white}>{props.number}</Text>
        </View>
    );
}
