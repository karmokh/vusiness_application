import React from 'react';
import {Linking} from 'react-native';
import View from "../public/MyView";
import Text from "../public/MyText";
import Image from "../public/MyImage";
import Button from "../public/MyButton";
import colors from '../../constants/Colors';

export default function Support(props) {
    return (
        <View flex mh={10} p={10} bg={colors.white} center rounded shadow>
            <Image w={100} h={100} circle source={props.image}/>
            <Text mv={10} h6>{props.title}</Text>
            <Button w={100} h={30} bg={colors.blue} center bRadius={30} onPress={() => {
                Linking.openURL("tel:" + props.phone)
            }}>
                <Text color={colors.white} h6>{props.phone}</Text>
            </Button>
        </View>
    );
}