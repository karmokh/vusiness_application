import React from 'react';
import {Text, View} from 'react-native';
import Styles from "../constants/Styles";

export default function ChatScreen() {
    return (
        <View style={Styles.CenterView}>
            <Text>گفتگو</Text>
        </View>
    );
}

ChatScreen.navigationOptions = {
    header: null,
};