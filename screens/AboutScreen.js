import React from 'react';
import {Text, View} from 'react-native';
import Styles from "../constants/Styles";

export default function AboutScreen() {
    return (
        <View style={Styles.CenterView}>
            <Text>درباره</Text>
        </View>
    );
}

AboutScreen.navigationOptions = {
    header: null,
};