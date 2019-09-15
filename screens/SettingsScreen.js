import React from 'react';
import {Text, View} from 'react-native';
import Styles from "../constants/Styles";

export default function SettingsScreen() {
    return (
        <View style={Styles.CenterView}>
            <Text>تنظیمات</Text>
        </View>
    );
}

SettingsScreen.navigationOptions = {
    header: null,
};
