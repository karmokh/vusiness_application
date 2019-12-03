import React from 'react';
import {Text, View} from 'react-native';
import Styles from "../constants/Styles";

export default function ProfileScreen() {
    return (
        <View style={Styles.CenterView}>
            <Text>تنظیمات</Text>
        </View>
    );
}

ProfileScreen.navigationOptions = {
    header: null,
};
